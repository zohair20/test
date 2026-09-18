import { Question } from '../../types';

export const PART_8_QUESTIONS: Question[] = [
  {
    "id": "p8-q1",
    "part": 8,
    "topic": "Diagrammes de classes UML",
    "difficulty": "Moyen",
    "question": "Considérant l'énoncé suivant : « Une commande contient plusieurs produits avec une quantité et un prix unitaire. Un produit peut appartenir à plusieurs commandes. » Quelle est la modélisation UML correcte ?",
    "options": [
      "Une association plusieurs-à-plusieurs (*..*) entre Commande et Produit portant une classe d'association 'LigneCommande' avec les attributs quantité et prixUnitaire",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Commande",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Produit",
      "Une association unidirectionnelle 1..1 sans classe d'association"
    ],
    "choices": [
      "Une association plusieurs-à-plusieurs (*..*) entre Commande et Produit portant une classe d'association 'LigneCommande' avec les attributs quantité et prixUnitaire",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Commande",
      "Placer les attributs quantité et prixUnitaire directement dans la classe Produit",
      "Une association unidirectionnelle 1..1 sans classe d'association"
    ],
    "correctAnswer": 0,
    "explanation": "La quantité et le prix unitaire dépendent à la fois de la commande et du produit considéré. Dans une relation n-aire ou *..*, ces attributs sont modélisés dans une classe d'association (LigneCommande). (Source : Concours ENSET Mohammedia 2022, Q31).",
    "source": "Ancien concours"
  },
  {
    "id": "p8-q2",
    "part": 8,
    "topic": "Standards UML",
    "difficulty": "Facile",
    "question": "Que représente le sigle UML en génie logiciel et conception de systèmes d'information ?",
    "options": [
      "Unified Modeling Language (un langage standardisé de modélisation visuelle orienté objet)",
      "Une méthode de gestion de projet concurrente de Scrum",
      "La composante données relationnelle de la méthode MERISE",
      "Un protocole réseau pour le transfert de spécifications"
    ],
    "choices": [
      "Unified Modeling Language (un langage standardisé de modélisation visuelle orienté objet)",
      "Une méthode de gestion de projet concurrente de Scrum",
      "La composante données relationnelle de la méthode MERISE",
      "Un protocole réseau pour le transfert de spécifications"
    ],
    "correctAnswer": 0,
    "explanation": "UML (Unified Modeling Language) est un langage graphique standardisé permettant de spécifier, visualiser, construire et documenter les artefacts d'un système logiciel. (Source : Concours LPISIL EST Essaouira 2014, Q9).",
    "source": "Ancien concours"
  },
  {
    "id": "p8-q3",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Facile",
    "question": "Que signifie le sigle UML en génie logiciel ?",
    "options": [
      "Unified Modeling Language (Langage de Modélisation Unifié)",
      "Universal Modern Logic",
      "Unitary Method Language",
      "Unique Modular Layer"
    ],
    "choices": [
      "Unified Modeling Language (Langage de Modélisation Unifié)",
      "Universal Modern Logic",
      "Unitary Method Language",
      "Unique Modular Layer"
    ],
    "correctAnswer": 0,
    "explanation": "UML est le langage de modélisation graphique standardisé par l'OMG pour spécifier, visualiser et documenter les architectures logicielles orientées objet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q4",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Facile",
    "question": "Quel diagramme UML représente la structure statique d'un système en montrant les classes, leurs attributs, leurs opérations et les relations qui les lient ?",
    "options": [
      "Le diagramme de classes",
      "Le diagramme de séquence",
      "Le diagramme de cas d'utilisation",
      "Le diagramme d'activités"
    ],
    "choices": [
      "Le diagramme de classes",
      "Le diagramme de séquence",
      "Le diagramme de cas d'utilisation",
      "Le diagramme d'activités"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagramme de classes est le diagramme structurel statique central d'UML décrivant les types et leurs associations.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q5",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre une relation d'Agrégation et une relation de Composition dans un diagramme de classes UML ?",
    "options": [
      "La composition (losange plein noir) implique une appartenance forte avec destruction liée (le composant ne peut exister sans le composé), tandis que l'agrégation (losange vide blanc) représente une relation 'partie-tout' faible où les composants peuvent survivre indépendamment",
      "L'agrégation est bidirectionnelle et la composition est unidirectionnelle",
      "La composition ne s'applique qu'aux interfaces",
      "Il n'y a aucune différence sémantique"
    ],
    "choices": [
      "La composition (losange plein noir) implique une appartenance forte avec destruction liée (le composant ne peut exister sans le composé), tandis que l'agrégation (losange vide blanc) représente une relation 'partie-tout' faible où les composants peuvent survivre indépendamment",
      "L'agrégation est bidirectionnelle et la composition est unidirectionnelle",
      "La composition ne s'applique qu'aux interfaces",
      "Il n'y a aucune différence sémantique"
    ],
    "correctAnswer": 0,
    "explanation": "Composition (losange noir) = cycle de vie lié (ex: une Voiture et son Moteur ou un Bâtiment et ses Pièces). Agrégation (losange blanc) = cycle de vie indépendant (ex: une Équipe et ses Joueurs).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q6",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Facile",
    "question": "Quel diagramme UML illustre les interactions dynamiques entre objets en représentant la chronologie des échanges de messages le long de lignes de vie verticales ordonnées dans le temps ?",
    "options": [
      "Le diagramme de séquence",
      "Le diagramme de déploiement",
      "Le diagramme d'états-transitions",
      "Le diagramme de paquetages"
    ],
    "choices": [
      "Le diagramme de séquence",
      "Le diagramme de déploiement",
      "Le diagramme d'états-transitions",
      "Le diagramme de paquetages"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagramme de séquence modélise les flux temporels d'appels de méthodes et de réponses entre les participants d'un cas d'usage.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q7",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Moyen",
    "question": "Dans un diagramme de cas d'utilisation UML, quelle est la différence entre une relation `<<include>>` et une relation `<<extend>>` ?",
    "options": [
      "`<<include>>` signifie que le cas inclus est obligatoirement et systématiquement exécuté, tandis que `<<extend>>` décrit un comportement optionnel ou conditionnel greffé sous certains critères à un point d'extension",
      "`<<extend>>` est toujours obligatoire",
      "`<<include>>` n'existe pas en UML",
      "Les deux relations sont strictement synonymes"
    ],
    "choices": [
      "`<<include>>` signifie que le cas inclus est obligatoirement et systématiquement exécuté, tandis que `<<extend>>` décrit un comportement optionnel ou conditionnel greffé sous certains critères à un point d'extension",
      "`<<extend>>` est toujours obligatoire",
      "`<<include>>` n'existe pas en UML",
      "Les deux relations sont strictement synonymes"
    ],
    "correctAnswer": 0,
    "explanation": "Include = factorisation obligatoire (ex: 'S'authentifier' inclus dans 'Consulter solde'). Extend = comportement optionnel/exceptionnel (ex: 'Alerter si découvert' étend 'Retirer argent').",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q8",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Moyen",
    "question": "Quel symbole de visibilité UML correspond au niveau d'accès `protected` dans un diagramme de classes ?",
    "options": [
      "# (dièse)",
      "+ (plus)",
      "- (moins)",
      "~ (tilde)"
    ],
    "choices": [
      "# (dièse)",
      "+ (plus)",
      "- (moins)",
      "~ (tilde)"
    ],
    "correctAnswer": 0,
    "explanation": "En UML : `+` pour public, `-` pour private, `#` pour protected, et `~` pour package.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q9",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Moyen",
    "question": "Quel diagramme UML modélise les différents états par lesquels passe un objet au cours de son existence en réaction à des événements et déclenchements de transitions ?",
    "options": [
      "Le diagramme d'états-transitions (State Machine Diagram)",
      "Le diagramme de composants",
      "Le diagramme de Gantt",
      "Le diagramme d'architecture"
    ],
    "choices": [
      "Le diagramme d'états-transitions (State Machine Diagram)",
      "Le diagramme de composants",
      "Le diagramme de Gantt",
      "Le diagramme d'architecture"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagramme d'états-transitions (fondé sur les automates de Harel) décrit le comportement événementiel d'un objet réactif (ex: cycle de vie d'une Commande : En cours, Payée, Expédiée, Annulée).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q10",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Facile",
    "question": "Comment représente-t-on graphiquement une relation d'héritage (généralisation) entre deux classes en UML ?",
    "options": [
      "Un trait plein terminé par une flèche triangulaire fermée creuse (blanche) pointant vers la classe mère",
      "Un trait en pointillés avec une flèche ouverte",
      "Une flèche en losange noir",
      "Deux lignes parallèles ondulées"
    ],
    "choices": [
      "Un trait plein terminé par une flèche triangulaire fermée creuse (blanche) pointant vers la classe mère",
      "Un trait en pointillés avec une flèche ouverte",
      "Une flèche en losange noir",
      "Deux lignes parallèles ondulées"
    ],
    "correctAnswer": 0,
    "explanation": "La généralisation (héritage) se dessine avec une flèche à triangle blanc pointant de la classe fille vers la super-classe.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q11",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Moyen",
    "question": "Comment représente-t-on l'implémentation (réalisation) d'une interface par une classe en UML ?",
    "options": [
      "Un trait en pointillés (discontinu) terminé par une flèche triangulaire fermée creuse blanche pointant vers l'interface",
      "Un losange plein noir",
      "Une double flèche rouge",
      "Un trait plein continu"
    ],
    "choices": [
      "Un trait en pointillés (discontinu) terminé par une flèche triangulaire fermée creuse blanche pointant vers l'interface",
      "Un losange plein noir",
      "Une double flèche rouge",
      "Un trait plein continu"
    ],
    "correctAnswer": 0,
    "explanation": "La réalisation d'interface utilise un trait tireté avec une flèche triangulaire creuse (ou la notation 'lollipop' cercle avec tige).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q12",
    "part": 8,
    "topic": "Modélisation UML",
    "difficulty": "Facile",
    "question": "Quel diagramme UML montre le déploiement physique des artefacts logiciels sur des nœuds matériels (serveurs, conteneurs, réseaux) ?",
    "options": [
      "Le diagramme de déploiement",
      "Le diagramme d'objets",
      "Le diagramme de cas d'utilisation",
      "Le diagramme de classes"
    ],
    "choices": [
      "Le diagramme de déploiement",
      "Le diagramme d'objets",
      "Le diagramme de cas d'utilisation",
      "Le diagramme de classes"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagramme de déploiement modélise la topologie matérielle (serveurs, clusters, machines virtuelles) et la distribution physique des modules applicatifs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q13",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Facile",
    "question": "Que préconise le principe de Responsabilité Unique (Single Responsibility Principle - SRP) de SOLID ?",
    "options": [
      "Une classe ne doit avoir qu'une seule et unique raison de changer (elle ne doit accomplir qu'une seule tâche fonctionnelle cohérente)",
      "Un programmeur ne doit écrire qu'une classe par jour",
      "Une fonction ne doit contenir qu'une seule ligne de code",
      "Une classe ne doit contenir qu'un seul attribut"
    ],
    "choices": [
      "Une classe ne doit avoir qu'une seule et unique raison de changer (elle ne doit accomplir qu'une seule tâche fonctionnelle cohérente)",
      "Un programmeur ne doit écrire qu'une classe par jour",
      "Une fonction ne doit contenir qu'une seule ligne de code",
      "Une classe ne doit contenir qu'un seul attribut"
    ],
    "correctAnswer": 0,
    "explanation": "Le SRP (Single Responsibility Principle) stipule qu'un module doit être responsable envers un seul et unique acteur ou domaine fonctionnel, évitant les classes monolithiques géantes ('God Object').",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q14",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Moyen",
    "question": "Que stipule le principe Ouvert/Fermé (Open/Closed Principle - OCP) ?",
    "options": [
      "Les entités logicielles (classes, modules) doivent être ouvertes à l'extension mais fermées à la modification",
      "Le code source doit être fermé aux utilisateurs",
      "Les fichiers doivent être ouverts puis fermés immédiatement après lecture",
      "Une classe doit toujours être déclarée final"
    ],
    "choices": [
      "Les entités logicielles (classes, modules) doivent être ouvertes à l'extension mais fermées à la modification",
      "Le code source doit être fermé aux utilisateurs",
      "Les fichiers doivent être ouverts puis fermés immédiatement après lecture",
      "Une classe doit toujours être déclarée final"
    ],
    "correctAnswer": 0,
    "explanation": "L'OCP permet d'ajouter de nouvelles fonctionnalités (par héritage, polymorphisme ou injection de stratégies) sans avoir à réécrire ou modifier le code source déjà testé et stabilisé.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q15",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Difficile",
    "question": "Quel principe SOLID est violé si une sous-classe `Carre` héritant de `Rectangle` redéfinit `setLargeur(l)` en modifiant aussi la hauteur, provoquant un comportement imprévu pour les fonctions attendant un `Rectangle` général ?",
    "options": [
      "Le principe de substitution de Liskov (LSP)",
      "Le principe d'inversion des dépendances (DIP)",
      "Le principe de responsabilité unique (SRP)",
      "Le principe de ségrégation des interfaces (ISP)"
    ],
    "choices": [
      "Le principe de substitution de Liskov (LSP)",
      "Le principe d'inversion des dépendances (DIP)",
      "Le principe de responsabilité unique (SRP)",
      "Le principe de ségrégation des interfaces (ISP)"
    ],
    "correctAnswer": 0,
    "explanation": "L'exemple canonique du Carré héritant du Rectangle viole le LSP : le Carré casse les invariants et le contrat attendu d'un Rectangle dont la largeur et la hauteur peuvent varier indépendamment.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q16",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Moyen",
    "question": "Que recommande le principe de Ségrégation des Interfaces (Interface Segregation Principle - ISP) ?",
    "options": [
      "Il vaut mieux concevoir plusieurs petites interfaces ciblées et spécifiques plutôt qu'une unique interface générale 'fourre-tout' obligeant les clients à dépendre de méthodes dont ils n'ont pas l'usage",
      "Chaque classe doit avoir exactement deux interfaces",
      "Toutes les interfaces doivent être privées",
      "Il faut bannir l'usage des interfaces en production"
    ],
    "choices": [
      "Il vaut mieux concevoir plusieurs petites interfaces ciblées et spécifiques plutôt qu'une unique interface générale 'fourre-tout' obligeant les clients à dépendre de méthodes dont ils n'ont pas l'usage",
      "Chaque classe doit avoir exactement deux interfaces",
      "Toutes les interfaces doivent être privées",
      "Il faut bannir l'usage des interfaces en production"
    ],
    "correctAnswer": 0,
    "explanation": "L'ISP évite les interfaces obèses : aucun client ne devrait être contraint d'implémenter des méthodes superflues qu'il n'appelle jamais.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q17",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Moyen",
    "question": "Que préconise le principe d'Inversion des Dépendances (Dependency Inversion Principle - DIP) ?",
    "options": [
      "Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau, tous deux doivent dépendre d'abstractions (interfaces) ; et les abstractions ne doivent pas dépendre des détails d'implémentation",
      "Il faut inverser l'ordre des imports en tête de fichier",
      "Les sous-classes doivent précéder la classe mère",
      "Les variables doivent être allouées à l'envers"
    ],
    "choices": [
      "Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau, tous deux doivent dépendre d'abstractions (interfaces) ; et les abstractions ne doivent pas dépendre des détails d'implémentation",
      "Il faut inverser l'ordre des imports en tête de fichier",
      "Les sous-classes doivent précéder la classe mère",
      "Les variables doivent être allouées à l'envers"
    ],
    "correctAnswer": 0,
    "explanation": "Le DIP découple la logique métier des détails concrets d'infrastructure (base de données, API, UI) grâce à l'injection de dépendances (IoC).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q18",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Facile",
    "question": "Qu'est-ce que l'Injection de Dépendances (Dependency Injection - DI) ?",
    "options": [
      "Un patron d'architecture où les objets reçoivent leurs dépendances (souvent sous forme d'interfaces) depuis l'extérieur (via le constructeur ou un setter) plutôt que de les instancier eux-mêmes avec `new`",
      "Une attaque pirate par injection SQL",
      "Une compilation dynamique de bibliothèques C",
      "Une fuite de mémoire dans le tas"
    ],
    "choices": [
      "Un patron d'architecture où les objets reçoivent leurs dépendances (souvent sous forme d'interfaces) depuis l'extérieur (via le constructeur ou un setter) plutôt que de les instancier eux-mêmes avec `new`",
      "Une attaque pirate par injection SQL",
      "Une compilation dynamique de bibliothèques C",
      "Une fuite de mémoire dans le tas"
    ],
    "correctAnswer": 0,
    "explanation": "L'injection de dépendances supprime le couplage fort en transmettant les services nécessaires depuis l'extérieur, facilitant grandement les tests unitaires via des Mocks.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q19",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que le couplage (Coupling) et la cohésion (Cohésion) en génie logiciel et quel est l'objectif recherché ?",
    "options": [
      "Rechercher un faible couplage (dépendances minimales entre modules distincts) et une forte cohésion (les éléments internes d'un même module concourent étroitement au même but)",
      "Rechercher un fort couplage et une faible cohésion",
      "Maximiser les variables globales",
      "Éliminer totalement les fonctions"
    ],
    "choices": [
      "Rechercher un faible couplage (dépendances minimales entre modules distincts) et une forte cohésion (les éléments internes d'un même module concourent étroitement au même but)",
      "Rechercher un fort couplage et une faible cohésion",
      "Maximiser les variables globales",
      "Éliminer totalement les fonctions"
    ],
    "correctAnswer": 0,
    "explanation": "'Low Coupling, High Cohesion' est le mot d'ordre fondamental du génie logiciel modulaire pour garantir la maintenabilité et la réutilisabilité.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q20",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Facile",
    "question": "Que signifie le principe KISS en développement logiciel ?",
    "options": [
      "Keep It Simple, Stupid",
      "Knowledge Is Super Secure",
      "Kernel Integrated System Software",
      "Key Input Standard Sequence"
    ],
    "choices": [
      "Keep It Simple, Stupid",
      "Knowledge Is Super Secure",
      "Kernel Integrated System Software",
      "Key Input Standard Sequence"
    ],
    "correctAnswer": 0,
    "explanation": "Le principe KISS prône la simplicité de conception en évitant toute complexité injustifiée qui nuirait à la lisibilité et à la fiabilité.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q21",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Facile",
    "question": "Que signifie le principe DRY en génie logiciel ?",
    "options": [
      "Don't Repeat Yourself",
      "Direct Runtime Yield",
      "Deploy Rapidly Yearly",
      "Data Redundancy Yield"
    ],
    "choices": [
      "Don't Repeat Yourself",
      "Direct Runtime Yield",
      "Deploy Rapidly Yearly",
      "Data Redundancy Yield"
    ],
    "correctAnswer": 0,
    "explanation": "DRY stipule que toute part de connaissance logique ne doit avoir qu'une représentation unique et non ambiguë dans le code source.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q22",
    "part": 8,
    "topic": "Principes SOLID",
    "difficulty": "Moyen",
    "question": "Que préconise le principe YAGNI en méthodologie logicielle ?",
    "options": [
      "You Aren't Gonna Need It (ne pas développer de fonctionnalité anticipée tant qu'elle n'est pas strictement requise)",
      "You Always Get New Insights",
      "Your Architecture Grows Naturally Inside",
      "Yield All Global Networks Immediately"
    ],
    "choices": [
      "You Aren't Gonna Need It (ne pas développer de fonctionnalité anticipée tant qu'elle n'est pas strictement requise)",
      "You Always Get New Insights",
      "Your Architecture Grows Naturally Inside",
      "Yield All Global Networks Immediately"
    ],
    "correctAnswer": 0,
    "explanation": "YAGNI combat la sur-ingénierie prématurée en s'interdisant d'implémenter des fonctionnalités basées sur des spéculations futures non validées.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q23",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Facile",
    "question": "Quel est l'objectif du patron de conception Singleton (GoF) ?",
    "options": [
      "Garantir qu'une classe n'a qu'une seule et unique instance dans toute l'application et fournir un point d'accès global à celle-ci",
      "Créer des copies conformes d'un objet existant",
      "Convertir l'interface d'une classe en une autre",
      "Créer une hiérarchie d'objets composites"
    ],
    "choices": [
      "Garantir qu'une classe n'a qu'une seule et unique instance dans toute l'application et fournir un point d'accès global à celle-ci",
      "Créer des copies conformes d'un objet existant",
      "Convertir l'interface d'une classe en une autre",
      "Créer une hiérarchie d'objets composites"
    ],
    "correctAnswer": 0,
    "explanation": "Le Singleton masque son constructeur en `private` et expose une méthode statique `getInstance()` qui retourne l'instance unique créée.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q24",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Difficile",
    "question": "Comment implémente-t-on un Singleton thread-safe avec l'idiome du double verrouillage (Double-Checked Locking) en Java ?",
    "options": [
      "En déclarant l'instance `private static volatile` et en synchronisant le bloc d'instanciation après une première vérification `if (instance == null)`",
      "En synchronisant toutes les méthodes de la classe",
      "En utilisant le mot-clé transient",
      "En créant l'instance dans le ramasse-miettes"
    ],
    "choices": [
      "En déclarant l'instance `private static volatile` et en synchronisant le bloc d'instanciation après une première vérification `if (instance == null)`",
      "En synchronisant toutes les méthodes de la classe",
      "En utilisant le mot-clé transient",
      "En créant l'instance dans le ramasse-miettes"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé `volatile` est indispensable pour empêcher le réordonnancement des instructions processeur lors de l'allocation mémoire de l'instance.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q25",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Moyen",
    "question": "Quel patron de conception créationnel délègue l'instanciation d'un objet à des sous-classes en définissant une méthode abstraite de fabrique ?",
    "options": [
      "Factory Method (Fabrique)",
      "Singleton",
      "Adapter",
      "Decorator"
    ],
    "choices": [
      "Factory Method (Fabrique)",
      "Singleton",
      "Adapter",
      "Decorator"
    ],
    "correctAnswer": 0,
    "explanation": "Factory Method permet à une classe de différer l'instanciation concrète d'un objet à ses classes dérivées tout en manipulant l'interface abstraite commune.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q26",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre Factory Method et Abstract Factory ?",
    "options": [
      "Factory Method crée un seul produit via l'héritage d'une méthode, tandis qu'Abstract Factory est une interface créant des familles entières d'objets apparentés ou dépendants sans spécifier leurs classes concrètes",
      "Factory Method est déprécié",
      "Abstract Factory ne fonctionne qu'avec des Singletons",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "Factory Method crée un seul produit via l'héritage d'une méthode, tandis qu'Abstract Factory est une interface créant des familles entières d'objets apparentés ou dépendants sans spécifier leurs classes concrètes",
      "Factory Method est déprécié",
      "Abstract Factory ne fonctionne qu'avec des Singletons",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "Abstract Factory (fabrique de fabriques) produit des suites cohérentes de produits (ex: boutons, fenêtres et menus pour thème Mac ou Windows).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q27",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Facile",
    "question": "Quel patron de conception permet de construire des objets complexes étape par étape en évitant les constructeurs télescopiques à trop nombreux paramètres ?",
    "options": [
      "Builder (Monteur)",
      "Prototype",
      "Proxy",
      "Facade"
    ],
    "choices": [
      "Builder (Monteur)",
      "Prototype",
      "Proxy",
      "Facade"
    ],
    "correctAnswer": 0,
    "explanation": "Le pattern Builder (ex: `UserBuilder.setName().setAge().build()`) clarifie la construction d'objets ayant de nombreux champs optionnels.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q28",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Moyen",
    "question": "Quel patron de conception créationnel crée de nouveaux objets en clonant une instance modèle existante ?",
    "options": [
      "Prototype",
      "Singleton",
      "Flyweight",
      "Observer"
    ],
    "choices": [
      "Prototype",
      "Singleton",
      "Flyweight",
      "Observer"
    ],
    "correctAnswer": 0,
    "explanation": "Le patron Prototype (via méthode `clone()`) duplique des objets existants, utile lorsque le coût d'instanciation par `new` ou initialisation est prohibitif.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q29",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Difficile",
    "question": "Quelle est la manière la plus sûre et concise d'implémenter un Singleton en Java moderne selon Joshua Bloch (Effective Java) ?",
    "options": [
      "En utilisant une énumération à une seule valeur (`public enum MonSingleton { INSTANCE; }`)",
      "En écrivant une classe abstraite",
      "En créant une interface avec des méthodes par défaut",
      "En passant par la sérialisation binaire"
    ],
    "choices": [
      "En utilisant une énumération à une seule valeur (`public enum MonSingleton { INSTANCE; }`)",
      "En écrivant une classe abstraite",
      "En créant une interface avec des méthodes par défaut",
      "En passant par la sérialisation binaire"
    ],
    "correctAnswer": 0,
    "explanation": "L'approche par `enum` garantit automatiquement le thread-safety, la prévention absolue des instanciations multiples par réflexion et la sécurité à la sérialisation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q30",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Facile",
    "question": "Qui sont les 'Gang of Four' (GoF) auteurs de l'ouvrage fondateur sur les patrons de conception (Design Patterns) en 1994 ?",
    "options": [
      "Erich Gamma, Richard Helm, Ralph Johnson et John Vlissides",
      "Alan Turing, John von Neumann, Edsger Dijkstra et Donald Knuth",
      "Ken Thompson, Dennis Ritchie, Brian Kernighan et Linus Torvalds",
      "Martin Fowler, Kent Beck, Robert Martin et Ward Cunningham"
    ],
    "choices": [
      "Erich Gamma, Richard Helm, Ralph Johnson et John Vlissides",
      "Alan Turing, John von Neumann, Edsger Dijkstra et Donald Knuth",
      "Ken Thompson, Dennis Ritchie, Brian Kernighan et Linus Torvalds",
      "Martin Fowler, Kent Beck, Robert Martin et Ward Cunningham"
    ],
    "correctAnswer": 0,
    "explanation": "Le Gang of Four (GoF) a catalogué les 23 patrons de conception classiques devenus la référence universelle de la programmation orientée objet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q31",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Moyen",
    "question": "Dans le patron Builder, quel rôle joue la classe optionnelle `Directeur` (Director) ?",
    "options": [
      "Elle orchestre les étapes de construction du builder pour produire des configurations types standardisées du produit",
      "Elle gère les accès disques",
      "Elle valide les types de variables à la compilation",
      "Elle détruit le produit une fois construit"
    ],
    "choices": [
      "Elle orchestre les étapes de construction du builder pour produire des configurations types standardisées du produit",
      "Elle gère les accès disques",
      "Elle valide les types de variables à la compilation",
      "Elle détruit le produit une fois construit"
    ],
    "correctAnswer": 0,
    "explanation": "Le Director connaît la recette d'assemblage et appelle les méthodes du Builder dans un ordre précis pour produire des variantes fréquentes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q32",
    "part": 8,
    "topic": "Design Patterns Créationnels",
    "difficulty": "Moyen",
    "question": "Pourquoi le patron Singleton est-il souvent qualifié 'd'anti-pattern' dans le développement logiciel moderne ?",
    "options": [
      "Parce qu'il introduit un état global partagé caché, viole le principe de responsabilité unique et rend les tests unitaires isolés très difficiles à exécuter en parallèle",
      "Parce qu'il consomme trop de bande passante réseau",
      "Parce qu'il ralentit l'interpréteur de commandes",
      "Parce qu'il est incompatible avec le polymorphisme"
    ],
    "choices": [
      "Parce qu'il introduit un état global partagé caché, viole le principe de responsabilité unique et rend les tests unitaires isolés très difficiles à exécuter en parallèle",
      "Parce qu'il consomme trop de bande passante réseau",
      "Parce qu'il ralentit l'interpréteur de commandes",
      "Parce qu'il est incompatible avec le polymorphisme"
    ],
    "correctAnswer": 0,
    "explanation": "Le couplage fort et l'état global masqué du Singleton compliquent le mockage et l'isolation des tests unitaires, raison pour laquelle on lui préfère l'injection de dépendances (DI) avec cycle de vie scoped/singleton géré par un conteneur IoC.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q33",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Facile",
    "question": "Quel est l'objectif du patron de conception Adapter (Adaptateur) ?",
    "options": [
      "Convertir l'interface d'une classe existante en une autre interface attendue par le client afin de faire collaborer des classes aux interfaces incompatibles",
      "Réduire la consommation mémoire en partageant des données",
      "Ajouter des responsabilités dynamiques à un objet",
      "Fournir un point d'accès unique à une base de données"
    ],
    "choices": [
      "Convertir l'interface d'une classe existante en une autre interface attendue par le client afin de faire collaborer des classes aux interfaces incompatibles",
      "Réduire la consommation mémoire en partageant des données",
      "Ajouter des responsabilités dynamiques à un objet",
      "Fournir un point d'accès unique à une base de données"
    ],
    "correctAnswer": 0,
    "explanation": "L'adaptateur agit comme un traducteur ou prise électrique universelle entre deux systèmes incompatibles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q34",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Moyen",
    "question": "Quel patron de conception structurel permet d'attacher dynamiquement de nouveaux comportements ou responsabilités à un objet sans modifier son code source ni utiliser l'héritage statique ?",
    "options": [
      "Decorator (Décorateur / Wrapper)",
      "Adapter",
      "Facade",
      "Composite"
    ],
    "choices": [
      "Decorator (Décorateur / Wrapper)",
      "Adapter",
      "Facade",
      "Composite"
    ],
    "correctAnswer": 0,
    "explanation": "Le Décorateur emballe l'objet cible et implémente la même interface que lui, interceptant les appels pour y ajouter des traitements (ex: les flux d'E/S Java `new BufferedReader(new FileReader(...))`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q35",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Facile",
    "question": "Quel patron de conception offre une interface simplifiée de haut niveau masquant la complexité d'un sous-système dense composé de nombreuses classes interdépendantes ?",
    "options": [
      "Facade (Façade)",
      "Bridge",
      "Proxy",
      "Flyweight"
    ],
    "choices": [
      "Facade (Façade)",
      "Bridge",
      "Proxy",
      "Flyweight"
    ],
    "correctAnswer": 0,
    "explanation": "La Façade présente une porte d'entrée claire et unifiée vers une machinerie interne complexe (ex: une méthode `demarrerVoiture()` qui allume l'injection, la pompe à huile et les bougies).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q36",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Moyen",
    "question": "Quel patron de conception permet de traiter de manière uniforme les objets individuels (feuilles) et les compositions d'objets (groupes / conteneurs) selon une structure arborescente ?",
    "options": [
      "Composite",
      "Decorator",
      "Proxy",
      "Singleton"
    ],
    "choices": [
      "Composite",
      "Decorator",
      "Proxy",
      "Singleton"
    ],
    "correctAnswer": 0,
    "explanation": "Le patron Composite unifie le traitement d'une feuille et d'une branche (ex: un système de fichiers où Fichier et Dossier partagent l'interface commune `ElementSystemeFichier`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q37",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Moyen",
    "question": "Quel patron de conception fournit un intermédiaire ou substitut contrôlant l'accès à un autre objet (pour de l'initialisation paresseuse, du contrôle de sécurité ou de la mise en cache) ?",
    "options": [
      "Proxy (Mandataire)",
      "Adapter",
      "Bridge",
      "Template Method"
    ],
    "choices": [
      "Proxy (Mandataire)",
      "Adapter",
      "Bridge",
      "Template Method"
    ],
    "correctAnswer": 0,
    "explanation": "Le Proxy intercepte l'accès à l'objet réel pour réaliser du chargement paresseux (Virtual Proxy), du contrôle d'autorisation (Protection Proxy) ou de l'appel distant (Remote Proxy).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q38",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Difficile",
    "question": "Quel patron de conception découple une abstraction de son implémentation de telle sorte que les deux puissent varier et évoluer indépendamment dans deux hiérarchies de classes séparées ?",
    "options": [
      "Bridge (Pont)",
      "Adapter",
      "Composite",
      "Facade"
    ],
    "choices": [
      "Bridge (Pont)",
      "Adapter",
      "Composite",
      "Facade"
    ],
    "correctAnswer": 0,
    "explanation": "Le Bridge remplace une explosion combinatoire de sous-classes par une composition entre deux hiérarchies orthogonales (ex: Forme géométrique reliée à une interface MoteurRendu).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q39",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Difficile",
    "question": "Quel patron de conception minimise l'empreinte mémoire d'un grand nombre d'objets minuscules similaires en partageant leur état intrinsèque immuable entre plusieurs instances ?",
    "options": [
      "Flyweight (Poids Mouche)",
      "Prototype",
      "Singleton",
      "Decorator"
    ],
    "choices": [
      "Flyweight (Poids Mouche)",
      "Prototype",
      "Singleton",
      "Decorator"
    ],
    "correctAnswer": 0,
    "explanation": "Le Poids-Mouche (Flyweight) sépare l'état intrinsèque partagé (ex: police et forme d'un glyphe) de l'état extrinsèque variable (coordonnées d'affichage dans la page).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q40",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Moyen",
    "question": "Dans le patron Decorator, pourquoi la classe décoratrice abstraite doit-elle à la fois hériter de l'interface du composant ET contenir une référence d'instance vers celui-ci ?",
    "options": [
      "Pour respecter le type attendu par le client tout en pouvant déléguer l'opération à l'objet enveloppé",
      "Pour doubler la vitesse d'exécution",
      "Pour forcer l'utilisation de méthodes statiques",
      "C'est une obligation imposée par le ramasse-miettes"
    ],
    "choices": [
      "Pour respecter le type attendu par le client tout en pouvant déléguer l'opération à l'objet enveloppé",
      "Pour doubler la vitesse d'exécution",
      "Pour forcer l'utilisation de méthodes statiques",
      "C'est une obligation imposée par le ramasse-miettes"
    ],
    "correctAnswer": 0,
    "explanation": "Le Décorateur est transparent pour le client car il adopte la même interface, tout en déléguant le travail sous-jacent au composant décoré avec enrichissement de comportement.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q41",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Facile",
    "question": "Quelle est la différence fondamentale d'intention entre un Adapter et un Proxy ?",
    "options": [
      "L'Adapter change l'interface d'un objet existant pour la rendre compatible, alors que le Proxy conserve exactement la même interface pour contrôler l'accès à l'objet",
      "Le Proxy transforme le format des données",
      "L'Adapter est un patron comportemental",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "L'Adapter change l'interface d'un objet existant pour la rendre compatible, alors que le Proxy conserve exactement la même interface pour contrôler l'accès à l'objet",
      "Le Proxy transforme le format des données",
      "L'Adapter est un patron comportemental",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "Adapter = interface différente pour compatibilité. Proxy = même interface pour contrôle/interception.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q42",
    "part": 8,
    "topic": "Design Patterns Structurels",
    "difficulty": "Difficile",
    "question": "Quel mécanisme standard de la plateforme Java permet de créer dynamiquement des objets Proxy à l'exécution sans écrire de code de classe à l'avance ?",
    "options": [
      "`java.lang.reflect.Proxy` et `InvocationHandler`",
      "Le bytecode classloader",
      "Les interfaces par défaut",
      "Le mot-clé native"
    ],
    "choices": [
      "`java.lang.reflect.Proxy` et `InvocationHandler`",
      "Le bytecode classloader",
      "Les interfaces par défaut",
      "Le mot-clé native"
    ],
    "correctAnswer": 0,
    "explanation": "Les Dynamic Proxies de Java permettent d'intercepter à la volée tous les appels de méthodes sur des interfaces (très utilisé dans Spring pour les transactions `@Transactional` et AOP).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q43",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Facile",
    "question": "Quel patron de conception comportemental définit une relation de dépendance un-à-plusieurs où le changement d'état d'un sujet notifie automatiquement tous ses observateurs enregistrés ?",
    "options": [
      "Observer (Observateur / Écouteur)",
      "Strategy",
      "Command",
      "Iterator"
    ],
    "choices": [
      "Observer (Observateur / Écouteur)",
      "Strategy",
      "Command",
      "Iterator"
    ],
    "correctAnswer": 0,
    "explanation": "Le patron Observer (au cœur du modèle MVC et des architectures événementielles Publish/Subscribe) alerte automatiquement les écouteurs dès qu'un état est mis à jour.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q44",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Facile",
    "question": "Quel patron de conception permet d'interchanger des familles d'algorithmes dynamiquement à l'exécution en les encapsulant dans des classes séparées derrière une interface commune ?",
    "options": [
      "Strategy (Stratégie)",
      "State",
      "Factory",
      "Builder"
    ],
    "choices": [
      "Strategy (Stratégie)",
      "State",
      "Factory",
      "Builder"
    ],
    "correctAnswer": 0,
    "explanation": "Strategy remplace de lourds blocs `switch/case` par une composition polymorphe (ex: différentes stratégies de calcul d'itinéraires piéton, voiture, vélo ou de modes de paiement).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q45",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Moyen",
    "question": "Quel patron de conception encapsule une requête ou action sous forme d'objet autonome avec ses paramètres, permettant de mettre des actions en file d'attente, de journaliser ou de gérer l'annulation (Undo/Redo) ?",
    "options": [
      "Command (Commande)",
      "Memento",
      "Visitor",
      "Mediator"
    ],
    "choices": [
      "Command (Commande)",
      "Memento",
      "Visitor",
      "Mediator"
    ],
    "correctAnswer": 0,
    "explanation": "Command découple l'émetteur de l'action de son récepteur en fournissant les méthodes `execute()` et `undo()`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q46",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Moyen",
    "question": "Quel patron de conception permet à un objet de modifier complètement son comportement lorsque son état interne change, donnant l'impression que l'objet change de classe à l'exécution ?",
    "options": [
      "State (État)",
      "Strategy",
      "Observer",
      "Decorator"
    ],
    "choices": [
      "State (État)",
      "Strategy",
      "Observer",
      "Decorator"
    ],
    "correctAnswer": 0,
    "explanation": "Le patron State modélise une machine à états finis où chaque état concret est encapsulé dans une classe dédiée avec ses propres réactions aux transitions.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q47",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Moyen",
    "question": "Quel patron de conception définit le squelette d'un algorithme dans une méthode de la classe mère, déléguant certaines étapes spécifiques à des méthodes redéfinies dans les sous-classes ?",
    "options": [
      "Template Method (Patron de Méthode)",
      "Strategy",
      "Factory Method",
      "Facade"
    ],
    "choices": [
      "Template Method (Patron de Méthode)",
      "Strategy",
      "Factory Method",
      "Facade"
    ],
    "correctAnswer": 0,
    "explanation": "Template Method utilise l'héritage et le 'Hollywood Principle' ('Don't call us, we'll call you') pour fixer la structure globale d'un algorithme tout en laissant les détails variables aux sous-classes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q48",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Facile",
    "question": "Quel patron de conception fournit un moyen séquentiel d'accéder aux éléments d'une collection d'objets sans exposer sa structure interne sous-jacente ?",
    "options": [
      "Iterator (Itérateur)",
      "Visitor",
      "Composite",
      "Mediator"
    ],
    "choices": [
      "Iterator (Itérateur)",
      "Visitor",
      "Composite",
      "Mediator"
    ],
    "correctAnswer": 0,
    "explanation": "L'Itérateur expose les méthodes universelles `hasNext()` et `next()`, masquant qu'il s'agisse d'un tableau, d'une liste chaînée ou d'un arbre.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q49",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Difficile",
    "question": "Quel patron de conception permet de capturer et d'externaliser l'état interne d'un objet sans violer son encapsulation, afin de pouvoir le restaurer ultérieurement (points de sauvegarde / snapshots) ?",
    "options": [
      "Memento",
      "Command",
      "State",
      "Prototype"
    ],
    "choices": [
      "Memento",
      "Command",
      "State",
      "Prototype"
    ],
    "correctAnswer": 0,
    "explanation": "Le Memento stocke l'instantané de l'état interne de l'objet (Originator) dans un conteneur opaque (Caretaker) sans dévoiler ses champs privés.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q50",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Difficile",
    "question": "Quel patron de conception fait transiter une requête le long d'une chaîne de récepteurs potentiels jusqu'à ce que l'un d'eux la traite ou qu'elle atteigne la fin de chaîne ?",
    "options": [
      "Chain of Responsibility (Chaîne de Responsabilité)",
      "Command",
      "Mediator",
      "Visitor"
    ],
    "choices": [
      "Chain of Responsibility (Chaîne de Responsabilité)",
      "Command",
      "Mediator",
      "Visitor"
    ],
    "correctAnswer": 0,
    "explanation": "La Chaîne de Responsabilité (utilisée pour les filtres HTTP / Middlewares Express) passe la requête au maillon suivant `next()` si le maillon courant ne la traite pas.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q51",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Difficile",
    "question": "Quel patron de conception permet d'ajouter de nouvelles opérations virtuelles sur une hiérarchie d'objets sans modifier les classes de ces objets, en utilisant le mécanisme du double dispatch ?",
    "options": [
      "Visitor (Visiteur)",
      "Decorator",
      "Iterator",
      "Interpreter"
    ],
    "choices": [
      "Visitor (Visiteur)",
      "Decorator",
      "Iterator",
      "Interpreter"
    ],
    "correctAnswer": 0,
    "explanation": "Le Visiteur sépare les algorithmes des structures de données qu'ils parcourent en utilisant un double dispatch avec la méthode `accept(Visitor v)`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q52",
    "part": 8,
    "topic": "Design Patterns Comportementaux",
    "difficulty": "Moyen",
    "question": "Quel patron de conception réduit les dépendances chaotiques entre de multiples composants en centralisant toutes leurs communications au sein d'un unique objet coordinateur ?",
    "options": [
      "Mediator (Médiateur)",
      "Observer",
      "Facade",
      "Proxy"
    ],
    "choices": [
      "Mediator (Médiateur)",
      "Observer",
      "Facade",
      "Proxy"
    ],
    "correctAnswer": 0,
    "explanation": "Le Médiateur remplace un réseau complexe de dépendances 'tout-à-tous' par un modèle en étoile où tous les composants dialoguent uniquement avec le médiateur central (ex: tour de contrôle d'aérodrome).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q53",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Facile",
    "question": "Quels sont les trois rôles officiels définis dans le guide Scrum ?",
    "options": [
      "Le Product Owner (PO), le Scrum Master (SM), et l'Équipe de Développement (Developers)",
      "Le Chef de Projet, le Développeur et le Client",
      "L'Architecte, le Directeur Technique et le Testeur",
      "Le Consultant, le Stagiaire et l'Auditeur"
    ],
    "choices": [
      "Le Product Owner (PO), le Scrum Master (SM), et l'Équipe de Développement (Developers)",
      "Le Chef de Projet, le Développeur et le Client",
      "L'Architecte, le Directeur Technique et le Testeur",
      "Le Consultant, le Stagiaire et l'Auditeur"
    ],
    "correctAnswer": 0,
    "explanation": "Scrum définit 3 rôles complémentaires : le Product Owner (définit la valeur et le backlog), le Scrum Master (facilite le cadre et supprime les obstacles) et les Développeurs (réalisent l'incrément).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q54",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Facile",
    "question": "Quelle est la durée typique d'une itération de travail (Sprint) dans la méthodologie Scrum ?",
    "options": [
      "Entre 1 et 4 semaines (couramment 2 semaines)",
      "6 mois",
      "1 an",
      "1 journée"
    ],
    "choices": [
      "Entre 1 et 4 semaines (couramment 2 semaines)",
      "6 mois",
      "1 an",
      "1 journée"
    ],
    "correctAnswer": 0,
    "explanation": "Un sprint est un bloc de temps (time-box) court d'une durée fixe comprise entre 1 et 4 semaines pour favoriser les retours réguliers.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q55",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Moyen",
    "question": "Quel événement quotidien Scrum réunit l'équipe pendant un maximum de 15 minutes pour synchroniser les activités et identifier les blocages ?",
    "options": [
      "Le Daily Scrum (ou Stand-up Meeting)",
      "La Rétrospective de Sprint",
      "La Revue de Sprint",
      "Le Poker Planning"
    ],
    "choices": [
      "Le Daily Scrum (ou Stand-up Meeting)",
      "La Rétrospective de Sprint",
      "La Revue de Sprint",
      "Le Poker Planning"
    ],
    "correctAnswer": 0,
    "explanation": "Le Daily Scrum est une courte réunion debout quotidienne de 15 minutes max pour inspecter l'avancement vers l'objectif de Sprint.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q56",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre la Revue de Sprint (Sprint Review) et la Rétrospective de Sprint (Sprint Retrospective) ?",
    "options": [
      "La Revue de Sprint inspecte le produit livré (démo des fonctionnalités terminées avec les parties prenantes), tandis que la Rétrospective inspecte le processus humain et technique (l'équipe analyse son fonctionnement interne pour s'améliorer)",
      "La Revue dure 5 minutes et la Rétrospective 3 jours",
      "La Rétrospective est réservée aux clients",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "La Revue de Sprint inspecte le produit livré (démo des fonctionnalités terminées avec les parties prenantes), tandis que la Rétrospective inspecte le processus humain et technique (l'équipe analyse son fonctionnement interne pour s'améliorer)",
      "La Revue dure 5 minutes et la Rétrospective 3 jours",
      "La Rétrospective est réservée aux clients",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "Review = SUR LE PRODUIT (démo, feedback valeur). Retrospective = SUR LE PROCESSUS ET L'ÉQUIPE (amélioration continue de la collaboration).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q57",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Facile",
    "question": "Quelle est la règle principale de la méthode Kanban pour optimiser le flux de livraison et éviter les goulets d'étranglement ?",
    "options": [
      "Limiter le travail en cours (WIP - Work In Progress) sur chaque colonne du tableau de flux",
      "Travailler sans interruption pendant 24 heures",
      "Faire des réunions de 3 heures",
      "Écrire des cahiers des charges de 200 pages"
    ],
    "choices": [
      "Limiter le travail en cours (WIP - Work In Progress) sur chaque colonne du tableau de flux",
      "Travailler sans interruption pendant 24 heures",
      "Faire des réunions de 3 heures",
      "Écrire des cahiers des charges de 200 pages"
    ],
    "correctAnswer": 0,
    "explanation": "Kanban visualise le flux et impose des limites WIP strictes par étape pour maximiser le débit et éliminer la surcharge multitâche.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q58",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Moyen",
    "question": "Quel format canonique est couramment utilisé pour rédiger une 'User Story' en agile ?",
    "options": [
      "En tant que <rôle>, je souhaite <action/besoin> afin de <bénéfice/valeur>",
      "Si <condition> alors <action> sinon <erreur>",
      "Le système doit impérativement exécuter <fonction>",
      "Base de données : insérer table X"
    ],
    "choices": [
      "En tant que <rôle>, je souhaite <action/besoin> afin de <bénéfice/valeur>",
      "Si <condition> alors <action> sinon <erreur>",
      "Le système doit impérativement exécuter <fonction>",
      "Base de données : insérer table X"
    ],
    "correctAnswer": 0,
    "explanation": "Le gabarit standard 'En tant que... je veux... afin de...' capture le persona, l'intention et la justification de la valeur utilisateur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q59",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Moyen",
    "question": "Dans le Planning Poker, quelle suite mathématique est couramment utilisée pour les cartes d'estimation de l'effort relatif des User Stories ?",
    "options": [
      "Une suite modifiée de Fibonacci (0, 1, 2, 3, 5, 8, 13, 20, 40, 100)",
      "Les puissances de 10 (1, 10, 100, 1000)",
      "Les nombres premiers",
      "La suite des entiers consécutifs (1, 2, 3, 4, 5, 6...)"
    ],
    "choices": [
      "Une suite modifiée de Fibonacci (0, 1, 2, 3, 5, 8, 13, 20, 40, 100)",
      "Les puissances de 10 (1, 10, 100, 1000)",
      "Les nombres premiers",
      "La suite des entiers consécutifs (1, 2, 3, 4, 5, 6...)"
    ],
    "correctAnswer": 0,
    "explanation": "La progression de Fibonacci reflète l'incertitude grandissante à mesure que la taille de la tâche augmente (loi de Weber-Fechner).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q60",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que la Définition de Terminé (DoD - Definition of Done) dans une équipe Scrum ?",
    "options": [
      "Un ensemble de critères objectifs partagés et convenus (code revu, tests unitaires passés, documentation à jour, déployé sur staging) que chaque élément doit valider avant d'être considéré comme prêt pour la production",
      "La date de fin du contrat du client",
      "L'heure de départ des développeurs",
      "La fermeture du ticket sur GitHub"
    ],
    "choices": [
      "Un ensemble de critères objectifs partagés et convenus (code revu, tests unitaires passés, documentation à jour, déployé sur staging) que chaque élément doit valider avant d'être considéré comme prêt pour la production",
      "La date de fin du contrat du client",
      "L'heure de départ des développeurs",
      "La fermeture du ticket sur GitHub"
    ],
    "correctAnswer": 0,
    "explanation": "La DoD garantit la qualité et la transparence en s'assurant qu'aucun incrément n'accumule de dette technique cachée.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q61",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Facile",
    "question": "Quelle pratique d'ingénierie logicielle issue d'Extreme Programming (XP) consiste en deux développeurs travaillant ensemble sur le même poste (l'un pilote, l'autre observe et réfléchit) ?",
    "options": [
      "La programmation en binôme (Pair Programming)",
      "Le Mob Programming",
      "La revue de code différée",
      "Le crowd-coding"
    ],
    "choices": [
      "La programmation en binôme (Pair Programming)",
      "Le Mob Programming",
      "La revue de code différée",
      "Le crowd-coding"
    ],
    "correctAnswer": 0,
    "explanation": "Le Pair Programming réunit un 'Driver' (qui tape le code) et un 'Navigator' (qui relit, anticipe et valide), améliorant la qualité et le partage de compétences.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q62",
    "part": 8,
    "topic": "Méthodologies Agiles",
    "difficulty": "Facile",
    "question": "Combien de valeurs fondamentales et de principes composent le Manifeste Agile rédigé en 2001 ?",
    "options": [
      "4 valeurs fondamentales et 12 principes",
      "10 commandements",
      "5 piliers et 20 règles",
      "3 valeurs et 7 principes"
    ],
    "choices": [
      "4 valeurs fondamentales et 12 principes",
      "10 commandements",
      "5 piliers et 20 règles",
      "3 valeurs et 7 principes"
    ],
    "correctAnswer": 0,
    "explanation": "Le Manifeste Agile énonce 4 valeurs (individus/interactions, logiciel fonctionnel, collaboration client, adaptation au changement) et 12 principes directeurs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q63",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Facile",
    "question": "Quelle est la principale caractéristique du modèle de développement en Cascade (Waterfall) ?",
    "options": [
      "Une approche séquentielle linéaire et rigide où chaque phase (spécifications, conception, codage, tests, déploiement) doit être entièrement achevée et validée avant d'entamer la suivante",
      "Des sprints de deux semaines avec démos régulières",
      "Une livraison continue du code en production",
      "Une absence totale de documentation"
    ],
    "choices": [
      "Une approche séquentielle linéaire et rigide où chaque phase (spécifications, conception, codage, tests, déploiement) doit être entièrement achevée et validée avant d'entamer la suivante",
      "Des sprints de deux semaines avec démos régulières",
      "Une livraison continue du code en production",
      "Une absence totale de documentation"
    ],
    "correctAnswer": 0,
    "explanation": "Le modèle en cascade formalisé par Royce (1970) interdit de remonter vers les phases antérieures sans refaire tout le cycle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q64",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Moyen",
    "question": "Quelle est la particularité du Modèle en V (V-Model) par rapport au modèle en cascade ?",
    "options": [
      "Il associe à chaque étape descendante de conception une étape ascendante correspondante de validation et de test (ex: les tests unitaires valident la conception détaillée, les tests d'acceptation valident les exigences)",
      "Il fonctionne uniquement pour les jeux vidéo",
      "Il supprime totalement les tests",
      "Il impose de coder en langage VHDL"
    ],
    "choices": [
      "Il associe à chaque étape descendante de conception une étape ascendante correspondante de validation et de test (ex: les tests unitaires valident la conception détaillée, les tests d'acceptation valident les exigences)",
      "Il fonctionne uniquement pour les jeux vidéo",
      "Il supprime totalement les tests",
      "Il impose de coder en langage VHDL"
    ],
    "correctAnswer": 0,
    "explanation": "Le cycle en V met en vis-à-vis chaque phase d'analyse/conception avec sa phase de test associée, préparant les plans de tests dès l'amont.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q65",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Difficile",
    "question": "Quelle est la caractéristique distinctive du modèle en Spirale conçu par Barry Boehm en 1986 ?",
    "options": [
      "Une analyse systématique et explicite de la gestion des risques à chaque cycle d'itération avant d'engager les étapes suivantes",
      "L'interdiction des réunions",
      "L'obligation de programmer en boucle infinie",
      "L'élimination des phases de prototypage"
    ],
    "choices": [
      "Une analyse systématique et explicite de la gestion des risques à chaque cycle d'itération avant d'engager les étapes suivantes",
      "L'interdiction des réunions",
      "L'obligation de programmer en boucle infinie",
      "L'élimination des phases de prototypage"
    ],
    "correctAnswer": 0,
    "explanation": "Le modèle en spirale tourne autour de 4 quadrants : détermination des objectifs, évaluation et réduction des risques (via prototypes), développement, et planification du cycle suivant.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q66",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que la dette technique (Technical Debt) introduite par Ward Cunningham ?",
    "options": [
      "Le coût futur induit par le choix délibéré d'une solution technique rapide et sous-optimale à court terme au détriment d'une architecture propre, exigeant des intérêts de refactorisation ultérieurs",
      "L'emprunt bancaire contracté pour financer les serveurs",
      "La facture d'électricité du datacenter",
      "Le montant des licences logicielles impayées"
    ],
    "choices": [
      "Le coût futur induit par le choix délibéré d'une solution technique rapide et sous-optimale à court terme au détriment d'une architecture propre, exigeant des intérêts de refactorisation ultérieurs",
      "L'emprunt bancaire contracté pour financer les serveurs",
      "La facture d'électricité du datacenter",
      "Le montant des licences logicielles impayées"
    ],
    "correctAnswer": 0,
    "explanation": "La métaphore financière de la dette technique illustre que rogner sur la qualité pour livrer plus vite crée une dette dont les intérêts (bugs, lenteur des évolutions futures) finissent par paralyser le projet.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q67",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Facile",
    "question": "Qu'est-ce que le Refactoring (Réusinage de code) ?",
    "options": [
      "Modifier la structure interne du code pour améliorer sa lisibilité, sa maintenabilité et ses performances SANS altérer son comportement observable externe",
      "Réécrire le programme dans un nouveau langage",
      "Ajouter de nouvelles fonctionnalités demandées par le client",
      "Supprimer la suite de tests unitaires"
    ],
    "choices": [
      "Modifier la structure interne du code pour améliorer sa lisibilité, sa maintenabilité et ses performances SANS altérer son comportement observable externe",
      "Réécrire le programme dans un nouveau langage",
      "Ajouter de nouvelles fonctionnalités demandées par le client",
      "Supprimer la suite de tests unitaires"
    ],
    "correctAnswer": 0,
    "explanation": "Le refactoring assainit le code (renommage, extraction de méthodes, simplification) tout en conservant scrupuleusement la validité des tests.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q68",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Moyen",
    "question": "Qu'appelle-t-on un 'Code Smell' (odeur de code) en génie logiciel ?",
    "options": [
      "Un symptôme ou indice dans le code source (méthodes trop longues, duplication, couplage excessif) signalant un problème de conception plus profond susceptible de dégénérer en bogue",
      "Une surchauffe de la carte mère",
      "Une erreur de syntaxe empêchant la compilation",
      "Un commentaire humoristique"
    ],
    "choices": [
      "Un symptôme ou indice dans le code source (méthodes trop longues, duplication, couplage excessif) signalant un problème de conception plus profond susceptible de dégénérer en bogue",
      "Une surchauffe de la carte mère",
      "Une erreur de syntaxe empêchant la compilation",
      "Un commentaire humoristique"
    ],
    "correctAnswer": 0,
    "explanation": "Un code smell n'est pas un bug immédiat mais un signal faible de mauvaise conception appelant à un refactoring.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q69",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Facile",
    "question": "Que signifie le concept de Produit Minimum Viable (MVP - Minimum Viable Product) ?",
    "options": [
      "La version la plus dépouillée d'un produit ne comportant que les fonctionnalités essentielles permettant de recueillir un maximum de retours d'utilisateurs réels avec un minimum d'effort",
      "Le logiciel le moins cher vendu sur le marché",
      "Un prototype jetable non fonctionnel",
      "Le produit final livré au terme du contrat"
    ],
    "choices": [
      "La version la plus dépouillée d'un produit ne comportant que les fonctionnalités essentielles permettant de recueillir un maximum de retours d'utilisateurs réels avec un minimum d'effort",
      "Le logiciel le moins cher vendu sur le marché",
      "Un prototype jetable non fonctionnel",
      "Le produit final livré au terme du contrat"
    ],
    "correctAnswer": 0,
    "explanation": "Popularisé par le mouvement Lean Startup, le MVP valide rapidement les hypothèses de valeur marché avant d'investir de lourds développements.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q70",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que la loi de Conway en génie logiciel ?",
    "options": [
      "Les organisations qui conçoivent des systèmes sont contraintes de produire des architectures logicielles qui sont la copie conforme de la structure de communication interne de ces organisations",
      "Le nombre de bugs double chaque mois",
      "La vitesse des processeurs double tous les 18 mois",
      "Un projet en retard prend encore plus de retard si on y ajoute des développeurs"
    ],
    "choices": [
      "Les organisations qui conçoivent des systèmes sont contraintes de produire des architectures logicielles qui sont la copie conforme de la structure de communication interne de ces organisations",
      "Le nombre de bugs double chaque mois",
      "La vitesse des processeurs double tous les 18 mois",
      "Un projet en retard prend encore plus de retard si on y ajoute des développeurs"
    ],
    "correctAnswer": 0,
    "explanation": "Énoncée par Melvin Conway en 1968 : l'architecture du système reflète la structure des équipes (ex: équipes silotées = architecture monolithique silotée).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q71",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Difficile",
    "question": "Qu'énonce la loi de Brooks (Le mythe du mois-homme / The Mythical Man-Month) ?",
    "options": [
      "Ajouter des développeurs à un projet logiciel déjà en retard ne fait qu'augmenter son retard en raison du surcoût de communication et de montée en compétences",
      "Un bon développeur équivaut à 10 développeurs juniors",
      "Le code parfait n'existe pas",
      "Les logiciels libres sont plus fiables"
    ],
    "choices": [
      "Ajouter des développeurs à un projet logiciel déjà en retard ne fait qu'augmenter son retard en raison du surcoût de communication et de montée en compétences",
      "Un bon développeur équivaut à 10 développeurs juniors",
      "Le code parfait n'existe pas",
      "Les logiciels libres sont plus fiables"
    ],
    "correctAnswer": 0,
    "explanation": "Fred Brooks a démontré que les personnes et les mois ne sont pas interchangeables : 9 femmes ne font pas un bébé en 1 mois en raison de la charge d'intégration et de formation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q72",
    "part": 8,
    "topic": "Cycle de vie logiciel",
    "difficulty": "Facile",
    "question": "Quelle phase du cycle de vie logiciel absorbe généralement la majorité des coûts totaux (souvent 60 à 80% du TCO) sur toute la vie d'une application ?",
    "options": [
      "La phase de maintenance et d'évolution",
      "La phase d'analyse initiale des besoins",
      "La phase de codage initial",
      "La phase de signature du contrat"
    ],
    "choices": [
      "La phase de maintenance et d'évolution",
      "La phase d'analyse initiale des besoins",
      "La phase de codage initial",
      "La phase de signature du contrat"
    ],
    "correctAnswer": 0,
    "explanation": "La maintenance (corrective, adaptative, perfective) représente l'immense majorité des dépenses logicielles sur le long terme.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q73",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un test unitaire (Unit Test) ?",
    "options": [
      "Un test automatisé validant le bon fonctionnement de la plus petite unité de code isolable (une fonction ou méthode) de manière totalement autonome sans dépendance externe",
      "Le test complet du logiciel par un client",
      "Le test de résistance du serveur sous 10 000 requêtes",
      "La vérification de la facture matérielle"
    ],
    "choices": [
      "Un test automatisé validant le bon fonctionnement de la plus petite unité de code isolable (une fonction ou méthode) de manière totalement autonome sans dépendance externe",
      "Le test complet du logiciel par un client",
      "Le test de résistance du serveur sous 10 000 requêtes",
      "La vérification de la facture matérielle"
    ],
    "correctAnswer": 0,
    "explanation": "Les tests unitaires vérifient le comportement local et déterministe d'une méthode isolée en mockant ses dépendances.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q74",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Facile",
    "question": "Quel est le cycle des trois étapes du développement piloté par les tests (TDD - Test-Driven Development) ?",
    "options": [
      "Red (écrire un test qui échoue), Green (écrire le code minimal pour faire passer le test), Refactor (nettoyer et améliorer le code)",
      "Plan, Do, Check",
      "Compile, Link, Run",
      "Design, Code, Test"
    ],
    "choices": [
      "Red (écrire un test qui échoue), Green (écrire le code minimal pour faire passer le test), Refactor (nettoyer et améliorer le code)",
      "Plan, Do, Check",
      "Compile, Link, Run",
      "Design, Code, Test"
    ],
    "correctAnswer": 0,
    "explanation": "TDD repose sur la boucle 'Red - Green - Refactor' formalisée par Kent Beck.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q75",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre les tests boîte noire (Black-Box Testing) et les tests boîte blanche (White-Box Testing) ?",
    "options": [
      "Les tests boîte noire testent les fonctionnalités uniquement d'après les spécifications sans aucune connaissance du code source interne, tandis que les tests boîte blanche s'appuient sur la structure interne, les chemins d'exécution et les branches du code",
      "Les tests boîte noire sont exécutés dans le noir",
      "Les tests boîte blanche ne concernent que la documentation",
      "Il n'y a aucune différence méthodologique"
    ],
    "choices": [
      "Les tests boîte noire testent les fonctionnalités uniquement d'après les spécifications sans aucune connaissance du code source interne, tandis que les tests boîte blanche s'appuient sur la structure interne, les chemins d'exécution et les branches du code",
      "Les tests boîte noire sont exécutés dans le noir",
      "Les tests boîte blanche ne concernent que la documentation",
      "Il n'y a aucune différence méthodologique"
    ],
    "correctAnswer": 0,
    "explanation": "Boîte noire = entrées/sorties selon le cahier des charges. Boîte blanche = couverture de branches, conditions, boucles et chemins de code.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q76",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un test de régression ?",
    "options": [
      "Un ensemble de tests réexécutés après une modification du code pour s'assurer que les changements ou ajouts récents n'ont pas brisé de fonctionnalités existantes antérieures",
      "Un test pour dégrader volontairement les performances",
      "Un test de retour à une version précédente de l'OS",
      "Un test d'échec programmé"
    ],
    "choices": [
      "Un ensemble de tests réexécutés après une modification du code pour s'assurer que les changements ou ajouts récents n'ont pas brisé de fonctionnalités existantes antérieures",
      "Un test pour dégrader volontairement les performances",
      "Un test de retour à une version précédente de l'OS",
      "Un test d'échec programmé"
    ],
    "correctAnswer": 0,
    "explanation": "Les tests de non-régression protègent le patrimoine applicatif contre les effets de bord indésirables lors de nouvelles livraisons.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q77",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'un Mock par rapport à un Stub dans les doublures de test (Test Doubles) ?",
    "options": [
      "Un Stub fournit des réponses prédéfinies fixes aux appels durant le test, tandis qu'un Mock vérifie et valide les interactions (il vérifie qu'une méthode précise a bien été appelée avec les bons arguments un certain nombre de fois)",
      "Un Mock est un vrai serveur de production",
      "Un Stub est toujours écrit en langage C",
      "Ce sont des termes identiques"
    ],
    "choices": [
      "Un Stub fournit des réponses prédéfinies fixes aux appels durant le test, tandis qu'un Mock vérifie et valide les interactions (il vérifie qu'une méthode précise a bien été appelée avec les bons arguments un certain nombre de fois)",
      "Un Mock est un vrai serveur de production",
      "Un Stub est toujours écrit en langage C",
      "Ce sont des termes identiques"
    ],
    "correctAnswer": 0,
    "explanation": "Selon Martin Fowler : Stub = vérification d'état (state verification). Mock = vérification de comportement/interactions (behavior verification).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q78",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Difficile",
    "question": "Que mesure la couverture de code par les branches (Branch Coverage) ?",
    "options": [
      "Le pourcentage de branches conditionnelles (chacune des branches `true` et `false` de chaque structure `if`/`switch`) ayant été exécutées au moins une fois par la suite de tests",
      "Le nombre de lignes de commentaires dans le code",
      "Le nombre de branches créées sur Git",
      "Le nombre de serveurs de test"
    ],
    "choices": [
      "Le pourcentage de branches conditionnelles (chacune des branches `true` et `false` de chaque structure `if`/`switch`) ayant été exécutées au moins une fois par la suite de tests",
      "Le nombre de lignes de commentaires dans le code",
      "Le nombre de branches créées sur Git",
      "Le nombre de serveurs de test"
    ],
    "correctAnswer": 0,
    "explanation": "La couverture de branches est beaucoup plus stricte que la simple couverture d'instructions (Line Coverage), car elle exige de tester les deux issues de chaque prédicat booléen.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q79",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Moyen",
    "question": "Quelle est la structure canonique de rédaction des scénarios de test dans le développement piloté par le comportement (BDD - Behavior-Driven Development) ?",
    "options": [
      "Given (Étant donné le contexte), When (Quand un événement survient), Then (Alors on attend un résultat observable)",
      "Input, Process, Output",
      "Start, Run, Stop",
      "Init, Test, Assert"
    ],
    "choices": [
      "Given (Étant donné le contexte), When (Quand un événement survient), Then (Alors on attend un résultat observable)",
      "Input, Process, Output",
      "Start, Run, Stop",
      "Init, Test, Assert"
    ],
    "correctAnswer": 0,
    "explanation": "La syntaxe Gherkin (Given / When / Then) unifie la communication entre experts métier, développeurs et testeurs.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q80",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le test de mutation (Mutation Testing) en assurance qualité logicielle ?",
    "options": [
      "Une technique d'évaluation de la qualité des tests consistant à injecter de petites modifications artificielles (mutants : changement de `+` en `-`, inversion de conditions) dans le code pour vérifier si la suite de tests détecte et échoue bien sur chaque mutant",
      "Un virus informatique utilisé pour tester la RAM",
      "Une modification du génome du programmeur",
      "La conversion automatique de Java vers C++"
    ],
    "choices": [
      "Une technique d'évaluation de la qualité des tests consistant à injecter de petites modifications artificielles (mutants : changement de `+` en `-`, inversion de conditions) dans le code pour vérifier si la suite de tests détecte et échoue bien sur chaque mutant",
      "Un virus informatique utilisé pour tester la RAM",
      "Une modification du génome du programmeur",
      "La conversion automatique de Java vers C++"
    ],
    "correctAnswer": 0,
    "explanation": "Le test de mutation 'teste les tests'. Un mutant qui survit à la suite de tests trahit un manque de rigueur ou une assertion manquante.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q81",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un test de charge (Load Testing) et un test de stress (Stress Testing) ?",
    "options": [
      "Le test de charge valide le comportement du système sous le trafic nominal maximal attendu, tandis que le test de stress pousse le système bien au-delà de ses limites pour observer sa résistance et sa dégradation gracieuse",
      "Des tests de pesée physique des disques durs",
      "Des tests de température de la salle machine",
      "Des tests de batterie pour ordinateur portable"
    ],
    "choices": [
      "Le test de charge valide le comportement du système sous le trafic nominal maximal attendu, tandis que le test de stress pousse le système bien au-delà de ses limites pour observer sa résistance et sa dégradation gracieuse",
      "Des tests de pesée physique des disques durs",
      "Des tests de température de la salle machine",
      "Des tests de batterie pour ordinateur portable"
    ],
    "correctAnswer": 0,
    "explanation": "Load test = conformité sous volume prévu. Stress test = point de rupture et capacité de récupération sans corruption de données.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q82",
    "part": 8,
    "topic": "Tests logiciels & QA",
    "difficulty": "Moyen",
    "question": "Dans la pyramide des tests de Mike Cohn, comment doivent être réparties les quantités de tests pour un projet pérenne ?",
    "options": [
      "Une large base de tests unitaires rapides et peu coûteux, une couche intermédiaire de tests d'intégration, et une fine couche supérieure de tests de bout en bout (End-to-End / UI)",
      "Un maximum de tests manuels et aucun test unitaire",
      "Uniquement des tests d'interface graphique",
      "Une pyramide inversée avec 90% de tests End-to-End"
    ],
    "choices": [
      "Une large base de tests unitaires rapides et peu coûteux, une couche intermédiaire de tests d'intégration, et une fine couche supérieure de tests de bout en bout (End-to-End / UI)",
      "Un maximum de tests manuels et aucun test unitaire",
      "Uniquement des tests d'interface graphique",
      "Une pyramide inversée avec 90% de tests End-to-End"
    ],
    "correctAnswer": 0,
    "explanation": "La pyramide préconise une majorité de tests unitaires (rapides, fiables, peu fragiles) pour éviter le piège du cône de glace inversé aux tests E2E lents et instables.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q83",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Facile",
    "question": "Quelle est la différence fondamentale entre Git et un système de contrôle de versions centralisé comme SVN ?",
    "options": [
      "Git est un système distribué (DVCS) où chaque développeur possède un clone complet de l'historique et des branches en local, permettant de travailler et commiter hors-ligne",
      "SVN n'utilise pas de fichiers",
      "Git ne supporte pas les branches",
      "Git est payant et propriétaire"
    ],
    "choices": [
      "Git est un système distribué (DVCS) où chaque développeur possède un clone complet de l'historique et des branches en local, permettant de travailler et commiter hors-ligne",
      "SVN n'utilise pas de fichiers",
      "Git ne supporte pas les branches",
      "Git est payant et propriétaire"
    ],
    "correctAnswer": 0,
    "explanation": "Dans un DVCS comme Git, chaque dépôt local contient l'intégralité du graphe historique des versions sans dépendre d'un serveur central unique pour les opérations courantes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q84",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre `git merge` et `git rebase` pour intégrer des modifications d'une branche dans une autre ?",
    "options": [
      "`git merge` crée un commit de fusion préservant l'historique exact et la chronologie des branches, tandis que `git rebase` réécrit l'historique en rejouant les commits les uns après les autres pour obtenir un historique linéaire",
      "`git rebase` supprime définitivement tous les fichiers",
      "`git merge` ne fonctionne que sur la branche main",
      "Ce sont des commandes strictement identiques"
    ],
    "choices": [
      "`git merge` crée un commit de fusion préservant l'historique exact et la chronologie des branches, tandis que `git rebase` réécrit l'historique en rejouant les commits les uns après les autres pour obtenir un historique linéaire",
      "`git rebase` supprime définitivement tous les fichiers",
      "`git merge` ne fonctionne que sur la branche main",
      "Ce sont des commandes strictement identiques"
    ],
    "correctAnswer": 0,
    "explanation": "Merge conserve l'historique réel avec un commit à 2 parents. Rebase applique les commits au sommet de la branche cible pour un graphe linéaire et propre.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q85",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Facile",
    "question": "Qu'est-ce que la zone de transit (Staging Area / Index) dans le workflow Git ?",
    "options": [
      "Une zone intermédiaire préparatoire où l'on regroupe les modifications sélectionnées (via `git add`) avant de les enregistrer définitivement dans le prochain commit",
      "La corbeille de Git",
      "Le serveur distant GitHub",
      "La mémoire cache du navigateur"
    ],
    "choices": [
      "Une zone intermédiaire préparatoire où l'on regroupe les modifications sélectionnées (via `git add`) avant de les enregistrer définitivement dans le prochain commit",
      "La corbeille de Git",
      "Le serveur distant GitHub",
      "La mémoire cache du navigateur"
    ],
    "correctAnswer": 0,
    "explanation": "L'index (staging area) permet de composer chirurgicalement le contenu exact du futur commit.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q86",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Moyen",
    "question": "Quelle commande Git permet d'extraire un commit spécifique d'une branche pour l'appliquer directement sur la branche courante ?",
    "options": [
      "git cherry-pick <commit-hash>",
      "git harvest",
      "git take",
      "git clone-commit"
    ],
    "choices": [
      "git cherry-pick <commit-hash>",
      "git harvest",
      "git take",
      "git clone-commit"
    ],
    "correctAnswer": 0,
    "explanation": "`git cherry-pick` rejoue les changements apportés par un commit donné sur le HEAD de la branche actuelle.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q87",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Difficile",
    "question": "Que signifie un état de 'Detached HEAD' (tête détachée) dans Git ?",
    "options": [
      "Le pointeur HEAD pointe directement vers un hachage de commit spécifique plutôt que vers le sommet d'une branche nommée",
      "Le disque dur est corrompu",
      "La connexion Internet est perdue",
      "Le dépôt a été supprimé du serveur"
    ],
    "choices": [
      "Le pointeur HEAD pointe directement vers un hachage de commit spécifique plutôt que vers le sommet d'une branche nommée",
      "Le disque dur est corrompu",
      "La connexion Internet est perdue",
      "Le dépôt a été supprimé du serveur"
    ],
    "correctAnswer": 0,
    "explanation": "En Detached HEAD (`git checkout <hash>`), tout nouveau commit créé sera orphelin si on change de branche sans lui associer un nom de branche.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q88",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Facile",
    "question": "Que signifie l'acronyme CI/CD dans les pratiques d'ingénierie DevOps ?",
    "options": [
      "Continuous Integration / Continuous Delivery (ou Deployment)",
      "Computer Interface / Central Device",
      "Code Improvement / Constant Debug",
      "Cloud Infrastructure / Control Domain"
    ],
    "choices": [
      "Continuous Integration / Continuous Delivery (ou Deployment)",
      "Computer Interface / Central Device",
      "Code Improvement / Constant Debug",
      "Cloud Infrastructure / Control Domain"
    ],
    "correctAnswer": 0,
    "explanation": "CI/CD désigne l'intégration continue (builds et tests automatisés à chaque push) et la livraison/déploiement continu vers les environnements.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q89",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre le Déploiement Continu (Continuous Deployment) et la Livraison Continue (Continuous Delivery) ?",
    "options": [
      "En Déploiement Continu, chaque modification validée par la chaîne de tests est automatiquement mise en production sans aucune intervention humaine, tandis qu'en Livraison Continue, le déploiement final en production nécessite une approbation humaine manuelle",
      "La Livraison Continue n'utilise pas de tests",
      "Le Déploiement Continu ne fonctionne que sur Windows",
      "Il n'y a aucune différence pratique"
    ],
    "choices": [
      "En Déploiement Continu, chaque modification validée par la chaîne de tests est automatiquement mise en production sans aucune intervention humaine, tandis qu'en Livraison Continue, le déploiement final en production nécessite une approbation humaine manuelle",
      "La Livraison Continue n'utilise pas de tests",
      "Le Déploiement Continu ne fonctionne que sur Windows",
      "Il n'y a aucune différence pratique"
    ],
    "correctAnswer": 0,
    "explanation": "Continuous Delivery = livrable toujours prêt à être déployé sur simple clic. Continuous Deployment = déploiement 100% automatisé jusqu'aux utilisateurs finaux.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q90",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le 'GitOps' dans la gestion des infrastructures cloud natives ?",
    "options": [
      "Une pratique où un dépôt Git unique sert de source de vérité déclarative pour l'état désiré de l'infrastructure et des applications, des agents automatisés synchronisant le cluster réel avec l'état décrit dans Git",
      "Un plugin pour utiliser Git dans Excel",
      "Une version spéciale de Linux",
      "Une commande pour formater les serveurs"
    ],
    "choices": [
      "Une pratique où un dépôt Git unique sert de source de vérité déclarative pour l'état désiré de l'infrastructure et des applications, des agents automatisés synchronisant le cluster réel avec l'état décrit dans Git",
      "Un plugin pour utiliser Git dans Excel",
      "Une version spéciale de Linux",
      "Une commande pour formater les serveurs"
    ],
    "correctAnswer": 0,
    "explanation": "GitOps (ex: ArgoCD, Flux) pilote l'infrastructure (Kubernetes) via des manifestes déclaratifs stockés dans Git sous contrôle de version strict.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q91",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Moyen",
    "question": "Quelle commande Git permet d'annuler en toute sécurité un commit déjà partagé sur un serveur public en créant un NOUVEAU commit inverse ?",
    "options": [
      "git revert <commit-hash>",
      "git reset --hard",
      "git delete",
      "git erase"
    ],
    "choices": [
      "git revert <commit-hash>",
      "git reset --hard",
      "git delete",
      "git erase"
    ],
    "correctAnswer": 0,
    "explanation": "`git revert` crée un commit appliquant les modifications exactement inverses, ce qui annule l'erreur sans réécrire l'historique public partagé.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q92",
    "part": 8,
    "topic": "Git et CI/CD",
    "difficulty": "Moyen",
    "question": "Quelle commande Git permet de mettre temporairement de côté des modifications non commitées du répertoire de travail pour retrouver un état propre ?",
    "options": [
      "git stash",
      "git hide",
      "git pause",
      "git store"
    ],
    "choices": [
      "git stash",
      "git hide",
      "git pause",
      "git store"
    ],
    "correctAnswer": 0,
    "explanation": "`git stash` empile le travail en cours pour pouvoir changer de branche ou tirer les nouveautés, puis `git stash pop` restitue les changements.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q93",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'une architecture monolithique ?",
    "options": [
      "Une application où tous les composants (interface utilisateur, logique métier, accès aux données) sont regroupés et exécutés au sein d'un unique binaire ou processus déployé ensemble",
      "Une application exécutée sur un seul serveur sans électricité",
      "Une base de données sans tables",
      "Un programme qui ne peut pas être compilé"
    ],
    "choices": [
      "Une application où tous les composants (interface utilisateur, logique métier, accès aux données) sont regroupés et exécutés au sein d'un unique binaire ou processus déployé ensemble",
      "Une application exécutée sur un seul serveur sans électricité",
      "Une base de données sans tables",
      "Un programme qui ne peut pas être compilé"
    ],
    "correctAnswer": 0,
    "explanation": "Le monolithe unifie tout le code dans un seul artefact. Simple à développer et tester au départ, il peut devenir difficile à faire évoluer en cas de grande équipe.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q94",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Moyen",
    "question": "Quelle est la caractéristique fondamentale d'une architecture en Microservices ?",
    "options": [
      "L'application est découpée en une suite de petits services indépendants, chacun centré sur un domaine métier précis, disposant de sa propre base de données et communiquant via des APIs légères (HTTP REST, gRPC, messages)",
      "Chaque fonction C tourne sur une machine différente",
      "Le code source est limité à 10 lignes par fichier",
      "Tous les services partagent obligatoirement la même table SQL"
    ],
    "choices": [
      "L'application est découpée en une suite de petits services indépendants, chacun centré sur un domaine métier précis, disposant de sa propre base de données et communiquant via des APIs légères (HTTP REST, gRPC, messages)",
      "Chaque fonction C tourne sur une machine différente",
      "Le code source est limité à 10 lignes par fichier",
      "Tous les services partagent obligatoirement la même table SQL"
    ],
    "correctAnswer": 0,
    "explanation": "Les microservices offrent une autonomie de déploiement et de mise à l'échelle par équipe et par domaine, au prix d'une complexité opérationnelle et réseau accrue.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q95",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Moyen",
    "question": "Quel est le principe directeur de la Clean Architecture (Robert C. Martin) et de l'Architecture Hexagonale (Alistair Cockburn) ?",
    "options": [
      "La règle de dépendance : le cœur métier et la logique du domaine se situent au centre et ne dépendent d'aucun framework, base de données ou interface externe ; toutes les dépendances pointent toujours vers l'intérieur",
      "Le code doit être nettoyé toutes les 24 heures",
      "L'interface graphique commande directement la base de données SQL",
      "Les modèles de données doivent avoir 6 côtés géométriques"
    ],
    "choices": [
      "La règle de dépendance : le cœur métier et la logique du domaine se situent au centre et ne dépendent d'aucun framework, base de données ou interface externe ; toutes les dépendances pointent toujours vers l'intérieur",
      "Le code doit être nettoyé toutes les 24 heures",
      "L'interface graphique commande directement la base de données SQL",
      "Les modèles de données doivent avoir 6 côtés géométriques"
    ],
    "correctAnswer": 0,
    "explanation": "La Dependency Rule garantit que la logique métier pure (Entities, Use Cases) reste totalement agnostique des détails techniques externes (Ports & Adapters).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q96",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Facile",
    "question": "Quels sont les trois composants du patron architectural MVC (Modèle-Vue-Contrôleur) ?",
    "options": [
      "Le Modèle (données et logique métier), la Vue (présentation et interface utilisateur) et le Contrôleur (intermédiaire traitant les entrées utilisateur pour mettre à jour le modèle et la vue)",
      "Mémoire, Vitesse, Calcul",
      "Machine, Variable, Compilateur",
      "Module, Version, Configuration"
    ],
    "choices": [
      "Le Modèle (données et logique métier), la Vue (présentation et interface utilisateur) et le Contrôleur (intermédiaire traitant les entrées utilisateur pour mettre à jour le modèle et la vue)",
      "Mémoire, Vitesse, Calcul",
      "Machine, Variable, Compilateur",
      "Module, Version, Configuration"
    ],
    "correctAnswer": 0,
    "explanation": "MVC sépare la logique de données (Model), la restitution visuelle (View) et l'aiguillage des actions utilisateur (Controller).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q97",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Moyen",
    "question": "Quel patron architectural sépare explicitement les opérations de lecture de données (Queries) des opérations de modification de données (Commands) ?",
    "options": [
      "CQRS (Command Query Responsibility Segregation)",
      "MVC",
      "Event Sourcing",
      "Monolith First"
    ],
    "choices": [
      "CQRS (Command Query Responsibility Segregation)",
      "MVC",
      "Event Sourcing",
      "Monolith First"
    ],
    "correctAnswer": 0,
    "explanation": "CQRS sépare les modèles de mise à jour (Commands avec règles métier strictes) des modèles de lecture (Queries optimisées pour l'affichage, éventuellement dénormalisées).",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q98",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que l'Event Sourcing en architecture logicielle ?",
    "options": [
      "Une approche où l'état d'un système n'est pas stocké sous sa forme courante finale, mais comme une séquence immuable d'événements passés append-only retraçant tout l'historique des changements",
      "Un abonnement à des alertes par email",
      "Une bibliothèque de formulaires web",
      "Une écoute sur port TCP"
    ],
    "choices": [
      "Une approche où l'état d'un système n'est pas stocké sous sa forme courante finale, mais comme une séquence immuable d'événements passés append-only retraçant tout l'historique des changements",
      "Un abonnement à des alertes par email",
      "Une bibliothèque de formulaires web",
      "Une écoute sur port TCP"
    ],
    "correctAnswer": 0,
    "explanation": "Comme un grand livre comptable, Event Sourcing stocke chaque événement survenu (`CompteOuvert`, `FondsDeposes`, `FondsRetires`). L'état courant est recalculé en rejouant ces événements.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q99",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'une passerelle d'API (API Gateway) dans une architecture en microservices ?",
    "options": [
      "Un point d'entrée unique qui intercepte toutes les requêtes des clients pour gérer l'authentification, le routage, la limitation de débit (rate limiting) et la terminaison SSL",
      "Un câble reliant deux routeurs",
      "Une base de données distribuée",
      "Un commutateur réseau physique"
    ],
    "choices": [
      "Un point d'entrée unique qui intercepte toutes les requêtes des clients pour gérer l'authentification, le routage, la limitation de débit (rate limiting) et la terminaison SSL",
      "Un câble reliant deux routeurs",
      "Une base de données distribuée",
      "Un commutateur réseau physique"
    ],
    "correctAnswer": 0,
    "explanation": "L'API Gateway isole les clients externes de la complexité topologique des dizaines de microservices internes et applique des politiques transversales.",
    "source": "Conforme au programme"
  },
  {
    "id": "p8-q100",
    "part": 8,
    "topic": "Architecture logicielle",
    "difficulty": "Difficile",
    "question": "Quel patron de conception de résilience (popularisé par Netflix Hystrix) isole les dépendances défaillantes en coupant temporairement les appels vers un service en panne pour éviter les défaillances en cascade ?",
    "options": [
      "Circuit Breaker (Disjoncteur)",
      "Bulkhead",
      "Retry",
      "Ambassador"
    ],
    "choices": [
      "Circuit Breaker (Disjoncteur)",
      "Bulkhead",
      "Retry",
      "Ambassador"
    ],
    "correctAnswer": 0,
    "explanation": "Le Circuit Breaker surveille le taux d'erreur : si un service tiers s'effondre, le disjoncteur bascule en état 'Open' et renvoie immédiatement un fallback sans saturer les threads du système.",
    "source": "Conforme au programme"
  }
];
