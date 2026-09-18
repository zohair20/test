import { Question } from '../../src/types';

export function buildPart2Questions(): Question[] {
  const qList: Omit<Question, 'id' | 'part'>[] = [
    // 1. Modèle relationnel & Algèbre relationnelle (1-10)
    {
      topic: 'Modèle relationnel',
      difficulty: 'Facile',
      question: "Dans le modèle relationnel introduit par Edgar F. Codd, à quoi correspond formellement une ligne (enregistrement) d'une table ?",
      choices: ["À un domaine", "À un n-uplet (ou tuple)", "À un schéma", "À une vue"],
      options: ["À un domaine", "À un n-uplet (ou tuple)", "À un schéma", "À une vue"],
      correctAnswer: 1,
      explanation: "Dans la théorie relationnelle de Codd, une ligne d'une relation (table) est appelée un n-uplet ou tuple, représentant une occurrence d'entité.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Facile',
      question: "Qu'est-ce qu'une clé primaire (Primary Key) dans une table relationnelle ?",
      choices: [
        "Un attribut qui peut contenir des valeurs nulles",
        "Un attribut ou groupe d'attributs qui identifie de manière unique et non nulle chaque tuple de la relation",
        "Un index facultatif utilisé uniquement pour accélérer les tris",
        "Une clé qui référence obligatoirement une autre table"
      ],
      options: [
        "Un attribut qui peut contenir des valeurs nulles",
        "Un attribut ou groupe d'attributs qui identifie de manière unique et non nulle chaque tuple de la relation",
        "Un index facultatif utilisé uniquement pour accélérer les tris",
        "Une clé qui référence obligatoirement une autre table"
      ],
      correctAnswer: 1,
      explanation: "La clé primaire identifie de manière univoque chaque enregistrement et garantit l'intégrité de l'entité (elle ne peut en aucun cas être NULL).",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Moyen',
      question: "En algèbre relationnelle, quel symbole désigne l'opération de Sélection (restriction des tuples vérifiant une condition) ?",
      choices: ["La lettre grecque Sigma (σ)", "La lettre grecque Pi (π)", "Le symbole de jointure (⨝)", "La lettre grecque Rho (ρ)"],
      options: ["La lettre grecque Sigma (σ)", "La lettre grecque Pi (π)", "Le symbole de jointure (⨝)", "La lettre grecque Rho (ρ)"],
      correctAnswer: 0,
      explanation: "L'opération de sélection (ou restriction) est notée σ (sigma). Elle filtre les lignes selon un prédicat. La projection (sélection de colonnes) est notée π (pi).",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Moyen',
      question: "En algèbre relationnelle, quelle opération correspond au mot-clé SQL 'SELECT colonne1, colonne2' en filtrant uniquement certaines colonnes ?",
      choices: ["La Sélection (σ)", "La Projection (π)", "Le Produit Cartésien (×)", "La Différence (-)"],
      options: ["La Sélection (σ)", "La Projection (π)", "Le Produit Cartésien (×)", "La Différence (-)"],
      correctAnswer: 1,
      explanation: "La projection, notée π (pi), permet d'isoler un sous-ensemble d'attributs (colonnes) d'une relation et d'éliminer les doublons éventuels.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Facile',
      question: "Quelle contrainte d'intégrité impose qu'une valeur de clé étrangère (Foreign Key) doive obligatoirement correspondre à une valeur existante de clé primaire dans la table référencée (ou être NULL) ?",
      choices: [
        "L'intégrité d'entité",
        "L'intégrité référentielle",
        "L'intégrité de domaine",
        "L'intégrité temporelle"
      ],
      options: [
        "L'intégrité d'entité",
        "L'intégrité référentielle",
        "L'intégrité de domaine",
        "L'intégrité temporelle"
      ],
      correctAnswer: 1,
      explanation: "L'intégrité référentielle garantit la cohérence des liaisons entre tables par le biais des clés étrangères.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Difficile',
      question: "Si la relation R comporte 10 tuples et la relation S comporte 5 tuples, combien de tuples produit le produit cartésien R × S ?",
      choices: ["15 tuples", "50 tuples", "2 tuples", "10 tuples"],
      options: ["15 tuples", "50 tuples", "2 tuples", "10 tuples"],
      correctAnswer: 1,
      explanation: "La cardinalité du produit cartésien de deux relations est le produit de leurs cardinalités : 10 × 5 = 50 tuples.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Moyen',
      question: "Quelle opération de l'algèbre relationnelle combine deux relations ayant le même schéma en ne conservant que les tuples présents dans les deux relations ?",
      choices: ["L'Union (∪)", "L'Intersection (∩)", "La Différence (-)", "La Division (÷)"],
      options: ["L'Union (∪)", "L'Intersection (∩)", "La Différence (-)", "La Division (÷)"],
      correctAnswer: 1,
      explanation: "L'intersection relationnelle (R ∩ S) renvoie les tuples appartenant simultanément à R et à S (les deux relations doivent être de même schéma).",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Difficile',
      question: "Quelle opération unaire de l'algèbre relationnelle est symbolisée par la lettre grecque Rho (ρ) ?",
      choices: ["Le Renommage", "La Restriction", "La Division", "La Jointure gauche"],
      options: ["Le Renommage", "La Restriction", "La Division", "La Jointure gauche"],
      correctAnswer: 0,
      explanation: "L'opérateur Rho (ρ) désigne le renommage d'une relation ou de certains de ses attributs.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Facile',
      question: "Qu'est-ce qu'une clé candidate (Candidate Key) ?",
      choices: [
        "N'importe quelle colonne indexée",
        "Un ensemble minimal d'attributs pouvant servir de clé primaire pour la relation",
        "Une clé générée automatiquement par un trigger",
        "Une clé étrangère qui accepte les valeurs NULL"
      ],
      options: [
        "N'importe quelle colonne indexée",
        "Un ensemble minimal d'attributs pouvant servir de clé primaire pour la relation",
        "Une clé générée automatiquement par un trigger",
        "Une clé étrangère qui accepte les valeurs NULL"
      ],
      correctAnswer: 1,
      explanation: "Une clé candidate est une super-clé minimale : elle détermine de manière unique chaque tuple sans contenir d'attribut superflu. La clé primaire est choisie parmi les clés candidates.",
      source: "Ancien examen"
    },
    {
      topic: 'Modèle relationnel',
      difficulty: 'Moyen',
      question: "Quelle contrainte d'intégrité définit l'ensemble des valeurs autorisées et le type de données pour un attribut donné (ex: entier positif, format de date valide) ?",
      choices: ["Contrainte d'entité", "Contrainte de domaine", "Contrainte référentielle", "Contrainte BCNF"],
      options: ["Contrainte d'entité", "Contrainte de domaine", "Contrainte référentielle", "Contrainte BCNF"],
      correctAnswer: 1,
      explanation: "L'intégrité de domaine spécifie le type, la plage et les règles de validation (CHECK, NOT NULL) applicables à chaque attribut.",
      source: "Ancien examen"
    },

    // 2. Normalisation & Formes Normales (11-20)
    {
      topic: 'Normalisation',
      difficulty: 'Facile',
      question: "Quelle condition fondamentale caractérise la Première Forme Normale (1FN) ?",
      choices: [
        "Tous les attributs doivent être de type VARCHAR",
        "Tous les attributs doivent contenir des valeurs atomiques (indivisibles) et il ne doit pas y avoir de groupes répétitifs",
        "Toutes les colonnes doivent être des clés étrangères",
        "Il ne doit y avoir aucune dépendance transitive"
      ],
      options: [
        "Tous les attributs doivent être de type VARCHAR",
        "Tous les attributs doivent contenir des valeurs atomiques (indivisibles) et il ne doit pas y avoir de groupes répétitifs",
        "Toutes les colonnes doivent être des clés étrangères",
        "Il ne doit y avoir aucune dépendance transitive"
      ],
      correctAnswer: 1,
      explanation: "Une relation est en 1FN si et seulement si chaque attribut contient des valeurs atomiques (scalaires, indivisibles) sans listes de valeurs ni tableaux imbriqués.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Moyen',
      question: "Quelle est la condition requise pour qu'une relation en 1FN soit en Deuxième Forme Normale (2FN) ?",
      choices: [
        "Elle ne doit comporter aucune clé primaire composée",
        "Tout attribut non-clé doit dépendre pleinement et entièrement de la totalité de la clé primaire (pas de dépendance partielle)",
        "Elle doit contenir au moins 3 tables",
        "Tous les index doivent être uniques"
      ],
      options: [
        "Elle ne doit comporter aucune clé primaire composée",
        "Tout attribut non-clé doit dépendre pleinement et entièrement de la totalité de la clé primaire (pas de dépendance partielle)",
        "Elle doit contenir au moins 3 tables",
        "Tous les index doivent être uniques"
      ],
      correctAnswer: 1,
      explanation: "La 2FN élimine les dépendances fonctionnelles partielles : aucun attribut non-clé ne doit dépendre d'une sous-partie d'une clé primaire composite.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Moyen',
      question: "Quelle anomalie la Troisième Forme Normale (3FN) vise-t-elle à éliminer à partir d'une relation en 2FN ?",
      choices: [
        "Les clés primaires multiples",
        "Les dépendances fonctionnelles transitives entre attributs non-clés (X -> Y et Y -> Z)",
        "Les valeurs nulles",
        "Les jointures externes"
      ],
      options: [
        "Les clés primaires multiples",
        "Les dépendances fonctionnelles transitives entre attributs non-clés (X -> Y et Y -> Z)",
        "Les valeurs nulles",
        "Les jointures externes"
      ],
      correctAnswer: 1,
      explanation: "Une relation est en 3FN si elle est en 2FN et qu'aucun attribut non-clé ne dépend d'un autre attribut non-clé (absence de dépendance transitive).",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Difficile',
      question: "Quelle est la règle stricte qui définit la Forme Normale de Boyce-Codd (BCNF) ?",
      choices: [
        "Pour toute dépendance fonctionnelle non triviale X -> Y, X doit obligatoirement être une super-clé",
        "La relation doit posséder au maximum deux clés candidates",
        "Aucune clé primaire ne peut comporter plus de 3 colonnes",
        "Toutes les dépendances multivaluées doivent être préservées"
      ],
      options: [
        "Pour toute dépendance fonctionnelle non triviale X -> Y, X doit obligatoirement être une super-clé",
        "La relation doit posséder au maximum deux clés candidates",
        "Aucune clé primaire ne peut comporter plus de 3 colonnes",
        "Toutes les dépendances multivaluées doivent être préservées"
      ],
      correctAnswer: 0,
      explanation: "En BCNF, pour toute dépendance fonctionnelle non triviale X -> Y, le déterminant X doit être une super-clé. C'est une version plus stricte de la 3FN.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Moyen',
      question: "Si dans une table `Commande(num_cmd, date_cmd, id_client, nom_client)`, nous avons `num_cmd -> id_client` et `id_client -> nom_client`, quel problème de normalisation observe-t-on ?",
      choices: [
        "La table viole la 1FN",
        "La table viole la 2FN",
        "La table viole la 3FN à cause d'une dépendance transitive entre num_cmd et nom_client",
        "La table est parfaitement normalisée en BCNF"
      ],
      options: [
        "La table viole la 1FN",
        "La table viole la 2FN",
        "La table viole la 3FN à cause d'une dépendance transitive entre num_cmd et nom_client",
        "La table est parfaitement normalisée en BCNF"
      ],
      correctAnswer: 2,
      explanation: "`nom_client` dépend de `id_client` qui n'est pas la clé primaire. C'est une dépendance transitive violant la 3FN. Il faut scinder en `Client` et `Commande`.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Difficile',
      question: "Quelle propriété mathématique indispensable doit respecter toute décomposition d'une relation lors de la normalisation pour ne pas perdre d'informations ?",
      choices: [
        "La décomposition sans perte d'information (Lossless-Join Decomposition)",
        "La décomposition en tables de moins de 1000 lignes",
        "L'absence totale d'index",
        "La création automatique de vues matérialisées"
      ],
      options: [
        "La décomposition sans perte d'information (Lossless-Join Decomposition)",
        "La décomposition en tables de moins de 1000 lignes",
        "L'absence totale d'index",
        "La création automatique de vues matérialisées"
      ],
      correctAnswer: 0,
      explanation: "La décomposition sans perte de jointure (Lossless-Join) garantit que la jointure naturelle des relations décomposées restitue exactement la relation initiale, sans tuples parasites.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Facile',
      question: "Quel est le risque majeur d'une base de données non normalisée présentant de la redondance excessive ?",
      choices: [
        "Des anomalies de mise à jour, d'insertion et de suppression, ainsi que des incohérences de données",
        "Une impossibilité d'utiliser le langage SQL",
        "Une saturation immédiate de la RAM",
        "Un blocage automatique du compilateur"
      ],
      options: [
        "Des anomalies de mise à jour, d'insertion et de suppression, ainsi que des incohérences de données",
        "Une impossibilité d'utiliser le langage SQL",
        "Une saturation immédiate de la RAM",
        "Un blocage automatique du compilateur"
      ],
      correctAnswer: 0,
      explanation: "La redondance non maîtrisée provoque des anomalies : mise à jour partielle créant des incohérences, impossibilité d'insérer une information sans une entité liée, ou suppression collatérale de données utiles.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Difficile',
      question: "Dans le contexte des dépendances fonctionnelles, que permet de calculer l'algorithme de fermeture d'un ensemble d'attributs X (noté X+) ?",
      choices: [
        "L'ensemble de tous les attributs fonctionnellement déterminés par X",
        "Le nombre total de lignes de la table",
        "La taille en octets du tablespace",
        "La clé étrangère optimale"
      ],
      options: [
        "L'ensemble de tous les attributs fonctionnellement déterminés par X",
        "Le nombre total de lignes de la table",
        "La taille en octets du tablespace",
        "La clé étrangère optimale"
      ],
      correctAnswer: 0,
      explanation: "La fermeture X+ contient tous les attributs qui peuvent être déduits fonctionnellement de X en appliquant les axiomes d'Armstrong. Si X+ contient tous les attributs de la relation, X est une super-clé.",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Difficile',
      question: "Lequel des éléments suivants NE fait PAS partie des trois axiomes fondamentaux d'Armstrong pour les dépendances fonctionnelles ?",
      choices: ["Réflexivité", "Augmentation", "Transitivité", "Commutativité relationnelle"],
      options: ["Réflexivité", "Augmentation", "Transitivité", "Commutativité relationnelle"],
      correctAnswer: 3,
      explanation: "Les 3 axiomes d'Armstrong sont la Réflexivité (si Y ⊆ X alors X -> Y), l'Augmentation (si X -> Y alors XZ -> YZ) et la Transitivité (si X -> Y et Y -> Z alors X -> Z).",
      source: "Ancien examen"
    },
    {
      topic: 'Normalisation',
      difficulty: 'Moyen',
      question: "Pourquoi décide-t-on parfois de 'dénormaliser' volontairement certaines tables dans un entrepôt de données (Data Warehouse) ?",
      choices: [
        "Pour éliminer le langage SQL",
        "Pour réduire le nombre de jointures coûteuses et optimiser les performances en lecture analytique (OLAP)",
        "Parce que la 3FN est obsolète",
        "Pour économiser de l'espace disque"
      ],
      options: [
        "Pour éliminer le langage SQL",
        "Pour réduire le nombre de jointures coûteuses et optimiser les performances en lecture analytique (OLAP)",
        "Parce que la 3FN est obsolète",
        "Pour économiser de l'espace disque"
      ],
      correctAnswer: 1,
      explanation: "Dans les systèmes décisionnels (OLAP), la dénormalisation (modèle en étoile ou en flocon) réduit les jointures massives entre dizaines de tables pour accélérer les temps de réponse aux requêtes de reporting.",
      source: "Ancien examen"
    },

    // 3. SQL LDD & Contraintes (21-30)
    {
      topic: 'SQL LDD',
      difficulty: 'Facile',
      question: "Quelle commande SQL permet de supprimer une table et toutes ses données de façon irréversible du dictionnaire de données ?",
      choices: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"],
      options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"],
      correctAnswer: 0,
      explanation: "DROP TABLE supprime la structure de la table, ses index et toutes ses données. DELETE TABLE est une syntaxe invalide.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Moyen',
      question: "Quelle est la différence fondamentale entre DELETE FROM ma_table et TRUNCATE TABLE ma_table ?",
      choices: [
        "TRUNCATE est une commande LDD rapide qui réinitialise la table sans journaliser individuellement chaque ligne supprimée, tandis que DELETE est une commande LMD transactionnelle ligne par ligne",
        "DELETE supprime la structure de la table, TRUNCATE non",
        "TRUNCATE déclenche les triggers DELETE de chaque ligne",
        "DELETE ne peut pas être annulé par ROLLBACK"
      ],
      options: [
        "TRUNCATE est une commande LDD rapide qui réinitialise la table sans journaliser individuellement chaque ligne supprimée, tandis que DELETE est une commande LMD transactionnelle ligne par ligne",
        "DELETE supprime la structure de la table, TRUNCATE non",
        "TRUNCATE déclenche les triggers DELETE de chaque ligne",
        "DELETE ne peut pas être annulé par ROLLBACK"
      ],
      correctAnswer: 0,
      explanation: "TRUNCATE (LDD) désalloue les blocs de données, ne déclenche pas les triggers DELETE et s'exécute beaucoup plus vite que DELETE qui écrit chaque suppression dans les journaux de transaction.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Facile',
      question: "Quelle clause permet d'ajouter une nouvelle colonne à une table existante en SQL ?",
      choices: ["ALTER TABLE ma_table ADD nom_colonne TYPE;", "UPDATE TABLE ma_table ADD nom_colonne TYPE;", "MODIFY TABLE ma_table INSERT nom_colonne TYPE;", "INSERT INTO ma_table COLUMN nom_colonne TYPE;"],
      options: ["ALTER TABLE ma_table ADD nom_colonne TYPE;", "UPDATE TABLE ma_table ADD nom_colonne TYPE;", "MODIFY TABLE ma_table INSERT nom_colonne TYPE;", "INSERT INTO ma_table COLUMN nom_colonne TYPE;"],
      correctAnswer: 0,
      explanation: "La syntaxe standard pour modifier la structure d'une table et lui ajouter une colonne est `ALTER TABLE nom_table ADD nom_colonne type_donnees;`.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Moyen',
      question: "Que produit l'option ON DELETE CASCADE définie sur une contrainte de clé étrangère (FOREIGN KEY) ?",
      choices: [
        "La suppression d'une ligne parent entraîne automatiquement la suppression de toutes les lignes enfants qui la référencent",
        "Elle interdit la suppression de la ligne parent si des lignes enfants existent",
        "Elle met les colonnes enfants à NULL automatiquement",
        "Elle génère une alerte sans supprimer les données"
      ],
      options: [
        "La suppression d'une ligne parent entraîne automatiquement la suppression de toutes les lignes enfants qui la référencent",
        "Elle interdit la suppression de la ligne parent si des lignes enfants existent",
        "Elle met les colonnes enfants à NULL automatiquement",
        "Elle génère une alerte sans supprimer les données"
      ],
      correctAnswer: 0,
      explanation: "ON DELETE CASCADE propage automatiquement la suppression de la ligne référencée aux lignes associées dans les tables dépendantes.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Facile',
      question: "Quelle contrainte SQL garantit que deux lignes différentes ne peuvent pas avoir la même valeur pour un attribut donné, tout en autorisant les valeurs NULL ?",
      choices: ["UNIQUE", "PRIMARY KEY", "CHECK", "NOT NULL"],
      options: ["UNIQUE", "PRIMARY KEY", "CHECK", "NOT NULL"],
      correctAnswer: 0,
      explanation: "La contrainte UNIQUE interdit les doublons pour les valeurs renseignées, mais autorise les valeurs NULL (contrairement à PRIMARY KEY qui impose à la fois l'unicité et NOT NULL).",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Moyen',
      question: "Quelle contrainte SQL permet de restreindre les valeurs d'une colonne selon une condition logique booléenne (ex: salaire > 0) ?",
      choices: ["CHECK", "RESTRICT", "CONDITION", "DEFAULT"],
      options: ["CHECK", "RESTRICT", "CONDITION", "DEFAULT"],
      correctAnswer: 0,
      explanation: "La contrainte CHECK évalue une expression booléenne lors de chaque insertion ou mise à jour (ex: `CHECK (salaire > 0)`).",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Difficile',
      question: "Quelle commande SQL permet de renommer une colonne existante sous Oracle SQL ?",
      choices: [
        "ALTER TABLE client RENAME COLUMN ancien_nom TO nouveau_nom;",
        "UPDATE client RENAME COLUMN ancien_nom nouveau_nom;",
        "MODIFY TABLE client COLUMN ancien_nom AS nouveau_nom;",
        "ALTER TABLE client CHANGE COLUMN ancien_nom nouveau_nom;"
      ],
      options: [
        "ALTER TABLE client RENAME COLUMN ancien_nom TO nouveau_nom;",
        "UPDATE client RENAME COLUMN ancien_nom nouveau_nom;",
        "MODIFY TABLE client COLUMN ancien_nom AS nouveau_nom;",
        "ALTER TABLE client CHANGE COLUMN ancien_nom nouveau_nom;"
      ],
      correctAnswer: 0,
      explanation: "Sous Oracle SQL, la syntaxe officielle est `ALTER TABLE nom_table RENAME COLUMN ancien_nom TO nouveau_nom;`.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Facile',
      question: "Quel mot-clé SQL permet de définir une valeur de remplacement automatique si aucune valeur n'est spécifiée lors d'un INSERT ?",
      choices: ["DEFAULT", "AUTO", "AUTO_INCREMENT", "INITIAL"],
      options: ["DEFAULT", "AUTO", "AUTO_INCREMENT", "INITIAL"],
      correctAnswer: 0,
      explanation: "La clause DEFAULT (ex: `statut VARCHAR(20) DEFAULT 'En attente'`) injecte automatiquement une valeur prédéfinie lors des insertions.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Moyen',
      question: "Que se passe-t-il avec l'option ON DELETE SET NULL lors de la suppression du tuple référencé ?",
      choices: [
        "Les clés étrangères correspondantes dans la table enfant reçoivent la valeur NULL",
        "La suppression est annulée",
        "Toutes les lignes sont supprimées",
        "La base de données passe en lecture seule"
      ],
      options: [
        "Les clés étrangères correspondantes dans la table enfant reçoivent la valeur NULL",
        "La suppression est annulée",
        "Toutes les lignes sont supprimées",
        "La base de données passe en lecture seule"
      ],
      correctAnswer: 0,
      explanation: "ON DELETE SET NULL met automatiquement à NULL la clé étrangère des enfants lorsque l'enregistrement parent associé est supprimé.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LDD',
      difficulty: 'Difficile',
      question: "Quelle commande permet de désactiver temporairement une contrainte nommée sans la supprimer sous Oracle ?",
      choices: [
        "ALTER TABLE employe DISABLE CONSTRAINT fk_dept;",
        "DISABLE fk_dept ON employe;",
        "ALTER CONSTRAINT fk_dept OFF;",
        "DROP CONSTRAINT fk_dept TEMPORARY;"
      ],
      options: [
        "ALTER TABLE employe DISABLE CONSTRAINT fk_dept;",
        "DISABLE fk_dept ON employe;",
        "ALTER CONSTRAINT fk_dept OFF;",
        "DROP CONSTRAINT fk_dept TEMPORARY;"
      ],
      correctAnswer: 0,
      explanation: "Oracle permet de désactiver une contrainte via `ALTER TABLE nom_table DISABLE CONSTRAINT nom_contrainte;` et de la réactiver plus tard avec `ENABLE`.",
      source: "Ancien examen"
    },

    // 4. SQL LMD & Requêtes (31-40)
    {
      topic: 'SQL LMD',
      difficulty: 'Facile',
      question: "Quel mot-clé SQL permet d'éliminer les lignes dupliquées dans les résultats d'une requête SELECT ?",
      choices: ["DISTINCT", "UNIQUE", "DIFFERENT", "NO_DUPLICATE"],
      options: ["DISTINCT", "UNIQUE", "DIFFERENT", "NO_DUPLICATE"],
      correctAnswer: 0,
      explanation: "La clause `SELECT DISTINCT ...` filtre et supprime tous les n-uplets identiques du résultat retourné.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Facile',
      question: "Quel opérateur SQL teste si la valeur d'une colonne n'a pas été renseignée ?",
      choices: ["IS NULL", "= NULL", "== NULL", "EQUALS NULL"],
      options: ["IS NULL", "= NULL", "== NULL", "EQUALS NULL"],
      correctAnswer: 0,
      explanation: "En logique ternaire SQL (vrai, faux, inconnu), NULL n'étant pas une valeur, on ne peut pas utiliser l'opérateur `=` ; il faut obligatoirement écrire `IS NULL` (ou `IS NOT NULL`).",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Moyen',
      question: "Quel caractère générique représente une chaîne de zéro, un ou plusieurs caractères quelconques avec l'opérateur LIKE en SQL standard ?",
      choices: ["Le symbole pourcentage (%)", "Le tiret bas (_)", "L'astérisque (*)", "Le point d'interrogation (?)"],
      options: ["Le symbole pourcentage (%)", "Le tiret bas (_)", "L'astérisque (*)", "Le point d'interrogation (?)"],
      correctAnswer: 0,
      explanation: "Avec LIKE : `%` remplace n'importe quelle séquence de 0 à N caractères, et `_` remplace exactement 1 seul caractère.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Facile',
      question: "Quelle clause SQL permet de trier les résultats par ordre décroissant sur une colonne ?",
      choices: ["ORDER BY nom_colonne DESC", "ORDER BY nom_colonne ASC", "SORT BY nom_colonne DOWN", "GROUP BY nom_colonne DESC"],
      options: ["ORDER BY nom_colonne DESC", "ORDER BY nom_colonne ASC", "SORT BY nom_colonne DOWN", "GROUP BY nom_colonne DESC"],
      correctAnswer: 0,
      explanation: "La clause `ORDER BY ... DESC` trie en ordre descendant (décroissant). `ASC` est l'ordre croissant par défaut.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Moyen',
      question: "Quelle commande SQL permet de modifier les valeurs des attributs de lignes existantes dans une table ?",
      choices: ["UPDATE table SET col = val WHERE condition;", "MODIFY table SET col = val;", "ALTER table UPDATE col = val;", "CHANGE table SET col = val;"],
      options: ["UPDATE table SET col = val WHERE condition;", "MODIFY table SET col = val;", "ALTER table UPDATE col = val;", "CHANGE table SET col = val;"],
      correctAnswer: 0,
      explanation: "La syntaxe LMD standard est `UPDATE nom_table SET colonne = valeur WHERE condition;`.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Facile',
      question: "Que se produit-il si on exécute DELETE FROM client sans clause WHERE ?",
      choices: [
        "Toutes les lignes de la table client sont supprimées",
        "La commande échoue avec une erreur de syntaxe",
        "Seule la première ligne est supprimée",
        "La structure de la table est détruite"
      ],
      options: [
        "Toutes les lignes de la table client sont supprimées",
        "La commande échoue avec une erreur de syntaxe",
        "Seule la première ligne est supprimée",
        "La structure de la table est détruite"
      ],
      correctAnswer: 0,
      explanation: "Sans clause WHERE, l'instruction DELETE affecte l'intégralité des tuples de la table.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Moyen',
      question: "Quelle clause permet de vérifier si une valeur appartient à un intervalle inclusif en SQL (ex: âge entre 18 et 65) ?",
      choices: ["BETWEEN 18 AND 65", "IN (18, 65)", "WITHIN (18, 65)", "RANGE 18 TO 65"],
      options: ["BETWEEN 18 AND 65", "IN (18, 65)", "WITHIN (18, 65)", "RANGE 18 TO 65"],
      correctAnswer: 0,
      explanation: "`BETWEEN val1 AND val2` vérifie l'appartenance à l'intervalle fermé `[val1, val2]` (les bornes sont incluses).",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Difficile',
      question: "Quel opérateur SQL teste si une valeur appartient à une liste explicite ou aux résultats retournés par une sous-requête ?",
      choices: ["IN", "LIKE", "EXISTS", "CONTAINS"],
      options: ["IN", "LIKE", "EXISTS", "CONTAINS"],
      correctAnswer: 0,
      explanation: "L'opérateur `IN (val1, val2, ...)` ou `IN (SELECT ...)` teste si la valeur de gauche est égale à au moins un élément de l'ensemble.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Moyen',
      question: "Quelle est la valeur logique résultante de l'expression NULL = NULL en SQL standard ?",
      choices: ["UNKNOWN (Inconnu)", "TRUE (Vrai)", "FALSE (Faux)", "NULL"],
      options: ["UNKNOWN (Inconnu)", "TRUE (Vrai)", "FALSE (Faux)", "NULL"],
      correctAnswer: 0,
      explanation: "En SQL, toute comparaison avec NULL (même NULL = NULL) s'évalue en UNKNOWN (inconnu) selon la logique à 3 valeurs.",
      source: "Ancien examen"
    },
    {
      topic: 'SQL LMD',
      difficulty: 'Difficile',
      question: "Quelle fonction standard permet de renvoyer la première expression non-nulle parmi une liste d'arguments en SQL ?",
      choices: ["COALESCE(expr1, expr2, ...)", "NVL(expr1, expr2)", "IFNULL(expr1, expr2)", "NULLIF(expr1, expr2)"],
      options: ["COALESCE(expr1, expr2, ...)", "NVL(expr1, expr2)", "IFNULL(expr1, expr2)", "NULLIF(expr1, expr2)"],
      correctAnswer: 0,
      explanation: "COALESCE est la fonction standard ANSI SQL qui retourne la première valeur non nulle de la liste fournie (NVL est une fonction spécifique à Oracle).",
      source: "Ancien examen"
    },

    // 5. Jointures SQL (41-50)
    {
      topic: 'Jointures SQL',
      difficulty: 'Facile',
      question: "Quel type de jointure SQL ne retourne que les lignes qui ont une correspondance exacte dans les deux tables jointes ?",
      choices: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"],
      options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"],
      correctAnswer: 0,
      explanation: "INNER JOIN (jointure interne) sélectionne uniquement les enregistrements pour lesquels le prédicat de jointure (ON) est vrai dans les deux tables.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Facile',
      question: "Que renvoie un LEFT OUTER JOIN entre une table A (gauche) et une table B (droite) ?",
      choices: [
        "Toutes les lignes de la table A, complétées par les colonnes de B lorsqu'une correspondance existe, ou par NULL en cas d'absence de correspondance",
        "Uniquement les lignes sans correspondance",
        "Toutes les lignes de la table B uniquement",
        "Le produit cartésien complet"
      ],
      options: [
        "Toutes les lignes de la table A, complétées par les colonnes de B lorsqu'une correspondance existe, ou par NULL en cas d'absence de correspondance",
        "Uniquement les lignes sans correspondance",
        "Toutes les lignes de la table B uniquement",
        "Le produit cartésien complet"
      ],
      correctAnswer: 0,
      explanation: "LEFT JOIN conserve l'intégralité des tuples de la table de gauche et insère des valeurs NULL pour les colonnes de droite lorsqu'il n'y a pas d'association.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Moyen',
      question: "Qu'est-ce qu'une auto-jointure (Self-Join) en SQL ?",
      choices: [
        "Une jointure d'une table avec elle-même en utilisant des alias de table différents",
        "Une jointure exécutée automatiquement sans clause ON",
        "Une jointure sur la clé primaire uniquement",
        "Une vue matérialisée auto-actualisée"
      ],
      options: [
        "Une jointure d'une table avec elle-même en utilisant des alias de table différents",
        "Une jointure exécutée automatiquement sans clause ON",
        "Une jointure sur la clé primaire uniquement",
        "Une vue matérialisée auto-actualisée"
      ],
      correctAnswer: 0,
      explanation: "Une auto-jointure joint une table à elle-même (ex: trouver le responsable d'un employé dans la même table `Employe e JOIN Employe m ON e.id_manager = m.id`).",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Moyen',
      question: "Quelle jointure retourne toutes les lignes de la table de gauche ET toutes les lignes de la table de droite, en comblant les manques par des valeurs NULL de part et d'autre ?",
      choices: ["FULL OUTER JOIN", "CROSS JOIN", "INNER JOIN", "SEMI JOIN"],
      options: ["FULL OUTER JOIN", "CROSS JOIN", "INNER JOIN", "SEMI JOIN"],
      correctAnswer: 0,
      explanation: "FULL OUTER JOIN combine les effets d'un LEFT JOIN et d'un RIGHT JOIN en conservant tous les enregistrements des deux tables.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Facile',
      question: "Quelle commande SQL produit explicitement le produit cartésien sans condition de jointure entre deux tables ?",
      choices: ["CROSS JOIN", "NATURAL JOIN", "CARTESIAN JOIN", "FULL JOIN"],
      options: ["CROSS JOIN", "NATURAL JOIN", "CARTESIAN JOIN", "FULL JOIN"],
      correctAnswer: 0,
      explanation: "`SELECT * FROM table1 CROSS JOIN table2;` produit le produit cartésien associant chaque ligne de table1 à chaque ligne de table2.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Difficile',
      question: "Comment fonctionne la clause NATURAL JOIN en SQL standard ?",
      choices: [
        "Elle joint automatiquement les deux tables sur toutes les colonnes portant exactement le même nom",
        "Elle sélectionne automatiquement les index les plus rapides",
        "Elle effectue un tri naturel ascendant",
        "Elle ne peut joindre que des tables ayant la même clé primaire"
      ],
      options: [
        "Elle joint automatiquement les deux tables sur toutes les colonnes portant exactement le même nom",
        "Elle sélectionne automatiquement les index les plus rapides",
        "Elle effectue un tri naturel ascendant",
        "Elle ne peut joindre que des tables ayant la même clé primaire"
      ],
      correctAnswer: 0,
      explanation: "NATURAL JOIN apparie automatiquement les colonnes de même nom dans les deux tables. Bien que pratique, son usage est souvent déconseillé en production car l'ajout d'une colonne de même nom peut modifier le comportement de la requête.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Moyen',
      question: "Quelle syntaxe ancienne sous Oracle (avant le standard ANSI-92) permettait de spécifier une jointure externe gauche (LEFT JOIN) ?",
      choices: [
        "SELECT * FROM A, B WHERE A.id = B.id(+);",
        "SELECT * FROM A, B WHERE A.id(+) = B.id;",
        "SELECT * FROM A (+)LEFT B;",
        "SELECT * FROM A, B WHERE A.id *= B.id;"
      ],
      options: [
        "SELECT * FROM A, B WHERE A.id = B.id(+);",
        "SELECT * FROM A, B WHERE A.id(+) = B.id;",
        "SELECT * FROM A (+)LEFT B;",
        "SELECT * FROM A, B WHERE A.id *= B.id;"
      ],
      correctAnswer: 0,
      explanation: "L'opérateur Oracle historique `(+)` placé du côté de la table déficiente (qui peut manquer de lignes) génère des lignes complétées par NULL, donc `A.id = B.id(+)` équivaut à `A LEFT JOIN B`.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Difficile',
      question: "Quelle technique SQL permet d'identifier les clients qui n'ont JAMAIS passé aucune commande ?",
      choices: [
        "SELECT c.* FROM Client c LEFT JOIN Commande cmd ON c.id = cmd.id_client WHERE cmd.id_client IS NULL;",
        "SELECT c.* FROM Client c INNER JOIN Commande cmd ON c.id = cmd.id_client WHERE cmd.id_client IS NULL;",
        "SELECT * FROM Client WHERE id = NULL;",
        "SELECT c.* FROM Client c CROSS JOIN Commande cmd;"
      ],
      options: [
        "SELECT c.* FROM Client c LEFT JOIN Commande cmd ON c.id = cmd.id_client WHERE cmd.id_client IS NULL;",
        "SELECT c.* FROM Client c INNER JOIN Commande cmd ON c.id = cmd.id_client WHERE cmd.id_client IS NULL;",
        "SELECT * FROM Client WHERE id = NULL;",
        "SELECT c.* FROM Client c CROSS JOIN Commande cmd;"
      ],
      correctAnswer: 0,
      explanation: "Le pattern `LEFT JOIN ... WHERE droit.cle IS NULL` (anti-jointure) filtre pour ne garder que les tuples de gauche qui n'ont aucune correspondance à droite.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Moyen',
      question: "Quelle clause permet de simplifier la jointure lorsque les deux tables possèdent une colonne de même nom (ex: id_dept) sans répéter les noms de tables ?",
      choices: ["JOIN Departement USING (id_dept)", "JOIN Departement WITH (id_dept)", "JOIN Departement ON SAME (id_dept)", "JOIN Departement WHERE MATCH (id_dept)"],
      options: ["JOIN Departement USING (id_dept)", "JOIN Departement WITH (id_dept)", "JOIN Departement ON SAME (id_dept)", "JOIN Departement WHERE MATCH (id_dept)"],
      correctAnswer: 0,
      explanation: "La syntaxe ANSI SQL `JOIN ... USING (colonne)` remplace avantageusement `ON t1.colonne = t2.colonne`.",
      source: "Ancien examen"
    },
    {
      topic: 'Jointures SQL',
      difficulty: 'Difficile',
      question: "Qu'est-ce qu'un Semi-Join en optimisation de base de données relationnelle ?",
      choices: [
        "Une opération qui retourne les lignes de la première table qui ont au moins une correspondance dans la seconde, sans dupliquer les lignes de la première table",
        "Une jointure sur la moitié des colonnes",
        "Une jointure qui ne traite que les nombres pairs",
        "Une demi-connexion TCP"
      ],
      options: [
        "Une opération qui retourne les lignes de la première table qui ont au moins une correspondance dans la seconde, sans dupliquer les lignes de la première table",
        "Une jointure sur la moitié des colonnes",
        "Une jointure qui ne traite que les nombres pairs",
        "Une demi-connexion TCP"
      ],
      correctAnswer: 0,
      explanation: "Un semi-join (souvent issu d'une clause `EXISTS` ou `IN`) s'arrête dès la première correspondance trouvée dans la seconde table, éliminant les doublons et réduisant le coût d'exécution.",
      source: "Ancien examen"
    },

    // 6. Agrégation, Group By & Sous-requêtes (51-60)
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Facile',
      question: "Quelle clause SQL permet de filtrer les groupes de données générés par la clause GROUP BY ?",
      choices: ["HAVING", "WHERE", "ORDER BY", "FILTER"],
      options: ["HAVING", "WHERE", "ORDER BY", "FILTER"],
      correctAnswer: 0,
      explanation: "WHERE filtre les lignes individuelles avant l'agrégation, tandis que HAVING filtre les groupes après l'exécution des fonctions d'agrégation.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Facile',
      question: "Quelle est la différence entre COUNT(*) et COUNT(nom_colonne) en SQL ?",
      choices: [
        "COUNT(*) compte toutes les lignes y compris celles contenant des valeurs NULL, tandis que COUNT(nom_colonne) ignore les valeurs NULL de cette colonne",
        "COUNT(*) est plus lent et obsolète",
        "COUNT(nom_colonne) inclut les NULL",
        "Il n'y a aucune différence"
      ],
      options: [
        "COUNT(*) compte toutes les lignes y compris celles contenant des valeurs NULL, tandis que COUNT(nom_colonne) ignore les valeurs NULL de cette colonne",
        "COUNT(*) est plus lent et obsolète",
        "COUNT(nom_colonne) inclut les NULL",
        "Il n'y a aucune différence"
      ],
      correctAnswer: 0,
      explanation: "`COUNT(*)` compte le nombre total de n-uplets du groupe. `COUNT(colonne)` ne comptabilise que les occurrences où `colonne IS NOT NULL`.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Moyen',
      question: "Dans quel ordre logique le moteur SQL évalue-t-il les clauses d'une requête SELECT standard ?",
      choices: [
        "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
        "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
        "FROM -> SELECT -> WHERE -> ORDER BY -> GROUP BY -> HAVING",
        "WHERE -> FROM -> GROUP BY -> SELECT -> HAVING -> ORDER BY"
      ],
      options: [
        "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
        "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
        "FROM -> SELECT -> WHERE -> ORDER BY -> GROUP BY -> HAVING",
        "WHERE -> FROM -> GROUP BY -> SELECT -> HAVING -> ORDER BY"
      ],
      correctAnswer: 0,
      explanation: "L'ordre d'évaluation logique est : FROM (identification des sources) -> WHERE (filtrage ligne par ligne) -> GROUP BY (regroupement) -> HAVING (filtrage des groupes) -> SELECT (projection et calculs) -> ORDER BY (tri final).",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Moyen',
      question: "Qu'est-ce qu'une sous-requête corrélée en SQL ?",
      choices: [
        "Une sous-requête qui fait référence à des colonnes de la requête externe et doit être réévaluée pour chaque ligne de la requête externe",
        "Une sous-requête qui s'exécute une seule fois indépendamment",
        "Une sous-requête écrite dans la clause FROM uniquement",
        "Une sous-requête sans clause WHERE"
      ],
      options: [
        "Une sous-requête qui fait référence à des colonnes de la requête externe et doit être réévaluée pour chaque ligne de la requête externe",
        "Une sous-requête qui s'exécute une seule fois indépendamment",
        "Une sous-requête écrite dans la clause FROM uniquement",
        "Une sous-requête sans clause WHERE"
      ],
      correctAnswer: 0,
      explanation: "Une sous-requête corrélée utilise des valeurs de la requête englobante, ce qui implique son exécution contextuelle pour chaque tuple candidat de la requête principale.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Facile',
      question: "Quel opérateur permet de tester si une sous-requête renvoie au moins une ligne sans se soucier du contenu des colonnes ?",
      choices: ["EXISTS", "IN", "ANY", "CONTAINS"],
      options: ["EXISTS", "IN", "ANY", "CONTAINS"],
      correctAnswer: 0,
      explanation: "`EXISTS (SELECT ...)` renvoie TRUE dès qu'au moins un enregistrement satisfait la sous-requête, s'arrêtant immédiatement à la première ligne trouvée.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Difficile',
      question: "Que calcule la fonction de fenêtrage standard `ROW_NUMBER() OVER (PARTITION BY departement ORDER BY salaire DESC)` ?",
      choices: [
        "Un numéro d'ordre séquentiel unique (de 1 à N) pour chaque employé au sein de son propre département, trié du plus gros salaire au plus petit",
        "Le nombre total d'employés par département",
        "La moyenne des salaires du département",
        "Le salaire maximal uniquement"
      ],
      options: [
        "Un numéro d'ordre séquentiel unique (de 1 à N) pour chaque employé au sein de son propre département, trié du plus gros salaire au plus petit",
        "Le nombre total d'employés par département",
        "La moyenne des salaires du département",
        "Le salaire maximal uniquement"
      ],
      correctAnswer: 0,
      explanation: "La clause OVER avec PARTITION BY et ORDER BY applique une fonction de fenêtrage analytique : elle numérote les lignes séquentiellement au sein de chaque groupe de partition.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Moyen',
      question: "Quelle fonction d'agrégation standard calcule la moyenne des valeurs d'une colonne numérique en ignorant les valeurs NULL ?",
      choices: ["AVG()", "MEAN()", "AVERAGE()", "SUM() / COUNT(*)"],
      options: ["AVG()", "MEAN()", "AVERAGE()", "SUM() / COUNT(*)"],
      correctAnswer: 0,
      explanation: "La fonction `AVG(colonne)` calcule la moyenne arithmétique en ignorant automatiquement les valeurs NULL.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Difficile',
      question: "Quelle est la différence entre `UNION` et `UNION ALL` en SQL ?",
      choices: [
        "`UNION` élimine les doublons du résultat final en effectuant une opération de tri, tandis que `UNION ALL` conserve tous les doublons et s'exécute plus rapidement",
        "`UNION` fonctionne sur des tables différentes, `UNION ALL` sur la même table",
        "`UNION ALL` ne prend en compte que les 10 premières lignes",
        "`UNION` n'est pas standard ANSI"
      ],
      options: [
        "`UNION` élimine les doublons du résultat final en effectuant une opération de tri, tandis que `UNION ALL` conserve tous les doublons et s'exécute plus rapidement",
        "`UNION` fonctionne sur des tables différentes, `UNION ALL` sur la même table",
        "`UNION ALL` ne prend en compte que les 10 premières lignes",
        "`UNION` n'est pas standard ANSI"
      ],
      correctAnswer: 0,
      explanation: "`UNION` applique un tri interne pour dédupliquer les tuples retournés par les deux requêtes. `UNION ALL` concatène simplement les flux sans déduplication, ce qui est nettement plus performant.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Moyen',
      question: "Quelle condition dans une clause WHERE permet de vérifier qu'une valeur est strictement supérieure à TOUTES les valeurs retournées par une sous-requête ?",
      choices: ["> ALL (SELECT ...)", "> ANY (SELECT ...)", "> SOME (SELECT ...)", "> IN (SELECT ...)"],
      options: ["> ALL (SELECT ...)", "> ANY (SELECT ...)", "> SOME (SELECT ...)", "> IN (SELECT ...)"],
      correctAnswer: 0,
      explanation: "L'opérateur `> ALL` exige que la valeur soit supérieure au maximum de l'ensemble de résultats retourné par la sous-requête.",
      source: "Ancien examen"
    },
    {
      topic: 'Agrégation & Sous-requêtes',
      difficulty: 'Difficile',
      question: "Dans une requête SQL comportant GROUP BY ville, pourquoi est-il interdit d'écrire SELECT nom, ville FROM client GROUP BY ville ?",
      choices: [
        "Parce que 'nom' n'apparaît ni dans la clause GROUP BY ni à l'intérieur d'une fonction d'agrégation (ex: MAX, MIN)",
        "Parce que la clause GROUP BY interdit toute autre colonne dans le SELECT",
        "Parce que SQL ne supporte pas les chaînes dans GROUP BY",
        "Parce qu'il manque un ORDER BY"
      ],
      options: [
        "Parce que 'nom' n'apparaît ni dans la clause GROUP BY ni à l'intérieur d'une fonction d'agrégation (ex: MAX, MIN)",
        "Parce que la clause GROUP BY interdit toute autre colonne dans le SELECT",
        "Parce que SQL ne supporte pas les chaînes dans GROUP BY",
        "Parce qu'il manque un ORDER BY"
      ],
      correctAnswer: 0,
      explanation: "En SQL standard, chaque colonne présente dans le SELECT doit soit figurer dans le GROUP BY, soit être passée en paramètre d'une fonction d'agrégation, sans quoi le résultat est indéterminé.",
      source: "Ancien examen"
    },

    // 7. Transactions & Propriétés ACID (61-70)
    {
      topic: 'Transactions & ACID',
      difficulty: 'Facile',
      question: "Que signifie l'acronyme ACID qui régit les propriétés fondamentales des transactions de bases de données ?",
      choices: [
        "Atomicité, Cohérence, Isolation, Durabilité",
        "Accès, Contrôle, Intégrité, Distribution",
        "Allocation, Concurrence, Indexation, Déconnexion",
        "Audit, Continuité, Interopérabilité, Données"
      ],
      options: [
        "Atomicité, Cohérence, Isolation, Durabilité",
        "Accès, Contrôle, Intégrité, Distribution",
        "Allocation, Concurrence, Indexation, Déconnexion",
        "Audit, Continuité, Interopérabilité, Données"
      ],
      correctAnswer: 0,
      explanation: "ACID représente les 4 piliers transactionnels : Atomicité (tout ou rien), Cohérence (respect des règles d'intégrité), Isolation (indépendance des transactions concurrentes) et Durabilité (persistance après validation).",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Facile',
      question: "Quelle propriété ACID garantit que toutes les opérations d'une transaction sont exécutées avec succès, ou qu'aucune d'entre elles n'est appliquée en cas d'échec (principe du 'Tout ou Rien') ?",
      choices: ["L'Atomicité", "La Cohérence", "L'Isolation", "La Durabilité"],
      options: ["L'Atomicité", "La Cohérence", "L'Isolation", "La Durabilité"],
      correctAnswer: 0,
      explanation: "L'atomicité assure qu'une transaction forme une unité indivisible. Si une instruction échoue, un retour arrière (rollback) annule toutes les modifications déjà faites.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Facile',
      question: "Quelle commande SQL valide définitivement les modifications apportées par la transaction en cours ?",
      choices: ["COMMIT", "SAVE", "ROLLBACK", "PERSIST"],
      options: ["COMMIT", "SAVE", "ROLLBACK", "PERSIST"],
      correctAnswer: 0,
      explanation: "L'instruction `COMMIT` rend les modifications de la transaction permanentes et visibles par les autres sessions.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Facile',
      question: "Quelle commande SQL annule toutes les modifications effectuées depuis le début de la transaction en cours ?",
      choices: ["ROLLBACK", "UNDO", "REVERT", "ABORT"],
      options: ["ROLLBACK", "UNDO", "REVERT", "ABORT"],
      correctAnswer: 0,
      explanation: "`ROLLBACK` annule les effets de la transaction et restaure l'état des données tel qu'il était avant le début de la transaction.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Moyen',
      question: "Quelle propriété ACID garantit que les modifications validées par un COMMIT ne seront pas perdues, même en cas de panne de courant ou de crash du système ?",
      choices: ["La Durabilité (Durability)", "L'Atomicité", "L'Isolation", "La Scalabilité"],
      options: ["La Durabilité (Durability)", "L'Atomicité", "L'Isolation", "La Scalabilité"],
      correctAnswer: 0,
      explanation: "La durabilité garantit que les données validées sont enregistrées sur un support de stockage persistant (notamment via le journal de transactions WAL / Redo Log) avant que le commit ne soit acquitté.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Moyen',
      question: "Comment appelle-t-on un point de contrôle intermédiaire créé au sein d'une transaction vers lequel on peut effectuer un rollback partiel sans tout annuler ?",
      choices: ["SAVEPOINT", "CHECKPOINT", "SNAPSHOT", "MARKER"],
      options: ["SAVEPOINT", "CHECKPOINT", "SNAPSHOT", "MARKER"],
      correctAnswer: 0,
      explanation: "La commande `SAVEPOINT nom;` définit un jalon intermédiaire, permettant d'exécuter `ROLLBACK TO nom;` pour annuler uniquement les opérations postérieures à ce jalon.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Difficile',
      question: "Quel mécanisme d'écriture préalable dans un journal (WAL - Write-Ahead Logging) assure la durabilité et la reprise sur incident dans les SGBD modernes ?",
      choices: [
        "Les modifications doivent obligatoirement être écrites sur disque dans le journal de transactions (Redo Log / WAL) avant que les pages de données en mémoire tampon ne soient écrites sur disque",
        "Les données sont écrites deux fois dans deux tables identiques",
        "Le processeur exécute deux fois chaque requête",
        "Toutes les tables sont clonées en mémoire"
      ],
      options: [
        "Les modifications doivent obligatoirement être écrites sur disque dans le journal de transactions (Redo Log / WAL) avant que les pages de données en mémoire tampon ne soient écrites sur disque",
        "Les données sont écrites deux fois dans deux tables identiques",
        "Le processeur exécute deux fois chaque requête",
        "Toutes les tables sont clonées en mémoire"
      ],
      correctAnswer: 0,
      explanation: "Le principe WAL (Write-Ahead Logging) stipule que les enregistrements du journal décrivant les modifications doivent être synchronisés sur disque avant que les pages de la base ne soient écrites, permettant le 'Redo' en cas de crash.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Moyen',
      question: "Quelle propriété ACID garantit que l'exécution concurrente de plusieurs transactions produit le même résultat qu'une exécution séquentielle ?",
      choices: ["L'Isolation", "La Cohérence", "L'Atomicité", "La Durabilité"],
      options: ["L'Isolation", "La Cohérence", "L'Atomicité", "La Durabilité"],
      correctAnswer: 0,
      explanation: "L'isolation empêche les transactions simultanées d'interférer les unes avec les autres ou de lire des données intermédiaires incohérentes.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Difficile',
      question: "Quelle anomalie survient lorsqu'une transaction T1 lit une donnée modifiée par T2 qui n'a pas encore été validée (non committée), et que T2 effectue ensuite un ROLLBACK ?",
      choices: ["Lecture sale (Dirty Read)", "Lecture non reproductible (Non-repeatable Read)", "Lecture fantôme (Phantom Read)", "Écriture perdue"],
      options: ["Lecture sale (Dirty Read)", "Lecture non reproductible (Non-repeatable Read)", "Lecture fantôme (Phantom Read)", "Écriture perdue"],
      correctAnswer: 0,
      explanation: "Une 'lecture sale' (Dirty Read) consiste à lire des données non validées d'une autre transaction. Si celle-ci annule ses modifications, la première transaction a travaillé sur des données fictives.",
      source: "Ancien examen"
    },
    {
      topic: 'Transactions & ACID',
      difficulty: 'Difficile',
      question: "Quel protocole de verrouillage à deux phases (2PL - Two-Phase Locking) garantit la sérialisabilité des transactions ?",
      choices: [
        "Une phase de croissance où les verrous sont uniquement acquis, suivie d'une phase de décroissance où les verrous sont uniquement libérés",
        "Un verrouillage au début et un verrouillage à la fin",
        "Un verrouillage automatique après 2 secondes",
        "L'utilisation de deux serveurs miroirs"
      ],
      options: [
        "Une phase de croissance où les verrous sont uniquement acquis, suivie d'une phase de décroissance où les verrous sont uniquement libérés",
        "Un verrouillage au début et un verrouillage à la fin",
        "Un verrouillage automatique après 2 secondes",
        "L'utilisation de deux serveurs miroirs"
      ],
      correctAnswer: 0,
      explanation: "Le protocole 2PL (Two-Phase Locking) interdit d'acquérir un nouveau verrou après avoir libéré un premier verrou (phase croissante d'acquisition puis phase décroissante de libération), ce qui garantit mathématiquement un ordonnancement sérialisable.",
      source: "Ancien examen"
    },

    // 8. Niveaux d'isolation & Concurrence (71-80)
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Moyen',
      question: "Quel est le niveau d'isolation ANSI SQL le plus strict, éliminant totalement les lectures sales, les lectures non reproductibles et les lectures fantômes ?",
      choices: ["SERIALIZABLE", "REPEATABLE READ", "READ COMMITTED", "READ UNCOMMITTED"],
      options: ["SERIALIZABLE", "REPEATABLE READ", "READ COMMITTED", "READ UNCOMMITTED"],
      correctAnswer: 0,
      explanation: "SERIALIZABLE est le niveau d'isolation le plus élevé. Il garantit que le résultat final de transactions concurrentes est strictement identique à celui qu'aurait produit une exécution séquentielle une à une.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Facile',
      question: "Quel est le niveau d'isolation par défaut sous Oracle Database et PostgreSQL ?",
      choices: ["READ COMMITTED", "READ UNCOMMITTED", "SERIALIZABLE", "REPEATABLE READ"],
      options: ["READ COMMITTED", "READ UNCOMMITTED", "SERIALIZABLE", "REPEATABLE READ"],
      correctAnswer: 0,
      explanation: "Le niveau standard par défaut sous Oracle et PostgreSQL est READ COMMITTED : une requête ne voit que les modifications validées avant le début de la requête (ou de la transaction selon le mode).",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Moyen',
      question: "Qu'est-ce qu'une anomalie de 'Lecture non reproductible' (Non-repeatable Read) ?",
      choices: [
        "Une transaction lit une ligne, une seconde transaction modifie cette même ligne et committe, puis la première transaction relit la ligne et constate que ses valeurs ont changé",
        "Une transaction ne peut pas lire deux fois la même table",
        "Une transaction lit des données supprimées par DROP TABLE",
        "Le serveur plante lors de la seconde lecture"
      ],
      options: [
        "Une transaction lit une ligne, une seconde transaction modifie cette même ligne et committe, puis la première transaction relit la ligne et constate que ses valeurs ont changé",
        "Une transaction ne peut pas lire deux fois la même table",
        "Une transaction lit des données supprimées par DROP TABLE",
        "Le serveur plante lors de la seconde lecture"
      ],
      correctAnswer: 0,
      explanation: "La lecture non reproductible se produit lorsqu'une transaction relit un tuple déjà lu et découvre que ses attributs ont été modifiés par une autre transaction entre-temps.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Difficile',
      question: "Qu'est-ce qu'une anomalie de 'Lecture Fantôme' (Phantom Read) ?",
      choices: [
        "Une transaction réexécute une requête avec prédicat (ex: WHERE age > 30) et découvre que de nouvelles lignes insérées par une autre transaction sont apparues dans le résultat",
        "Une transaction lit une table supprimée",
        "Une transaction lit un index corrompu",
        "Une transaction s'exécute sans identifiant utilisateur"
      ],
      options: [
        "Une transaction réexécute une requête avec prédicat (ex: WHERE age > 30) et découvre que de nouvelles lignes insérées par une autre transaction sont apparues dans le résultat",
        "Une transaction lit une table supprimée",
        "Une transaction lit un index corrompu",
        "Une transaction s'exécute sans identifiant utilisateur"
      ],
      correctAnswer: 0,
      explanation: "Une lecture fantôme survient lorsqu'une transaction exécute une requête de recherche par plage et voit de nouvelles lignes ('fantômes') ajoutées ou supprimées par une transaction concurrente committée.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Moyen',
      question: "Quelle est la différence fondamentale entre un verrou partagé (Shared Lock / S-Lock) et un verrou exclusif (Exclusive Lock / X-Lock) ?",
      choices: [
        "Plusieurs transactions peuvent détenir simultanément un verrou partagé pour lire la même ressource, mais une seule transaction peut détenir un verrou exclusif pour modifier la ressource",
        "Le verrou exclusif est réservé à l'administrateur DBA",
        "Le verrou partagé bloque toutes les lectures",
        "Le verrou exclusif est libéré après 5 secondes automatiquement"
      ],
      options: [
        "Plusieurs transactions peuvent détenir simultanément un verrou partagé pour lire la même ressource, mais une seule transaction peut détenir un verrou exclusif pour modifier la ressource",
        "Le verrou exclusif est réservé à l'administrateur DBA",
        "Le verrou partagé bloque toutes les lectures",
        "Le verrou exclusif est libéré après 5 secondes automatiquement"
      ],
      correctAnswer: 0,
      explanation: "Les verrous partagés (S) sont compatibles entre eux (lectures concurrentes permises). Le verrou exclusif (X) est incompatible avec tout autre verrou (nécessaire pour INSERT, UPDATE, DELETE).",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Facile',
      question: "Qu'est-ce qu'un interblocage (Deadlock) dans un SGBD relationnel ?",
      choices: [
        "Une situation où deux transactions ou plus sont bloquées indéfiniment, chacune attendant une ressource verrouillée par l'autre",
        "Un arrêt physique du serveur de base de données",
        "Une coupure du câble réseau reliant le client au serveur",
        "Une transaction qui dure plus de 24 heures"
      ],
      options: [
        "Une situation où deux transactions ou plus sont bloquées indéfiniment, chacune attendant une ressource verrouillée par l'autre",
        "Un arrêt physique du serveur de base de données",
        "Une coupure du câble réseau reliant le client au serveur",
        "Une transaction qui dure plus de 24 heures"
      ],
      correctAnswer: 0,
      explanation: "Un deadlock (interblocage) se produit lorsque T1 attend un verrou détenu par T2, tandis que T2 attend un verrou détenu par T1. Le SGBD détecte le cycle (graphe d'attente) et avorte l'une des transactions.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Difficile',
      question: "Quelle technique de contrôle de concurrence moderne (utilisée par Oracle et PostgreSQL) permet aux lecteurs de ne jamais bloquer les rédacteurs et aux rédacteurs de ne jamais bloquer les lecteurs ?",
      choices: [
        "MVCC (Multi-Version Concurrency Control)",
        "2PL strict avec verrous de tables entières",
        "Verrouillage optimiste sans journalisation",
        "Sérialisation pure par file d'attente mono-thread"
      ],
      options: [
        "MVCC (Multi-Version Concurrency Control)",
        "2PL strict avec verrous de tables entières",
        "Verrouillage optimiste sans journalisation",
        "Sérialisation pure par file d'attente mono-thread"
      ],
      correctAnswer: 0,
      explanation: "MVCC (Multi-Version Concurrency Control) conserve plusieurs versions horodatées des données (via les segments d'annulation Undo sous Oracle). Les lectures accèdent à un snapshot cohérent dans le passé sans poser de verrou bloquant.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Moyen',
      question: "Quelle clause SQL permet de poser explicitement un verrou exclusif sur les lignes sélectionnées par une requête SELECT ?",
      choices: ["FOR UPDATE", "LOCK SHARED", "WITH EXCLUSIVE", "BLOCK ROWS"],
      options: ["FOR UPDATE", "LOCK SHARED", "WITH EXCLUSIVE", "BLOCK ROWS"],
      correctAnswer: 0,
      explanation: "La clause `SELECT ... FOR UPDATE` verrouille les lignes en écriture (verrou exclusif) pour empêcher d'autres transactions de les modifier avant le COMMIT.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Difficile',
      question: "Sous Oracle, quelle erreur célèbre (ORA-01555) survient lorsqu'une requête de longue durée tente d'accéder à une image cohérente passée dont les blocs ont été écrasés dans les segments d'annulation ?",
      choices: ["ORA-01555: snapshot too old", "ORA-00001: unique constraint violated", "ORA-00942: table or view does not exist", "ORA-01403: no data found"],
      options: ["ORA-01555: snapshot too old", "ORA-00001: unique constraint violated", "ORA-00942: table or view does not exist", "ORA-01403: no data found"],
      correctAnswer: 0,
      explanation: "L'erreur ORA-01555 (snapshot too old) se produit lorsque les données d'annulation (Undo) requises pour reconstruire l'état de la table au début de la requête ont été recyclées par d'autres transactions.",
      source: "Ancien examen"
    },
    {
      topic: 'Concurrence & Isolation',
      difficulty: 'Moyen',
      question: "Dans le verrouillage optimiste (Optimistic Locking), comment détecte-t-on qu'une ligne a été modifiée par un tiers avant d'enregistrer ses changements ?",
      choices: [
        "En comparant un numéro de version ou un horodatage (timestamp) de la ligne lors du UPDATE",
        "En posant un verrou exclusif dès l'ouverture de l'écran",
        "En interrogeant le dictionnaire de données",
        "Par un trigger de suppression"
      ],
      options: [
        "En comparant un numéro de version ou un horodatage (timestamp) de la ligne lors du UPDATE",
        "En posant un verrou exclusif dès l'ouverture de l'écran",
        "En interrogeant le dictionnaire de données",
        "Par un trigger de suppression"
      ],
      correctAnswer: 0,
      explanation: "Le verrouillage optimiste ne pose pas de verrous en base. Il utilise une colonne `version` : `UPDATE ... SET version = version + 1 WHERE id = :id AND version = :ancienne_version`. Si 0 ligne est modifiée, un conflit concurrentiel est détecté.",
      source: "Ancien examen"
    },

    // 9. Indexation & Optimisation (81-90)
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Facile',
      question: "Quelle structure de données est la plus couramment utilisée par défaut pour les index dans les SGBD relationnels (ex: Oracle, PostgreSQL, MySQL) ?",
      choices: ["Arbre B / B-Tree (ou B+Tree)", "Table de hachage (Hash Table)", "Liste chaînée", "Graphe orienté acyclique"],
      options: ["Arbre B / B-Tree (ou B+Tree)", "Table de hachage (Hash Table)", "Liste chaînée", "Graphe orienté acyclique"],
      correctAnswer: 0,
      explanation: "Les index B-Tree (ou B+Tree) sont l'index par défaut car ils maintiennent les clés triées et offrent des recherches exactes, par intervalle et des tris en temps logarithmique O(log N).",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Moyen',
      question: "Dans quel cas un index de type Bitmap est-il particulièrement performant sous Oracle ?",
      choices: [
        "Pour des colonnes ayant une faible cardinalité (peu de valeurs distinctes, ex: Sexe, Statut, Code Pays) dans des tables à dominante lecture (OLAP)",
        "Pour des colonnes contenant des identifiants uniques (UUID)",
        "Pour des tables subissant des milliers d'INSERT/UPDATE concurrents par seconde (OLTP)",
        "Pour des colonnes de type BLOB"
      ],
      options: [
        "Pour des colonnes ayant une faible cardinalité (peu de valeurs distinctes, ex: Sexe, Statut, Code Pays) dans des tables à dominante lecture (OLAP)",
        "Pour des colonnes contenant des identifiants uniques (UUID)",
        "Pour des tables subissant des milliers d'INSERT/UPDATE concurrents par seconde (OLTP)",
        "Pour des colonnes de type BLOB"
      ],
      correctAnswer: 0,
      explanation: "Les index Bitmap représentent la présence d'une valeur par un vecteur binaire (0 ou 1). Ils sont ultra-rapides pour combiner des filtres booléens (AND/OR logiques sur bits) sur des colonnes à faible cardinalité en entrepôt de données.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Facile',
      question: "Quelle commande SQL permet d'afficher le plan d'exécution choisi par l'optimiseur pour une requête sous Oracle ?",
      choices: ["EXPLAIN PLAN FOR", "SHOW QUERY PLAN", "ANALYZE QUERY", "DESCRIBE PLAN"],
      options: ["EXPLAIN PLAN FOR", "SHOW QUERY PLAN", "ANALYZE QUERY", "DESCRIBE PLAN"],
      correctAnswer: 0,
      explanation: "Sous Oracle, on utilise `EXPLAIN PLAN FOR requête;` puis on consulte le résultat stocké dans `PLAN_TABLE` avec `SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY());`.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Moyen',
      question: "Qu'est-ce qu'un parcours complet de table (Full Table Scan / FTS) dans un plan d'exécution ?",
      choices: [
        "Le moteur lit séquentiellement chaque bloc de données de la table du début à la fin",
        "Le moteur consulte l'index B-Tree",
        "La table est scannée en mémoire uniquement",
        "Une recherche dichotomique sur la clé primaire"
      ],
      options: [
        "Le moteur lit séquentiellement chaque bloc de données de la table du début à la fin",
        "Le moteur consulte l'index B-Tree",
        "La table est scannée en mémoire uniquement",
        "Une recherche dichotomique sur la clé primaire"
      ],
      correctAnswer: 0,
      explanation: "Un Full Table Scan lit tous les blocs de données jusqu'au High Water Mark (HWM). C'est optimal pour récupérer une grande proportion de la table, mais inefficace pour rechercher une ligne isolée.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Difficile',
      question: "Qu'est-ce qu'un 'Index Couvrant' (Covering Index) ?",
      choices: [
        "Un index qui contient la totalité des colonnes requises par la requête (SELECT, WHERE, JOIN), évitant tout accès aux blocs de données de la table (Table Access by Index Rowid)",
        "Un index qui couvre plusieurs tables",
        "Un index créé sur 100% des colonnes de la table",
        "Un index temporaire détruit après la requête"
      ],
      options: [
        "Un index qui contient la totalité des colonnes requises par la requête (SELECT, WHERE, JOIN), évitant tout accès aux blocs de données de la table (Table Access by Index Rowid)",
        "Un index qui couvre plusieurs tables",
        "Un index créé sur 100% des colonnes de la table",
        "Un index temporaire détruit après la requête"
      ],
      correctAnswer: 0,
      explanation: "Si l'index contient toutes les colonnes nécessaires (Index Only Scan), le SGBD résout la requête uniquement en mémoire dans l'arbre d'index sans faire d'E/S supplémentaire sur les lignes de la table.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Moyen',
      question: "Quel est l'inconvénient direct d'un nombre excessif d'index sur une table transactionnelle (OLTP) ?",
      choices: [
        "Ralentissement significatif des opérations d'écriture (INSERT, UPDATE, DELETE) qui doivent mettre à jour tous les index associés",
        "Impossibilité d'effectuer des jointures",
        "Suppression automatique des contraintes d'intégrité",
        "Incompatibilité avec le langage SQL"
      ],
      options: [
        "Ralentissement significatif des opérations d'écriture (INSERT, UPDATE, DELETE) qui doivent mettre à jour tous les index associés",
        "Impossibilité d'effectuer des jointures",
        "Suppression automatique des contraintes d'intégrité",
        "Incompatibilité avec le langage SQL"
      ],
      correctAnswer: 0,
      explanation: "Chaque index améliore les lectures mais pénalise les écritures : chaque insertion ou mise à jour doit rééquilibrer les arbres d'index, consommant du temps CPU, des verrous et des I/O disque.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Difficile',
      question: "Pourquoi l'écriture de `WHERE UPPER(nom) = 'DUPONT'` peut-elle empêcher l'utilisation d'un index B-Tree classique créé sur la colonne `nom` ?",
      choices: [
        "Parce que l'application d'une fonction sur une colonne invalide l'usage d'un index simple, nécessitant la création d'un index basé sur une fonction (Function-Based Index)",
        "Parce qu'Oracle ne supporte pas les majuscules",
        "Parce que la fonction UPPER convertit la colonne en binaire",
        "Parce que l'index B-Tree est détruit"
      ],
      options: [
        "Parce que l'application d'une fonction sur une colonne invalide l'usage d'un index simple, nécessitant la création d'un index basé sur une fonction (Function-Based Index)",
        "Parce qu'Oracle ne supporte pas les majuscules",
        "Parce que la fonction UPPER convertit la colonne en binaire",
        "Parce que l'index B-Tree est détruit"
      ],
      correctAnswer: 0,
      explanation: "Une fonction enveloppant une colonne colonne dans le WHERE empêche l'optimiseur d'utiliser l'index standard sur `nom`. Il faut créer un index basé sur la fonction : `CREATE INDEX idx_nom_upper ON employe(UPPER(nom));`.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Moyen',
      question: "Quel type d'optimiseur de requêtes est utilisé par Oracle pour choisir le meilleur plan d'exécution en se basant sur des statistiques de volume et de distribution (CBO) ?",
      choices: ["L'optimiseur basé sur les coûts (CBO - Cost-Based Optimizer)", "L'optimiseur basé sur les règles (RBO)", "L'optimiseur heuristique", "L'optimiseur manuel"],
      options: ["L'optimiseur basé sur les coûts (CBO - Cost-Based Optimizer)", "L'optimiseur basé sur les règles (RBO)", "L'optimiseur heuristique", "L'optimiseur manuel"],
      correctAnswer: 0,
      explanation: "Le CBO (Cost-Based Optimizer) évalue plusieurs scénarios et calcule une estimation du coût (I/O, CPU, mémoire) en s'appuyant sur les statistiques collectées par DBMS_STATS.",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Difficile',
      question: "Dans un index composite créé sur (colonne_A, colonne_B), quelle requête NE pourra PAS tirer pleinement parti de l'index selon la règle du préfixe le plus à gauche (Leading Edge) ?",
      choices: [
        "SELECT * FROM table WHERE colonne_B = 'valeur';",
        "SELECT * FROM table WHERE colonne_A = 'valeur';",
        "SELECT * FROM table WHERE colonne_A = 'valeur' AND colonne_B = 'autre';",
        "SELECT * FROM table WHERE colonne_A = 'valeur' ORDER BY colonne_B;"
      ],
      options: [
        "SELECT * FROM table WHERE colonne_B = 'valeur';",
        "SELECT * FROM table WHERE colonne_A = 'valeur';",
        "SELECT * FROM table WHERE colonne_A = 'valeur' AND colonne_B = 'autre';",
        "SELECT * FROM table WHERE colonne_A = 'valeur' ORDER BY colonne_B;"
      ],
      correctAnswer: 0,
      explanation: "Un index composite est trié d'abord par la première colonne (colonne_A). Si la requête ne filtre que sur `colonne_B` sans mentionner `colonne_A`, l'arbre ne peut pas être traversé de manière efficace (sauf Index Skip Scan coûteux).",
      source: "Ancien examen"
    },
    {
      topic: 'Indexation & Optimisation',
      difficulty: 'Facile',
      question: "Quelle commande permet de créer un index simple sur la colonne 'email' de la table 'utilisateur' ?",
      choices: [
        "CREATE INDEX idx_user_email ON utilisateur(email);",
        "MAKE INDEX idx_user_email IN utilisateur(email);",
        "ALTER TABLE utilisateur ADD INDEX (email);",
        "NEW INDEX ON utilisateur(email);"
      ],
      options: [
        "CREATE INDEX idx_user_email ON utilisateur(email);",
        "MAKE INDEX idx_user_email IN utilisateur(email);",
        "ALTER TABLE utilisateur ADD INDEX (email);",
        "NEW INDEX ON utilisateur(email);"
      ],
      correctAnswer: 0,
      explanation: "La syntaxe standard SQL est `CREATE INDEX nom_index ON nom_table(colonne);`.",
      source: "Ancien examen"
    },

    // 10. Spécificités Oracle & PL/SQL (91-100)
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Facile',
      question: "Quelle est la structure de base d'un bloc anonyme en PL/SQL sous Oracle ?",
      choices: [
        "DECLARE (optionnel) BEGIN ... EXCEPTION (optionnel) END;",
        "START ... PROCESS ... STOP;",
        "FUNCTION ... RETURN ... FINISH;",
        "INIT ... RUN ... CATCH;"
      ],
      options: [
        "DECLARE (optionnel) BEGIN ... EXCEPTION (optionnel) END;",
        "START ... PROCESS ... STOP;",
        "FUNCTION ... RETURN ... FINISH;",
        "INIT ... RUN ... CATCH;"
      ],
      correctAnswer: 0,
      explanation: "Un bloc PL/SQL commence par une section de déclarations (DECLARE), suivie du corps d'exécution obligatoire (BEGIN ... END;) et d'une section de traitement des erreurs (EXCEPTION).",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Moyen',
      question: "Sous Oracle, quelle zone de mémoire partagée globale allouée au démarrage de l'instance contient le Buffer Cache et le Shared Pool ?",
      choices: ["La SGA (System Global Area)", "La PGA (Program Global Area)", "L'UGA (User Global Area)", "Le Tablespace TEMPORARY"],
      options: ["La SGA (System Global Area)", "La PGA (Program Global Area)", "L'UGA (User Global Area)", "Le Tablespace TEMPORARY"],
      correctAnswer: 0,
      explanation: "La SGA (System Global Area) est la zone mémoire partagée commune à tous les processus Oracle sur le serveur. La PGA est privée à chaque processus serveur.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Facile',
      question: "Quelle pseudo-colonne Oracle fournit l'adresse physique unique et immuable d'une ligne dans les fichiers de données sur disque ?",
      choices: ["ROWID", "ROWNUM", "LEVEL", "SYSDATE"],
      options: ["ROWID", "ROWNUM", "LEVEL", "SYSDATE"],
      correctAnswer: 0,
      explanation: "Le ROWID représente l'adresse physique exacte du bloc, du fichier et du numéro de ligne sur disque. C'est le moyen d'accès le plus rapide possible à une ligne dans Oracle.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Moyen',
      question: "Quelle pseudo-colonne Oracle numérote séquentiellement les lignes au fur et à mesure qu'elles sont extraites par une requête ?",
      choices: ["ROWNUM", "ROWID", "ID", "INDEX_NO"],
      options: ["ROWNUM", "ROWID", "ID", "INDEX_NO"],
      correctAnswer: 0,
      explanation: "ROWNUM attribue un numéro séquentiel (1, 2, 3...) à chaque ligne renvoyée par la requête. Attention : une clause `WHERE ROWNUM = 5` ne renverra jamais rien car ROWNUM s'incrémente seulement quand une ligne est retenue.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Moyen',
      question: "Dans un trigger PL/SQL de type FOR EACH ROW, quels préfixes permettent d'accéder respectivement à l'ancienne et à la nouvelle valeur d'une colonne lors d'un UPDATE ?",
      choices: [":OLD et :NEW", ":PREV et :NEXT", ":BEFORE et :AFTER", ":PAST et :FUTURE"],
      options: [":OLD et :NEW", ":PREV et :NEXT", ":BEFORE et :AFTER", ":PAST et :FUTURE"],
      correctAnswer: 0,
      explanation: "Dans les triggers ligne par ligne sous Oracle, `:OLD.colonne` contient la valeur avant modification et `:NEW.colonne` contient la nouvelle valeur proposée.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Difficile',
      question: "Sous Oracle, qu'est-ce qu'une table en mutation (Mutating Table Error - ORA-04091) lors de l'exécution d'un trigger ?",
      choices: [
        "Une erreur qui survient lorsqu'un trigger ligne (FOR EACH ROW) tente d'interroger ou de modifier la table même qui a déclenché le trigger alors qu'elle est en cours de modification",
        "Une table corrompue par un virus",
        "Une table dont les colonnes changent de type",
        "Une table exportée vers une autre base"
      ],
      options: [
        "Une erreur qui survient lorsqu'un trigger ligne (FOR EACH ROW) tente d'interroger ou de modifier la table même qui a déclenché le trigger alors qu'elle est en cours de modification",
        "Une table corrompue par un virus",
        "Une table dont les colonnes changent de type",
        "Une table exportée vers une autre base"
      ],
      correctAnswer: 0,
      explanation: "L'erreur ORA-04091 se produit quand un trigger row-level lit la table déclenchante : Oracle l'interdit pour éviter de lire des états de table incohérents et instables pendant l'opération.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Moyen',
      question: "Quel attribut d'un curseur explicite PL/SQL renvoie TRUE si le dernier FETCH a permis de récupérer une ligne avec succès ?",
      choices: ["mon_curseur%FOUND", "mon_curseur%ISOPEN", "mon_curseur%NOTFOUND", "mon_curseur%ROWCOUNT"],
      options: ["mon_curseur%FOUND", "mon_curseur%ISOPEN", "mon_curseur%NOTFOUND", "mon_curseur%ROWCOUNT"],
      correctAnswer: 0,
      explanation: "Les attributs de curseur en PL/SQL sont `%FOUND` (vrai si une ligne est lue), `%NOTFOUND` (vrai si fin de données), `%ISOPEN` (vrai si ouvert) et `%ROWCOUNT` (nombre de lignes traitées).",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Facile',
      question: "Sous Oracle, quelle table factice d'une seule ligne et d'une seule colonne est utilisée pour évaluer des expressions ou fonctions SQL (ex: SELECT SYSDATE FROM ...) ?",
      choices: ["DUAL", "SYSTEM", "TEMP", "DUMMY"],
      options: ["DUAL", "SYSTEM", "TEMP", "DUMMY"],
      correctAnswer: 0,
      explanation: "La table DUAL est une table spéciale créée par Oracle avec une seule colonne (DUMMY) et une seule ligne ('X'), utile pour évaluer des constantes, expressions scalaires ou pseudo-colonnes.",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Difficile',
      question: "Quelle est la principale différence entre une vue classique (CREATE VIEW) et une vue matérialisée (CREATE MATERIALIZED VIEW) sous Oracle ?",
      choices: [
        "Une vue classique stocke uniquement la définition SQL sans données, tandis qu'une vue matérialisée stocke physiquement les résultats précalculés sur disque",
        "Une vue classique ne peut pas faire de jointures",
        "La vue matérialisée n'accepte pas les index",
        "Il n'y a aucune différence technique"
      ],
      options: [
        "Une vue classique stocke uniquement la définition SQL sans données, tandis qu'une vue matérialisée stocke physiquement les résultats précalculés sur disque",
        "Une vue classique ne peut pas faire de jointures",
        "La vue matérialisée n'accepte pas les index",
        "Il n'y a aucune différence technique"
      ],
      correctAnswer: 0,
      explanation: "La vue matérialisée persiste physiquement le jeu de résultats sur disque, permettant des performances de lecture spectaculaires pour des requêtes agrégées complexes, avec des politiques de rafraîchissement (FAST, COMPLETE, ON COMMIT).",
      source: "Ancien examen"
    },
    {
      topic: 'Oracle & PL/SQL',
      difficulty: 'Moyen',
      question: "Quelle unité de stockage logique Oracle regroupe un ou plusieurs fichiers de données physiques (.dbf) ?",
      choices: ["Le Tablespace", "Le Segment", "L'Étendue (Extent)", "Le Bloc de données"],
      options: ["Le Tablespace", "Le Segment", "L'Étendue (Extent)", "Le Bloc de données"],
      correctAnswer: 0,
      explanation: "Dans l'architecture de stockage Oracle, un Tablespace est l'unité logique de plus haut niveau qui contient les segments (tables, index) et repose physiquement sur un ou plusieurs Datafiles.",
      source: "Ancien examen"
    }
  ];

  return qList.map((q, idx) => ({
    ...q,
    id: `p2-q${idx + 1}`,
    part: 2
  }));
}
