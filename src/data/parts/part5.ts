import { Question } from '../../types';

export const PART_5_QUESTIONS: Question[] = [
  {
    "id": "p5-q1",
    "part": 5,
    "topic": "Fondements de l'algorithmique",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un algorithme au sens informatique et mathématique formel ?",
    "options": [
      "Une suite finie, univoque et ordonnée d'instructions ou d'opérations permettant de résoudre un problème ou d'obtenir un résultat déterminé",
      "Un organigramme purement graphique sans code",
      "Un pseudo-code informel ne pouvant pas être implémenté",
      "Une décision aléatoire prise par un processeur"
    ],
    "choices": [
      "Une suite finie, univoque et ordonnée d'instructions ou d'opérations permettant de résoudre un problème ou d'obtenir un résultat déterminé",
      "Un organigramme purement graphique sans code",
      "Un pseudo-code informel ne pouvant pas être implémenté",
      "Une décision aléatoire prise par un processeur"
    ],
    "correctAnswer": 0,
    "explanation": "Un algorithme est une séquence finie d'actions rigoureuses et non ambiguës transformant des données en entrée en un résultat en sortie en un nombre fini d'étapes. (Source : Concours ENSET Mohammedia 2022, Q1).",
    "source": "Ancien concours"
  },
  {
    "id": "p5-q2",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Moyen",
    "question": "Considérant la fonction récursive naïve suivante calculant la suite de Fibonacci :\nint fibo(int n) {\n  if (n <= 1) return n;\n  return fibo(n-1) + fibo(n-2);\n}\nQuelle est sa complexité temporelle asymptotique ?",
    "options": [
      "Exponentielle (O(2^n))",
      "Linéaire (O(n))",
      "Logarithmique (O(log n))",
      "Quasi-linéaire (O(n log n))"
    ],
    "choices": [
      "Exponentielle (O(2^n))",
      "Linéaire (O(n))",
      "Logarithmique (O(log n))",
      "Quasi-linéaire (O(n log n))"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque appel non terminal génère deux sous-appels récursifs, formant un arbre binaire d'appels de hauteur n avec de multiples recalculs identiques, donnant une complexité en O(Phi^n) ≈ O(1.618^n) qui est exponentielle. (Source : Concours ENSET Mohammedia 2022, Q9).",
    "source": "Ancien concours"
  },
  {
    "id": "p5-q3",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Facile",
    "question": "Lequel des algorithmes de tri suivants applique strictement le paradigme « diviser pour régner » (Divide and Conquer) ?",
    "options": [
      "Tri par fusion (Merge Sort)",
      "Tri à bulles (Bubble Sort)",
      "Tri par sélection (Selection Sort)",
      "Tri par insertion (Insertion Sort)"
    ],
    "choices": [
      "Tri par fusion (Merge Sort)",
      "Tri à bulles (Bubble Sort)",
      "Tri par sélection (Selection Sort)",
      "Tri par insertion (Insertion Sort)"
    ],
    "correctAnswer": 0,
    "explanation": "Le tri par fusion divise le tableau récursivement en deux moitiés égales (Diviser), trie chaque sous-tableau récursivement (Régner), puis fusionne les deux sous-listes triées en temps linéaire (Combiner). (Source : Concours ENSET Mohammedia 2022, Q11).",
    "source": "Ancien concours"
  },
  {
    "id": "p5-q4",
    "part": 5,
    "topic": "Piles, Files et Listes",
    "difficulty": "Difficile",
    "question": "Considérant une file FIFO avec enfiler() et défiler(). On enfile d'abord 0 puis 1. Pour chaque étape d'une boucle de 0 à n-1, on retire deux éléments a et b, puis on enfile b et (a+b) en affichant la valeur de a. Quel est le résultat affiché suite à l'appel de cette fonction pour n=7 ?",
    "options": [
      "0 1 1 2 3 5 8",
      "0 1 2 3 5 6 7",
      "0 1 2 3 4 5 6",
      "0 1 1 2 2 3 3"
    ],
    "choices": [
      "0 1 1 2 3 5 8",
      "0 1 2 3 5 6 7",
      "0 1 2 3 4 5 6",
      "0 1 1 2 2 3 3"
    ],
    "correctAnswer": 0,
    "explanation": "Le mécanisme génère et consomme exactement les termes de la suite de Fibonacci : F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8. Les valeurs successives extraites et affichées pour n=7 sont bien 0, 1, 1, 2, 3, 5, 8. (Source : Concours ENSET Mohammedia 2022, Q25).",
    "source": "Ancien concours"
  },
  {
    "id": "p5-q5",
    "part": 5,
    "topic": "Arbres et structures hiérarchiques",
    "difficulty": "Moyen",
    "question": "Dans le parcours d'un arbre binaire, si la procédure affiche d'abord le sous-arbre gauche récursivement, puis le sous-arbre droit récursivement, et termine par la racine T->data, de quel type de parcours s'agit-il ?",
    "options": [
      "Parcours postfixe (ou post-ordre)",
      "Parcours préfixe (ou pré-ordre)",
      "Parcours infixe (ou en ordre symétrique)",
      "Parcours en largeur (BFS)"
    ],
    "choices": [
      "Parcours postfixe (ou post-ordre)",
      "Parcours préfixe (ou pré-ordre)",
      "Parcours infixe (ou en ordre symétrique)",
      "Parcours en largeur (BFS)"
    ],
    "correctAnswer": 0,
    "explanation": "Un parcours où la racine est traitée après ses deux sous-arbres (Gauche, Droite, Racine) est un parcours postfixe / post-ordre. (Source : Concours ENSET Mohammedia 2022, Q29).",
    "source": "Ancien concours"
  },
  {
    "id": "p5-q6",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Facile",
    "question": "Que représente la notation Grand O (Big-O, $O(g(n))$) en analyse asymptotique d'algorithmes ?",
    "options": [
      "Une borne supérieure asymptotique sur le temps d'exécution (pire des cas ou majorant du comportement)",
      "Une borne inférieure exacte",
      "Le temps exact en microsecondes",
      "La quantité exacte d'octets de mémoire consommée"
    ],
    "choices": [
      "Une borne supérieure asymptotique sur le temps d'exécution (pire des cas ou majorant du comportement)",
      "Une borne inférieure exacte",
      "Le temps exact en microsecondes",
      "La quantité exacte d'octets de mémoire consommée"
    ],
    "correctAnswer": 0,
    "explanation": "$f(n) = O(g(n))$ signifie qu'il existe des constantes $c > 0$ et $n_0$ telles que $f(n) \\le c \\cdot g(n)$ pour tout $n \\ge n_0$. Cela formalise la borne supérieure de croissance.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q7",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Facile",
    "question": "Parmi les classes de complexité suivantes, laquelle croît le plus lentement (la plus rapide et efficace lorsque $n \\to \\infty$) ?",
    "options": [
      "$O(\\log n)$",
      "$O(n)$",
      "$O(n \\log n)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(\\log n)$",
      "$O(n)$",
      "$O(n \\log n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "L'ordre de croissance est : $O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)$. La complexité logarithmique $O(\\log n)$ est extrêmement performante.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q8",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Moyen",
    "question": "Que représente la notation $\\Theta(g(n))$ (Grand Theta) ?",
    "options": [
      "Un encadrement asymptotique strict à la fois supérieur et inférieur (borne serrée ou tight bound)",
      "Une borne inférieure uniquement",
      "Une probabilité d'échec de l'algorithme",
      "Le meilleur des cas uniquement"
    ],
    "choices": [
      "Un encadrement asymptotique strict à la fois supérieur et inférieur (borne serrée ou tight bound)",
      "Une borne inférieure uniquement",
      "Une probabilité d'échec de l'algorithme",
      "Le meilleur des cas uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "$f(n) = \\Theta(g(n))$ signifie que $f(n)$ est à la fois $O(g(n))$ et $\\Omega(g(n))$ : la fonction croît exactement au même ordre de grandeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q9",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité en temps de deux boucles imbriquées itérant chacune de 0 à $n$ ?",
    "options": [
      "$O(n^2)$ (quadratique)",
      "$O(2n)$",
      "$O(n \\log n)$",
      "$O(n^3)$"
    ],
    "choices": [
      "$O(n^2)$ (quadratique)",
      "$O(2n)$",
      "$O(n \\log n)$",
      "$O(n^3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Pour chaque étape de la boucle externe ($n$ étapes), la boucle interne effectue $n$ opérations, soit un total de $n \\times n = n^2$ itérations.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q10",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Difficile",
    "question": "Selon le Master Theorem (Théorème Maître), quelle est la complexité de la relation de récurrence $T(n) = 2T(n/2) + O(n)$ (qui caractérise le tri fusion MergeSort) ?",
    "options": [
      "$\\Theta(n \\log n)$",
      "$\\Theta(n)$",
      "$\\Theta(n^2)$",
      "$\\Theta(\\log n)$"
    ],
    "choices": [
      "$\\Theta(n \\log n)$",
      "$\\Theta(n)$",
      "$\\Theta(n^2)$",
      "$\\Theta(\\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "Ici $a=2, b=2, d=1$. Puisque $\\log_b(a) = \\log_2(2) = 1 = d$, le cas 2 du Master Theorem s'applique, donnant $T(n) = \\Theta(n^1 \\log n) = \\Theta(n \\log n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q11",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que la complexité amortie (Amortized Complexity) d'une opération ?",
    "options": [
      "La moyenne du coût d'une opération garantie sur une longue séquence d'opérations successives dans le pire scénario possible",
      "Le coût moyen calculé sur des entrées aléatoires",
      "Le temps d'exécution sur machine réelle",
      "La quantité de RAM perdue lors de l'allocation"
    ],
    "choices": [
      "La moyenne du coût d'une opération garantie sur une longue séquence d'opérations successives dans le pire scénario possible",
      "Le coût moyen calculé sur des entrées aléatoires",
      "Le temps d'exécution sur machine réelle",
      "La quantité de RAM perdue lors de l'allocation"
    ],
    "correctAnswer": 0,
    "explanation": "L'analyse amortie (ex: méthode de la banque, des potentiels) garantit le coût moyen par opération lors d'une rafale de $k$ opérations (ex: ajout en fin d'un tableau dynamique en $O(1)$ amorti).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q12",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Difficile",
    "question": "Quelle est la borne inférieure théorique (en nombre de comparaisons) pour tout algorithme de tri par comparaisons dans le pire des cas ?",
    "options": [
      "$\\Omega(n \\log n)$",
      "$\\Omega(n)$",
      "$\\Omega(n^2)$",
      "$\\Omega(\\log n)$"
    ],
    "choices": [
      "$\\Omega(n \\log n)$",
      "$\\Omega(n)$",
      "$\\Omega(n^2)$",
      "$\\Omega(\\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "L'arbre de décision d'un tri par comparaisons possède $n!$ feuilles. Sa hauteur minimale est $\\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$ comparaisons.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q13",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Facile",
    "question": "Que mesure la complexité spatiale (Space Complexity) d'un algorithme ?",
    "options": [
      "La quantité maximale de mémoire vive consommée par l'algorithme en fonction de la taille de l'entrée $n$",
      "La taille du code source sur le disque",
      "La vitesse du bus PCI",
      "Le nombre de variables déclarées dans le programme"
    ],
    "choices": [
      "La quantité maximale de mémoire vive consommée par l'algorithme en fonction de la taille de l'entrée $n$",
      "La taille du code source sur le disque",
      "La vitesse du bus PCI",
      "Le nombre de variables déclarées dans le programme"
    ],
    "correctAnswer": 0,
    "explanation": "La complexité spatiale évalue l'espace mémoire auxiliaire requis pour exécuter l'algorithme au fur et à mesure que $n$ grandit.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q14",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité temporelle d'une recherche dichotomique sur un tableau trié de taille $n$ ?",
    "options": [
      "$O(\\log n)$",
      "$O(n)$",
      "$O(1)$",
      "$O(n \\log n)$"
    ],
    "choices": [
      "$O(\\log n)$",
      "$O(n)$",
      "$O(1)$",
      "$O(n \\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "L'espace de recherche est divisé par 2 à chaque itération ($n, n/2, n/4, \\dots, 1$), soit $\\log_2(n)$ étapes maximales.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q15",
    "part": 5,
    "topic": "Complexité algorithmique",
    "difficulty": "Difficile",
    "question": "Quelle est la complexité de l'algorithme récursif naïf calculant le n-ième terme de Fibonacci $F(n) = F(n-1) + F(n-2)$ ?",
    "options": [
      "$O(2^n)$ (exponentielle)",
      "$O(n)$",
      "$O(n^2)$",
      "$O(n \\log n)$"
    ],
    "choices": [
      "$O(2^n)$ (exponentielle)",
      "$O(n)$",
      "$O(n^2)$",
      "$O(n \\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "L'arbre d'appels récursifs bifurque en 2 à chaque niveau jusqu'à une profondeur $n$, générant un nombre d'opérations proportionnel au nombre d'or $\\Phi^n \\approx O(1.618^n) = O(2^n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q16",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Facile",
    "question": "Quelle est la complexité d'accès à un élément par son index dans un tableau à mémoire contiguë (ex: `tab[i]`) ?",
    "options": [
      "$O(1)$ (temps constant)",
      "$O(n)$",
      "$O(\\log n)$",
      "$O(i)$"
    ],
    "choices": [
      "$O(1)$ (temps constant)",
      "$O(n)$",
      "$O(\\log n)$",
      "$O(i)$"
    ],
    "correctAnswer": 0,
    "explanation": "Grâce à la contiguïté mémoire, l'adresse de l'élément se calcule instantanément par la formule arithmétique : $adresse = base + i \\times sizeof(element)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q17",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Facile",
    "question": "Quelle est la complexité d'insertion d'un élément au tout début d'un tableau statique de taille $n$ ?",
    "options": [
      "$O(n)$ car il faut décaler tous les éléments existants d'une case vers la droite",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(n)$ car il faut décaler tous les éléments existants d'une case vers la droite",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Insérer en tête d'un tableau contigu impose de déplacer les $n$ éléments vers la droite pour libérer la première cellule.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q18",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Facile",
    "question": "Quelle est la structure d'un nœud dans une liste simplement chaînée ?",
    "options": [
      "Une valeur de données et un pointeur vers le nœud suivant",
      "Deux valeurs et aucun pointeur",
      "Un pointeur vers le parent et un pointeur vers la racine",
      "Un tableau statique d'index"
    ],
    "choices": [
      "Une valeur de données et un pointeur vers le nœud suivant",
      "Deux valeurs et aucun pointeur",
      "Un pointeur vers le parent et un pointeur vers la racine",
      "Un tableau statique d'index"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque nœud d'une liste simplement chaînée stocke une charge utile (valeur) et un pointeur de liaison `next` vers le nœud suivant (ou `NULL`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q19",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité d'insertion d'un élément en tête d'une liste simplement chaînée si on dispose du pointeur de tête (head) ?",
    "options": [
      "$O(1)$ (temps constant)",
      "$O(n)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(1)$ (temps constant)",
      "$O(n)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Il suffit de créer le nouveau nœud, de faire pointer son `next` vers l'ancienne tête et de mettre à jour le pointeur `head`, le tout en temps constant $O(1)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q20",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Moyen",
    "question": "Quel est l'avantage principal d'une liste doublement chaînée par rapport à une liste simplement chaînée ?",
    "options": [
      "Elle permet un parcours bidirectionnel (en avant et en arrière) et la suppression d'un nœud donné en $O(1)$ sans avoir à parcourir la liste pour trouver son prédécesseur",
      "Elle consomme deux fois moins de mémoire",
      "Elle permet l'accès aléatoire par index en $O(1)$",
      "Elle est toujours triée automatiquement"
    ],
    "choices": [
      "Elle permet un parcours bidirectionnel (en avant et en arrière) et la suppression d'un nœud donné en $O(1)$ sans avoir à parcourir la liste pour trouver son prédécesseur",
      "Elle consomme deux fois moins de mémoire",
      "Elle permet l'accès aléatoire par index en $O(1)$",
      "Elle est toujours triée automatiquement"
    ],
    "correctAnswer": 0,
    "explanation": "Avec des pointeurs `prev` et `next`, n'importe quel nœud peut être extrait en temps constant sans recherche préalable de son prédécesseur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q21",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Difficile",
    "question": "Quel algorithme célèbre permet de détecter la présence d'un cycle dans une liste chaînée avec une complexité spatiale de $O(1)$ ?",
    "options": [
      "L'algorithme du lièvre et de la tortue de Floyd (Floyd's Cycle-Finding Algorithm)",
      "L'algorithme de Dijkstra",
      "Le crible d'Ératosthène",
      "L'algorithme A*"
    ],
    "choices": [
      "L'algorithme du lièvre et de la tortue de Floyd (Floyd's Cycle-Finding Algorithm)",
      "L'algorithme de Dijkstra",
      "Le crible d'Ératosthène",
      "L'algorithme A*"
    ],
    "correctAnswer": 0,
    "explanation": "Deux pointeurs avancent à des vitesses différentes (la tortue avance d'un pas, le lièvre de deux). S'il y a un cycle, ils finiront obligatoirement par se rencontrer.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q22",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Moyen",
    "question": "Pourquoi le parcours séquentiel d'un grand tableau est-il généralement beaucoup plus rapide en pratique que celui d'une liste chaînée de même taille sur les architectures modernes ?",
    "options": [
      "Grâce à la localité spatiale des données contiguës qui maximise l'efficacité de la mémoire cache L1/L2 et du prefetching matériel du processeur",
      "Parce que les listes chaînées sont interprétées",
      "Parce que les tableaux n'utilisent pas de mémoire",
      "Parce que les processeurs n'aiment pas les pointeurs"
    ],
    "choices": [
      "Grâce à la localité spatiale des données contiguës qui maximise l'efficacité de la mémoire cache L1/L2 et du prefetching matériel du processeur",
      "Parce que les listes chaînées sont interprétées",
      "Parce que les tableaux n'utilisent pas de mémoire",
      "Parce que les processeurs n'aiment pas les pointeurs"
    ],
    "correctAnswer": 0,
    "explanation": "Un tableau stocké de façon contiguë exploite parfaitement les lignes de cache CPU (Cache Hits). Une liste chaînée disperse ses nœuds dans le tas, provoquant de constants Cache Misses.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q23",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Difficile",
    "question": "Quelle est la stratégie classique de redimensionnement d'un tableau dynamique (comme std::vector ou ArrayList) pour garantir un coût amorti d'insertion en $O(1)$ ?",
    "options": [
      "Doubler la capacité du tableau (facteur d'expansion géométrique $\\times 2$ ou $\\times 1.5$) dès que la capacité maximale est atteinte",
      "Augmenter la taille de 1 cellule à chaque ajout",
      "Diminuer la taille de moitié",
      "Allouer 1 Go dès le départ"
    ],
    "choices": [
      "Doubler la capacité du tableau (facteur d'expansion géométrique $\\times 2$ ou $\\times 1.5$) dès que la capacité maximale est atteinte",
      "Augmenter la taille de 1 cellule à chaque ajout",
      "Diminuer la taille de moitié",
      "Allouer 1 Go dès le départ"
    ],
    "correctAnswer": 0,
    "explanation": "Une croissance géométrique amortit le coût du recopiage des éléments, rendant le coût amorti de chaque `append()` égal à $O(1)$. Une croissance arithmétique (+1) donnerait du $O(n^2)$ global catastrophique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q24",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Facile",
    "question": "Quelle est la complexité de suppression du dernier élément d'une liste simplement chaînée de taille $n$ si on ne maintient que le pointeur de tête `head` ?",
    "options": [
      "$O(n)$",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(n)$",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Pour supprimer la queue, il faut obligatoirement trouver l'avant-dernier nœud pour modifier son pointeur `next` vers `NULL`, ce qui exige de parcourir la liste jusqu'à la fin en $O(n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q25",
    "part": 5,
    "topic": "Tableaux et Listes",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'une liste chaînée circulaire ?",
    "options": [
      "Une liste où le pointeur `next` du dernier nœud pointe vers le premier nœud (tête) au lieu de valoir `NULL`",
      "Une liste stockée dans un fichier circulaire",
      "Une liste dont les valeurs forment un cercle géométrique",
      "Une liste sans début ni données"
    ],
    "choices": [
      "Une liste où le pointeur `next` du dernier nœud pointe vers le premier nœud (tête) au lieu de valoir `NULL`",
      "Une liste stockée dans un fichier circulaire",
      "Une liste dont les valeurs forment un cercle géométrique",
      "Une liste sans début ni données"
    ],
    "correctAnswer": 0,
    "explanation": "Dans une liste circulaire, le dernier nœud reboucle sur la tête, ce qui permet des rotations infinies (très utilisé dans l'ordonnancement Round-Robin).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q26",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Facile",
    "question": "Quel principe de gestion des éléments caractérise une pile (Stack) ?",
    "options": [
      "LIFO (Last In, First Out)",
      "FIFO (First In, First Out)",
      "LILO (Last In, Last Out)",
      "Random In, Random Out"
    ],
    "choices": [
      "LIFO (Last In, First Out)",
      "FIFO (First In, First Out)",
      "LILO (Last In, Last Out)",
      "Random In, Random Out"
    ],
    "correctAnswer": 0,
    "explanation": "Une pile fonctionne selon le principe LIFO : le dernier élément inséré est le tout premier à être retiré (comme une pile d'assiettes).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q27",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Facile",
    "question": "Quel principe de gestion caractérise une file d'attente classique (Queue) ?",
    "options": [
      "FIFO (First In, First Out)",
      "LIFO (Last In, First Out)",
      "FILO (First In, Last Out)",
      "Priority Out"
    ],
    "choices": [
      "FIFO (First In, First Out)",
      "LIFO (Last In, First Out)",
      "FILO (First In, Last Out)",
      "Priority Out"
    ],
    "correctAnswer": 0,
    "explanation": "Une file fonctionne en FIFO : le premier élément entré est le premier traité et retiré (comme une file d'attente à la caisse).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q28",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Facile",
    "question": "Quelles sont les deux opérations fondamentales d'une pile pour ajouter et retirer un élément ?",
    "options": [
      "push() et pop()",
      "enqueue() et dequeue()",
      "insert() et delete()",
      "add() et poll()"
    ],
    "choices": [
      "push() et pop()",
      "enqueue() et dequeue()",
      "insert() et delete()",
      "add() et poll()"
    ],
    "correctAnswer": 0,
    "explanation": "`push` empile un élément au sommet de la pile, et `pop` dépile l'élément situé au sommet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q29",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Moyen",
    "question": "Quelle structure de données est naturellement utilisée par un compilateur ou interpréteur pour évaluer les expressions arithmétiques en notation polonaise inverse (RPN) ?",
    "options": [
      "Une pile (Stack)",
      "Une file simple (Queue)",
      "Un graphe orienté",
      "Un tableau dynamique 2D"
    ],
    "choices": [
      "Une pile (Stack)",
      "Une file simple (Queue)",
      "Un graphe orienté",
      "Un tableau dynamique 2D"
    ],
    "correctAnswer": 0,
    "explanation": "En notation polonaise inverse (ex: `3 4 + 2 *`), on empile les opérandes et, à chaque opérateur rencontré, on dépile les deux derniers nombres pour effectuer le calcul et empiler le résultat.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q30",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Moyen",
    "question": "Quelle structure de données est indispensable pour implémenter un parcours en largeur (BFS - Breadth-First Search) d'un arbre ou graphe ?",
    "options": [
      "Une file (Queue)",
      "Une pile (Stack)",
      "Un tas binaire",
      "Un dictionnaire trié"
    ],
    "choices": [
      "Une file (Queue)",
      "Une pile (Stack)",
      "Un tas binaire",
      "Un dictionnaire trié"
    ],
    "correctAnswer": 0,
    "explanation": "Le parcours en largeur (BFS) utilise une file FIFO pour explorer tous les sommets du niveau de profondeur $k$ avant de passer aux sommets du niveau $k+1$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q31",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Moyen",
    "question": "Quelle structure de données est utilisée (implicitement ou explicitement) pour implémenter un parcours en profondeur (DFS - Depth-First Search) ?",
    "options": [
      "Une pile (Stack)",
      "Une file (Queue)",
      "Une liste circulaire",
      "Un arbre rouge-noir"
    ],
    "choices": [
      "Une pile (Stack)",
      "Une file (Queue)",
      "Une liste circulaire",
      "Un arbre rouge-noir"
    ],
    "correctAnswer": 0,
    "explanation": "Le DFS utilise une pile LIFO (soit la pile d'appels récursifs du système, soit une pile explicite) pour explorer une branche jusqu'à sa feuille avant de rebrousser chemin.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q32",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Difficile",
    "question": "Comment implémenter une file (Queue) fonctionnelle en utilisant uniquement deux piles (Stacks) avec un coût amorti de $O(1)$ par opération ?",
    "options": [
      "Une pile sert pour l'empilement des entrées (inbox), et l'autre pour les sorties (outbox) : si l'outbox est vide lors d'un `dequeue`, on dépile tous les éléments de l'inbox pour les empiler dans l'outbox",
      "En inversant la pile à chaque insertion",
      "En stockant les pointeurs de pile dans un tableau",
      "Ce n'est théoriquement pas possible"
    ],
    "choices": [
      "Une pile sert pour l'empilement des entrées (inbox), et l'autre pour les sorties (outbox) : si l'outbox est vide lors d'un `dequeue`, on dépile tous les éléments de l'inbox pour les empiler dans l'outbox",
      "En inversant la pile à chaque insertion",
      "En stockant les pointeurs de pile dans un tableau",
      "Ce n'est théoriquement pas possible"
    ],
    "correctAnswer": 0,
    "explanation": "Cette technique classique inverse l'ordre deux fois (LIFO + LIFO = FIFO). Chaque élément est transféré au maximum une fois, garantissant un coût amorti de $O(1)$ par opération.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q33",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une file à double extrémité (Deque - Double-Ended Queue) ?",
    "options": [
      "Une séquence autorisant l'insertion et la suppression d'éléments à la fois à l'avant (tête) et à l'arrière (queue) en temps constant $O(1)$",
      "Une file avec deux sorties prioritaires",
      "Une file qui ne peut contenir que deux éléments",
      "Une file partagée entre deux ordinateurs"
    ],
    "choices": [
      "Une séquence autorisant l'insertion et la suppression d'éléments à la fois à l'avant (tête) et à l'arrière (queue) en temps constant $O(1)$",
      "Une file avec deux sorties prioritaires",
      "Une file qui ne peut contenir que deux éléments",
      "Une file partagée entre deux ordinateurs"
    ],
    "correctAnswer": 0,
    "explanation": "Un Deque unifie les propriétés d'une pile et d'une file en permettant d'agir sur les deux bouts (`pushFront`, `pushBack`, `popFront`, `popBack`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q34",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un tampon circulaire (Circular Buffer / Ring Buffer) pour implémenter une file d'attente à taille fixe ?",
    "options": [
      "Un tableau à taille fixe utilisant l'arithmétique modulaire (`(tail + 1) % N`) pour faire reboucler les pointeurs de tête et de queue sans déplacer physiquement les éléments en mémoire",
      "Un disque dur rotatif",
      "Une mémoire flash USB",
      "Une boucle infinie de code"
    ],
    "choices": [
      "Un tableau à taille fixe utilisant l'arithmétique modulaire (`(tail + 1) % N`) pour faire reboucler les pointeurs de tête et de queue sans déplacer physiquement les éléments en mémoire",
      "Un disque dur rotatif",
      "Une mémoire flash USB",
      "Une boucle infinie de code"
    ],
    "correctAnswer": 0,
    "explanation": "Le ring buffer offre des performances $O(1)$ optimales pour les files d'attente audio, réseau et pilotes de périphériques sans aucune allocation dynamique de mémoire.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q35",
    "part": 5,
    "topic": "Piles et Files",
    "difficulty": "Moyen",
    "question": "Dans le problème de vérification de l'équilibre des parenthèses, crochets et accolades `{[()]}`, quelle structure de données est la plus efficace ?",
    "options": [
      "Une pile (Stack)",
      "Une file (Queue)",
      "Un tableau trié",
      "Un graphe biparti"
    ],
    "choices": [
      "Une pile (Stack)",
      "Une file (Queue)",
      "Un tableau trié",
      "Un graphe biparti"
    ],
    "correctAnswer": 0,
    "explanation": "On empile chaque délimiteur ouvrant (`{`, `[`, `(`) ; lorsqu'on rencontre un délimiteur fermant, on vérifie qu'il correspond exactement au sommet de la pile dépilé.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q36",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un arbre binaire ?",
    "options": [
      "Une structure arborescente où chaque nœud possède au maximum deux enfants, appelés enfant gauche et enfant droit",
      "Un arbre ne contenant que des nombres pairs",
      "Un arbre codé uniquement avec des 0 et des 1",
      "Un arbre avec exactement deux feuilles au total"
    ],
    "choices": [
      "Une structure arborescente où chaque nœud possède au maximum deux enfants, appelés enfant gauche et enfant droit",
      "Un arbre ne contenant que des nombres pairs",
      "Un arbre codé uniquement avec des 0 et des 1",
      "Un arbre avec exactement deux feuilles au total"
    ],
    "correctAnswer": 0,
    "explanation": "Par définition, dans un arbre binaire, le degré de chaque nœud est au maximum de 2.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q37",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Facile",
    "question": "Quelle est la propriété fondamentale d'un Arbre Binaire de Recherche (ABR / BST) ?",
    "options": [
      "Pour tout nœud $X$, toutes les valeurs de son sous-arbre gauche sont strictement inférieures à la valeur de $X$, et toutes les valeurs de son sous-arbre droit sont supérieures à $X$",
      "La hauteur de l'arbre est toujours égale à 2",
      "Toutes les feuilles sont situées au niveau 0",
      "Les valeurs sont triées par ordre d'insertion chronologique"
    ],
    "choices": [
      "Pour tout nœud $X$, toutes les valeurs de son sous-arbre gauche sont strictement inférieures à la valeur de $X$, et toutes les valeurs de son sous-arbre droit sont supérieures à $X$",
      "La hauteur de l'arbre est toujours égale à 2",
      "Toutes les feuilles sont situées au niveau 0",
      "Les valeurs sont triées par ordre d'insertion chronologique"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un ABR : sous-arbre gauche $< Racine <$ sous-arbre droit, permettant des recherches en temps moyen $O(\\log n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q38",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Moyen",
    "question": "Quel parcours d'arbre binaire de recherche (ABR) visite les éléments dans leur ordre croissant naturel trié ?",
    "options": [
      "Le parcours Infixe (In-order traversal : Gauche, Racine, Droite)",
      "Le parcours Préfixe (Pre-order traversal : Racine, Gauche, Droite)",
      "Le parcours Postfixe (Post-order traversal : Gauche, Droite, Racine)",
      "Le parcours en Largeur (Breadth-first / Level-order)"
    ],
    "choices": [
      "Le parcours Infixe (In-order traversal : Gauche, Racine, Droite)",
      "Le parcours Préfixe (Pre-order traversal : Racine, Gauche, Droite)",
      "Le parcours Postfixe (Post-order traversal : Gauche, Droite, Racine)",
      "Le parcours en Largeur (Breadth-first / Level-order)"
    ],
    "correctAnswer": 0,
    "explanation": "Le parcours Infixe (Sous-arbre gauche, puis Nœud courant, puis Sous-arbre droit) énumère par construction les valeurs d'un ABR dans l'ordre croissant.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q39",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Facile",
    "question": "Dans quel ordre le parcours Préfixe (Pre-order) visite-t-il les nœuds d'un arbre binaire ?",
    "options": [
      "Racine, puis Sous-arbre Gauche, puis Sous-arbre Droit",
      "Gauche, Racine, Droite",
      "Gauche, Droite, Racine",
      "Feuilles d'abord, puis Racine"
    ],
    "choices": [
      "Racine, puis Sous-arbre Gauche, puis Sous-arbre Droit",
      "Gauche, Racine, Droite",
      "Gauche, Droite, Racine",
      "Feuilles d'abord, puis Racine"
    ],
    "correctAnswer": 0,
    "explanation": "Préfixe (Pre-order) visite le nœud courant en premier, avant d'explorer ses enfants gauche puis droit (très utile pour cloner un arbre).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q40",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Moyen",
    "question": "Dans quel ordre le parcours Postfixe (Post-order) visite-t-il les nœuds d'un arbre binaire ?",
    "options": [
      "Sous-arbre Gauche, Sous-arbre Droit, puis Racine",
      "Racine, Gauche, Droite",
      "Gauche, Racine, Droite",
      "Racine, Droite, Gauche"
    ],
    "choices": [
      "Sous-arbre Gauche, Sous-arbre Droit, puis Racine",
      "Racine, Gauche, Droite",
      "Gauche, Racine, Droite",
      "Racine, Droite, Gauche"
    ],
    "correctAnswer": 0,
    "explanation": "Postfixe (Post-order) traite les sous-arbres gauche et droit avant le parent, ce qui est idéal pour détruire proprement un arbre de la base vers le haut sans fuite mémoire.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q41",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité dans le pire des cas d'une recherche dans un Arbre Binaire de Recherche standard non équilibré ?",
    "options": [
      "$O(n)$ lorsque l'arbre dégénère en une liste linéaire (ex: si les éléments ont été insérés déjà triés)",
      "$O(\\log n)$ garanti",
      "$O(1)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(n)$ lorsque l'arbre dégénère en une liste linéaire (ex: si les éléments ont été insérés déjà triés)",
      "$O(\\log n)$ garanti",
      "$O(1)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Si on insère des valeurs triées ($1, 2, 3, 4$), chaque nouveau nœud est inséré à droite du précédent, créant une chaîne linéaire de hauteur $n$ avec une recherche en $O(n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q42",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Moyen",
    "question": "Combien de nœuds au maximum peut contenir un arbre binaire de hauteur $h$ (la racine étant à la hauteur $0$) ?",
    "options": [
      "$2^{h+1} - 1$",
      "$2^h$",
      "$2h + 1$",
      "$h^2$"
    ],
    "choices": [
      "$2^{h+1} - 1$",
      "$2^h$",
      "$2h + 1$",
      "$h^2$"
    ],
    "correctAnswer": 0,
    "explanation": "La somme des puissances de 2 pour chaque niveau de 0 à $h$ est : $\\sum_{i=0}^h 2^i = 2^{h+1} - 1$. Pour $h=2$, $1+2+4 = 7 = 2^3 - 1$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q43",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Difficile",
    "question": "Comment supprime-t-on un nœud possédant deux enfants dans un Arbre Binaire de Recherche (BST) ?",
    "options": [
      "On remplace sa valeur par celle de son successeur in-order (la plus petite valeur de son sous-arbre droit), puis on supprime récursivement ce successeur",
      "On supprime tout le sous-arbre droit",
      "On supprime tout le sous-arbre gauche",
      "L'opération est interdite dans un BST"
    ],
    "choices": [
      "On remplace sa valeur par celle de son successeur in-order (la plus petite valeur de son sous-arbre droit), puis on supprime récursivement ce successeur",
      "On supprime tout le sous-arbre droit",
      "On supprime tout le sous-arbre gauche",
      "L'opération est interdite dans un BST"
    ],
    "correctAnswer": 0,
    "explanation": "Le successeur in-order (ou le prédécesseur in-order) a au plus un enfant, ce qui permet de préserver l'invariant d'ordre du BST après sa suppression.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q44",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Facile",
    "question": "Qu'appelle-t-on une 'feuille' (Leaf) dans un arbre binaire ?",
    "options": [
      "Un nœud qui ne possède aucun enfant (ni gauche, ni droit)",
      "Le nœud situé tout en haut de l'arbre",
      "Un nœud qui possède exactement deux enfants",
      "Un nœud contenant la valeur zéro"
    ],
    "choices": [
      "Un nœud qui ne possède aucun enfant (ni gauche, ni droit)",
      "Le nœud situé tout en haut de l'arbre",
      "Un nœud qui possède exactement deux enfants",
      "Un nœud contenant la valeur zéro"
    ],
    "correctAnswer": 0,
    "explanation": "Les feuilles sont les nœuds terminaux de l'arbre dont les deux pointeurs enfants sont `NULL`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q45",
    "part": 5,
    "topic": "Arbres binaires",
    "difficulty": "Difficile",
    "question": "Quelle est la hauteur minimale possible d'un arbre binaire contenant $n$ nœuds ?",
    "options": [
      "$\\lfloor \\log_2 n \\rfloor$",
      "$n / 2$",
      "$\\sqrt{n}$",
      "$2^n$"
    ],
    "choices": [
      "$\\lfloor \\log_2 n \\rfloor$",
      "$n / 2$",
      "$\\sqrt{n}$",
      "$2^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Un arbre binaire complet remplit chaque niveau de façon exponentielle, ce qui donne une hauteur minimale de $\\lfloor \\log_2 n \\rfloor$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q46",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Moyen",
    "question": "Quelle est la propriété d'équilibre stricte d'un arbre AVL ?",
    "options": [
      "Pour chaque nœud, la différence de hauteur entre son sous-arbre gauche et son sous-arbre droit (facteur d'équilibre) ne dépasse jamais 1 (valeurs autorisées : -1, 0, ou +1)",
      "Tous les nœuds noirs ont des enfants rouges",
      "Toutes les feuilles sont à la même profondeur exacte",
      "Le sous-arbre droit doit avoir plus d'éléments que le sous-arbre gauche"
    ],
    "choices": [
      "Pour chaque nœud, la différence de hauteur entre son sous-arbre gauche et son sous-arbre droit (facteur d'équilibre) ne dépasse jamais 1 (valeurs autorisées : -1, 0, ou +1)",
      "Tous les nœuds noirs ont des enfants rouges",
      "Toutes les feuilles sont à la même profondeur exacte",
      "Le sous-arbre droit doit avoir plus d'éléments que le sous-arbre gauche"
    ],
    "correctAnswer": 0,
    "explanation": "Inventé par Adelson-Velsky et Landis (AVL, 1962), cet arbre garantit que le facteur d'équilibre $\\in \\{-1, 0, 1\\}$, maintenant la hauteur en $O(\\log n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q47",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Moyen",
    "question": "Quelles opérations de rééquilibrage en temps constant $O(1)$ sont utilisées pour restaurer l'équilibre d'un arbre AVL ou Rouge-Noir après une insertion ?",
    "options": [
      "Les rotations (simples gauche/droite ou doubles gauche-droite/droite-gauche)",
      "Les permutations aléatoires",
      "La réallocation de tableau",
      "Le tri par fusion des nœuds"
    ],
    "choices": [
      "Les rotations (simples gauche/droite ou doubles gauche-droite/droite-gauche)",
      "Les permutations aléatoires",
      "La réallocation de tableau",
      "Le tri par fusion des nœuds"
    ],
    "correctAnswer": 0,
    "explanation": "Les rotations d'arbres modifient localement les pointeurs en $O(1)$ sans altérer l'ordre in-order des éléments.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q48",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Difficile",
    "question": "Quelle est la règle relative aux nœuds rouges dans un Arbre Rouge-Noir (Red-Black Tree) ?",
    "options": [
      "Un nœud rouge ne peut pas avoir d'enfant rouge (aucun chemin ne contient deux nœuds rouges consécutifs)",
      "La racine doit être rouge",
      "Les feuilles doivent être rouges",
      "Un nœud rouge doit obligatoirement avoir deux enfants noirs et deux petits-enfants rouges"
    ],
    "choices": [
      "Un nœud rouge ne peut pas avoir d'enfant rouge (aucun chemin ne contient deux nœuds rouges consécutifs)",
      "La racine doit être rouge",
      "Les feuilles doivent être rouges",
      "Un nœud rouge doit obligatoirement avoir deux enfants noirs et deux petits-enfants rouges"
    ],
    "correctAnswer": 0,
    "explanation": "Règles Rouge-Noir : 1. Nœud rouge ou noir, 2. Racine noire, 3. Feuilles NIL noires, 4. Pas de rouges consécutifs, 5. Même nombre de nœuds noirs (hauteur noire) vers toutes les feuilles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q49",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Facile",
    "question": "Quelle est la propriété d'un tas binaire max (Max-Heap) ?",
    "options": [
      "La valeur de chaque nœud parent est supérieure ou égale aux valeurs de ses enfants, la valeur maximale se trouvant toujours à la racine",
      "La racine contient la plus petite valeur",
      "L'arbre est parfaitement trié de gauche à droite",
      "Chaque nœud a exactement trois enfants"
    ],
    "choices": [
      "La valeur de chaque nœud parent est supérieure ou égale aux valeurs de ses enfants, la valeur maximale se trouvant toujours à la racine",
      "La racine contient la plus petite valeur",
      "L'arbre est parfaitement trié de gauche à droite",
      "Chaque nœud a exactement trois enfants"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un Max-Heap, $parent \\ge enfants$. L'accès au maximum est immédiat en $O(1)$ à la racine.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q50",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Moyen",
    "question": "Comment représente-t-on classiquement un tas binaire complet sans pointeurs dans un tableau indexé à partir de $0$ ?",
    "options": [
      "Pour un nœud à l'index $i$, son fils gauche est à $2i + 1$, son fils droit à $2i + 2$, et son parent à $\\lfloor (i - 1) / 2 \\rfloor$",
      "Fils gauche à $i+1$ et fils droit à $i+2$",
      "Fils gauche à $i/2$ et fils droit à $i*2$",
      "Dans une liste de pointeurs désordonnés"
    ],
    "choices": [
      "Pour un nœud à l'index $i$, son fils gauche est à $2i + 1$, son fils droit à $2i + 2$, et son parent à $\\lfloor (i - 1) / 2 \\rfloor$",
      "Fils gauche à $i+1$ et fils droit à $i+2$",
      "Fils gauche à $i/2$ et fils droit à $i*2$",
      "Dans une liste de pointeurs désordonnés"
    ],
    "correctAnswer": 0,
    "explanation": "Grâce à la complétude du tas, la hiérarchie arborescente se calcule par de simples décalages d'index arithmétiques sans aucun surcoût de pointeurs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q51",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité de l'extraction du minimum ou maximum (`extractMin` / `extractMax`) dans un tas binaire à $n$ éléments ?",
    "options": [
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n)$",
      "$O(n \\log n)$"
    ],
    "choices": [
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n)$",
      "$O(n \\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "Après extraction de la racine, on place le dernier élément à la racine et on effectue un tamisage descendant (heapify-down / sift-down) le long de la hauteur $O(\\log n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q52",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Difficile",
    "question": "Quelle est la complexité optimale de construction d'un tas binaire (`buildHeap`) à partir d'un tableau arbitraire de $n$ éléments ?",
    "options": [
      "$O(n)$ (linéaire)",
      "$O(n \\log n)$",
      "$O(n^2)$",
      "$O(\\log n)$"
    ],
    "choices": [
      "$O(n)$ (linéaire)",
      "$O(n \\log n)$",
      "$O(n^2)$",
      "$O(\\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "En tamisant du bas vers le haut (Floyd's Heap Construction), la somme de la série $\\sum (h / 2^h)$ converge vers une borne globale en temps linéaire $O(n)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q53",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Moyen",
    "question": "Quelle structure de données est la base d'implémentation standard d'une file à priorités (Priority Queue) ?",
    "options": [
      "Un tas binaire (Heap)",
      "Une liste chaînée non triée",
      "Une pile LIFO",
      "Une table de hachage"
    ],
    "choices": [
      "Un tas binaire (Heap)",
      "Une liste chaînée non triée",
      "Une pile LIFO",
      "Une table de hachage"
    ],
    "correctAnswer": 0,
    "explanation": "Le tas binaire fournit une insertion en $O(\\log n)$ et l'extraction de l'élément le plus prioritaire en $O(\\log n)$ avec lecture du top en $O(1)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q54",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Difficile",
    "question": "Pourquoi les bases de données relationnelles et systèmes de fichiers utilisent-ils des arbres B / B+ (B-Trees) plutôt que des arbres AVL ou Rouge-Noir pour leurs index disques ?",
    "options": [
      "Parce que les arbres B ont un facteur de branchement élevé (noeuds très larges contenant des centaines de clés) correspondant exactement à la taille d'un bloc de disque, minimisant le nombre d'accès disque lents",
      "Parce que les arbres B consomment moins de RAM",
      "Parce que les arbres AVL ne supportent pas les chaînes de caractères",
      "Parce que les arbres B sont toujours binaires"
    ],
    "choices": [
      "Parce que les arbres B ont un facteur de branchement élevé (noeuds très larges contenant des centaines de clés) correspondant exactement à la taille d'un bloc de disque, minimisant le nombre d'accès disque lents",
      "Parce que les arbres B consomment moins de RAM",
      "Parce que les arbres AVL ne supportent pas les chaînes de caractères",
      "Parce que les arbres B sont toujours binaires"
    ],
    "correctAnswer": 0,
    "explanation": "Un arbre B de hauteur 3 ou 4 peut indexer des millions d'enregistrements, ne nécessitant que 3 ou 4 lectures disques (I/O) là où un arbre binaire en demanderait 20 à 30.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q55",
    "part": 5,
    "topic": "Arbres équilibrés et Tas",
    "difficulty": "Difficile",
    "question": "Quelle est la particularité distinctive d'un arbre B+ par rapport à un arbre B standard ?",
    "options": [
      "Toutes les données réelles et pointeurs de lignes se trouvent exclusivement dans les feuilles, qui sont de plus reliées entre elles par une liste chaînée pour accélérer les requêtes d'intervalle (Range Queries)",
      "Les feuilles ne contiennent aucune donnée",
      "L'arbre ne grandit jamais",
      "Il ne supporte que les entiers positifs"
    ],
    "choices": [
      "Toutes les données réelles et pointeurs de lignes se trouvent exclusivement dans les feuilles, qui sont de plus reliées entre elles par une liste chaînée pour accélérer les requêtes d'intervalle (Range Queries)",
      "Les feuilles ne contiennent aucune donnée",
      "L'arbre ne grandit jamais",
      "Il ne supporte que les entiers positifs"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un B+ Tree, les nœuds internes ne contiennent que des clés de routage. Les feuilles chaînées permettent des scans séquentiels ultra-rapides (`BETWEEN x AND y`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q56",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un algorithme de tri 'stable' ?",
    "options": [
      "Un algorithme qui préserve l'ordre relatif initial des éléments ayant des clés de tri identiques",
      "Un algorithme qui ne plante jamais",
      "Un algorithme dont le temps d'exécution est identique sur toute machine",
      "Un algorithme n'utilisant aucune mémoire vive"
    ],
    "choices": [
      "Un algorithme qui préserve l'ordre relatif initial des éléments ayant des clés de tri identiques",
      "Un algorithme qui ne plante jamais",
      "Un algorithme dont le temps d'exécution est identique sur toute machine",
      "Un algorithme n'utilisant aucune mémoire vive"
    ],
    "correctAnswer": 0,
    "explanation": "La stabilité garantit que si deux éléments ont la même valeur, leur ordre d'origine dans la collection source est conservé intact après le tri.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q57",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Facile",
    "question": "Quelle est la complexité dans le pire des cas du tri à bulles (Bubble Sort) ?",
    "options": [
      "$O(n^2)$",
      "$O(n \\log n)$",
      "$O(n)$",
      "$O(\\log n)$"
    ],
    "choices": [
      "$O(n^2)$",
      "$O(n \\log n)$",
      "$O(n)$",
      "$O(\\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "Le tri à bulles compare et échange les éléments adjacents en effectuant jusqu'à $n(n-1)/2$ comparaisons, d'où une complexité quadratique $O(n^2)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q58",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité temporelle du Tri Fusion (Merge Sort) dans le pire, le meilleur et le cas moyen ?",
    "options": [
      "$O(n \\log n)$ dans tous les cas",
      "$O(n)$ dans le meilleur cas et $O(n^2)$ dans le pire",
      "$O(n^2)$ dans tous les cas",
      "$O(\\log n)$ dans tous les cas"
    ],
    "choices": [
      "$O(n \\log n)$ dans tous les cas",
      "$O(n)$ dans le meilleur cas et $O(n^2)$ dans le pire",
      "$O(n^2)$ dans tous les cas",
      "$O(\\log n)$ dans tous les cas"
    ],
    "correctAnswer": 0,
    "explanation": "MergeSort divise toujours le tableau strictement en deux moitiés égales et fusionne en temps linéaire, garantissant $\\Theta(n \\log n)$ de manière déterministe.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q59",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Moyen",
    "question": "Quel est l'inconvénient principal du Tri Fusion standard sur des tableaux contigus ?",
    "options": [
      "Il nécessite un tableau auxiliaire supplémentaire de taille $O(n)$ pour l'étape de fusion (non tri sur place)",
      "Il est instable",
      "Il a une complexité pire cas en $O(n^2)$",
      "Il ne fonctionne que sur les entiers"
    ],
    "choices": [
      "Il nécessite un tableau auxiliaire supplémentaire de taille $O(n)$ pour l'étape de fusion (non tri sur place)",
      "Il est instable",
      "Il a une complexité pire cas en $O(n^2)$",
      "Il ne fonctionne que sur les entiers"
    ],
    "correctAnswer": 0,
    "explanation": "MergeSort n'est pas un tri 'in-place' : il requiert $O(n)$ d'espace mémoire temporaire pour fusionner les sous-tableaux.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q60",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité dans le pire des cas du Tri Rapide (QuickSort) et quand survient-elle avec un choix de pivot naïf (premier élément) ?",
    "options": [
      "$O(n^2)$, lorsque le tableau d'entrée est déjà entièrement trié ou trié en sens inverse",
      "$O(n \\log n)$ toujours",
      "$O(n)$",
      "$O(n^3)$"
    ],
    "choices": [
      "$O(n^2)$, lorsque le tableau d'entrée est déjà entièrement trié ou trié en sens inverse",
      "$O(n \\log n)$ toujours",
      "$O(n)$",
      "$O(n^3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Si le pivot choisi est systématiquement le minimum ou maximum (tableau trié), le partitionnement est déséquilibré ($0$ et $n-1$), dégradant QuickSort en $O(n^2)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q61",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Difficile",
    "question": "Comment évite-t-on la dégradation quadratique $O(n^2)$ de QuickSort en pratique ?",
    "options": [
      "En choisissant un pivot aléatoire ou par la technique de la médiane de trois (début, milieu, fin)",
      "En augmentant la taille de la pile",
      "En triant d'abord avec un tri à bulles",
      "En exécutant le code en mode root"
    ],
    "choices": [
      "En choisissant un pivot aléatoire ou par la technique de la médiane de trois (début, milieu, fin)",
      "En augmentant la taille de la pile",
      "En triant d'abord avec un tri à bulles",
      "En exécutant le code en mode root"
    ],
    "correctAnswer": 0,
    "explanation": "La médiane de trois ou un pivot aléatoire casse les schémas prévisibles, assurant une complexité moyenne de $O(n \\log n)$ sur presque toutes les entrées.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q62",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Moyen",
    "question": "Quelles sont les caractéristiques du Tri par Tas (HeapSort) ?",
    "options": [
      "Complexité temporelle en $O(n \\log n)$ garantie dans tous les cas et tri sur place avec $O(1)$ de mémoire auxiliaire, mais non stable",
      "Tri stable en $O(n)$",
      "Tri quadratique en $O(n^2)$",
      "Tri nécessitant $O(n)$ de mémoire supplémentaire"
    ],
    "choices": [
      "Complexité temporelle en $O(n \\log n)$ garantie dans tous les cas et tri sur place avec $O(1)$ de mémoire auxiliaire, mais non stable",
      "Tri stable en $O(n)$",
      "Tri quadratique en $O(n^2)$",
      "Tri nécessitant $O(n)$ de mémoire supplémentaire"
    ],
    "correctAnswer": 0,
    "explanation": "HeapSort combine l'avantage de temps garanti $O(n \\log n)$ de MergeSort et le tri sur place $O(1)$ de QuickSort, mais ses sauts en mémoire dégradent sa localité de cache.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q63",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Facile",
    "question": "Quel algorithme de tri est particulièrement efficace en $O(n)$ pour des tableaux quasiment déjà triés ou de très petite taille ($n < 20$) ?",
    "options": [
      "Le Tri par Insertion (Insertion Sort)",
      "Le Tri Rapide (QuickSort)",
      "Le Tri par Tas (HeapSort)",
      "Le Tri Fusion (MergeSort)"
    ],
    "choices": [
      "Le Tri par Insertion (Insertion Sort)",
      "Le Tri Rapide (QuickSort)",
      "Le Tri par Tas (HeapSort)",
      "Le Tri Fusion (MergeSort)"
    ],
    "correctAnswer": 0,
    "explanation": "Insertion Sort s'exécute en $O(n)$ sur des données presque triées et présente un très faible surcoût constant, ce qui explique son utilisation hybride dans Timsort.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q64",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Difficile",
    "question": "Quel algorithme de tri hybride combinant MergeSort et InsertionSort est utilisé par défaut dans le langage Python (`sort()`) et Java (`Arrays.sort()` pour objets) ?",
    "options": [
      "Timsort",
      "Introsort",
      "Smoothsort",
      "RadixSort"
    ],
    "choices": [
      "Timsort",
      "Introsort",
      "Smoothsort",
      "RadixSort"
    ],
    "correctAnswer": 0,
    "explanation": "Conçu par Tim Peters en 2002, Timsort recherche des séquences naturellement déjà ordonnées ('runs') pour atteindre des performances remarquables sur données réelles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q65",
    "part": 5,
    "topic": "Algorithmes de tri",
    "difficulty": "Moyen",
    "question": "Comment le Tri par Comptage (Counting Sort) ou le Tri Radix (Radix Sort) peuvent-ils trier des entiers en temps linéaire $O(n)$ en contournant la borne inférieure $\\Omega(n \\log n)$ ?",
    "options": [
      "Parce qu'ils ne sont pas des tris par comparaison : ils utilisent les valeurs numériques directes comme index de dénombrement",
      "Parce qu'ils utilisent plusieurs processeurs",
      "Parce qu'ils tronquent les nombres",
      "Parce qu'ils font une estimation statistique approximative"
    ],
    "choices": [
      "Parce qu'ils ne sont pas des tris par comparaison : ils utilisent les valeurs numériques directes comme index de dénombrement",
      "Parce qu'ils utilisent plusieurs processeurs",
      "Parce qu'ils tronquent les nombres",
      "Parce qu'ils font une estimation statistique approximative"
    ],
    "correctAnswer": 0,
    "explanation": "La borne $\\Omega(n \\log n)$ ne s'applique qu'aux tris par comparaisons. Les tris distributifs (Counting, Radix, Bucket) indexent directement des compartiments en $O(n + k)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q66",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Facile",
    "question": "Quelle condition préalable indispensable doit respecter un tableau pour qu'on puisse y appliquer une recherche dichotomique (Binary Search) ?",
    "options": [
      "Les éléments du tableau doivent être impérativement triés",
      "Le tableau doit avoir une taille paire",
      "Le tableau ne doit contenir que des nombres positifs",
      "Le tableau doit être alloué sur la pile"
    ],
    "choices": [
      "Les éléments du tableau doivent être impérativement triés",
      "Le tableau doit avoir une taille paire",
      "Le tableau ne doit contenir que des nombres positifs",
      "Le tableau doit être alloué sur la pile"
    ],
    "correctAnswer": 0,
    "explanation": "La dichotomie compare l'élément cherché à la valeur médiane ; sans ordre de tri garanti, éliminer une moitié n'a aucun sens.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q67",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Facile",
    "question": "Quel est le rôle d'une fonction de hachage dans une table de hachage ?",
    "options": [
      "Transformer une clé de données arbitraire (texte, objet) en un indice entier dans le tableau de compartiments (buckets)",
      "Chiffrer le mot de passe pour la NSA",
      "Trier les données par ordre alphabétique",
      "Supprimer les caractères spéciaux"
    ],
    "choices": [
      "Transformer une clé de données arbitraire (texte, objet) en un indice entier dans le tableau de compartiments (buckets)",
      "Chiffrer le mot de passe pour la NSA",
      "Trier les données par ordre alphabétique",
      "Supprimer les caractères spéciaux"
    ],
    "correctAnswer": 0,
    "explanation": "La fonction de hachage calcule un hashcode modulo la taille de la table pour assigner instantanément une case en $O(1)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q68",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une collision de hachage ?",
    "options": [
      "Une situation où deux clés distinctes produisent le même index de compartiment après calcul de la fonction de hachage",
      "Une panne de processeur",
      "Une perte de mémoire vive",
      "Une variable déclarée deux fois"
    ],
    "choices": [
      "Une situation où deux clés distinctes produisent le même index de compartiment après calcul de la fonction de hachage",
      "Une panne de processeur",
      "Une perte de mémoire vive",
      "Une variable déclarée deux fois"
    ],
    "correctAnswer": 0,
    "explanation": "Par le principe des tiroirs de Dirichlet, deux clés distinctes peuvent partager le même hash modulo la taille de la table.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q69",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Moyen",
    "question": "Comment la méthode du chaînage séparé (Separate Chaining) résout-elle les collisions de hachage ?",
    "options": [
      "Chaque compartiment de la table pointe vers une liste chaînée (ou un arbre) contenant tous les éléments en collision associés à cet index",
      "Elle efface l'ancien élément",
      "Elle agrandit le tableau de 1 case",
      "Elle recalcule un nouveau hash aléatoire"
    ],
    "choices": [
      "Chaque compartiment de la table pointe vers une liste chaînée (ou un arbre) contenant tous les éléments en collision associés à cet index",
      "Elle efface l'ancien élément",
      "Elle agrandit le tableau de 1 case",
      "Elle recalcule un nouveau hash aléatoire"
    ],
    "correctAnswer": 0,
    "explanation": "En chaînage séparé, les éléments en collision sont enfilés dans une liste chaînée attachée au compartiment.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q70",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que l'adressage ouvert (Open Addressing) pour la résolution de collisions dans une table de hachage ?",
    "options": [
      "Tous les éléments sont stockés directement dans le tableau principal ; en cas de collision, on sonde d'autres cases libres selon une séquence définie (sondage linéaire, quadratique ou double hachage)",
      "Une table accessible par Internet",
      "Une table sans mot de passe",
      "Une table sans limites de mémoire"
    ],
    "choices": [
      "Tous les éléments sont stockés directement dans le tableau principal ; en cas de collision, on sonde d'autres cases libres selon une séquence définie (sondage linéaire, quadratique ou double hachage)",
      "Une table accessible par Internet",
      "Une table sans mot de passe",
      "Une table sans limites de mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "L'adressage ouvert stocke tout dans le tableau contigu (pas de pointeurs externes) en cherchant la case vide suivante selon une formule de probing.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q71",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le facteur de charge (Load Factor $\\alpha = n / m$) d'une table de hachage et que déclenche son dépassement ?",
    "options": [
      "Le ratio du nombre d'éléments stockés $n$ sur la capacité totale $m$ ; son dépassement au-delà d'un seuil (typiquement 0.75) déclenche un redimensionnement (Rehashing) avec doublement de taille",
      "Le poids en mégaoctets de la table",
      "Le nombre de requêtes par seconde",
      "Le pourcentage de mémoire corrompue"
    ],
    "choices": [
      "Le ratio du nombre d'éléments stockés $n$ sur la capacité totale $m$ ; son dépassement au-delà d'un seuil (typiquement 0.75) déclenche un redimensionnement (Rehashing) avec doublement de taille",
      "Le poids en mégaoctets de la table",
      "Le nombre de requêtes par seconde",
      "Le pourcentage de mémoire corrompue"
    ],
    "correctAnswer": 0,
    "explanation": "Quand $\\alpha$ dépasse 0.75, le nombre de collisions augmente fortement. La table est alors réallouée avec une taille doublée et tous les éléments sont re-hachés.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q72",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le phénomène de grappage primaire (Primary Clustering) dans le sondage linéaire ?",
    "options": [
      "La formation de longues séquences ininterrompues de cases occupées adjacentes qui ralentit considérablement les recherches et aggrave exponentiellement les collisions",
      "Une fusion de deux serveurs",
      "Une corruption de pointeurs de chaînes",
      "Un virus informatique de table"
    ],
    "choices": [
      "La formation de longues séquences ininterrompues de cases occupées adjacentes qui ralentit considérablement les recherches et aggrave exponentiellement les collisions",
      "Une fusion de deux serveurs",
      "Une corruption de pointeurs de chaînes",
      "Un virus informatique de table"
    ],
    "correctAnswer": 0,
    "explanation": "Avec le sondage linéaire ($index+1$), les blocs occupés grossissent et attirent de plus en plus de collisions. On atténue ce phénomène avec le sondage quadratique ou le double hachage.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q73",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité dans le pire des cas d'une recherche dans une table de hachage naïve où toutes les clés subissent une collision sur la même case ?",
    "options": [
      "$O(n)$",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "choices": [
      "$O(n)$",
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Si toutes les clés génèrent le même hash, la table dégénère en une unique liste chaînée linéaire parcourue en $O(n)$ (attaque HashDoS).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q74",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un Filtre de Bloom (Bloom Filter) en algorithmique ?",
    "options": [
      "Une structure de données probabiliste compacte permettant de tester l'appartenance d'un élément avec zéro faux négatif mais avec un risque contrôlé de faux positifs",
      "Un compresseur de flux vidéo",
      "Un filtre de requêtes SQL",
      "Un antivirus heuristique"
    ],
    "choices": [
      "Une structure de données probabiliste compacte permettant de tester l'appartenance d'un élément avec zéro faux négatif mais avec un risque contrôlé de faux positifs",
      "Un compresseur de flux vidéo",
      "Un filtre de requêtes SQL",
      "Un antivirus heuristique"
    ],
    "correctAnswer": 0,
    "explanation": "Le filtre de Bloom répond soit 'l'élément n'est définitivement PAS présent' (100% garanti), soit 'l'élément est PEUT-ÊTRE présent', évitant des lectures disques inutiles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q75",
    "part": 5,
    "topic": "Recherche et Hachage",
    "difficulty": "Facile",
    "question": "Quelle est la complexité temporelle d'une recherche linéaire séquentielle dans un tableau non trié de taille $n$ ?",
    "options": [
      "$O(n)$",
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n \\log n)$"
    ],
    "choices": [
      "$O(n)$",
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n \\log n)$"
    ],
    "correctAnswer": 0,
    "explanation": "Sans structure ni tri, on doit examiner chaque élément du début à la fin dans le pire des cas, soit $n$ comparaisons.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q76",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Facile",
    "question": "Quelle est la différence entre une matrice d'adjacence et une liste d'adjacence pour représenter un graphe $G = (V, E)$ ?",
    "options": [
      "La matrice d'adjacence est un tableau 2D de taille $|V| \\times |V|$ consommant $O(|V|^2)$ de mémoire, tandis que les listes d'adjacence associent à chaque sommet la liste de ses voisins et consomment $O(|V| + |E|)$",
      "La matrice d'adjacence ne supporte pas les graphes orientés",
      "Les listes d'adjacence ne permettent pas de stocker des poids",
      "Il n'y a aucune différence de consommation mémoire"
    ],
    "choices": [
      "La matrice d'adjacence est un tableau 2D de taille $|V| \\times |V|$ consommant $O(|V|^2)$ de mémoire, tandis que les listes d'adjacence associent à chaque sommet la liste de ses voisins et consomment $O(|V| + |E|)$",
      "La matrice d'adjacence ne supporte pas les graphes orientés",
      "Les listes d'adjacence ne permettent pas de stocker des poids",
      "Il n'y a aucune différence de consommation mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "Pour les graphes peu denses (creux, $|E| \\ll |V|^2$), la liste d'adjacence est beaucoup plus économe en mémoire vive.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q77",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un graphe orienté (Digraph) ?",
    "options": [
      "Un graphe dont les arêtes possèdent un sens de parcours défini (arêtes dirigées de la source vers la destination)",
      "Un graphe aligné vers le nord",
      "Un graphe sans boucles",
      "Un graphe sans sommets isolés"
    ],
    "choices": [
      "Un graphe dont les arêtes possèdent un sens de parcours défini (arêtes dirigées de la source vers la destination)",
      "Un graphe aligné vers le nord",
      "Un graphe sans boucles",
      "Un graphe sans sommets isolés"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un graphe orienté, les liaisons sont des couples ordonnés $(u, v)$ : aller de $u$ à $v$ n'implique pas de pouvoir revenir de $v$ à $u$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q78",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité temporelle des parcours BFS et DFS sur un graphe représenté sous forme de listes d'adjacence ?",
    "options": [
      "$O(|V| + |E|)$",
      "$O(|V|^2)$",
      "$O(|E| \\log |V|)$",
      "$O(|V| \\times |E|)$"
    ],
    "choices": [
      "$O(|V| + |E|)$",
      "$O(|V|^2)$",
      "$O(|E| \\log |V|)$",
      "$O(|V| \\times |E|)$"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque sommet est visité une fois et chaque arête est examinée une fois (ou deux en non-orienté), d'où un temps linéaire en la taille du graphe $O(|V| + |E|)$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q79",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Moyen",
    "question": "Quel algorithme de parcours de graphe garantit de trouver le plus court chemin (en nombre d'arêtes) dans un graphe non pondéré ?",
    "options": [
      "Le parcours en largeur (BFS)",
      "Le parcours en profondeur (DFS)",
      "L'algorithme de Kruskal",
      "Le tri topologique"
    ],
    "choices": [
      "Le parcours en largeur (BFS)",
      "Le parcours en profondeur (DFS)",
      "L'algorithme de Kruskal",
      "Le tri topologique"
    ],
    "correctAnswer": 0,
    "explanation": "Le BFS explore le graphe par cercles concentriques de distance croissante ($d=0, 1, 2, \\dots$), découvrant tout sommet par le chemin le plus court en nombre de sauts.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q80",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un DAG (Directed Acyclic Graph) ?",
    "options": [
      "Un graphe orienté ne contenant aucun cycle (impossible de revenir à un sommet de départ en suivant le sens des flèches)",
      "Un graphe où tous les sommets ont le même degré",
      "Un arbre binaire de recherche complet",
      "Un graphe sans aucune arête"
    ],
    "choices": [
      "Un graphe orienté ne contenant aucun cycle (impossible de revenir à un sommet de départ en suivant le sens des flèches)",
      "Un graphe où tous les sommets ont le même degré",
      "Un arbre binaire de recherche complet",
      "Un graphe sans aucune arête"
    ],
    "correctAnswer": 0,
    "explanation": "Les DAG modélisent les dépendances de tâches (ex: compilation Makefile, build Docker, ordonnancement Airflow) et sont les seuls graphes admettant un tri topologique.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q81",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un tri topologique (Topological Sort) sur un DAG ?",
    "options": [
      "Un ordonnancement linéaire de tous les sommets tel que pour toute arête dirigée $(u, v)$, le sommet $u$ apparaisse avant $v$ dans la séquence",
      "Un tri par ordre croissant des identifiants",
      "Un calcul des coordonnées géographiques des nœuds",
      "La suppression des sommets isolés"
    ],
    "choices": [
      "Un ordonnancement linéaire de tous les sommets tel que pour toute arête dirigée $(u, v)$, le sommet $u$ apparaisse avant $v$ dans la séquence",
      "Un tri par ordre croissant des identifiants",
      "Un calcul des coordonnées géographiques des nœuds",
      "La suppression des sommets isolés"
    ],
    "correctAnswer": 0,
    "explanation": "Le tri topologique (algorithme de Kahn ou post-ordre inversé du DFS) résout les ordres d'exécution respectant toutes les contraintes de précédence.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q82",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un graphe complet $K_n$ à $n$ sommets ?",
    "options": [
      "Un graphe simple où chaque sommet est relié directement par une arête à tous les autres sommets du graphe (total de $n(n-1)/2$ arêtes)",
      "Un graphe qui remplit toute la RAM",
      "Un graphe sans racine",
      "Un graphe à composantes disjointes"
    ],
    "choices": [
      "Un graphe simple où chaque sommet est relié directement par une arête à tous les autres sommets du graphe (total de $n(n-1)/2$ arêtes)",
      "Un graphe qui remplit toute la RAM",
      "Un graphe sans racine",
      "Un graphe à composantes disjointes"
    ],
    "correctAnswer": 0,
    "explanation": "Dans $K_n$, tous les sommets sont mutuellement voisins. Le nombre d'arêtes est $\\binom{n}{2} = \\frac{n(n-1)}{2}$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q83",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un graphe biparti ?",
    "options": [
      "Un graphe dont l'ensemble des sommets peut être partitionné en deux sous-ensembles disjoints $U$ et $V$ tels qu'aucune arête ne relie deux sommets d'un même ensemble",
      "Un graphe composé de deux arbres distincts",
      "Un graphe dont toutes les arêtes ont un poids égal à 2",
      "Un graphe à deux dimensions"
    ],
    "choices": [
      "Un graphe dont l'ensemble des sommets peut être partitionné en deux sous-ensembles disjoints $U$ et $V$ tels qu'aucune arête ne relie deux sommets d'un même ensemble",
      "Un graphe composé de deux arbres distincts",
      "Un graphe dont toutes les arêtes ont un poids égal à 2",
      "Un graphe à deux dimensions"
    ],
    "correctAnswer": 0,
    "explanation": "Un graphe est biparti si et seulement s'il ne contient aucun cycle de longueur impaire (2-colorable).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q84",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Difficile",
    "question": "Comment détecter la présence d'un cycle dans un graphe orienté à l'aide d'un parcours DFS ?",
    "options": [
      "En détectant une arête arrière (Back-edge) pointant vers un sommet ancêtre actuellement en cours de visite dans la pile d'appels récursifs (sommet gris dans la convention 3 couleurs blanc/gris/noir)",
      "En comptant le nombre total d'arêtes",
      "En cherchant des feuilles sans enfants",
      "Ce n'est pas possible avec DFS"
    ],
    "choices": [
      "En détectant une arête arrière (Back-edge) pointant vers un sommet ancêtre actuellement en cours de visite dans la pile d'appels récursifs (sommet gris dans la convention 3 couleurs blanc/gris/noir)",
      "En comptant le nombre total d'arêtes",
      "En cherchant des feuilles sans enfants",
      "Ce n'est pas possible avec DFS"
    ],
    "correctAnswer": 0,
    "explanation": "Dans l'algorithme des trois couleurs, rencontrer un sommet 'gris' (visite entamée mais non terminée) trahit une boucle dans le graphe orienté.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q85",
    "part": 5,
    "topic": "Graphes et Parcours",
    "difficulty": "Moyen",
    "question": "Qu'appelle-t-on les composantes fortement connexes (SCC - Strongly Connected Components) dans un graphe orienté ?",
    "options": [
      "Les sous-graphes maximaux où il existe un chemin dirigé entre chaque paire de sommets dans les deux sens",
      "Les sommets ayant le plus grand degré",
      "Les arêtes les plus courtes",
      "Les composantes sans arêtes dirigées"
    ],
    "choices": [
      "Les sous-graphes maximaux où il existe un chemin dirigé entre chaque paire de sommets dans les deux sens",
      "Les sommets ayant le plus grand degré",
      "Les arêtes les plus courtes",
      "Les composantes sans arêtes dirigées"
    ],
    "correctAnswer": 0,
    "explanation": "Deux algorithmes célèbres les calculent en $O(|V| + |E|)$ : l'algorithme de Tarjan et l'algorithme de Kosaraju.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q86",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Facile",
    "question": "Quelle condition fondamentale impose l'algorithme de Dijkstra pour trouver les plus courts chemins depuis une source unique ?",
    "options": [
      "Tous les poids des arêtes doivent être strictement positifs ou nuls (aucun poids négatif)",
      "Le graphe doit être acyclique",
      "Le graphe doit être non orienté",
      "Le graphe doit avoir moins de 100 sommets"
    ],
    "choices": [
      "Tous les poids des arêtes doivent être strictement positifs ou nuls (aucun poids négatif)",
      "Le graphe doit être acyclique",
      "Le graphe doit être non orienté",
      "Le graphe doit avoir moins de 100 sommets"
    ],
    "correctAnswer": 0,
    "explanation": "Dijkstra est un algorithme glouton qui fige définitivement la distance minimale d'un sommet dès son extraction. La présence d'arêtes négatives invalide cette propriété.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q87",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité de l'algorithme de Dijkstra implémenté avec un tas binaire (Min-Heap / Priority Queue) ?",
    "options": [
      "$O((|V| + |E|) \\log |V|)$",
      "$O(|V|^2)$",
      "$O(|V|^3)$",
      "$O(|E|)$"
    ],
    "choices": [
      "$O((|V| + |E|) \\log |V|)$",
      "$O(|V|^2)$",
      "$O(|V|^3)$",
      "$O(|E|)$"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque sommet est extrait de la file ($|V| \\log |V|$) et chaque arête peut entraîner une relaxation avec mise à jour du tas ($|E| \\log |V|$).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q88",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Moyen",
    "question": "Quel algorithme permet de calculer les plus courts chemins depuis une source unique même en présence de poids d'arêtes négatifs, et détecte les cycles de poids négatif ?",
    "options": [
      "L'algorithme de Bellman-Ford",
      "L'algorithme de Dijkstra",
      "L'algorithme de Kruskal",
      "L'algorithme de Prim"
    ],
    "choices": [
      "L'algorithme de Bellman-Ford",
      "L'algorithme de Dijkstra",
      "L'algorithme de Kruskal",
      "L'algorithme de Prim"
    ],
    "correctAnswer": 0,
    "explanation": "Bellman-Ford relaxe toutes les arêtes $|V|-1$ fois en complexité $O(|V| \\cdot |E|)$. Une $|V|$-ième relaxation détecte tout cycle absorbant négatif.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q89",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Moyen",
    "question": "Quel algorithme calcule en $O(|V|^3)$ les plus courts chemins entre TOUTES les paires de sommets d'un graphe à l'aide de la programmation dynamique ?",
    "options": [
      "L'algorithme de Floyd-Warshall",
      "L'algorithme de Dijkstra",
      "L'algorithme A*",
      "L'algorithme de Tarjan"
    ],
    "choices": [
      "L'algorithme de Floyd-Warshall",
      "L'algorithme de Dijkstra",
      "L'algorithme A*",
      "L'algorithme de Tarjan"
    ],
    "correctAnswer": 0,
    "explanation": "Floyd-Warshall utilise une matrice de distances et 3 boucles imbriquées `for k, for i, for j` en testant si passer par le sommet intermédiaire $k$ raccourcit le chemin $i \\to j$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q90",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un Arbre Couvrant de Poids Minimal (MST - Minimum Spanning Tree) pour un graphe connexe non orienté et pondéré ?",
    "options": [
      "Un sous-ensemble d'arêtes qui relie tous les sommets entre eux sans former aucun cycle et dont la somme totale des poids d'arêtes est minimale",
      "L'arbre binaire le plus haut",
      "Le chemin le plus court reliant deux sommets",
      "Un arbre avec exactement 2 arêtes"
    ],
    "choices": [
      "Un sous-ensemble d'arêtes qui relie tous les sommets entre eux sans former aucun cycle et dont la somme totale des poids d'arêtes est minimale",
      "L'arbre binaire le plus haut",
      "Le chemin le plus court reliant deux sommets",
      "Un arbre avec exactement 2 arêtes"
    ],
    "correctAnswer": 0,
    "explanation": "Un MST connecte les $|V|$ sommets avec exactement $|V|-1$ arêtes à coût total minimal (ex: câblage réseau au coût plancher).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q91",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Moyen",
    "question": "Quelle structure de données est indispensable à l'algorithme de Kruskal pour vérifier en quasi-temps constant si l'ajout d'une arête crée un cycle ?",
    "options": [
      "Une structure Union-Find (Disjoint Set Union - DSU)",
      "Une pile LIFO",
      "Un tableau 2D",
      "Un arbre AVL"
    ],
    "choices": [
      "Une structure Union-Find (Disjoint Set Union - DSU)",
      "Une pile LIFO",
      "Un tableau 2D",
      "Un arbre AVL"
    ],
    "correctAnswer": 0,
    "explanation": "Kruskal trie les arêtes par poids croissant et utilise `find()` et `union()` avec compression de chemin pour fusionner les composantes sans former de cycle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q92",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Moyen",
    "question": "Quelle est la différence d'approche entre l'algorithme de Kruskal et l'algorithme de Prim pour trouver un MST ?",
    "options": [
      "Kruskal fait croître une forêt d'arbres en ajoutant globalement les arêtes les moins chères sans cycle, tandis que Prim fait croître un unique arbre connexe depuis un sommet de départ en étendant l'arête la moins chère connectée à l'arbre",
      "Prim ne fonctionne que sur les graphes orientés",
      "Kruskal est un algorithme de programmation dynamique",
      "Il n'y a aucune différence algorithmique"
    ],
    "choices": [
      "Kruskal fait croître une forêt d'arbres en ajoutant globalement les arêtes les moins chères sans cycle, tandis que Prim fait croître un unique arbre connexe depuis un sommet de départ en étendant l'arête la moins chère connectée à l'arbre",
      "Prim ne fonctionne que sur les graphes orientés",
      "Kruskal est un algorithme de programmation dynamique",
      "Il n'y a aucune différence algorithmique"
    ],
    "correctAnswer": 0,
    "explanation": "Kruskal traite les arêtes (orienté arêtes, idéal pour graphes creux). Prim fait croître un arbre sommet par sommet (idéal pour graphes denses avec tas de Fibonacci).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q93",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'algorithme de recherche A* (A-Star) ?",
    "options": [
      "Une extension heuristique de Dijkstra qui guide la recherche du plus court chemin en minimisant la fonction $f(n) = g(n) + h(n)$, où $g(n)$ est le coût réel depuis le départ et $h(n)$ une estimation heuristique admissible du coût jusqu'au but",
      "Un algorithme de compression sans perte",
      "Un protocole de routage satellite",
      "Un tri non comparatif"
    ],
    "choices": [
      "Une extension heuristique de Dijkstra qui guide la recherche du plus court chemin en minimisant la fonction $f(n) = g(n) + h(n)$, où $g(n)$ est le coût réel depuis le départ et $h(n)$ une estimation heuristique admissible du coût jusqu'au but",
      "Un algorithme de compression sans perte",
      "Un protocole de routage satellite",
      "Un tri non comparatif"
    ],
    "correctAnswer": 0,
    "explanation": "A* oriente intelligemment l'exploration spatiale (ex: GPS, jeux vidéo) vers la cible grâce à son heuristique admissible ($h(n) \\le$ coût réel restant).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q94",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Difficile",
    "question": "Quel théorème fondamental régit le calcul du flot maximal dans un réseau de transport (algorithmes de Ford-Fulkerson et Edmonds-Karp) ?",
    "options": [
      "Le théorème du Flot Maximal / Coupe Minimale (Max-Flow Min-Cut Theorem)",
      "Le théorème de Pythagore",
      "Le théorème de Bayes",
      "Le théorème de Gödel"
    ],
    "choices": [
      "Le théorème du Flot Maximal / Coupe Minimale (Max-Flow Min-Cut Theorem)",
      "Le théorème de Pythagore",
      "Le théorème de Bayes",
      "Le théorème de Gödel"
    ],
    "correctAnswer": 0,
    "explanation": "La valeur du flot maximal transférable d'une source $s$ à un puits $t$ est égale à la capacité minimale de l'ensemble des arêtes d'une coupe séparant $s$ et $t$.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q95",
    "part": 5,
    "topic": "Algorithmes de graphes",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'un circuit Eulérien dans un graphe ?",
    "options": [
      "Un cycle fermé passant par CHAQUE ARÊTE du graphe exactement une et une seule fois",
      "Un cycle passant par chaque sommet exactement une fois",
      "Un arbre binaire équilibré",
      "Un graphe sans sommets pairs"
    ],
    "choices": [
      "Un cycle fermé passant par CHAQUE ARÊTE du graphe exactement une et une seule fois",
      "Un cycle passant par chaque sommet exactement une fois",
      "Un arbre binaire équilibré",
      "Un graphe sans sommets pairs"
    ],
    "correctAnswer": 0,
    "explanation": "Problème des ponts de Königsberg (Euler 1736) : un graphe connexe admet un circuit eulérien si et seulement si tous ses sommets ont un degré pair. (À ne pas confondre avec le cycle Hamiltonien qui visite chaque sommet).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q96",
    "part": 5,
    "topic": "Paradigmes algorithmiques",
    "difficulty": "Facile",
    "question": "Quelles sont les trois étapes du paradigme 'Diviser pour régner' (Divide and Conquer) ?",
    "options": [
      "Diviser le problème en sous-problèmes plus petits, Régner en résolvant récursivement ces sous-problèmes, et Combiner leurs solutions pour former la solution globale",
      "Calculer, Sauvegarder, Afficher",
      "Allouer, Initialiser, Libérer",
      "Trier, Filtrer, Compter"
    ],
    "choices": [
      "Diviser le problème en sous-problèmes plus petits, Régner en résolvant récursivement ces sous-problèmes, et Combiner leurs solutions pour former la solution globale",
      "Calculer, Sauvegarder, Afficher",
      "Allouer, Initialiser, Libérer",
      "Trier, Filtrer, Compter"
    ],
    "correctAnswer": 0,
    "explanation": "Diviser pour régner décompose le problème (Divide), résout les sous-problèmes indépendants (Conquer), puis synthétise le résultat (Combine), comme dans MergeSort.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q97",
    "part": 5,
    "topic": "Paradigmes algorithmiques",
    "difficulty": "Moyen",
    "question": "Quelles sont les deux propriétés indispensables pour qu'un problème puisse être résolu efficacement par la Programmation Dynamique (Dynamic Programming) ?",
    "options": [
      "Sous-structure optimale (la solution optimale globale est composée de solutions optimales locales) et Chevauchement des sous-problèmes (les mêmes sous-problèmes sont résolus de multiples fois)",
      "Aléatoire et Indépendance",
      "Graphes orientés et absence de récursivité",
      "Variables globales et pointeurs null"
    ],
    "choices": [
      "Sous-structure optimale (la solution optimale globale est composée de solutions optimales locales) et Chevauchement des sous-problèmes (les mêmes sous-problèmes sont résolus de multiples fois)",
      "Aléatoire et Indépendance",
      "Graphes orientés et absence de récursivité",
      "Variables globales et pointeurs null"
    ],
    "correctAnswer": 0,
    "explanation": "La programmation dynamique résout chaque sous-problème une seule fois et stocke son résultat en cache (mémoïsation ou tabulation), évitant la redondance combinatoire exponentielle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q98",
    "part": 5,
    "topic": "Paradigmes algorithmiques",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre l'approche 'Top-Down avec Mémoïsation' et l'approche 'Bottom-Up avec Tabulation' en programmation dynamique ?",
    "options": [
      "L'approche Top-Down utilise la récursivité naturelle en mettant en cache les résultats déjà calculés dans une table, tandis que la Bottom-Up remplit itérativement une table de bas en haut en commençant par les cas de base",
      "Top-Down ne fonctionne qu'en assembleur",
      "Bottom-Up est exponentielle",
      "Il n'y a aucune différence d'exécution"
    ],
    "choices": [
      "L'approche Top-Down utilise la récursivité naturelle en mettant en cache les résultats déjà calculés dans une table, tandis que la Bottom-Up remplit itérativement une table de bas en haut en commençant par les cas de base",
      "Top-Down ne fonctionne qu'en assembleur",
      "Bottom-Up est exponentielle",
      "Il n'y a aucune différence d'exécution"
    ],
    "correctAnswer": 0,
    "explanation": "Top-Down = récursif + cache (memo). Bottom-Up = itératif dans un tableau (table), évitant le débordement de pile d'appels.",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q99",
    "part": 5,
    "topic": "Paradigmes algorithmiques",
    "difficulty": "Facile",
    "question": "Quelle est la stratégie d'un algorithme Glouton (Greedy Algorithm) ?",
    "options": [
      "Faire à chaque étape le choix local qui semble le meilleur et le plus avantageux dans l'immédiat, sans jamais revenir en arrière sur les décisions passées",
      "Explorer toutes les solutions possibles en parallèle",
      "Choisir un nombre aléatoire",
      "Résoudre le problème par récurrence ascendante"
    ],
    "choices": [
      "Faire à chaque étape le choix local qui semble le meilleur et le plus avantageux dans l'immédiat, sans jamais revenir en arrière sur les décisions passées",
      "Explorer toutes les solutions possibles en parallèle",
      "Choisir un nombre aléatoire",
      "Résoudre le problème par récurrence ascendante"
    ],
    "correctAnswer": 0,
    "explanation": "L'algorithme glouton fait le choix optimal myope à court terme. Il ne trouve pas toujours l'optimum global, sauf si le problème possède la propriété du choix glouton (ex: Huffman, Kruskal, Dijkstra).",
    "source": "Conforme au programme"
  },
  {
    "id": "p5-q100",
    "part": 5,
    "topic": "Paradigmes algorithmiques",
    "difficulty": "Moyen",
    "question": "Dans le problème du sac à dos (Knapsack Problem), quelle variante peut être résolue exactement par un algorithme glouton ?",
    "options": [
      "Le sac à dos fractionnaire (Fractional Knapsack), où l'on peut prendre des fractions d'objets (tri par ratio valeur/poids)",
      "Le sac à dos 0/1 (0-1 Knapsack, où chaque objet est soit pris en entier, soit rejeté)",
      "Le sac à dos à contraintes multiples",
      "Aucune variante"
    ],
    "choices": [
      "Le sac à dos fractionnaire (Fractional Knapsack), où l'on peut prendre des fractions d'objets (tri par ratio valeur/poids)",
      "Le sac à dos 0/1 (0-1 Knapsack, où chaque objet est soit pris en entier, soit rejeté)",
      "Le sac à dos à contraintes multiples",
      "Aucune variante"
    ],
    "correctAnswer": 0,
    "explanation": "Le sac à dos fractionnaire se résout de façon gloutonne en $O(n \\log n)$. En revanche, le sac à dos 0/1 est NP-difficile et requiert la programmation dynamique en temps pseudo-polynomial $O(nW)$.",
    "source": "Conforme au programme"
  }
];
