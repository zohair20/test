import { Question } from '../../types';

export const PART_3_QUESTIONS: Question[] = [
  {
    "id": "p3-q1",
    "part": 3,
    "topic": "Pointeurs et passage d'adresses",
    "difficulty": "Difficile",
    "question": "Soit le programme C suivant :\nvoid f8(int a, int *b) {\n  a++;\n  *b = -a++;\n  a = *b;\n}\nint main() {\n  int a = 8, b = 10;\n  f8(a, &b);\n  printf(\"%d %d\", a, b);\n  return 0;\n}\nQuel est l'affichage produit ?",
    "options": [
      "8 -9",
      "8 -8",
      "9 -9",
      "8 -11"
    ],
    "choices": [
      "8 -9",
      "8 -8",
      "9 -9",
      "8 -11"
    ],
    "correctAnswer": 0,
    "explanation": "Dans main(), 'a' est passé par valeur, donc sa valeur dans main() reste 8. Dans f8, a vaut d'abord 8, puis a++ -> 9. L'expression *b = -a++ évalue -9, assigne -9 à *b (donc b de main vaut -9), puis a est post-incrémenté à 10. Affichage : 8 -9. (Source : Concours ENSET Mohammedia 2022, Q6).",
    "source": "Ancien concours"
  },
  {
    "id": "p3-q2",
    "part": 3,
    "topic": "Chaînes de caractères et pointeurs",
    "difficulty": "Moyen",
    "question": "Soit le code C suivant :\nchar tab[] = \"enset-mohammedia\";\nint i = 0;\nwhile (tab[i] != '\\0') i++;\nprintf(\"i = %d\", i);\nQuel résultat est affiché ?",
    "options": [
      "16",
      "17",
      "18",
      "Boucle infinie car '\\0' n'est pas présent"
    ],
    "choices": [
      "16",
      "17",
      "18",
      "Boucle infinie car '\\0' n'est pas présent"
    ],
    "correctAnswer": 0,
    "explanation": "\"enset-mohammedia\" comporte 16 caractères (5 lettres pour enset, 1 tiret, 10 lettres pour mohammedia). La boucle compte jusqu'au caractère nul de fin de chaîne, soit i = 16. (Source : Concours ENSET Mohammedia 2022, Q7).",
    "source": "Ancien concours"
  },
  {
    "id": "p3-q3",
    "part": 3,
    "topic": "Opérateurs et boucles",
    "difficulty": "Moyen",
    "question": "Soit le code C suivant :\nint i = 0;\nwhile(++i <= 6);\nprintf(\"%d \", i);\nQuel résultat est affiché à l'exécution ?",
    "options": [
      "7",
      "6",
      "0 1 2 3 4 5 6",
      "1 2 3 4 5 6 7"
    ],
    "choices": [
      "7",
      "6",
      "0 1 2 3 4 5 6",
      "1 2 3 4 5 6 7"
    ],
    "correctAnswer": 0,
    "explanation": "Remarquez le point-virgule ';' immédiatement après la parenthèse du while. La boucle s'exécute avec un corps vide. Quand i vaut 6, ++i passe à 7, la condition 7 <= 6 devient fausse, la boucle se termine et printf affiche 7. (Source : Concours ENSET Mohammedia 2022, Q13).",
    "source": "Ancien concours"
  },
  {
    "id": "p3-q4",
    "part": 3,
    "topic": "Arithmétique des pointeurs",
    "difficulty": "Moyen",
    "question": "Soit le code C suivant :\nint tab[] = {10, 8, 35, 4, 18};\nint *p = tab;\nprintf(\"%d \", *p++);\nprintf(\"%d \", *++p - 2);\nprintf(\"%d \", *p + 1);\nQuel sera le résultat affiché ?",
    "options": [
      "10 33 36",
      "10 35 36",
      "8 35 36",
      "10 6 36"
    ],
    "choices": [
      "10 33 36",
      "10 35 36",
      "8 35 36",
      "10 6 36"
    ],
    "correctAnswer": 0,
    "explanation": "*p++ lit tab[0]=10 puis avance p sur tab[1]. Ensuite *++p pré-incrémente d'abord p vers tab[2] (valeur 35), puis soustrait 2 : 35 - 2 = 33. Enfin *p lit tab[2]=35 et ajoute 1 : 36. Résultat : 10 33 36. (Source : Concours ENSET Mohammedia 2022, Q19).",
    "source": "Ancien concours"
  },
  {
    "id": "p3-q5",
    "part": 3,
    "topic": "Pointeurs et fonctions",
    "difficulty": "Facile",
    "question": "Étant donnée la signature de fonction void Calcule(int *i, double j); et les variables int a; double b; Quel est l'appel correct ?",
    "options": [
      "Calcule(&a, b);",
      "Calcule(a, b);",
      "Calcule(*a, b);",
      "Calcule(a, &b);"
    ],
    "choices": [
      "Calcule(&a, b);",
      "Calcule(a, b);",
      "Calcule(*a, b);",
      "Calcule(a, &b);"
    ],
    "correctAnswer": 0,
    "explanation": "Le premier paramètre étant un pointeur sur entier (int*), il faut fournir l'adresse de la variable 'a' avec l'opérateur d'adressage &a. Le second paramètre attend un double par valeur, on passe donc directement b. (Source : Concours LPISIL EST Essaouira 2014, Q6 C).",
    "source": "Ancien concours"
  },
  {
    "id": "p3-q6",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Facile",
    "question": "Quel opérateur en C permet de connaître la taille en octets d'un type de données ou d'une variable en mémoire ?",
    "options": [
      "sizeof",
      "lengthof",
      "size",
      "bytes"
    ],
    "choices": [
      "sizeof",
      "lengthof",
      "size",
      "bytes"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur unaire à la compilation `sizeof` renvoie la taille en octets (de type `size_t`) de son opérande.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q7",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Moyen",
    "question": "Quelle est la valeur de l'expression entière `5 / 2` en langage C ?",
    "options": [
      "2",
      "2.5",
      "3",
      "Erreur de compilation"
    ],
    "choices": [
      "2",
      "2.5",
      "3",
      "Erreur de compilation"
    ],
    "correctAnswer": 0,
    "explanation": "La division entre deux entiers en C effectue une division entière avec troncature vers zéro, produisant le quotient entier 2.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q8",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Facile",
    "question": "Quel opérateur donne le reste de la division entière en C ?",
    "options": [
      "%",
      "/",
      "mod",
      "//"
    ],
    "choices": [
      "%",
      "/",
      "mod",
      "//"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur modulo `%` calcule le reste de la division entière entre deux entiers (ex: `7 % 3` vaut 1).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q9",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre `++i` (pré-incrémentation) et `i++` (post-incrémentation) dans une expression comme `x = i++` ?",
    "options": [
      "`i++` évalue d'abord la valeur actuelle de `i` pour l'affectation à `x`, puis incrémente `i`",
      "`++i` incrémente deux fois la valeur de `i`",
      "`i++` est interdit en standard C99",
      "Il n'y a aucune différence d'évaluation"
    ],
    "choices": [
      "`i++` évalue d'abord la valeur actuelle de `i` pour l'affectation à `x`, puis incrémente `i`",
      "`++i` incrémente deux fois la valeur de `i`",
      "`i++` est interdit en standard C99",
      "Il n'y a aucune différence d'évaluation"
    ],
    "correctAnswer": 0,
    "explanation": "En post-incrémentation (`x = i++`), la valeur de l'expression est l'ancienne valeur de `i` avant incrémentation. En pré-incrémentation (`x = ++i`), `i` est d'abord incrémenté puis sa nouvelle valeur est renvoyée.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q10",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Difficile",
    "question": "Quelle est la taille minimale garantie par la norme ISO C pour le type `short` et le type `long` ?",
    "options": [
      "short au moins 16 bits, long au moins 32 bits",
      "short au moins 8 bits, long au moins 64 bits",
      "short au moins 32 bits, long au moins 64 bits",
      "short au moins 16 bits, long au moins 128 bits"
    ],
    "choices": [
      "short au moins 16 bits, long au moins 32 bits",
      "short au moins 8 bits, long au moins 64 bits",
      "short au moins 32 bits, long au moins 64 bits",
      "short au moins 16 bits, long au moins 128 bits"
    ],
    "correctAnswer": 0,
    "explanation": "La norme C garantit : `sizeof(char) = 1` (>= 8 bits), `short` >= 16 bits, `int` >= 16 bits, `long` >= 32 bits, et `long long` >= 64 bits.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q11",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Moyen",
    "question": "Quel opérateur logique en C applique le principe de court-circuit (Short-Circuit Evaluation) ?",
    "options": [
      "Les opérateurs `&&` et `||`",
      "Les opérateurs bit-à-bit `&` et `|`",
      "L'opérateur ternaire uniquement",
      "L'opérateur virgule `,`"
    ],
    "choices": [
      "Les opérateurs `&&` et `||`",
      "Les opérateurs bit-à-bit `&` et `|`",
      "L'opérateur ternaire uniquement",
      "L'opérateur virgule `,`"
    ],
    "correctAnswer": 0,
    "explanation": "Avec `&&`, si le premier terme est faux (0), le second terme n'est pas évalué. Avec `||`, si le premier terme est vrai (non nul), le second terme n'est pas évalué.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q12",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Facile",
    "question": "Quel mot-clé en C déclare une variable dont la valeur ne peut pas être modifiée après son initialisation ?",
    "options": [
      "const",
      "final",
      "static",
      "immutable"
    ],
    "choices": [
      "const",
      "final",
      "static",
      "immutable"
    ],
    "correctAnswer": 0,
    "explanation": "Le qualificateur `const` indique au compilateur que l'objet est en lecture seule.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q13",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Difficile",
    "question": "Que vaut l'expression bit-à-bit `(1 << 3)` en langage C ?",
    "options": [
      "8",
      "6",
      "16",
      "3"
    ],
    "choices": [
      "8",
      "6",
      "16",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Le décalage à gauche de 1 par 3 positions correspond à multiplier 1 par 2^3, soit 8 (en binaire : `00000001` devient `00001000`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q14",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Moyen",
    "question": "Quel spécificateur de format de `printf` permet d'afficher la valeur d'un pointeur sous forme d'adresse hexadécimale ?",
    "options": [
      "%p",
      "%x",
      "%d",
      "%s"
    ],
    "choices": [
      "%p",
      "%x",
      "%d",
      "%s"
    ],
    "correctAnswer": 0,
    "explanation": "Le format `%p` dans `printf` affiche une valeur de pointeur générique (`void*`) au format d'adresse mémoire spécifique à l'architecture.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q15",
    "part": 3,
    "topic": "Types & Opérateurs C",
    "difficulty": "Facile",
    "question": "Quel fichier d'en-tête de la bibliothèque standard fournit les fonctions d'entrée/sortie de base comme `printf` et `scanf` ?",
    "options": [
      "<stdio.h>",
      "<stdlib.h>",
      "<string.h>",
      "<math.h>"
    ],
    "choices": [
      "<stdio.h>",
      "<stdlib.h>",
      "<string.h>",
      "<math.h>"
    ],
    "correctAnswer": 0,
    "explanation": "`<stdio.h>` (Standard Input Output) contient les déclarations des flux standard (`stdin`, `stdout`, `stderr`) et de leurs fonctions associées.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q16",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Facile",
    "question": "Quelle instruction est indispensable à la fin de chaque bloc `case` d'un `switch` pour éviter d'exécuter les cas suivants en cascade (Fall-through) ?",
    "options": [
      "break",
      "continue",
      "exit",
      "return"
    ],
    "choices": [
      "break",
      "continue",
      "exit",
      "return"
    ],
    "correctAnswer": 0,
    "explanation": "Sans l'instruction `break;`, l'exécution continue séquentiellement dans les blocs `case` suivants même si leur valeur ne correspond pas (comportement de 'fall-through').",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q17",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Moyen",
    "question": "Quelle est la particularité fondamentale de la boucle `do ... while(condition);` par rapport à la boucle `while(condition)` ?",
    "options": [
      "Le corps de la boucle `do ... while` est toujours exécuté au moins une fois, car le test est effectué en fin d'itération",
      "Elle ne peut pas utiliser de variables entières",
      "Elle est plus rapide car vectorisée par le processeur",
      "Elle s'exécute uniquement si la condition est fausse"
    ],
    "choices": [
      "Le corps de la boucle `do ... while` est toujours exécuté au moins une fois, car le test est effectué en fin d'itération",
      "Elle ne peut pas utiliser de variables entières",
      "Elle est plus rapide car vectorisée par le processeur",
      "Elle s'exécute uniquement si la condition est fausse"
    ],
    "correctAnswer": 0,
    "explanation": "La boucle `do ... while` évalue sa condition après l'exécution du bloc, garantissant ainsi au minimum une première exécution.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q18",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Facile",
    "question": "Que fait l'instruction `continue` lorsqu'elle est exécutée à l'intérieur d'une boucle `for` ?",
    "options": [
      "Elle interrompt l'itération en cours et passe directement à l'évaluation de l'incrémentation puis à la condition de l'itération suivante",
      "Elle quitte définitivement la boucle",
      "Elle redémarre la boucle depuis le début de la fonction",
      "Elle réinitialise les variables à zéro"
    ],
    "choices": [
      "Elle interrompt l'itération en cours et passe directement à l'évaluation de l'incrémentation puis à la condition de l'itération suivante",
      "Elle quitte définitivement la boucle",
      "Elle redémarre la boucle depuis le début de la fonction",
      "Elle réinitialise les variables à zéro"
    ],
    "correctAnswer": 0,
    "explanation": "`continue` saute le reste des instructions de l'itération courante et déclenche l'itération suivante de la boucle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q19",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Moyen",
    "question": "Combien de fois le corps de la boucle suivante sera-t-il exécuté : `for (int i = 0; i < 5; i += 2)` ?",
    "options": [
      "3 fois (pour i=0, i=2, i=4)",
      "5 fois",
      "2 fois",
      "Infini"
    ],
    "choices": [
      "3 fois (pour i=0, i=2, i=4)",
      "5 fois",
      "2 fois",
      "Infini"
    ],
    "correctAnswer": 0,
    "explanation": "La variable `i` prend les valeurs 0, puis 2, puis 4. À l'étape suivante, `i` devient 6 qui n'est plus < 5, donc la boucle s'arrête après 3 exécutions.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q20",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Moyen",
    "question": "Quels types d'expressions sont légalement acceptés dans l'instruction `switch(expression)` en langage C standard ?",
    "options": [
      "Uniquement les types entiers (char, int, short, long, enum)",
      "Tous les types y compris float, double et chaînes de caractères",
      "Uniquement les pointeurs",
      "Les tableaux et structures"
    ],
    "choices": [
      "Uniquement les types entiers (char, int, short, long, enum)",
      "Tous les types y compris float, double et chaînes de caractères",
      "Uniquement les pointeurs",
      "Les tableaux et structures"
    ],
    "correctAnswer": 0,
    "explanation": "En C, l'expression d'un `switch` et les étiquettes de chaque `case` doivent impérativement être de type entier (ou énumération). Les types flottants (`float`, `double`) ou chaînes sont strictement interdits.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q21",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Difficile",
    "question": "Que représente l'instruction `for(;;)` en C ?",
    "options": [
      "Une boucle infinie",
      "Une erreur de syntaxe",
      "Une boucle exécutée 0 fois",
      "Une instruction d'attente système de 1 seconde"
    ],
    "choices": [
      "Une boucle infinie",
      "Une erreur de syntaxe",
      "Une boucle exécutée 0 fois",
      "Une instruction d'attente système de 1 seconde"
    ],
    "correctAnswer": 0,
    "explanation": "Dans une boucle `for(initialisation; condition; incrementation)`, omettre la condition équivaut à spécifier une condition toujours vraie (non-nulle), créant une boucle infinie.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q22",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Facile",
    "question": "Quelle clause d'un `switch` s'exécute si aucune des valeurs des `case` ne correspond à l'expression testée ?",
    "options": [
      "default:",
      "else:",
      "otherwise:",
      "fallback:"
    ],
    "choices": [
      "default:",
      "else:",
      "otherwise:",
      "fallback:"
    ],
    "correctAnswer": 0,
    "explanation": "L'étiquette `default:` définit le bloc d'instructions exécuté lorsqu'aucun autre cas ne correspond.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q23",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Moyen",
    "question": "En langage C, comment est évaluée la vérité d'une condition dans une structure `if (expression)` ?",
    "options": [
      "0 est considéré comme FAUX, et toute valeur différente de 0 est considérée comme VRAI",
      "Seul 1 est considéré comme VRAI",
      "Les nombres négatifs sont considérés comme FAUX",
      "Une condition doit impérativement renvoyer un booléen de stdbool.h"
    ],
    "choices": [
      "0 est considéré comme FAUX, et toute valeur différente de 0 est considérée comme VRAI",
      "Seul 1 est considéré comme VRAI",
      "Les nombres négatifs sont considérés comme FAUX",
      "Une condition doit impérativement renvoyer un booléen de stdbool.h"
    ],
    "correctAnswer": 0,
    "explanation": "En C historique, il n'y a pas de type booléen natif distinct : la valeur 0 représente le faux, et n'importe quelle valeur non nulle (y compris -1 ou 42) est évaluée comme vraie.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q24",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Difficile",
    "question": "Quelle instruction permet un saut inconditionnel vers une étiquette nommée dans la même fonction en C (généralement déconseillée pour le code propre mais tolérée pour la gestion d'erreurs) ?",
    "options": [
      "goto",
      "jump",
      "branch",
      "skip"
    ],
    "choices": [
      "goto",
      "jump",
      "branch",
      "skip"
    ],
    "correctAnswer": 0,
    "explanation": "L'instruction `goto label;` effectue un saut inconditionnel vers `label:`. Elle est parfois employée dans le noyau Linux pour centraliser le nettoyage des ressources lors d'erreurs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q25",
    "part": 3,
    "topic": "Structures de contrôle C",
    "difficulty": "Moyen",
    "question": "Quel est l'effet de l'opérateur ternaire dans `int min = (a < b) ? a : b;` ?",
    "options": [
      "Si `a < b` est vrai, `min` reçoit `a`, sinon `min` reçoit `b`",
      "Il compare trois variables en même temps",
      "Il effectue une boucle de 3 itérations",
      "Il provoque une erreur si a et b sont égaux"
    ],
    "choices": [
      "Si `a < b` est vrai, `min` reçoit `a`, sinon `min` reçoit `b`",
      "Il compare trois variables en même temps",
      "Il effectue une boucle de 3 itérations",
      "Il provoque une erreur si a et b sont égaux"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur conditionnel `? :` évalue la condition ; si vraie, il renvoie l'expression avant les deux-points, sinon celle après.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q26",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Facile",
    "question": "Comment sont transmis les paramètres scalaires simples (int, char, float) aux fonctions en langage C ?",
    "options": [
      "Exclusivement par valeur (une copie est transmise à la fonction)",
      "Par référence par défaut",
      "Par pointeur implicite automatique",
      "Par nom"
    ],
    "choices": [
      "Exclusivement par valeur (une copie est transmise à la fonction)",
      "Par référence par défaut",
      "Par pointeur implicite automatique",
      "Par nom"
    ],
    "correctAnswer": 0,
    "explanation": "En langage C, TOUS les arguments de fonctions sont passés strictement par valeur. Pour modifier la variable originale de l'appelant, il faut explicitement passer l'adresse de la variable (un pointeur).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q27",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Facile",
    "question": "Quel type de retour est utilisé pour une fonction en C qui ne retourne aucune valeur à l'appelant ?",
    "options": [
      "void",
      "null",
      "empty",
      "none"
    ],
    "choices": [
      "void",
      "null",
      "empty",
      "none"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé `void` indique l'absence de type de retour (procédure).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q28",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un prototype de fonction (déclaration anticipée) en C ?",
    "options": [
      "Une déclaration précisant le nom, le type de retour et les types des paramètres de la fonction avant sa définition complète",
      "Une fonction générée automatiquement par le compilateur",
      "Une fonction écrite en assembleur",
      "Une fonction sans corps qui ne peut jamais être appelée"
    ],
    "choices": [
      "Une déclaration précisant le nom, le type de retour et les types des paramètres de la fonction avant sa définition complète",
      "Une fonction générée automatiquement par le compilateur",
      "Une fonction écrite en assembleur",
      "Une fonction sans corps qui ne peut jamais être appelée"
    ],
    "correctAnswer": 0,
    "explanation": "Le prototype permet au compilateur de vérifier la cohérence des appels (nombre et types d'arguments, type de retour) avant que le compilateur ne rencontre le corps complet de la fonction.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q29",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Difficile",
    "question": "Que se produit-il lors d'une récursion infinie sans condition d'arrêt valide en C ?",
    "options": [
      "Un débordement de pile (Stack Overflow) provoquant un plantage du programme (Segmentation Fault)",
      "Une boucle infinie sans consommation de mémoire",
      "Une fuite de mémoire sur le tas (heap)",
      "Une réinitialisation de la machine"
    ],
    "choices": [
      "Un débordement de pile (Stack Overflow) provoquant un plantage du programme (Segmentation Fault)",
      "Une boucle infinie sans consommation de mémoire",
      "Une fuite de mémoire sur le tas (heap)",
      "Une réinitialisation de la machine"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque appel récursif empile un nouveau cadre d'activation (Stack Frame) sur la pile d'exécution. Sans condition d'arrêt, la pile s'épuise, entraînant un Stack Overflow et un crash.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q30",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Moyen",
    "question": "Que suggère le mot-clé `inline` appliqué à une fonction en C99 ?",
    "options": [
      "Il suggère au compilateur de remplacer les appels à la fonction directement par son code machine pour éliminer le surcoût de l'appel",
      "Il force la fonction à être stockée sur une seule ligne",
      "Il interdit l'utilisation de variables locales",
      "Il rend la fonction accessible depuis d'autres fichiers"
    ],
    "choices": [
      "Il suggère au compilateur de remplacer les appels à la fonction directement par son code machine pour éliminer le surcoût de l'appel",
      "Il force la fonction à être stockée sur une seule ligne",
      "Il interdit l'utilisation de variables locales",
      "Il rend la fonction accessible depuis d'autres fichiers"
    ],
    "correctAnswer": 0,
    "explanation": "`inline` est une optimisation qui intègre directement le corps de la fonction à l'endroit de l'appel, supprimant le prologue/épilogue d'appel de sous-routine au prix d'une taille de binaire légèrement plus grande.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q31",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Difficile",
    "question": "Quel en-tête standard et quelle macro permettent de créer des fonctions avec un nombre variable d'arguments (fonctions variadiques comme `printf`) ?",
    "options": [
      "<stdarg.h> avec va_list, va_start, va_arg et va_end",
      "<varargs.h> avec arg_get et arg_next",
      "<stdlib.h> avec params_list",
      "<stdio.h> avec format_args"
    ],
    "choices": [
      "<stdarg.h> avec va_list, va_start, va_arg et va_end",
      "<varargs.h> avec arg_get et arg_next",
      "<stdlib.h> avec params_list",
      "<stdio.h> avec format_args"
    ],
    "correctAnswer": 0,
    "explanation": "L'en-tête `<stdarg.h>` définit le type `va_list` et les macros `va_start`, `va_arg` et `va_end` nécessaires pour parcourir les arguments variables indiqués par `...`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q32",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Facile",
    "question": "Quelle est la signature standard valide de la fonction principale `main` recevant les arguments de la ligne de commande en C ?",
    "options": [
      "int main(int argc, char *argv[])",
      "void main(char args)",
      "int main(string[] args)",
      "main(int argc, int argv)"
    ],
    "choices": [
      "int main(int argc, char *argv[])",
      "void main(char args)",
      "int main(string[] args)",
      "main(int argc, int argv)"
    ],
    "correctAnswer": 0,
    "explanation": "La norme C spécifie `int main(void)` ou `int main(int argc, char *argv[])` où `argc` est le nombre d'arguments et `argv` le tableau des chaînes de caractères.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q33",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Moyen",
    "question": "Dans `int main(int argc, char *argv[])`, que contient la première case `argv[0]` ?",
    "options": [
      "Le nom ou le chemin d'invocation du programme lui-même",
      "Le premier paramètre fourni par l'utilisateur",
      "Le nombre total de paramètres",
      "La valeur NULL"
    ],
    "choices": [
      "Le nom ou le chemin d'invocation du programme lui-même",
      "Le premier paramètre fourni par l'utilisateur",
      "Le nombre total de paramètres",
      "La valeur NULL"
    ],
    "correctAnswer": 0,
    "explanation": "`argv[0]` contient la chaîne représentant le nom ou la commande par laquelle le binaire a été exécuté. Le premier véritable argument utilisateur commence à `argv[1]`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q34",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Difficile",
    "question": "Dans l'implémentation de la fonction factorielle récursive `int fact(int n)`, quelle est la condition de base (cas d'arrêt) indispensable ?",
    "options": [
      "if (n <= 1) return 1;",
      "if (n == 0) return 0;",
      "if (n < 0) return fact(n);",
      "while (n > 0) n--;"
    ],
    "choices": [
      "if (n <= 1) return 1;",
      "if (n == 0) return 0;",
      "if (n < 0) return fact(n);",
      "while (n > 0) n--;"
    ],
    "correctAnswer": 0,
    "explanation": "Pour 0! et 1!, le résultat est 1. La condition `n <= 1 return 1;` stoppe la récursion.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q35",
    "part": 3,
    "topic": "Fonctions C",
    "difficulty": "Moyen",
    "question": "Que retourne traditionnellement la fonction `main` d'un programme C pour signaler au système d'exploitation que l'exécution s'est terminée avec succès sans erreur ?",
    "options": [
      "0 (ou EXIT_SUCCESS)",
      "1",
      "-1",
      "255"
    ],
    "choices": [
      "0 (ou EXIT_SUCCESS)",
      "1",
      "-1",
      "255"
    ],
    "correctAnswer": 0,
    "explanation": "Par convention Unix/POSIX et standard C, le code de retour 0 signale une fin normale et réussie du processus. Toute valeur non nulle indique un code d'erreur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q36",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un pointeur en langage C ?",
    "options": [
      "Une variable qui stocke l'adresse mémoire d'une autre variable",
      "Un alias d'une constante",
      "Une fonction spéciale de la bibliothèque mathématique",
      "Un tableau à deux dimensions"
    ],
    "choices": [
      "Une variable qui stocke l'adresse mémoire d'une autre variable",
      "Un alias d'une constante",
      "Une fonction spéciale de la bibliothèque mathématique",
      "Un tableau à deux dimensions"
    ],
    "correctAnswer": 0,
    "explanation": "Un pointeur est une variable dont la valeur est l'adresse mémoire d'un autre emplacement de données.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q37",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Facile",
    "question": "Quel opérateur permet d'obtenir l'adresse mémoire d'une variable existante en C ?",
    "options": [
      "L'opérateur esperluette (&)",
      "L'opérateur astérisque (*)",
      "L'opérateur flèche (->)",
      "L'opérateur tilde (~)"
    ],
    "choices": [
      "L'opérateur esperluette (&)",
      "L'opérateur astérisque (*)",
      "L'opérateur flèche (->)",
      "L'opérateur tilde (~)"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur d'adresse `&` (ex: `&x`) renvoie l'adresse mémoire de la variable `x`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q38",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Facile",
    "question": "Quel opérateur permet de déréférencer un pointeur pour accéder ou modifier la valeur située à l'adresse pointée ?",
    "options": [
      "L'opérateur astérisque (*)",
      "L'opérateur esperluette (&)",
      "L'opérateur point (.)",
      "L'opérateur dièse (#)"
    ],
    "choices": [
      "L'opérateur astérisque (*)",
      "L'opérateur esperluette (&)",
      "L'opérateur point (.)",
      "L'opérateur dièse (#)"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur de déréférencement `*p` accède au contenu de la case mémoire référencée par le pointeur `p`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q39",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Difficile",
    "question": "Si `int *p = tab;` où `sizeof(int) == 4`, de combien d'octets l'adresse contenue dans `p` avance-t-elle lorsqu'on exécute `p++` ?",
    "options": [
      "4 octets",
      "1 octet",
      "8 octets",
      "2 octets"
    ],
    "choices": [
      "4 octets",
      "1 octet",
      "8 octets",
      "2 octets"
    ],
    "correctAnswer": 0,
    "explanation": "L'arithmétique des pointeurs est proportionnelle au type pointé : incrémenter un `int*` avance l'adresse de `1 * sizeof(int)`, soit 4 octets.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q40",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un pointeur générique `void *` en C ?",
    "options": [
      "Un pointeur capable de contenir l'adresse de n'importe quel type de données sans cast explicite, mais qui ne peut pas être déréférencé directement sans conversion de type",
      "Un pointeur qui pointe obligatoirement sur NULL",
      "Un pointeur supprimé",
      "Un pointeur réservé au système d'exploitation"
    ],
    "choices": [
      "Un pointeur capable de contenir l'adresse de n'importe quel type de données sans cast explicite, mais qui ne peut pas être déréférencé directement sans conversion de type",
      "Un pointeur qui pointe obligatoirement sur NULL",
      "Un pointeur supprimé",
      "Un pointeur réservé au système d'exploitation"
    ],
    "correctAnswer": 0,
    "explanation": "`void*` est un pointeur universel. Comme sa taille cible n'est pas connue du compilateur, il est interdit de le déréférencer directement ou de lui appliquer de l'arithmétique sans cast préalable.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q41",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Difficile",
    "question": "Quelle est la différence fondamentale entre `const int *ptr` et `int * const ptr` ?",
    "options": [
      "`const int *ptr` : la valeur pointée est constante (on ne peut pas modifier `*ptr`), alors que `int * const ptr` : le pointeur lui-même est constant (l'adresse stockée dans `ptr` ne peut plus être modifiée)",
      "Il n'y a aucune différence",
      "`int * const ptr` interdit la lecture de l'adresse",
      "`const int *ptr` ne peut pas être initialisé"
    ],
    "choices": [
      "`const int *ptr` : la valeur pointée est constante (on ne peut pas modifier `*ptr`), alors que `int * const ptr` : le pointeur lui-même est constant (l'adresse stockée dans `ptr` ne peut plus être modifiée)",
      "Il n'y a aucune différence",
      "`int * const ptr` interdit la lecture de l'adresse",
      "`const int *ptr` ne peut pas être initialisé"
    ],
    "correctAnswer": 0,
    "explanation": "Règle de lecture de droite à gauche : `const int *ptr` est un pointeur vers un entier constant ; `int * const ptr` est un pointeur constant vers un entier modifiable.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q42",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Moyen",
    "question": "Que vaut la constante pointeur `NULL` définie dans `<stddef.h>` ou `<stdio.h>` ?",
    "options": [
      "Une constante entière de valeur 0 convertie en pointeur (`(void*)0`)",
      "Une chaîne de caractères vide",
      "L'adresse -1",
      "Une fonction système"
    ],
    "choices": [
      "Une constante entière de valeur 0 convertie en pointeur (`(void*)0`)",
      "Une chaîne de caractères vide",
      "L'adresse -1",
      "Une fonction système"
    ],
    "correctAnswer": 0,
    "explanation": "`NULL` est une macro représentant un pointeur nul, généralement définie comme `((void*)0)` ou `0`, indiquant qu'il ne pointe sur aucune zone mémoire valide.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q43",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un 'Pointeur Sauvage' (Dangling Pointer) en programmation C ?",
    "options": [
      "Un pointeur qui continue de pointer vers une adresse mémoire dont la zone a déjà été libérée avec `free()` ou dont la variable locale est sortie de portée",
      "Un pointeur initialisé à NULL",
      "Un pointeur vers une fonction",
      "Un pointeur alloué sur deux processeurs"
    ],
    "choices": [
      "Un pointeur qui continue de pointer vers une adresse mémoire dont la zone a déjà été libérée avec `free()` ou dont la variable locale est sortie de portée",
      "Un pointeur initialisé à NULL",
      "Un pointeur vers une fonction",
      "Un pointeur alloué sur deux processeurs"
    ],
    "correctAnswer": 0,
    "explanation": "Un 'dangling pointer' référence une mémoire devenue invalide. Tenter de lire ou écrire via ce pointeur provoque un comportement indéfini (Use-After-Free).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q44",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Difficile",
    "question": "Quelle est la syntaxe correcte pour déclarer un pointeur `f` vers une fonction prenant deux entiers `int` en paramètres et renvoyant un `int` ?",
    "options": [
      "int (*f)(int, int);",
      "int *f(int, int);",
      "int (f*)(int, int);",
      "function<int(int, int)> f;"
    ],
    "choices": [
      "int (*f)(int, int);",
      "int *f(int, int);",
      "int (f*)(int, int);",
      "function<int(int, int)> f;"
    ],
    "correctAnswer": 0,
    "explanation": "`int (*f)(int, int);` déclare un pointeur vers fonction. Sans parenthèses, `int *f(int, int);` déclarerait une fonction `f` retournant un pointeur d'entier `int*`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q45",
    "part": 3,
    "topic": "Pointeurs C",
    "difficulty": "Facile",
    "question": "Que produit l'opération de déréférencement d'un pointeur NULL (`int *p = NULL; *p = 10;`) sous un système d'exploitation moderne avec mémoire virtuelle protégée ?",
    "options": [
      "Une erreur de segmentation (Segmentation Fault / Signal SIGSEGV)",
      "L'écriture de la valeur 10 à la première case de la mémoire physique",
      "Un simple avertissement à l'écran",
      "La fermeture propre du programme avec le code 0"
    ],
    "choices": [
      "Une erreur de segmentation (Segmentation Fault / Signal SIGSEGV)",
      "L'écriture de la valeur 10 à la première case de la mémoire physique",
      "Un simple avertissement à l'écran",
      "La fermeture propre du programme avec le code 0"
    ],
    "correctAnswer": 0,
    "explanation": "La page 0 de la mémoire virtuelle est protégée contre tout accès par la MMU de l'OS. Y accéder déclenche une faute de protection mémoire (Segmentation Fault).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q46",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Facile",
    "question": "Quel caractère de fin de chaîne obligatoire marque la terminaison d'une chaîne de caractères en C ?",
    "options": [
      "Le caractère nul '\\0'",
      "Le caractère retour chariot '\\n'",
      "Le caractère espace ' '",
      "Le caractère point '.'"
    ],
    "choices": [
      "Le caractère nul '\\0'",
      "Le caractère retour chariot '\\n'",
      "Le caractère espace ' '",
      "Le caractère point '.'"
    ],
    "correctAnswer": 0,
    "explanation": "Les chaînes en C sont des tableaux de `char` terminés par l'octet nul `\\0` (valeur ASCII 0).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q47",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Moyen",
    "question": "Combien d'octets en mémoire occupe le littéral de chaîne `\"Bonjour\"` ?",
    "options": [
      "8 octets (7 caractères + 1 octet pour le '\\0')",
      "7 octets",
      "6 octets",
      "14 octets"
    ],
    "choices": [
      "8 octets (7 caractères + 1 octet pour le '\\0')",
      "7 octets",
      "6 octets",
      "14 octets"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot 'Bonjour' comporte 7 lettres. Le compilateur ajoute automatiquement le caractère nul `\\0` à la fin, occupant ainsi 8 octets en mémoire.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q48",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Facile",
    "question": "Quelle fonction de `<string.h>` permet de calculer la longueur d'une chaîne de caractères (sans compter le caractère nul final) ?",
    "options": [
      "strlen()",
      "sizeof()",
      "strlength()",
      "length()"
    ],
    "choices": [
      "strlen()",
      "sizeof()",
      "strlength()",
      "length()"
    ],
    "correctAnswer": 0,
    "explanation": "`strlen(chaine)` compte le nombre de caractères jusqu'au premier `\\0` rencontré (sans inclure le `\\0`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q49",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Moyen",
    "question": "Quelle fonction de copie de chaîne est considérée comme dangereuse face aux failles de dépassement de tampon (Buffer Overflow) par rapport à sa version sécurisée `strncpy` ?",
    "options": [
      "strcpy",
      "strcmp",
      "strcat",
      "strchr"
    ],
    "choices": [
      "strcpy",
      "strcmp",
      "strcat",
      "strchr"
    ],
    "correctAnswer": 0,
    "explanation": "`strcpy(dest, src)` copie sans vérifier la taille du buffer cible `dest`, risquant d'écraser la mémoire au-delà du tableau.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q50",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Moyen",
    "question": "Quelle est la valeur renvoyée par `strcmp(s1, s2)` si les deux chaînes de caractères sont exactement identiques ?",
    "options": [
      "0",
      "1",
      "-1",
      "true"
    ],
    "choices": [
      "0",
      "1",
      "-1",
      "true"
    ],
    "correctAnswer": 0,
    "explanation": "`strcmp` renvoie 0 si les chaînes sont égales, une valeur négative si `s1 < s2`, et une valeur positive si `s1 > s2` dans l'ordre lexicographique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q51",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Difficile",
    "question": "En langage C, pourquoi l'expression `tab[i]` est-elle strictement équivalente à `*(tab + i)` et même à `i[tab]` ?",
    "options": [
      "Parce que l'indexation de tableau en C est une simple convention syntaxique résolue par arithmétique de pointeur commutative `*(tab + i)`",
      "C'est un bug du compilateur GCC",
      "Parce que les tableaux sont stockés dans un dictionnaire",
      "Ce n'est vrai que pour les tableaux à deux dimensions"
    ],
    "choices": [
      "Parce que l'indexation de tableau en C est une simple convention syntaxique résolue par arithmétique de pointeur commutative `*(tab + i)`",
      "C'est un bug du compilateur GCC",
      "Parce que les tableaux sont stockés dans un dictionnaire",
      "Ce n'est vrai que pour les tableaux à deux dimensions"
    ],
    "correctAnswer": 0,
    "explanation": "En C, `tab[i]` est textuellement défini comme `*(tab + i)`. L'addition étant commutative, `*(tab + i)` équivaut à `*(i + tab)`, soit `i[tab]`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q52",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Facile",
    "question": "Quel est l'indice du premier élément dans un tableau en langage C ?",
    "options": [
      "0",
      "1",
      "-1",
      "Dépend du compilateur"
    ],
    "choices": [
      "0",
      "1",
      "-1",
      "Dépend du compilateur"
    ],
    "correctAnswer": 0,
    "explanation": "Tous les tableaux en C sont indexés à partir de 0 (0-indexed). Pour un tableau de N éléments, les indices vont de 0 à N-1.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q53",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Difficile",
    "question": "Dans une déclaration de fonction `void f(int tab[])`, que reçoit réellement la fonction ?",
    "options": [
      "Un pointeur vers le premier élément du tableau (`int *tab`)",
      "Une copie complète de toutes les cases du tableau",
      "La taille du tableau",
      "Une référence C++"
    ],
    "choices": [
      "Un pointeur vers le premier élément du tableau (`int *tab`)",
      "Une copie complète de toutes les cases du tableau",
      "La taille du tableau",
      "Une référence C++"
    ],
    "correctAnswer": 0,
    "explanation": "Lorsqu'un tableau est passé en paramètre, il 'dégénère' (array decay) en un pointeur vers son premier élément. La fonction n'a donc aucun moyen de connaître sa taille sans un paramètre additionnel.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q54",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Moyen",
    "question": "Quelle fonction de `<string.h>` permet de concaténer la chaîne source à la fin de la chaîne destination ?",
    "options": [
      "strcat()",
      "strcpy()",
      "strappend()",
      "strjoin()"
    ],
    "choices": [
      "strcat()",
      "strcpy()",
      "strappend()",
      "strjoin()"
    ],
    "correctAnswer": 0,
    "explanation": "`strcat(dest, src)` ajoute le contenu de `src` à la suite de `dest` en écrasant le `\\0` initial de `dest` et en ajoutant un nouveau `\\0` à la fin.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q55",
    "part": 3,
    "topic": "Tableaux & Chaînes C",
    "difficulty": "Difficile",
    "question": "Comment sont organisés les éléments d'un tableau à deux dimensions `int matrice[3][4]` en mémoire physique ?",
    "options": [
      "De manière contiguë en ligne par ligne (Row-major order)",
      "En colonne par colonne (Column-major order)",
      "Par blocs épars reliés par des pointeurs",
      "Dans une table de hachage"
    ],
    "choices": [
      "De manière contiguë en ligne par ligne (Row-major order)",
      "En colonne par colonne (Column-major order)",
      "Par blocs épars reliés par des pointeurs",
      "Dans une table de hachage"
    ],
    "correctAnswer": 0,
    "explanation": "En C, les tableaux multidimensionnels sont stockés de façon contiguë en mémoire dans l'ordre 'Row-Major' (ligne après ligne).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q56",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Facile",
    "question": "Dans quel fichier d'en-tête standard sont déclarées les fonctions `malloc`, `calloc`, `realloc` et `free` ?",
    "options": [
      "<stdlib.h>",
      "<stdio.h>",
      "<memory.h>",
      "<string.h>"
    ],
    "choices": [
      "<stdlib.h>",
      "<stdio.h>",
      "<memory.h>",
      "<string.h>"
    ],
    "correctAnswer": 0,
    "explanation": "Les fonctions de gestion de mémoire dynamique sont regroupées dans `<stdlib.h>`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q57",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Facile",
    "question": "Dans quelle zone de la mémoire d'un processus sont alloués les blocs créés par `malloc` ?",
    "options": [
      "Le tas (Heap)",
      "La pile (Stack)",
      "Le segment de texte (Code)",
      "Le segment de données initialisées (Data)"
    ],
    "choices": [
      "Le tas (Heap)",
      "La pile (Stack)",
      "Le segment de texte (Code)",
      "Le segment de données initialisées (Data)"
    ],
    "correctAnswer": 0,
    "explanation": "Les variables locales résident sur la pile (Stack), tandis que la mémoire dynamique allouée explicitement réside sur le tas (Heap).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q58",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Moyen",
    "question": "Quelle est la différence essentielle entre `malloc(n * sizeof(int))` et `calloc(n, sizeof(int))` ?",
    "options": [
      "`calloc` initialise tous les octets de la mémoire allouée à zéro, alors que `malloc` laisse la mémoire avec des valeurs indéterminées (déchets)",
      "`malloc` est réservé aux tableaux de caractères",
      "`calloc` alloue la mémoire sur la pile",
      "`calloc` ne peut pas échouer"
    ],
    "choices": [
      "`calloc` initialise tous les octets de la mémoire allouée à zéro, alors que `malloc` laisse la mémoire avec des valeurs indéterminées (déchets)",
      "`malloc` est réservé aux tableaux de caractères",
      "`calloc` alloue la mémoire sur la pile",
      "`calloc` ne peut pas échouer"
    ],
    "correctAnswer": 0,
    "explanation": "`malloc` alloue sans initialiser (valeurs aléatoires). `calloc` prend le nombre d'éléments et la taille unitaire, et initialise tous les bits alloués à 0.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q59",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Facile",
    "question": "Que renvoie la fonction `malloc` lorsqu'il n'y a plus assez de mémoire disponible sur le système ?",
    "options": [
      "Le pointeur NULL",
      "Une exception",
      "La valeur -1",
      "Un pointeur vers l'adresse 0xFFFFFFFF"
    ],
    "choices": [
      "Le pointeur NULL",
      "Une exception",
      "La valeur -1",
      "Un pointeur vers l'adresse 0xFFFFFFFF"
    ],
    "correctAnswer": 0,
    "explanation": "En cas d'échec d'allocation, `malloc` renvoie le pointeur `NULL`. Il est impératif de toujours tester `if (ptr == NULL)` avant d'utiliser le pointeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q60",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Moyen",
    "question": "Que fait la fonction `free(ptr)` ?",
    "options": [
      "Elle restitue le bloc de mémoire alloué au tas pour qu'il puisse être réutilisé, sans modifier la valeur de la variable `ptr`",
      "Elle met automatiquement `ptr` à NULL",
      "Elle efface le contenu de la mémoire en y écrivant des zéros",
      "Elle supprime la variable de la pile"
    ],
    "choices": [
      "Elle restitue le bloc de mémoire alloué au tas pour qu'il puisse être réutilisé, sans modifier la valeur de la variable `ptr`",
      "Elle met automatiquement `ptr` à NULL",
      "Elle efface le contenu de la mémoire en y écrivant des zéros",
      "Elle supprime la variable de la pile"
    ],
    "correctAnswer": 0,
    "explanation": "`free` libère l'espace sur le tas, mais ne modifie pas le pointeur lui-même. C'est au développeur d'assigner `ptr = NULL;` pour éviter les pointeurs pendants.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q61",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Difficile",
    "question": "Que réalise la fonction `realloc(ptr, new_size)` si le bloc mémoire ne peut pas être étendu sur place ?",
    "options": [
      "Elle alloue un nouveau bloc de `new_size` octets ailleurs sur le tas, copie les anciennes données, libère automatiquement l'ancien bloc et renvoie la nouvelle adresse",
      "Elle renvoie immédiatement une erreur sans toucher à la mémoire",
      "Elle tronque les données de l'ancien bloc",
      "Elle déplace la pile du programme"
    ],
    "choices": [
      "Elle alloue un nouveau bloc de `new_size` octets ailleurs sur le tas, copie les anciennes données, libère automatiquement l'ancien bloc et renvoie la nouvelle adresse",
      "Elle renvoie immédiatement une erreur sans toucher à la mémoire",
      "Elle tronque les données de l'ancien bloc",
      "Elle déplace la pile du programme"
    ],
    "correctAnswer": 0,
    "explanation": "`realloc` redimensionne la zone : s'il n'y a pas assez de place contiguë, elle alloue ailleurs, copie les données, libère l'ancienne zone et renvoie le nouveau pointeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q62",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une fuite de mémoire (Memory Leak) en langage C ?",
    "options": [
      "De la mémoire allouée dynamiquement avec malloc/calloc qui n'a jamais été libérée avec `free()` et dont tous les pointeurs d'accès ont été perdus",
      "Un virus qui lit les mots de passe en RAM",
      "Une tentative d'écriture dans un fichier fermé",
      "Un pointeur déréférencé deux fois"
    ],
    "choices": [
      "De la mémoire allouée dynamiquement avec malloc/calloc qui n'a jamais été libérée avec `free()` et dont tous les pointeurs d'accès ont été perdus",
      "Un virus qui lit les mots de passe en RAM",
      "Une tentative d'écriture dans un fichier fermé",
      "Un pointeur déréférencé deux fois"
    ],
    "correctAnswer": 0,
    "explanation": "Une fuite mémoire survient lorsque le programme oublie de libérer la mémoire devenue inutile, saturant progressivement la RAM du système.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q63",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Difficile",
    "question": "Quel comportement produit l'appel `free(ptr)` si `ptr` a déjà été libéré précédemment (Double Free) ?",
    "options": [
      "Un comportement indéfini (Undefined Behavior), pouvant provoquer un plantage ou une faille de sécurité exploitable",
      "Rien, l'opération est silencieusement ignorée",
      "Une réallocation automatique",
      "La mise à zéro du pointeur"
    ],
    "choices": [
      "Un comportement indéfini (Undefined Behavior), pouvant provoquer un plantage ou une faille de sécurité exploitable",
      "Rien, l'opération est silencieusement ignorée",
      "Une réallocation automatique",
      "La mise à zéro du pointeur"
    ],
    "correctAnswer": 0,
    "explanation": "Un 'Double Free' corrompt les structures internes du gestionnaire de tas (heap metadata), causant des crashs ou des vulnérabilités de corruption mémoire.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q64",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Moyen",
    "question": "Quel outil open-source réputé sous Linux permet de détecter automatiquement les fuites de mémoire et les accès illégaux dans un programme C compilé avec `-g` ?",
    "options": [
      "Valgrind (Memcheck)",
      "GDB",
      "Make",
      "GCC"
    ],
    "choices": [
      "Valgrind (Memcheck)",
      "GDB",
      "Make",
      "GCC"
    ],
    "correctAnswer": 0,
    "explanation": "Valgrind (notamment son module Memcheck) est l'outil standard pour tracer les blocs non libérés, les lectures de variables non initialisées et les accès hors-limites.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q65",
    "part": 3,
    "topic": "Allocation dynamique C",
    "difficulty": "Moyen",
    "question": "Quelle est la bonne façon d'allouer dynamiquement un tableau de 10 entiers en C ?",
    "options": [
      "int *tab = malloc(10 * sizeof(int));",
      "int *tab = malloc(10);",
      "int tab = new int[10];",
      "int *tab = allocate(10, int);"
    ],
    "choices": [
      "int *tab = malloc(10 * sizeof(int));",
      "int *tab = malloc(10);",
      "int tab = new int[10];",
      "int *tab = allocate(10, int);"
    ],
    "correctAnswer": 0,
    "explanation": "`malloc(10 * sizeof(int))` garantit la réservation exacte de 10 fois la taille en octets d'un `int`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q66",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Facile",
    "question": "Quel opérateur permet d'accéder à un membre d'une structure lorsque l'on manipule directement une variable de structure (et non un pointeur) ?",
    "options": [
      "L'opérateur point (.)",
      "L'opérateur flèche (->)",
      "L'opérateur deux-points (::)",
      "L'opérateur dièse (#)"
    ],
    "choices": [
      "L'opérateur point (.)",
      "L'opérateur flèche (->)",
      "L'opérateur deux-points (::)",
      "L'opérateur dièse (#)"
    ],
    "correctAnswer": 0,
    "explanation": "On utilise l'opérateur point `s.nom` pour une variable de structure directe, et la flèche `ptr->nom` (équivalent à `(*ptr).nom`) pour un pointeur vers une structure.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q67",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Facile",
    "question": "Si `p` est un pointeur vers une structure `struct Point *p;`, quelle expression est strictement équivalente à `p->x` ?",
    "options": [
      "(*p).x",
      "*p.x",
      "&p->x",
      "p.(x)"
    ],
    "choices": [
      "(*p).x",
      "*p.x",
      "&p->x",
      "p.(x)"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur `->` est un raccourci syntaxique pour le déréférencement suivi de l'accès au membre : `(*p).x`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q68",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Moyen",
    "question": "Quel mot-clé C permet de définir un alias de type pour simplifier l'écriture sans avoir à répéter `struct Nom` à chaque déclaration ?",
    "options": [
      "typedef",
      "alias",
      "define",
      "using"
    ],
    "choices": [
      "typedef",
      "alias",
      "define",
      "using"
    ],
    "correctAnswer": 0,
    "explanation": "`typedef struct { int x; int y; } Point;` permet ensuite d'utiliser directement `Point p;` au lieu de `struct Point p;`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q69",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Difficile",
    "question": "Quelle est la différence fondamentale d'allocation mémoire entre une `struct` et une `union` en langage C ?",
    "options": [
      "Dans une `struct`, chaque membre possède son propre emplacement mémoire distinct, alors que dans une `union`, tous les membres partagent le même emplacement mémoire (taille égale au plus grand membre)",
      "Une `union` est allouée sur la pile, une `struct` sur le tas",
      "Une `union` ne peut contenir que des pointeurs",
      "Une `struct` ne peut pas contenir de fonctions"
    ],
    "choices": [
      "Dans une `struct`, chaque membre possède son propre emplacement mémoire distinct, alors que dans une `union`, tous les membres partagent le même emplacement mémoire (taille égale au plus grand membre)",
      "Une `union` est allouée sur la pile, une `struct` sur le tas",
      "Une `union` ne peut contenir que des pointeurs",
      "Une `struct` ne peut pas contenir de fonctions"
    ],
    "correctAnswer": 0,
    "explanation": "Dans une union, tous les champs se superposent à la même adresse mémoire de départ. Sa taille correspond à la taille de son plus grand membre.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q70",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Difficile",
    "question": "Qu'appelle-t-on le 'padding' (remplissage d'alignement) dans une structure en C ?",
    "options": [
      "Des octets inutilisés insérés par le compilateur entre les membres d'une structure pour respecter les contraintes d'alignement matériel du processeur",
      "Une méthode de chiffrement des données",
      "Un espace réservé pour le pointeur NULL",
      "L'initialisation des variables à zéro"
    ],
    "choices": [
      "Des octets inutilisés insérés par le compilateur entre les membres d'une structure pour respecter les contraintes d'alignement matériel du processeur",
      "Une méthode de chiffrement des données",
      "Un espace réservé pour le pointeur NULL",
      "L'initialisation des variables à zéro"
    ],
    "correctAnswer": 0,
    "explanation": "Pour accélérer les accès bus processeur (ex: accès aux entiers 32/64 bits alignés sur des adresses multiples de 4 ou 8), le compilateur insère des octets 'trous' appelés padding.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q71",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Facile",
    "question": "Par défaut en langage C, quelle valeur entière est attribuée au premier élément d'une énumération `enum Couleur { ROUGE, VERT, BLEU };` ?",
    "options": [
      "0",
      "1",
      "-1",
      "Indéfinie"
    ],
    "choices": [
      "0",
      "1",
      "-1",
      "Indéfinie"
    ],
    "correctAnswer": 0,
    "explanation": "Par défaut, les énumérations commencent à 0 pour le premier identifiant et s'incrémentent de 1 pour chaque élément suivant (`ROUGE = 0`, `VERT = 1`, `BLEU = 2`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q72",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Moyen",
    "question": "Comment définit-on une structure auto-référentielle nécessaire pour implémenter une liste chaînée en C ?",
    "options": [
      "En incluant un pointeur vers une structure du même type à l'intérieur de sa définition : `struct Node { int val; struct Node *next; };`",
      "En incluant directement une instance complète de la structure à l'intérieur d'elle-même",
      "Avec le mot-clé `recursive struct`",
      "Les structures récursives sont interdites en C"
    ],
    "choices": [
      "En incluant un pointeur vers une structure du même type à l'intérieur de sa définition : `struct Node { int val; struct Node *next; };`",
      "En incluant directement une instance complète de la structure à l'intérieur d'elle-même",
      "Avec le mot-clé `recursive struct`",
      "Les structures récursives sont interdites en C"
    ],
    "correctAnswer": 0,
    "explanation": "Une structure ne peut pas contenir une instance d'elle-même (taille infinie), mais elle peut parfaitement contenir un pointeur vers une structure de son propre type (`struct Node *next`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q73",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Difficile",
    "question": "Quelle directive spécifique à GCC permet de supprimer les octets de padding et de forcer une structure à être contiguë au détriment des performances d'accès matériel ?",
    "options": [
      "__attribute__((packed))",
      "__attribute__((aligned(0)))",
      "#pragma nopadding",
      "#define COMPACT"
    ],
    "choices": [
      "__attribute__((packed))",
      "__attribute__((aligned(0)))",
      "#pragma nopadding",
      "#define COMPACT"
    ],
    "correctAnswer": 0,
    "explanation": "L'attribut `__attribute__((packed))` ordonne au compilateur de ne pas insérer d'octets d'alignement (couramment utilisé pour mapper directement des paquets réseau binaires).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q74",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un champ de bits (Bit-field) dans une structure C ?",
    "options": [
      "Un membre dont la largeur en nombre précis de bits est explicitement définie (ex: `unsigned int flags : 3;`)",
      "Un champ qui ne peut contenir que 0 ou 1",
      "Un pointeur vers un booléen",
      "Une variable stockée dans le processeur"
    ],
    "choices": [
      "Un membre dont la largeur en nombre précis de bits est explicitement définie (ex: `unsigned int flags : 3;`)",
      "Un champ qui ne peut contenir que 0 ou 1",
      "Un pointeur vers un booléen",
      "Une variable stockée dans le processeur"
    ],
    "correctAnswer": 0,
    "explanation": "Les champs de bits permettent de compacter des variables sur un nombre restreint de bits (ex: 3 bits pour stocker des valeurs de 0 à 7).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q75",
    "part": 3,
    "topic": "Structures & Types C",
    "difficulty": "Facile",
    "question": "Peut-on affecter directement une structure complète à une autre structure de même type avec l'opérateur `=` en C ?",
    "options": [
      "Oui, les valeurs de tous les membres sont copiées octet par octet (copie superficielle / shallow copy)",
      "Non, il faut obligatoirement copier chaque membre manuellement",
      "Uniquement si elle ne contient pas de nombres entiers",
      "Uniquement via la fonction memcpy"
    ],
    "choices": [
      "Oui, les valeurs de tous les membres sont copiées octet par octet (copie superficielle / shallow copy)",
      "Non, il faut obligatoirement copier chaque membre manuellement",
      "Uniquement si elle ne contient pas de nombres entiers",
      "Uniquement via la fonction memcpy"
    ],
    "correctAnswer": 0,
    "explanation": "L'affectation de structures `s1 = s2;` est supportée nativement en C. Elle copie l'intégralité des champs de la structure.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q76",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Facile",
    "question": "Quel type de structure opaque défini dans `<stdio.h>` représente un flux de fichier ouvert en langage C ?",
    "options": [
      "FILE",
      "FD",
      "STREAM",
      "FSTREAM"
    ],
    "choices": [
      "FILE",
      "FD",
      "STREAM",
      "FSTREAM"
    ],
    "correctAnswer": 0,
    "explanation": "Le type `FILE` (utilisé sous forme de pointeur `FILE *fp`) encapsule l'état du fichier, le buffer de lecture/écriture et la position courante.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q77",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Facile",
    "question": "Quel mode d'ouverture doit être passé à `fopen(\"data.txt\", mode)` pour ouvrir un fichier texte en écriture avec écrasement du contenu précédent ?",
    "options": [
      "\"w\"",
      "\"r\"",
      "\"a\"",
      "\"w+\""
    ],
    "choices": [
      "\"w\"",
      "\"r\"",
      "\"a\"",
      "\"w+\""
    ],
    "correctAnswer": 0,
    "explanation": "Le mode `\"w\"` ouvre en écriture seule et tronque le fichier à 0 octet s'il existe (ou le crée s'il n'existe pas). `\"a\"` ouvre en mode ajout (append).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q78",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Moyen",
    "question": "Que renvoie la fonction `fopen` si le fichier demandé ne peut pas être ouvert (ex: fichier inexistant en mode lecture ou permissions insuffisantes) ?",
    "options": [
      "NULL",
      "-1",
      "EOF",
      "0"
    ],
    "choices": [
      "NULL",
      "-1",
      "EOF",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "`fopen` renvoie le pointeur `NULL` en cas d'erreur. Il est obligatoire de tester `if (fp == NULL)`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q79",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Facile",
    "question": "Quelle fonction permet de fermer un flux de fichier ouvert et de vider ses tampons d'écriture sur disque ?",
    "options": [
      "fclose()",
      "close()",
      "file_close()",
      "fflush()"
    ],
    "choices": [
      "fclose()",
      "close()",
      "file_close()",
      "fflush()"
    ],
    "correctAnswer": 0,
    "explanation": "`fclose(fp)` vide les buffers et ferme le descripteur de fichier.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q80",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Moyen",
    "question": "Quelle constante spéciale définie dans `<stdio.h>` est renvoyée par `fgetc` ou `getchar` pour signaler la fin d'un fichier (End-of-File) ou une erreur de lecture ?",
    "options": [
      "EOF (généralement -1)",
      "NULL",
      "0",
      "'\\0'"
    ],
    "choices": [
      "EOF (généralement -1)",
      "NULL",
      "0",
      "'\\0'"
    ],
    "correctAnswer": 0,
    "explanation": "La constante `EOF` (valeur négative, traditionnellement -1) indique la fin de fichier. C'est pourquoi la variable qui reçoit le résultat de `fgetc()` doit être de type `int` et non `char`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q81",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Difficile",
    "question": "Quelles fonctions standard permettent respectivement de lire et d'écrire des blocs binaires bruts de données dans un fichier ?",
    "options": [
      "fread() et fwrite()",
      "read() et write()",
      "fscanf() et fprintf()",
      "fgets() et fputs()"
    ],
    "choices": [
      "fread() et fwrite()",
      "read() et write()",
      "fscanf() et fprintf()",
      "fgets() et fputs()"
    ],
    "correctAnswer": 0,
    "explanation": "`fread` et `fwrite` opèrent sur des buffers binaires en spécifiant la taille de l'élément et le nombre d'éléments (`fread(buf, size, count, fp)`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q82",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Moyen",
    "question": "Quelle fonction permet de repositionner le curseur de lecture/écriture à un endroit précis dans un fichier ouvert ?",
    "options": [
      "fseek()",
      "rewind()",
      "ftell()",
      "fmove()"
    ],
    "choices": [
      "fseek()",
      "rewind()",
      "ftell()",
      "fmove()"
    ],
    "correctAnswer": 0,
    "explanation": "`fseek(fp, offset, origine)` déplace la tête de lecture à partir de `SEEK_SET` (début), `SEEK_CUR` (position courante) ou `SEEK_END` (fin).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q83",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Moyen",
    "question": "Quelle fonction renvoie la position courante en octets du curseur de lecture/écriture dans un fichier ?",
    "options": [
      "ftell()",
      "fpos()",
      "fseek()",
      "fgetpos()"
    ],
    "choices": [
      "ftell()",
      "fpos()",
      "fseek()",
      "fgetpos()"
    ],
    "correctAnswer": 0,
    "explanation": "`ftell(fp)` renvoie la position courante en octets depuis le début du fichier (très utile pour calculer la taille d'un fichier avec `fseek(fp, 0, SEEK_END); long size = ftell(fp);`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q84",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Facile",
    "question": "Quels sont les trois flux standard prédéfinis automatiquement ouverts au lancement de tout programme C ?",
    "options": [
      "stdin (entrée standard), stdout (sortie standard), stderr (sortie d'erreur standard)",
      "input, output, error",
      "fd0, fd1, fd2",
      "cin, cout, cerr"
    ],
    "choices": [
      "stdin (entrée standard), stdout (sortie standard), stderr (sortie d'erreur standard)",
      "input, output, error",
      "fd0, fd1, fd2",
      "cin, cout, cerr"
    ],
    "correctAnswer": 0,
    "explanation": "`stdin` (clavier), `stdout` (écran/tube) et `stderr` (écran non tamponné) sont les trois flux standard de `<stdio.h>`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q85",
    "part": 3,
    "topic": "Fichiers en C",
    "difficulty": "Difficile",
    "question": "Pourquoi `fgets` est-elle recommandée à la place de la fonction dépréciée `gets` pour lire une ligne de texte saisie par l'utilisateur ?",
    "options": [
      "Parce que `fgets` prend en paramètre la taille maximale du tampon, empêchant tout débordement de mémoire (Buffer Overflow)",
      "Parce que `gets` ne supporte pas les espaces",
      "Parce que `fgets` convertit le texte en majuscules",
      "Parce que `gets` est plus lente"
    ],
    "choices": [
      "Parce que `fgets` prend en paramètre la taille maximale du tampon, empêchant tout débordement de mémoire (Buffer Overflow)",
      "Parce que `gets` ne supporte pas les espaces",
      "Parce que `fgets` convertit le texte en majuscules",
      "Parce que `gets` est plus lente"
    ],
    "correctAnswer": 0,
    "explanation": "`gets` a été complètement retirée de la norme C11 car elle ne prenait aucun contrôle de limite de taille de buffer, source d'innombrables failles de sécurité.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q86",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Facile",
    "question": "Par quel symbole commencent obligatoirement toutes les directives du préprocesseur en langage C ?",
    "options": [
      "Le dièse (#)",
      "Le dollar ($)",
      "L'arobase (@)",
      "La double barre (//)"
    ],
    "choices": [
      "Le dièse (#)",
      "Le dollar ($)",
      "L'arobase (@)",
      "La double barre (//)"
    ],
    "correctAnswer": 0,
    "explanation": "Toutes les directives préprocesseur (`#define`, `#include`, `#ifdef`, etc.) commencent par un caractère `#` en première colonne.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q87",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Facile",
    "question": "Quelle est la différence entre `#include <fichier.h>` et `#include \"fichier.h\"` ?",
    "options": [
      "`<...>` recherche en priorité dans les répertoires système standards de la bibliothèque, alors que `\"...\"` recherche en priorité dans le répertoire local du projet",
      "`<...>` est réservé au C++, `\"...\"` au C",
      "`\"...\"` compile le fichier en binaire",
      "Il n'y a aucune différence pour le compilateur"
    ],
    "choices": [
      "`<...>` recherche en priorité dans les répertoires système standards de la bibliothèque, alors que `\"...\"` recherche en priorité dans le répertoire local du projet",
      "`<...>` est réservé au C++, `\"...\"` au C",
      "`\"...\"` compile le fichier en binaire",
      "Il n'y a aucune différence pour le compilateur"
    ],
    "correctAnswer": 0,
    "explanation": "Les guillemets indiquent de chercher d'abord dans le répertoire du fichier source courant, tandis que les chevrons ciblent les dossiers d'en-tête du compilateur/système.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q88",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Moyen",
    "question": "Quel mécanisme standard empêche un fichier d'en-tête (.h) d'être inclus plusieurs fois dans la même unité de compilation (Header Guard) ?",
    "options": [
      "#ifndef MON_FICHIER_H / #define MON_FICHIER_H / #endif",
      "#pragma once uniquement",
      "#include_once",
      "#prevent_duplicate"
    ],
    "choices": [
      "#ifndef MON_FICHIER_H / #define MON_FICHIER_H / #endif",
      "#pragma once uniquement",
      "#include_once",
      "#prevent_duplicate"
    ],
    "correctAnswer": 0,
    "explanation": "Les gardiens d'inclusion (#ifndef / #define / #endif) évitent les erreurs de redéfinition de types et de structures lors d'inclusions imbriquées.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q89",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Difficile",
    "question": "Dans une macro comme `#define CARRE(x) x * x`, quel piège se produit lors de l'appel `CARRE(1 + 2)` ?",
    "options": [
      "L'expression est remplacée textuellement par `1 + 2 * 1 + 2`, ce qui donne 5 au lieu de 9 à cause des priorités d'opérateurs",
      "Le programme plante à la compilation",
      "La macro renvoie 9 comme prévu",
      "La macro renvoie 0"
    ],
    "choices": [
      "L'expression est remplacée textuellement par `1 + 2 * 1 + 2`, ce qui donne 5 au lieu de 9 à cause des priorités d'opérateurs",
      "Le programme plante à la compilation",
      "La macro renvoie 9 comme prévu",
      "La macro renvoie 0"
    ],
    "correctAnswer": 0,
    "explanation": "Le préprocesseur effectue une simple substitution textuelle. Pour éviter ce problème, il faut toujours parenthéser chaque paramètre et l'expression globale : `#define CARRE(x) ((x) * (x))`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q90",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Difficile",
    "question": "Que fait l'opérateur `#` (opérateur de stringification) dans une macro du préprocesseur C ?",
    "options": [
      "Il transforme l'argument passé à la macro en une chaîne de caractères littérale entre guillemets",
      "Il concatène deux identifiants",
      "Il calcule la longueur de la chaîne",
      "Il commente la ligne"
    ],
    "choices": [
      "Il transforme l'argument passé à la macro en une chaîne de caractères littérale entre guillemets",
      "Il concatène deux identifiants",
      "Il calcule la longueur de la chaîne",
      "Il commente la ligne"
    ],
    "correctAnswer": 0,
    "explanation": "Dans `#define STR(x) #x`, l'appel `STR(bonjour)` produit la chaîne littérale `\"bonjour\"`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q91",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Difficile",
    "question": "Que fait l'opérateur `##` (token pasting) dans une macro du préprocesseur C ?",
    "options": [
      "Il concatène deux jetons lexicaux (tokens) pour n'en former qu'un seul",
      "Il compare deux chaînes",
      "Il crée une macro conditionnelle",
      "Il insère un saut de ligne"
    ],
    "choices": [
      "Il concatène deux jetons lexicaux (tokens) pour n'en former qu'un seul",
      "Il compare deux chaînes",
      "Il crée une macro conditionnelle",
      "Il insère un saut de ligne"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur `##` fusionne deux tokens (ex: `#define GLUE(a, b) a ## b`, `GLUE(var, 1)` produit le jeton `var1`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q92",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Facile",
    "question": "Quelle macro prédéfinie du compilateur fournit le numéro de la ligne courante dans le fichier source ?",
    "options": [
      "__LINE__",
      "__FILE__",
      "__DATE__",
      "__TIME__"
    ],
    "choices": [
      "__LINE__",
      "__FILE__",
      "__DATE__",
      "__TIME__"
    ],
    "correctAnswer": 0,
    "explanation": "`__LINE__` s'évalue en un entier représentant le numéro de ligne dans le fichier source courant (très utilisé dans les logs d'erreur et `assert`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q93",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Facile",
    "question": "Quelle macro prédéfinie donne le nom du fichier source en cours de compilation sous forme de chaîne de caractères ?",
    "options": [
      "__FILE__",
      "__PATH__",
      "__SOURCE__",
      "__NAME__"
    ],
    "choices": [
      "__FILE__",
      "__PATH__",
      "__SOURCE__",
      "__NAME__"
    ],
    "correctAnswer": 0,
    "explanation": "`__FILE__` est une chaîne contenant le nom ou chemin du fichier source.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q94",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Moyen",
    "question": "À quelle étape du cycle de production d'un exécutable intervient le préprocesseur ?",
    "options": [
      "Avant la compilation proprement dite (traduction du code C en assembleur)",
      "Après l'édition de liens (linker)",
      "Pendant l'exécution du binaire",
      "Après l'assemblage"
    ],
    "choices": [
      "Avant la compilation proprement dite (traduction du code C en assembleur)",
      "Après l'édition de liens (linker)",
      "Pendant l'exécution du binaire",
      "Après l'assemblage"
    ],
    "correctAnswer": 0,
    "explanation": "Le cycle de compilation C s'enchaîne ainsi : 1) Préprocesseur (`cpp`) -> 2) Compilateur (`cc1`) -> 3) Assembleur (`as`) -> 4) Éditeur de liens (`ld`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q95",
    "part": 3,
    "topic": "Préprocesseur C",
    "difficulty": "Moyen",
    "question": "Quelle directive préprocesseur permet de supprimer la définition d'une macro précédemment définie ?",
    "options": [
      "#undef",
      "#delete",
      "#remove",
      "#clear"
    ],
    "choices": [
      "#undef",
      "#delete",
      "#remove",
      "#clear"
    ],
    "correctAnswer": 0,
    "explanation": "`#undef NOM_MACRO` annule la définition d'une macro pour le reste de l'unité de compilation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q96",
    "part": 3,
    "topic": "Portée & Compilation C",
    "difficulty": "Moyen",
    "question": "Quel est l'effet du mot-clé `static` lorsqu'il est appliqué à une variable locale à l'intérieur d'une fonction ?",
    "options": [
      "La variable conserve sa valeur entre les différents appels successifs de la fonction et sa durée de vie s'étend sur toute l'exécution du programme",
      "La variable devient une constante en lecture seule",
      "La variable est partagée avec d'autres processus",
      "La variable est allouée sur la pile"
    ],
    "choices": [
      "La variable conserve sa valeur entre les différents appels successifs de la fonction et sa durée de vie s'étend sur toute l'exécution du programme",
      "La variable devient une constante en lecture seule",
      "La variable est partagée avec d'autres processus",
      "La variable est allouée sur la pile"
    ],
    "correctAnswer": 0,
    "explanation": "Une variable locale `static` est initialisée une seule fois et réside dans le segment de données permanent (durée de vie du programme), tout en restant accessible uniquement dans la fonction.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q97",
    "part": 3,
    "topic": "Portée & Compilation C",
    "difficulty": "Difficile",
    "question": "Quel est l'effet du mot-clé `static` lorsqu'il est appliqué à une variable globale ou à une fonction au niveau du fichier source ?",
    "options": [
      "Il limite la visibilité (portée de liaison) de cette variable ou fonction au seul fichier source où elle est définie (liaison interne / internal linkage)",
      "Il empêche toute modification de la fonction",
      "Il accélère son exécution par le CPU",
      "Il la rend visible dans tous les fichiers du projet"
    ],
    "choices": [
      "Il limite la visibilité (portée de liaison) de cette variable ou fonction au seul fichier source où elle est définie (liaison interne / internal linkage)",
      "Il empêche toute modification de la fonction",
      "Il accélère son exécution par le CPU",
      "Il la rend visible dans tous les fichiers du projet"
    ],
    "correctAnswer": 0,
    "explanation": "Au niveau global, `static` rend le symbole privé à l'unité de compilation (fichier `.c`), évitant les collisions de noms lors de l'édition de liens.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q98",
    "part": 3,
    "topic": "Portée & Compilation C",
    "difficulty": "Moyen",
    "question": "Quel mot-clé C permet de déclarer une variable globale qui est définie dans un autre fichier source du projet ?",
    "options": [
      "extern",
      "import",
      "public",
      "global"
    ],
    "choices": [
      "extern",
      "import",
      "public",
      "global"
    ],
    "correctAnswer": 0,
    "explanation": "`extern int compteur;` indique au compilateur que la variable existe et qu'elle est allouée dans un autre module du projet (résolue par le linker).",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q99",
    "part": 3,
    "topic": "Portée & Compilation C",
    "difficulty": "Difficile",
    "question": "À quoi sert le qualificateur `volatile` en langage C ?",
    "options": [
      "Il avertit le compilateur que la variable peut être modifiée à tout moment par un événement extérieur au flux du programme (ex: interruption matérielle, registre d'E/S, thread concurrent) et interdit d'optimiser ses lectures dans les registres",
      "Il stocke la variable dans la mémoire cache du CPU",
      "Il rend la variable détruite à la fin du bloc",
      "Il active le ramasse-miettes"
    ],
    "choices": [
      "Il avertit le compilateur que la variable peut être modifiée à tout moment par un événement extérieur au flux du programme (ex: interruption matérielle, registre d'E/S, thread concurrent) et interdit d'optimiser ses lectures dans les registres",
      "Il stocke la variable dans la mémoire cache du CPU",
      "Il rend la variable détruite à la fin du bloc",
      "Il active le ramasse-miettes"
    ],
    "correctAnswer": 0,
    "explanation": "`volatile` force le compilateur à relire systématiquement la valeur en mémoire vive à chaque instruction sans la conserver en cache dans un registre processeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p3-q100",
    "part": 3,
    "topic": "Portée & Compilation C",
    "difficulty": "Facile",
    "question": "Quelle option de commande de GCC active l'ensemble des avertissements recommandés lors de la compilation ?",
    "options": [
      "-Wall -Wextra",
      "-O3",
      "-g",
      "-c"
    ],
    "choices": [
      "-Wall -Wextra",
      "-O3",
      "-g",
      "-c"
    ],
    "correctAnswer": 0,
    "explanation": "`-Wall` active tous les avertissements courants, souvent complété par `-Wextra` et `-Werror` pour forcer un code irréprochable.",
    "source": "Conforme au programme"
  }
];
