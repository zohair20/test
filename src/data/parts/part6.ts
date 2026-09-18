import { Question } from '../../types';

export const PART_6_QUESTIONS: Question[] = [
  {
    "id": "p6-q1",
    "part": 6,
    "topic": "Commandes Linux fondamentales",
    "difficulty": "Facile",
    "question": "Sous un système d'exploitation Unix / Linux, à quoi sert principalement la commande « ls » ?",
    "options": [
      "Lister le contenu (fichiers et sous-répertoires) d'un répertoire",
      "Changer de répertoire de travail (change directory)",
      "Créer un nouveau répertoire vide",
      "Déplacer ou renommer un fichier existant"
    ],
    "choices": [
      "Lister le contenu (fichiers et sous-répertoires) d'un répertoire",
      "Changer de répertoire de travail (change directory)",
      "Créer un nouveau répertoire vide",
      "Déplacer ou renommer un fichier existant"
    ],
    "correctAnswer": 0,
    "explanation": "La commande ls (list directory contents) permet d'afficher les fichiers et répertoires d'un emplacement. Les commandes associées sont cd (changer de répertoire), mkdir (créer) et mv (déplacer/renommer). (Source : Concours LPISIL EST Essaouira 2014, Q8 Unix).",
    "source": "Ancien concours"
  },
  {
    "id": "p6-q2",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Facile",
    "question": "Quelle est la différence fondamentale entre un processus et un thread (processus léger) ?",
    "options": [
      "Un processus possède son propre espace d'adressage virtuel isolé, tandis que les threads d'un même processus partagent le même espace mémoire",
      "Un thread possède son propre espace mémoire et ses propres variables globales isolées",
      "Un processus ne peut jamais s'exécuter sur plusieurs cœurs",
      "Un thread ne peut pas être ordonnancé par le noyau"
    ],
    "choices": [
      "Un processus possède son propre espace d'adressage virtuel isolé, tandis que les threads d'un même processus partagent le même espace mémoire",
      "Un thread possède son propre espace mémoire et ses propres variables globales isolées",
      "Un processus ne peut jamais s'exécuter sur plusieurs cœurs",
      "Un thread ne peut pas être ordonnancé par le noyau"
    ],
    "correctAnswer": 0,
    "explanation": "Un processus est une unité d'isolation de ressources avec son propre espace virtuel. Les threads partagent le tas (Heap) et les descripteurs de fichiers, mais ont chacun leur propre pile (Stack) et leurs registres.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q3",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Facile",
    "question": "Quels sont les trois états fondamentaux du cycle de vie d'un processus dans un système d'exploitation ?",
    "options": [
      "Prêt (Ready), En cours d'exécution (Running), et Bloqué / En attente (Blocked / Waiting)",
      "Démarré, En pause, Arrêté",
      "Compilé, Édité, Lié",
      "Actif, Passif, Archivé"
    ],
    "choices": [
      "Prêt (Ready), En cours d'exécution (Running), et Bloqué / En attente (Blocked / Waiting)",
      "Démarré, En pause, Arrêté",
      "Compilé, Édité, Lié",
      "Actif, Passif, Archivé"
    ],
    "correctAnswer": 0,
    "explanation": "Les 3 états de base sont : Prêt (attend d'être alloué au CPU), En cours d'exécution (occupe le CPU), et Bloqué (attend la fin d'une E/S ou un événement externe).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q4",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que le PCB (Process Control Block) dans un système d'exploitation ?",
    "options": [
      "Une structure de données du noyau contenant toutes les métadonnées d'un processus (PID, état, registres CPU, pointeurs mémoire, fichiers ouverts)",
      "Un composant matériel de la carte mère",
      "Un protocole de communication réseau",
      "Un type de mémoire cache L1"
    ],
    "choices": [
      "Une structure de données du noyau contenant toutes les métadonnées d'un processus (PID, état, registres CPU, pointeurs mémoire, fichiers ouverts)",
      "Un composant matériel de la carte mère",
      "Un protocole de communication réseau",
      "Un type de mémoire cache L1"
    ],
    "correctAnswer": 0,
    "explanation": "Le PCB (ou `task_struct` sous Linux) est la structure de données centrale du noyau qui conserve le contexte d'exécution complet du processus.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q5",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Moyen",
    "question": "Qu'appelle-t-on la commutation de contexte (Context Switch) ?",
    "options": [
      "L'opération par laquelle le système d'exploitation sauvegarde l'état du processus sortant et restaure l'état du processus entrant pour lui céder le processeur",
      "Le basculement de l'écran d'un moniteur à un autre",
      "La conversion d'un binaire 32 bits en 64 bits",
      "La modification des autorisations de fichiers"
    ],
    "choices": [
      "L'opération par laquelle le système d'exploitation sauvegarde l'état du processus sortant et restaure l'état du processus entrant pour lui céder le processeur",
      "Le basculement de l'écran d'un moniteur à un autre",
      "La conversion d'un binaire 32 bits en 64 bits",
      "La modification des autorisations de fichiers"
    ],
    "correctAnswer": 0,
    "explanation": "Le changement de contexte sauvegarde les registres (compteur ordinal PC, pointeur de pile SP, etc.) du processus interrompu et charge ceux du nouveau processus.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q6",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un processus zombie sous Linux / Unix ?",
    "options": [
      "Un processus qui a terminé son exécution mais dont l'entrée reste dans la table des processus car son processus père n'a pas encore lu son code de retour via `wait()`",
      "Un processus malveillant infectant la machine",
      "Un processus tournant indéfiniment en boucle fermée",
      "Un processus qui consomme 100% du CPU"
    ],
    "choices": [
      "Un processus qui a terminé son exécution mais dont l'entrée reste dans la table des processus car son processus père n'a pas encore lu son code de retour via `wait()`",
      "Un processus malveillant infectant la machine",
      "Un processus tournant indéfiniment en boucle fermée",
      "Un processus qui consomme 100% du CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Un zombie (état `Z` dans `ps`) ne consomme plus de mémoire ni de CPU, mais occupe un identifiant PID dans la table des processus jusqu'à ce que son père lise son statut de fin.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q7",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un processus orphelin sous Linux et qui l'adopte ?",
    "options": [
      "Un processus dont le père est mort avant lui ; il est automatiquement adopté par le processus `init` (PID 1 ou `systemd`)",
      "Un processus sans nom supprimé immédiatement par le noyau",
      "Un processus sans thread principal",
      "Un processus sans descripteur de fichier standard"
    ],
    "choices": [
      "Un processus dont le père est mort avant lui ; il est automatiquement adopté par le processus `init` (PID 1 ou `systemd`)",
      "Un processus sans nom supprimé immédiatement par le noyau",
      "Un processus sans thread principal",
      "Un processus sans descripteur de fichier standard"
    ],
    "correctAnswer": 0,
    "explanation": "Quand un processus parent termine avant son enfant, ce dernier devient orphelin et est réassigné au PID 1 (`systemd` ou `init`), qui se charge de faire le `wait()` à sa mort.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q8",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Moyen",
    "question": "Dans l'ordonnancement de processus, quel algorithme alloue un quantum de temps CPU fixe à chaque processus de façon circulaire ?",
    "options": [
      "Le Tourniquet (Round Robin - RR)",
      "Le Premier Arrivé Premier Servi (FCFS)",
      "Le Plus Court Travail d'Abord (SJF)",
      "L'Ordonnancement par priorité statique"
    ],
    "choices": [
      "Le Tourniquet (Round Robin - RR)",
      "Le Premier Arrivé Premier Servi (FCFS)",
      "Le Plus Court Travail d'Abord (SJF)",
      "L'Ordonnancement par priorité statique"
    ],
    "correctAnswer": 0,
    "explanation": "Le Tourniquet (Round Robin) attribue une tranche de temps prédéfinie (quantum) à chaque tâche de manière équitable et préemptive.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q9",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Difficile",
    "question": "Quel algorithme d'ordonnancement garantit le temps d'attente moyen minimal théorique pour un ensemble de processus donnés, mais est difficilement réalisable en pratique car il nécessite de connaître à l'avance la durée du prochain burst CPU ?",
    "options": [
      "SJF (Shortest Job First)",
      "FCFS (First-Come, First-Served)",
      "Round Robin",
      "Multi-Level Queue"
    ],
    "choices": [
      "SJF (Shortest Job First)",
      "FCFS (First-Come, First-Served)",
      "Round Robin",
      "Multi-Level Queue"
    ],
    "correctAnswer": 0,
    "explanation": "SJF est optimal pour minimiser le temps moyen d'attente, mais suppose de prédire la durée exacte de la prochaine rafale CPU de chaque processus.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q10",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Facile",
    "question": "Quel est le PID (Process ID) du premier processus lancé par le noyau au démarrage d'un système Linux ?",
    "options": [
      "PID 1 (init ou systemd)",
      "PID 0",
      "PID 100",
      "PID -1"
    ],
    "choices": [
      "PID 1 (init ou systemd)",
      "PID 0",
      "PID 100",
      "PID -1"
    ],
    "correctAnswer": 0,
    "explanation": "Le PID 1 est attribué au processus racine de l'espace utilisateur (`/sbin/init` ou `systemd`), ancêtre de tous les autres processus du système.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q11",
    "part": 6,
    "topic": "Processus et Threads",
    "difficulty": "Moyen",
    "question": "Qu'appelle-t-on ordonnancement préemptif (Preemptive Scheduling) ?",
    "options": [
      "Un mode d'ordonnancement où le système d'exploitation peut interrompre de force un processus en cours d'exécution pour confier le CPU à un processus plus prioritaire",
      "Un mode où le processus garde le CPU jusqu'à ce qu'il le libère volontairement",
      "Un ordonnancement sans horloge",
      "Un ordonnancement séquentiel non interruptible"
    ],
    "choices": [
      "Un mode d'ordonnancement où le système d'exploitation peut interrompre de force un processus en cours d'exécution pour confier le CPU à un processus plus prioritaire",
      "Un mode où le processus garde le CPU jusqu'à ce qu'il le libère volontairement",
      "Un ordonnancement sans horloge",
      "Un ordonnancement séquentiel non interruptible"
    ],
    "correctAnswer": 0,
    "explanation": "La préemption permet à l'OS d'interrompre une tâche (par exemple via l'interruption d'horloge timer) pour donner le contrôle à une autre, garantissant la réactivité du multitâche.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q12",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une section critique dans un programme concurrent ?",
    "options": [
      "Une portion de code accédant à une ressource partagée mutable qui ne doit jamais être exécutée simultanément par plus d'un thread ou processus",
      "Une section où le code plante systématiquement",
      "La zone réservée aux drivers matériels",
      "Le point d'entrée principal main()"
    ],
    "choices": [
      "Une portion de code accédant à une ressource partagée mutable qui ne doit jamais être exécutée simultanément par plus d'un thread ou processus",
      "Une section où le code plante systématiquement",
      "La zone réservée aux drivers matériels",
      "Le point d'entrée principal main()"
    ],
    "correctAnswer": 0,
    "explanation": "La section critique contient les accès concurrents aux structures de données partagées et exige l'exclusion mutuelle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q13",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre un sémaphore et un mutex ?",
    "options": [
      "Un mutex est un verrou d'exclusion mutuelle binaire (0 ou 1) avec notion de possession par le thread l'ayant verrouillé, tandis qu'un sémaphore est un compteur d'accès pouvant autoriser jusqu'à N accès simultanés et être libéré par un autre thread",
      "Un sémaphore ne fonctionne qu'en mode noyau",
      "Un mutex ne peut pas bloquer de thread",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "Un mutex est un verrou d'exclusion mutuelle binaire (0 ou 1) avec notion de possession par le thread l'ayant verrouillé, tandis qu'un sémaphore est un compteur d'accès pouvant autoriser jusqu'à N accès simultanés et être libéré par un autre thread",
      "Un sémaphore ne fonctionne qu'en mode noyau",
      "Un mutex ne peut pas bloquer de thread",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "Mutex = exclusion mutuelle (seul le propriétaire peut unlock). Sémaphore de comptage = signalisation et gestion de pools de ressources avec valeur entière arbitraire N.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q14",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Difficile",
    "question": "Quelles sont les 4 conditions de Coffman nécessaires et suffisantes pour qu'une situation d'interblocage (Deadlock) survienne ?",
    "options": [
      "Exclusion mutuelle, Rétention et attente (Hold & Wait), Pas de préemption, et Attente circulaire",
      "Fragmentation, Pagination, Segmentation et Swap",
      "Priorité, Débit, Temps de réponse et Équité",
      "Lecture, Écriture, Exécution et Suppression"
    ],
    "choices": [
      "Exclusion mutuelle, Rétention et attente (Hold & Wait), Pas de préemption, et Attente circulaire",
      "Fragmentation, Pagination, Segmentation et Swap",
      "Priorité, Débit, Temps de réponse et Équité",
      "Lecture, Écriture, Exécution et Suppression"
    ],
    "correctAnswer": 0,
    "explanation": "Les 4 conditions de Coffman (1971) sont : 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait. Rompre une seule de ces 4 conditions suffit à prévenir tout interblocage.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q15",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Difficile",
    "question": "Quel algorithme célèbre dû à Edsger Dijkstra permet d'éviter les interblocages (Deadlock Avoidance) en simulant l'allocation sécurisée des ressources avant de les attribuer réellement ?",
    "options": [
      "L'algorithme du banquier (Banker's Algorithm)",
      "L'algorithme de Bellman-Ford",
      "L'algorithme de Kruskal",
      "L'algorithme de Floyd-Warshall"
    ],
    "choices": [
      "L'algorithme du banquier (Banker's Algorithm)",
      "L'algorithme de Bellman-Ford",
      "L'algorithme de Kruskal",
      "L'algorithme de Floyd-Warshall"
    ],
    "correctAnswer": 0,
    "explanation": "L'algorithme du banquier teste si l'allocation d'une ressource demandée laisse le système dans un 'état sûr' (safe state) où tous les processus pourront finir.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q16",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un Spinlock (verrou actif) par rapport à un verrou bloquant classique ?",
    "options": [
      "Un verrou où le thread en attente effectue une boucle active de vérification (Busy Waiting) en consommant du CPU au lieu de s'endormir",
      "Un verrou tournant sur plusieurs disques durs",
      "Un verrou qui change d'adresse mémoire",
      "Un verrou qui se libère après 1 seconde"
    ],
    "choices": [
      "Un verrou où le thread en attente effectue une boucle active de vérification (Busy Waiting) en consommant du CPU au lieu de s'endormir",
      "Un verrou tournant sur plusieurs disques durs",
      "Un verrou qui change d'adresse mémoire",
      "Un verrou qui se libère après 1 seconde"
    ],
    "correctAnswer": 0,
    "explanation": "Le spinlock évite le coût élevé d'un changement de contexte pour des durées de verrouillage extrêmement brèves (très utilisé dans le noyau Linux sur systèmes SMP multi-cœurs).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q17",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le problème de l'inversion de priorité (Priority Inversion) dans les systèmes temps réel ?",
    "options": [
      "Une tâche hautement prioritaire est bloquée en attente d'une ressource détenue par une tâche basse priorité, elle-même préemptée par une tâche de priorité moyenne",
      "Un tri inversé de la file de processus",
      "Une anomalie où les processus légers passent après les processus lourds",
      "Une panne de l'horloge système"
    ],
    "choices": [
      "Une situation où une tâche hautement prioritaire est bloquée en attente d'une ressource détenue par une tâche basse priorité, elle-même préemptée par une tâche de priorité moyenne",
      "Un tri inversé de la file de processus",
      "Une anomalie où les processus légers passent après les processus lourds",
      "Une panne de l'horloge système"
    ],
    "correctAnswer": 0,
    "explanation": "Célèbre lors de la mission Mars Pathfinder : la tâche prioritaire est bloquée indirectement par des tâches moyennes. On le résout par 'l'héritage de priorité' (Priority Inheritance).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q18",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Facile",
    "question": "Qu'appelle-t-on une condition de concurrence (Race Condition) ?",
    "options": [
      "Une situation où le résultat final d'une exécution concurrente dépend de l'ordre d'arrivée ou de l'entrelacement imprévisible des threads sur les données partagées",
      "Une compétition de vitesse entre deux cartes graphiques",
      "Le benchmark du processeur",
      "Le temps de démarrage du système"
    ],
    "choices": [
      "Une situation où le résultat final d'une exécution concurrente dépend de l'ordre d'arrivée ou de l'entrelacement imprévisible des threads sur les données partagées",
      "Une compétition de vitesse entre deux cartes graphiques",
      "Le benchmark du processeur",
      "Le temps de démarrage du système"
    ],
    "correctAnswer": 0,
    "explanation": "Une race condition corrompt les données car deux acteurs lisent et écrivent en même temps sans synchronisation adéquate.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q19",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Moyen",
    "question": "Quelles sont les deux opérations primitives canoniques d'un sémaphore introduites par Dijkstra ?",
    "options": [
      "P (wait / down) et V (signal / up)",
      "Lock et Unlock",
      "Start et Stop",
      "Get et Put"
    ],
    "choices": [
      "P (wait / down) et V (signal / up)",
      "Lock et Unlock",
      "Start et Stop",
      "Get et Put"
    ],
    "correctAnswer": 0,
    "explanation": "P (proberen, tester/décrémenter) décrémente et bloque si < 0. V (verhogen, incrémenter/réveiller) incrémente la valeur et réveille un processus en attente.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q20",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Difficile",
    "question": "Comment briser simplement la condition d'attente circulaire pour empêcher tout interblocage lors de l'acquisition de multiples verrous ?",
    "options": [
      "Imposer un ordre d'acquisition global et strict (numérotation ordonnée des ressources) que tous les threads doivent scrupuleusement respecter",
      "Augmenter la quantité de RAM",
      "Désactiver les interruptions d'horloge",
      "Diminuer le nombre de processus"
    ],
    "choices": [
      "Imposer un ordre d'acquisition global et strict (numérotation ordonnée des ressources) que tous les threads doivent scrupuleusement respecter",
      "Augmenter la quantité de RAM",
      "Désactiver les interruptions d'horloge",
      "Diminuer le nombre de processus"
    ],
    "correctAnswer": 0,
    "explanation": "Si toutes les ressources sont ordonnées $R_1 < R_2 < ... < R_n$ et acquises dans cet ordre croissant unique, aucun cycle de dépendance ne peut géométriquement se former.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q21",
    "part": 6,
    "topic": "Synchronisation & Deadlocks",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que la famine (Starvation) dans un système multitâche ?",
    "options": [
      "Une situation où un processus prêt ne reçoit jamais le CPU ou une ressource car d'autres processus plus prioritaires lui passent perpétuellement devant",
      "L'extinction soudaine de la machine",
      "Un manque d'espace disque",
      "Un arrêt sur signal SIGKILL"
    ],
    "choices": [
      "Une situation où un processus prêt ne reçoit jamais le CPU ou une ressource car d'autres processus plus prioritaires lui passent perpétuellement devant",
      "L'extinction soudaine de la machine",
      "Un manque d'espace disque",
      "Un arrêt sur signal SIGKILL"
    ],
    "correctAnswer": 0,
    "explanation": "La famine (starvation) survient quand une politique d'ordonnancement injuste néglige indéfiniment un processus à basse priorité. Elle est corrigée par 'le vieillissement' (Aging).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q22",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Facile",
    "question": "Quel composant matériel du processeur traduit les adresses logiques/virtuelles générées par les programmes en adresses physiques de la RAM ?",
    "options": [
      "La MMU (Memory Management Unit)",
      "L'ALU",
      "Le contrôleur DMA",
      "La FPU"
    ],
    "choices": [
      "La MMU (Memory Management Unit)",
      "L'ALU",
      "Le contrôleur DMA",
      "La FPU"
    ],
    "correctAnswer": 0,
    "explanation": "La MMU (Memory Management Unit) traduit à la volée chaque adresse virtuelle en adresse physique en consultant la table des pages.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q23",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Facile",
    "question": "Quelle est la taille standard typique d'une page mémoire sous les architectures x86 / x86-64 traditionnelles ?",
    "options": [
      "4 Ko (4096 octets)",
      "64 Ko",
      "1 Mo",
      "512 octets"
    ],
    "choices": [
      "4 Ko (4096 octets)",
      "64 Ko",
      "1 Mo",
      "512 octets"
    ],
    "correctAnswer": 0,
    "explanation": "La taille standard de page en x86 est de 4 Ko ($2^{12}$ octets), bien que des 'huge pages' de 2 Mo ou 1 Go existent aussi.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q24",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que le TLB (Translation Lookaside Buffer) dans un processeur ?",
    "options": [
      "Une mémoire cache matérielle ultrarapide conservant les correspondances récentes entre numéros de pages virtuelles et cadres physiques pour accélérer la traduction d'adresse",
      "Le registre de pile",
      "Un fichier temporaire sur disque dur",
      "Le bus de données mémoire"
    ],
    "choices": [
      "Une mémoire cache matérielle ultrarapide conservant les correspondances récentes entre numéros de pages virtuelles et cadres physiques pour accélérer la traduction d'adresse",
      "Le registre de pile",
      "Un fichier temporaire sur disque dur",
      "Le bus de données mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "Le TLB met en cache les entrées de la table des pages. Un hit TLB permet de traduire l'adresse en 1 cycle sans parcourir l'arborescence des tables en mémoire vive.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q25",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un défaut de page (Page Fault) ?",
    "options": [
      "Une interruption matérielle déclenchée par la MMU lorsqu'un processus tente d'accéder à une page virtuelle valide qui n'est pas actuellement présente en mémoire RAM physique (car swapée sur disque ou non encore chargée)",
      "Une corruption matérielle d'une barrette de RAM",
      "Une tentative d'écriture dans un fichier protégé",
      "Un dépassement de pile récursif"
    ],
    "choices": [
      "Une interruption matérielle déclenchée par la MMU lorsqu'un processus tente d'accéder à une page virtuelle valide qui n'est pas actuellement présente en mémoire RAM physique (car swapée sur disque ou non encore chargée)",
      "Une corruption matérielle d'une barrette de RAM",
      "Une tentative d'écriture dans un fichier protégé",
      "Un dépassement de pile récursif"
    ],
    "correctAnswer": 0,
    "explanation": "Le page fault interrompt le processeur pour que le noyau aille charger la page manquante depuis le disque (ou partition swap) vers un cadre disponible en RAM.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q26",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Difficile",
    "question": "Quelle est la différence entre la fragmentation interne et la fragmentation externe de la mémoire ?",
    "options": [
      "La fragmentation interne correspond à l'espace mémoire gaspillé à l'intérieur d'un bloc alloué de taille fixe non entièrement utilisé, tandis que la fragmentation externe correspond à de petits espaces libres dispersés entre des blocs alloués, trop petits pour satisfaire une nouvelle allocation contiguë",
      "La fragmentation interne concerne le disque dur",
      "La fragmentation externe ne se produit jamais avec la pagination",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "La fragmentation interne correspond à l'espace mémoire gaspillé à l'intérieur d'un bloc alloué de taille fixe non entièrement utilisé, tandis que la fragmentation externe correspond à de petits espaces libres dispersés entre des blocs alloués, trop petits pour satisfaire une nouvelle allocation contiguë",
      "La fragmentation interne concerne le disque dur",
      "La fragmentation externe ne se produit jamais avec la pagination",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "La pagination élimine totalement la fragmentation externe (car tout cadre physique est interchangeable), mais souffre d'une légère fragmentation interne sur la dernière page allouée.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q27",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'écroulement de mémoire virtuelle (Thrashing) ?",
    "options": [
      "Une situation critique où le système passe l'immense majorité de son temps à charger et décharger des pages entre la RAM et le disque (swapping) au détriment de toute exécution utile des programmes",
      "L'effacement sécurisé d'un disque dur",
      "Une attaque par dépassement de tampon",
      "Le formatage d'une partition"
    ],
    "choices": [
      "Une situation critique où le système passe l'immense majorité de son temps à charger et décharger des pages entre la RAM et le disque (swapping) au détriment de toute exécution utile des programmes",
      "L'effacement sécurisé d'un disque dur",
      "Une attaque par dépassement de tampon",
      "Le formatage d'une partition"
    ],
    "correctAnswer": 0,
    "explanation": "Le thrashing survient quand la somme des ensembles de travail (Working Sets) de tous les processus dépasse la capacité totale de la RAM physique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q28",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Moyen",
    "question": "Quel algorithme de remplacement de page remplace la page qui n'a pas été consultée depuis le plus longtemps ?",
    "options": [
      "LRU (Least Recently Used)",
      "FIFO (First In, First Out)",
      "LFU (Least Frequently Used)",
      "Algorithme optimal de Bélády"
    ],
    "choices": [
      "LRU (Least Recently Used)",
      "FIFO (First In, First Out)",
      "LFU (Least Frequently Used)",
      "Algorithme optimal de Bélády"
    ],
    "correctAnswer": 0,
    "explanation": "LRU (Least Recently Used) exploite le principe de localité temporelle en évacuant la page dont l'accès est le plus ancien dans le passé.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q29",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'Anomalie de Bélády en gestion de mémoire ?",
    "options": [
      "Un phénomène contre-intuitif avec l'algorithme FIFO où l'augmentation du nombre de cadres de mémoire physique disponibles entraîne une AUGMENTATION du nombre de défauts de page",
      "Une panne de processeur sous forte charge",
      "L'impossibilité de swapper sur un disque SSD",
      "Une corruption de la table des matières"
    ],
    "choices": [
      "Un phénomène contre-intuitif avec l'algorithme FIFO où l'augmentation du nombre de cadres de mémoire physique disponibles entraîne une AUGMENTATION du nombre de défauts de page",
      "Une panne de processeur sous forte charge",
      "L'impossibilité de swapper sur un disque SSD",
      "Une corruption de la table des matières"
    ],
    "correctAnswer": 0,
    "explanation": "Découverte par László Bélády en 1969, cette anomalie affecte certains algorithmes comme FIFO (qui ne sont pas des algorithmes de pile comme LRU).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q30",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Facile",
    "question": "À quoi sert l'espace d'échange (Partition Swap) sous Linux ?",
    "options": [
      "À prolonger virtuellement la mémoire RAM en utilisant une zone du stockage de masse pour y décharger temporairement les pages inactives",
      "À accélérer la carte graphique",
      "À stocker les fichiers journaux du système",
      "À faire des sauvegardes de sécurité quotidiennes"
    ],
    "choices": [
      "À prolonger virtuellement la mémoire RAM en utilisant une zone du stockage de masse pour y décharger temporairement les pages inactives",
      "À accélérer la carte graphique",
      "À stocker les fichiers journaux du système",
      "À faire des sauvegardes de sécurité quotidiennes"
    ],
    "correctAnswer": 0,
    "explanation": "Le swap offre un filet de sécurité lorsque la RAM sature en déchargeant les pages mémoires peu utilisées vers le disque dur ou SSD.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q31",
    "part": 6,
    "topic": "Gestion de la mémoire",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que le mécanisme Copy-On-Write (COW) lors de l'appel système `fork()` sous Linux ?",
    "options": [
      "Le processus enfant partage initialement les mêmes pages physiques que son parent en lecture seule ; une page n'est réellement dupliquée en RAM que lorsque l'un des deux tente d'y écrire",
      "Une sauvegarde automatique sur bande magnétique",
      "Une copie des registres uniquement",
      "Un clonage physique intégral immédiat de toute la RAM du processus"
    ],
    "choices": [
      "Le processus enfant partage initialement les mêmes pages physiques que son parent en lecture seule ; une page n'est réellement dupliquée en RAM que lorsque l'un des deux tente d'y écrire",
      "Une sauvegarde automatique sur bande magnétique",
      "Une copie des registres uniquement",
      "Un clonage physique intégral immédiat de toute la RAM du processus"
    ],
    "correctAnswer": 0,
    "explanation": "Copy-On-Write (COW) rend `fork()` quasi instantané et économe en RAM : aucune copie mémoire physique n'a lieu tant qu'aucune écriture modificatrice n'intervient.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q32",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un Inode (index node) dans un système de fichiers Unix / Linux (comme ext4) ?",
    "options": [
      "Une structure de données stockant toutes les métadonnées d'un fichier (taille, permissions, propriétaire, horodatages, pointeurs vers les blocs de données) à l'exception de son nom",
      "Le contenu textuel brut du fichier",
      "Le nom du fichier affiché dans l'explorateur",
      "Le mot de passe de protection du fichier"
    ],
    "choices": [
      "Une structure de données stockant toutes les métadonnées d'un fichier (taille, permissions, propriétaire, horodatages, pointeurs vers les blocs de données) à l'exception de son nom",
      "Le contenu textuel brut du fichier",
      "Le nom du fichier affiché dans l'explorateur",
      "Le mot de passe de protection du fichier"
    ],
    "correctAnswer": 0,
    "explanation": "L'inode contient toutes les métadonnées et pointeurs de blocs du fichier. Le nom du fichier est stocké uniquement dans les répertoires sous forme d'entrées (nom -> numéro d'inode).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q33",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre un lien matériel (Hard link) et un lien symbolique (Soft link / Symlink) sous Linux ?",
    "options": [
      "Un lien matériel pointe directement vers le même numéro d'inode que le fichier cible sur le même système de fichiers, tandis qu'un lien symbolique est un fichier spécial contenant le chemin textuel vers la cible et peut traverser plusieurs partitions",
      "Un lien matériel copie les données sur disque",
      "Un lien symbolique ne fonctionne que pour les exécutables",
      "Supprimer un lien matériel supprime immédiatement le fichier même s'il reste d'autres liens"
    ],
    "choices": [
      "Un lien matériel pointe directement vers le même numéro d'inode que le fichier cible sur le même système de fichiers, tandis qu'un lien symbolique est un fichier spécial contenant le chemin textuel vers la cible et peut traverser plusieurs partitions",
      "Un lien matériel copie les données sur disque",
      "Un lien symbolique ne fonctionne que pour les exécutables",
      "Supprimer un lien matériel supprime immédiatement le fichier même s'il reste d'autres liens"
    ],
    "correctAnswer": 0,
    "explanation": "Un hardlink partage le même inode et incrémente son compteur de liens. Un symlink est un petit fichier contenant le chemin cible et peut pointer vers des répertoires ou des disques différents.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q34",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Difficile",
    "question": "Que se passe-t-il quand on exécute `rm fichier` alors qu'un processus maintient ce fichier ouvert en lecture/écriture sous Linux ?",
    "options": [
      "Le nom du fichier est retiré du répertoire et le compteur de liens de l'inode est décrémenté, mais les blocs de données restent alloués sur disque tant que le processus ne ferme pas son descripteur de fichier",
      "La commande rm échoue avec un code d'erreur 'Fichier verrouillé'",
      "Le processus écrivant dans le fichier est immédiatement tué",
      "Le système d'exploitation redémarre"
    ],
    "choices": [
      "Le nom du fichier est retiré du répertoire et le compteur de liens de l'inode est décrémenté, mais les blocs de données restent alloués sur disque tant que le processus ne ferme pas son descripteur de fichier",
      "La commande rm échoue avec un code d'erreur 'Fichier verrouillé'",
      "Le processus écrivant dans le fichier est immédiatement tué",
      "Le système d'exploitation redémarre"
    ],
    "correctAnswer": 0,
    "explanation": "Sous Linux, la libération physique des blocs et de l'inode ne se produit que lorsque le nombre de liens tombe à 0 ET que le nombre de descripteurs ouverts tombe à 0.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q35",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que le système de fichiers virtuel `/proc` sous Linux ?",
    "options": [
      "Une interface en mémoire vive générée dynamiquement par le noyau permettant d'inspecter et configurer les processus et paramètres du système sous forme de fichiers texte",
      "Un répertoire contenant les programmes compilés du système",
      "Un dossier de sauvegarde situé sur le disque dur",
      "Le répertoire des pilotes graphiques"
    ],
    "choices": [
      "Une interface en mémoire vive générée dynamiquement par le noyau permettant d'inspecter et configurer les processus et paramètres du système sous forme de fichiers texte",
      "Un répertoire contenant les programmes compilés du système",
      "Un dossier de sauvegarde situé sur le disque dur",
      "Le répertoire des pilotes graphiques"
    ],
    "correctAnswer": 0,
    "explanation": "`/proc` est un pseudo-système de fichiers (procfs) en RAM fournissant des informations temps réel sur le noyau et les processus (ex: `/proc/cpuinfo`, `/proc/[PID]/status`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q36",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Facile",
    "question": "Dans l'arborescence standard FHS (Filesystem Hierarchy Standard) de Linux, que contient le répertoire `/etc` ?",
    "options": [
      "Les fichiers de configuration statiques de l'ensemble du système et des services",
      "Les fichiers exécutables des utilisateurs",
      "Les fichiers temporaires",
      "Le code source du noyau"
    ],
    "choices": [
      "Les fichiers de configuration statiques de l'ensemble du système et des services",
      "Les fichiers exécutables des utilisateurs",
      "Les fichiers temporaires",
      "Le code source du noyau"
    ],
    "correctAnswer": 0,
    "explanation": "`/etc` (Editable Text Configuration) regroupe les fichiers de paramétrage de l'OS et des démons (fstab, passwd, hosts, etc.).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q37",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Moyen",
    "question": "À quoi sert la journalisation (Journaling) dans les systèmes de fichiers modernes comme ext4 ou NTFS ?",
    "options": [
      "À enregistrer les modifications dans un journal circulaire avant de les appliquer aux structures de données principales, garantissant une récupération rapide et cohérente en cas de coupure de courant",
      "À espionner les actions des utilisateurs",
      "À accélérer la vitesse de rotation des plateaux de disque",
      "À compresser les images"
    ],
    "choices": [
      "À enregistrer les modifications dans un journal circulaire avant de les appliquer aux structures de données principales, garantissant une récupération rapide et cohérente en cas de coupure de courant",
      "À espionner les actions des utilisateurs",
      "À accélérer la vitesse de rotation des plateaux de disque",
      "À compresser les images"
    ],
    "correctAnswer": 0,
    "explanation": "Le journal évite les longs contrôles d'intégrité (`fsck`) au redémarrage après un crash brutal en rejouant ou annulant les transactions inachevées.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q38",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Facile",
    "question": "Que représente le répertoire `/dev` sous Linux ?",
    "options": [
      "Les fichiers spéciaux représentant les périphériques matériels (disques, terminaux, générateurs aléatoires comme /dev/urandom)",
      "Les logiciels en cours de développement",
      "Les bibliothèques dynamiques partagées",
      "Les scripts de démarrage"
    ],
    "choices": [
      "Les fichiers spéciaux représentant les périphériques matériels (disques, terminaux, générateurs aléatoires comme /dev/urandom)",
      "Les logiciels en cours de développement",
      "Les bibliothèques dynamiques partagées",
      "Les scripts de démarrage"
    ],
    "correctAnswer": 0,
    "explanation": "Sous Unix, 'tout est fichier' : les périphériques de bloc et de caractères sont mappés dans `/dev` (ex: `/dev/sda`, `/dev/null`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q39",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le VFS (Virtual File System) dans le noyau Linux ?",
    "options": [
      "Une couche d'abstraction logicielle permettant aux applications d'utiliser les mêmes appels système (open, read, write) indépendamment du système de fichiers physique sous-jacent (ext4, btrfs, NFS, FAT)",
      "Un émulateur de disque dur",
      "Un système de fichiers chiffré",
      "Un protocole de streaming vidéo"
    ],
    "choices": [
      "Une couche d'abstraction logicielle permettant aux applications d'utiliser les mêmes appels système (open, read, write) indépendamment du système de fichiers physique sous-jacent (ext4, btrfs, NFS, FAT)",
      "Un émulateur de disque dur",
      "Un système de fichiers chiffré",
      "Un protocole de streaming vidéo"
    ],
    "correctAnswer": 0,
    "explanation": "Le VFS fournit une API unifiée et polymorphe (struct `inode_operations`, `file_operations`) masquant la complexité des différents formats de disques et réseaux.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q40",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Moyen",
    "question": "Que se passe-t-il lorsqu'un système de fichiers ext4 se retrouve à 100% d'utilisation des inodes, même s'il reste 500 Go d'espace disque disponible ?",
    "options": [
      "Il est impossible de créer le moindre nouveau fichier ou répertoire car aucun numéro d'inode libre n'est disponible pour stocker ses métadonnées",
      "Le système supprime automatiquement les anciens fichiers",
      "Les fichiers sont écrits sans nom",
      "Le système bascule en mode lecture seule automatiquement"
    ],
    "choices": [
      "Il est impossible de créer le moindre nouveau fichier ou répertoire car aucun numéro d'inode libre n'est disponible pour stocker ses métadonnées",
      "Le système supprime automatiquement les anciens fichiers",
      "Les fichiers sont écrits sans nom",
      "Le système bascule en mode lecture seule automatiquement"
    ],
    "correctAnswer": 0,
    "explanation": "L'erreur `No space left on device` survient aussi bien en cas de saturation des blocs de données que de saturation de la table des inodes (`df -i`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q41",
    "part": 6,
    "topic": "Systèmes de fichiers",
    "difficulty": "Facile",
    "question": "Quelle commande Linux permet d'afficher l'espace disque disponible et utilisé sur chaque partition montée ?",
    "options": [
      "df -h",
      "du -sh",
      "free -m",
      "ls -l"
    ],
    "choices": [
      "df -h",
      "du -sh",
      "free -m",
      "ls -l"
    ],
    "correctAnswer": 0,
    "explanation": "`df -h` (Disk Free, human-readable) liste les systèmes de fichiers montés et leur pourcentage d'occupation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q42",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Facile",
    "question": "Quelle commande Linux permet de rechercher des motifs textuels ou expressions régulières à l'intérieur de fichiers ?",
    "options": [
      "grep",
      "find",
      "locate",
      "cat"
    ],
    "choices": [
      "grep",
      "find",
      "locate",
      "cat"
    ],
    "correctAnswer": 0,
    "explanation": "`grep` (Global Regular Expression Print) filtre et affiche les lignes correspondant à un motif donné.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q43",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Facile",
    "question": "Quelle commande permet de rechercher des fichiers et répertoires dans l'arborescence selon des critères de nom, taille ou date ?",
    "options": [
      "find",
      "grep",
      "which",
      "whereis"
    ],
    "choices": [
      "find",
      "grep",
      "which",
      "whereis"
    ],
    "correctAnswer": 0,
    "explanation": "`find /chemin -name '*.log' -size +10M` explore récursivement le système de fichiers selon de multiples filtres.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q44",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Moyen",
    "question": "Que fait la redirection de flux `2>&1` dans un terminal Bash ?",
    "options": [
      "Elle redirige la sortie d'erreur standard (stderr, descripteur 2) vers la même destination que la sortie standard (stdout, descripteur 1)",
      "Elle double la vitesse d'exécution de la commande",
      "Elle envoie le résultat vers deux fichiers distincts",
      "Elle échange l'entrée et la sortie"
    ],
    "choices": [
      "Elle redirige la sortie d'erreur standard (stderr, descripteur 2) vers la même destination que la sortie standard (stdout, descripteur 1)",
      "Elle double la vitesse d'exécution de la commande",
      "Elle envoie le résultat vers deux fichiers distincts",
      "Elle échange l'entrée et la sortie"
    ],
    "correctAnswer": 0,
    "explanation": "`cmd > output.log 2>&1` fusionne stderr (2) dans le même flux que stdout (1) vers le fichier journal.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q45",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Facile",
    "question": "Quelle commande permet de modifier les permissions d'accès (lecture, écriture, exécution) d'un fichier sous Linux ?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "setperm"
    ],
    "choices": [
      "chmod",
      "chown",
      "chgrp",
      "setperm"
    ],
    "correctAnswer": 0,
    "explanation": "`chmod` (Change Mode) modifie les bits de permission (ex: `chmod 755 script.sh`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q46",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Moyen",
    "question": "À quelles permissions correspond la notation octale `chmod 754 fichier` ?",
    "options": [
      "Propriétaire : rwx (7), Groupe : r-x (5), Autres : r-- (4)",
      "Propriétaire : r-x, Groupe : rwx, Autres : rw-",
      "Tout le monde a tous les droits",
      "Propriétaire en lecture seule, Autres en exécution"
    ],
    "choices": [
      "Propriétaire : rwx (7), Groupe : r-x (5), Autres : r-- (4)",
      "Propriétaire : r-x, Groupe : rwx, Autres : rw-",
      "Tout le monde a tous les droits",
      "Propriétaire en lecture seule, Autres en exécution"
    ],
    "correctAnswer": 0,
    "explanation": "En binaire/octal : r=4, w=2, x=1. Donc 7 = 4+2+1 (rwx), 5 = 4+1 (r-x), 4 = 4 (r--).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q47",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Moyen",
    "question": "Que réalise l'opérateur tube (Pipe `|`) entre deux commandes Linux (`cmd1 | cmd2`) ?",
    "options": [
      "Il connecte la sortie standard (stdout) de `cmd1` directement à l'entrée standard (stdin) de `cmd2` via un tampon mémoire sans fichier intermédiaire",
      "Il exécute cmd2 uniquement si cmd1 échoue",
      "Il exécute les deux commandes l'une après l'autre en ignorant les sorties",
      "Il compare les performances des deux commandes"
    ],
    "choices": [
      "Il connecte la sortie standard (stdout) de `cmd1` directement à l'entrée standard (stdin) de `cmd2` via un tampon mémoire sans fichier intermédiaire",
      "Il exécute cmd2 uniquement si cmd1 échoue",
      "Il exécute les deux commandes l'une après l'autre en ignorant les sorties",
      "Il compare les performances des deux commandes"
    ],
    "correctAnswer": 0,
    "explanation": "Le pipe Unix relie la sortie d'un processus à l'entrée du suivant en flux continu, incarnant la philosophie Unix.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q48",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Difficile",
    "question": "Quelle commande permet de remplacer par substitution de texte le mot 'rouge' par 'bleu' dans un flux avec `sed` ?",
    "options": [
      "sed 's/rouge/bleu/g'",
      "sed 'replace rouge bleu'",
      "sed '/rouge -> bleu/'",
      "sed 'change rouge to bleu'"
    ],
    "choices": [
      "sed 's/rouge/bleu/g'",
      "sed 'replace rouge bleu'",
      "sed '/rouge -> bleu/'",
      "sed 'change rouge to bleu'"
    ],
    "correctAnswer": 0,
    "explanation": "La syntaxe de substitution du Stream Editor `sed` est `s/motif/remplacement/flags`, où `g` remplace toutes les occurrences de la ligne.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q49",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Difficile",
    "question": "En script Bash, que contient la variable spéciale `$?` immédiatement après l'exécution d'une commande ?",
    "options": [
      "Le code de retour (Exit Status) de la dernière commande exécutée (0 signifiant généralement le succès)",
      "Le PID du script courant",
      "Le nombre d'arguments passés au script",
      "Le nom de l'utilisateur connecté"
    ],
    "choices": [
      "Le code de retour (Exit Status) de la dernière commande exécutée (0 signifiant généralement le succès)",
      "Le PID du script courant",
      "Le nombre d'arguments passés au script",
      "Le nom de l'utilisateur connecté"
    ],
    "correctAnswer": 0,
    "explanation": "`$?` stocke la valeur de sortie (0 pour succès, différent de zéro pour une erreur).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q50",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Moyen",
    "question": "Quelle commande interactive sous Linux affiche en temps réel les processus actifs, l'usage CPU, la mémoire et la charge système (Load Average) ?",
    "options": [
      "top (ou htop)",
      "ps",
      "uptime",
      "free"
    ],
    "choices": [
      "top (ou htop)",
      "ps",
      "uptime",
      "free"
    ],
    "correctAnswer": 0,
    "explanation": "`top` et son pendant coloré `htop` offrent une vue dynamique et interactive du gestionnaire de tâches système.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q51",
    "part": 6,
    "topic": "Commandes Linux",
    "difficulty": "Facile",
    "question": "Quelle commande permet de créer une archive compressée `.tar.gz` contenant un dossier sous Linux ?",
    "options": [
      "tar -czvf archive.tar.gz dossier/",
      "zip -create archive.tar.gz dossier/",
      "gzip -all dossier/",
      "pack dossier/ archive.tar.gz"
    ],
    "choices": [
      "tar -czvf archive.tar.gz dossier/",
      "zip -create archive.tar.gz dossier/",
      "gzip -all dossier/",
      "pack dossier/ archive.tar.gz"
    ],
    "correctAnswer": 0,
    "explanation": "`tar -czvf` combine : c (create), z (gzip), v (verbose), f (file).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q52",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Facile",
    "question": "Quel appel système Unix crée un nouveau processus identique en dupliquant le processus appelant ?",
    "options": [
      "fork()",
      "exec()",
      "clone()",
      "create()"
    ],
    "choices": [
      "fork()",
      "exec()",
      "clone()",
      "create()"
    ],
    "correctAnswer": 0,
    "explanation": "`fork()` clone le processus appelant. Il retourne 0 dans le processus fils et le PID du fils dans le processus père.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q53",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Moyen",
    "question": "Quel appel système remplace l'image mémoire du processus courant par un nouvel exécutable binaire ?",
    "options": [
      "execve() (ou famille exec)",
      "fork()",
      "system()",
      "load()"
    ],
    "choices": [
      "execve() (ou famille exec)",
      "fork()",
      "system()",
      "load()"
    ],
    "correctAnswer": 0,
    "explanation": "La famille `exec()` écrase le segment de texte, les données et la pile du processus courant avec un nouveau binaire pour l'exécuter avec le même PID.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q54",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Moyen",
    "question": "Quel appel système permet à un processus parent de se bloquer en attendant la terminaison d'un de ses processus enfants ?",
    "options": [
      "wait() (ou waitpid())",
      "sleep()",
      "pause()",
      "halt()"
    ],
    "choices": [
      "wait() (ou waitpid())",
      "sleep()",
      "pause()",
      "halt()"
    ],
    "correctAnswer": 0,
    "explanation": "`wait(&status)` suspend le père jusqu'à la mort d'un fils et récupère son code de sortie, évitant la création de processus zombies.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q55",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Difficile",
    "question": "Quels sont les deux signaux POSIX standards qui ne peuvent être ni interceptés, ni bloqués, ni ignorés par aucun processus ?",
    "options": [
      "SIGKILL (9) et SIGSTOP (19)",
      "SIGINT (2) et SIGTERM (15)",
      "SIGSEGV (11) et SIGFPE (8)",
      "SIGHUP (1) et SIGQUIT (3)"
    ],
    "choices": [
      "SIGKILL (9) et SIGSTOP (19)",
      "SIGINT (2) et SIGTERM (15)",
      "SIGSEGV (11) et SIGFPE (8)",
      "SIGHUP (1) et SIGQUIT (3)"
    ],
    "correctAnswer": 0,
    "explanation": "SIGKILL et SIGSTOP sont gérés directement par le noyau sans jamais être délivrés à la boucle applicative, assurant un arrêt forcé garanti.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q56",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Facile",
    "question": "Quel signal est envoyé à un processus en premier plan dans un terminal lorsqu'on appuie sur la combinaison de touches Ctrl+C ?",
    "options": [
      "SIGINT (Signal Interrupt)",
      "SIGKILL",
      "SIGTERM",
      "SIGTSTP"
    ],
    "choices": [
      "SIGINT (Signal Interrupt)",
      "SIGKILL",
      "SIGTERM",
      "SIGTSTP"
    ],
    "correctAnswer": 0,
    "explanation": "Ctrl+C envoie SIGINT (signal 2), demandant courtoisement l'interruption du processus (pouvant être intercepté pour nettoyer des ressources).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q57",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Facile",
    "question": "Quel signal est envoyé par la combinaison de touches Ctrl+Z dans un terminal pour suspendre temporairement un processus en arrière-plan ?",
    "options": [
      "SIGTSTP (Terminal Stop)",
      "SIGQUIT",
      "SIGABRT",
      "SIGCONT"
    ],
    "choices": [
      "SIGTSTP (Terminal Stop)",
      "SIGQUIT",
      "SIGABRT",
      "SIGCONT"
    ],
    "correctAnswer": 0,
    "explanation": "Ctrl+Z génère SIGTSTP, suspendant le processus. On peut le relancer en tâche de fond avec `bg` ou au premier plan avec `fg` (via SIGCONT).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q58",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Moyen",
    "question": "Quel signal est envoyé par le noyau lorsqu'un processus tente d'accéder à une adresse mémoire virtuelle invalide ou protégée contre l'écriture ?",
    "options": [
      "SIGSEGV (Segmentation Fault)",
      "SIGILL",
      "SIGBUS",
      "SIGSYS"
    ],
    "choices": [
      "SIGSEGV (Segmentation Fault)",
      "SIGILL",
      "SIGBUS",
      "SIGSYS"
    ],
    "correctAnswer": 0,
    "explanation": "SIGSEGV (signal 11) sanctionne une violation d'accès mémoire (déréférencement de pointeur nul, écriture sur code en lecture seule, etc.).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q59",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Difficile",
    "question": "À quoi sert l'appel système `pipe(int pipefd[2])` sous Unix ?",
    "options": [
      "À créer un canal de communication unidirectionnel en mémoire tampon entre deux processus apparentés, `pipefd[0]` pour la lecture et `pipefd[1]` pour l'écriture",
      "À ouvrir un port réseau TCP",
      "À crypter un fichier sur disque",
      "À dupliquer un écran de terminal"
    ],
    "choices": [
      "À créer un canal de communication unidirectionnel en mémoire tampon entre deux processus apparentés, `pipefd[0]` pour la lecture et `pipefd[1]` pour l'écriture",
      "À ouvrir un port réseau TCP",
      "À crypter un fichier sur disque",
      "À dupliquer un écran de terminal"
    ],
    "correctAnswer": 0,
    "explanation": "`pipe()` crée deux descripteurs de fichiers pour l'IPC (Inter-Process Communication) anonyme dans le noyau.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q60",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Difficile",
    "question": "Quel appel système permet d'associer une fonction de traitement (Signal Handler) personnalisée à la réception d'un signal donné sous Unix ?",
    "options": [
      "sigaction() (ou signal())",
      "setjmp()",
      "register_signal()",
      "catch_event()"
    ],
    "choices": [
      "sigaction() (ou signal())",
      "setjmp()",
      "register_signal()",
      "catch_event()"
    ],
    "correctAnswer": 0,
    "explanation": "`sigaction()` est l'appel système POSIX robuste pour enregistrer un gestionnaire de signal avec masquage contrôlé des signaux concurrents.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q61",
    "part": 6,
    "topic": "Appels système & Signaux",
    "difficulty": "Moyen",
    "question": "Quel est le comportement par défaut de la commande `kill PID` sous Linux lorsqu'aucun numéro de signal n'est spécifié en paramètre ?",
    "options": [
      "Elle envoie le signal SIGTERM (15)",
      "Elle envoie SIGKILL (9)",
      "Elle envoie SIGINT (2)",
      "Elle redémarre le processus"
    ],
    "choices": [
      "Elle envoie le signal SIGTERM (15)",
      "Elle envoie SIGKILL (9)",
      "Elle envoie SIGINT (2)",
      "Elle redémarre le processus"
    ],
    "correctAnswer": 0,
    "explanation": "Par défaut, `kill` envoie SIGTERM (15), invitant le processus à s'arrêter proprement en sauvegardant ses données.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q62",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Facile",
    "question": "Quelle est la principale caractéristique architecturale d'un noyau monolithique comme Linux ?",
    "options": [
      "Tous les services essentiels (ordonnanceur, gestion mémoire, pilotes de périphériques, systèmes de fichiers, pile réseau) s'exécutent dans le même espace d'adressage privilégié en mode noyau (Ring 0)",
      "Chaque pilote s'exécute dans un processus utilisateur séparé",
      "Le noyau ne gère que les interruptions matérielles",
      "Le noyau ne peut pas être mis à jour sans changer de processeur"
    ],
    "choices": [
      "Tous les services essentiels (ordonnanceur, gestion mémoire, pilotes de périphériques, systèmes de fichiers, pile réseau) s'exécutent dans le même espace d'adressage privilégié en mode noyau (Ring 0)",
      "Chaque pilote s'exécute dans un processus utilisateur séparé",
      "Le noyau ne gère que les interruptions matérielles",
      "Le noyau ne peut pas être mis à jour sans changer de processeur"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un noyau monolithique, tous les sous-systèmes tournent dans le même espace mémoire privilégié pour des performances maximales d'appel direct.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q63",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Moyen",
    "question": "Quelle est la philosophie de conception d'un micro-noyau (Microkernel comme Minix ou QNX) ?",
    "options": [
      "Réduire le code en mode privilégié au strict minimum (gestion basique de mémoire, IPC et ordonnancement minimal), tous les pilotes et systèmes de fichiers tournant sous forme de serveurs isolés en espace utilisateur (Ring 3)",
      "Avoir un noyau dont la taille binaire est inférieure à 1 Ko",
      "Fonctionner uniquement sur microcontrôleurs",
      "Bannir l'utilisation du langage C"
    ],
    "choices": [
      "Réduire le code en mode privilégié au strict minimum (gestion basique de mémoire, IPC et ordonnancement minimal), tous les pilotes et systèmes de fichiers tournant sous forme de serveurs isolés en espace utilisateur (Ring 3)",
      "Avoir un noyau dont la taille binaire est inférieure à 1 Ko",
      "Fonctionner uniquement sur microcontrôleurs",
      "Bannir l'utilisation du langage C"
    ],
    "correctAnswer": 0,
    "explanation": "Un micro-noyau privilégie la modularité et la robustesse : si un pilote de carte réseau crashe, il s'agit d'un simple processus utilisateur qui n'entraîne pas la chute de tout le système d'exploitation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q64",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un anneau de protection (Protection Ring) matériel comme le Ring 0 et le Ring 3 en x86 ?",
    "options": [
      "Des niveaux de privilèges matériels imposés par le processeur : le Ring 0 (mode superviseur/noyau) a un accès illimité au matériel, tandis que le Ring 3 (mode utilisateur) restreint les instructions sensibles pour protéger le système",
      "Des anneaux physiques sur la carte mère",
      "Une topologie de réseau Token Ring",
      "Une boucle d'ordonnancement sans fin"
    ],
    "choices": [
      "Des niveaux de privilèges matériels imposés par le processeur : le Ring 0 (mode superviseur/noyau) a un accès illimité au matériel, tandis que le Ring 3 (mode utilisateur) restreint les instructions sensibles pour protéger le système",
      "Des anneaux physiques sur la carte mère",
      "Une topologie de réseau Token Ring",
      "Une boucle d'ordonnancement sans fin"
    ],
    "correctAnswer": 0,
    "explanation": "La séparation matérielle Kernel Mode (Ring 0) vs User Mode (Ring 3) isole les applications des données critiques du système d'exploitation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q65",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Moyen",
    "question": "Comment un programme utilisateur en Ring 3 bascule-t-il légalement en mode noyau (Ring 0) pour solliciter un service de l'OS ?",
    "options": [
      "En déclenchant une interruption logicielle ou instruction CPU dédiée (`syscall` / `sysenter`) qui effectue une transition contrôlée vers la table des vecteurs d'interruption du noyau",
      "En modifiant directement la mémoire du noyau avec un pointeur",
      "En appelant la fonction main avec des privilèges",
      "En désactivant le pare-feu"
    ],
    "choices": [
      "En déclenchant une interruption logicielle ou instruction CPU dédiée (`syscall` / `sysenter`) qui effectue une transition contrôlée vers la table des vecteurs d'interruption du noyau",
      "En modifiant directement la mémoire du noyau avec un pointeur",
      "En appelant la fonction main avec des privilèges",
      "En désactivant le pare-feu"
    ],
    "correctAnswer": 0,
    "explanation": "L'instruction `syscall` provoque une transition matérielle vers le code du noyau aux points d'entrée prédéfinis par l'OS.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q66",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un module chargeable du noyau (LKM - Loadable Kernel Module) sous Linux ?",
    "options": [
      "Un fichier d'extension de code compilé (`.ko`) qui peut être inséré ou déchargé dynamiquement dans le noyau en cours d'exécution sans redémarrer le système",
      "Une application utilisateur en Java",
      "Un script de sauvegarde",
      "Une mise à jour du BIOS"
    ],
    "choices": [
      "Un fichier d'extension de code compilé (`.ko`) qui peut être inséré ou déchargé dynamiquement dans le noyau en cours d'exécution sans redémarrer le système",
      "Une application utilisateur en Java",
      "Un script de sauvegarde",
      "Une mise à jour du BIOS"
    ],
    "correctAnswer": 0,
    "explanation": "Les LKMs permettent d'ajouter des pilotes de périphériques à la volée (`insmod`, `modprobe`, `rmmod`) sans recompiler tout le noyau monolithique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q67",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Difficile",
    "question": "Quelle est la différence entre une interruption matérielle (Hardware Interrupt) et une exception processeur (Trap / Fault) ?",
    "options": [
      "Une interruption matérielle est asynchrone et déclenchée par un composant externe (clavier, carte réseau, disque), tandis qu'une exception processeur est synchrone et générée directement par l'exécution d'une instruction (division par zéro, défaut de page, syscall)",
      "Une exception matérielle éteint le système",
      "Les interruptions ne concernent que les imprimantes",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "Une interruption matérielle est asynchrone et déclenchée par un composant externe (clavier, carte réseau, disque), tandis qu'une exception processeur est synchrone et générée directement par l'exécution d'une instruction (division par zéro, défaut de page, syscall)",
      "Une exception matérielle éteint le système",
      "Les interruptions ne concernent que les imprimantes",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "L'interruption matérielle est imprévisible (asynchrone). Le piège (trap) ou exception interne est la conséquence immédiate et déterministe de l'instruction en cours.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q68",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Moyen",
    "question": "Quelle commande Linux permet d'afficher les messages du tampon circulaire du noyau (Kernel Ring Buffer), notamment utiles lors du débogage matériel au démarrage ?",
    "options": [
      "dmesg",
      "journalctl -k",
      "kernlog",
      "sysmsg"
    ],
    "choices": [
      "dmesg",
      "journalctl -k",
      "kernlog",
      "sysmsg"
    ],
    "correctAnswer": 0,
    "explanation": "`dmesg` (Display Message) affiche le tampon circulaire du noyau où sont consignées les détections de périphériques et alertes matérielles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q69",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un système d'exploitation temps réel dur (Hard Real-Time OS) par rapport à un OS à temps partagé généraliste comme Linux standard ?",
    "options": [
      "Un OS qui garantit mathématiquement qu'une tâche critique sera exécutée avant son échéance temporelle stricte (deadline), tout dépassement étant considéré comme une défaillance catastrophique du système",
      "Un OS qui tourne à plus de 5 GHz",
      "Un OS sans interface graphique",
      "Un OS qui ne plante jamais"
    ],
    "choices": [
      "Un OS qui garantit mathématiquement qu'une tâche critique sera exécutée avant son échéance temporelle stricte (deadline), tout dépassement étant considéré comme une défaillance catastrophique du système",
      "Un OS qui tourne à plus de 5 GHz",
      "Un OS sans interface graphique",
      "Un OS qui ne plante jamais"
    ],
    "correctAnswer": 0,
    "explanation": "En temps réel dur (avionique, dispositifs médicaux, freinage ABS), la justesse temporelle est aussi critique que la justesse algorithmique : rater une deadline est fatal.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q70",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Facile",
    "question": "À quoi sert le système d'initialisation `systemd` sous la majorité des distributions Linux modernes ?",
    "options": [
      "À initialiser l'espace utilisateur, gérer les démons et services d'arrière-plan, contrôler les montages et journaliser les événements système en tant que processus PID 1",
      "À remplacer le BIOS",
      "À compiler le code C",
      "À naviguer sur le web"
    ],
    "choices": [
      "À initialiser l'espace utilisateur, gérer les démons et services d'arrière-plan, contrôler les montages et journaliser les événements système en tant que processus PID 1",
      "À remplacer le BIOS",
      "À compiler le code C",
      "À naviguer sur le web"
    ],
    "correctAnswer": 0,
    "explanation": "`systemd` est le système d'initialisation et de gestion de services moderne de Linux remplaçant l'ancien SysV init.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q71",
    "part": 6,
    "topic": "Architecture du noyau",
    "difficulty": "Moyen",
    "question": "Quelle commande `systemctl` permet d'activer un service pour qu'il démarre automatiquement à chaque boot de la machine sous Linux ?",
    "options": [
      "systemctl enable service_name",
      "systemctl start service_name",
      "systemctl auto service_name",
      "systemctl boot service_name"
    ],
    "choices": [
      "systemctl enable service_name",
      "systemctl start service_name",
      "systemctl auto service_name",
      "systemctl boot service_name"
    ],
    "correctAnswer": 0,
    "explanation": "`systemctl start` lance le service immédiatement dans la session courante, tandis que `systemctl enable` crée les liens symboliques pour son lancement au démarrage futur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q72",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Facile",
    "question": "Quel est l'identifiant numérique UID du compte super-utilisateur `root` sous Linux ?",
    "options": [
      "UID 0",
      "UID 1",
      "UID 1000",
      "UID -1"
    ],
    "choices": [
      "UID 0",
      "UID 1",
      "UID 1000",
      "UID -1"
    ],
    "correctAnswer": 0,
    "explanation": "L'utilisateur `root` (administrateur absolu) a historiquement et universellement l'UID 0.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q73",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Facile",
    "question": "Dans quel fichier système sont stockés les comptes utilisateurs, leurs shells et leurs répertoires personnels sous Linux ?",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/users",
      "/etc/group"
    ],
    "choices": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/users",
      "/etc/group"
    ],
    "correctAnswer": 0,
    "explanation": "`/etc/passwd` est lisible par tous et contient la liste des utilisateurs, UID, GID, home directory et shell par défaut.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q74",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Moyen",
    "question": "Pourquoi les mots de passe chiffrés sous Linux sont-ils déplacés dans `/etc/shadow` plutôt que laissés dans `/etc/passwd` ?",
    "options": [
      "Parce que `/etc/passwd` doit rester lisible par tous les utilisateurs pour le bon fonctionnement des commandes comme `ls`, alors que `/etc/shadow` n'est lisible que par le superutilisateur root afin de prévenir les attaques hors-ligne par dictionnaire",
      "Pour économiser de l'espace disque",
      "Parce que /etc/passwd est effacé à chaque redémarrage",
      "C'est une obligation légale internationale"
    ],
    "choices": [
      "Parce que `/etc/passwd` doit rester lisible par tous les utilisateurs pour le bon fonctionnement des commandes comme `ls`, alors que `/etc/shadow` n'est lisible que par le superutilisateur root afin de prévenir les attaques hors-ligne par dictionnaire",
      "Pour économiser de l'espace disque",
      "Parce que /etc/passwd est effacé à chaque redémarrage",
      "C'est une obligation légale internationale"
    ],
    "correctAnswer": 0,
    "explanation": "Le fichier `shadow` protège les empreintes hachées (hashes salés) des mots de passe en restreignant sa lecture au seul administrateur root.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q75",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Moyen",
    "question": "À quoi sert le bit spécial `SetUID` (SUID) lorsqu'il est positionné sur un fichier binaire exécutable sous Linux (ex: `/usr/bin/passwd`) ?",
    "options": [
      "Il permet au binaire de s'exécuter avec les privilèges du propriétaire du fichier (souvent root) plutôt qu'avec les privilèges de l'utilisateur qui le lance",
      "Il empêche toute modification du fichier",
      "Il efface le fichier après exécution",
      "Il chiffre le code binaire en mémoire"
    ],
    "choices": [
      "Il permet au binaire de s'exécuter avec les privilèges du propriétaire du fichier (souvent root) plutôt qu'avec les privilèges de l'utilisateur qui le lance",
      "Il empêche toute modification du fichier",
      "Il efface le fichier après exécution",
      "Il chiffre le code binaire en mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "Le bit SUID (ex: `chmod u+s binaire`) élève temporairement les droits du processus au niveau de son propriétaire afin de permettre des actions restreintes (ex: modifier `/etc/shadow`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q76",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Moyen",
    "question": "À quoi sert le `Sticky Bit` positionné sur un répertoire partagé comme `/tmp` sous Linux ?",
    "options": [
      "Il empêche les utilisateurs de supprimer ou renommer des fichiers appartenant à d'autres utilisateurs, même si tout le monde dispose du droit d'écriture sur le répertoire",
      "Il colle les fichiers entre eux pour former un bloc unique",
      "Il empêche toute écriture dans le répertoire",
      "Il compresse automatiquement le contenu"
    ],
    "choices": [
      "Il empêche les utilisateurs de supprimer ou renommer des fichiers appartenant à d'autres utilisateurs, même si tout le monde dispose du droit d'écriture sur le répertoire",
      "Il colle les fichiers entre eux pour former un bloc unique",
      "Il empêche toute écriture dans le répertoire",
      "Il compresse automatiquement le contenu"
    ],
    "correctAnswer": 0,
    "explanation": "Le Sticky Bit (noté `t` dans `drwxrwxrwt /tmp`) protège les fichiers temporaires partagés contre la suppression malveillante par des tiers.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q77",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le masque de création de fichiers `umask` sous Linux ?",
    "options": [
      "Une valeur octale qui soustrait ou désactive certains bits de permission lors de la création initiale de nouveaux fichiers et répertoires",
      "Un mot de passe à usage unique",
      "Une commande pour masquer les processus",
      "Une règle de pare-feu"
    ],
    "choices": [
      "Une valeur octale qui soustrait ou désactive certains bits de permission lors de la création initiale de nouveaux fichiers et répertoires",
      "Un mot de passe à usage unique",
      "Une commande pour masquer les processus",
      "Une règle de pare-feu"
    ],
    "correctAnswer": 0,
    "explanation": "Par exemple, un umask de `022` retire les droits d'écriture pour le groupe et les autres sur les fichiers créés par défaut (666 - 022 = 644).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q78",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Facile",
    "question": "Quelle commande permet d'exécuter une commande avec les privilèges d'administration root de manière contrôlée et auditée sans ouvrir un shell root complet ?",
    "options": [
      "sudo",
      "su",
      "rootme",
      "admin"
    ],
    "choices": [
      "sudo",
      "su",
      "rootme",
      "admin"
    ],
    "correctAnswer": 0,
    "explanation": "`sudo` (SuperUser DO) exécute une commande avec privilèges délégués selon les règles configurées dans `/etc/sudoers`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q79",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Moyen",
    "question": "Quelle commande permet de modifier le propriétaire et le groupe propriétaire d'un fichier ou d'un dossier sous Linux ?",
    "options": [
      "chown",
      "chmod",
      "chgrp",
      "setuser"
    ],
    "choices": [
      "chown",
      "chmod",
      "chgrp",
      "setuser"
    ],
    "correctAnswer": 0,
    "explanation": "`chown utilisateur:groupe fichier` (Change Owner) réaffecte la propriété d'un fichier.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q80",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que SELinux (Security-Enhanced Linux) par rapport au contrôle d'accès discrétionnaire (DAC) standard d'Unix ?",
    "options": [
      "Un mécanisme de contrôle d'accès obligatoire (MAC - Mandatory Access Control) basé sur des politiques de sécurité et des contextes de sécurité (labels) qui restreint même les actions du super-utilisateur root",
      "Un antivirus commercial",
      "Un outil de chiffrement de disque",
      "Un gestionnaire de mots de passe"
    ],
    "choices": [
      "Un mécanisme de contrôle d'accès obligatoire (MAC - Mandatory Access Control) basé sur des politiques de sécurité et des contextes de sécurité (labels) qui restreint même les actions du super-utilisateur root",
      "Un antivirus commercial",
      "Un outil de chiffrement de disque",
      "Un gestionnaire de mots de passe"
    ],
    "correctAnswer": 0,
    "explanation": "Développé par la NSA, SELinux impose un contrôle d'accès obligatoire strict : chaque processus et fichier possède un label de type de domaine limitant drastiquement les dégâts en cas de faille.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q81",
    "part": 6,
    "topic": "Utilisateurs & Sécurité Linux",
    "difficulty": "Facile",
    "question": "Quel fichier de configuration système permet de restreindre ou d'autoriser quels utilisateurs ont le droit d'utiliser la commande `sudo` ?",
    "options": [
      "/etc/sudoers (édité avec visudo)",
      "/etc/hosts",
      "/etc/fstab",
      "/etc/resolv.conf"
    ],
    "choices": [
      "/etc/sudoers (édité avec visudo)",
      "/etc/hosts",
      "/etc/fstab",
      "/etc/resolv.conf"
    ],
    "correctAnswer": 0,
    "explanation": "`/etc/sudoers` régit les permissions sudo. On utilise impérativement `visudo` pour l'éditer afin d'éviter les erreurs de syntaxe bloquantes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q82",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Facile",
    "question": "Quelle est la différence fondamentale sous Unix entre un périphérique en mode caractère (Character Device) et un périphérique en mode bloc (Block Device) ?",
    "options": [
      "Un périphérique bloc transfère des blocs de données de taille fixe avec mise en cache tampon et accès aléatoire (ex: disques durs), tandis qu'un périphérique caractère gère un flux continu d'octets séquentiels non bufferisés (ex: port série, clavier)",
      "Un périphérique bloc ne fonctionne qu'avec des fichiers texte",
      "Un périphérique caractère est plus rapide",
      "Les périphériques blocs n'ont pas d'inode"
    ],
    "choices": [
      "Un périphérique bloc transfère des blocs de données de taille fixe avec mise en cache tampon et accès aléatoire (ex: disques durs), tandis qu'un périphérique caractère gère un flux continu d'octets séquentiels non bufferisés (ex: port série, clavier)",
      "Un périphérique bloc ne fonctionne qu'avec des fichiers texte",
      "Un périphérique caractère est plus rapide",
      "Les périphériques blocs n'ont pas d'inode"
    ],
    "correctAnswer": 0,
    "explanation": "Les périphériques de bloc (disques, partitions) autorisent la lecture/écriture par blocs indexés avec cache. Les périphériques de caractère (terminaux, cartes audio, `/dev/null`) manipulent un flux séquentiel.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q83",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que l'accès direct à la mémoire (DMA - Direct Memory Access) pour les périphériques d'E/S ?",
    "options": [
      "Un mécanisme matériel permettant à un contrôleur de périphérique de transférer directement des données vers ou depuis la RAM sans faire intervenir le processeur central pour chaque octet",
      "Un logiciel de virtualisation",
      "Une commande pour formater la mémoire vive",
      "Un bus reliant deux cartes mères"
    ],
    "choices": [
      "Un mécanisme matériel permettant à un contrôleur de périphérique de transférer directement des données vers ou depuis la RAM sans faire intervenir le processeur central pour chaque octet",
      "Un logiciel de virtualisation",
      "Une commande pour formater la mémoire vive",
      "Un bus reliant deux cartes mères"
    ],
    "correctAnswer": 0,
    "explanation": "Le DMA libère le processeur principal pendant les transferts massifs de données (disque, réseau), le contrôleur DMA prévenant le CPU par une interruption seulement une fois le bloc transféré.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q84",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le 'Spooling' (Simultaneous Peripheral Operations On-Line) dans les sous-systèmes d'E/S ?",
    "options": [
      "La mise en file d'attente sur stockage intermédiaire de requêtes destinées à un périphérique partagé lent ne supportant pas les accès concurrents entrelacés (ex: file d'impression)",
      "Le remplacement d'une puce défaillante à chaud",
      "L'overclocking du bus PCI",
      "La duplication de paquets réseau"
    ],
    "choices": [
      "La mise en file d'attente sur stockage intermédiaire de requêtes destinées à un périphérique partagé lent ne supportant pas les accès concurrents entrelacés (ex: file d'impression)",
      "Le remplacement d'une puce défaillante à chaud",
      "L'overclocking du bus PCI",
      "La duplication de paquets réseau"
    ],
    "correctAnswer": 0,
    "explanation": "Le spooling (ex: démon d'impression `lpd`/`cups`) stocke les travaux dans un tampon disque pour libérer les applications immédiatement sans bloquer sur la lenteur physique de l'appareil.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q85",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Facile",
    "question": "Que fait une écriture vers le fichier spécial `/dev/null` sous Linux ?",
    "options": [
      "Elle détruit immédiatement et silencieusement toutes les données écrites sans rien stocker",
      "Elle affiche le texte sur l'écran en noir",
      "Elle sauvegarde les données dans une corbeille cachée",
      "Elle déclenche une alarme système"
    ],
    "choices": [
      "Elle détruit immédiatement et silencieusement toutes les données écrites sans rien stocker",
      "Elle affiche le texte sur l'écran en noir",
      "Elle sauvegarde les données dans une corbeille cachée",
      "Elle déclenche une alarme système"
    ],
    "correctAnswer": 0,
    "explanation": "Le périphérique 'trou noir' `/dev/null` avale toutes les données transmises et renvoie une fin de fichier (EOF) immédiate en lecture.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q86",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Moyen",
    "question": "Que renvoie la lecture depuis le fichier spécial `/dev/zero` sous Linux ?",
    "options": [
      "Un flux infini d'octets nuls (valeur 0x00)",
      "Une chaîne vide sans fin",
      "Une erreur de lecture immédiate",
      "Des caractères '0' ASCII"
    ],
    "choices": [
      "Un flux infini d'octets nuls (valeur 0x00)",
      "Une chaîne vide sans fin",
      "Une erreur de lecture immédiate",
      "Des caractères '0' ASCII"
    ],
    "correctAnswer": 0,
    "explanation": "`/dev/zero` produit des zéros binaires à volonté, souvent utilisé avec `dd` pour initialiser des fichiers de swap ou effacer des partitions.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q87",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre `/dev/random` et `/dev/urandom` sous Linux ?",
    "options": [
      "`/dev/random` peut se bloquer si le réservoir d'entropie matérielle est jugé insuffisant, alors que `/dev/urandom` ne bloque jamais en réensemençant un générateur cryptographique pseudo-aléatoire (CSPRNG)",
      "`/dev/random` ne génère que des nombres pairs",
      "`/dev/urandom` est réservé au root",
      "Il n'y a aucune différence algorithmique"
    ],
    "choices": [
      "`/dev/random` peut se bloquer si le réservoir d'entropie matérielle est jugé insuffisant, alors que `/dev/urandom` ne bloque jamais en réensemençant un générateur cryptographique pseudo-aléatoire (CSPRNG)",
      "`/dev/random` ne génère que des nombres pairs",
      "`/dev/urandom` est réservé au root",
      "Il n'y a aucune différence algorithmique"
    ],
    "correctAnswer": 0,
    "explanation": "Pour la quasi-totalité des besoins cryptographiques, `/dev/urandom` est recommandé car il ne bloque pas les processus applicatifs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q88",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'opération système `ioctl()` sous Unix / Linux ?",
    "options": [
      "Un appel système générique 'couteau suisse' permettant de contrôler les paramètres spécifiques et configurations avancées d'un pilote de périphérique au-delà de simples lectures/écritures",
      "Un outil de compression d'octets",
      "Un protocole d'impression réseau",
      "Un pilote d'écran tactile"
    ],
    "choices": [
      "Un appel système générique 'couteau suisse' permettant de contrôler les paramètres spécifiques et configurations avancées d'un pilote de périphérique au-delà de simples lectures/écritures",
      "Un outil de compression d'octets",
      "Un protocole d'impression réseau",
      "Un pilote d'écran tactile"
    ],
    "correctAnswer": 0,
    "explanation": "`ioctl` (Input/Output Control) permet d'envoyer des commandes spécifiques et de régler les registres d'un driver (vitesse de baud, résolution vidéo, etc.).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q89",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Moyen",
    "question": "À quoi sert la mémoire tampon de disque (Page Cache / Buffer Cache) gérée par le noyau Linux ?",
    "options": [
      "À conserver en mémoire RAM libre des copies de blocs de fichiers récemment lus ou écrits sur disque pour accélérer drastiquement les futurs accès",
      "À éviter d'acheter des disques durs",
      "À stocker les mots de passe réseau",
      "À refroidir les contrôleurs NVMe"
    ],
    "choices": [
      "À conserver en mémoire RAM libre des copies de blocs de fichiers récemment lus ou écrits sur disque pour accélérer drastiquement les futurs accès",
      "À éviter d'acheter des disques durs",
      "À stocker les mots de passe réseau",
      "À refroidir les contrôleurs NVMe"
    ],
    "correctAnswer": 0,
    "explanation": "Linux utilise presque toute la mémoire vive inutilisée comme Page Cache pour optimiser les performances d'E/S, la libérant instantanément si une application demande de la RAM.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q90",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Difficile",
    "question": "Quelle commande permet de forcer la synchronisation immédiate de tous les blocs mémoires modifiés ('dirty pages') du cache vers les disques physiques sous Linux ?",
    "options": [
      "sync",
      "flush",
      "commit",
      "save"
    ],
    "choices": [
      "sync",
      "flush",
      "commit",
      "save"
    ],
    "correctAnswer": 0,
    "explanation": "La commande `sync` vide les tampons d'écriture du noyau vers le support de stockage physique permanent.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q91",
    "part": 6,
    "topic": "Pilotes et Entrées/Sorties",
    "difficulty": "Facile",
    "question": "Quelle commande Linux liste les périphériques connectés sur le bus PCI (cartes mères, cartes graphiques, contrôleurs réseau) ?",
    "options": [
      "lspci",
      "lsusb",
      "lsblk",
      "lscpu"
    ],
    "choices": [
      "lspci",
      "lsusb",
      "lsblk",
      "lscpu"
    ],
    "correctAnswer": 0,
    "explanation": "`lspci` affiche la liste des composants matériels branchés sur les bus PCI/PCIe.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q92",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Facile",
    "question": "Quelle est la différence fondamentale d'architecture entre une machine virtuelle (VM) et un conteneur Linux (Docker / LXC) ?",
    "options": [
      "Une VM émule ou virtualise un matériel complet avec son propre système d'exploitation invité et son propre noyau, tandis qu'un conteneur partage le même noyau Linux que l'hôte en isolant uniquement les processus via des namespaces et cgroups",
      "Les conteneurs nécessitent plus de mémoire RAM que les VMs",
      "Les machines virtuelles ne peuvent pas faire tourner Linux",
      "Un conteneur a son propre BIOS matériel virtuel"
    ],
    "choices": [
      "Une VM émule ou virtualise un matériel complet avec son propre système d'exploitation invité et son propre noyau, tandis qu'un conteneur partage le même noyau Linux que l'hôte en isolant uniquement les processus via des namespaces et cgroups",
      "Les conteneurs nécessitent plus de mémoire RAM que les VMs",
      "Les machines virtuelles ne peuvent pas faire tourner Linux",
      "Un conteneur a son propre BIOS matériel virtuel"
    ],
    "correctAnswer": 0,
    "explanation": "Les conteneurs partagent le noyau de l'hôte : ils démarrent en quelques millisecondes et n'ont pas la surcharge d'un OS invité complet comme les hyperviseurs de VM.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q93",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Difficile",
    "question": "Quelles sont les deux fonctionnalités clés du noyau Linux qui rendent possible l'isolation et la conteneurisation (comme Docker) ?",
    "options": [
      "Les Namespaces (isolation de la visibilité des ressources) et les Control Groups / cgroups (limitation de la consommation de ressources CPU/RAM)",
      "Les Inodes et les Superblocks",
      "La pagination et la segmentation",
      "Le swap et le raid"
    ],
    "choices": [
      "Les Namespaces (isolation de la visibilité des ressources) et les Control Groups / cgroups (limitation de la consommation de ressources CPU/RAM)",
      "Les Inodes et les Superblocks",
      "La pagination et la segmentation",
      "Le swap et le raid"
    ],
    "correctAnswer": 0,
    "explanation": "Les Namespaces isolent la vue du système (PID, réseau, montages, IPC, utilisateurs), tandis que les Cgroups régulent et plafonnent l'usage des ressources matérielles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q94",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un hyperviseur de Type 1 (Bare-Metal) par rapport à un hyperviseur de Type 2 (Hosted) ?",
    "options": [
      "Un hyperviseur de Type 1 s'exécute directement sur le matériel physique nu sans système d'exploitation intermédiaire (ex: VMware ESXi, KVM, Xen), tandis qu'un hyperviseur de Type 2 tourne au-dessus d'un OS hôte classique (ex: VirtualBox)",
      "Le Type 1 est un logiciel pour smartphone",
      "Le Type 2 ne gère pas les disques durs",
      "Il n'y a aucune différence de couche"
    ],
    "choices": [
      "Un hyperviseur de Type 1 s'exécute directement sur le matériel physique nu sans système d'exploitation intermédiaire (ex: VMware ESXi, KVM, Xen), tandis qu'un hyperviseur de Type 2 tourne au-dessus d'un OS hôte classique (ex: VirtualBox)",
      "Le Type 1 est un logiciel pour smartphone",
      "Le Type 2 ne gère pas les disques durs",
      "Il n'y a aucune différence de couche"
    ],
    "correctAnswer": 0,
    "explanation": "Les hyperviseurs Type 1 (bare-metal) offrent les performances les plus élevées pour les datacenters car ils contrôlent directement le hardware.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q95",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Difficile",
    "question": "Quelle commande sous Linux permet d'isoler un processus dans une racine de système de fichiers restreinte (environnement 'Jail') ?",
    "options": [
      "chroot",
      "isolate",
      "cage",
      "sandbox"
    ],
    "choices": [
      "chroot",
      "isolate",
      "cage",
      "sandbox"
    ],
    "correctAnswer": 0,
    "explanation": "`chroot /chemin/jail` modifie le répertoire racine perçu par le processus courant et ses enfants.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q96",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que la commande `strace` sous Linux ?",
    "options": [
      "Un outil de diagnostic permettant d'intercepter et d'afficher en temps réel tous les appels système émis par un processus ainsi que les signaux qu'il reçoit",
      "Un traceur de câbles réseau",
      "Un désassembleur de code",
      "Une commande pour formater un disque"
    ],
    "choices": [
      "Un outil de diagnostic permettant d'intercepter et d'afficher en temps réel tous les appels système émis par un processus ainsi que les signaux qu'il reçoit",
      "Un traceur de câbles réseau",
      "Un désassembleur de code",
      "Une commande pour formater un disque"
    ],
    "correctAnswer": 0,
    "explanation": "`strace` s'appuie sur `ptrace` pour tracer chaque syscall (`open`, `read`, `futex`), irremplaçable pour déboguer les pannes de processus sans le code source.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q97",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Moyen",
    "question": "À quoi sert la commande `lsof` (List Open Files) sous Linux ?",
    "options": [
      "À lister tous les fichiers et sockets réseau actuellement ouverts par l'ensemble des processus du système",
      "À supprimer les fichiers temporaires",
      "À afficher la taille des partitions",
      "À compter les mots dans un fichier"
    ],
    "choices": [
      "À lister tous les fichiers et sockets réseau actuellement ouverts par l'ensemble des processus du système",
      "À supprimer les fichiers temporaires",
      "À afficher la taille des partitions",
      "À compter les mots dans un fichier"
    ],
    "correctAnswer": 0,
    "explanation": "`lsof` liste tous les descripteurs ouverts, permettant par exemple d'identifier quel processus bloque le démontage d'une clé USB ou écoute sur un port TCP.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q98",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Facile",
    "question": "Quel service Linux permet de planifier l'exécution récurrente de scripts ou commandes à des dates et heures programmées ?",
    "options": [
      "cron (via crontab)",
      "atd",
      "timed",
      "scheduler"
    ],
    "choices": [
      "cron (via crontab)",
      "atd",
      "timed",
      "scheduler"
    ],
    "correctAnswer": 0,
    "explanation": "Le démon `cron` lit les tables `crontab` pour exécuter périodiquement des tâches selon un schéma temporel (minute, heure, jour, mois, jour de la semaine).",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q99",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'OOM Killer (Out-Of-Memory Killer) du noyau Linux ?",
    "options": [
      "Un mécanisme de protection du noyau qui, lorsque la RAM physique et le swap sont totalement saturés, sélectionne et termine de force un processus consommateur selon un score de pénalité pour préserver la stabilité de l'OS",
      "Un virus informatique détruisant la mémoire",
      "Un nettoyeur de cache",
      "Un optimiseur de démarrage"
    ],
    "choices": [
      "Un mécanisme de protection du noyau qui, lorsque la RAM physique et le swap sont totalement saturés, sélectionne et termine de force un processus consommateur selon un score de pénalité pour préserver la stabilité de l'OS",
      "Un virus informatique détruisant la mémoire",
      "Un nettoyeur de cache",
      "Un optimiseur de démarrage"
    ],
    "correctAnswer": 0,
    "explanation": "L'OOM Killer sacrifie le processus au score `oom_score` le plus élevé pour éviter un kernel panic lorsque la machine manque désespérément de mémoire vive.",
    "source": "Conforme au programme"
  },
  {
    "id": "p6-q100",
    "part": 6,
    "topic": "Virtualisation & Conteneurs",
    "difficulty": "Moyen",
    "question": "Qu'indiquent les trois valeurs du 'Load Average' affichées par la commande `uptime` sous Linux ?",
    "options": [
      "Le nombre moyen de processus actifs (en cours d'exécution sur le CPU ou en attente d'E/S disque non interruptible) sur les 1, 5 et 15 dernières minutes",
      "Le pourcentage d'utilisation mémoire des 3 derniers jours",
      "Le nombre de paquets perdus sur 3 interfaces réseau",
      "La température des 3 cœurs CPU"
    ],
    "choices": [
      "Le nombre moyen de processus actifs (en cours d'exécution sur le CPU ou en attente d'E/S disque non interruptible) sur les 1, 5 et 15 dernières minutes",
      "Le pourcentage d'utilisation mémoire des 3 derniers jours",
      "Le nombre de paquets perdus sur 3 interfaces réseau",
      "La température des 3 cœurs CPU"
    ],
    "correctAnswer": 0,
    "explanation": "Le Load Average reflète la saturation globale de la machine (CPU + I/O en attente d'état D) sur 1, 5 et 15 minutes.",
    "source": "Conforme au programme"
  }
];
