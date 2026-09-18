import * as fs from 'fs';
import * as path from 'path';
import { Question } from '../src/types';
import { buildPart1Questions } from './builders/part1_builder';
import { buildPart2Questions } from './builders/part2_builder';
import { buildPart3Questions } from './builders/part3_builder';
import { buildPart4Questions } from './builders/part4_builder';
import { buildPart5Questions } from './builders/part5_builder';
import { buildPart6Questions } from './builders/part6_builder';
import { buildPart7Questions } from './builders/part7_builder';
import { buildPart8Questions } from './builders/part8_builder';
import { buildPart9Questions } from './builders/part9_builder';
import { buildPart10Questions } from './builders/part10_builder';

// Note: part5_builder originally generated OS/Linux and part6_builder generated Algorithms/DataStructures.
// We correctly map Part 5 to Algorithms/DataStructures and Part 6 to OS/Linux.

console.log('=== DÉBUT DE L\'INTÉGRATION DU DRIVE ET COMPILATION DES 1 000 QUESTIONS ===');

// Real exam questions extracted from Google Drive PDFs (ENSET 2022, LPISIL 2014, 2015, 2016, 2017)

// 1. Part 1: Réseaux informatiques
const DRIVE_EXAM_P1: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Adressage IP et sous-réseaux',
    difficulty: 'Moyen',
    question: "Sachant que sur un réseau informatique une machine utilise l'adresse IP 192.168.0.160 avec comme masque de sous-réseau 255.255.255.192 (/26). Quelle est l'adresse réseau à laquelle appartient cette machine (opération ET logique bit à bit) ?",
    options: [
      "192.168.0.128",
      "192.168.0.138",
      "192.168.0.148",
      "192.168.0.160"
    ],
    choices: [
      "192.168.0.128",
      "192.168.0.138",
      "192.168.0.148",
      "192.168.0.160"
    ],
    correctAnswer: 0,
    explanation: "160 en binaire vaut 10100000. Le dernier octet du masque 192 vaut 11000000. L'opération ET bit à bit donne 10000000 = 128 en décimal. L'adresse réseau est donc 192.168.0.128. (Source : Concours ENSET Mohammedia 2022, Q38).",
    source: 'Ancien concours'
  }
];

// 2. Part 2: Bases de données, SQL et Oracle
const DRIVE_EXAM_P2: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Requêtes SQL et Jointures',
    difficulty: 'Moyen',
    question: "Considérant les tables CLIENT(ID_CLIENT, NOM_CLIENT) et COMMANDE(ID_CMD, DATE_CMD, #ID_CLIENT). Quelle est la requête SQL correcte permettant de chercher les commandes du client dont le nom est 'ALPHA' ?",
    options: [
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CMD.ID_CLIENT=CLI.ID_CLIENT) AND (CLI.NOM_CLIENT='ALPHA')",
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CLI.NOM_CLIENT='ALPHA')",
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CLI.CLI.NOM_CLIENT='ALPHA')",
      "SEARCH CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD WHERE NOM_CLIENT='ALPHA'"
    ],
    choices: [
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CMD.ID_CLIENT=CLI.ID_CLIENT) AND (CLI.NOM_CLIENT='ALPHA')",
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CLI.NOM_CLIENT='ALPHA')",
      "SELECT CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD, client AS CLI WHERE (CLI.CLI.NOM_CLIENT='ALPHA')",
      "SEARCH CMD.ID_CMD, CMD.DATE_CMD, CLI.NOM_CLIENT FROM commande AS CMD WHERE NOM_CLIENT='ALPHA'"
    ],
    correctAnswer: 0,
    explanation: "Pour relier la table commande et client, il est obligatoire d'effectuer la jointure sur la clé étrangère CMD.ID_CLIENT = CLI.ID_CLIENT avant de filtrer sur CLI.NOM_CLIENT = 'ALPHA'. Sans cela, on obtiendrait un produit cartésien. (Source : Concours ENSET Mohammedia 2022, Q33).",
    source: 'Ancien concours'
  },
  {
    topic: 'Agrégation SQL et Group By',
    difficulty: 'Moyen',
    question: "Considérant la table LIGNE_COMMANDE(ID_LC, ID_COMMANDE, ID_PRODUIT, QUANTITE, PRIX_UNITAIRE). Quelle est la requête SQL qui permet de calculer le montant total de chaque commande, en ne retenant que les commandes dont le total est supérieur à 9000 ?",
    options: [
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC GROUP BY LC.ID_COMMANDE HAVING TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC GROUP BY LC.ID_COMMANDE WHERE TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC WHERE TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC WHERE LC.TOTAL > 9000"
    ],
    choices: [
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC GROUP BY LC.ID_COMMANDE HAVING TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC GROUP BY LC.ID_COMMANDE WHERE TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC WHERE TOTAL > 9000",
      "SELECT LC.ID_COMMANDE, SUM(LC.QUANTITE*LC.PRIX_UNITAIRE) AS TOTAL FROM ligne_commande AS LC WHERE LC.TOTAL > 9000"
    ],
    correctAnswer: 0,
    explanation: "La clause HAVING s'applique aux résultats groupés par GROUP BY après calcul de la fonction d'agrégation SUM, tandis que WHERE filtre les lignes individuelles avant agrégation. (Source : Concours ENSET Mohammedia 2022, Q34).",
    source: 'Ancien concours'
  },
  {
    topic: 'Modèle relationnel et Clés',
    difficulty: 'Facile',
    question: "Dans le modèle relationnel de bases de données, qu'est-ce qu'une clé étrangère (Foreign Key) ?",
    options: [
      "Un attribut (ou groupe d'attributs) d'une table qui fait référence à la clé primaire d'une autre table",
      "Un champ présent obligatoirement dans toutes les tables d'une base de données",
      "Un champ appartenant physiquement à un fichier externe ou distant",
      "Une clé primaire générée automatiquement et chiffrée par le SGBD"
    ],
    choices: [
      "Un attribut (ou groupe d'attributs) d'une table qui fait référence à la clé primaire d'une autre table",
      "Un champ présent obligatoirement dans toutes les tables d'une base de données",
      "Un champ appartenant physiquement à un fichier externe ou distant",
      "Une clé primaire générée automatiquement et chiffrée par le SGBD"
    ],
    correctAnswer: 0,
    explanation: "Une clé étrangère garantit l'intégrité référentielle en établissant une liaison entre les lignes de la table courante et celles de la table référencée. (Source : Concours LPISIL EST Essaouira 2014, Q5 SQL).",
    source: 'Ancien concours'
  },
  {
    topic: 'Requêtes SQL et Jointures',
    difficulty: 'Facile',
    question: "Que renvoie l'exécution de la requête SQL suivante : SELECT count(*) FROM PriseDeVue WHERE proprietaire = 11 ; ?",
    options: [
      "Le nombre total de prises de vue réalisées par le photographe portant le numéro 11",
      "La liste détaillée des prises de vue du photographe 11",
      "Une erreur de syntaxe car count(*) ne peut pas être combiné avec une clause WHERE",
      "La somme des numéros des prises de vue pour le propriétaire 11"
    ],
    choices: [
      "Le nombre total de prises de vue réalisées par le photographe portant le numéro 11",
      "La liste détaillée des prises de vue du photographe 11",
      "Une erreur de syntaxe car count(*) ne peut pas être combiné avec une clause WHERE",
      "La somme des numéros des prises de vue pour le propriétaire 11"
    ],
    correctAnswer: 0,
    explanation: "COUNT(*) est une fonction d'agrégation standard qui compte le nombre total de lignes de la table qui satisfont le prédicat de la clause WHERE. (Source : Concours LPISIL EST Essaouira 2014, Q4 SQL).",
    source: 'Ancien concours'
  }
];

// 3. Part 3: Programmation C
const DRIVE_EXAM_P3: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Pointeurs et passage d\'adresses',
    difficulty: 'Difficile',
    question: "Soit le programme C suivant :\nvoid f8(int a, int *b) {\n  a++;\n  *b = -a++;\n  a = *b;\n}\nint main() {\n  int a = 8, b = 10;\n  f8(a, &b);\n  printf(\"%d %d\", a, b);\n  return 0;\n}\nQuel est l'affichage produit ?",
    options: [
      "8 -9",
      "8 -8",
      "9 -9",
      "8 -11"
    ],
    choices: [
      "8 -9",
      "8 -8",
      "9 -9",
      "8 -11"
    ],
    correctAnswer: 0,
    explanation: "Dans main(), 'a' est passé par valeur, donc sa valeur dans main() reste 8. Dans f8, a vaut d'abord 8, puis a++ -> 9. L'expression *b = -a++ évalue -9, assigne -9 à *b (donc b de main vaut -9), puis a est post-incrémenté à 10. Affichage : 8 -9. (Source : Concours ENSET Mohammedia 2022, Q6).",
    source: 'Ancien concours'
  },
  {
    topic: 'Chaînes de caractères et pointeurs',
    difficulty: 'Moyen',
    question: "Soit le code C suivant :\nchar tab[] = \"enset-mohammedia\";\nint i = 0;\nwhile (tab[i] != '\\0') i++;\nprintf(\"i = %d\", i);\nQuel résultat est affiché ?",
    options: [
      "16",
      "17",
      "18",
      "Boucle infinie car '\\0' n'est pas présent"
    ],
    choices: [
      "16",
      "17",
      "18",
      "Boucle infinie car '\\0' n'est pas présent"
    ],
    correctAnswer: 0,
    explanation: "\"enset-mohammedia\" comporte 16 caractères (5 lettres pour enset, 1 tiret, 10 lettres pour mohammedia). La boucle compte jusqu'au caractère nul de fin de chaîne, soit i = 16. (Source : Concours ENSET Mohammedia 2022, Q7).",
    source: 'Ancien concours'
  },
  {
    topic: 'Opérateurs et boucles',
    difficulty: 'Moyen',
    question: "Soit le code C suivant :\nint i = 0;\nwhile(++i <= 6);\nprintf(\"%d \", i);\nQuel résultat est affiché à l'exécution ?",
    options: [
      "7",
      "6",
      "0 1 2 3 4 5 6",
      "1 2 3 4 5 6 7"
    ],
    choices: [
      "7",
      "6",
      "0 1 2 3 4 5 6",
      "1 2 3 4 5 6 7"
    ],
    correctAnswer: 0,
    explanation: "Remarquez le point-virgule ';' immédiatement après la parenthèse du while. La boucle s'exécute avec un corps vide. Quand i vaut 6, ++i passe à 7, la condition 7 <= 6 devient fausse, la boucle se termine et printf affiche 7. (Source : Concours ENSET Mohammedia 2022, Q13).",
    source: 'Ancien concours'
  },
  {
    topic: 'Arithmétique des pointeurs',
    difficulty: 'Moyen',
    question: "Soit le code C suivant :\nint tab[] = {10, 8, 35, 4, 18};\nint *p = tab;\nprintf(\"%d \", *p++);\nprintf(\"%d \", *++p - 2);\nprintf(\"%d \", *p + 1);\nQuel sera le résultat affiché ?",
    options: [
      "10 33 36",
      "10 35 36",
      "8 35 36",
      "10 6 36"
    ],
    choices: [
      "10 33 36",
      "10 35 36",
      "8 35 36",
      "10 6 36"
    ],
    correctAnswer: 0,
    explanation: "*p++ lit tab[0]=10 puis avance p sur tab[1]. Ensuite *++p pré-incrémente d'abord p vers tab[2] (valeur 35), puis soustrait 2 : 35 - 2 = 33. Enfin *p lit tab[2]=35 et ajoute 1 : 36. Résultat : 10 33 36. (Source : Concours ENSET Mohammedia 2022, Q19).",
    source: 'Ancien concours'
  },
  {
    topic: 'Pointeurs et fonctions',
    difficulty: 'Facile',
    question: "Étant donnée la signature de fonction void Calcule(int *i, double j); et les variables int a; double b; Quel est l'appel correct ?",
    options: [
      "Calcule(&a, b);",
      "Calcule(a, b);",
      "Calcule(*a, b);",
      "Calcule(a, &b);"
    ],
    choices: [
      "Calcule(&a, b);",
      "Calcule(a, b);",
      "Calcule(*a, b);",
      "Calcule(a, &b);"
    ],
    correctAnswer: 0,
    explanation: "Le premier paramètre étant un pointeur sur entier (int*), il faut fournir l'adresse de la variable 'a' avec l'opérateur d'adressage &a. Le second paramètre attend un double par valeur, on passe donc directement b. (Source : Concours LPISIL EST Essaouira 2014, Q6 C).",
    source: 'Ancien concours'
  }
];

// 4. Part 4: Programmation Java et POO
const DRIVE_EXAM_P4: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Polymorphisme et héritage',
    difficulty: 'Moyen',
    question: "Considérant les classes Java suivantes :\nclass A { void afficheToi() { System.out.println(\"je suis un A\"); } }\nclass B extends A { void afficheToi() { System.out.println(\"je suis un B\"); } }\nclass Essai { public static void main(String[] args) { A x = new B(); x.afficheToi(); } }\nQuel résultat produit l'exécution de ce programme ?",
    options: [
      "Il se compile, s'exécute et affiche \"je suis un B\"",
      "Il affiche \"je suis un A\"",
      "Erreur de compilation car x est de type A mais reçoit une instance de type B",
      "Erreur d'exécution ClassCastException"
    ],
    choices: [
      "Il se compile, s'exécute et affiche \"je suis un B\"",
      "Il affiche \"je suis un A\"",
      "Erreur de compilation car x est de type A mais reçoit une instance de type B",
      "Erreur d'exécution ClassCastException"
    ],
    correctAnswer: 0,
    explanation: "En Java, les méthodes d'instance sont virtuelles par défaut. Le polymorphisme dynamique et la liaison tardive (late binding) exécutent la méthode redéfinie correspondant au type dynamique de l'objet créé (B), soit 'je suis un B'. (Source : Concours LPISIL EST Essaouira 2016, Ex 3 Q1).",
    source: 'Ancien concours'
  },
  {
    topic: 'Machine virtuelle Java (JVM)',
    difficulty: 'Facile',
    question: "L'exécution et l'interprétation du bytecode des programmes Java compilés (.class) sont prises en charge par :",
    options: [
      "La JVM (Java Virtual Machine)",
      "Le compilateur javac",
      "L'API Java standard uniquement",
      "Le système d'exploitation hôte directement sans couche logicielle"
    ],
    choices: [
      "La JVM (Java Virtual Machine)",
      "Le compilateur javac",
      "L'API Java standard uniquement",
      "Le système d'exploitation hôte directement sans couche logicielle"
    ],
    correctAnswer: 0,
    explanation: "La JVM interprète et compile à la volée (JIT) le bytecode Java portable en instructions machine natives adaptées au système hôte. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q2).",
    source: 'Ancien concours'
  },
  {
    topic: 'Variables et Modificateurs statiques',
    difficulty: 'Facile',
    question: "En langage Java, un attribut déclaré avec le mot-clé static est également désigné sous le nom de :",
    options: [
      "Variable de classe (partagée par toutes les instances)",
      "Variable d'instance",
      "Variable locale",
      "Variable transitoire"
    ],
    choices: [
      "Variable de classe (partagée par toutes les instances)",
      "Variable d'instance",
      "Variable locale",
      "Variable transitoire"
    ],
    correctAnswer: 0,
    explanation: "Un attribut static appartient à la classe elle-même et non à une instance particulière. Il existe en un seul exemplaire en mémoire, partagé par toutes les instances. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q4).",
    source: 'Ancien concours'
  },
  {
    topic: 'Gestion de la mémoire et Garbage Collector',
    difficulty: 'Facile',
    question: "Quel est le rôle du ramasse-miettes (Garbage Collector) en Java ?",
    options: [
      "Il libère automatiquement la mémoire occupée par les objets devenus inaccessibles, déchargeant le développeur de la gestion manuelle de la mémoire",
      "Il oblige le programmeur à appeler manuellement delete() ou free()",
      "Il réinitialise les variables statiques au redémarrage du serveur",
      "Il défragmente uniquement le disque dur du serveur hôte"
    ],
    choices: [
      "Il libère automatiquement la mémoire occupée par les objets devenus inaccessibles, déchargeant le développeur de la gestion manuelle de la mémoire",
      "Il oblige le programmeur à appeler manuellement delete() ou free()",
      "Il réinitialise les variables statiques au redémarrage du serveur",
      "Il défragmente uniquement le disque dur du serveur hôte"
    ],
    correctAnswer: 0,
    explanation: "Le Garbage Collector identifie et détruit les objets du tas (Heap) qui ne possèdent plus aucune référence active, évitant ainsi les fuites de mémoire manuelles. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q6).",
    source: 'Ancien concours'
  }
];

// 5. Part 5: Algorithmique et structures de données
const DRIVE_EXAM_P5: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Fondements de l\'algorithmique',
    difficulty: 'Facile',
    question: "Qu'est-ce qu'un algorithme au sens informatique et mathématique formel ?",
    options: [
      "Une suite finie, univoque et ordonnée d'instructions ou d'opérations permettant de résoudre un problème ou d'obtenir un résultat déterminé",
      "Un organigramme purement graphique sans code",
      "Un pseudo-code informel ne pouvant pas être implémenté",
      "Une décision aléatoire prise par un processeur"
    ],
    choices: [
      "Une suite finie, univoque et ordonnée d'instructions ou d'opérations permettant de résoudre un problème ou d'obtenir un résultat déterminé",
      "Un organigramme purement graphique sans code",
      "Un pseudo-code informel ne pouvant pas être implémenté",
      "Une décision aléatoire prise par un processeur"
    ],
    correctAnswer: 0,
    explanation: "Un algorithme est une séquence finie d'actions rigoureuses et non ambiguës transformant des données en entrée en un résultat en sortie en un nombre fini d'étapes. (Source : Concours ENSET Mohammedia 2022, Q1).",
    source: 'Ancien concours'
  },
  {
    topic: 'Complexité algorithmique',
    difficulty: 'Moyen',
    question: "Considérant la fonction récursive naïve suivante calculant la suite de Fibonacci :\nint fibo(int n) {\n  if (n <= 1) return n;\n  return fibo(n-1) + fibo(n-2);\n}\nQuelle est sa complexité temporelle asymptotique ?",
    options: [
      "Exponentielle (O(2^n))",
      "Linéaire (O(n))",
      "Logarithmique (O(log n))",
      "Quasi-linéaire (O(n log n))"
    ],
    choices: [
      "Exponentielle (O(2^n))",
      "Linéaire (O(n))",
      "Logarithmique (O(log n))",
      "Quasi-linéaire (O(n log n))"
    ],
    correctAnswer: 0,
    explanation: "Chaque appel non terminal génère deux sous-appels récursifs, formant un arbre binaire d'appels de hauteur n avec de multiples recalculs identiques, donnant une complexité en O(Phi^n) ≈ O(1.618^n) qui est exponentielle. (Source : Concours ENSET Mohammedia 2022, Q9).",
    source: 'Ancien concours'
  },
  {
    topic: 'Algorithmes de tri',
    difficulty: 'Facile',
    question: "Lequel des algorithmes de tri suivants applique strictement le paradigme « diviser pour régner » (Divide and Conquer) ?",
    options: [
      "Tri par fusion (Merge Sort)",
      "Tri à bulles (Bubble Sort)",
      "Tri par sélection (Selection Sort)",
      "Tri par insertion (Insertion Sort)"
    ],
    choices: [
      "Tri par fusion (Merge Sort)",
      "Tri à bulles (Bubble Sort)",
      "Tri par sélection (Selection Sort)",
      "Tri par insertion (Insertion Sort)"
    ],
    correctAnswer: 0,
    explanation: "Le tri par fusion divise le tableau récursivement en deux moitiés égales (Diviser), trie chaque sous-tableau récursivement (Régner), puis fusionne les deux sous-listes triées en temps linéaire (Combiner). (Source : Concours ENSET Mohammedia 2022, Q11).",
    source: 'Ancien concours'
  },
  {
    topic: 'Piles, Files et Listes',
    difficulty: 'Difficile',
    question: "Considérant une file FIFO avec enfiler() et défiler(). On enfile d'abord 0 puis 1. Pour chaque étape d'une boucle de 0 à n-1, on retire deux éléments a et b, puis on enfile b et (a+b) en affichant la valeur de a. Quel est le résultat affiché suite à l'appel de cette fonction pour n=7 ?",
    options: [
      "0 1 1 2 3 5 8",
      "0 1 2 3 5 6 7",
      "0 1 2 3 4 5 6",
      "0 1 1 2 2 3 3"
    ],
    choices: [
      "0 1 1 2 3 5 8",
      "0 1 2 3 5 6 7",
      "0 1 2 3 4 5 6",
      "0 1 1 2 2 3 3"
    ],
    correctAnswer: 0,
    explanation: "Le mécanisme génère et consomme exactement les termes de la suite de Fibonacci : F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8. Les valeurs successives extraites et affichées pour n=7 sont bien 0, 1, 1, 2, 3, 5, 8. (Source : Concours ENSET Mohammedia 2022, Q25).",
    source: 'Ancien concours'
  },
  {
    topic: 'Arbres et structures hiérarchiques',
    difficulty: 'Moyen',
    question: "Dans le parcours d'un arbre binaire, si la procédure affiche d'abord le sous-arbre gauche récursivement, puis le sous-arbre droit récursivement, et termine par la racine T->data, de quel type de parcours s'agit-il ?",
    options: [
      "Parcours postfixe (ou post-ordre)",
      "Parcours préfixe (ou pré-ordre)",
      "Parcours infixe (ou en ordre symétrique)",
      "Parcours en largeur (BFS)"
    ],
    choices: [
      "Parcours postfixe (ou post-ordre)",
      "Parcours préfixe (ou pré-ordre)",
      "Parcours infixe (ou en ordre symétrique)",
      "Parcours en largeur (BFS)"
    ],
    correctAnswer: 0,
    explanation: "Un parcours où la racine est traitée après ses deux sous-arbres (Gauche, Droite, Racine) est un parcours postfixe / post-ordre. (Source : Concours ENSET Mohammedia 2022, Q29).",
    source: 'Ancien concours'
  }
];

// 6. Part 6: Systèmes d’exploitation et Linux/Unix
const DRIVE_EXAM_P6: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Commandes Linux fondamentales',
    difficulty: 'Facile',
    question: "Sous un système d'exploitation Unix / Linux, à quoi sert principalement la commande « ls » ?",
    options: [
      "Lister le contenu (fichiers et sous-répertoires) d'un répertoire",
      "Changer de répertoire de travail (change directory)",
      "Créer un nouveau répertoire vide",
      "Déplacer ou renommer un fichier existant"
    ],
    choices: [
      "Lister le contenu (fichiers et sous-répertoires) d'un répertoire",
      "Changer de répertoire de travail (change directory)",
      "Créer un nouveau répertoire vide",
      "Déplacer ou renommer un fichier existant"
    ],
    correctAnswer: 0,
    explanation: "La commande ls (list directory contents) permet d'afficher les fichiers et répertoires d'un emplacement. Les commandes associées sont cd (changer de répertoire), mkdir (créer) et mv (déplacer/renommer). (Source : Concours LPISIL EST Essaouira 2014, Q8 Unix).",
    source: 'Ancien concours'
  }
];

// 7. Part 7: Architecture et organisation des ordinateurs
const DRIVE_EXAM_P7: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Systèmes de numération et Binaire',
    difficulty: 'Facile',
    question: "Sachant que les codes ASCII des caractères 'A', 'B' et 'C' sont respectivement 65, 66 et 67 en décimal (01000001, 01000010, 01000011 en binaire), quelle est la valeur décimale du caractère 'D' ?",
    options: [
      "68",
      "67",
      "69",
      "70"
    ],
    choices: [
      "68",
      "67",
      "69",
      "70"
    ],
    correctAnswer: 0,
    explanation: "Dans la table ASCII standard, les lettres majuscules de l'alphabet latin sont codées de façon strictement séquentielle et contiguë : 'A'=65, 'B'=66, 'C'=67, donc 'D'=68. (Source : Concours ENSET Mohammedia 2022, Q35).",
    source: 'Ancien concours'
  },
  {
    topic: 'Systèmes de numération et Binaire',
    difficulty: 'Moyen',
    question: "Quelle est la conversion en octal (base 8) du nombre hexadécimal A1F(16) ?",
    options: [
      "5037(8)",
      "4037(8)",
      "6037(8)",
      "7037(8)"
    ],
    choices: [
      "5037(8)",
      "4037(8)",
      "6037(8)",
      "7037(8)"
    ],
    correctAnswer: 0,
    explanation: "A = 1010(2), 1 = 0001(2), F = 1111(2). En binaire : 1010 0001 1111. On regroupe par paquets de 3 bits depuis la droite : 101 (5), 000 (0), 011 (3), 111 (7). En octal, cela donne 5037(8). (Source : Concours ENSET Mohammedia 2022, Q36).",
    source: 'Ancien concours'
  },
  {
    topic: 'Arithmétique binaire',
    difficulty: 'Facile',
    question: "Quel est le résultat de l'addition binaire non signée 111(2) + 101(2) ?",
    options: [
      "1100(2)",
      "1000(2)",
      "1110(2)",
      "1111(2)"
    ],
    choices: [
      "1100(2)",
      "1000(2)",
      "1110(2)",
      "1111(2)"
    ],
    correctAnswer: 0,
    explanation: "111(2) vaut 7 en décimal et 101(2) vaut 5. 7 + 5 = 12 en décimal. 12 en binaire est 1100(2) (8 + 4). (Source : Concours ENSET Mohammedia 2022, Q37).",
    source: 'Ancien concours'
  },
  {
    topic: 'Arithmétique binaire et virgule fixe',
    difficulty: 'Moyen',
    question: "Quelle est la valeur décimale du nombre binaire fractionnaire 101,11(2) ?",
    options: [
      "5,75(10)",
      "4,75(10)",
      "3,75(10)",
      "6,75(10)"
    ],
    choices: [
      "5,75(10)",
      "4,75(10)",
      "3,75(10)",
      "6,75(10)"
    ],
    correctAnswer: 0,
    explanation: "Partie entière : 1*2^2 + 0*2^1 + 1*2^0 = 5. Partie fractionnaire : 1*2^(-1) + 1*2^(-2) = 0.5 + 0.25 = 0.75. Total = 5,75(10). (Source : Concours ENSET Mohammedia 2022, Q39).",
    source: 'Ancien concours'
  },
  {
    topic: 'Complément à deux et nombres signés',
    difficulty: 'Moyen',
    question: "Quel est le codage en binaire en complément à deux sur 8 bits du nombre décimal signé -90(10) ?",
    options: [
      "10100110(2)",
      "10100111(2)",
      "10101111(2)",
      "10111111(2)"
    ],
    choices: [
      "10100110(2)",
      "10100111(2)",
      "10101111(2)",
      "10111111(2)"
    ],
    correctAnswer: 0,
    explanation: "90 en binaire sur 8 bits est 01011010. Le complément à un (inversion de tous les bits) donne 10100101. On ajoute 1 (complément à deux) : 10100101 + 1 = 10100110. (Source : Concours ENSET Mohammedia 2022, Q40).",
    source: 'Ancien concours'
  },
  {
    topic: 'Niveaux d\'abstraction matérielle',
    difficulty: 'Facile',
    question: "Parmi les langages suivants, lequel est le plus proche de l'architecture matérielle de la machine (langage de bas niveau) ?",
    options: [
      "Le langage d'assemblage (Assembleur)",
      "Le langage C",
      "Le langage Pascal",
      "Le langage Java"
    ],
    choices: [
      "Le langage d'assemblage (Assembleur)",
      "Le langage C",
      "Le langage Pascal",
      "Le langage Java"
    ],
    correctAnswer: 0,
    explanation: "L'Assembleur est une représentation textuelle directe et bijective du langage machine spécifique au jeu d'instructions (ISA) du processeur, ce qui en fait le langage le plus proche du matériel. (Source : Concours LPISIL EST Essaouira 2014, Q1).",
    source: 'Ancien concours'
  }
];

// 8. Part 8: Génie logiciel et systèmes d’information
const DRIVE_EXAM_P8: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Diagrammes de classes UML',
    difficulty: 'Moyen',
    question: "Considérant l'énoncé suivant : « Une commande contient plusieurs produits avec une quantité et un prix unitaire. Un produit peut appartenir à plusieurs commandes. » Quelle est la modélisation UML correcte ?",
    options: [
      "Une association plusieurs-à-plusieurs (*..*) entre Commande et Produit portant une classe d'association 'LigneCommande' avec les attributs quantité et prixUnitaire",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Commande",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Produit",
      "Une association unidirectionnelle 1..1 sans classe d'association"
    ],
    choices: [
      "Une association plusieurs-à-plusieurs (*..*) entre Commande et Produit portant une classe d'association 'LigneCommande' avec les attributs quantité et prixUnitaire",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Commande",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Produit",
      "Une association unidirectionnelle 1..1 sans classe d'association"
    ],
    correctAnswer: 0,
    explanation: "La quantité et le prix unitaire dépendent à la fois de la commande et du produit considéré. Dans une relation n-aire ou *..*, ces attributs sont modélisés dans une classe d'association (LigneCommande). (Source : Concours ENSET Mohammedia 2022, Q31).",
    source: 'Ancien concours'
  },
  {
    topic: 'Standards UML',
    difficulty: 'Facile',
    question: "Que représente le sigle UML en génie logiciel et conception de systèmes d'information ?",
    options: [
      "Unified Modeling Language (un langage standardisé de modélisation visuelle orienté objet)",
      "Une méthode de gestion de projet concurrente de Scrum",
      "La composante données relationnelle de la méthode MERISE",
      "Un protocole réseau pour le transfert de spécifications"
    ],
    choices: [
      "Unified Modeling Language (un langage standardisé de modélisation visuelle orienté objet)",
      "Une méthode de gestion de projet concurrente de Scrum",
      "La composante données relationnelle de la méthode MERISE",
      "Un protocole réseau pour le transfert de spécifications"
    ],
    correctAnswer: 0,
    explanation: "UML (Unified Modeling Language) est un langage graphique standardisé permettant de spécifier, visualiser, construire et documenter les artefacts d'un système logiciel. (Source : Concours LPISIL EST Essaouira 2014, Q9).",
    source: 'Ancien concours'
  }
];

// 10. Part 10: Informatique générale et technologies informatiques
const DRIVE_EXAM_P10: Omit<Question, 'id' | 'part'>[] = [
  {
    topic: 'Compilation et Exécution',
    difficulty: 'Facile',
    question: "Qu'est-ce que la phase de compilation dans la chaîne de traitement d'un programme informatique ?",
    options: [
      "La traduction intégrale d'un code source écrit dans un langage de haut niveau en langage machine exécutable ou langage intermédiaire",
      "L'exécution directe pas-à-pas des instructions en mémoire",
      "L'édition et la saisie du code dans un éditeur de texte",
      "La correction automatique des erreurs de logique algorithmique"
    ],
    choices: [
      "La traduction intégrale d'un code source écrit dans un langage de haut niveau en langage machine exécutable ou langage intermédiaire",
      "L'exécution directe pas-à-pas des instructions en mémoire",
      "L'édition et la saisie du code dans un éditeur de texte",
      "La correction automatique des erreurs de logique algorithmique"
    ],
    correctAnswer: 0,
    explanation: "Le compilateur analyse lexicalement, syntaxiquement et sémantiquement le code source pour générer du code binaire machine ou du bytecode sans exécuter le programme. (Source : Concours ENSET Mohammedia 2022, Q2).",
    source: 'Ancien concours'
  }
];

// Combine raw builders and integrate Drive exam questions
const partBuilders: Record<number, { title: string; rawFn: () => Question[]; driveExams: Omit<Question, 'id' | 'part'>[] }> = {
  1: { title: 'Réseaux informatiques', rawFn: buildPart1Questions, driveExams: DRIVE_EXAM_P1 },
  2: { title: 'Bases de données, SQL et Oracle', rawFn: buildPart2Questions, driveExams: DRIVE_EXAM_P2 },
  3: { title: 'Programmation C', rawFn: buildPart3Questions, driveExams: DRIVE_EXAM_P3 },
  4: { title: 'Programmation Java et POO', rawFn: buildPart4Questions, driveExams: DRIVE_EXAM_P4 },
  // Part 5 is Algorithms and Data Structures (buildPart6Questions)
  5: { title: 'Algorithmique et structures de données', rawFn: buildPart6Questions, driveExams: DRIVE_EXAM_P5 },
  // Part 6 is Operating Systems & Linux (buildPart5Questions)
  6: { title: 'Systèmes d’exploitation et Linux/Unix', rawFn: buildPart5Questions, driveExams: DRIVE_EXAM_P6 },
  7: { title: 'Architecture et organisation des ordinateurs', rawFn: buildPart7Questions, driveExams: DRIVE_EXAM_P7 },
  8: { title: 'Génie logiciel et systèmes d’information', rawFn: buildPart8Questions, driveExams: DRIVE_EXAM_P8 },
  9: { title: 'Web, cybersécurité et systèmes distribués', rawFn: buildPart9Questions, driveExams: [] },
  10: { title: 'Informatique générale et technologies informatiques', rawFn: buildPart10Questions, driveExams: DRIVE_EXAM_P10 },
};

const targetDir = path.join(process.cwd(), 'src/data/parts');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let grandTotal = 0;
let ancientTotal = 0;
let conformeTotal = 0;

for (let partNum = 1; partNum <= 10; partNum++) {
  const config = partBuilders[partNum];
  const rawQuestions = config.rawFn();
  const driveQuestions = config.driveExams;

  // Insert Drive questions at the beginning of the part, and keep exactly 100 questions total
  const merged: Omit<Question, 'id' | 'part'>[] = [];

  // Add the Drive questions first
  for (const dq of driveQuestions) {
    merged.push({
      ...dq,
      source: 'Ancien concours',
    });
  }

  // Fill up the rest with raw questions, marking them as 'Conforme au programme'
  const needed = 100 - merged.length;
  for (let i = 0; i < needed && i < rawQuestions.length; i++) {
    const rawQ = rawQuestions[i];
    merged.push({
      topic: rawQ.topic,
      difficulty: rawQ.difficulty,
      question: rawQ.question,
      options: rawQ.options || rawQ.choices,
      choices: rawQ.choices || rawQ.options,
      correctAnswer: rawQ.correctAnswer,
      explanation: rawQ.explanation,
      source: 'Conforme au programme',
    });
  }

  if (merged.length !== 100) {
    throw new Error(`Part ${partNum} does not have 100 questions! Has ${merged.length}`);
  }

  // Map IDs and part numbers
  const finalQuestions: Question[] = merged.map((q, idx) => ({
    id: `p${partNum}-q${idx + 1}`,
    part: partNum,
    topic: q.topic,
    difficulty: q.difficulty,
    question: q.question,
    options: q.options,
    choices: q.choices,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    source: q.source as any,
  }));

  // Validate integrity
  finalQuestions.forEach((q, idx) => {
    if (!q.question || q.question.trim().length === 0) {
      throw new Error(`Part ${partNum} Q${idx + 1} has empty question text!`);
    }
    if (!q.options || q.options.length !== 4) {
      throw new Error(`Part ${partNum} Q${idx + 1} does not have exactly 4 options!`);
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`Part ${partNum} Q${idx + 1} has invalid correctAnswer: ${q.correctAnswer}`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      throw new Error(`Part ${partNum} Q${idx + 1} is missing explanation!`);
    }
    if (q.source === 'Ancien concours') {
      ancientTotal++;
    } else {
      conformeTotal++;
    }
  });

  // Write file
  const filePath = path.join(targetDir, `part${partNum}.ts`);
  const fileContent = `import { Question } from '../../types';\n\nexport const PART_${partNum}_QUESTIONS: Question[] = ${JSON.stringify(finalQuestions, null, 2)};\n`;
  fs.writeFileSync(filePath, fileContent, 'utf-8');

  console.log(`✓ Partie ${partNum} (${config.title}) : 100 questions enregistrées (${driveQuestions.length} Ancien concours, ${100 - driveQuestions.length} Conforme au programme)`);
  grandTotal += finalQuestions.length;
}

console.log(`\n=== RÉSUMÉ DE COMPILATION ===`);
console.log(`Total questions : ${grandTotal} (exactement 100 par partie sur 10 parties)`);
console.log(`Questions 'Ancien concours' : ${ancientTotal}`);
console.log(`Questions 'Conforme au programme' : ${conformeTotal}`);
console.log(`=== INTÉGRATION RÉUSSIE ===\n`);
