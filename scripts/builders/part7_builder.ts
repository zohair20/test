import { Question } from '../../src/types';

export function buildPart7Questions(): Question[] {
  const qList: Omit<Question, 'id' | 'part'>[] = [
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Dans un pipeline RISC classique à 5 étages (IF, ID, EX, MEM, WB), quel aléa se produit lorsqu'une instruction dépend du résultat d'une instruction antérieure qui n'a pas encore terminé son exécution ?",
      choices: ["Aléa structurel", "Aléa de données", "Aléa de contrôle", "Aléa de branchement"],
      options: ["Aléa structurel", "Aléa de données", "Aléa de contrôle", "Aléa de branchement"],
      correctAnswer: 1,
      explanation: "Un aléa de données se produit lorsque l'exécution d'une instruction dépend du résultat d'instructions précédentes qui sont encore en cours de traitement dans le pipeline.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel registre du processeur contient l'adresse mémoire de la prochaine instruction à récupérer de la mémoire principale ?",
      choices: ["Registre d'Instruction (RI)", "Registre d'Adresse Mémoire (MAR)", "Compteur Ordinal (CO)", "Accumulateur (AC)"],
      options: ["Registre d'Instruction (RI)", "Registre d'Adresse Mémoire (MAR)", "Compteur Ordinal (CO)", "Accumulateur (AC)"],
      correctAnswer: 2,
      explanation: "Le Compteur Ordinal (CO) contient l'adresse de la prochaine instruction à récupérer de la mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Dans la conception de la mémoire cache, quelle politique d'écriture met à jour la mémoire principale uniquement lorsqu'un bloc de cache modifié (dirty) est remplacé ?",
      choices: ["Écriture directe (Write-through)", "Écriture différée (Write-back)", "Allocation à l'écriture (Write-allocate)", "Non-allocation à l'écriture (No-write-allocate)"],
      options: ["Écriture directe (Write-through)", "Écriture différée (Write-back)", "Allocation à l'écriture (Write-allocate)", "Non-allocation à l'écriture (No-write-allocate)"],
      correctAnswer: 1,
      explanation: "L'écriture différée (Write-back) met à jour la mémoire principale uniquement lorsqu'un bloc modifié (dirty) est expulsé du cache.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quelle porte logique numérique est classée comme universelle car toute fonction logique booléenne peut être construite en l'utilisant exclusivement ?",
      choices: ["Porte ET", "Porte OU", "Porte NON-ET (NAND)", "Porte OU exclusif (XOR)"],
      options: ["Porte ET", "Porte OU", "Porte NON-ET (NAND)", "Porte OU exclusif (XOR)"],
      correctAnswer: 2,
      explanation: "Les portes NON-ET (NAND) et NON-OU (NOR) sont des portes universelles car elles peuvent être combinées pour implémenter les fonctions ET, OU et NON.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel est l'objectif principal de la retransmission de données (data forwarding ou contournement d'opérande) dans les processeurs pipelinés ?",
      choices: ["Prévenir les erreurs de prédiction de branchement", "Résoudre les aléas de données de type Lecture-Après-Écriture (RAW) sans insérer de cycles d'attente (stalls) dans le pipeline", "Augmenter la taille des lignes de cache", "Doubler la fréquence d'horloge"],
      options: ["Prévenir les erreurs de prédiction de branchement", "Résoudre les aléas de données de type Lecture-Après-Écriture (RAW) sans insérer de cycles d'attente (stalls) dans le pipeline", "Augmenter la taille des lignes de cache", "Doubler la fréquence d'horloge"],
      correctAnswer: 1,
      explanation: "La retransmission de données achemine la sortie de l'étage EX ou MEM directement vers les étages suivants qui ont besoin de l'opérande, évitant ainsi les cycles d'attente.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Combien de lignes de sélection sont nécessaires pour un multiplexeur 16 vers 1 ?",
      choices: ["2", "3", "4", "8"],
      options: ["2", "3", "4", "8"],
      correctAnswer: 2,
      explanation: "Un multiplexeur 16 vers 1 nécessite n lignes de sélection où 2^n = 16, donc n = 4 lignes de sélection.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Dans le format de virgule flottante IEEE 754 en simple précision (32 bits), combien de bits sont alloués pour l'exposant biaisé ?",
      choices: ["7 bits", "8 bits", "11 bits", "23 bits"],
      options: ["7 bits", "8 bits", "11 bits", "23 bits"],
      correctAnswer: 1,
      explanation: "Le format IEEE 754 en simple précision utilise 1 bit pour le signe, 8 bits pour l'exposant (avec un biais de 127) et 23 bits pour la mantisse.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel est le principe architectural principal des processeurs RISC par rapport aux processeurs CISC ?",
      choices: ["Instructions complexes de longueur variable", "Instructions uniformes de longueur fixe avec une architecture de type 'load-store' (chargement-rangement)", "Instructions multi-cycles microcodées", "Arithmétique directe de mémoire à mémoire"],
      options: ["Instructions complexes de longueur variable", "Instructions uniformes de longueur fixe avec une architecture de type 'load-store' (chargement-rangement)", "Instructions multi-cycles microcodées", "Arithmétique directe de mémoire à mémoire"],
      correctAnswer: 1,
      explanation: "Les systèmes RISC privilégient des instructions simples et uniformes, exécutées en un seul cycle d'horloge, utilisant des opérations de chargement-rangement.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quelle catégorie de défauts de cache ne peut être évitée même avec un cache de taille infinie ?",
      choices: ["Défaut de conflit", "Défaut de capacité", "Défaut obligatoire (à froid)", "Défaut de cohérence"],
      options: ["Défaut de conflit", "Défaut de capacité", "Défaut obligatoire (à froid)", "Défaut de cohérence"],
      correctAnswer: 2,
      explanation: "Les défauts obligatoires (à froid) se produisent lors du tout premier accès à un bloc de données, quelle que soit la taille ou l'associativité du cache.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "En algèbre de Boole, quelle est la forme simplifiée de l'expression X + X'Y ?",
      choices: ["X", "Y", "X + Y", "X'Y"],
      options: ["X", "Y", "X + Y", "X'Y"],
      correctAnswer: 2,
      explanation: "En utilisant la simplification distributive : X + X'Y = (X + X')(X + Y) = 1 * (X + Y) = X + Y.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel type de bascule résout l'état indéterminé/interdit de la bascule SR lorsque les deux entrées sont à l'état haut ?",
      choices: ["Bascule T", "Bascule JK", "Verrou D", "Verrou SR synchronisé"],
      options: ["Bascule T", "Bascule JK", "Verrou D", "Verrou SR synchronisé"],
      correctAnswer: 1,
      explanation: "La bascule JK inverse son état de sortie lorsque J=1 et K=1, éliminant ainsi la condition indéfinie de la bascule SR.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "En Accès Direct Mémoire (DMA), que se passe-t-il en mode 'vol de cycle' ?",
      choices: ["Le DMA arrête le CPU pour l'intégralité du transfert de plusieurs mégaoctets", "Le DMA acquiert le bus système pour un cycle de bus à la fois entre les cycles du CPU", "Le CPU contrôle chaque transfert d'octet", "Les données sont transmises via l'UAL"],
      options: ["Le DMA arrête le CPU pour l'intégralité du transfert de plusieurs mégaoctets", "Le DMA acquiert le bus système pour un cycle de bus à la fois entre les cycles du CPU", "Le CPU contrôle chaque transfert d'octet", "Les données sont transmises via l'UAL"],
      correctAnswer: 1,
      explanation: "Le vol de cycle permet au contrôleur DMA d'intercaler des transferts de mots uniques sur le bus avec les cycles du CPU sans monopoliser le bus.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quel est le rôle principal du Translation Lookaside Buffer (TLB) ?",
      choices: ["Mettre en cache les codes d'opération des instructions", "Mettre en cache les traductions récentes d'adresses virtuelles en adresses physiques", "Stocker les historiques de prédiction de branchement", "Mettre en tampon les secteurs lus du disque"],
      options: ["Mettre en cache les codes d'opération des instructions", "Mettre en cache les traductions récentes d'adresses virtuelles en adresses physiques", "Stocker les historiques de prédiction de branchement", "Mettre en tampon les secteurs lus du disque"],
      correctAnswer: 1,
      explanation: "Le TLB est un cache matériel associatif à haute vitesse qui accélère les traductions d'adresses de pages virtuelles en adresses physiques.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel registre du CPU contient les données récupérées de la mémoire ou les données prêtes à être écrites en mémoire ?",
      choices: ["Registre d'Adresse Mémoire (MAR)", "Registre de Données Mémoire (MDR)", "Registre d'Instruction (RI)", "Mot d'État du Programme (PSW)"],
      options: ["Registre d'Adresse Mémoire (MAR)", "Registre de Données Mémoire (MDR)", "Registre d'Instruction (RI)", "Mot d'État du Programme (PSW)"],
      correctAnswer: 1,
      explanation: "Le Registre de Données Mémoire (MDR), également appelé Registre Tampon Mémoire (MBR), met en tampon les données vers ou depuis le bus mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel mode d'adressage spécifie la constante de l'opérande directement à l'intérieur de l'instruction elle-même ?",
      choices: ["Adressage direct", "Adressage indirect", "Adressage immédiat", "Adressage indexé"],
      options: ["Adressage direct", "Adressage indirect", "Adressage immédiat", "Adressage indexé"],
      correctAnswer: 2,
      explanation: "En adressage immédiat, la valeur de l'opérande est une constante explicite intégrée dans le mot d'instruction.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qui cause un aléa de contrôle (aléa de branchement) dans un CPU pipeliné ?",
      choices: ["Conflit pour le bus mémoire", "Délai dans la détermination du résultat du branchement et de l'adresse cible", "Une dépendance RAW (Lecture-Après-Écriture) de registre", "Délai de remplacement de ligne de cache"],
      options: ["Conflit pour le bus mémoire", "Délai dans la détermination du résultat du branchement et de l'adresse cible", "Une dépendance RAW (Lecture-Après-Écriture) de registre", "Délai de remplacement de ligne de cache"],
      correctAnswer: 1,
      explanation: "Les aléas de contrôle surviennent parce que le pipeline doit récupérer l'instruction suivante avant que les résultats des branchements conditionnels ne soient évalués.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel circuit combinatoire convertit un code d'entrée de n bits en un maximum de 2^n lignes de sortie uniques ?",
      choices: ["Encodeur", "Décodeur", "Multiplexeur", "Comparateur"],
      options: ["Encodeur", "Décodeur", "Multiplexeur", "Comparateur"],
      correctAnswer: 1,
      explanation: "Un décodeur binaire prend n lignes d'entrée et active l'une des 2^n lignes de sortie distinctes.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel est l'effet de l'augmentation de la taille des blocs de cache sur la localité spatiale et la pénalité de défaut ?",
      choices: ["Améliore initialement la localité spatiale, mais des blocs excessivement grands augmentent la pénalité de défaut", "Détruit complètement la localité spatiale", "Diminue la pénalité de défaut dans toutes les conditions", "N'a aucun effet sur le comportement du cache"],
      options: ["Améliore initialement la localité spatiale, mais des blocs excessivement grands augmentent la pénalité de défaut", "Détruit complètement la localité spatiale", "Diminue la pénalité de défaut dans toutes les conditions", "N'a aucun effet sur le comportement du cache"],
      correctAnswer: 0,
      explanation: "Des blocs plus grands récupèrent des données voisines (exploitant la localité spatiale), mais prennent plus de temps à transférer depuis la RAM en cas de défaut.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "En représentation binaire en complément à 2, quelle est la négation du nombre 8 bits 00101100 (44 en décimal) ?",
      choices: ["11010011", "11010100", "11010101", "00101101"],
      options: ["11010011", "11010100", "11010101", "00101101"],
      correctAnswer: 1,
      explanation: "L'inversion de tous les bits donne 11010011 ; l'ajout de 1 donne 11010100 (-44 en complément à 2).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quelle architecture de cache permet à un bloc mémoire d'être placé dans n'importe quelle ligne de cache sans restrictions d'index fixes ?",
      choices: ["Cache à correspondance directe", "Cache associatif par ensembles à 2 voies", "Cache entièrement associatif", "Cache par secteurs"],
      options: ["Cache à correspondance directe", "Cache associatif par ensembles à 2 voies", "Cache entièrement associatif", "Cache par secteurs"],
      correctAnswer: 2,
      explanation: "Un cache entièrement associatif permet à tout bloc mémoire de résider dans n'importe quel emplacement de cache, maximisant le taux de succès au détriment du matériel de comparaison.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Que calcule la loi d'Amdahl en ingénierie informatique ?",
      choices: ["L'accélération potentielle maximale d'un système lorsqu'une seule partie de la tâche est accélérée", "La limite de fréquence d'horloge du silicium", "La bande passante d'une fibre optique", "La probabilité d'erreurs logicielles dans la DRAM"],
      options: ["L'accélération potentielle maximale d'un système lorsqu'une seule partie de la tâche est accélérée", "La limite de fréquence d'horloge du silicium", "La bande passante d'une fibre optique", "La probabilité d'erreurs logicielles dans la DRAM"],
      correctAnswer: 0,
      explanation: "La loi d'Amdahl formule la limite théorique de l'accélération d'exécution lorsqu'une fraction d'une charge de travail est parallélisée.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qu'un processeur superscalaire ?",
      choices: ["Un processeur avec une fréquence d'horloge supérieure à 5 GHz", "Un CPU capable d'émettre et d'exécuter plusieurs instructions indépendantes par cycle d'horloge", "Un CPU avec un seul registre", "Un processeur avec une UAL optique"],
      options: ["Un processeur avec une fréquence d'horloge supérieure à 5 GHz", "Un CPU capable d'émettre et d'exécuter plusieurs instructions indépendantes par cycle d'horloge", "Un CPU avec un seul registre", "Un processeur avec une UAL optique"],
      correctAnswer: 1,
      explanation: "Les processeurs superscalaires possèdent plusieurs unités d'exécution parallèles pour émettre et retirer plusieurs instructions par cycle d'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quelle est la fonction du Registre d'Instruction (RI) ?",
      choices: ["Stocker l'adresse mémoire de la prochaine instruction", "Contenir l'instruction en cours de décodage et d'exécution", "Compter le nombre d'impulsions d'horloge", "Sauvegarder les adresses de retour des appels de fonction"],
      options: ["Stocker l'adresse mémoire de la prochaine instruction", "Contenir l'instruction en cours de décodage et d'exécution", "Compter le nombre d'impulsions d'horloge", "Sauvegarder les adresses de retour des appels de fonction"],
      correctAnswer: 1,
      explanation: "Le RI contient le mot d'instruction récupéré de la mémoire pendant que l'unité de contrôle décode son code d'opération et ses opérandes.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quel composant numérique est formé en cascadant un inverseur directement après une porte OU ?",
      choices: ["Porte NON-OU (NOR)", "Porte NON-ET (NAND)", "Porte OU exclusif (XOR)", "Porte NON-OU exclusif (XNOR)"],
      options: ["Porte NON-OU (NOR)", "Porte NON-ET (NAND)", "Porte OU exclusif (XOR)", "Porte NON-OU exclusif (XNOR)"],
      correctAnswer: 0,
      explanation: "Une porte OU suivie d'un inverseur (porte NON) produit la fonction logique NON-OU (NOR).",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quelle est l'exigence de temps de setup (t_setup) pour une bascule synchronisée ?",
      choices: ["Le temps minimum pendant lequel les données d'entrée doivent rester stables avant le front d'horloge déclencheur", "Le temps pendant lequel les données doivent rester stables après le front d'horloge", "Le délai entre le front d'horloge et la transition de sortie", "La durée totale de l'impulsion d'horloge"],
      options: ["Le temps minimum pendant lequel les données d'entrée doivent rester stables avant le front d'horloge déclencheur", "Le temps pendant lequel les données doivent rester stables après le front d'horloge", "Le délai entre le front d'horloge et la transition de sortie", "La durée totale de l'impulsion d'horloge"],
      correctAnswer: 0,
      explanation: "Le temps de setup est la durée minimale pendant laquelle le signal de données doit être maintenu stable avant la transition active de l'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel bus haute vitesse relie traditionnellement directement le CPU au Northbridge/contrôleur mémoire ?",
      choices: ["Bus Frontal (FSB) / Bus Système", "Bus PCI", "Bus SATA", "Bus LPC"],
      options: ["Bus Frontal (FSB) / Bus Système", "Bus PCI", "Bus SATA", "Bus LPC"],
      correctAnswer: 0,
      explanation: "Le Bus Frontal (ou les interconnexions directes modernes comme QPI/Infinity Fabric) interface le cœur du processeur directement avec les contrôleurs mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Dans l'algorithme de multiplication de Booth, quelle opération est effectuée lorsque la paire de bits actuelle (Q_i, Q_{i-1}) est '10' ?",
      choices: ["Ajouter le multiplicande à l'accumulateur et décaler", "Soustraire le multiplicande de l'accumulateur et décaler", "Décaler à droite uniquement sans opération arithmétique", "Doubler le multiplicande"],
      options: ["Ajouter le multiplicande à l'accumulateur et décaler", "Soustraire le multiplicande de l'accumulateur et décaler", "Décaler à droite uniquement sans opération arithmétique", "Doubler le multiplicande"],
      correctAnswer: 1,
      explanation: "Un motif de bits '10' indique la fin d'une séquence de uns, nécessitant la soustraction du multiplicande suivie d'un décalage arithmétique.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quel est l'avantage principal d'un additionneur à anticipation de retenue (CLA) par rapport à un additionneur à propagation de retenue (RCA) ?",
      choices: ["Moins de portes logiques et consommation d'énergie réduite", "Le délai de propagation de la retenue est significativement réduit grâce à la génération parallèle des retenues", "Délai de propagation nul", "Capacité de division simultanée"],
      options: ["Moins de portes logiques et consommation d'énergie réduite", "Le délai de propagation de la retenue est significativement réduit grâce à la génération parallèle des retenues", "Délai de propagation nul", "Capacité de division simultanée"],
      correctAnswer: 1,
      explanation: "Le CLA calcule les signaux de retenue en parallèle en utilisant une logique de génération et de propagation, contournant les délais de propagation en série.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Dans les architectures VLIW (Very Long Instruction Word), quel composant est responsable de l'identification du parallélisme des instructions ?",
      choices: ["Logique de dispatch dynamique matérielle", "Le compilateur statique lors de la génération de code", "Le répartiteur du système d'exploitation", "Le tampon de cible de branchement"],
      options: ["Logique de dispatch dynamique matérielle", "Le compilateur statique lors de la génération de code", "Le répartiteur du système d'exploitation", "Le tampon de cible de branchement"],
      correctAnswer: 1,
      explanation: "Le VLIW s'appuie sur le compilateur optimiseur pour ordonnancer des opérations indépendantes en paquets d'instructions larges uniques.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quelle est la fonction principale d'un tampon de cible de branchement (BTB) ?",
      choices: ["Mettre en cache l'adresse cible prédite des instructions de branchement pour éviter les bulles de pipeline", "Stocker les adresses de retour des appels récursifs", "Mettre en tampon les écritures mémoire vers le cache L3", "Mettre en file d'attente les interruptions d'E/S externes"],
      options: ["Mettre en cache l'adresse cible prédite des instructions de branchement pour éviter les bulles de pipeline", "Stocker les adresses de retour des appels récursifs", "Mettre en tampon les écritures mémoire vers le cache L3", "Mettre en file d'attente les interruptions d'E/S externes"],
      correctAnswer: 0,
      explanation: "Un BTB stocke les adresses des instructions de branchement et leurs adresses cibles prédites pour éliminer les délais de récupération.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quelle technologie de mémoire retient les bits stockés à l'aide de bascules bistables sans nécessiter de rafraîchissements électriques périodiques ?",
      choices: ["DRAM", "SRAM", "SDRAM", "Flash NAND"],
      options: ["DRAM", "SRAM", "SDRAM", "Flash NAND"],
      correctAnswer: 1,
      explanation: "La RAM Statique (SRAM) utilise des inverseurs à 6 transistors couplés en croix pour stocker les bits de manière stable sans cycles de rafraîchissement tant que l'alimentation est maintenue.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Combien de bits de parité de Hamming sont nécessaires pour assurer la détection et la correction d'erreur d'un seul bit pour 4 bits de données ?",
      choices: ["2 bits", "3 bits", "4 bits", "5 bits"],
      options: ["2 bits", "3 bits", "4 bits", "5 bits"],
      correctAnswer: 1,
      explanation: "La formule 2^p >= p + d + 1 avec d=4 donne 2^3 = 8 >= 3 + 4 + 1 = 8, donc exactement 3 bits de parité sont nécessaires.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Combien de puces RAM de 512 x 8 sont nécessaires pour construire un module mémoire de 2K x 16 ?",
      choices: ["4 puces", "6 puces", "8 puces", "16 puces"],
      options: ["4 puces", "6 puces", "8 puces", "16 puces"],
      correctAnswer: 2,
      explanation: "Profondeur : 2K / 512 = 4 bancs. Largeur : 16 / 8 = 2 puces par banc. Total = 4 * 2 = 8 puces.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Dans l'entrelacement mémoire, quel est l'avantage architectural de l'entrelacement d'ordre inférieur ?",
      choices: ["Les adresses mémoire consécutives sont réparties sur différents bancs mémoire, permettant un accès concurrent", "La vitesse de la RAM est réduite pour économiser de l'énergie", "Élimine le besoin d'étiquettes de cache", "Ne nécessite aucune logique de décodage d'adresse"],
      options: ["Les adresses mémoire consécutives sont réparties sur différents bancs mémoire, permettant un accès concurrent", "La vitesse de la RAM est réduite pour économiser de l'énergie", "Élimine le besoin d'étiquettes de cache", "Ne nécessite aucune logique de décodage d'adresse"],
      correctAnswer: 0,
      explanation: "L'entrelacement d'ordre inférieur place les adresses mémoire séquentielles sur des bancs mémoire alternés pour permettre un accès pipeliné simultané.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Difficile" as any,
      question: "Dans quelle condition la condition de course (race-around condition) se produit-elle dans une bascule JK déclenchée par niveau ?",
      choices: ["Lorsque J=0 et K=0 avec l'horloge active", "Lorsque J=1, K=1, et que la durée de l'impulsion d'horloge est plus longue que le délai de propagation de la bascule", "Lorsque la tension d'alimentation fluctue", "Lorsque les entrées J et K sont flottantes"],
      options: ["Lorsque J=0 et K=0 avec l'horloge active", "Lorsque J=1, K=1, et que la durée de l'impulsion d'horloge est plus longue que le délai de propagation de la bascule", "Lorsque la tension d'alimentation fluctue", "Lorsque les entrées J et K sont flottantes"],
      correctAnswer: 1,
      explanation: "Dans les bascules JK déclenchées par niveau avec J=K=1, si l'horloge reste à l'état haut plus longtemps que le délai de propagation de la porte, la sortie bascule de manière imprévisible.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quel est le rôle principal du protocole MESI dans le multiprocesseur symétrique (SMP) ?",
      choices: ["Maintenir la cohérence du cache entre les caches CPU privés partageant la mémoire principale", "Gérer la pagination de la mémoire virtuelle vers le disque", "Chiffrer les transactions de bus sur les voies PCI", "Ordonnancer les processus multithreadés"],
      options: ["Maintenir la cohérence du cache entre les caches CPU privés partageant la mémoire principale", "Gérer la pagination de la mémoire virtuelle vers le disque", "Chiffrer les transactions de bus sur les voies PCI", "Ordonnancer les processus multithreadés"],
      correctAnswer: 0,
      explanation: "Le protocole MESI (Modified, Exclusive, Shared, Invalid) assure la cohérence du cache entre les caches de plusieurs processeurs.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Que représente la métrique de fan-out (charge de sortie) d'une porte logique ?",
      choices: ["Le nombre maximal de charges d'entrée standard que la sortie de la porte peut piloter de manière fiable", "Le nombre d'entrées connectées à la porte", "La dissipation thermique en milliwatts", "La fréquence de commutation de la porte"],
      options: ["Le nombre maximal de charges d'entrée standard que la sortie de la porte peut piloter de manière fiable", "Le nombre d'entrées connectées à la porte", "La dissipation thermique en milliwatts", "La fréquence de commutation de la porte"],
      correctAnswer: 0,
      explanation: "Le fan-out est le nombre maximal d'entrées numériques qui peuvent être connectées à la sortie de la porte sans dégrader les niveaux de tension.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel registre du CPU pointe vers le cadre le plus haut alloué sur la pile d'appels d'exécution ?",
      choices: ["Compteur Ordinal (PC)", "Registre d'Instruction (IR)", "Pointeur de Pile (SP)", "Registre de Lien (LR)"],
      options: ["Compteur Ordinal (PC)", "Registre d'Instruction (IR)", "Pointeur de Pile (SP)", "Registre de Lien (LR)"],
      correctAnswer: 2,
      explanation: "Le Pointeur de Pile (SP) pointe vers la dernière adresse mémoire allouée sur la pile d'appels d'exécution.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Comment l'architecture de Harvard diffère-t-elle fondamentalement de l'architecture de von Neumann ?",
      choices: ["Elle utilise des mémoires physiques et des bus séparés pour les instructions et les données", "Elle n'a pas d'Unité Arithmétique et Logique", "Elle exige que toutes les instructions soient de 8 bits", "Elle ne peut pas exécuter de sauts conditionnels"],
      options: ["Elle utilise des mémoires physiques et des bus séparés pour les instructions et les données", "Elle n'a pas d'Unité Arithmétique et Logique", "Elle exige que toutes les instructions soient de 8 bits", "Elle ne peut pas exécuter de sauts conditionnels"],
      correctAnswer: 0,
      explanation: "L'architecture de Harvard maintient des mémoires et des chemins de signaux physiquement distincts pour les instructions et les opérandes.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Dans une carte de Karnaugh (K-map) à 4 variables, regrouper 8 cellules adjacentes simplifie combien de variables booléennes ?",
      choices: ["1 variable", "2 variables", "3 variables", "4 variables"],
      options: ["1 variable", "2 variables", "3 variables", "4 variables"],
      correctAnswer: 2,
      explanation: "Regrouper 2^m cellules élimine m variables. Pour 8 cellules (2^3), exactement 3 variables sont éliminées.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel mode d'adressage est spécifiquement conçu pour faciliter le code indépendant de la position (PIC) ?",
      choices: ["Adressage absolu", "Adressage relatif au PC", "Adressage direct", "Adressage immédiat"],
      options: ["Adressage absolu", "Adressage relatif au PC", "Adressage direct", "Adressage immédiat"],
      correctAnswer: 1,
      explanation: "L'adressage relatif au PC calcule les emplacements des branchements et des données comme un décalage par rapport au Compteur Ordinal, permettant la relocalisation du code n'importe où en mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "En organisation des ordinateurs, qu'est-ce qu'une micro-opération atomique ?",
      choices: ["Une opération matérielle de base exécutée en un seul cycle d'horloge", "Une fonction de langage de haut niveau", "Un démon de système d'exploitation", "Un drapeau d'optimisation de compilateur"],
      options: ["Une opération matérielle de base exécutée en un seul cycle d'horloge", "Une fonction de langage de haut niveau", "Un démon de système d'exploitation", "Un drapeau d'optimisation de compilateur"],
      correctAnswer: 0,
      explanation: "Une micro-opération est une opération physique élémentaire (par exemple, transfert de registre, addition ALU) effectuée en un seul cycle d'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Dans la taxonomie de Flynn des architectures informatiques, que signifie SIMD ?",
      choices: ["Une Instruction, Plusieurs Données", "Dispositif de Mémoire d'Instruction Synchrone", "Division Séquentielle d'Entrée Multiplexée", "Interface Unique Multi Pilote"],
      options: ["Une Instruction, Plusieurs Données", "Dispositif de Mémoire d'Instruction Synchrone", "Division Séquentielle d'Entrée Multiplexée", "Interface Unique Multi Pilote"],
      correctAnswer: 0,
      explanation: "SIMD (Single Instruction, Multiple Data - Une Instruction, Plusieurs Données) exécute une instruction simultanément sur des flux de données vectorielles.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel problème une configuration de bascule Maître-Esclave élimine-t-elle dans les circuits numériques séquentiels ?",
      choices: ["Délai de propagation excessif", "La condition de course (race-around condition) se produisant dans les bascules déclenchées par niveau", "Dissipation de puissance", "L'exigence d'impulsions d'horloge"],
      options: ["Délai de propagation excessif", "La condition de course (race-around condition) se produisant dans les bascules déclenchées par niveau", "Dissipation de puissance", "L'exigence d'impulsions d'horloge"],
      correctAnswer: 1,
      explanation: "Les bascules Maître-Esclave isolent l'échantillonnage d'entrée (maître) de la mise à jour de la sortie (esclave) pour éliminer le basculement dû à la condition de course.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel schéma d'arbitrage de bus détermine la propriété du bus via une chaîne série passant d'un périphérique à l'autre ?",
      choices: ["Arbitrage parallèle centralisé", "Chaînage en guirlande (Daisy-chaining)", "Arbitrage par requête indépendante", "Tourniquet à tranches de temps"],
      options: ["Arbitrage parallèle centralisé", "Chaînage en guirlande (Daisy-chaining)", "Arbitrage par requête indépendante", "Tourniquet à tranches de temps"],
      correctAnswer: 1,
      explanation: "Dans l'arbitrage en chaîne en guirlande, le signal d'octroi se propage séquentiellement à travers les périphériques par ordre de priorité décroissant.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quelles sont les tâches opérationnelles principales exécutées par l'Unité Arithmétique et Logique (ALU) ?",
      choices: ["Traduction d'adresses et gestion des défauts de page", "Opérations arithmétiques sur les entiers (addition, soustraction) et opérations logiques bit à bit", "Lecture de secteurs à partir de disques magnétiques secondaires", "Ordonnancement des processus utilisateur en mémoire"],
      options: ["Traduction d'adresses et gestion des défauts de page", "Opérations arithmétiques sur les entiers (addition, soustraction) et opérations logiques bit à bit", "Lecture de secteurs à partir de disques magnétiques secondaires", "Ordonnancement des processus utilisateur en mémoire"],
      correctAnswer: 1,
      explanation: "L'ALU exécute les opérations arithmétiques (addition, soustraction) et logiques (ET, OU, NON, XOR, décalage) fondamentales.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qui caractérise les E/S mappées en mémoire (memory-mapped I/O) en architecture informatique ?",
      choices: ["Les registres des périphériques d'E/S partagent le même espace d'adressage que la RAM et sont accessibles à l'aide d'instructions standard de chargement/stockage mémoire", "Les périphériques d'E/S utilisent un espace d'adressage distinct nécessitant des instructions IN et OUT dédiées", "Les E/S nécessitent des interrupteurs physiques sur la carte mère", "La mémoire est mappée directement sur les secteurs du disque dur"],
      options: ["Les registres des périphériques d'E/S partagent le même espace d'adressage que la RAM et sont accessibles à l'aide d'instructions standard de chargement/stockage mémoire", "Les périphériques d'E/S utilisent un espace d'adressage distinct nécessitant des instructions IN et OUT dédiées", "Les E/S nécessitent des interrupteurs physiques sur la carte mère", "La mémoire est mappée directement sur les secteurs du disque dur"],
      correctAnswer: 0,
      explanation: "Dans les E/S mappées en mémoire, les registres des périphériques se voient attribuer des adresses mémoire régulières, permettant aux instructions mémoire standard de contrôler les périphériques.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel est le but d'un tampon de prélecture d'instructions (instruction prefetch buffer) dans le matériel du CPU ?",
      choices: ["Stocker les résultats de calcul terminés avant l'écriture en retour dans le cache", "Récupérer les instructions séquentielles à venir de la mémoire à l'avance pour masquer la latence", "Mettre en file d'attente les requêtes d'interruption des périphériques externes", "Maintenir les mappages d'adresses virtuelles à physiques"],
      options: ["Stocker les résultats de calcul terminés avant l'écriture en retour dans le cache", "Récupérer les instructions séquentielles à venir de la mémoire à l'avance pour masquer la latence", "Mettre en file d'attente les requêtes d'interruption des périphériques externes", "Maintenir les mappages d'adresses virtuelles à physiques"],
      correctAnswer: 1,
      explanation: "Les tampons de prélecture chargent les instructions de la mémoire dans une file d'attente interne rapide avant que le moteur d'exécution ne les demande.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel sous-système du CPU génère les signaux de synchronisation et de contrôle pour séquencer toutes les opérations internes du processeur ?",
      choices: ["Unité Arithmétique et Logique (ALU)", "Unité de Commande (UC)", "Contrôleur Mémoire", "Unité de Virgule Flottante (FPU)"],
      options: ["Unité Arithmétique et Logique (ALU)", "Unité de Commande (UC)", "Contrôleur Mémoire", "Unité de Virgule Flottante (FPU)"],
      correctAnswer: 1,
      explanation: "L'Unité de Commande (UC) orchestre les opérations du CPU en décodant les instructions et en générant des impulsions de contrôle matérielles.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel est le principal avantage de la prédiction de branchement dynamique par rapport à la prédiction de branchement statique ?",
      choices: ["Elle adapte les décisions de branchement à l'exécution en fonction de l'historique d'exécution passé et des tables de motifs de branchement", "Elle élimine toutes les pénalités de branchement inconditionnellement", "Elle ne nécessite aucun transistor matériel", "Elle garantit une précision de prédiction de 100%"],
      options: ["Elle adapte les décisions de branchement à l'exécution en fonction de l'historique d'exécution passé et des tables de motifs de branchement", "Elle élimine toutes les pénalités de branchement inconditionnellement", "Elle ne nécessite aucun transistor matériel", "Elle garantit une précision de prédiction de 100%"],
      correctAnswer: 0,
      explanation: "La prédiction de branchement dynamique utilise des compteurs d'historique d'exécution pour ajuster les prédictions dynamiquement en fonction des tendances d'exécution.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Qu'est-ce que le temps de propagation d'une porte logique en électronique numérique ?",
      choices: ["L'intervalle de temps physique nécessaire pour qu'un changement à l'entrée provoque un changement correspondant à la sortie", "Le temps qu'un signal met pour traverser un fil d'un mètre", "La durée d'un cycle d'horloge complet", "Le temps nécessaire pour décharger un condensateur de découplage"],
      options: ["L'intervalle de temps physique nécessaire pour qu'un changement à l'entrée provoque un changement correspondant à la sortie", "Le temps qu'un signal met pour traverser un fil d'un mètre", "La durée d'un cycle d'horloge complet", "Le temps nécessaire pour décharger un condensateur de découplage"],
      correctAnswer: 0,
      explanation: "Le temps de propagation est la latence physique entre une transition d'entrée et la transition de sortie stabilisée d'une porte logique.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel type de mémoire morte (ROM) peut être effacé en exposant la puce à la lumière ultraviolette (UV) à travers une fenêtre en quartz ?",
      choices: ["PROM", "EPROM", "EEPROM", "Mémoire Flash"],
      options: ["PROM", "EPROM", "EEPROM", "Mémoire Flash"],
      correctAnswer: 1,
      explanation: "L'EPROM (Erasable Programmable ROM) est effacée en exposant sa fenêtre en quartz à une lumière UV intense pour neutraliser les portes flottantes.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quelle capacité de détection d'erreurs est fournie par un bit de parité unique ajouté à un mot de données ?",
      choices: ["Correction d'erreurs sur un seul bit", "Détection de tout nombre impair d'erreurs de bits (typiquement la détection d'erreurs sur un seul bit)", "Détection certaine d'erreurs en rafale de 2 bits", "Chiffrement des données contre la falsification"],
      options: ["Correction d'erreurs sur un seul bit", "Détection de tout nombre impair d'erreurs de bits (typiquement la détection d'erreurs sur un seul bit)", "Détection certaine d'erreurs en rafale de 2 bits", "Chiffrement des données contre la falsification"],
      correctAnswer: 1,
      explanation: "Un bit de parité détecte un nombre impair d'erreurs de bits (par exemple, des inversions d'un seul bit), mais ne peut pas détecter un nombre pair d'erreurs ni les corriger.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quel est l'objectif de l'exécution dans le désordre (OoOE) dans les processeurs haute performance ?",
      choices: ["Exécuter les instructions prêtes avant les instructions antérieures bloquées afin de maximiser l'utilisation des ressources matérielles", "Diminuer le nombre physique de registres requis", "Empêcher entièrement les erreurs de prédiction de branchement", "Éliminer le besoin de mémoire cache"],
      options: ["Exécuter les instructions prêtes avant les instructions antérieures bloquées afin de maximiser l'utilisation des ressources matérielles", "Diminuer le nombre physique de registres requis", "Empêcher entièrement les erreurs de prédiction de branchement", "Éliminer le besoin de mémoire cache"],
      correctAnswer: 0,
      explanation: "L'OoOE réorganise dynamiquement l'exécution des instructions pour éviter les blocages causés par des latences de cache élevées ou des dépendances.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "En conception de matériel numérique, qu'est-ce que le 'chemin critique' ?",
      choices: ["Le chemin avec la consommation de courant la plus élevée", "Le chemin combinatoire avec le délai de propagation total le plus long entre les registres séquentiels", "La connexion filaire la plus courte sur la carte mère", "Le rail d'alimentation fournissant 3,3V"],
      options: ["Le chemin avec la consommation de courant la plus élevée", "Le chemin combinatoire avec le délai de propagation total le plus long entre les registres séquentiels", "La connexion filaire la plus courte sur la carte mère", "Le rail d'alimentation fournissant 3,3V"],
      correctAnswer: 1,
      explanation: "Le chemin critique est le chemin de délai le plus long entre les éléments séquentiels, déterminant la fréquence d'horloge maximale du circuit.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quelle technique architecturale élimine les fausses dépendances de données (Write-After-Read et Write-After-Write) dans les CPU à exécution dans le désordre ?",
      choices: ["Prédiction de branchement", "Renommage de registres", "Écriture directe en cache (write-through)", "Prérécupération d'instructions"],
      options: ["Prédiction de branchement", "Renommage de registres", "Écriture directe en cache (write-through)", "Prérécupération d'instructions"],
      correctAnswer: 1,
      explanation: "Le renommage de registres mappe les noms de registres architecturaux à un plus grand pool de registres physiques, résolvant ainsi les fausses dépendances WAR et WAW.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel état de sortie un buffer à trois états produit-il lorsque sa ligne de commande d'activation est inactive ?",
      choices: ["Logique 0 (Masse)", "Logique 1 (Vdd)", "Haute impédance (Hi-Z)", "Oscillation continue"],
      options: ["Logique 0 (Masse)", "Logique 1 (Vdd)", "Haute impédance (Hi-Z)", "Oscillation continue"],
      correctAnswer: 2,
      explanation: "Lorsqu'il est désactivé, un buffer à trois états entre dans un état de haute impédance (Hi-Z), déconnectant électriquement sa sortie du bus partagé.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Dans l'évaluation des performances d'un processeur, que signifie la métrique CPI ?",
      choices: ["Cycles Par Instruction", "Interface de Traitement Central", "Impulsions d'Horloge par Interconnexion", "Indice de Traitement du Cœur"],
      options: ["Cycles Par Instruction", "Interface de Traitement Central", "Impulsions d'Horloge par Interconnexion", "Indice de Traitement du Cœur"],
      correctAnswer: 0,
      explanation: "Le CPI (Cycles Par Instruction) mesure le nombre moyen de cycles d'horloge nécessaires pour exécuter une instruction.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quel circuit combinatoire additionne deux entrées binaires de 1 bit, produisant des sorties Somme et Retenue sans accepter de bit de retenue entrant ?",
      choices: ["Demi-additionneur", "Additionneur complet", "Additionneur à anticipation de retenue", "Additionneur BCD"],
      options: ["Demi-additionneur", "Additionneur complet", "Additionneur à anticipation de retenue", "Additionneur BCD"],
      correctAnswer: 0,
      explanation: "Un demi-additionneur effectue l'addition de 1 bit de deux opérandes, générant la Somme (A XOR B) et la Retenue (A ET B), sans retenue entrante.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel est le rôle principal de l'unité de gestion de mémoire (MMU) ?",
      choices: ["Effectuer des opérations arithmétiques matérielles sur des matrices", "Traduire les adresses virtuelles en adresses physiques et appliquer la protection d'accès", "Gérer le partitionnement du disque dur", "Encoder des images vidéo pour l'affichage"],
      options: ["Effectuer des opérations arithmétiques matérielles sur des matrices", "Traduire les adresses virtuelles en adresses physiques et appliquer la protection d'accès", "Gérer le partitionnement du disque dur", "Encoder des images vidéo pour l'affichage"],
      correctAnswer: 1,
      explanation: "La MMU effectue la traduction des adresses virtuelles en adresses physiques et vérifie les permissions d'accès aux segments de mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Dans les architectures multiprocesseurs, qu'est-ce qui caractérise l'accès mémoire non uniforme (NUMA) ?",
      choices: ["La latence d'accès à la mémoire varie selon que le banc de mémoire ciblé est local ou attaché à un socket CPU distant", "Tous les CPU subissent une latence d'accès identique à n'importe quel emplacement de la RAM", "Les blocs de mémoire sont volatils et rafraîchis de manière non uniforme", "Un seul CPU est autorisé à accéder à la RAM à la fois"],
      options: ["La latence d'accès à la mémoire varie selon que le banc de mémoire ciblé est local ou attaché à un socket CPU distant", "Tous les CPU subissent une latence d'accès identique à n'importe quel emplacement de la RAM", "Les blocs de mémoire sont volatils et rafraîchis de manière non uniforme", "Un seul CPU est autorisé à accéder à la RAM à la fois"],
      correctAnswer: 0,
      explanation: "Dans les systèmes NUMA, l'accès à la mémoire locale au socket d'un processeur est plus rapide que l'accès à la mémoire attachée à d'autres sockets.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel circuit numérique prend 2^n lignes d'entrée et affirme un code binaire de n bits représentant la ligne active ?",
      choices: ["Décodeur binaire", "Encodeur à priorité", "Multiplexeur", "Démultiplexeur"],
      options: ["Décodeur binaire", "Encodeur à priorité", "Multiplexeur", "Démultiplexeur"],
      correctAnswer: 1,
      explanation: "Un encodeur produit un code binaire de n bits correspondant à la ligne active parmi ses 2^n lignes d'entrée.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quelle est la fonction principale d'un registre à décalage matériel ?",
      choices: ["Multiplier des nombres par zéro", "Stocker et décaler séquentiellement des bits binaires vers la gauche ou la droite sur des impulsions d'horloge successives", "Décoder les opcodes d'assemblage en mots de commande", "Générer des ondes carrées d'horloge système"],
      options: ["Multiplier des nombres par zéro", "Stocker et décaler séquentiellement des bits binaires vers la gauche ou la droite sur des impulsions d'horloge successives", "Décoder les opcodes d'assemblage en mots de commande", "Générer des ondes carrées d'horloge système"],
      correctAnswer: 1,
      explanation: "Un registre à décalage est une chaîne de bascules qui décale ses bits stockés d'une position par transition d'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qu'un vecteur d'interruption en architecture des ordinateurs ?",
      choices: ["Une ligne géométrique sur une carte de circuit imprimé", "L'adresse mémoire de la routine de service d'interruption (ISR) désignée pour gérer une interruption spécifique", "Le numéro de priorité d'une défaillance matérielle", "Un registre CPU stockant les comptes d'instructions"],
      options: ["Une ligne géométrique sur une carte de circuit imprimé", "L'adresse mémoire de la routine de service d'interruption (ISR) désignée pour gérer une interruption spécifique", "Le numéro de priorité d'une défaillance matérielle", "Un registre CPU stockant les comptes d'instructions"],
      correctAnswer: 1,
      explanation: "Un vecteur d'interruption est l'adresse mémoire pointant vers la routine de gestion (ISR) pour une interruption désignée.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quelle norme IEEE spécifie le réseau Ethernet filaire aux couches physique et liaison de données ?",
      choices: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.15", "IEEE 754"],
      options: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.15", "IEEE 754"],
      correctAnswer: 0,
      explanation: "L'IEEE 802.3 régit les normes de réseau Ethernet filaire et les spécifications des médias.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qui distingue un compteur synchrone d'un compteur asynchrone (à propagation) ?",
      choices: ["Dans un compteur synchrone, toutes les bascules sont cadencées simultanément par un signal d'horloge commun", "Dans un compteur synchrone, chaque étage est cadencé par la sortie de l'étage précédent", "Les compteurs synchrones ne nécessitent pas d'alimentation", "Les compteurs synchrones ne peuvent que décompter"],
      options: ["Dans un compteur synchrone, toutes les bascules sont cadencées simultanément par un signal d'horloge commun", "Dans un compteur synchrone, chaque étage est cadencé par la sortie de l'étage précédent", "Les compteurs synchrones ne nécessitent pas d'alimentation", "Les compteurs synchrones ne peuvent que décompter"],
      correctAnswer: 0,
      explanation: "Les compteurs synchrones connectent la ligne d'horloge principale directement à chaque bascule, assurant des transitions d'état simultanées.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Que désigne la profondeur de pipeline en microarchitecture CPU ?",
      choices: ["Le nombre physique total d'étapes séquentielles distinctes par lesquelles une instruction passe", "La longueur du bus de données en centimètres", "La taille du cache L2 en mégaoctets", "Le nombre de threads d'exécution de cœur"],
      options: ["Le nombre physique total d'étapes séquentielles distinctes par lesquelles une instruction passe", "La longueur du bus de données en centimètres", "La taille du cache L2 en mégaoctets", "Le nombre de threads d'exécution de cœur"],
      correctAnswer: 0,
      explanation: "La profondeur de pipeline est le nombre d'étapes séquentielles qu'une instruction traverse, de la récupération à la mise à la retraite.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Comment est calculé l'équivalent négatif d'un entier en complément à deux ?",
      choices: ["Inverser chaque bit et ajouter 1 au bit de poids faible", "Inverser chaque bit sans rien ajouter", "Décaler tous les bits d'une position vers la gauche", "Mettre le bit de signe à 1 tout en laissant les autres bits inchangés"],
      options: ["Inverser chaque bit et ajouter 1 au bit de poids faible", "Inverser chaque bit sans rien ajouter", "Décaler tous les bits d'une position vers la gauche", "Mettre le bit de signe à 1 tout en laissant les autres bits inchangés"],
      correctAnswer: 0,
      explanation: "La négation en complément à deux est réalisée par une inversion bit à bit (NOT) suivie de l'ajout de 1.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quelle technologie logique à semi-conducteurs est principalement choisie pour les processeurs modernes en raison de sa consommation d'énergie statique quasi nulle ?",
      choices: ["Logique Transistor-Transistor (TTL)", "Logique à Émetteur Couplé (ECL)", "Semi-conducteur à Oxyde de Métal Complémentaire (CMOS)", "Logique Résistance-Transistor (RTL)"],
      options: ["Logique Transistor-Transistor (TTL)", "Logique à Émetteur Couplé (ECL)", "Semi-conducteur à Oxyde de Métal Complémentaire (CMOS)", "Logique Résistance-Transistor (RTL)"],
      correctAnswer: 2,
      explanation: "Le CMOS consomme une puissance statique négligeable car ses paires complémentaires pMOS/nMOS ne sont jamais simultanément actives en régime permanent.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quelle est la fonction d'un contrôleur de cache 'snooping' (à écoute) sur un bus mémoire partagé ?",
      choices: ["Surveiller les transactions mémoire du bus pour invalider ou mettre à jour les blocs de cache obsolètes", "Enregistrer les frappes de l'utilisateur à des fins de surveillance", "Inspecter les paquets réseau à la recherche de logiciels malveillants", "Compresser le contenu de la RAM en arrière-plan"],
      options: ["Surveiller les transactions mémoire du bus pour invalider ou mettre à jour les blocs de cache obsolètes", "Enregistrer les frappes de l'utilisateur à des fins de surveillance", "Inspecter les paquets réseau à la recherche de logiciels malveillants", "Compresser le contenu de la RAM en arrière-plan"],
      correctAnswer: 0,
      explanation: "Les contrôleurs de cache 'snooping' surveillent les transactions du bus pour maintenir la cohérence du cache entre les processeurs multicœurs.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Quel était le but original d'un 'branch delay slot' (emplacement de délai de branchement) dans les premières architectures RISC (comme MIPS) ?",
      choices: ["Exécuter l'instruction suivant immédiatement un branchement inconditionnellement pendant que la cible du branchement était récupérée", "Empêcher l'exécution des interruptions", "Mettre en tampon les tables d'historique des branchements dans la RAM", "Conserver les valeurs de retour des appels système"],
      options: ["Exécuter l'instruction suivant immédiatement un branchement inconditionnellement pendant que la cible du branchement était récupérée", "Empêcher l'exécution des interruptions", "Mettre en tampon les tables d'historique des branchements dans la RAM", "Conserver les valeurs de retour des appels système"],
      correctAnswer: 0,
      explanation: "Les 'branch delay slots' permettaient à l'instruction suivant immédiatement le branchement de s'exécuter, masquant ainsi la latence de récupération de la cible du branchement.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quelle était la fonction principale du registre Accumulateur dans les conceptions classiques de CPU ?",
      choices: ["Stocker implicitement un opérande et le résultat des calculs arithmétiques et logiques", "Stocker les répertoires de pages du noyau du système d'exploitation", "Contenir les drapeaux de demande d'interruption", "Suivre le temps d'exécution du programme"],
      options: ["Stocker implicitement un opérande et le résultat des calculs arithmétiques et logiques", "Stocker les répertoires de pages du noyau du système d'exploitation", "Contenir les drapeaux de demande d'interruption", "Suivre le temps d'exécution du programme"],
      correctAnswer: 0,
      explanation: "L'Accumulateur (AC) est un registre où les résultats des opérations arithmétiques et logiques sont automatiquement accumulés.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Comment un bus asynchrone coordonne-t-il les transferts de données sans horloge centrale partagée ?",
      choices: ["En utilisant des lignes de protocole d'établissement de liaison (handshaking) bidirectionnelles ou quadridirectionnelles de requête et d'acquittement", "En s'appuyant sur la synchronisation horaire GPS", "En transmettant en continu à des débits en bauds fixes", "En utilisant des liaisons par fibre optique"],
      options: ["En utilisant des lignes de protocole d'établissement de liaison (handshaking) bidirectionnelles ou quadridirectionnelles de requête et d'acquittement", "En s'appuyant sur la synchronisation horaire GPS", "En transmettant en continu à des débits en bauds fixes", "En utilisant des liaisons par fibre optique"],
      correctAnswer: 0,
      explanation: "Les bus asynchrones utilisent des signaux de contrôle d'établissement de liaison (REQ et ACK) pour coordonner les transferts entre l'émetteur et le récepteur.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quelle est la composition physique de base d'une cellule de stockage de la RAM dynamique (DRAM) ?",
      choices: ["Un transistor et un condensateur (1T-1C)", "Six transistors couplés en croix (6T)", "Deux diodes et une résistance", "Un anneau toroïdal magnétique"],
      options: ["Un transistor et un condensateur (1T-1C)", "Six transistors couplés en croix (6T)", "Deux diodes et une résistance", "Un anneau toroïdal magnétique"],
      correctAnswer: 0,
      explanation: "La DRAM stocke chaque bit de données sous forme de charge électrique dans un condensateur accessible via un seul MOSFET (structure 1T-1C).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quelle unité est standard pour exprimer les fréquences d'horloge des processeurs dans l'informatique de bureau moderne ?",
      choices: ["Gigahertz (GHz)", "Mégaoctets par seconde (Mo/s)", "Nanosecondes (ns)", "MFLOPS"],
      options: ["Gigahertz (GHz)", "Mégaoctets par seconde (Mo/s)", "Nanosecondes (ns)", "MFLOPS"],
      correctAnswer: 0,
      explanation: "La vitesse d'horloge du processeur est mesurée en Gigahertz (GHz), désignant des milliards de cycles d'horloge par seconde.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quelle est la fonction d'un démultiplexeur (DEMUX) ?",
      choices: ["Acheminer des données d'une seule ligne d'entrée vers l'une de plusieurs lignes de sortie en fonction des lignes de sélection", "Combiner plusieurs signaux d'entrée sur un seul fil", "Effectuer une multiplication matérielle", "Stocker des données pendant les cycles d'horloge"],
      options: ["Acheminer des données d'une seule ligne d'entrée vers l'une de plusieurs lignes de sortie en fonction des lignes de sélection", "Combiner plusieurs signaux d'entrée sur un seul fil", "Effectuer une multiplication matérielle", "Stocker des données pendant les cycles d'horloge"],
      correctAnswer: 0,
      explanation: "Un démultiplexeur dirige un seul canal d'entrée vers l'un des 2^n canaux de sortie, déterminé par n bits de contrôle de sélection.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Selon le théorème de De Morgan, quel est l'équivalent de (A + B)' ?",
      choices: ["A' . B'", "A' + B'", "A . B", "(A . B)'"],
      options: ["A' . B'", "A' + B'", "A . B", "(A . B)'"],
      correctAnswer: 0,
      explanation: "Le théorème de De Morgan stipule que : (A + B)' = A' . B' (le complément d'un OU est le ET des compléments).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Que signifie le parallélisme au niveau des instructions (ILP) ?",
      choices: ["Exécuter simultanément plusieurs instructions d'un même fil d'exécution de programme au niveau matériel", "Exécuter plusieurs systèmes d'exploitation sur des machines virtuelles", "Distribuer des tâches sur des serveurs Internet", "Transférer des paquets entre des routeurs"],
      options: ["Exécuter simultanément plusieurs instructions d'un même fil d'exécution de programme au niveau matériel", "Exécuter plusieurs systèmes d'exploitation sur des machines virtuelles", "Distribuer des tâches sur des serveurs Internet", "Transférer des paquets entre des routeurs"],
      correctAnswer: 0,
      explanation: "L'ILP fait référence aux capacités matérielles du processeur (comme le pipeline et l'exécution superscalaire) qui permettent d'exécuter plusieurs instructions simultanément.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qui distingue un cache d'instructions L1 et un cache de données L1 séparés (architecture Harvard L1 scindée) ?",
      choices: ["Permet la récupération simultanée d'instructions et l'accès aux données en mémoire sans aléas structurels", "Double la capacité totale de la RAM physique", "Empêche l'écriture en mémoire", "Élimine la vérification des étiquettes de cache"],
      options: ["Permet la récupération simultanée d'instructions et l'accès aux données en mémoire sans aléas structurels", "Double la capacité totale de la RAM physique", "Empêche l'écriture en mémoire", "Élimine la vérification des étiquettes de cache"],
      correctAnswer: 0,
      explanation: "Les caches L1 scindés offrent des chemins indépendants, permettant la récupération concurrente d'instructions et les opérations de chargement/stockage en mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Qu'est-ce qu'un code d'opération (opcode) d'instruction ?",
      choices: ["La partie d'une instruction machine spécifiant l'opération à effectuer", "L'adresse mémoire où l'opérande est stocké", "Le numéro de ligne dans le code source", "Le registre contenant le résultat"],
      options: ["La partie d'une instruction machine spécifiant l'opération à effectuer", "L'adresse mémoire où l'opérande est stocké", "Le numéro de ligne dans le code source", "Le registre contenant le résultat"],
      correctAnswer: 0,
      explanation: "Le code d'opération (opcode) définit l'opération du processeur (telle que ADD, SUB, JUMP, LOAD) à exécuter.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Que signifie le terme 'little-endian' pour l'ordre des octets ?",
      choices: ["L'octet de poids faible est stocké à l'adresse mémoire la plus basse", "L'octet de poids fort est stocké à l'adresse mémoire la plus basse", "Les bits à l'intérieur d'un octet sont inversés", "Les données sont compressées en utilisant l'encodage de Huffman"],
      options: ["L'octet de poids faible est stocké à l'adresse mémoire la plus basse", "L'octet de poids fort est stocké à l'adresse mémoire la plus basse", "Les bits à l'intérieur d'un octet sont inversés", "Les données sont compressées en utilisant l'encodage de Huffman"],
      correctAnswer: 0,
      explanation: "Les systèmes little-endian placent l'octet de poids faible (LSB) à l'adresse numérique la plus basse.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce que le 'débordement de registres' (register spilling) lors de la compilation et de l'exécution d'un programme ?",
      choices: ["Stocker les variables de registre sur la pile mémoire lorsque tous les registres matériels sont occupés", "Court-circuit électrique à l'intérieur du fichier de registres", "Écrasement accidentel de registres dû à une surtension", "Dupliquer le contenu des registres dans le cache"],
      options: ["Stocker les variables de registre sur la pile mémoire lorsque tous les registres matériels sont occupés", "Court-circuit électrique à l'intérieur du fichier de registres", "Écrasement accidentel de registres dû à une surtension", "Dupliquer le contenu des registres dans le cache"],
      correctAnswer: 0,
      explanation: "Le débordement de registres se produit lorsque le compilateur a plus de variables actives que de registres CPU disponibles et doit en sauvegarder certaines en mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quelle est la fonction d'un décaleur en barillet (barrel shifter) dans le chemin de données d'un CPU ?",
      choices: ["Décaler ou faire pivoter un mot de données d'un nombre arbitraire de positions de bits en un seul cycle d'horloge", "Faire tourner les plateaux de disque dur à des vitesses variables", "Mettre en tampon les requêtes d'interruption des périphériques", "Convertir des nombres à virgule flottante en entiers"],
      options: ["Décaler ou faire pivoter un mot de données d'un nombre arbitraire de positions de bits en un seul cycle d'horloge", "Faire tourner les plateaux de disque dur à des vitesses variables", "Mettre en tampon les requêtes d'interruption des périphériques", "Convertir des nombres à virgule flottante en entiers"],
      correctAnswer: 0,
      explanation: "Un décaleur en barillet est un circuit combinatoire qui décale des données d'un nombre spécifié de bits en un seul cycle d'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel est le dual de l'expression algébrique booléenne A . (B + C) = (A . B) + (A . C) ?",
      choices: ["A + (B . C) = (A + B) . (A + C)", "A . (B . C) = A + B + C", "A' . (B' + C') = A' + B'", "A + B + C = 1"],
      options: ["A + (B . C) = (A + B) . (A + C)", "A . (B . C) = A + B + C", "A' . (B' + C') = A' + B'", "A + B + C = 1"],
      correctAnswer: 0,
      explanation: "Le dual est formé en échangeant ET avec OU, et OU avec ET : A + (B . C) = (A + B) . (A + C).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Que décrit le terme Architecture du Jeu d'Instructions (ISA) ?",
      choices: ["La spécification abstraite visible par le programmeur des instructions, des registres et des modèles de mémoire d'un CPU", "La disposition microscopique de la lithographie des semi-conducteurs", "La marque du chipset de la carte mère", "L'utilitaire de configuration du BIOS"],
      options: ["La spécification abstraite visible par le programmeur des instructions, des registres et des modèles de mémoire d'un CPU", "La disposition microscopique de la lithographie des semi-conducteurs", "La marque du chipset de la carte mère", "L'utilitaire de configuration du BIOS"],
      correctAnswer: 0,
      explanation: "L'ISA est l'interface conceptuelle logiciel-matériel définissant les instructions, les registres et les modes d'adressage mémoire.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Pourquoi les opérations d'effacement de la mémoire flash doivent-elles être effectuées par blocs plutôt que par octets individuels ?",
      choices: ["En raison de l'architecture physique où les transistors à grille flottante partagent des lignes d'effacement de substrat communes", "Pour se conformer aux lois sur le droit d'auteur des logiciels", "Parce que les octets sont trop petits pour recevoir une charge électrique", "Pour éviter la surchauffe du CPU"],
      options: ["En raison de l'architecture physique où les transistors à grille flottante partagent des lignes d'effacement de substrat communes", "Pour se conformer aux lois sur le droit d'auteur des logiciels", "Parce que les octets sont trop petits pour recevoir une charge électrique", "Pour éviter la surchauffe du CPU"],
      correctAnswer: 0,
      explanation: "La mémoire flash peut être lue et programmée par mots/octets, mais son architecture par blocs exige l'effacement de secteurs entiers de plusieurs kilo-octets en une seule fois.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Quel est le rapport cyclique d'une horloge système à onde carrée symétrique ?",
      choices: ["50%", "25%", "75%", "100%"],
      options: ["50%", "25%", "75%", "100%"],
      correctAnswer: 0,
      explanation: "Une onde carrée symétrique passe un temps égal à l'état haut et à l'état bas, ce qui donne un rapport cyclique de 50%.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "Qu'est-ce qu'une bascule sensible aux fronts (edge-triggered flip-flop) ?",
      choices: ["Un multivibrateur bistable qui ne change d'état que sur la transition de tension montante ou descendante de l'horloge", "Une porte qui commute continuellement dès que l'alimentation est appliquée", "Un verrou combinatoire non cadencé", "Un tampon mémoire qui nécessite une réinitialisation manuelle"],
      options: ["Un multivibrateur bistable qui ne change d'état que sur la transition de tension montante ou descendante de l'horloge", "Une porte qui commute continuellement dès que l'alimentation est appliquée", "Un verrou combinatoire non cadencé", "Un tampon mémoire qui nécessite une réinitialisation manuelle"],
      correctAnswer: 0,
      explanation: "Les bascules sensibles aux fronts échantillonnent les données d'entrée et mettent à jour les sorties strictement pendant la transition de tension du signal d'horloge.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel format d'instruction ne nécessite aucune adresse d'opérande mémoire explicite car il opère sur une pile ?",
      choices: ["Format d'instruction à zéro adresse", "Format d'instruction à une adresse", "Format d'instruction à deux adresses", "Format d'instruction à trois adresses"],
      options: ["Format d'instruction à zéro adresse", "Format d'instruction à une adresse", "Format d'instruction à deux adresses", "Format d'instruction à trois adresses"],
      correctAnswer: 0,
      explanation: "Les instructions à zéro adresse dépilent implicitement leurs opérandes et empilent les résultats sur le sommet de la pile d'exécution.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Moyen" as any,
      question: "Quel est le rôle principal d'un émetteur-récepteur de bus (bus transceiver) ?",
      choices: ["Faciliter le transfert de données bidirectionnel entre deux bus avec une capacité d'isolation à haute impédance", "Amplifier les fréquences radio dans les réseaux sans fil", "Convertir les signaux optiques en audio électrique", "Générer les signaux d'horloge du système"],
      options: ["Faciliter le transfert de données bidirectionnel entre deux bus avec une capacité d'isolation à haute impédance", "Amplifier les fréquences radio dans les réseaux sans fil", "Convertir les signaux optiques en audio électrique", "Générer les signaux d'horloge du système"],
      correctAnswer: 0,
      explanation: "Un émetteur-récepteur de bus permet la communication bidirectionnelle de signaux entre les bus et fournit une isolation à haute impédance lorsqu'il est désactivé.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel est le principe de la localité temporelle dans les hiérarchies de mémoire ?",
      choices: ["Les données récemment accédées sont très susceptibles d'être accédées à nouveau dans un futur proche", "Les données stockées dans des adresses mémoire adjacentes seront accédées prochainement", "La vitesse d'accès à la mémoire augmente avec la température", "La vitesse d'exécution des instructions dépend du temps d'horloge"],
      options: ["Les données récemment accédées sont très susceptibles d'être accédées à nouveau dans un futur proche", "Les données stockées dans des adresses mémoire adjacentes seront accédées prochainement", "La vitesse d'accès à la mémoire augmente avec la température", "La vitesse d'exécution des instructions dépend du temps d'horloge"],
      correctAnswer: 0,
      explanation: "La localité temporelle stipule que les emplacements mémoire récemment accédés sont susceptibles d'être référencés à nouveau prochainement (par exemple, dans des boucles).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel est le principe de la localité spatiale dans les hiérarchies de mémoire ?",
      choices: ["Les éléments de données dont les adresses mémoire sont proches de données récemment accédées sont susceptibles d'être accédés prochainement", "Les éléments de données récemment accédés seront accédés de manière répétée", "Les données stockées dans le cloud voyagent plus vite", "Les adresses mémoire sont distribuées uniformément"],
      options: ["Les éléments de données dont les adresses mémoire sont proches de données récemment accédées sont susceptibles d'être accédés prochainement", "Les éléments de données récemment accédés seront accédés de manière répétée", "Les données stockées dans le cloud voyagent plus vite", "Les adresses mémoire sont distribuées uniformément"],
      correctAnswer: 0,
      explanation: "La localité spatiale stipule que lorsqu'une adresse est accédée, les adresses contiguës proches sont susceptibles d'être référencées sous peu (par exemple, lors du parcours d'un tableau).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Quel aléa matériel survient lorsque deux instructions nécessitent la même ressource matérielle simultanément ?",
      choices: ["Aléa structurel", "Aléa de données", "Aléa de contrôle", "Pénalité de branchement"],
      options: ["Aléa structurel", "Aléa de données", "Aléa de contrôle", "Pénalité de branchement"],
      correctAnswer: 0,
      explanation: "Les aléas structurels se produisent lorsque des conflits de ressources matérielles empêchent l'exécution concurrente des étages du pipeline.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qu'une interruption asynchrone dans la terminologie des processeurs ?",
      choices: ["Une interruption causée par un événement matériel externe indépendant de l'exécution des instructions (par exemple, minuterie, E/S)", "Un piège causé par une division par zéro", "Une exception de code d'opération invalide", "Un appel système logiciel"],
      options: ["Une interruption causée par un événement matériel externe indépendant de l'exécution des instructions (par exemple, minuterie, E/S)", "Un piège causé par une division par zéro", "Une exception de code d'opération invalide", "Un appel système logiciel"],
      correctAnswer: 0,
      explanation: "Les interruptions asynchrones sont déclenchées par des événements matériels externes (tels que la fin d'une E/S disque ou des tops d'horloge) indépendamment de l'horloge du CPU.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Qu'est-ce qu'une interruption synchrone (piège ou exception) ?",
      choices: ["Un événement causé directement par l'exécution de l'instruction courante (par exemple, division par zéro, défaut de page)", "Une interruption déclenchée par l'arrivée d'un paquet réseau", "Un signal de pression de touche de clavier", "Une alerte de ventilateur de refroidissement matériel"],
      options: ["Un événement causé directement par l'exécution de l'instruction courante (par exemple, division par zéro, défaut de page)", "Une interruption déclenchée par l'arrivée d'un paquet réseau", "Un signal de pression de touche de clavier", "Une alerte de ventilateur de refroidissement matériel"],
      correctAnswer: 0,
      explanation: "Les interruptions synchrones (pièges/exceptions) se produisent de manière synchrone avec l'exécution des instructions du CPU lorsque des conditions telles que des défauts de page ou des erreurs de division se produisent.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Qu'est-ce que la microprogrammation dans la conception d'une unité de contrôle de CPU ?",
      choices: ["Une méthode où les signaux de contrôle sont générés en exécutant des micro-instructions élémentaires stockées dans une ROM de contrôle", "Écrire des programmes en langage assembleur", "Développer des micrologiciels pour microcontrôleurs", "Mettre en pipeline des boucles de langage de haut niveau"],
      options: ["Une méthode où les signaux de contrôle sont générés en exécutant des micro-instructions élémentaires stockées dans une ROM de contrôle", "Écrire des programmes en langage assembleur", "Développer des micrologiciels pour microcontrôleurs", "Mettre en pipeline des boucles de langage de haut niveau"],
      correctAnswer: 0,
      explanation: "Les unités de contrôle microprogrammées décodent les instructions en séquençant des micro-opérations récupérées d'une mémoire de contrôle interne (ROM).",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Difficile" as any,
      question: "Qu'est-ce qui distingue les unités de contrôle câblées (hardwired) des unités de contrôle microprogrammées ?",
      choices: ["Les unités câblées utilisent des portes logiques combinatoires fixes pour une vitesse d'exécution plus rapide, tandis que les unités microprogrammées utilisent des tables ROM pour la flexibilité", "Les unités câblées sont plus lentes et nécessitent plus de mémoire", "Les unités microprogrammées ne peuvent pas exécuter de sauts", "Les unités câblées ne peuvent pas être utilisées dans les CPU RISC"],
      options: ["Les unités câblées utilisent des portes logiques combinatoires fixes pour une vitesse d'exécution plus rapide, tandis que les unités microprogrammées utilisent des tables ROM pour la flexibilité", "Les unités câblées sont plus lentes et nécessitent plus de mémoire", "Les unités microprogrammées ne peuvent pas exécuter de sauts", "Les unités câblées ne peuvent pas être utilisées dans les CPU RISC"],
      correctAnswer: 0,
      explanation: "Les unités de contrôle câblées génèrent des signaux de contrôle directement via une logique combinatoire pour une vitesse maximale, bien qu'elles soient plus difficiles à modifier.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Moyen" as any,
      question: "Dans un cache à correspondance directe, comment l'indice de ligne de cache est-il déterminé à partir d'une adresse mémoire ?",
      choices: ["En prenant les bits d'adresse modulo le nombre total de lignes de cache", "En effectuant une recherche associative complète sur toutes les étiquettes", "En sélectionnant un nombre aléatoire", "En consultant la table des pages dans la RAM"],
      options: ["En prenant les bits d'adresse modulo le nombre total de lignes de cache", "En effectuant une recherche associative complète sur toutes les étiquettes", "En sélectionnant un nombre aléatoire", "En consultant la table des pages dans la RAM"],
      correctAnswer: 0,
      explanation: "Dans les caches à correspondance directe, un champ de bits spécifique de l'adresse mémoire identifie directement la seule ligne de cache où le bloc doit être mappé.",
      source: "Ancien examen"
    },
    {
      topic: "Architecture des Ordinateurs",
      difficulty: "Facile" as any,
      question: "Quel est le rôle principal du registre d'état (registre de drapeaux / PSW) ?",
      choices: ["Enregistrer les codes de condition résultant des opérations arithmétiques/logiques (Zéro, Retenue, Débordement, Signe)", "Stocker l'adresse mémoire de la prochaine instruction", "Compter le nombre d'impulsions d'horloge", "Contenir les données du tampon mémoire"],
      options: ["Enregistrer les codes de condition résultant des opérations arithmétiques/logiques (Zéro, Retenue, Débordement, Signe)", "Stocker l'adresse mémoire de la prochaine instruction", "Compter le nombre d'impulsions d'horloge", "Contenir les données du tampon mémoire"],
      correctAnswer: 0,
      explanation: "Le registre d'état enregistre les drapeaux de condition (tels que le drapeau Zéro Z, le drapeau Retenue C, le drapeau Signe S, le drapeau Débordement V) pour les branchements conditionnels.",
      source: "Ancien examen"
    },
    {
      topic: "Logique Numérique",
      difficulty: "Facile" as any,
      question: "En logique numérique, combien de mintermes existent pour une fonction booléenne avec 4 variables d'entrée ?",
      choices: ["16", "8", "4", "32"],
      options: ["16", "8", "4", "32"],
      correctAnswer: 0,
      explanation: "Une fonction avec n variables booléennes possède 2^n mintermes possibles. Pour n=4, il existe 2^4 = 16 mintermes.",
      source: "Ancien examen"
    },
  ];

  return qList.map((q, idx) => ({
    ...q,
    id: `p7-q${idx + 1}`,
    part: 7
  }));
}
