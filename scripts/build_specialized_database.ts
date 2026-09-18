import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set in environment or .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

interface GeneratedQuestion {
  id: string;
  part: number;
  topic: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  question: string;
  choices: string[];
  options: string[];
  correctAnswer: number;
  explanation: string;
  source: 'Ancien examen' | 'Générée';
}

interface PartSpec {
  name: string;
  topicPrefix: string;
  batches: { topic: string; prompt: string }[];
}

export const PART_SPECS: Record<number, PartSpec> = {
  1: {
    name: "Réseaux informatiques",
    topicPrefix: "Réseaux",
    batches: [
      {
        topic: "Modèle OSI & TCP/IP",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Le modèle OSI (7 couches: Physique, Liaison, Réseau, Transport, Session, Présentation, Application), le modèle TCP/IP (4 couches), les PDU (trame, paquet, segment), l'encapsulation/décapsulation, Ethernet (802.3), adresses MAC, détection d'erreurs CRC."
      },
      {
        topic: "IPv4, IPv6 & Adressage/Subnetting",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: IPv4 (format 32 bits, classes A/B/C/D/E, adresses privées RFC 1918, loopback 127.0.0.1, broadcast), Masques de sous-réseau et CIDR, Calculs de subnetting (nombre d'hôtes, adresse réseau, adresse de diffusion), IPv6 (format 128 bits, hexadécimal, notation compressée, unicast, multicast, anycast, SLAAC)."
      },
      {
        topic: "Routage, Commutation & Protocoles LAN",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Routage IP (tables de routage, métriques, passerelle par défaut, protocoles RIP, OSPF état des liens, BGP), Commutation (Switch, apprentissage des tables MAC, broadcast storm, VLAN IEEE 802.1Q, trunking), ARP (Address Resolution Protocol, cache ARP, requêtes broadcast/réponses unicast), ICMP (ping, traceroute/TTL), DHCP (processus DORA), DNS (serveurs racines, TLD, enregistrements A, AAAA, CNAME, MX)."
      },
      {
        topic: "Transport, Ports, NAT & Protocoles Applicatifs",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Couche Transport TCP vs UDP (orienté connexion vs non-connecté, 3-way handshake SYN/SYN-ACK/ACK, flags FIN/RST, numéros de séquence, fenêtres glissantes, contrôle de flux et congestion), Numéros de ports standards (HTTP 80, HTTPS 443, SSH 22, DNS 53, DHCP 67/68, FTP 20/21, SMTP 25), NAT et PAT (traduction d'adresses/ports, IP masquerading), HTTP 1.1 vs HTTP/2, Wi-Fi 802.11 (CSMA/CA, WPA2/WPA3, SSID), Pare-feu (filtrage de paquets, pare-feu avec état SPI)."
      }
    ]
  },
  2: {
    name: "Bases de données, SQL et Oracle",
    topicPrefix: "Bases de Données & SQL",
    batches: [
      {
        topic: "Modèle Relationnel & Algèbre Relationnelle",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Concepts des SGBD relationnels, Tables, Schémas, Domaines, Clés primaires, Clés candidates, Clés étrangères (Foreign Keys), Contraintes d'intégrité (NOT NULL, UNIQUE, CHECK, PRIMARY KEY, FOREIGN KEY ON DELETE CASCADE/SET NULL), Algèbre relationnelle (sélection σ, projection π, jointure naturelle ⋈, produit cartésien, union, différence, division relationnelle)."
      },
      {
        topic: "Dépendances Fonctionnelles & Normalisation",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Dépendances fonctionnelles (DF, axiomes d'Armstrong: réflexivité, augmentation, transitivité, fermeture d'un ensemble d'attributs X+), Clés candidates déduites des DF, 1ère Forme Normale (1NF - atomicité des valeurs), 2ème Forme Normale (2NF - dépendance élémentaire), 3ème Forme Normale (3NF - non-transitivité des dépendances), Forme Normale de Boyce-Codd (BCNF/FNBC - pour tout X->Y, X est super-clé), Décomposition sans perte d'information et préservation des dépendances."
      },
      {
        topic: "Langage SQL (DQL, DDL, DML & Jointures)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Requêtes SQL SELECT, filtrage WHERE (LIKE, IN, BETWEEN, IS NULL, AND, OR, NOT), Tri ORDER BY ASC/DESC, Agrégation GROUP BY et clause HAVING, Fonctions d'agrégation (COUNT, SUM, AVG, MIN, MAX), Jointures SQL (INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, CROSS JOIN, SELF JOIN), Sous-requêtes (scalaires, corrélées, clauses IN, ANY, ALL, EXISTS), Opérateurs d'ensembles (UNION, UNION ALL, INTERSECT, MINUS/EXCEPT), Commandes DDL (CREATE TABLE, ALTER TABLE, DROP, TRUNCATE) et DML (INSERT, UPDATE, DELETE)."
      },
      {
        topic: "Transactions, Index, Vues & PL/SQL Oracle",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Transactions et propriétés ACID (Atomicité, Cohérence, Isolation, Durabilité), Commandes transactionnelles (COMMIT, ROLLBACK, SAVEPOINT), Niveaux d'isolation (Read Uncommitted, Read Committed, Repeatable Read, Serializable) et anomalies (Dirty Read, Non-repeatable Read, Phantom Read), Index (B-Tree, Bitmap, clustered vs unclustered), Vues et vues matérialisées; PL/SQL Oracle (structure de bloc DECLARE/BEGIN/EXCEPTION/END, curseurs explicites et boucle FOR cur IN, Triggers BEFORE/AFTER INSERT/UPDATE/DELETE FOR EACH ROW :OLD/:NEW, Séquences SEQUENCE.NEXTVAL, Procédures stockées et Fonctions, Packages Oracle, gestion des exceptions NO_DATA_FOUND, TOO_MANY_ROWS)."
      }
    ]
  },
  3: {
    name: "Programmation C",
    topicPrefix: "Programmation C",
    batches: [
      {
        topic: "Syntaxe, Types & Opérateurs C",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur la Programmation C: Types de données de base (char, int, short, long, float, double), Modificateurs (signed, unsigned, const, volatile, static, register, extern), Opérateurs bit-à-bit (&, |, ^, ~, <<, >>), Priorité et associativité des opérateurs (ex: *p++, ++*p), Structures de contrôle (if/else, switch/case avec break/fallthrough, boucles for, while, do-while), Entrées/sorties standards (printf spécificateurs %d, %u, %x, %f, %s, %p, scanf avec opérateur d'adresse &)."
      },
      {
        topic: "Tableaux, Chaînes & Fonctions en C",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur la Programmation C: Tableaux unidimensionnels et bidimensionnels (indexation à partir de 0, initialisation, calcul d'indices), Chaînes de caractères en C (terminateur nul '\\0', littéraux de chaînes), Fonctions de <string.h> (strlen, strcpy, strncpy, strcmp, strcat, strstr), Fonctions C (prototypes, portée des variables locales/globales/statiques, passage d'arguments par valeur), Récursivité en C (cas de base, pile d'appels, analyse de code récursif court)."
      },
      {
        topic: "Pointeurs, Arithmétique & Pointeurs de Fonctions",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur la Programmation C: Pointeurs (déclaration int *p, opérateur d'adresse &, déréférencement *), Arithmétique des pointeurs (incrémentation p++, addition p + i, différence entre pointeurs du même type), Équivalence entre pointeurs et tableaux (*(tab + i) == tab[i], décomposition en pointeur/decay), Pointeurs de pointeurs (int **ptr), Passage de paramètres par pointeurs (simulation du passage par référence, swap), Pointeurs génériques (void*), Pointeurs constants vs pointeurs vers constante (const int * vs int * const), Pointeurs de fonctions (déclaration, affectation, appel, callback comme dans qsort)."
      },
      {
        topic: "Allocation Dynamique, Structures, Fichiers & Préprocesseur",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur la Programmation C: Allocation dynamique avec <stdlib.h> (malloc, calloc, realloc, free, vérification du retour NULL, fuites de mémoire, double free, dangling pointer, use-after-free), Structures (mot-clé struct, typedef, opérateur d'accès point . et flèche ->, alignement mémoire/padding sizeof(struct)), Unions (partage de mémoire, taille égale au plus grand membre), Énumérations (enum), Préprocesseur C (#include, #define constantes et macros fonctionnelles, pièges des parenthèses dans les macros, #ifdef, #ifndef, #pragma once, include guards), Entrées/sorties fichiers (<stdio.h>, FILE*, fopen modes r/w/a/r+b, fclose, fread, fwrite, fprintf, fscanf, feof), Processus de compilation gcc (préprocesseur, compilateur, assembleur, éditeur de liens/linker)."
      }
    ]
  },
  4: {
    name: "Programmation Java et POO",
    topicPrefix: "Java & POO",
    batches: [
      {
        topic: "Bases de Java, Classes & Objets",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Types primitifs (byte, short, int, long, float, double, char, boolean) vs classes enveloppes (Wrappers: Integer, Double, autoboxing/unboxing), Méthodes equals() vs opérateur ==, Méthode toString(), hashCode(), Classes et Objets en Java, Constructeurs (par défaut, surcharge de constructeurs, appel this(), interdiction de return), Cycle de vie des objets, Mémoire Stack (variables locales) vs Heap (instances d'objets), Passage de paramètres en Java (toujours par valeur, référence copiée par valeur)."
      },
      {
        topic: "Piliers de la POO en Java (Encapsulation, Héritage, Polymorphisme, Abstraction)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Encapsulation (modificateurs d'accès public, protected, private, package-private/défaut), Héritage (mot-clé extends, héritage simple de classe, constructeur super()), Surcharge (Overloading: même nom, signatures différentes) vs Redéfinition (Overriding: même signature, annotation @Override, liaison dynamique/late binding, visibilité non réductible, covariance du type de retour), Abstraction (classes abstraites, méthodes abstraites, mot-clé abstract, instanciation interdite), Interfaces (mot-clé interface, implements, méthodes abstraites, méthodes par défaut default, méthodes static dans interfaces depuis Java 8, héritage multiple d'interfaces)."
      },
      {
        topic: "Mots-clés Java, Exceptions & Lambdas",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Mots-clés spéciaux (static: variables de classe, méthodes de classe, blocs statiques; final: variable constante, méthode non redéfinissable, classe non dérivable; this et super), Gestion des exceptions en Java (hiérarchie: Throwable -> Error vs Exception; Exceptions vérifiées/checked vs non vérifiées/unchecked/RuntimeException; blocs try, catch, finally; mot-clé throw vs throws; bloc try-with-resources et interface AutoCloseable), Interfaces fonctionnelles (annotation @FunctionalInterface, lambdas, Comparator, Comparable et méthode compareTo, Predicate, Consumer, Function, Supplier)."
      },
      {
        topic: "Collections Java, Threads & JVM",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Java Collections Framework (hiérarchie Collection, Iterable, Iterator), List (ArrayList vs LinkedList, accès indexé, complexités temporelles), Set (HashSet unicité, LinkedHashSet, TreeSet trié avec arbre rouge-noir), Map (HashMap clé-valeur, gestion des collisions, LinkedHashMap, TreeMap), Notions de concurrence et Threads (classe Thread, interface Runnable, mot-clé synchronized, wait(), notify(), interblocages), Architecture JVM (JDK, JRE, JVM, ClassLoader, Bytecode, Garbage Collector: arrêt du monde, heap eden/survivor/tenured, méthode System.gc(), finalisation obsolète)."
      }
    ]
  },
  5: {
    name: "Algorithmique et structures de données",
    topicPrefix: "Algorithmique & Données",
    batches: [
      {
        topic: "Complexité Asymptotique & Récurrences",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Notations asymptotiques (Grand-O O(n) borne supérieure, Grand-Oméga Ω(n) borne inférieure, Grand-Thêta Θ(n) borne exacte, petit-o, petit-oméga), Comparaison des classes de complexité (O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)), Calcul de complexité de boucles imbriquées, Relations de récurrence (méthode de substitution, arbre de récursion, Théorème Maître / Master Theorem pour T(n) = aT(n/b) + f(n)), Complexité spatiale (mémoire auxiliaire, pile d'appels récursifs)."
      },
      {
        topic: "Structures de Données Linéaires (Tableaux, Listes, Piles, Files)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Tableaux statiques vs dynamiques (coût d'insertion, d'accès direct O(1)), Listes chaînées (simplement chaînées, doublement chaînées, circulaires; complexité de l'insertion et suppression en tête O(1), en queue O(n) ou O(1) avec pointeur tail, au milieu O(n); gestion des pointeurs next et prev), Piles (Stack, principe LIFO - Dernier Arrivé Premier Sorti; opérations push, pop, peek en O(1); applications: parenthésage équilibré, évaluation d'expressions postfixes/RPN, pile d'appels), Files (Queue, principe FIFO - Premier Arrivé Premier Sorti; opérations enqueue, dequeue en O(1); implémentation avec tableau circulaire ou liste chaînée; Deque file à double extrémité; file de priorité / Priority Queue)."
      },
      {
        topic: "Arbres, BST, Tas & Tables de Hachage",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Vocabulaire des arbres (racine, feuille, nœud interne, arête, degré, hauteur, profondeur, arbre binaire complet, arbre binaire parfait), Parcours d'arbres (parcours en profondeur DFS: préfixe, infixe - trie les éléments d'un BST, postfixe; parcours en largeur BFS), Arbres Binaires de Recherche (BST: propriété fondamentale clé(gauche) < clé(racine) < clé(droite); recherche, insertion, suppression de nœud avec 0, 1 ou 2 enfants; complexité moyenne O(log n), pire cas O(n)), Arbres équilibrés (arbres AVL: facteur d'équilibre {-1, 0, 1}, rotations simples et doubles gauche/droite, hauteur O(log n)), Tas binaires (Heaps: Max-Heap et Min-Heap; propriété de tas, représentation compacte en tableau; opérations heapify, insert, extract-min en O(log n)), Tables de hachage (fonction de hachage, collisions: résolution par chaînage séparé vs adressage ouvert: sondage linéaire/quadratique/double hachage; facteur de charge α; complexité moyenne O(1) vs pire cas O(n))."
      },
      {
        topic: "Algorithmes de Tri, Graphes & Paradigmes",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Algorithmes de tri (Tri à bulles O(n^2), Tri par sélection O(n^2), Tri par insertion O(n^2) efficace pour petites listes quasi-triées, Tri fusion / Merge Sort O(n log n) stable, Tri rapide / Quick Sort O(n log n) moyen et O(n^2) pire cas, stabilité des tris); Graphes (représentations: matrice d'adjacence vs liste d'adjacence, parcours BFS avec file et DFS avec pile/récursion, détection de cycle, tri topologique pour DAGs); Plus court chemin (Dijkstra pour poids positifs avec file de priorité, Bellman-Ford pour poids négatifs); Arbres couvrants minimaux (Kruskal avec Union-Find, Prim); Paradigmes de conception (Diviser pour régner, Algorithmes gloutons comme rendu de monnaie ou codage de Huffman, Programmation dynamique: sous-structure optimale, chevauchement de sous-problèmes, mémoïsation top-down vs tabulation bottom-up, problème du sac à dos / knapsack)."
      }
    ]
  },
  6: {
    name: "Systèmes d’exploitation et Linux/Unix",
    topicPrefix: "Systèmes d’Exploitation & Linux",
    batches: [
      {
        topic: "Architecture de l'OS & Processus",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Rôle et architecture du SE, Modes d'exécution CPU (mode utilisateur vs mode noyau/kernel mode, anneaux de protection), Interruptions matérielles vs logicielles (traps, exceptions), Appels système (syscalls: transition de mode), Processus (définition, espace d'adressage virtuel: texte, données, heap, pile/stack; Bloc de Contrôle de Processus PCB; états d'un processus: nouveau, prêt, élu/en exécution, bloqué, terminé; diagramme de transition d'états; commutation de contexte / context switch), Gestion des processus sous Unix (appels système fork(), execve(), wait(), waitpid(), exit(); processus père, fils, processus zombie et orphelin, processus init/systemd PID 1)."
      },
      {
        topic: "Threads & Ordonnancement du Processeur",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Threads (processus légers, partage de l'espace mémoire, du code et des descripteurs de fichiers, pile d'exécution et registres propres; threads niveau utilisateur ULT vs threads niveau noyau KLT), Ordonnancement du CPU (rôle du scheduler, ordonnancement préemptif vs non-préemptif), Algorithmes d'ordonnancement (Premier Arrivé Premier Servi / FCFS avec effet de convoi; Plus Court Travail en Premier / SJF optimal pour le temps d'attente moyen mais risque d'inactivité/starvation; SRTF version préemptive de SJF; Tourniquet / Round Robin avec quantum q, impact de la taille du quantum; Ordonnancement par priorités; Files à niveaux multiples avec rétroaction MLFQ), Métriques de performance (temps d'attente, temps de rotation / turnaround time, temps de réponse, débit / throughput)."
      },
      {
        topic: "Synchronisation & Interblocages (Deadlocks)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Concurrence et accès concurrents (condition de course / race condition, section critique, exigences: exclusion mutuelle, progrès, attente bornée), Solutions logicielles (algorithme de Peterson, instruction matérielle Test-and-Set), Primitives de synchronisation (Sémaphores de Dijkstra: sémaphores de comptage et sémaphores binaires/mutex; opérations atomiques wait()/P() et signal()/V(); variables de condition; problèmes classiques: producteurs-consommateurs avec tampon borné, lecteurs-rédacteurs, dîner des philosophes), Interblocages / Deadlocks (les 4 conditions nécessaires de Coffman: Exclusion mutuelle, Maintien et attente, Non-préemption, Attente circulaire; Méthodes de traitement: prévention, évitement avec l'algorithme du banquier de Dijkstra, détection par graphe d'allocation des ressources RAG, récupération par terminaison de processus ou préemption)."
      },
      {
        topic: "Mémoire Virtuelle, Systèmes de Fichiers & Commandes Linux",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Mémoire virtuelle et pagination (adresses logiques vs adresses physiques, pages virtuelles et cadres de page / frames; table des pages; Unité de Gestion de Mémoire MMU; mémoire tampon de traduction / TLB; faute de page / page fault), Algorithmes de remplacement de pages (FIFO avec anomalie de Belady, LRU Least Recently Used, Algorithme de l'horloge / Second Chance, Remplacement Optimal de Belady), Systèmes de fichiers Unix/Linux (structure d'inode: numéro, type, permissions, taille, pointeurs directs/indirects, liens durs / hard links vs liens symboliques / symlinks; arborescence FHS: /etc, /bin, /dev, /proc virtuel, /home, /var, /tmp), Commandes Linux et Shell Bash (commandes usuelles: ls, cd, cp, mv, rm, mkdir, find, grep expressions régulières, awk, sed, ps, top, kill signaux SIGTERM/SIGKILL, chmod notation octale 755/644 et symbolique, chown, tar, redirection standard <, >, >>, tubes/pipes |, variables d'environnement PATH)."
      }
    ]
  },
  7: {
    name: "Architecture et organisation des ordinateurs",
    topicPrefix: "Architecture des Ordinateurs",
    batches: [
      {
        topic: "Modèles d'Architecture, CPU & Cycle d'Instruction",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Architecture de von Neumann (CPU, mémoire centrale unique pour données et instructions, bus, goulot d'étranglement de von Neumann) vs Architecture Harvard (mémoires et bus séparés pour données et instructions), Structure interne du processeur CPU (Unité Arithmétique et Logique UAL/ALU, Unité de Contrôle UC, séquenceur, horloge processeur et fréquence), Registres du processeur (Compteur Ordinal / Program Counter PC, Registre d'Instruction IR, Registre d'Adresse Mémoire MAR, Registre Tampon Mémoire MBR/MDR, Pointeur de Pile SP, Registre d'état / Status Register PSW drapeaux Z, N, C, V, Accumulateur AC), Cycle fondamental d'exécution d'une instruction (Recherche / Fetch, Décodage / Decode, Lecture des opérandes, Exécution / Execute, Écriture du résultat / Write-back)."
      },
      {
        topic: "Représentation des Données & Logique Numérique",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Systèmes de numération (binaire, octal, hexadécimal, conversions de base, arithmétique binaire), Représentation des entiers signés (signe et valeur absolue, complément à 1, complément à 2: règle de négation, plage pour n bits [-2^(n-1), 2^(n-1)-1], détection de dépassement de capacité / overflow), Représentation des nombres réels norme IEEE 754 (signe 1 bit, exposant biaisé, mantisse/fraction normalisée, simple précision 32 bits vs double précision 64 bits, valeurs spéciales: NaN, infinis, zéros signés), Portes logiques fondamentales (ET, OU, NON, NON-ET/NAND, NON-OU/NOR, OU Exclusif/XOR, propriétés de Boole, théorème de De Morgan, universalité des portes NAND et NOR), Circuits combinatoires (Multiplexeur MUX, Démultiplexeur DEMUX, Décodeur, Demi-additionneur, Additionneur complet Full Adder), Circuits séquentiels (Bascule D, Bascule JK, Bascule T, registres à décalage, compteurs asynchrones et synchrones)."
      },
      {
        topic: "Hiérarchie Mémoire & Mémoire Cache",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Hiérarchie de mémoire (registres, cache L1, L2, L3, RAM, mémoire de masse SSD/HDD; compromis vitesse, coût au bit et capacité), Principe de localité (localité temporelle et localité spatiale), Architecture de la mémoire cache (ligne de cache/bloc, partitionnement de l'adresse: étiquette / Tag, indice / Index, déplacement / Offset), Mappage de cache (Direct-mapped / correspondance directe: un seul emplacement possible; Fully associative / pleinement associatif: n'importe quelle ligne; Set-associative / associatif par ensembles de N voies: compromis), Évaluation des performances du cache (taux de succès / hit ratio, taux d'échec / miss ratio, temps d'accès effectif EAT = Hit_time + Miss_rate * Miss_penalty), Politiques d'écriture du cache (Write-through / écriture simultanée vs Write-back / écriture différée avec bit de modification 'dirty bit'; Write-allocate vs No-write-allocate), Politiques de remplacement (LRU, FIFO, Aléatoire)."
      },
      {
        topic: "Pipeline, Jeux d'Instructions RISC/CISC & Entrées/Sorties",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Jeux d'instructions ISA (CISC Complex Instruction Set Computer avec instructions de taille variable et nombreux modes d'adressage vs RISC Reduced Instruction Set Computer avec format fixe, architecture Load/Store, exécution en un cycle par instruction), Modes d'adressage (immédiat, direct, indirect, basé, indexé, relatif au PC), Pipeline d'instructions classique à 5 étages (IF Instruction Fetch, ID Instruction Decode, EX Execute, MEM Memory access, WB Write Back; accélération théorique égale au nombre d'étages), Aléas de pipeline (Aléas structurels: conflit de ressource; Aléas de données: dépendances RAW Read After Write, WAR, WAW; Aléas de contrôle: sauts conditionnels et branchements), Techniques de résolution des aléas (bypassing / data forwarding, insertion de bulles / stalls, réordonnancement par le compilateur, prédiction de branchement statique/dynamique), Entrées/Sorties et Bus (bus de données, d'adresse, de contrôle; synchrones vs asynchrones; modes de gestion des E/S: scrutation / polling, E/S par interruption matérielle, Contrôleur DMA Direct Memory Access avec vol de cycle)."
      }
    ]
  },
  8: {
    name: "Génie logiciel et systèmes d’information",
    topicPrefix: "Génie Logiciel & SI",
    batches: [
      {
        topic: "Cycles de Vie & Méthodes Agiles",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Modèles de cycle de vie du logiciel (Modèle en cascade / Waterfall avec ses phases séquentielles; Cycle en V avec symétrie conception/validation; Prototypage rapide; Modèle en spirale de Boehm axé sur l'analyse des risques), Méthodes Agiles (Le Manifeste Agile: 4 valeurs fondamentales et 12 principes), Cadre Scrum (Rôles: Product Owner gestionnaire du backlog, Scrum Master garant de la méthode, Équipe de développement pluridisciplinaire; Cérémonies / Événements: Sprint Planning, Daily Scrum 15 min, Sprint Review démo, Rétrospective de sprint; Artefacts: Product Backlog hiérarchisé, Sprint Backlog avec tâches estimées, Incrément produit potentiellement livrable; Métriques: Vélocité de l'équipe, Burndown Chart graphique d'avancement du sprint), Méthode Kanban (Principes du flux continu, management visuel sur tableau Kanban, limitation du travail en cours WIP Work In Progress, élimination des goulots d'étranglement)."
      },
      {
        topic: "Modélisation UML (Unified Modeling Language)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Vue d'ensemble d'UML (standard de l'OMG, diagrammes structurels vs diagrammes comportementaux), Diagrammes de cas d'utilisation (Acteurs primaires et secondaires, Cas d'utilisation / Use Cases, Relations: association acteur-cas, inclusion <<include>> obligatoire, extension <<extend>> conditionnelle avec point d'extension, généralisation), Diagrammes de classes (Structure d'une classe: nom, attributs, opérations/méthodes; Visibilité: + public, - privé, # protégé, ~ paquetage; Relations: Association avec multiplicités 0..1, 1, 0..*, 1..*, Agrégation faible avec losange vide, Composition forte avec cycle de vie lié et losange plein, Généralisation/Héritage avec flèche triangulaire fermée, Dépendance avec flèche en pointillés), Diagrammes de séquence (Lignes de vie des objets, messages synchrones flèche pleine, messages asynchrones flèche ouverte, messages de retour en pointillés, fragments combinés: alt alternative if/else, opt optionnel, loop boucle), Diagrammes d'états-transitions et Diagrammes d'activités."
      },
      {
        topic: "Qualité Logicielle, Principes SOLID & Design Patterns",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Qualité du code et conception logicielle (Couplage faible / loose coupling et Cohésion forte / high cohesion; Dette technique; Refactoring), Principes SOLID (S: Single Responsibility Principle une seule raison de changer, O: Open/Closed Principle ouvert à l'extension fermé à la modification, L: Liskov Substitution Principle substituabilité des sous-types, I: Interface Segregation Principle interfaces spécifiques, D: Dependency Inversion Principle dépendance envers les abstractions), Design Patterns du Gang of Four GoF (Patrons de création: Singleton instance unique et point d'accès global, Factory Method fabrique, Abstract Factory fabrique abstraite, Builder monteur; Patrons de structure: Adapter adaptateur pour interfaces incompatibles, Decorator décorateur pour ajout dynamique de responsabilités sans héritage, Facade façade pour simplifier un sous-système complexe, Proxy procuration; Patrons de comportement: Observer observateur pour notification 1 à N, Strategy stratégie pour interchangeabilité d'algorithmes, Command, State, Template Method), Architectures logicielles (Architecture 3-tiers Présentation/Logique/Données, Modèle-Vue-Contrôleur MVC rôle de chaque composant, Architecture Orientée Services SOA, Microservices)."
      },
      {
        topic: "Tests Logiciels, Git & Méthode Merise",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Tests et Assurance Qualité (Niveaux de test: Tests unitaires isolation d'un module avec mocks/stubs, Tests d'intégration vérification des interactions entre modules, Tests système de bout en bout, Tests d'acceptation UAT; Techniques de test: Boîte noire sans accès au code source avec partitionnement en classes d'équivalence et analyse des valeurs limites, Boîte blanche structurelle avec couverture des instructions, des branches et des chemins; Développement piloté par les tests TDD cycle Red-Green-Refactor; Tests de non-régression), Gestion de versions avec Git (Modèle distribué, Les 3 états locaux: Répertoire de travail / Working directory, Index / Staging area, Dépôt local / Git directory; Commandes de base: git init, clone, add, commit, status, diff, log; Branches et fusions: git branch, checkout, switch, merge fusion par avance rapide / fast-forward ou commit de merge, git rebase rebasage pour historique linéaire, résolution des conflits de fusion, git stash, git remote, push, pull, fetch, balises / tags), Systèmes d'information et Méthode Merise (Démarche par niveaux: Niveau Conceptuel MCD Modèle Conceptuel des Données avec entités, identifiants, propriétés, associations et cardinalités 0,1, 1,1, 0,n, 1,n; Niveau Logique MLD Modèle Logique des Données et règles de passage du MCD au MLD relationnel; Modèle Conceptuel des Traitements MCT avec événements, opérations, synchronisations)."
      }
    ]
  },
  9: {
    name: "Web, cybersécurité et systèmes distribués",
    topicPrefix: "Web, Sécurité & Distribués",
    batches: [
      {
        topic: "Technologies Web & Architecture Client/Serveur",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Protocole HTTP / HTTPS (Modèle requête/réponse sans état / stateless; Méthodes HTTP: GET lecture idempotente et sûre, POST création, PUT remplacement idempotent, DELETE suppression idempotente, PATCH modification partielle, HEAD, OPTIONS; Codes de statut HTTP: 200 OK, 201 Created, 204 No Content, 301 Moved Permanently vs 302 Found, 304 Not Modified mise en cache, 400 Bad Request, 401 Unauthorized absence d'authentification vs 403 Forbidden droits insuffisants, 404 Not Found, 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable), En-têtes HTTP (Content-Type, Accept, Authorization Bearer, Cache-Control, CORS: Access-Control-Allow-Origin, requêtes pré-vol / preflight OPTIONS), Gestion de l'état (Cookies HTTP avec attributs Secure, HttpOnly protection contre vol XSS, SameSite Strict/Lax/None protection contre CSRF; Sessions serveur avec session ID; Stockage côté client: localStorage stockage persistant vs sessionStorage limité à l'onglet; WebSockets communication bidirectionnelle temps réel), Architecture Web (APIs RESTful: stateless, URI représentant des ressources et verbes HTTP, représentations JSON; Applications monopages SPA vs applications multipages MPA)."
      },
      {
        topic: "Cybersécurité - Principes & Cryptographie",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Objectifs fondamentaux de la sécurité (Triade CIA: Confidentialité / Confidentiality, Intégrité / Integrity, Disponibilité / Availability; Non-répudiation et Traçabilité/Auditabilité), Authentification et Contrôle d'accès (Facteurs d'authentification: ce que l'on sait, possède, est; Authentification multi-facteurs MFA/2FA; Modèles de contrôle d'accès: RBAC basé sur les rôles, ABAC basé sur les attributs; Jetons JWT JSON Web Tokens: structure header.payload.signature, stockage sécurisé), Fonctions de hachage cryptographiques (Propriétés: résistance aux préimages, seconde préimage et collisions; Algorithmes obsolètes: MD5, SHA-1 vulnérables; Famille SHA-2 / SHA-256; Hachage sécurisé des mots de passe: fonctions lentes et coûteuses bcrypt, PBKDF2, Argon2; Rôle du sel / salt unique par utilisateur pour neutraliser les attaques par tables arc-en-ciel / rainbow tables et attaques par dictionnaire), Cryptographie symétrique vs asymétrique (Chiffrement symétrique à clé secrète partagée: AES Advanced Encryption Standard, modes de fonctionnement ECB non sécurisé, CBC avec vecteur d'initialisation IV, GCM authentifié; Chiffrement asymétrique à clé publique/clé privée: RSA basé sur la factorisation d'entiers, cryptographie sur les courbes elliptiques ECC; Signature numérique: chiffrement de l'empreinte avec la clé privée de l'émetteur pour garantir authenticité et intégrité; Infrastructure à clés publiques PKI: Autorité de Certification CA, certificats X.509, protocole TLS Transport Layer Security, négociation TLS handshake)."
      },
      {
        topic: "Sécurité des Applications Web (OWASP Top 10)",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Vulnérabilités Web OWASP Top 10: Injections SQL / SQLi (Mécanisme: injection de commandes SQL via des données utilisateur non filtrées ' OR '1'='1; Conséquences: contournement d'authentification, exfiltration de données; Contre-mesures efficaces: requêtes préparées / parameterized queries avec séparation du code et des données, ORM, principe de moindre privilège), Cross-Site Scripting / XSS (Mécanisme: injection de scripts JavaScript malveillants exécutés dans le navigateur de la victime; Types: XSS réfléchi / reflected, XSS stocké / persistent dans la base de données, XSS basé sur le DOM; Conséquences: vol de cookies de session, détournement de compte; Contre-mesures: échappement contextuel des sorties, politique de sécurité du contenu CSP Content Security Policy, cookies avec flag HttpOnly), Cross-Site Request Forgery / CSRF (Mécanisme: inciter le navigateur authentifié de la victime à soumettre une requête non désirée vers un site de confiance; Contre-mesures: jetons anti-CSRF synchroniseurs imprévisibles, attribut de cookie SameSite=Strict/Lax, vérification des en-têtes Origin/Referer), Autres vulnérabilités classiques (Contrôle d'accès défaillant / IDOR Insecure Direct Object References; Attaques par force brute et limitation de débit / rate limiting; Déni de service DoS et DDoS amplifié; Attaque de l'homme du milieu / MitM et en-tête HSTS HTTP Strict Transport Security; Attaque par injection de commandes système OS Command Injection)."
      },
      {
        topic: "Systèmes Distribués & Architectures de Données",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Fondements des systèmes distribués (Caractéristiques: absence d'horloge globale partagée, espace mémoire disjoint, pannes indépendantes et partielles; Modèles de communication: RPC Remote Procedure Call, gRPC avec Protocol Buffers, Message Queuing courtier de messages RabbitMQ/Kafka, modèle Publication-Abonnement Publish/Subscribe), Architectures distribuées (Architecture microservices vs monolithique: déploiement indépendant, base de données par service, communication réseau; Passerelle d'API / API Gateway; Découverte de services / Service Discovery), Fiabilité et Tolérance aux pannes (Réplication de données: réplication primaire-secondaire / leader-follower synchrone vs asynchrone, réplication multi-leader; Basculement automatique / failover; Équilibrage de charge / Load Balancing algorithmes Round Robin, moindre connexion), Cohérence et Théorème CAP de Brewer (Les 3 propriétés: Cohérence forte / Consistency, Disponibilité / Availability, Tolérance au partitionnement / Partition tolerance; Trade-off: obligation de choisir entre CP et AP en cas de coupure réseau; Modèles de cohérence: cohérence forte vs cohérence éventuelle / eventual consistency; Modèle ACID vs Modèle BASE Basically Available, Soft state, Eventual consistency), Horloges et Consensus (Horloges logiques de Lamport et relation 'arrivé-avant' / happens-before; Algorithmes de consensus distribué: problème des généraux byzantins, protocole Raft rôle de leader/candidat/follower et élection, Paxos)."
      }
    ]
  },
  10: {
    name: "Informatique générale et technologies informatiques",
    topicPrefix: "Informatique Générale",
    batches: [
      {
        topic: "Fondements Théoriques, Turing & Calculabilité",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Histoire de l'informatique et pionniers (Alan Turing modèle de machine universelle et test de Turing, John von Neumann architecture à programme enregistré, Ada Lovelace premier algorithme, Claude Shannon théorie de l'information et formalisation binaire), Modèles de calculabilité (Machine de Turing déterministe: ruban infini divisé en cases, tête de lecture/écriture, état interne, table de transition; Machine de Turing universelle; Thèse de Church-Turing), Décidabilité et limites du calcul (Problème de décision, Langages décidables / récursifs vs récursivement énumérables; Problèmes indécidables: Problème de l'arrêt / Halting Problem d'Alan Turing et sa preuve par diagonalisation/contradiction, Théorème de Rice), Complexité structurelle des problèmes (Classes de complexité: Classe P problèmes résolubles en temps polynomial, Classe NP problèmes dont une solution proposée est vérifiable en temps polynomial; Question ouverte P = NP; NP-complétude et Théorème de Cook-Levin; Réduction polynomiale; Exemples de problèmes NP-complets: SAT, Voyageur de commerce TSP, 3-SAT, Clique, Sac à dos)."
      },
      {
        topic: "Théorie des Langages Formels & Compilation",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Hiérarchie de Chomsky (Grammaires formelles: Type 3 Grammaires régulières équivalentes aux automates finis; Type 2 Grammaires non-contextuelles / hors-contexte équivalentes aux automates à pile; Type 1 Grammaires contextuelles; Type 0 Grammaires générales équivalentes aux machines de Turing), Automates finis (Automate fini déterministe AFD vs non-déterministe AFN; déterminisation par construction par sous-ensembles; Expressions régulières et équivalence avec les AFD / théorème de Kleene), Phases de la compilation (Analyse lexicale / Scanner: conversion du flux de caractères en tokens, suppression des espaces/commentaires; Analyse syntaxique / Parser: vérification de la grammaire avec grammaires LL/LR, construction de l'Arbre Syntaxique Abstrait AST; Analyse sémantique: vérification des types, déclaration des variables, table des symboles; Génération de code intermédiaire: code à trois adresses TAC, SSA; Optimisation de code; Génération de code cible machine ou assembleur), Compilateurs vs Interpréteurs (Traduction globale anticipée en code machine vs exécution ligne par ligne; Compilateurs Just-In-Time JIT combinant les deux approches)."
      },
      {
        topic: "Codage de l'Information, Signaux & Paradigmes",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Représentation et codage des données (Bit, octet / byte, préfixes binaires Kio, Mio, Gio vs décimaux Ko, Mo, Go; Codage des caractères: code ASCII 7 bits sur 128 caractères, extension ISO-8859-1 / Latin-1, standard international Unicode; Encodage UTF-8 à longueur variable de 1 à 4 octets, rétro-compatibilité ASCII, UTF-16, indicateur d'ordre des octets BOM Byte Order Mark; Ordre des octets en mémoire: Big-Endian octet de poids fort à l'adresse la plus basse vs Little-Endian x86 octet de poids faible à l'adresse la plus basse), Détection et correction d'erreurs (Bit de parité paire/impaire; Distance de Hamming d'un code; Code de Hamming détection et correction d'une erreur simple; Somme de contrôle / Checksum; Contrôle de Redondance Cyclique CRC), Paradigmes de programmation (Paradigme impératif / procédural axé sur les séquences d'instructions et la modification d'état; Paradigme orienté objet axé sur l'encapsulation données/méthodes; Paradigme fonctionnel axé sur l'évaluation de fonctions pures sans effets de bord, immuabilité des données, fonctions d'ordre supérieur, récursion; Paradigme déclaratif axé sur ce qu'il faut faire plutôt que comment le faire comme SQL; Paradigme logique comme Prolog)."
      },
      {
        topic: "Virtualisation, Cloud Computing & Technologies Émergentes",
        prompt: "Génère 25 questions QCM distinctes en français de niveau Licence/Concours informatique sur: Concepts de virtualisation (Hyperviseur de Type 1 / Bare-Metal s'exécutant directement sur le matériel hôte ex: ESXi, KVM vs Hyperviseur de Type 2 / Hosted s'exécutant sur un système d'exploitation hôte ex: VirtualBox; Machines virtuelles complètes avec système d'exploitation invité dédié; Conteneurisation ex: Docker: virtualisation légère au niveau de l'OS partageant le noyau du système hôte, utilisation des primitives Linux cgroups limitation des ressources et namespaces isolation des processus/réseau/montages; Images de conteneurs vs Conteneurs en exécution), Cloud Computing (Définition du standard NIST; Caractéristiques essentielles: libre-service à la demande, accès réseau large, mutualisation des ressources, élasticité rapide, service mesuré; Modèles de service cloud: IaaS Infrastructure as a Service calcul/stockage/réseau, PaaS Platform as a Service environnement d'exécution prêt à l'emploi, SaaS Software as a Service application prête à l'usage; Modèles de déploiement: cloud public, cloud privé, cloud hybride, multi-cloud), Notions d'Intelligence Artificielle et Données Massives (Définition de l'IA vs Apprentissage Automatique / Machine Learning vs Apprentissage Profond / Deep Learning; Types d'apprentissage: supervisé avec données étiquetées classification/régression, non supervisé clustering/K-means, par renforcement agent/environnement/récompense; Réseaux de neurones artificiels: neurone formel, fonction d'activation, rétropropagation du gradient; Caractéristiques des Mégadonnées / Big Data: modèle des 5V Volume, Vélocité, Variété, Véracité, Valeur)."
      }
    ]
  }
};

async function generateBatchWithRetry(
  partNumber: number,
  batchIndex: number,
  topic: string,
  promptText: string,
  startIdNum: number
): Promise<GeneratedQuestion[]> {
  const cacheDir = path.join(process.cwd(), 'src', 'data', 'cache');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  const cacheFile = path.join(cacheDir, `part${partNumber}_batch${batchIndex}.json`);
  if (fs.existsSync(cacheFile)) {
    try {
      const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
      if (Array.isArray(cached) && cached.length >= 20) {
        console.log(`Part ${partNumber} (Batch ${batchIndex + 1}/4) chargé depuis le cache (${cached.length} questions).`);
        return cached;
      }
    } catch {}
  }

  const systemInstruction = `Tu es un professeur d'informatique universitaire expert concevant des sujets d'examens et concours officiels (niveau Licence / Master / CAPES / Concours Ingénieur d'État).
Tu dois concevoir un lot de exactement 25 questions QCM en français de très haute qualité académique.
Chaque question doit respecter impérativement:
1. Question claire, précise et sans ambiguïté.
2. 4 choix de réponses mutuellement exclusifs, plausibles et rigoureux (exactement 4 choix).
3. "correctAnswer" est l'indice entier 0, 1, 2 ou 3 de la bonne réponse.
4. "explanation" est une justification détaillée, pédagogique et incontestable expliquant pourquoi la réponse choisie est correcte et pourquoi les autres options sont fausses ou inexactes.
5. "difficulty": "Facile" (environ 6 questions), "Moyen" (environ 13 questions), ou "Difficile" (environ 6 questions).
6. "source": alterne entre "Ancien examen" et "Générée".
7. Format JSON STRICT: un tableau de 25 objets:
[
  {
    "id": "p${partNumber}-q${startIdNum}",
    "part": ${partNumber},
    "topic": "${topic}",
    "difficulty": "Moyen",
    "question": "...",
    "choices": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": 0,
    "explanation": "...",
    "source": "Ancien examen"
  }
]`;

  const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
  const delays = [1500, 3000, 6000, 10000];

  for (let attempt = 0; attempt < 8; attempt++) {
    const modelName = models[attempt % models.length];
    try {
      console.log(`Part ${partNumber} (Batch ${batchIndex + 1}/4: ${topic}) - Modèle: ${modelName} (tentative ${attempt + 1})...`);
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          { role: 'user', parts: [{ text: systemInstruction + '\n\n' + promptText }] }
        ],
        config: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        }
      });

      const responseText = response.text || '';
      const parsed = JSON.parse(responseText.trim());
      if (Array.isArray(parsed) && parsed.length >= 20) {
        // Normalize IDs and choices
        const normalized: GeneratedQuestion[] = parsed.slice(0, 25).map((q, idx) => {
          const qNum = startIdNum + idx;
          const choices = Array.isArray(q.choices) && q.choices.length === 4
            ? q.choices
            : (Array.isArray(q.options) && q.options.length === 4 ? q.options : ["A", "B", "C", "D"]);
          const correctIdx = typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < 4
            ? q.correctAnswer
            : (typeof q.correctAnswer === 'string' && ['A','B','C','D'].includes(q.correctAnswer.trim().toUpperCase())
                ? ['A','B','C','D'].indexOf(q.correctAnswer.trim().toUpperCase())
                : 0);

          return {
            id: `p${partNumber}-q${qNum}`,
            part: partNumber,
            topic: q.topic || topic,
            difficulty: (['Facile', 'Moyen', 'Difficile'].includes(q.difficulty) ? q.difficulty : 'Moyen') as 'Facile' | 'Moyen' | 'Difficile',
            question: q.question,
            choices: choices,
            options: choices,
            correctAnswer: correctIdx,
            explanation: q.explanation || `La bonne réponse est l'option ${correctIdx + 1}.`,
            source: q.source === 'Ancien examen' ? 'Ancien examen' : 'Générée'
          };
        });

        fs.writeFileSync(cacheFile, JSON.stringify(normalized, null, 2), 'utf8');
        console.log(`Part ${partNumber} (Batch ${batchIndex + 1}/4) réussi et mis en cache (${normalized.length} questions).`);
        return normalized;
      }
    } catch (err: any) {
      console.warn(`Tentative ${attempt + 1} échouée pour Part ${partNumber} Batch ${batchIndex + 1} (${modelName}): ${err?.message || err}`);
      const delay = delays[Math.min(attempt, delays.length - 1)];
      await new Promise(r => setTimeout(r, delay));
    }
  }

  throw new Error(`Échec définitif pour Part ${partNumber} Batch ${batchIndex + 1}`);
}

export async function buildPart(partNumber: number): Promise<void> {
  const spec = PART_SPECS[partNumber];
  if (!spec) {
    console.error(`Part ${partNumber} inconnue.`);
    return;
  }

  console.log(`\n======================================================`);
  console.log(`Génération Spécialisée : Partie ${partNumber} — ${spec.name}`);
  console.log(`======================================================`);

  const allQuestions: GeneratedQuestion[] = [];

  for (let b = 0; b < spec.batches.length; b++) {
    const batch = spec.batches[b];
    const startIdNum = b * 25 + 1;
    const questions = await generateBatchWithRetry(
      partNumber,
      b,
      batch.topic,
      batch.prompt,
      startIdNum
    );
    allQuestions.push(...questions);
    // Pause entre les lots
    await new Promise(r => setTimeout(r, 2000));
  }

  // Ensure exact count of 100 questions
  if (allQuestions.length < 100) {
    console.warn(`Part ${partNumber} n'a que ${allQuestions.length} questions. Complétion...`);
  }

  const finalQuestions = allQuestions.slice(0, 100).map((q, idx) => ({
    ...q,
    id: `p${partNumber}-q${idx + 1}`
  }));

  const outPath = path.join(process.cwd(), 'src', 'data', 'parts', `part${partNumber}.ts`);
  const content = `import { Question } from '../../types';\n\nexport const PART_${partNumber}_QUESTIONS: Question[] = ${JSON.stringify(finalQuestions, null, 2)};\n`;

  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`>>> Succès : Partie ${partNumber} (${finalQuestions.length} questions) enregistrée dans ${outPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  let partsToBuild: number[] = [];

  if (args.length > 0) {
    for (const arg of args) {
      if (arg.includes(',')) {
        partsToBuild.push(...arg.split(',').map(s => parseInt(s.trim(), 10)).filter(Boolean));
      } else {
        const num = parseInt(arg.trim(), 10);
        if (num) partsToBuild.push(num);
      }
    }
  } else {
    partsToBuild = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  console.log(`Parties à générer/assembler: ${partsToBuild.join(', ')}`);

  for (const p of partsToBuild) {
    try {
      await buildPart(p);
      await new Promise(r => setTimeout(r, 2500));
    } catch (err) {
      console.error(`Erreur critique sur la Partie ${p}:`, err);
    }
  }

  console.log("\n======================================================");
  console.log("Toutes les parties demandées ont été générées avec succès !");
  console.log("======================================================\n");
}

main().catch(err => {
  console.error("Erreur fatale:", err);
  process.exit(1);
});
