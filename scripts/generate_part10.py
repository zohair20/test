#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# Part 10 questions (100 total)
# 1-25: Fondements Théoriques, Turing & Calculabilité
# 26-50: Théorie des Langages Formels & Compilation
# 51-75: Codage de l'Information, Signaux & Paradigmes
# 76-100: Virtualisation, Cloud Computing & Technologies Émergentes

p10_questions = [
    # 1-25 Fondements Théoriques, Turing & Calculabilité
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Facile",
        "question": "Qui est considéré comme le père de l'informatique théorique pour avoir formalisé les concepts d'algorithme et de calcul avec son modèle de machine abstraite en 1936 ?",
        "choices": ["Alan Turing", "John von Neumann", "Claude Shannon", "Blaise Pascal"],
        "correctAnswer": 0,
        "explanation": "Alan Turing a introduit la Machine de Turing en 1936, posant les bases mathématiques universelles de la calculabilité et de la théorie des ordinateurs.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Facile",
        "question": "Quels sont les composants de base constituant une Machine de Turing standard ?",
        "choices": [
            "Un ruban infini divisé en cases, une tête de lecture/écriture mobile, un registre d'états et une table de transitions",
            "Un processeur binaire, un bus de données et une mémoire cache L1",
            "Un écran cathodique, un clavier mécanique et une souris optique",
            "Une pile d'exécution LIFO et une file d'attente FIFO"
        ],
        "correctAnswer": 0,
        "explanation": "Le modèle mathématique de Turing comprend un ruban infini discret, une tête lisant et modifiant un symbole par étape, et un ensemble fini d'états régi par une fonction de transition.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Qu'énonce la célèbre Thèse de Church-Turing ?",
        "choices": [
            "Tout problème pouvant être résolu par un algorithme effectif au sens intuitif peut être calculé par une Machine de Turing (ou par le Lambda-calcul)",
            "Tous les ordinateurs ont une vitesse d'horloge limitée à la vitesse de la lumière",
            "Un programme ne peut pas dépasser la taille de la mémoire physique disponible",
            "Les machines de Turing non-déterministes peuvent résoudre les problèmes indécidables"
        ],
        "correctAnswer": 0,
        "explanation": "La thèse de Church-Turing postule l'équivalence entre la notion intuitive de fonction calculable et la définition formelle donnée par les machines de Turing ou le lambda-calcul d'Alonzo Church.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Qu'est-ce qu'une Machine de Turing Universelle (MTU) ?",
        "choices": [
            "Une Machine de Turing capable de simuler le comportement de n'importe quelle autre Machine de Turing en prenant sa description et son entrée en paramètre sur son ruban",
            "Une machine construite avec des pièces mécaniques universelles",
            "Une machine capable de résoudre des problèmes indécidables",
            "Le premier supercalculateur quantique opérationnel"
        ],
        "correctAnswer": 0,
        "explanation": "La MTU préfigure l'ordinateur moderne à programme enregistré : un matériel unique programmable capable d'exécuter n'importe quel code fourni sous forme de données.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le célèbre 'Problème de l'arrêt' (Halting Problem) formulé et résolu par Alan Turing en 1936 ?",
        "choices": [
            "Le problème consistant à déterminer si un programme informatique arbitraire s'arrêtera un jour ou tournera indéfiniment sur une entrée donnée ; Turing a prouvé qu'il est indécidable",
            "Le dysfonctionnement mécanique du ruban d'une machine de Turing",
            "L'interruption brutale d'un système d'exploitation par manque d'électricité",
            "Un problème polynomial résoluble en temps O(n log n)"
        ],
        "correctAnswer": 0,
        "explanation": "Turing a démontré par l'absurde et par un raisonnement diagonal qu'aucun algorithme universel ne peut décider à coup sûr si un programme quelconque terminera son exécution.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Quelle méthode mathématique classique Alan Turing a-t-il employée pour démontrer l'indécidabilité du problème de l'arrêt ?",
        "choices": [
            "Le raisonnement par l'absurde combiné à l'argument de la diagonale de Cantor",
            "La méthode du simplexe de Dantzig",
            "L'intégration numérique par la méthode des trapèzes",
            "La transformée de Fourier rapide"
        ],
        "correctAnswer": 0,
        "explanation": "Inspiré de l'argument diagonal de Georg Cantor sur l'indénombrabilité des réels, Turing construit un programme contradictoire inversant le verdict d'un oracle de terminaison hypothétique.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Difficile",
        "question": "Qu'énonce le Théorème de Rice en informatique théorique ?",
        "choices": [
            "Toute propriété sémantique (non-triviale) relative au comportement fonctionnel calculé par un programme est indécidable",
            "Le nombre d'états d'un automate fini est toujours impair",
            "Les algorithmes récursifs consomment toujours deux fois plus de mémoire que les itératifs",
            "La complexité minimale d'un tri par comparaison est O(n log n)"
        ],
        "correctAnswer": 0,
        "explanation": "Le théorème de Rice généralise l'indécidabilité de l'arrêt : il est impossible de décider automatiquement si un programme calcule la fonction nulle, s'il produit des erreurs, etc.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Difficile",
        "question": "Qu'est-ce que le Problème de Correspondance de Post (PCP) et quel est son statut de calculabilité ?",
        "choices": [
            "Un jeu de dominos textuels avec paires de mots haut/bas ; il a été prouvé indécidable par Emil Post",
            "Le calcul de la distance minimale parcourue par un facteur ; il est résoluble en temps polynomial",
            "L'attribution automatique d'adresses IP par un protocole de routage",
            "Un algorithme d'ordonnancement de paquets réseau dans un routeur"
        ],
        "correctAnswer": 0,
        "explanation": "Le PCP consiste à trouver une suite d'indices de dominos concaténant la même chaîne en haut et en bas. Post a démontré qu'il est indécidable, servant de base à de nombreuses réductions.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Facile",
        "question": "Comment est définie la classe de complexité P en informatique théorique ?",
        "choices": [
            "L'ensemble des problèmes de décision qui peuvent être résolus par une Machine de Turing déterministe en un temps borné par un polynôme de la taille de l'entrée (temps polynomial)",
            "L'ensemble des programmes écrits en langage Python",
            "Les problèmes nécessitant une quantité infinie de mémoire vive",
            "Les algorithmes qui ne comportent aucune boucle imbriquée"
        ],
        "correctAnswer": 0,
        "explanation": "La classe P regroupe les problèmes dits 'traitables' ou efficacement calculables, dont le temps d'exécution dans le pire des cas est majoré par O(n^k) pour une constante k.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Moyen",
        "question": "Comment est formellement définie la classe de complexité NP (Non-deterministic Polynomial time) ?",
        "choices": [
            "L'ensemble des problèmes de décision dont une solution candidate (certificat) peut être vérifiée en temps polynomial par une Machine de Turing déterministe",
            "L'ensemble des problèmes non-résolubles (Non-Polynomial / Impossibles)",
            "Les problèmes nécessitant impérativement un processeur graphique (GPU)",
            "Les algorithmes s'exécutant en temps exponentiel uniquement"
        ],
        "correctAnswer": 0,
        "explanation": "NP ne signifie pas 'Non-Polynomial' mais 'Non-déterministe Polynomial' : trouver la solution peut être difficile, mais vérifier la validité d'une preuve fournie se fait en temps polynomial.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Moyen",
        "question": "Quelle est la signification de la célèbre question ouverte du millénaire 'P = NP ?' ?",
        "choices": [
            "Déterminer si tout problème dont la solution peut être rapidement vérifiée en temps polynomial peut également être résolu rapidement en temps polynomial",
            "Savoir si la mémoire vive peut remplacer définitivement le disque dur",
            "Vérifier si le nombre Pi possède une suite finie de décimales",
            "Déterminer si les ordinateurs quantiques peuvent voyager dans le temps"
        ],
        "correctAnswer": 0,
        "explanation": "Ce problème majeur de la science moderne demande si l'intelligence de la découverte (trouver une aiguille dans une botte de foin) est intrinsèquement plus coûteuse que la vérification.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Difficile",
        "question": "Qu'est-ce qu'une réduction polynomiale au sens de Karp (Many-One reduction, notée A ≤p B) ?",
        "choices": [
            "Une fonction calculable en temps polynomial transformant toute instance de problème x de A en une instance f(x) de B telle que x est acceptée par A si et seulement si f(x) est acceptée par B",
            "Une division de la taille des données par deux à chaque itération",
            "La compression gzip d'un fichier source avant exécution",
            "L'élimination des variables inutilisées par le compilateur"
        ],
        "correctAnswer": 0,
        "explanation": "La réduction polynomiale permet de transférer la difficulté d'un problème à un autre : si A se réduit à B en temps polynomial et que B est facile (dans P), alors A est également dans P.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Moyen",
        "question": "Quelles sont les deux conditions indispensables pour qu'un problème de décision soit qualifié de 'NP-complet' ?",
        "choices": [
            "Le problème doit appartenir à la classe NP ET être NP-difficile (tout problème de NP doit pouvoir s'y réduire en temps polynomial)",
            "Le problème doit être dans P et s'exécuter en moins de 1 milliseconde",
            "Le problème doit posséder un nombre infini de solutions entières",
            "Le problème doit être indécidable au sens de Turing"
        ],
        "correctAnswer": 0,
        "explanation": "Les problèmes NP-complets sont les problèmes les plus durs de NP. Si un seul d'entre eux pouvait être résolu en temps polynomial, alors tous les problèmes de NP seraient dans P (P=NP).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Difficile",
        "question": "Qu'énonce le fondamental Théorème de Cook-Levin (1971) ?",
        "choices": [
            "Le problème de satisfaisabilité booléenne (SAT) est NP-complet, constituant le tout premier problème formellement démontré comme tel",
            "La vitesse des microprocesseurs double tous les 18 mois",
            "Tout graphe planaire peut être colorié avec au plus quatre couleurs",
            "La machine de Turing probabiliste est strictement supérieure à la machine quantique"
        ],
        "correctAnswer": 0,
        "explanation": "Stephen Cook et Leonid Levin ont prouvé indépendamment que toute exécution de Machine de Turing non-déterministe polynomiale peut s'encoder sous forme d'une formule SAT propositionnelle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Moyen",
        "question": "Lequel des problèmes suivants est un problème NP-complet classique renommé ?",
        "choices": [
            "Le problème du Voyageur de Commerce (version décisionnelle TSP)",
            "Le tri par fusion (Merge Sort)",
            "La recherche du plus court chemin avec Dijkstra (poids positifs)",
            "Le calcul du déterminant d'une matrice carrée"
        ],
        "correctAnswer": 0,
        "explanation": "Le problème du voyageur de commerce (TSP), la Clique, le Sac à dos (Knapsack) et le problème du Sommet Couvrant (Vertex Cover) sont des problèmes NP-complets emblématiques de la liste de Karp.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Complexité",
        "difficulty": "Moyen",
        "question": "Quelle est la différence fondamentale entre les classes 'NP-complet' et 'NP-difficile' (NP-hard) ?",
        "choices": [
            "Un problème NP-difficile n'a pas l'obligation d'appartenir à NP (il peut même être un problème d'optimisation ou être indécidable, comme le problème de l'arrêt)",
            "Les problèmes NP-difficiles sont toujours plus faciles que les NP-complets",
            "Les problèmes NP-difficiles sont résolus par des heuristiques déterministes en O(n)",
            "Il n'y a aucune différence, ce sont deux termes strictement synonymes"
        ],
        "correctAnswer": 0,
        "explanation": "Tout problème de NP se réduit à un problème NP-difficile, mais ce dernier n'a pas besoin d'être un problème de décision dans NP (ex: TSP optimisation, problème de l'arrêt).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Facile",
        "question": "Qui a introduit en 1948 la théorie mathématique de la communication et fondé la Théorie de l'Information ?",
        "choices": ["Claude Shannon", "Norbert Wiener", "John McCarthy", "Tim Berners-Lee"],
        "correctAnswer": 0,
        "explanation": "Claude Shannon a publié 'A Mathematical Theory of Communication' en 1948, définissant le bit comme unité fondamentale d'information et introduisant l'entropie d'une source.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Comment est définie l'Entropie de Shannon H(X) d'une source discrète de symboles ?",
        "choices": [
            "H(X) = - ∑ p(x) log2(p(x)), mesurant la quantité moyenne d'incertitude ou d'information produite par la source",
            "H(X) = ∑ p(x)^2, calculant la variance du signal",
            "H(X) = log2(N), correspondant au nombre de transistors",
            "H(X) = Vitesse du signal / Longueur d'onde"
        ],
        "correctAnswer": 0,
        "explanation": "L'entropie de Shannon quantifie en bits l'information moyenne (ou l'imprévisibilité) délivrée par chaque symbole émis selon sa distribution de probabilité.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Difficile",
        "question": "Qu'est-ce que la Complexité de Kolmogorov (ou complexité algorithmique) d'une chaîne de caractères ?",
        "choices": [
            "La longueur en bits du plus court programme informatique capable de générer cette chaîne et de s'arrêter",
            "Le nombre d'octets occupés sur le disque dur après compression zip",
            "Le temps nécessaire pour afficher la chaîne sur un terminal",
            "Le nombre de voyelles contenues dans le texte"
        ],
        "correctAnswer": 0,
        "explanation": "La complexité de Kolmogorov mesure le contenu intrinsèque d'information d'un objet. Une chaîne aléatoire incompressée a une complexité proche de sa propre longueur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Difficile",
        "question": "La fonction calculant la complexité de Kolmogorov d'une chaîne arbitraire est-elle calculable ?",
        "choices": [
            "Non, elle est fondamentalement non-calculable (indécidable), car cela impliquerait de résoudre le problème de l'arrêt",
            "Oui, en utilisant l'algorithme de Huffman",
            "Oui, en exécutant un analyseur LALR(1)",
            "Oui, en temps O(n^2)"
        ],
        "correctAnswer": 0,
        "explanation": "Prouver qu'aucun programme plus court ne peut générer une chaîne donnée conduirait à tester une infinité de programmes sans savoir s'ils s'arrêtent, ce qui est indécidable.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Quelle distinction formelle sépare un langage 'décidable' (récursif) d'un langage 'semi-décidable' (récursivement énumérable) ?",
        "choices": [
            "Pour un langage décidable, la Machine de Turing s'arrête toujours (en acceptant ou rejetant) ; pour un semi-décidable, elle peut boucler indéfiniment si le mot n'appartient pas au langage",
            "Les langages décidables ne contiennent que des chiffres binaires",
            "Les langages semi-décidables s'exécutent en deux fois moins de temps",
            "Il n'existe aucune différence théorique entre les deux"
        ],
        "correctAnswer": 0,
        "explanation": "Un langage est semi-décidable (RE) si une MT accepte tout mot du langage, mais peut ne jamais s'arrêter pour un mot hors du langage. Un langage décidable (R) garantit toujours la terminaison.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Si un langage L et son complémentaire L_barre sont tous les deux récursivement énumérables (semi-décidables), que peut-on en déduire sur L ?",
        "choices": [
            "Le langage L est récursif (décidable)",
            "Le langage L est obligatoirement indécidable",
            "Le langage L est un langage régulier de type 3",
            "Le langage L ne contient aucun mot vide"
        ],
        "correctAnswer": 0,
        "explanation": "En exécutant en parallèle (en entrelacement d'étapes) les deux semi-décideurs pour L et son complémentaire, l'un des deux s'arrêtera obligatoirement, formant un algorithme décidant L.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Quel problème célèbre est résolu par l'algorithme glouton de Kruskal ou Prim en temps quasi-linéaire (dans P) ?",
        "choices": [
            "L'Arbre Couvrant de Poids Minimal (Minimum Spanning Tree - MST)",
            "Le problème du circuit Hamiltonien",
            "La 3-coloration de graphes quelconques",
            "La factorisation de grands nombres RSA"
        ],
        "correctAnswer": 0,
        "explanation": "La recherche d'un arbre couvrant de poids minimal est un problème classique d'optimisation appartenant à la classe P, résolu efficacement en O(E log V) par Kruskal ou Prim.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Facile",
        "question": "Quelle est l'architecture fondatrice de John von Neumann (1945) caractérisant la très grande majorité des ordinateurs actuels ?",
        "choices": [
            "Une architecture où les instructions de programme et les données partagent le même espace mémoire physique et les mêmes bus de transfert",
            "Une architecture où le processeur n'utilise aucun registre interne",
            "Un ordinateur mécanique fonctionnant avec des roues dentées",
            "Une architecture séparant strictement les mémoires physiques de données et de code"
        ],
        "correctAnswer": 0,
        "explanation": "L'architecture Von Neumann repose sur l'unité centrale (ALU + registres + contrôle) et une mémoire unique contenant à la fois les programmes et les données (contrairement à l'architecture Harvard).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie de la Calculabilité",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le 'Goulot d'étranglement de von Neumann' (Von Neumann Bottleneck) ?",
        "choices": [
            "La limitation du débit global de traitement causée par le partage d'un bus unique entre le processeur et la mémoire, le CPU étant beaucoup plus rapide que les accès mémoire",
            "La surchauffe thermique du bloc d'alimentation électrique",
            "L'impossibilité d'afficher des images en couleur sur l'écran",
            "La lenteur des disques durs à plateaux rotatifs"
        ],
        "correctAnswer": 0,
        "explanation": "Le goulot d'étranglement de von Neumann désigne le retard provoqué par le va-et-vient continu des données et instructions sur un bus de bande passante finie entre le CPU et la RAM.",
        "source": "Ancien examen"
    },

    # 26-50 Théorie des Langages Formels & Compilation
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Facile",
        "question": "Dans la hiérarchie de Chomsky, quelle classe d'automates abstraits reconnaît les Langages Réguliers (Type 3) ?",
        "choices": [
            "Les Automates Finis déterministes et non-déterministes (DFA / NFA)",
            "Les Automates à Pile (Pushdown Automata)",
            "Les Automates Linéairement Bornés (LBA)",
            "Les Machines de Turing avec mémoire infinie"
        ],
        "correctAnswer": 0,
        "explanation": "Les langages réguliers (type 3) sont décrits par des expressions rationnelles et reconnus par des automates finis (DFA/NFA) sans mémoire auxiliaire.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Facile",
        "question": "Quel type de mémoire auxiliaire distingue un Automate à Pile (Pushdown Automaton - PDA) d'un automate à états finis classique ?",
        "choices": [
            "Une mémoire de type pile LIFO (Last-In, First-Out)",
            "Une mémoire à accès direct adressable aléatoirement (RAM)",
            "Une file d'attente FIFO infinie",
            "Une mémoire flash persistante"
        ],
        "correctAnswer": 0,
        "explanation": "L'automate à pile dispose d'une pile LIFO non bornée, lui conférant la puissance nécessaire pour compter et vérifier des structures imbriquées (ex: parenthèses équilibrées).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Moyen",
        "question": "Le langage L = { a^n b^n | n ≥ 0 } est-il un langage régulier reconnu par un automate fini ?",
        "choices": [
            "Non, car un automate fini possède un nombre fixe d'états et ne peut pas compter un nombre arbitrairement grand de 'a' pour le comparer au nombre de 'b'",
            "Oui, car il s'écrit sous forme d'expression régulière (ab)*",
            "Oui, tout langage fini ou infini est régulier",
            "Non, c'est un langage de type 0 qui requiert une machine de Turing"
        ],
        "correctAnswer": 0,
        "explanation": "L = {a^n b^n} est le contre-exemple classique de langage non régulier (démontré par le lemme de l'étoile). C'est en revanche un langage non-contextuel (type 2).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Moyen",
        "question": "À quoi sert le Lemme de l'Étoile (Pumping Lemma) pour les langages réguliers ?",
        "choices": [
            "À prouver par l'absurde qu'un langage donné N'EST PAS régulier en montrant qu'il ne satisfait pas la condition de pompage",
            "À minimiser le nombre d'états d'un automate fini en temps O(n log n)",
            "À convertir automatiquement une grammaire en code binaire",
            "À prouver qu'un programme récursif termine sans débordement de pile"
        ],
        "correctAnswer": 0,
        "explanation": "Le lemme de l'étoile établit une propriété nécessaire satisfaite par tout langage régulier. Si un langage viole cette propriété, il est prouvé non-régulier.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Moyen",
        "question": "Les langages réguliers sont-ils clos par les opérations d'Union, d'Intersection et de Complémentation ?",
        "choices": [
            "Oui, ils sont clos par l'union, l'intersection, la complémentation, la concaténation et l'étoile de Kleene (ils forment une algèbre booléenne)",
            "Non, ils ne sont clos que par l'union",
            "Ils sont clos par union et intersection mais pas par complémentation",
            "Non, aucune opération n'est close pour les automates finis"
        ],
        "correctAnswer": 0,
        "explanation": "La classe des langages réguliers jouit de propriétés de clôture remarquables sous toutes les opérations ensemblistes et rationnelles standard.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Difficile",
        "question": "Les langages non-contextuels (Context-Free Languages, Type 2) sont-ils clos par Intersection et Complémentation ?",
        "choices": [
            "Non, ils ne sont clos NI par intersection NI par complémentation",
            "Oui, ils sont clos sous toutes les opérations comme les langages réguliers",
            "Ils sont clos par intersection mais pas par union",
            "Ils sont clos uniquement par complémentation"
        ],
        "correctAnswer": 0,
        "explanation": "L'intersection de deux langages algébriques peut ne plus être algébrique (ex: {a^n b^n c^m} ∩ {a^m b^n c^n} = {a^n b^n c^n} qui est contextuel de type 1).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Moyen",
        "question": "Quel algorithme classique permet de convertir un Automate Fini Non-Déterministe (NFA) en un Automate Fini Déterministe (DFA) équivalent ?",
        "choices": [
            "La construction par sous-ensembles (Subset Construction / Powerset Construction)",
            "L'algorithme de Dijkstra",
            "L'algorithme de Bellman-Ford",
            "Le tri topologique de Kahn"
        ],
        "correctAnswer": 0,
        "explanation": "L'algorithme des sous-ensembles associe chaque état du DFA à un ensemble d'états atteignables simultanément dans le NFA (avec une complexité au pire de 2^N états).",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Difficile",
        "question": "Qu'est-ce qu'une grammaire sous Forme Normale de Chomsky (CNF) ?",
        "choices": [
            "Une grammaire non-contextuelle dont toutes les règles de production sont de la forme A → BC (deux non-terminaux) ou A → a (un terminal)",
            "Une grammaire sans lettres minuscules",
            "Une grammaire dont les règles sont triées par ordre alphabétique",
            "Une grammaire ne contenant aucune récursion"
        ],
        "correctAnswer": 0,
        "explanation": "La forme normale de Chomsky standardise les productions binaires (A → BC) ou terminales (A → a), ce qui est le prérequis de l'algorithme d'analyse CYK.",
        "source": "Ancien examen"
    },
    {
        "topic": "Théorie des Langages & Automates",
        "difficulty": "Difficile",
        "question": "Quel algorithme de programmation dynamique décide en temps O(n³ · |G|) si une chaîne de longueur n est engendrée par une grammaire en forme normale de Chomsky ?",
        "choices": [
            "L'algorithme CYK (Cocke-Younger-Kasami)",
            "L'algorithme A*",
            "L'algorithme de Floyd-Warshall",
            "L'algorithme de Viterbi"
        ],
        "correctAnswer": 0,
        "explanation": "L'algorithme CYK remplit une table triangulaire en combinant par programmation dynamique les sous-chaînes pour décider l'appartenance à un langage algébrique quelconque.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Facile",
        "question": "Quel est le rôle principal de la phase d'Analyse Lexicale (Scanner) dans un compilateur moderne ?",
        "choices": [
            "Transformer le flux continu de caractères du code source en un flux ordonné d'unités lexicales significatives appelées 'Tokens'",
            "Optimiser l'allocation des registres matériels du microprocesseur",
            "Vérifier la compatibilité des types d'affectation",
            "Générer le binaire exécutable au format ELF"
        ],
        "correctAnswer": 0,
        "explanation": "L'analyseur lexical (ex: Flex, Lex) élimine les espaces et commentaires et regroupe les caractères en tokens typés (mots-clés, identifiants, constantes littérales).",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Facile",
        "question": "Quelle est la différence fondamentale entre un Arbre Syntaxique Abstrait (AST) et un Arbre de Dérivation Concret (Parse Tree) ?",
        "choices": [
            "L'AST élimine les détails syntaxiques concrets superflus (parenthèses, points-virgules, règles intermédiaires) pour ne conserver que la structure logique opératoire",
            "L'AST ne contient que des valeurs binaires 0 et 1",
            "L'arbre de dérivation concret est généré après la phase d'optimisation",
            "L'AST est uniquement utilisé par les interpréteurs et jamais par les compilateurs"
        ],
        "correctAnswer": 0,
        "explanation": "Le Parse Tree représente chaque dérivation formelle de la grammaire avec tous ses symboles terminaux. L'AST condense le programme en nœuds d'expressions et d'instructions essentiels.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Que signifie la désignation d'un analyseur syntaxique 'LL(1)' ?",
        "choices": [
            "Lecture de gauche à droite (Left-to-right), Dérivation la plus à gauche (Leftmost derivation), avec 1 jeton d'anticipation (Lookahead)",
            "Langage Linéaire avec 1 seul registre CPU",
            "Logique Lexicale exécutée en 1 milliseconde",
            "Low-Level analyseur avec 1 pile LIFO"
        ],
        "correctAnswer": 0,
        "explanation": "LL(1) est un analyseur descendant prédictif scannant le code de gauche à droite, développant la dérivation gauche, en décidant quelle règle appliquer grâce à 1 token d'avance.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Quelle transformation syntaxique est indispensable sur une grammaire avant de construire un analyseur descendant récursif LL(1) ?",
        "choices": [
            "L'élimination de la récursion gauche (directe et indirecte) et la factorisation à gauche",
            "La conversion de tous les identifiants en majuscules",
            "L'ajout obligatoire de balises XML",
            "La suppression de toutes les fonctions récursives du code source"
        ],
        "correctAnswer": 0,
        "explanation": "La récursion gauche (ex: A → A α) entraîne une boucle infinie dans un analyseur descendant, nécessitant sa transformation mathématique en récursion droite équivalente.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Que signifie la désignation d'un analyseur syntaxique 'LR(1)' ?",
        "choices": [
            "Lecture de gauche à droite (Left-to-right), Dérivation la plus à droite inversée (Reverse Rightmost derivation), avec 1 jeton d'anticipation",
            "Liaison Réseau avec 1 routeur",
            "Langage Récursif de niveau 1",
            "Low-level Register allocator avec 1 bit"
        ],
        "correctAnswer": 0,
        "explanation": "LR(1) est un analyseur ascendant puissant de type décalage-réduction (shift-reduce) qui reconstruit l'arbre du bas vers le haut en inversant une dérivation droite.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Quels sont les deux types de conflits qui peuvent survenir dans la table d'action d'un analyseur ascendant LR(0) ou SLR(1) ?",
        "choices": [
            "Le conflit Décalage-Réduction (Shift-Reduce) et le conflit Réduction-Réduction (Reduce-Reduce)",
            "Le conflit Entrée-Sortie et le conflit Lecture-Écriture",
            "Le conflit Client-Serveur et le conflit Pile-Tas",
            "Le conflit Mémoire-Disque et le conflit CPU-GPU"
        ],
        "correctAnswer": 0,
        "explanation": "Un conflit Shift-Reduce survient quand l'automate ne sait s'il doit décaler le token ou réduire la règle ; Reduce-Reduce survient lorsque deux réductions concurrentes sont applicables.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Difficile",
        "question": "Pourquoi les générateurs d'analyseurs syntaxiques populaires comme Yacc et Bison utilisent-ils l'algorithme LALR(1) plutôt que le canonique LR(1) ?",
        "choices": [
            "LALR(1) fusionne les états LR(1) ayant le même cœur LR(0), réduisant considérablement la taille de la table de transition tout en conservant une grande puissance d'analyse",
            "LALR(1) est incapable de parser des expressions mathématiques",
            "Canonical LR(1) ne supporte pas les commentaires C",
            "LALR(1) ne nécessite aucun token de lookahead"
        ],
        "correctAnswer": 0,
        "explanation": "Une table LR(1) canonique peut comporter des dizaines de milliers d'états. En fusionnant les états au cœur identique, LALR(1) atteint la compacité d'une table LR(0) sans perte critique.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Quelle est la tâche principale de la phase d'Analyse Sémantique dans la chaîne de compilation ?",
        "choices": [
            "Vérifier la cohérence des types (Type Checking), la déclaration préalable des identifiants et la résolution de portée des variables",
            "Traduire le code source en instructions assembleur x86",
            "Supprimer les commentaires et tabulations",
            "Calculer la signature cryptographique de l'exécutable"
        ],
        "correctAnswer": 0,
        "explanation": "L'analyse sémantique s'appuie sur la table des symboles pour s'assurer que les opérations ont un sens (ex: ne pas additionner une fonction et un entier, vérifier l'existence d'une variable).",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Dans les représentations intermédiaires (IR) de compilateurs, qu'est-ce que la forme SSA (Static Single Assignment) ?",
        "choices": [
            "Une forme intermédiaire où chaque variable est assignée exactement une seule fois et définie formellement avant toute utilisation",
            "Un programme ne contenant aucune variable locale",
            "Une architecture de processeur n'ayant qu'un seul cœur",
            "Un fichier source binaire non modifiable"
        ],
        "correctAnswer": 0,
        "explanation": "En SSA (utilisé par GCC et LLVM), chaque assignation crée une nouvelle version indexée (ex: x1, x2), simplifiant radicalement la détection de code mort et la propagation de constantes.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Difficile",
        "question": "En représentation SSA, à quoi sert une fonction 'phi' (φ-node) insérée aux points de jonction du graphe de flot de contrôle ?",
        "choices": [
            "À fusionner les différentes versions d'une même variable provenant de branches divergentes (ex: branche 'if' et branche 'else') selon le chemin emprunté à l'exécution",
            "À calculer le nombre d'or dans les calculs flottants",
            "À allouer un bloc de mémoire sur le tas",
            "À signaler une fin anormale de programme"
        ],
        "correctAnswer": 0,
        "explanation": "Quand deux chemins de contrôle convergent, la fonction phi choisit dynamiquement la version de variable appropriée selon le bloc d'origine d'où provient l'exécution.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Quelle optimisation de compilateur consiste à remplacer une expression calculable dès la compilation par sa valeur littérale directe (ex: 'int x = 3 * 8' remplacé par 'int x = 24') ?",
        "choices": [
            "Le pliage de constantes (Constant Folding)",
            "Le déroulage de boucle (Loop Unrolling)",
            "L'élimination des branches mortes",
            "La vectorisation SIMD"
        ],
        "correctAnswer": 0,
        "explanation": "Le constant folding évalue arithmétiquement les constantes au moment de la compilation pour éviter d'émettre des instructions de calcul inutiles au runtime.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Quel est le principe de l'optimisation par 'Déroulage de Boucle' (Loop Unrolling) ?",
        "choices": [
            "Dupliquer le corps de la boucle plusieurs fois par itération afin de réduire la fréquence des sauts conditionnels et des décrémentations de compteur",
            "Supprimer complètement la boucle pour la remplacer par un appel récursif",
            "Ralentir la boucle pour éviter la surchauffe CPU",
            "Inverser l'ordre des instructions de la boucle"
        ],
        "correctAnswer": 0,
        "explanation": "Le loop unrolling augmente la taille du binaire en échange d'une réduction drastique de la pénalité de branchement (branch overhead) et d'un meilleur parallélisme d'instructions.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Comment l'allocation de registres dans les compilateurs optimisants modernes est-elle classiquement modélisée mathématiquement ?",
        "choices": [
            "Comme un problème de coloration de graphe d'interférence (qui est NP-complet)",
            "Comme un calcul de PGCD par l'algorithme d'Euclide",
            "Comme un tri rapide Quicksort",
            "Comme une transformée en ondelettes discrète"
        ],
        "correctAnswer": 0,
        "explanation": "Chaque variable temporaire est un sommet ; une arête relie deux variables si leurs durées de vie se chevauchent. Assigner k registres physiques revient à colorier le graphe avec k couleurs.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Facile",
        "question": "Qu'est-ce qu'un compilateur Just-In-Time (JIT) par rapport à un compilateur traditionnel AOT (Ahead-Of-Time) ?",
        "choices": [
            "Un compilateur qui traduit le bytecode intermédiaire en code machine natif dynamiquement pendant l'exécution même du programme (ex: HotSpot Java, V8 JavaScript)",
            "Un compilateur qui s'arrête dès qu'il rencontre une faute d'orthographe",
            "Un compilateur qui ne fonctionne que sur le cloud",
            "Un compilateur qui n'effectue aucune optimisation"
        ],
        "correctAnswer": 0,
        "explanation": "Le compilateur JIT profile le code à chaud pendant l'exécution et compile en langage machine natif les portions fréquemment exécutées (hotspots) avec des optimisations adaptatives.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Facile",
        "question": "Quel est le rôle du ramasse-miettes (Garbage Collector) dans les environnements managés comme la JVM ou le runtime .NET ?",
        "choices": [
            "Détecter et désallouer automatiquement la mémoire du tas occupée par des objets devenus inaccessibles et non référencés par le programme",
            "Effacer l'historique des requêtes SQL",
            "Supprimer les fichiers temporaires du système d'exploitation",
            "Redémarrer le serveur Web en cas de panne réseau"
        ],
        "correctAnswer": 0,
        "explanation": "Le Garbage Collector libère automatiquement la mémoire des objets orphelins, protégeant le développeur contre les fuites de mémoire (memory leaks) et les double-free du C.",
        "source": "Ancien examen"
    },
    {
        "topic": "Compilation & Traduction",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'infrastructure de compilateur modulaire LLVM ?",
        "choices": [
            "Une suite modulaire de technologies de compilateurs réutilisables centrée sur une Représentation Intermédiaire universelle (LLVM IR) partagée entre de nombreux langages et cibles matérielles",
            "Une machine virtuelle uniquement dédiée au langage Python",
            "Un nouveau système de fichiers pour Linux",
            "Un outil de partitionnement de disque dur"
        ],
        "correctAnswer": 0,
        "explanation": "LLVM découple le front-end (Clang, Rustc, Swift) qui émet de la LLVM IR, des passes d'optimisation génériques et des back-ends générant le code natif (x86, ARM, RISC-V).",
        "source": "Ancien examen"
    },

    # 51-75 Codage de l'Information, Signaux & Paradigmes
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Quelle est la différence normalisée par la CEI entre 1 Kilo-octet (Ko) décimal et 1 Kibi-octet (Kio) binaire ?",
        "choices": [
            "1 Ko = 1 000 octets (10³), tandis que 1 Kio = 1 024 octets (2¹⁰)",
            "1 Ko = 1 024 octets et 1 Kio = 1 000 octets",
            "1 Ko = 8 bits et 1 Kio = 16 bits",
            "Il n'y a absolument aucune différence, ce sont des synonymes stricts"
        ],
        "correctAnswer": 0,
        "explanation": "Selon la norme CEI 60027-2, les préfixes décimaux du SI (k, M, G) sont des puissances de 10 (1000), alors que les préfixes binaires (Ki, Mi, Gi) sont des puissances de 2 (1024).",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Combien de caractères distincts peuvent être représentés au maximum par la table standard ASCII originelle sur 7 bits ?",
        "choices": ["128 caractères (2⁷)", "256 caractères", "64 caractères", "1024 caractères"],
        "correctAnswer": 0,
        "explanation": "L'ASCII original code chaque caractère sur 7 bits, permettant d'encoder 2⁷ = 128 valeurs distinctes (codes 0 à 127 comprenant les caractères de contrôle et l'alphabet latin de base).",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Comment l'encodage universel UTF-8 gère-t-il la longueur des caractères en mémoire ?",
        "choices": [
            "C'est un encodage à longueur variable utilisant de 1 à 4 octets par caractère, conçu pour être 100% rétrocompatible avec l'ASCII sur son premier octet",
            "Chaque caractère occupe strictement 4 octets fixes",
            "Chaque caractère occupe toujours exactement 2 octets",
            "Il compresse le texte en format binaire ZIP"
        ],
        "correctAnswer": 0,
        "explanation": "UTF-8 utilise 1 octet pour les caractères ASCII (0-127) et de 2 à 4 octets pour les autres points de code Unicode, alliant compacité mémoire et compatibilité universelle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Dans la disposition des octets en mémoire (Boutisme / Endianness), qu'est-ce que le mode 'Big-Endian' ?",
        "choices": [
            "L'octet de poids le plus fort (Most Significant Byte - MSB) est stocké à l'adresse mémoire la plus basse",
            "L'octet de poids le plus faible est stocké à l'adresse la plus basse",
            "Les données sont triées par ordre alphabétique",
            "Tous les nombres négatifs sont placés à la fin de la mémoire"
        ],
        "correctAnswer": 0,
        "explanation": "En Big-Endian (utilisé conventionnellement dans les en-têtes réseau réseau TCP/IP), l'octet de poids fort arrive en premier à l'adresse la plus petite, comme on écrit les nombres de gauche à droite.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Quelle architecture de processeurs grand public actuelle utilise par défaut le mode 'Little-Endian' ?",
        "choices": ["x86 et x86-64 (Intel / AMD)", "IBM z/Architecture Mainframe", "SPARC classique", "Motorola 68000"],
        "correctAnswer": 0,
        "explanation": "L'architecture x86 d'Intel/AMD est historiquement Little-Endian : l'octet de poids faible (LSB) est stocké en premier à l'adresse la plus basse.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que la Distance de Hamming entre deux mots binaires de même longueur ?",
        "choices": [
            "Le nombre de positions pour lesquelles les bits correspondants des deux mots sont différents (obtenu en comptant les bits à 1 du résultat XOR)",
            "La somme arithmétique de tous les bits",
            "La distance physique en millimètres sur la puce de silicium",
            "Le temps de propagation du signal en nanosecondes"
        ],
        "correctAnswer": 0,
        "explanation": "La distance de Hamming mesure le nombre minimal de substitutions de bits nécessaires pour transformer un mot en un autre, mesurable par le calcul du poids de Hamming de (A XOR B).",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Pour qu'un code détecteur/correcteur d'erreurs puisse corriger à coup sûr 'e' erreurs de transmission de bits, quelle doit être sa distance minimale de Hamming (d_min) ?",
        "choices": [
            "d_min ≥ 2e + 1",
            "d_min ≥ e + 1",
            "d_min = e",
            "d_min ≥ 4e"
        ],
        "correctAnswer": 0,
        "explanation": "Pour corriger e erreurs, les sphères de rayon e centrées sur chaque mot de code ne doivent pas se chevaucher, ce qui impose d_min ≥ 2e + 1 (et d_min ≥ d + 1 pour détecter d erreurs).",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Quelle est la particularité du célèbre Code de Hamming (7, 4) ?",
        "choices": [
            "Il encode 4 bits de données utiles dans un bloc de 7 bits au total grâce à 3 bits de parité, capable de détecter et corriger toute erreur simple de 1 bit (SEC)",
            "Il compresse 7 octets en 4 octets sans perte",
            "Il chiffre les données avec une clé secrète de 74 bits",
            "Il calcule la somme de contrôle d'un disque dur de 7,4 Go"
        ],
        "correctAnswer": 0,
        "explanation": "Le code de Hamming(7,4) est un code de bloc linéaire parfait associant 3 bits de contrôle aux 4 bits d'information, permettant d'identifier et de redresser un bit inversé.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Sur quelle opération mathématique repose le Contrôle de Redondance Cyclique (CRC, ex: CRC-32) très utilisé dans Ethernet et les disques durs ?",
        "choices": [
            "La division polynomiale modulo 2 dans le corps de Galois GF(2)",
            "La multiplication matricielle en virgule flottante",
            "La racine carrée entière de la somme des octets",
            "Le calcul de la moyenne géométrique des paquets"
        ],
        "correctAnswer": 0,
        "explanation": "Le CRC traite le flux binaire comme un polynôme sur GF(2) et calcule le reste de sa division par un polynôme générateur standardisé, offrant une excellente détection d'erreurs en rafale.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Quel principe algorithmique fondamental est exploité par le codage entropique de Huffman pour compresser les données sans perte ?",
        "choices": [
            "Attribuer des codes binaires de longueur variable aux symboles : les plus fréquents reçoivent les codes les plus courts, formant un arbre préfixe optimal",
            "Remplacer toutes les voyelles par des chiffres",
            "Supprimer un octet sur deux et interpoler à la décompression",
            "Convertir toutes les données en chaînes hexadécimales"
        ],
        "correctAnswer": 0,
        "explanation": "L'algorithme glouton de Huffman construit un arbre binaire ascendant selon les fréquences d'apparition des caractères, garantissant l'absence de préfixes ambigus et minimisant la longueur moyenne.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'algorithme de compression LZW (Lempel-Ziv-Welch) utilisé dans les formats GIF et compress ?",
        "choices": [
            "Un algorithme de compression par dictionnaire qui remplace les motifs textuels ou séquences d'octets répétés par des index pointant vers un dictionnaire dynamique construit à la volée",
            "Un algorithme de compression avec perte pour les photos HD",
            "Une méthode de cryptage asymétrique de messages",
            "Une routine de défragmentation de disque dur"
        ],
        "correctAnswer": 0,
        "explanation": "LZW n'a pas besoin de transmettre de table préalable : le dictionnaire de correspondances est reconstruit de façon strictement identique par le décompresseur à partir du flux codé.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Difficile",
        "question": "Qu'énonce le Théorème d'échantillonnage de Nyquist-Shannon pour la numérisation d'un signal continu analogique ?",
        "choices": [
            "Pour numériser un signal analogique sans perte d'information, la fréquence d'échantillonnage doit être strictement supérieure au double de la fréquence maximale contenue dans le signal (Fe > 2 · Fmax)",
            "La fréquence d'échantillonnage doit être égale à la fréquence minimale",
            "Tous les signaux audio doivent être convertis en stéréo 44,1 kHz",
            "Le bruit thermique est proportionnel à la racine carrée de la résistance"
        ],
        "correctAnswer": 0,
        "explanation": "Si la condition de Nyquist (Fe > 2 · Fmax) n'est pas respectée, un phénomène de repliement spectral parasite (aliasing) détériore irrémédiablement le signal numérisé.",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Facile",
        "question": "Quelles sont les caractéristiques fondatrices du Paradigme de Programmation Fonctionnelle pur ?",
        "choices": [
            "L'usage de fonctions pures (sans effets de bord), l'immuabilité des données, les fonctions comme citoyens de premier ordre (First-Class Functions) et l'absence d'état mutable partagé",
            "L'organisation du code en classes et objets héritant de prototypes",
            "L'écriture directe en langage machine hexadécimal",
            "L'utilisation obligatoire de l'instruction GOTO"
        ],
        "correctAnswer": 0,
        "explanation": "La programmation fonctionnelle (Haskell, Lisp, OCaml) élimine la mutation d'état globale : une fonction appelée avec les mêmes arguments produit toujours exactement le même résultat (transparence référentielle).",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'Optimisation de la Récursion Terminale (Tail-Call Optimization - TCO) présente dans les compilateurs fonctionnels ?",
        "choices": [
            "La réutilisation du cadre de pile (stack frame) existant lorsque l'appel récursif est la toute dernière action d'une fonction, transformant la récursion en itération sans risquer de stack overflow",
            "La suppression des conditions d'arrêt de la fonction",
            "La mise en cache des résultats de calculs dans un dictionnaire",
            "L'exécution de la récursion sur une unité GPU"
        ],
        "correctAnswer": 0,
        "explanation": "Quand l'appel récursif est terminal, aucune instruction n'attend son retour ; le compilateur peut simplement écraser les paramètres du cadre de pile actuel et sauter au début de la fonction.",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'Évaluation Paresseuse (Lazy Evaluation) dans des langages fonctionnels comme Haskell ?",
        "choices": [
            "Le calcul d'une expression est retardé jusqu'au moment précis où sa valeur devient strictement nécessaire pour produire une sortie, permettant de manipuler des structures de données infinies",
            "L'interdiction d'exécuter des programmes la nuit",
            "Un mode économique pour réduire la consommation de la batterie",
            "L'exécution différée de 5 secondes pour chaque instruction"
        ],
        "correctAnswer": 0,
        "explanation": "L'évaluation paresseuse ne résout que ce qui est exigé par l'affichage ou l'effet externe. On peut ainsi définir une liste infinie de tous les nombres premiers sans faire planter la mémoire.",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Facile",
        "question": "Quelle est la définition d'un langage Déclaratif (ex: SQL, HTML, Prolog) par opposition à un langage Impératif (ex: C, Java) ?",
        "choices": [
            "Le programme déclare le QUOI (le résultat attendu et les contraintes) plutôt que de détailler pas à pas le COMMENT (la séquence d'instructions d'exécution)",
            "Le programme exige de déclarer toutes les variables avec leur type binaire",
            "Le langage ne fonctionne que sur les terminaux en ligne de commande",
            "Le code source doit être déposé auprès d'une autorité légale"
        ],
        "correctAnswer": 0,
        "explanation": "En SQL par exemple, on écrit SELECT * FROM clients WHERE age > 30 ; c'est le moteur interne de la base de données qui décide de l'algorithme de parcours et des index à utiliser.",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Moyen",
        "question": "Dans le paradigme Orienté Objet, qu'est-ce que le principe de Substitution de Liskov (le 'L' de SOLID) ?",
        "choices": [
            "Les objets d'une sous-classe doivent pouvoir remplacer des objets de la classe mère sans altérer l'exactitude fonctionnelle ni les invariants du programme",
            "Une classe ne doit pas comporter plus de 100 lignes de code",
            "Toutes les méthodes doivent obligatoirement être déclarées static",
            "Chaque variable locale doit avoir un nom unique dans tout le projet"
        ],
        "correctAnswer": 0,
        "explanation": "Formulé par Barbara Liskov, ce principe interdit aux classes dérivées d'affaiblir les préconditions ou de renforcer les postconditions définies par leurs parents.",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le polymorphisme ad hoc par opposition au polymorphisme paramétrique ?",
        "choices": [
            "La surcharge de fonctions ou d'opérateurs (Overloading) où le même nom de fonction s'applique à différents types avec des implémentations spécifiques distinctes",
            "L'héritage de classes abstraites",
            "L'utilisation de pointeurs de structures en langage C",
            "La copie bit à bit d'un tableau d'entiers"
        ],
        "correctAnswer": 0,
        "explanation": "Le polymorphisme ad hoc désigne la surcharge (différentes fonctions selon les types d'arguments). Le polymorphisme paramétrique désigne les génériques (templates/generics agissant uniformément).",
        "source": "Ancien examen"
    },
    {
        "topic": "Paradigmes de Programmation",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que la Programmation Réactive (Reactive Programming) ?",
        "choices": [
            "Un paradigme déclaratif centré sur la propagation automatique de changements le long de flux de données asynchrones (Event Streams et Observables)",
            "La programmation de robots réactifs en milieu hostile",
            "L'obligation de répondre aux requêtes en moins de 10 millisecondes",
            "L'utilisation exclusive de threads natifs synchronisés"
        ],
        "correctAnswer": 0,
        "explanation": "Dans la programmation réactive (ex: RxJS, Reactor), les consommateurs s'abonnent à des flux continus de valeurs et réagissent automatiquement aux émissions et erreurs.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Comment s'appelle le codage binaire direct d'un entier signé où le bit de poids fort vaut -2^(n-1) et les autres bits conservent leurs poids positifs usuels ?",
        "choices": ["Le complément à deux (Two's complement)", "Le complément à un", "La notation signe et valeur absolue", "Le code Gray"],
        "correctAnswer": 0,
        "explanation": "Le complément à deux est le système universellement adopté par les CPU pour représenter les entiers relatifs, car il ne possède qu'un seul zéro et les additions se font sans circuit spécialisé.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Quelle est la propriété unique du Code Gray (ou binaire réfléchi) particulièrement utile pour les capteurs de position angulaire mécaniques ?",
        "choices": [
            "Deux nombres consécutifs successifs ne diffèrent toujours que par un seul et unique bit",
            "Tous les nombres impairs ont trois bits à 1",
            "Il ne contient aucun bit à zéro",
            "Il se divise automatiquement par deux à chaque décalage"
        ],
        "correctAnswer": 0,
        "explanation": "En ne modifiant qu'un seul bit lors du passage d'une valeur à la suivante, le code Gray élimine totalement les états parasites transitoires (glitches) causés par les imprécisions des capteurs.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Dans le standard IEEE 754 pour les nombres à virgule flottante en simple précision (32 bits), quelle est la répartition exacte des bits ?",
        "choices": [
            "1 bit de signe, 8 bits d'exposant biaisé (+127), et 23 bits de mantisse (fraction)",
            "1 bit de signe, 15 bits d'exposant, et 16 bits de mantisse",
            "4 bits de signe, 12 bits d'exposant, et 16 bits de mantisse",
            "8 bits de signe, 8 bits d'exposant, et 16 bits de mantisse"
        ],
        "correctAnswer": 0,
        "explanation": "Le format float 32 bits IEEE 754 alloue 1 bit pour le signe (s), 8 bits pour l'exposant (e avec décalage de 127), et 23 bits pour la partie fractionnaire de la mantisse normalisée (1.M).",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Difficile",
        "question": "Pourquoi l'addition en virgule flottante IEEE 754 n'est-elle généralement pas associative (c-à-d que (a + b) + c peut être différent de a + (b + c)) ?",
        "choices": [
            "En raison des erreurs d'arrondi et des pertes de précision (phénomène de cancellation) lorsque l'on aligne les exposants de grandeurs d'échelles très différentes",
            "Parce que le processeur inverse l'ordre des opérandes au hasard",
            "Parce que les nombres à virgule flottante n'utilisent pas la base binaire",
            "En raison d'une mauvaise configuration du compilateur C"
        ],
        "correctAnswer": 0,
        "explanation": "L'alignement des mantisses décale les bits de poids faible de la plus petite valeur au-delà de la capacité de stockage de 23/52 bits, provoquant une perte d'information dépendante de l'ordre d'évaluation.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'encodage Base64 et pourquoi est-il couramment employé dans les protocoles Internet (comme MIME e-mail ou data URI) ?",
        "choices": [
            "Un encodage traduisant des groupes de 3 octets binaires (24 bits) en 4 caractères imprimables ASCII choisis dans un jeu de 64 symboles sûrs",
            "Un algorithme de chiffrement militaire ultra-sécurisé",
            "Une méthode de compression divisant la taille des fichiers par 64",
            "Un système de numérotation utilisé uniquement par les banques"
        ],
        "correctAnswer": 0,
        "explanation": "Base64 permet de transmettre des données binaires quelconques (fichiers, images, clés) à travers des canaux textuels stricts sans risque d'altération par des filtres de contrôle.",
        "source": "Ancien examen"
    },
    {
        "topic": "Codage de l'Information",
        "difficulty": "Facile",
        "question": "Quel est le rôle d'un 'Caractère d'Échappement' (comme l'antislash '\\' dans de nombreux langages) ?",
        "choices": [
            "Changer l'interprétation habituelle du ou des caractères qui le suivent immédiatement (ex: déclarer une séquence spéciale comme '\\n' ou désactiver le rôle syntaxique d'un guillemet)",
            "Quitter immédiatement le programme en cours d'exécution",
            "Effacer la mémoire cache du processeur",
            "Insérer un espace insécable dans le texte"
        ],
        "correctAnswer": 0,
        "explanation": "Le caractère d'échappement signale à l'analyseur syntaxique que le caractère suivant doit être traité littéralement ou représente un code de contrôle spécial non imprimable.",
        "source": "Ancien examen"
    },

    # 76-100 Virtualisation, Cloud Computing & Technologies Émergentes
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Facile",
        "question": "Quelle est la caractéristique fondamentale d'un Hyperviseur de Type 1 (Bare-Metal) comme VMware ESXi ou KVM ?",
        "choices": [
            "Il s'exécute directement sur le matériel physique du serveur sans couche de système d'exploitation hôte intermédiaire",
            "Il nécessite obligatoirement Windows 10 pour fonctionner",
            "Il ne peut héberger qu'une seule machine virtuelle à la fois",
            "Il émule tous les composants matériels par logiciel en mode interprété"
        ],
        "correctAnswer": 0,
        "explanation": "L'hyperviseur de type 1 contrôle directement le matériel pour des performances optimales. À l'inverse, l'hyperviseur de type 2 (ex: VirtualBox) s'exécute comme une application sur un OS hôte.",
        "source": "Ancien examen"
    },
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Facile",
        "question": "Quelle est la différence d'architecture majeure entre une Machine Virtuelle (VM) et un Conteneur Docker ?",
        "choices": [
            "Une VM virtualise l'intégralité du matériel et embarque son propre système d'exploitation complet (noyau invité), alors qu'un conteneur partage le noyau de l'OS hôte",
            "Une VM est toujours plus rapide à démarrer qu'un conteneur",
            "Les conteneurs ne peuvent pas communiquer sur un réseau",
            "Les machines virtuelles ne consomment aucune mémoire RAM"
        ],
        "correctAnswer": 0,
        "explanation": "Les conteneurs sont de simples processus isolés partageant le noyau de l'hôte, ce qui les rend infiniment plus légers (mégaoctets vs gigaoctets) et ultra-rapides au démarrage (millisecondes vs minutes).",
        "source": "Ancien examen"
    },
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Moyen",
        "question": "Quelles sont les deux fonctionnalités fondamentales du noyau Linux sur lesquelles repose l'isolation des conteneurs (Docker, LXC) ?",
        "choices": [
            "Les Namespaces (pour l'isolation des vues système : PID, réseau, montages) et les Cgroups (pour la limitation des ressources : CPU, RAM)",
            "Le système de fichiers FAT32 et les modules GRUB",
            "Les permissions chmod 777 et les crontabs",
            "Les sockets UNIX et les fichiers .iso"
        ],
        "correctAnswer": 0,
        "explanation": "Les namespaces délimitent ce qu'un processus conteneurisé a le droit de voir (arborescence, interfaces réseau, tables de processus) ; les cgroups restreignent ce qu'il a le droit de consommer.",
        "source": "Ancien examen"
    },
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Facile",
        "question": "Comment les images Docker sont-elles composées et optimisées en termes de stockage sur disque ?",
        "choices": [
            "Elles sont formées d'un empilement de couches immuables en lecture seule (Layers) utilisant un système de fichiers unifié (OverlayFS), partageables entre plusieurs conteneurs",
            "Chaque conteneur copie l'intégralité du disque dur à chaque démarrage",
            "Elles sont compressées dans une seule archive tar cryptée avec RSA",
            "Elles sont stockées en mémoire RAM volatile uniquement"
        ],
        "correctAnswer": 0,
        "explanation": "Grâce au système de fichiers en couches UnionFS/Overlay2, les calques communs sont partagés et mis en cache, seule une fine couche d'écriture temporaire (Read-Write) étant allouée au conteneur.",
        "source": "Ancien examen"
    },
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Facile",
        "question": "Dans le système d'orchestration Kubernetes (K8s), quelle est la plus petite unité d'exécution déployable regroupant un ou plusieurs conteneurs étroitement couplés ?",
        "choices": ["Le Pod", "Le ReplicaSet", "Le Node", "Le Namespace"],
        "correctAnswer": 0,
        "explanation": "Un Pod encapsule un ou plusieurs conteneurs partageant la même adresse IP réseau (localhost), le même espace de stockage et les mêmes spécifications d'exécution.",
        "source": "Ancien examen"
    },
    {
        "topic": "Virtualisation & Conteneurs",
        "difficulty": "Moyen",
        "question": "Dans Kubernetes, quel objet assure une adresse réseau IP virtuelle stable et gère l'équilibrage de charge vers un groupe dynamique de Pods ciblés par des étiquettes (Labels) ?",
        "choices": ["Le Service (ClusterIP, NodePort ou LoadBalancer)", "Le ConfigMap", "Le Volume", "Le DaemonSet"],
        "correctAnswer": 0,
        "explanation": "Comme les Pods sont éphémères et changent d'IP à chaque recréation, l'objet Service offre un point de terminaison pérenne et stable pour router les requêtes vers les Pods sains.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Facile",
        "question": "Selon la définition officielle du NIST, quelles sont les 5 caractéristiques essentielles du Cloud Computing ?",
        "choices": [
            "Libre-service à la demande, Accès réseau étendu, Mutualisation des ressources, Élasticité rapide et Service mesuré",
            "Hébergement gratuit, Sécurité totale, Sauvegarde perpétuelle, Processeurs quantiques et Câbles blindés",
            "Connexion 5G, Chiffrement AES, Pas de mots de passe, Écrans tactiles et Réplication locale",
            "Système Windows, Base de données Oracle, Serveur Apache, Protocole FTP et Support téléphonique"
        ],
        "correctAnswer": 0,
        "explanation": "Ces 5 critères du NIST (National Institute of Standards and Technology) définissent formellement tout environnement d'informatique en nuage moderne.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Facile",
        "question": "Quel modèle de service Cloud fournit à l'utilisateur des ressources informatiques matérielles fondamentales brutes (serveurs virtuels, stockage, réseau) sur lesquelles il installe son propre OS ?",
        "choices": [
            "IaaS (Infrastructure as a Service, ex: AWS EC2, GCP Compute Engine)",
            "PaaS (Platform as a Service)",
            "SaaS (Software as a Service)",
            "FaaS (Function as a Service)"
        ],
        "correctAnswer": 0,
        "explanation": "En IaaS, le fournisseur gère le matériel physique, la virtualisation et le datacenter ; l'utilisateur administre l'OS, les correctifs système, les runtimes et les applications.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Facile",
        "question": "Quelle est la caractéristique du modèle Cloud PaaS (Platform as a Service, ex: Google App Engine, Heroku) ?",
        "choices": [
            "Le fournisseur gère l'infrastructure, l'OS, les serveurs Web et les runtimes de langages ; le développeur déploie uniquement son code applicatif et ses données",
            "L'utilisateur doit installer manuellement les pilotes de la carte mère",
            "C'est un logiciel prêt à l'emploi vendu sous forme d'abonnement pour l'utilisateur final",
            "Le serveur n'est accessible que par câble série"
        ],
        "correctAnswer": 0,
        "explanation": "En PaaS, l'équipe de développement s'affranchit de la maintenance de l'OS et des serveurs pour se focaliser exclusivement sur le développement de la logique métier.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Facile",
        "question": "Lequel des services suivants est un exemple type de SaaS (Software as a Service) ?",
        "choices": [
            "Google Workspace / Microsoft 365",
            "Une machine virtuelle Linux Debian vierge sur AWS EC2",
            "Un cluster Kubernetes managé vierge",
            "Un commutateur réseau physique Cisco"
        ],
        "correctAnswer": 0,
        "explanation": "En SaaS, l'application est totalement hébergée, maintenue et délivrée clé en main via un navigateur Web pour les utilisateurs finaux sans aucune gestion d'infrastructure.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'architecture 'Serverless' ou FaaS (Function as a Service, ex: AWS Lambda, Google Cloud Functions) ?",
        "choices": [
            "Un modèle d'exécution événementiel où le code s'exécute dans des conteneurs éphémères facturés au milliseconde près, avec mise à l'échelle automatique jusqu'à zéro (scale-to-zero)",
            "Une application tournant sur des ordinateurs sans microprocesseur",
            "Un réseau local sans aucun câble Ethernet",
            "Une base de données n'acceptant aucune requête d'écriture"
        ],
        "correctAnswer": 0,
        "explanation": "En Serverless, les serveurs existent évidemment mais sont totalement masqués au développeur : le fournisseur instancie la fonction à la demande dès réception d'un événement et facture le temps CPU réel.",
        "source": "Ancien examen"
    },
    {
        "topic": "Cloud Computing",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le 'Cold Start' (démarrage à froid) dans les architectures FaaS Serverless ?",
        "choices": [
            "La latence supplémentaire subie lors de la première invocation d'une fonction causée par l'initialisation du conteneur d'exécution et le chargement du runtime",
            "L'allumage d'un serveur dans une salle blanche réfrigérée",
            "Le redémarrage du système après une mise à jour du noyau",
            "La réinitialisation des condensateurs de l'alimentation"
        ],
        "correctAnswer": 0,
        "explanation": "Si aucune instance n'est pré-allouée en mémoire (warm), l'infrastructure doit télécharger l'image, démarrer le conteneur et le moteur de langage, introduisant un délai sensible à la première requête.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Facile",
        "question": "Quelle est la hiérarchie d'inclusion exacte entre l'Intelligence Artificielle (IA), le Machine Learning (ML) et le Deep Learning (DL) ?",
        "choices": [
            "Le Deep Learning est un sous-domaine du Machine Learning, qui est lui-même un sous-domaine de l'Intelligence Artificielle (DL ⊂ ML ⊂ IA)",
            "L'IA est un sous-ensemble du Deep Learning",
            "Le Machine Learning n'a aucun rapport avec l'Intelligence Artificielle",
            "Les trois termes désignent exactement la même chose"
        ],
        "correctAnswer": 0,
        "explanation": "L'IA est la discipline globale visant à reproduire des capacités cognitives ; le ML utilise des méthodes statistiques pour apprendre à partir des données ; le DL utilise des réseaux de neurones profonds.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Facile",
        "question": "Quelle est la distinction fondamentale entre l'Apprentissage Supervisé et l'Apprentissage Non-Supervisé ?",
        "choices": [
            "L'apprentissage supervisé s'entraîne sur des données étiquetées comportant la réponse attendue (labels), alors que l'apprentissage non-supervisé cherche des structures cachées dans des données non étiquetées",
            "L'apprentissage supervisé nécessite la présence physique continue d'un ingénieur devant l'écran",
            "L'apprentissage non-supervisé ne peut s'exécuter que sur des ordinateurs portables",
            "L'apprentissage supervisé utilise uniquement des arbres de décision"
        ],
        "correctAnswer": 0,
        "explanation": "En supervisé (classification, régression), on fournit des paires (entrée, cible). En non-supervisé (clustering K-means, PCA), l'algorithme découvre de lui-même des motifs sans étiquettes.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que l'Apprentissage par Renforcement (Reinforcement Learning) ?",
        "choices": [
            "Un paradigme où un agent autonome apprend à prendre des décisions séquentielles en interagissant avec un environnement pour maximiser une récompense cumulative (Reward)",
            "Une méthode de compilation qui renforce la sécurité des mots de passe",
            "Un entraînement répété des développeurs aux règles de sécurité",
            "Un algorithme qui répare les secteurs défectueux des disques durs"
        ],
        "correctAnswer": 0,
        "explanation": "En apprentissage par renforcement (ex: AlphaGo, conduite autonome), l'agent explore des actions dans des états donnés et ajuste sa politique d'action selon les récompenses ou pénalités reçues.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "En classification binaire, quelle est la formule de la métrique 'Précision' (Precision) ?",
        "choices": [
            "Précision = Vrais Positifs / (Vrais Positifs + Faux Positifs)",
            "Précision = Vrais Positifs / (Vrais Positifs + Faux Négatifs)",
            "Précision = (Vrais Positifs + Vrais Négatifs) / Total",
            "Précision = Faux Positifs / Faux Négatifs"
        ],
        "correctAnswer": 0,
        "explanation": "La précision mesure la proportion de prédictions positives qui étaient effectivement correctes (elle pénalise les fausses alertes).",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "En classification binaire, quelle est la formule du 'Rappel' (Recall ou Sensibilité) ?",
        "choices": [
            "Rappel = Vrais Positifs / (Vrais Positifs + Faux Négatifs)",
            "Rappel = Vrais Positifs / (Vrais Positifs + Faux Positifs)",
            "Rappel = Faux Négatifs / Total",
            "Rappel = Vrais Négatifs / (Vrais Négatifs + Faux Positifs)"
        ],
        "correctAnswer": 0,
        "explanation": "Le rappel mesure la capacité du modèle à identifier tous les cas positifs réels (crucial en diagnostic médical où l'on veut minimiser les faux négatifs).",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "Qu'est-ce que le F1-Score en évaluation de modèles de Machine Learning ?",
        "choices": [
            "La moyenne harmonique de la Précision et du Rappel : 2 · (Précision · Rappel) / (Précision + Rappel)",
            "La note attribuée par le professeur lors de l'examen",
            "La vitesse d'apprentissage mesurée en images par seconde",
            "Le taux d'erreur brut divisé par deux"
        ],
        "correctAnswer": 0,
        "explanation": "Le F1-score combine harmoniquement précision et rappel, offrant une métrique d'évaluation équilibrée, particulièrement efficace sur des jeux de données déséquilibrés.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Facile",
        "question": "Qu'est-ce que le problème du 'Surapprentissage' (Overfitting) en Machine Learning ?",
        "choices": [
            "Le modèle mémorise le bruit et les spécificités du jeu d'entraînement mais échoue à se généraliser sur de nouvelles données de test",
            "Le modèle s'entraîne trop vite en consommant toute la RAM",
            "L'ordinateur surchauffe à cause de calculs matriciels intensifs",
            "Le modèle ne parvient même pas à apprendre les données d'entraînement"
        ],
        "correctAnswer": 0,
        "explanation": "L'overfitting survient lorsqu'un modèle trop complexe colle parfaitement aux données d'apprentissage (variance élevée) au détriment de sa capacité à généraliser dans la réalité.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "Quelle est la différence d'impact entre une régularisation L1 (Lasso) et une régularisation L2 (Ridge) sur les poids d'un modèle ?",
        "choices": [
            "La régularisation L1 tend à forcer certains poids à devenir exactement nuls (sélection de variables / parcimonie), tandis que L2 réduit globalement la magnitude des poids sans les annuler strictement",
            "L1 est pour la régression et L2 pour la classification uniquement",
            "L1 multiplie les poids par deux et L2 par quatre",
            "L2 est plus rapide car elle ne requiert aucune dérivée"
        ],
        "correctAnswer": 0,
        "explanation": "La pénalité L1 (somme des valeurs absolues) induit de la sparsité (modèle plus interprétable). La pénalité L2 (somme des carrés) stabilise le modèle en lissant tous les poids.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Moyen",
        "question": "Quelle fonction d'activation est très largement adoptée dans les couches cachées des réseaux de neurones profonds pour pallier le problème de disparition du gradient (vanishing gradient) ?",
        "choices": ["ReLU (Rectified Linear Unit : f(x) = max(0, x))", "La Sigmoïde standard", "La Tangente Hyperbolique (Tanh)", "La fonction escalier de Heaviside"],
        "correctAnswer": 0,
        "explanation": "Contrairement à la sigmoïde dont la dérivée sature aux extrêmes (provoquant l'évanouissement du gradient), la dérivée de ReLU est constante (1 pour x > 0), accélérant considérablement la convergence.",
        "source": "Ancien examen"
    },
    {
        "topic": "Intelligence Artificielle",
        "difficulty": "Difficile",
        "question": "Quel algorithme fondamental calcule efficacement les gradients de la fonction de perte par rapport à chaque poids d'un réseau de neurones en appliquant la règle de dérivation en chaîne (Chain Rule) ?",
        "choices": [
            "L'algorithme de Rétropropagation du Gradient (Backpropagation)",
            "L'élimination de Gauss-Jordan",
            "L'algorithme de factorisation QR",
            "L'algorithme du simplexe"
        ],
        "correctAnswer": 0,
        "explanation": "La rétropropagation propage l'erreur de la sortie vers l'entrée en appliquant la règle de dérivation des fonctions composées, permettant d'actualiser les poids par descente de gradient.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Émergentes & Big Data",
        "difficulty": "Facile",
        "question": "Quels sont les '5 V' caractérisant traditionnellement le phénomène des mégadonnées (Big Data) ?",
        "choices": [
            "Volume, Vélocité, Variété, Véracité et Valeur",
            "Vitesse, Virtualisation, Vecteurs, Variables et Validité",
            "Vision, Vente, Visibilité, Volume et Variabilité",
            "Volt, Vitesse, Voisinage, Vertex et Vocabulaire"
        ],
        "correctAnswer": 0,
        "explanation": "Les 5 V définissent le Big Data : Volume massif de données, Vélocité de génération continue, Variété des formats (structurés/non-structurés), Véracité (qualité/fiabilité), et Valeur métier extraite.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Émergentes & Big Data",
        "difficulty": "Moyen",
        "question": "Quel est le principe du patron de calcul distribué MapReduce popularisé par Google et Hadoop ?",
        "choices": [
            "Découper le traitement en deux étapes : une phase 'Map' qui filtre et transforme les données en paires clé/valeur en parallèle, puis une phase 'Reduce' qui agrège les résultats par clé",
            "Compresser les bases de données SQL sur un seul serveur maître",
            "Réduire le nombre de disques durs physiques par deux",
            "Mapper les adresses IP virtuelles vers des machines réelles"
        ],
        "correctAnswer": 0,
        "explanation": "MapReduce permet de distribuer l'exécution de calculs massifs sur des milliers de machines standard de façon tolérante aux pannes sans partager de mémoire centrale.",
        "source": "Ancien examen"
    },
    {
        "topic": "Technologies Émergentes & Big Data",
        "difficulty": "Moyen",
        "question": "Pourquoi le framework Apache Spark a-t-il largement supplanté Apache Hadoop MapReduce classique pour le traitement analytique ?",
        "choices": [
            "Spark effectue les traitements et itérations directement en mémoire vive (RAM) à l'aide de RDD (Resilient Distributed Datasets), offrant des performances jusqu'à 100 fois supérieures",
            "Spark ne nécessite aucun ordinateur pour tourner",
            "Hadoop ne pouvait fonctionner que sur Windows XP",
            "Spark a été créé par l'Organisation des Nations Unies"
        ],
        "correctAnswer": 0,
        "explanation": "Alors qu'Hadoop écrivait tous les résultats intermédiaires sur disque HDFS entre chaque étape, Spark conserve les calculs en mémoire vive, décuplant la vitesse des algorithmes itératifs de Machine Learning.",
        "source": "Ancien examen"
    }
]

assert len(p10_questions) == 100, f"Expected 100 questions for Part 10, got {len(p10_questions)}"

# Write scripts/builders/part10_builder.ts
with open('scripts/builders/part10_builder.ts', 'w', encoding='utf-8') as f:
    f.write("import { Question } from '../../src/types';\n\n")
    f.write("export function buildPart10Questions(): Question[] {\n")
    f.write("  const qList: Omit<Question, 'id' | 'part'>[] = [\n")
    for q in p10_questions:
        f.write("    {\n")
        f.write(f"      topic: {json.dumps(q['topic'], ensure_ascii=False)},\n")
        f.write(f"      difficulty: {json.dumps(q['difficulty'], ensure_ascii=False)} as any,\n")
        f.write(f"      question: {json.dumps(q['question'], ensure_ascii=False)},\n")
        f.write(f"      choices: {json.dumps(q['choices'], ensure_ascii=False)},\n")
        f.write(f"      options: {json.dumps(q['choices'], ensure_ascii=False)},\n")
        f.write(f"      correctAnswer: {q['correctAnswer']},\n")
        f.write(f"      explanation: {json.dumps(q['explanation'], ensure_ascii=False)},\n")
        f.write(f"      source: {json.dumps(q['source'], ensure_ascii=False)}\n")
        f.write("    },\n")
    f.write("  ];\n\n")
    f.write("  return qList.map((q, idx) => ({\n")
    f.write("    ...q,\n")
    f.write("    id: `p10-q${idx + 1}`,\n")
    f.write("    part: 10\n")
    f.write("  }));\n")
    f.write("}\n")

print("Part 10 Builder successfully generated with 100 questions.")
