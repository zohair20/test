import { Question } from '../../types';

export const PART_4_QUESTIONS: Question[] = [
  {
    "id": "p4-q1",
    "part": 4,
    "topic": "Polymorphisme et héritage",
    "difficulty": "Moyen",
    "question": "Considérant les classes Java suivantes :\nclass A { void afficheToi() { System.out.println(\"je suis un A\"); } }\nclass B extends A { void afficheToi() { System.out.println(\"je suis un B\"); } }\nclass Essai { public static void main(String[] args) { A x = new B(); x.afficheToi(); } }\nQuel résultat produit l'exécution de ce programme ?",
    "options": [
      "Il se compile, s'exécute et affiche \"je suis un B\"",
      "Il affiche \"je suis un A\"",
      "Erreur de compilation car x est de type A mais reçoit une instance de type B",
      "Erreur d'exécution ClassCastException"
    ],
    "choices": [
      "Il se compile, s'exécute et affiche \"je suis un B\"",
      "Il affiche \"je suis un A\"",
      "Erreur de compilation car x est de type A mais reçoit une instance de type B",
      "Erreur d'exécution ClassCastException"
    ],
    "correctAnswer": 0,
    "explanation": "En Java, les méthodes d'instance sont virtuelles par défaut. Le polymorphisme dynamique et la liaison tardive (late binding) exécutent la méthode redéfinie correspondant au type dynamique de l'objet créé (B), soit 'je suis un B'. (Source : Concours LPISIL EST Essaouira 2016, Ex 3 Q1).",
    "source": "Ancien concours"
  },
  {
    "id": "p4-q2",
    "part": 4,
    "topic": "Machine virtuelle Java (JVM)",
    "difficulty": "Facile",
    "question": "L'exécution et l'interprétation du bytecode des programmes Java compilés (.class) sont prises en charge par :",
    "options": [
      "La JVM (Java Virtual Machine)",
      "Le compilateur javac",
      "L'API Java standard uniquement",
      "Le système d'exploitation hôte directement sans couche logicielle"
    ],
    "choices": [
      "La JVM (Java Virtual Machine)",
      "Le compilateur javac",
      "L'API Java standard uniquement",
      "Le système d'exploitation hôte directement sans couche logicielle"
    ],
    "correctAnswer": 0,
    "explanation": "La JVM interprète et compile à la volée (JIT) le bytecode Java portable en instructions machine natives adaptées au système hôte. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q2).",
    "source": "Ancien concours"
  },
  {
    "id": "p4-q3",
    "part": 4,
    "topic": "Variables et Modificateurs statiques",
    "difficulty": "Facile",
    "question": "En langage Java, un attribut déclaré avec le mot-clé static est également désigné sous le nom de :",
    "options": [
      "Variable de classe (partagée par toutes les instances)",
      "Variable d'instance",
      "Variable locale",
      "Variable transitoire"
    ],
    "choices": [
      "Variable de classe (partagée par toutes les instances)",
      "Variable d'instance",
      "Variable locale",
      "Variable transitoire"
    ],
    "correctAnswer": 0,
    "explanation": "Un attribut static appartient à la classe elle-même et non à une instance particulière. Il existe en un seul exemplaire en mémoire, partagé par toutes les instances. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q4).",
    "source": "Ancien concours"
  },
  {
    "id": "p4-q4",
    "part": 4,
    "topic": "Gestion de la mémoire et Garbage Collector",
    "difficulty": "Facile",
    "question": "Quel est le rôle du ramasse-miettes (Garbage Collector) en Java ?",
    "options": [
      "Il libère automatiquement la mémoire occupée par les objets devenus inaccessibles, déchargeant le développeur de la gestion manuelle de la mémoire",
      "Il oblige le programmeur à appeler manuellement delete() ou free()",
      "Il réinitialise les variables statiques au redémarrage du serveur",
      "Il défragmente uniquement le disque dur du serveur hôte"
    ],
    "choices": [
      "Il libère automatiquement la mémoire occupée par les objets devenus inaccessibles, déchargeant le développeur de la gestion manuelle de la mémoire",
      "Il oblige le programmeur à appeler manuellement delete() ou free()",
      "Il réinitialise les variables statiques au redémarrage du serveur",
      "Il défragmente uniquement le disque dur du serveur hôte"
    ],
    "correctAnswer": 0,
    "explanation": "Le Garbage Collector identifie et détruit les objets du tas (Heap) qui ne possèdent plus aucune référence active, évitant ainsi les fuites de mémoire manuelles. (Source : Concours LPISIL EST Essaouira 2017, Ex 3 Q6).",
    "source": "Ancien concours"
  },
  {
    "id": "p4-q5",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Facile",
    "question": "Quels sont les 4 piliers fondamentaux de la programmation orientée objet (POO) ?",
    "options": [
      "Encapsulation, Héritage, Polymorphisme et Abstraction",
      "Compilation, Interprétation, Débogage et Déploiement",
      "Classes, Fonctions, Variables et Pointeurs",
      "Indexation, Tri, Recherche et Récursivité"
    ],
    "choices": [
      "Encapsulation, Héritage, Polymorphisme et Abstraction",
      "Compilation, Interprétation, Débogage et Déploiement",
      "Classes, Fonctions, Variables et Pointeurs",
      "Indexation, Tri, Recherche et Récursivité"
    ],
    "correctAnswer": 0,
    "explanation": "La POO repose sur 4 concepts cardinaux : l'Encapsulation (protection de l'état interne), l'Héritage (réutilisation et hiérarchie de types), le Polymorphisme (comportements multiples sous une interface commune) et l'Abstraction (séparation du quoi et du comment).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q6",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Facile",
    "question": "Quel principe de la POO consiste à restreindre l'accès direct aux attributs d'un objet en les déclarant `private` et en fournissant des getters et setters ?",
    "options": [
      "L'Encapsulation",
      "L'Héritage",
      "Le Polymorphisme",
      "La Généricité"
    ],
    "choices": [
      "L'Encapsulation",
      "L'Héritage",
      "Le Polymorphisme",
      "La Généricité"
    ],
    "correctAnswer": 0,
    "explanation": "L'encapsulation dissimule les détails d'implémentation d'une classe et contrôle les mutations de son état interne via des méthodes d'accès publiques.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q7",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre la surcharge de méthode (Overloading) et la redéfinition de méthode (Overriding) en Java ?",
    "options": [
      "La surcharge (Overloading) définit plusieurs méthodes de même nom avec des signatures différentes dans la même classe, tandis que la redéfinition (Overriding) réécrit dans une sous-classe une méthode héritée avec exactement la même signature",
      "La surcharge n'existe qu'en C++",
      "La redéfinition s'effectue au moment de la compilation",
      "Il n'y a aucune différence en Java"
    ],
    "choices": [
      "La surcharge (Overloading) définit plusieurs méthodes de même nom avec des signatures différentes dans la même classe, tandis que la redéfinition (Overriding) réécrit dans une sous-classe une méthode héritée avec exactement la même signature",
      "La surcharge n'existe qu'en C++",
      "La redéfinition s'effectue au moment de la compilation",
      "Il n'y a aucune différence en Java"
    ],
    "correctAnswer": 0,
    "explanation": "Overloading = polymorphisme statique (même nom, paramètres différents, résolu à la compilation). Overriding = polymorphisme dynamique (même nom et paramètres dans une sous-classe, résolu à l'exécution via la table virtuelle).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q8",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Facile",
    "question": "Quelle est la classe mère universelle de toutes les classes en Java dont toute classe hérite implicitement si aucun `extends` n'est spécifié ?",
    "options": [
      "java.lang.Object",
      "java.lang.Class",
      "java.lang.System",
      "java.lang.Root"
    ],
    "choices": [
      "java.lang.Object",
      "java.lang.Class",
      "java.lang.System",
      "java.lang.Root"
    ],
    "correctAnswer": 0,
    "explanation": "Toute classe en Java dérive directement ou indirectement de `java.lang.Object`, qui fournit les méthodes fondamentales `equals()`, `hashCode()`, `toString()`, etc.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q9",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Moyen",
    "question": "Java supporte-t-il l'héritage multiple de classes (une classe héritant directement de deux classes mères avec `extends`) ?",
    "options": [
      "Non, Java interdit l'héritage multiple de classes pour éviter le problème du diamant (Diamond Problem), mais permet d'implémenter plusieurs interfaces",
      "Oui, via le mot-clé `extends A, B`",
      "Oui, uniquement pour les classes abstraites",
      "Oui, depuis Java 8"
    ],
    "choices": [
      "Non, Java interdit l'héritage multiple de classes pour éviter le problème du diamant (Diamond Problem), mais permet d'implémenter plusieurs interfaces",
      "Oui, via le mot-clé `extends A, B`",
      "Oui, uniquement pour les classes abstraites",
      "Oui, depuis Java 8"
    ],
    "correctAnswer": 0,
    "explanation": "Une classe Java ne peut étendre qu'une seule classe mère (`extends`). En revanche, elle peut implémenter un nombre illimité d'interfaces (`implements A, B, C`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q10",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Difficile",
    "question": "Quel principe de conception SOLID stipule qu'une sous-classe doit pouvoir remplacer sa classe mère sans altérer la cohérence du programme ?",
    "options": [
      "Le principe de substitution de Liskov (LSP)",
      "Le principe de responsabilité unique (SRP)",
      "Le principe ouvert/fermé (OCP)",
      "Le principe de ségrégation des interfaces (ISP)"
    ],
    "choices": [
      "Le principe de substitution de Liskov (LSP)",
      "Le principe de responsabilité unique (SRP)",
      "Le principe ouvert/fermé (OCP)",
      "Le principe de ségrégation des interfaces (ISP)"
    ],
    "correctAnswer": 0,
    "explanation": "Le LSP (Liskov Substitution Principle) impose que tout sous-type doit préserver les invariants et contrats comportementaux de son type de base.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q11",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Facile",
    "question": "Quel mot-clé Java permet d'instancier un nouvel objet en mémoire et d'appeler son constructeur ?",
    "options": [
      "new",
      "create",
      "alloc",
      "init"
    ],
    "choices": [
      "new",
      "create",
      "alloc",
      "init"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur `new` alloue la mémoire de l'objet sur le tas (Heap) et invoque le constructeur correspondant.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q12",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Moyen",
    "question": "Qu'est-ce que la liaison dynamique (Dynamic / Late Binding) en Java ?",
    "options": [
      "Le mécanisme par lequel l'appel de méthode est résolu à l'exécution en fonction du type réel de l'objet instancié et non du type de la référence",
      "L'importation de bibliothèques DLL",
      "La compilation du bytecode en code natif",
      "L'allocation de mémoire dynamique"
    ],
    "choices": [
      "Le mécanisme par lequel l'appel de méthode est résolu à l'exécution en fonction du type réel de l'objet instancié et non du type de la référence",
      "L'importation de bibliothèques DLL",
      "La compilation du bytecode en code natif",
      "L'allocation de mémoire dynamique"
    ],
    "correctAnswer": 0,
    "explanation": "En Java, toutes les méthodes d'instance non-statiques et non-finales sont virtuelles par défaut : l'appel `animal.crier()` invoquera la méthode de `Chien` si l'objet réel est un Chien, même si la référence est de type `Animal`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q13",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Difficile",
    "question": "Que garantit le respect du contrat entre les méthodes `equals()` et `hashCode()` dans la classe `Object` ?",
    "options": [
      "Si deux objets sont égaux selon `equals()`, ils doivent obligatoirement renvoyer la même valeur de `hashCode()`",
      "Deux objets ayant le même hashCode sont obligatoirement égaux selon equals",
      "Les hashCodes doivent toujours être positifs",
      "La méthode equals doit renvoyer un entier"
    ],
    "choices": [
      "Si deux objets sont égaux selon `equals()`, ils doivent obligatoirement renvoyer la même valeur de `hashCode()`",
      "Deux objets ayant le même hashCode sont obligatoirement égaux selon equals",
      "Les hashCodes doivent toujours être positifs",
      "La méthode equals doit renvoyer un entier"
    ],
    "correctAnswer": 0,
    "explanation": "Règle absolue : si `a.equals(b)` est vrai, alors `a.hashCode() == b.hashCode()` doit être vrai. L'inverse n'est pas obligatoire (collisions de hachage possibles). Violer ce contrat brise les collections de type HashSet et HashMap.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q14",
    "part": 4,
    "topic": "Concepts POO",
    "difficulty": "Moyen",
    "question": "Quelle annotation Java permet d'indiquer explicitement au compilateur qu'une méthode est censée redéfinir une méthode de sa super-classe ou d'une interface ?",
    "options": [
      "@Override",
      "@Inherit",
      "@Redefine",
      "@Overwrite"
    ],
    "choices": [
      "@Override",
      "@Inherit",
      "@Redefine",
      "@Overwrite"
    ],
    "correctAnswer": 0,
    "explanation": "`@Override` demande au compilateur de valider que la signature correspond bien à une méthode existante de la classe mère, évitant les fautes de frappe subtiles.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q15",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Facile",
    "question": "Quel est le nom d'un constructeur en Java ?",
    "options": [
      "Il porte exactement le même nom que la classe et ne possède aucun type de retour (même pas void)",
      "Il s'appelle obligatoirement `constructor`",
      "Il porte le nom de la classe et retourne `void`",
      "Il s'appelle obligatoirement `init`"
    ],
    "choices": [
      "Il porte exactement le même nom que la classe et ne possède aucun type de retour (même pas void)",
      "Il s'appelle obligatoirement `constructor`",
      "Il porte le nom de la classe et retourne `void`",
      "Il s'appelle obligatoirement `init`"
    ],
    "correctAnswer": 0,
    "explanation": "En Java, le constructeur a impérativement le même nom que la classe et n'a aucun type de retour.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q16",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Moyen",
    "question": "Que se passe-t-il si un développeur ne déclare explicitement aucun constructeur dans une classe Java ?",
    "options": [
      "Le compilateur génère automatiquement un constructeur par défaut sans argument (no-arg constructor) public",
      "La classe ne peut pas être instanciée",
      "Une erreur de compilation survient",
      "La classe devient automatiquement abstraite"
    ],
    "choices": [
      "Le compilateur génère automatiquement un constructeur par défaut sans argument (no-arg constructor) public",
      "La classe ne peut pas être instanciée",
      "Une erreur de compilation survient",
      "La classe devient automatiquement abstraite"
    ],
    "correctAnswer": 0,
    "explanation": "Si aucun constructeur n'est écrit, le compilateur fournit un constructeur sans paramètre. Dès qu'au moins un constructeur avec arguments est défini, le constructeur par défaut n'est plus généré automatiquement.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q17",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Facile",
    "question": "Que référence le mot-clé `this` à l'intérieur d'une méthode d'instance en Java ?",
    "options": [
      "L'instance courante de l'objet sur lequel la méthode est exécutée",
      "La classe parente",
      "Le premier paramètre de la méthode",
      "La machine virtuelle Java"
    ],
    "choices": [
      "L'instance courante de l'objet sur lequel la méthode est exécutée",
      "La classe parente",
      "Le premier paramètre de la méthode",
      "La machine virtuelle Java"
    ],
    "correctAnswer": 0,
    "explanation": "`this` est une référence explicite vers l'objet courant receveur de l'appel.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q18",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Moyen",
    "question": "Quelle instruction permet d'appeler un autre constructeur de la même classe depuis un constructeur (délégation de constructeurs) ?",
    "options": [
      "this(arguments); en toute première instruction du constructeur",
      "super(arguments);",
      "self(arguments);",
      "new this(arguments);"
    ],
    "choices": [
      "this(arguments); en toute première instruction du constructeur",
      "super(arguments);",
      "self(arguments);",
      "new this(arguments);"
    ],
    "correctAnswer": 0,
    "explanation": "L'appel à un constructeur surchargé de la même classe se fait via `this(...)` et doit obligatoirement être la première ligne du corps du constructeur.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q19",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Facile",
    "question": "Quel modificateur de visibilité rend un membre accessible uniquement à l'intérieur de la classe où il est déclaré ?",
    "options": [
      "private",
      "protected",
      "public",
      "package-private (par défaut)"
    ],
    "choices": [
      "private",
      "protected",
      "public",
      "package-private (par défaut)"
    ],
    "correctAnswer": 0,
    "explanation": "`private` restreint la visibilité strictement à la classe courante.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q20",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Moyen",
    "question": "Quelle est la visibilité d'un membre en Java si aucun modificateur d'accès (public, protected, private) n'est spécifié devant sa déclaration ?",
    "options": [
      "Visibilité par défaut (Package-Private) : accessible par toutes les classes du même package",
      "Public universel",
      "Private strict",
      "Protected"
    ],
    "choices": [
      "Visibilité par défaut (Package-Private) : accessible par toutes les classes du même package",
      "Public universel",
      "Private strict",
      "Protected"
    ],
    "correctAnswer": 0,
    "explanation": "L'absence de modificateur correspond au niveau 'package-private' : l'accès est autorisé pour toute classe située dans le même package, mais interdit en dehors.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q21",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Moyen",
    "question": "À qui le modificateur `protected` donne-t-il accès en Java ?",
    "options": [
      "Aux classes du même package ainsi qu'à toutes les sous-classes (même situées dans un autre package)",
      "Uniquement aux sous-classes",
      "À toutes les classes du projet",
      "Uniquement à la classe elle-même"
    ],
    "choices": [
      "Aux classes du même package ainsi qu'à toutes les sous-classes (même situées dans un autre package)",
      "Uniquement aux sous-classes",
      "À toutes les classes du projet",
      "Uniquement à la classe elle-même"
    ],
    "correctAnswer": 0,
    "explanation": "`protected` autorise l'accès aux classes du même package ET aux classes dérivées (par héritage), même si celles-ci se trouvent dans un package distinct.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q22",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'une classe immuable (Immutable Class) comme `java.lang.String` en Java ?",
    "options": [
      "Une classe dont l'état interne (champs) ne peut plus du tout être modifié une fois l'objet construit",
      "Une classe qui ne peut pas avoir de sous-classes mais dont les variables changent",
      "Une classe sans constructeur",
      "Une classe stockée en mémoire flash"
    ],
    "choices": [
      "Une classe dont l'état interne (champs) ne peut plus du tout être modifié une fois l'objet construit",
      "Une classe qui ne peut pas avoir de sous-classes mais dont les variables changent",
      "Une classe sans constructeur",
      "Une classe stockée en mémoire flash"
    ],
    "correctAnswer": 0,
    "explanation": "Un objet immuable ne change jamais après sa création (champs `final`, classe `final`, pas de setters, copie défensive). Cela assure la sécurité thread-safe absolue.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q23",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Facile",
    "question": "Pourquoi l'utilisation de `==` pour comparer deux objets `String` en Java est-elle souvent une source de bogue ?",
    "options": [
      "`==` compare les adresses mémoire des références et non le contenu textuel des chaînes (pour lequel il faut utiliser `.equals()`)",
      "`==` lève une exception NullPointerException systématique",
      "`==` convertit les chaînes en majuscules",
      "`==` ne fonctionne qu'avec les tableaux"
    ],
    "choices": [
      "`==` compare les adresses mémoire des références et non le contenu textuel des chaînes (pour lequel il faut utiliser `.equals()`)",
      "`==` lève une exception NullPointerException systématique",
      "`==` convertit les chaînes en majuscules",
      "`==` ne fonctionne qu'avec les tableaux"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur `==` teste l'identité référentielle (même adresse mémoire). Pour tester l'égalité sémantique du contenu textuel, il faut impérativement appeler `str1.equals(str2)`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q24",
    "part": 4,
    "topic": "Classes & Constructeurs Java",
    "difficulty": "Difficile",
    "question": "Qu'est-ce que le 'String Constant Pool' (bassin des littéraux de chaînes) dans la mémoire de la JVM ?",
    "options": [
      "Une zone mémoire spéciale où la JVM stocke une instance unique pour chaque littéral de chaîne de caractères identique afin d'économiser la RAM",
      "Une liste de mots interdits",
      "Un tableau d'octets sur le disque dur",
      "Un cache pour les expressions régulières"
    ],
    "choices": [
      "Une zone mémoire spéciale où la JVM stocke une instance unique pour chaque littéral de chaîne de caractères identique afin d'économiser la RAM",
      "Une liste de mots interdits",
      "Un tableau d'octets sur le disque dur",
      "Un cache pour les expressions régulières"
    ],
    "correctAnswer": 0,
    "explanation": "Le String Pool réutilise les instances de chaînes créées sous forme de littéraux (ex: `\"abc\" == \"abc\"` est vrai grâce au pooling, tandis que `new String(\"abc\")` crée un nouvel objet distinct sur le tas).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q25",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Facile",
    "question": "Que signifie le mot-clé `static` appliqué à un champ ou une méthode en Java ?",
    "options": [
      "Le membre appartient à la classe elle-même et est partagé par toutes les instances (accessible sans instancier d'objet)",
      "La valeur de la variable ne peut pas être changée",
      "La méthode est exécutée au démarrage de la machine",
      "La variable est détruite à la sortie du bloc"
    ],
    "choices": [
      "Le membre appartient à la classe elle-même et est partagé par toutes les instances (accessible sans instancier d'objet)",
      "La valeur de la variable ne peut pas être changée",
      "La méthode est exécutée au démarrage de la machine",
      "La variable est détruite à la sortie du bloc"
    ],
    "correctAnswer": 0,
    "explanation": "Un membre `static` est lié à la classe (variable de classe ou méthode de classe) et non aux objets instanciés.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q26",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Moyen",
    "question": "Que produit l'application du mot-clé `final` sur une classe en Java (ex: `public final class Math`) ?",
    "options": [
      "La classe ne peut pas être étendue (interdiction d'en hériter)",
      "La classe ne peut contenir que des méthodes statiques",
      "La classe ne peut pas être instanciée",
      "Tous ses attributs deviennent automatiquement nuls"
    ],
    "choices": [
      "La classe ne peut pas être étendue (interdiction d'en hériter)",
      "La classe ne peut contenir que des méthodes statiques",
      "La classe ne peut pas être instanciée",
      "Tous ses attributs deviennent automatiquement nuls"
    ],
    "correctAnswer": 0,
    "explanation": "Une classe `final` empêche toute dérivation (héritage interdit, comme pour `String` ou `Integer`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q27",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Moyen",
    "question": "Que signifie le mot-clé `final` appliqué à une méthode dans une classe parente ?",
    "options": [
      "La méthode ne peut pas être redéfinie (interdiction d'Overriding) dans les sous-classes",
      "La méthode ne renvoie aucune valeur",
      "La méthode est exécutée en dernier",
      "La méthode est privée"
    ],
    "choices": [
      "La méthode ne peut pas être redéfinie (interdiction d'Overriding) dans les sous-classes",
      "La méthode ne renvoie aucune valeur",
      "La méthode est exécutée en dernier",
      "La méthode est privée"
    ],
    "correctAnswer": 0,
    "explanation": "Une méthode `final` verrouille son comportement : les sous-classes ne peuvent pas la surcharger/redéfinir.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q28",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Facile",
    "question": "Que fait l'instruction `super.m()` dans une méthode d'une sous-classe ?",
    "options": [
      "Elle appelle explicitement la version de la méthode `m()` définie dans la classe mère (super-classe)",
      "Elle appelle la méthode la plus dérivée",
      "Elle appelle la méthode statique de l'interface",
      "Elle réinitialise l'objet"
    ],
    "choices": [
      "Elle appelle explicitement la version de la méthode `m()` définie dans la classe mère (super-classe)",
      "Elle appelle la méthode la plus dérivée",
      "Elle appelle la méthode statique de l'interface",
      "Elle réinitialise l'objet"
    ],
    "correctAnswer": 0,
    "explanation": "`super` fait référence au contexte de la super-classe immédiate.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q29",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Moyen",
    "question": "À quoi sert l'opérateur `instanceof` en Java ?",
    "options": [
      "À tester si un objet est une instance d'une classe donnée ou implémente une interface spécifique",
      "À créer une nouvelle instance",
      "À détruire une instance",
      "À cloner un objet"
    ],
    "choices": [
      "À tester si un objet est une instance d'une classe donnée ou implémente une interface spécifique",
      "À créer une nouvelle instance",
      "À détruire une instance",
      "À cloner un objet"
    ],
    "correctAnswer": 0,
    "explanation": "`obj instanceof Type` renvoie un booléen vérifiant la compatibilité du type à l'exécution.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q30",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Difficile",
    "question": "Pourquoi une méthode `static` ne peut-elle pas faire référence à `this` ou appeler directement une méthode d'instance non statique ?",
    "options": [
      "Parce qu'une méthode statique s'exécute au niveau de la classe indépendamment de toute instance d'objet existante",
      "Parce que le mot-clé static est obsolète",
      "Parce que la mémoire statique est protégée en écriture",
      "C'est possible si la méthode est publique"
    ],
    "choices": [
      "Parce qu'une méthode statique s'exécute au niveau de la classe indépendamment de toute instance d'objet existante",
      "Parce que le mot-clé static est obsolète",
      "Parce que la mémoire statique est protégée en écriture",
      "C'est possible si la méthode est publique"
    ],
    "correctAnswer": 0,
    "explanation": "Une méthode statique n'a pas de pointeur d'instance `this` implicite associé à son appel ; elle ne peut donc pas accéder directement aux variables ou méthodes d'instance sans instanciation explicite.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q31",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Moyen",
    "question": "Si une variable de référence est déclarée `final` (`final List<String> list = new ArrayList<>();`), que peut-on en déduire ?",
    "options": [
      "La référence `list` ne peut plus pointer vers un autre objet, mais le contenu de la liste elle-même peut toujours être modifié (ex: ajout d'éléments)",
      "La liste devient totalement immuable en lecture seule",
      "La liste ne peut contenir qu'un seul élément",
      "La liste est immédiatement détruite à la fin de la fonction"
    ],
    "choices": [
      "La référence `list` ne peut plus pointer vers un autre objet, mais le contenu de la liste elle-même peut toujours être modifié (ex: ajout d'éléments)",
      "La liste devient totalement immuable en lecture seule",
      "La liste ne peut contenir qu'un seul élément",
      "La liste est immédiatement détruite à la fin de la fonction"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé `final` s'applique à la variable (le pointeur de référence) : elle ne peut pas être réaffectée (`list = autre` interdit), mais l'objet interne pointé reste mutable.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q32",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Facile",
    "question": "Quel mot-clé Java permet d'importer des membres statiques d'une classe afin de pouvoir les utiliser directement sans les préfixer par le nom de la classe ?",
    "options": [
      "import static",
      "using static",
      "include static",
      "static import"
    ],
    "choices": [
      "import static",
      "using static",
      "include static",
      "static import"
    ],
    "correctAnswer": 0,
    "explanation": "`import static java.lang.Math.*;` permet d'écrire directement `sqrt(4)` au lieu de `Math.sqrt(4)`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q33",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Difficile",
    "question": "Quand s'exécute un bloc d'initialisation statique `static { ... }` dans une classe Java ?",
    "options": [
      "Une seule fois, lors du chargement initial de la classe en mémoire par le ClassLoader",
      "À chaque création d'une nouvelle instance avec `new`",
      "À chaque appel de méthode",
      "Lors de l'arrêt de la JVM"
    ],
    "choices": [
      "Une seule fois, lors du chargement initial de la classe en mémoire par le ClassLoader",
      "À chaque création d'une nouvelle instance avec `new`",
      "À chaque appel de méthode",
      "Lors de l'arrêt de la JVM"
    ],
    "correctAnswer": 0,
    "explanation": "Le bloc statique `static { ... }` est exécuté une seule fois dès que la classe est initialisée par le ClassLoader de la JVM.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q34",
    "part": 4,
    "topic": "Mots-clés Java",
    "difficulty": "Moyen",
    "question": "Quel mot-clé Java empêche un champ d'être sérialisé lors de l'enregistrement d'un objet via `ObjectOutputStream` ?",
    "options": [
      "transient",
      "volatile",
      "static",
      "noserialize"
    ],
    "choices": [
      "transient",
      "volatile",
      "static",
      "noserialize"
    ],
    "correctAnswer": 0,
    "explanation": "Le modificateur `transient` indique à la JVM d'ignorer cet attribut lors du processus de sérialisation binaire (idéal pour mots de passe ou pointeurs de threads).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q35",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Facile",
    "question": "Peut-on instancier directement une classe abstraite avec l'opérateur `new` en Java ?",
    "options": [
      "Non, une classe abstraite ne peut pas être instanciée directement, elle doit obligatoirement être sous-classée",
      "Oui, si elle possède un constructeur public",
      "Oui, si toutes ses méthodes sont statiques",
      "Oui, avec les classes anonymes uniquement sans sous-classe"
    ],
    "choices": [
      "Non, une classe abstraite ne peut pas être instanciée directement, elle doit obligatoirement être sous-classée",
      "Oui, si elle possède un constructeur public",
      "Oui, si toutes ses méthodes sont statiques",
      "Oui, avec les classes anonymes uniquement sans sous-classe"
    ],
    "correctAnswer": 0,
    "explanation": "Une classe déclarée `abstract` ne peut pas être instanciée telle quelle. Seules ses sous-classes concrètes implémentant toutes les méthodes abstraites peuvent l'être.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q36",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Moyen",
    "question": "Depuis Java 8, quel mot-clé permet de fournir une implémentation de méthode par défaut directement au sein d'une interface ?",
    "options": [
      "default",
      "concrete",
      "static",
      "standard"
    ],
    "choices": [
      "default",
      "concrete",
      "static",
      "standard"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé `default` permet d'ajouter des méthodes avec corps (implémentation par défaut) dans les interfaces sans briser les classes existantes qui les implémentent.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q37",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Facile",
    "question": "Quels sont les modificateurs implicites attribués à tout champ (variable) déclaré dans une interface Java ?",
    "options": [
      "public static final (constante de classe)",
      "private",
      "protected",
      "volatile transient"
    ],
    "choices": [
      "public static final (constante de classe)",
      "private",
      "protected",
      "volatile transient"
    ],
    "correctAnswer": 0,
    "explanation": "Tous les attributs d'une interface sont automatiquement et obligatoirement `public static final`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q38",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Moyen",
    "question": "Qu'est-ce qu'une interface fonctionnelle (Functional Interface) en Java ?",
    "options": [
      "Une interface qui contient exactement UNE seule méthode abstraite (Single Abstract Method - SAM)",
      "Une interface qui ne contient que des méthodes statiques",
      "Une interface sans aucune méthode",
      "Une interface qui remplace les fonctions C"
    ],
    "choices": [
      "Une interface qui contient exactement UNE seule méthode abstraite (Single Abstract Method - SAM)",
      "Une interface qui ne contient que des méthodes statiques",
      "Une interface sans aucune méthode",
      "Une interface qui remplace les fonctions C"
    ],
    "correctAnswer": 0,
    "explanation": "Une interface fonctionnelle (marquée par l'annotation optionnelle `@FunctionalInterface`) possède une unique méthode abstraite et peut être instanciée via une expression Lambda ou une référence de méthode.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q39",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Difficile",
    "question": "Comment résout-on le conflit si une classe implémente deux interfaces définissant chacune une méthode `default void print()` identique ?",
    "options": [
      "La classe fille doit obligatoirement redéfinir la méthode `print()` pour résoudre l'ambiguïté explicitement (ex: `InterfaceA.super.print();`)",
      "La JVM choisit aléatoirement l'une des deux",
      "La première interface déclarée dans `implements` gagne automatiquement",
      "Le compilateur supprime les deux méthodes"
    ],
    "choices": [
      "La classe fille doit obligatoirement redéfinir la méthode `print()` pour résoudre l'ambiguïté explicitement (ex: `InterfaceA.super.print();`)",
      "La JVM choisit aléatoirement l'une des deux",
      "La première interface déclarée dans `implements` gagne automatiquement",
      "Le compilateur supprime les deux méthodes"
    ],
    "correctAnswer": 0,
    "explanation": "En cas de conflit de méthodes `default` entre interfaces sœurs, le compilateur refuse de choisir et oblige la classe concrète à lever l'ambiguïté en surchargeant la méthode.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q40",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre une classe abstraite et une interface en Java moderne ?",
    "options": [
      "Une classe abstraite peut définir un état mutable (attributs d'instance non-statiques/non-finals) et des constructeurs, alors qu'une interface ne peut pas maintenir d'état d'instance",
      "Les classes abstraites n'acceptent pas de méthodes concrètes",
      "Une classe peut hériter de plusieurs classes abstraites",
      "Il n'y a plus aucune différence"
    ],
    "choices": [
      "Une classe abstraite peut définir un état mutable (attributs d'instance non-statiques/non-finals) et des constructeurs, alors qu'une interface ne peut pas maintenir d'état d'instance",
      "Les classes abstraites n'acceptent pas de méthodes concrètes",
      "Une classe peut hériter de plusieurs classes abstraites",
      "Il n'y a plus aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "Une classe abstraite peut maintenir un état propre avec constructeurs et champs d'instance modifiables. L'interface définit un contrat pur sans variables d'instance.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q41",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Facile",
    "question": "Quel mot-clé permet à une interface d'hériter d'une ou plusieurs autres interfaces ?",
    "options": [
      "extends",
      "implements",
      "inherits",
      "includes"
    ],
    "choices": [
      "extends",
      "implements",
      "inherits",
      "includes"
    ],
    "correctAnswer": 0,
    "explanation": "Une interface étend d'autres interfaces via le mot-clé `extends` (ex: `interface B extends A1, A2`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q42",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'une 'Marker Interface' (interface marqueur) en Java historique ?",
    "options": [
      "Une interface vide sans aucune méthode ni constante, utilisée pour marquer sémantiquement une classe auprès de la JVM (ex: `Serializable`, `Cloneable`)",
      "Une interface pour dessiner des formes géométriques",
      "Une interface réservée aux frameworks web",
      "Une interface dépréciée"
    ],
    "choices": [
      "Une interface vide sans aucune méthode ni constante, utilisée pour marquer sémantiquement une classe auprès de la JVM (ex: `Serializable`, `Cloneable`)",
      "Une interface pour dessiner des formes géométriques",
      "Une interface réservée aux frameworks web",
      "Une interface dépréciée"
    ],
    "correctAnswer": 0,
    "explanation": "Les interfaces de marquage (Marker Interfaces) comme `Serializable` n'ont aucun membre mais signalent au runtime une capacité via `instanceof`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q43",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Moyen",
    "question": "Une méthode abstraite peut-elle être déclarée `private` ou `final` en Java ?",
    "options": [
      "Non, car une méthode abstraite a pour but fondamental d'être redéfinie par une sous-classe (ce que private et final interdisent)",
      "Oui, si la classe est publique",
      "Oui, depuis Java 9",
      "Oui, pour les méthodes privées uniquement"
    ],
    "choices": [
      "Non, car une méthode abstraite a pour but fondamental d'être redéfinie par une sous-classe (ce que private et final interdisent)",
      "Oui, si la classe est publique",
      "Oui, depuis Java 9",
      "Oui, pour les méthodes privées uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "C'est une contradiction sémantique : `abstract` exige l'héritage et la redéfinition, alors que `private` et `final` l'interdisent.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q44",
    "part": 4,
    "topic": "Interfaces & Abstraction",
    "difficulty": "Difficile",
    "question": "Depuis Java 9, les interfaces peuvent-elles contenir des méthodes privées (`private void log()`) ?",
    "options": [
      "Oui, afin de factoriser du code partagé entre plusieurs méthodes `default` de l'interface sans exposer ce code à l'extérieur",
      "Non, c'est strictement interdit",
      "Uniquement des méthodes privées abstraites",
      "Uniquement sous Android"
    ],
    "choices": [
      "Oui, afin de factoriser du code partagé entre plusieurs méthodes `default` de l'interface sans exposer ce code à l'extérieur",
      "Non, c'est strictement interdit",
      "Uniquement des méthodes privées abstraites",
      "Uniquement sous Android"
    ],
    "correctAnswer": 0,
    "explanation": "Java 9 a introduit les méthodes d'interface privées (statiques ou d'instance) pour factoriser du code commun aux méthodes `default`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q45",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Facile",
    "question": "Quelle est la classe racine de toutes les erreurs et exceptions dans la hiérarchie Java ?",
    "options": [
      "java.lang.Throwable",
      "java.lang.Exception",
      "java.lang.Error",
      "java.lang.RuntimeException"
    ],
    "choices": [
      "java.lang.Throwable",
      "java.lang.Exception",
      "java.lang.Error",
      "java.lang.RuntimeException"
    ],
    "correctAnswer": 0,
    "explanation": "`Throwable` est la super-classe de tout objet pouvant être lancé avec `throw`. Elle se divise en deux branches : `Error` et `Exception`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q46",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre une 'Checked Exception' et une 'Unchecked Exception' en Java ?",
    "options": [
      "Les Checked Exceptions (héritant de Exception sans dériver de RuntimeException) doivent obligatoirement être traitées par try/catch ou déclarées avec `throws`, alors que les Unchecked Exceptions (dérivant de RuntimeException ou Error) n'ont pas cette obligation",
      "Les Unchecked Exceptions sont vérifiées à la compilation",
      "Les Checked Exceptions font crasher la JVM",
      "Il n'y a aucune différence pour le compilateur"
    ],
    "choices": [
      "Les Checked Exceptions (héritant de Exception sans dériver de RuntimeException) doivent obligatoirement être traitées par try/catch ou déclarées avec `throws`, alors que les Unchecked Exceptions (dérivant de RuntimeException ou Error) n'ont pas cette obligation",
      "Les Unchecked Exceptions sont vérifiées à la compilation",
      "Les Checked Exceptions font crasher la JVM",
      "Il n'y a aucune différence pour le compilateur"
    ],
    "correctAnswer": 0,
    "explanation": "Le compilateur force le développeur à gérer les Checked Exceptions (ex: `IOException`, `SQLException`). Les Unchecked Exceptions (`NullPointerException`, `IndexOutOfBoundsException`) signalent généralement des erreurs de logique de code.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q47",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Facile",
    "question": "Quand le bloc `finally` associé à un bloc `try ... catch` est-il exécuté ?",
    "options": [
      "Toujours, qu'une exception soit survenue ou non, et même si le bloc try ou catch contient une instruction `return`",
      "Uniquement si une exception est levée",
      "Uniquement s'il n'y a aucune exception",
      "Uniquement si le système manque de mémoire"
    ],
    "choices": [
      "Toujours, qu'une exception soit survenue ou non, et même si le bloc try ou catch contient une instruction `return`",
      "Uniquement si une exception est levée",
      "Uniquement s'il n'y a aucune exception",
      "Uniquement si le système manque de mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "Le bloc `finally` est garanti d'être exécuté dans quasi tous les cas (sauf appel explicite à `System.exit(0)` ou crash violent de la machine).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q48",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Moyen",
    "question": "Quelle construction introduite en Java 7 permet de fermer automatiquement toutes les ressources ouvertes (fichiers, sockets) sans bloc `finally` explicite ?",
    "options": [
      "Le Try-with-resources",
      "Le AutoClose catch",
      "Le resource cleaner",
      "Le safe try"
    ],
    "choices": [
      "Le Try-with-resources",
      "Le AutoClose catch",
      "Le resource cleaner",
      "Le safe try"
    ],
    "correctAnswer": 0,
    "explanation": "La syntaxe `try (FileReader fr = new FileReader(...)) { ... }` ferme automatiquement toute ressource implémentant l'interface `AutoCloseable`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q49",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Facile",
    "question": "Quelle exception de type RuntimeException est levée lorsqu'on tente d'appeler une méthode sur une référence valant `null` ?",
    "options": [
      "NullPointerException",
      "IllegalArgumentException",
      "ClassCastException",
      "IllegalStateException"
    ],
    "choices": [
      "NullPointerException",
      "IllegalArgumentException",
      "ClassCastException",
      "IllegalStateException"
    ],
    "correctAnswer": 0,
    "explanation": "Tenter d'accéder à un champ ou une méthode d'une référence nulle produit une `NullPointerException` (NPE).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q50",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Difficile",
    "question": "Dans quel ordre doivent être placés les blocs `catch` successifs lors de la capture d'exceptions hiérarchisées ?",
    "options": [
      "Du type le plus spécifique (sous-classe) au type le plus général (super-classe)",
      "Du type le plus général au plus spécifique",
      "Dans n'importe quel ordre",
      "Les classes mères d'abord"
    ],
    "choices": [
      "Du type le plus spécifique (sous-classe) au type le plus général (super-classe)",
      "Du type le plus général au plus spécifique",
      "Dans n'importe quel ordre",
      "Les classes mères d'abord"
    ],
    "correctAnswer": 0,
    "explanation": "Si on place `catch (Exception e)` avant `catch (IOException e)`, le second bloc devient du code mort inaccessible (unreachable code), provoquant une erreur de compilation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q51",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence de syntaxe entre les mots-clés `throw` et `throws` en Java ?",
    "options": [
      "`throw` est une instruction servant à déclencher concrètement une exception, tandis que `throws` est utilisé dans la signature d'une méthode pour déclarer les exceptions qu'elle est susceptible de propager",
      "`throws` sert à intercepter les exceptions",
      "`throw` ne peut lancer que des erreurs système",
      "Ce sont des synonymes stricts"
    ],
    "choices": [
      "`throw` est une instruction servant à déclencher concrètement une exception, tandis que `throws` est utilisé dans la signature d'une méthode pour déclarer les exceptions qu'elle est susceptible de propager",
      "`throws` sert à intercepter les exceptions",
      "`throw` ne peut lancer que des erreurs système",
      "Ce sont des synonymes stricts"
    ],
    "correctAnswer": 0,
    "explanation": "On écrit `throw new IllegalArgumentException();` dans le corps du code, et `void methode() throws IOException` dans la signature.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q52",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Difficile",
    "question": "Depuis Java 7, quelle syntaxe permet de capturer plusieurs exceptions non liées par héritage dans un seul bloc catch (Multi-catch) ?",
    "options": [
      "catch (IOException | SQLException ex)",
      "catch (IOException, SQLException ex)",
      "catch (IOException or SQLException ex)",
      "catch (IOException || SQLException ex)"
    ],
    "choices": [
      "catch (IOException | SQLException ex)",
      "catch (IOException, SQLException ex)",
      "catch (IOException or SQLException ex)",
      "catch (IOException || SQLException ex)"
    ],
    "correctAnswer": 0,
    "explanation": "Le multi-catch utilise la barre verticale unique `|` : `catch (IOException | SQLException e)`. La variable d'exception `e` est alors implicitement `final`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q53",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Facile",
    "question": "Quelle méthode de la classe `Throwable` permet d'afficher la trace complète de la pile d'exécution vers la sortie d'erreur lors d'une exception ?",
    "options": [
      "printStackTrace()",
      "printTrace()",
      "dumpStack()",
      "showError()"
    ],
    "choices": [
      "printStackTrace()",
      "printTrace()",
      "dumpStack()",
      "showError()"
    ],
    "correctAnswer": 0,
    "explanation": "`e.printStackTrace()` affiche l'historique des appels de méthodes ayant mené à l'exception.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q54",
    "part": 4,
    "topic": "Exceptions Java",
    "difficulty": "Moyen",
    "question": "Quel type d'erreur Java hérite directement de `Error` plutôt que de `Exception` ?",
    "options": [
      "OutOfMemoryError",
      "FileNotFoundException",
      "ArithmeticException",
      "NullPointerException"
    ],
    "choices": [
      "OutOfMemoryError",
      "FileNotFoundException",
      "ArithmeticException",
      "NullPointerException"
    ],
    "correctAnswer": 0,
    "explanation": "Les sous-classes de `Error` (comme `OutOfMemoryError`, `StackOverflowError`) représentent des conditions critiques anormales de la machine virtuelle dont une application ne peut généralement pas se rétablir.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q55",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Facile",
    "question": "Quelle interface racine du framework de collections Java (hormis les Maps) définit les opérations communes comme `add()`, `remove()`, `size()` et `iterator()` ?",
    "options": [
      "java.util.Collection",
      "java.util.List",
      "java.util.Iterable",
      "java.util.Set"
    ],
    "choices": [
      "java.util.Collection",
      "java.util.List",
      "java.util.Iterable",
      "java.util.Set"
    ],
    "correctAnswer": 0,
    "explanation": "`Collection<E>` est l'interface principale héritant de `Iterable<E>` et étendue par `List`, `Set` et `Queue`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q56",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Facile",
    "question": "Quelle collection Java garantit l'unicité de ses éléments (aucun doublon) sans ordre d'insertion particulier garanti ?",
    "options": [
      "HashSet",
      "ArrayList",
      "LinkedList",
      "Vector"
    ],
    "choices": [
      "HashSet",
      "ArrayList",
      "LinkedList",
      "Vector"
    ],
    "correctAnswer": 0,
    "explanation": "L'interface `Set` modélise un ensemble mathématique sans doublons, et son implémentation `HashSet` s'appuie sur une table de hachage.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q57",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence majeure de performances entre `ArrayList` et `LinkedList` en Java ?",
    "options": [
      "`ArrayList` offre un accès par index aléatoire en temps constant O(1) grâce à un tableau contigu sous-jacent, tandis que `LinkedList` nécessite un parcours séquentiel O(n) mais insère plus facilement en tête/queue",
      "`LinkedList` utilise moins de mémoire qu'ArrayList",
      "`ArrayList` est synchronisée par défaut",
      "`ArrayList` ne peut stocker que des types primitifs"
    ],
    "choices": [
      "`ArrayList` offre un accès par index aléatoire en temps constant O(1) grâce à un tableau contigu sous-jacent, tandis que `LinkedList` nécessite un parcours séquentiel O(n) mais insère plus facilement en tête/queue",
      "`LinkedList` utilise moins de mémoire qu'ArrayList",
      "`ArrayList` est synchronisée par défaut",
      "`ArrayList` ne peut stocker que des types primitifs"
    ],
    "correctAnswer": 0,
    "explanation": "`ArrayList` repose sur un tableau dynamique à accès direct O(1). `LinkedList` est une liste doublement chaînée avec surcoût mémoire de pointeurs pour chaque nœud.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q58",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Facile",
    "question": "Quelle interface Java stocke des paires clé-valeur (Key-Value) sans faire partie directement de la hiérarchie `Collection` ?",
    "options": [
      "java.util.Map",
      "java.util.Dictionary",
      "java.util.Pair",
      "java.util.Table"
    ],
    "choices": [
      "java.util.Map",
      "java.util.Dictionary",
      "java.util.Pair",
      "java.util.Table"
    ],
    "correctAnswer": 0,
    "explanation": "`Map<K,V>` gère des associations clés-valeurs avec unicité des clés (ex: `HashMap`, `TreeMap`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q59",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Moyen",
    "question": "Quelle collection de type Map maintient ses éléments triés selon l'ordre naturel des clés (ou via un Comparator) ?",
    "options": [
      "TreeMap",
      "HashMap",
      "LinkedHashMap",
      "ConcurrentHashMap"
    ],
    "choices": [
      "TreeMap",
      "HashMap",
      "LinkedHashMap",
      "ConcurrentHashMap"
    ],
    "correctAnswer": 0,
    "explanation": "`TreeMap` implémente `NavigableMap` / `SortedMap` et s'appuie sur un arbre Rouge-Noir équilibré avec des opérations en temps garanti O(log n).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q60",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Difficile",
    "question": "Quelle exception est levée si une collection est modifiée structurellement pendant qu'un `Iterator` la parcourt (en dehors de la méthode `iterator.remove()`) ?",
    "options": [
      "ConcurrentModificationException",
      "IllegalStateException",
      "IndexOutOfBoundsException",
      "NoSuchElementException"
    ],
    "choices": [
      "ConcurrentModificationException",
      "IllegalStateException",
      "IndexOutOfBoundsException",
      "NoSuchElementException"
    ],
    "correctAnswer": 0,
    "explanation": "Les itérateurs des collections standards sont 'fail-fast' : ils détectent les altérations concurrentes via un compteur de modifications `modCount` et lèvent une `ConcurrentModificationException`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q61",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Moyen",
    "question": "Quelle est la complexité temporelle moyenne de la méthode `get(key)` dans une `HashMap` convenablement dimensionnée ?",
    "options": [
      "O(1) temps constant",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "choices": [
      "O(1) temps constant",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0,
    "explanation": "Grâce au calcul de hash et à l'indexation de compartiment (bucket), la recherche dans une HashMap s'effectue en temps constant amorti O(1).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q62",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Difficile",
    "question": "Depuis Java 8, que fait `HashMap` lorsqu'un compartiment (bucket) subit un nombre excessif de collisions (seuil par défaut de 8 éléments avec table >= 64) ?",
    "options": [
      "Elle transforme la liste chaînée du compartiment en arbre binaire équilibré (Arbre Rouge-Noir) pour garantir une recherche en O(log n)",
      "Elle supprime les doublons",
      "Elle lève une exception OutOfMemoryError",
      "Elle double la taille de la mémoire virtuelle"
    ],
    "choices": [
      "Elle transforme la liste chaînée du compartiment en arbre binaire équilibré (Arbre Rouge-Noir) pour garantir une recherche en O(log n)",
      "Elle supprime les doublons",
      "Elle lève une exception OutOfMemoryError",
      "Elle double la taille de la mémoire virtuelle"
    ],
    "correctAnswer": 0,
    "explanation": "Cette optimisation (Treeification) protège les performances contre les attaques DoS par collisions de hash, passant la pire recherche de O(n) à O(log n).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q63",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Facile",
    "question": "Quelle méthode de la classe utilitaire `java.util.Collections` permet de trier une `List<T>` en place ?",
    "options": [
      "Collections.sort(liste)",
      "Collections.order(liste)",
      "liste.arrange()",
      "Arrays.sortList(liste)"
    ],
    "choices": [
      "Collections.sort(liste)",
      "Collections.order(liste)",
      "liste.arrange()",
      "Arrays.sortList(liste)"
    ],
    "correctAnswer": 0,
    "explanation": "`Collections.sort(list)` trie les éléments selon leur ordre naturel `Comparable` ou selon un `Comparator` optionnel.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q64",
    "part": 4,
    "topic": "Collections Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence entre l'interface `Comparable<T>` et l'interface `Comparator<T>` en Java ?",
    "options": [
      "`Comparable` définit l'ordre naturel intrinsèque au sein de la classe via `compareTo()`, tandis que `Comparator` définit une stratégie de comparaison externe via `compare()`",
      "`Comparable` ne compare que des entiers",
      "`Comparator` est déprécié",
      "Il n'y a aucune différence"
    ],
    "choices": [
      "`Comparable` définit l'ordre naturel intrinsèque au sein de la classe via `compareTo()`, tandis que `Comparator` définit une stratégie de comparaison externe via `compare()`",
      "`Comparable` ne compare que des entiers",
      "`Comparator` est déprécié",
      "Il n'y a aucune différence"
    ],
    "correctAnswer": 0,
    "explanation": "`Comparable` est implémenté par la classe elle-même (`a.compareTo(b)`). Un `Comparator` est un objet séparé instancié pour des tris personnalisés (`comparator.compare(a, b)`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q65",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Facile",
    "question": "Quel est le bénéfice principal de l'introduction de la généricité (Generics) en Java 5 ?",
    "options": [
      "Détecter les erreurs de type dès la compilation (Type Safety) et éliminer les transtypages (casts) manuels risqués",
      "Accélérer l'exécution du code par la JVM",
      "Réduire la taille des fichiers .class",
      "Permettre le multithreading automatique"
    ],
    "choices": [
      "Détecter les erreurs de type dès la compilation (Type Safety) et éliminer les transtypages (casts) manuels risqués",
      "Accélérer l'exécution du code par la JVM",
      "Réduire la taille des fichiers .class",
      "Permettre le multithreading automatique"
    ],
    "correctAnswer": 0,
    "explanation": "Les génériques permettent d'écrire du code paramétré par type (`List<String>` au lieu de `List<Object>`), garantissant la cohérence des types au moment de la compilation.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q66",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Moyen",
    "question": "Qu'appelle-t-on l'Effacement de Type (Type Erasure) dans l'implémentation des génériques en Java ?",
    "options": [
      "Le compilateur supprime toutes les informations de type générique lors de la génération du bytecode pour assurer la rétrocompatibilité avec les anciennes versions de la JVM",
      "La destruction des variables à la fermeture du programme",
      "Une faille de sécurité dans la JVM",
      "La conversion automatique d'un int en double"
    ],
    "choices": [
      "Le compilateur supprime toutes les informations de type générique lors de la génération du bytecode pour assurer la rétrocompatibilité avec les anciennes versions de la JVM",
      "La destruction des variables à la fermeture du programme",
      "Une faille de sécurité dans la JVM",
      "La conversion automatique d'un int en double"
    ],
    "correctAnswer": 0,
    "explanation": "À l'exécution, `List<String>` et `List<Integer>` deviennent toutes deux simplement `List` (type brut avec casts insérés par le compilateur). C'est le principe du Type Erasure.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q67",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Difficile",
    "question": "Pourquoi est-il impossible d'écrire `List<int> liste = new ArrayList<>();` en Java ?",
    "options": [
      "Parce que les paramètres de type générique ne peuvent être que des types objets (références) et non des types primitifs, nécessitant l'utilisation des classes wrappers (`List<Integer>`)",
      "Parce que le type int n'est pas thread-safe",
      "Parce qu'ArrayList ne stocke que des chaînes de caractères",
      "C'est parfaitement valide depuis Java 17"
    ],
    "choices": [
      "Parce que les paramètres de type générique ne peuvent être que des types objets (références) et non des types primitifs, nécessitant l'utilisation des classes wrappers (`List<Integer>`)",
      "Parce que le type int n'est pas thread-safe",
      "Parce qu'ArrayList ne stocke que des chaînes de caractères",
      "C'est parfaitement valide depuis Java 17"
    ],
    "correctAnswer": 0,
    "explanation": "En raison du Type Erasure (remplacement par `Object`), les types primitifs ne peuvent pas être utilisés directement comme arguments de type générique. Il faut utiliser les classes enveloppes (wrappers : `Integer`, `Double`, `Boolean`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q68",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Moyen",
    "question": "Que représente le caractère générique non borné `List<?>` en Java ?",
    "options": [
      "Une liste d'éléments d'un type inconnu (Wildcard non borné)",
      "Une liste de types primitifs",
      "Une liste de taille illimitée",
      "Une liste pouvant accepter n'importe quel objet avec `add()`"
    ],
    "choices": [
      "Une liste d'éléments d'un type inconnu (Wildcard non borné)",
      "Une liste de types primitifs",
      "Une liste de taille illimitée",
      "Une liste pouvant accepter n'importe quel objet avec `add()`"
    ],
    "correctAnswer": 0,
    "explanation": "`<?>` est un wildcard. Attention : comme le type exact est inconnu, on ne peut rien ajouter dans une `List<?>` (sauf `null`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q69",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Difficile",
    "question": "Que signifie la borne supérieure `List<? extends Number>` en Java ?",
    "options": [
      "La liste peut être une liste d'objets de type `Number` ou de n'importe quelle sous-classe de `Number` (ex: `Integer`, `Double`), idéale pour la lecture (Covariance)",
      "La liste accepte l'ajout de n'importe quel nombre",
      "La liste ne contient que des nombres entiers",
      "C'est une syntaxe invalide"
    ],
    "choices": [
      "La liste peut être une liste d'objets de type `Number` ou de n'importe quelle sous-classe de `Number` (ex: `Integer`, `Double`), idéale pour la lecture (Covariance)",
      "La liste accepte l'ajout de n'importe quel nombre",
      "La liste ne contient que des nombres entiers",
      "C'est une syntaxe invalide"
    ],
    "correctAnswer": 0,
    "explanation": "Principe PECS (Producer Extends, Consumer Super) : `? extends T` permet de lire des éléments de type T en toute sécurité, mais interdit d'y écrire de nouveaux éléments.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q70",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Difficile",
    "question": "Dans le principe mnémonique de Joshua Bloch 'PECS', que signifie l'acronyme ?",
    "options": [
      "Producer Extends, Consumer Super",
      "Parameter Encapsulation Class Safety",
      "Public Entities Common Scope",
      "Pointer Evaluation Call Stack"
    ],
    "choices": [
      "Producer Extends, Consumer Super",
      "Parameter Encapsulation Class Safety",
      "Public Entities Common Scope",
      "Pointer Evaluation Call Stack"
    ],
    "correctAnswer": 0,
    "explanation": "PECS : si votre structure paramétrée 'produit' des données (lecture), utilisez `? extends T`. Si elle 'consomme' des données (écriture avec `add()`), utilisez `? super T`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q71",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Moyen",
    "question": "Comment appelle-t-on le mécanisme par lequel la JVM convertit automatiquement un type primitif (ex: `int`) vers sa classe objet enveloppe (ex: `Integer`) et inversement ?",
    "options": [
      "Autoboxing et Unboxing",
      "Casting dynamique",
      "Marshaling",
      "Polymorphisme primitif"
    ],
    "choices": [
      "Autoboxing et Unboxing",
      "Casting dynamique",
      "Marshaling",
      "Polymorphisme primitif"
    ],
    "correctAnswer": 0,
    "explanation": "L'autoboxing convertit automatiquement un primitif vers son wrapper (`int` -> `Integer`), et l'unboxing effectue l'opération inverse (`Integer` -> `int`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q72",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Difficile",
    "question": "Pourquoi l'instruction `T[] tab = new T[10];` est-elle interdite à l'intérieur d'une classe générique `MaClasse<T>` ?",
    "options": [
      "Parce qu'en raison de l'effacement de type (Type Erasure), la JVM ne connaît pas le type réel de `T` à l'exécution et les tableaux Java doivent impérativement connaître leur type de composant réel",
      "Parce que les tableaux ne supportent pas plus de 5 éléments",
      "Parce que T est toujours un entier",
      "Parce qu'il faut utiliser malloc"
    ],
    "choices": [
      "Parce qu'en raison de l'effacement de type (Type Erasure), la JVM ne connaît pas le type réel de `T` à l'exécution et les tableaux Java doivent impérativement connaître leur type de composant réel",
      "Parce que les tableaux ne supportent pas plus de 5 éléments",
      "Parce que T est toujours un entier",
      "Parce qu'il faut utiliser malloc"
    ],
    "correctAnswer": 0,
    "explanation": "Les tableaux en Java sont réifiés (ils vérifient les types à l'exécution), alors que les génériques sont effacés à la compilation. Instancier directement un tableau de type générique est donc interdit.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q73",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Facile",
    "question": "Depuis Java 7, quelle syntaxe d'inférence de type (opérateur diamant `<>`) allège l'instanciation des collections ?",
    "options": [
      "Map<String, List<Integer>> map = new HashMap<>();",
      "Map<String, List<Integer>> map = new HashMap<auto>();",
      "Map<String, List<Integer>> map = new HashMap;",
      "Map map = new HashMap<>();"
    ],
    "choices": [
      "Map<String, List<Integer>> map = new HashMap<>();",
      "Map<String, List<Integer>> map = new HashMap<auto>();",
      "Map<String, List<Integer>> map = new HashMap;",
      "Map map = new HashMap<>();"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur diamant `<>` permet au compilateur de déduire les arguments de type à partir de la déclaration de gauche.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q74",
    "part": 4,
    "topic": "Généricité Java",
    "difficulty": "Difficile",
    "question": "Pourquoi `List<String>` n'est-elle PAS un sous-type de `List<Object>` en Java (invariance des génériques) ?",
    "options": [
      "Pour préserver la sécurité de type : si c'était autorisé, on pourrait insérer un `Integer` dans la liste via la référence `List<Object>`, ce qui briserait la `List<String>`",
      "C'est un bug historique",
      "Parce que String n'hérite pas de Object",
      "Parce qu'Object est une classe abstraite"
    ],
    "choices": [
      "Pour préserver la sécurité de type : si c'était autorisé, on pourrait insérer un `Integer` dans la liste via la référence `List<Object>`, ce qui briserait la `List<String>`",
      "C'est un bug historique",
      "Parce que String n'hérite pas de Object",
      "Parce qu'Object est une classe abstraite"
    ],
    "correctAnswer": 0,
    "explanation": "Les génériques sont invariants en Java. Si `List<String>` était sous-type de `List<Object>`, on pourrait faire `List<Object> lo = ls; lo.add(123); ls.get(0);` provoquant une corruption de type fatale.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q75",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Facile",
    "question": "Quelle est la syntaxe d'une expression Lambda simple prenant un paramètre `x` et renvoyant son carré en Java 8 ?",
    "options": [
      "x -> x * x",
      "lambda(x) { x * x }",
      "x => x * x",
      "(x) :: (x * x)"
    ],
    "choices": [
      "x -> x * x",
      "lambda(x) { x * x }",
      "x => x * x",
      "(x) :: (x * x)"
    ],
    "correctAnswer": 0,
    "explanation": "En Java, la flèche d'une expression Lambda s'écrit avec un tiret et un chevron : `param -> expression`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q76",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre une opération intermédiaire (Intermediate Operation) et une opération terminale (Terminal Operation) sur un `Stream` en Java ?",
    "options": [
      "Les opérations intermédiaires (ex: filter, map) sont paresseuses (lazy) et renvoient un nouveau Stream sans exécuter de calcul immédiat, tandis que l'opération terminale (ex: collect, forEach) déclenche le traitement et consomme le flux",
      "Les opérations intermédiaires modifient la collection d'origine",
      "Les opérations terminales ne peuvent pas renvoyer de résultat",
      "Il n'y a pas de différence d'évaluation"
    ],
    "choices": [
      "Les opérations intermédiaires (ex: filter, map) sont paresseuses (lazy) et renvoient un nouveau Stream sans exécuter de calcul immédiat, tandis que l'opération terminale (ex: collect, forEach) déclenche le traitement et consomme le flux",
      "Les opérations intermédiaires modifient la collection d'origine",
      "Les opérations terminales ne peuvent pas renvoyer de résultat",
      "Il n'y a pas de différence d'évaluation"
    ],
    "correctAnswer": 0,
    "explanation": "Les streams sont évalués de façon paresseuse (lazy). Rien ne s'exécute tant qu'une opération terminale n'est pas appelée sur la chaîne de traitement.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q77",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Facile",
    "question": "Quelle opération de Stream permet de transformer chaque élément d'un flux en appliquant une fonction de conversion ?",
    "options": [
      "map()",
      "filter()",
      "distinct()",
      "peek()"
    ],
    "choices": [
      "map()",
      "filter()",
      "distinct()",
      "peek()"
    ],
    "correctAnswer": 0,
    "explanation": "`map(Function<T, R>)` applique une transformation bijective sur chaque élément du flux.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q78",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Facile",
    "question": "Quelle opération de Stream filtre les éléments selon un prédicat booléen (conserve uniquement les éléments pour lesquels le prédicat vaut `true`) ?",
    "options": [
      "filter()",
      "select()",
      "where()",
      "match()"
    ],
    "choices": [
      "filter()",
      "select()",
      "where()",
      "match()"
    ],
    "correctAnswer": 0,
    "explanation": "`filter(Predicate<T>)` élimine les éléments ne satisfaisant pas la condition.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q79",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Moyen",
    "question": "Quelle interface fonctionnelle standard de `java.util.function` prend un argument de type T et renvoie un résultat booléen ?",
    "options": [
      "Predicate<T>",
      "Function<T, R>",
      "Consumer<T>",
      "Supplier<T>"
    ],
    "choices": [
      "Predicate<T>",
      "Function<T, R>",
      "Consumer<T>",
      "Supplier<T>"
    ],
    "correctAnswer": 0,
    "explanation": "`Predicate<T>` possède la méthode abstraite `boolean test(T t)`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q80",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Moyen",
    "question": "Quelle interface fonctionnelle standard prend un argument mais ne renvoie aucune valeur (méthode `void accept(T t)`) ?",
    "options": [
      "Consumer<T>",
      "Supplier<T>",
      "Function<T, R>",
      "Runnable"
    ],
    "choices": [
      "Consumer<T>",
      "Supplier<T>",
      "Function<T, R>",
      "Runnable"
    ],
    "correctAnswer": 0,
    "explanation": "`Consumer<T>` consomme une valeur pour exécuter un effet de bord sans rien retourner (ex: dans `forEach(System.out::println)`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q81",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Difficile",
    "question": "Que fait l'opération `flatMap()` sur un Stream ?",
    "options": [
      "Elle transforme chaque élément en un sous-stream puis 'aplatit' l'ensemble de ces sous-streams en un unique flux de données plat",
      "Elle supprime les doublons",
      "Elle filtre les nombres négatifs",
      "Elle trie le flux par ordre décroissant"
    ],
    "choices": [
      "Elle transforme chaque élément en un sous-stream puis 'aplatit' l'ensemble de ces sous-streams en un unique flux de données plat",
      "Elle supprime les doublons",
      "Elle filtre les nombres négatifs",
      "Elle trie le flux par ordre décroissant"
    ],
    "correctAnswer": 0,
    "explanation": "`flatMap` est utilisée lorsqu'une transformation produit des collections ou flux imbriqués (`Stream<List<T>>` -> `Stream<T>`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q82",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Facile",
    "question": "Quelle classe conteneur introduite en Java 8 permet de représenter une valeur présente ou absente pour éviter les retours `null` risqués ?",
    "options": [
      "java.util.Optional<T>",
      "java.util.Nullable<T>",
      "java.util.Maybe<T>",
      "java.util.Option<T>"
    ],
    "choices": [
      "java.util.Optional<T>",
      "java.util.Nullable<T>",
      "java.util.Maybe<T>",
      "java.util.Option<T>"
    ],
    "correctAnswer": 0,
    "explanation": "`Optional<T>` est un objet wrapper qui encapsule une référence éventuellement nulle et force l'appelant à gérer l'éventuelle absence de valeur (`isPresent()`, `orElse()`).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q83",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Moyen",
    "question": "Quelle méthode permet de paralléliser automatiquement le traitement d'une collection sur plusieurs cœurs de processeur via le pool ForkJoin en Java ?",
    "options": [
      "liste.parallelStream()",
      "liste.concurrentStream()",
      "liste.asyncStream()",
      "liste.threadStream()"
    ],
    "choices": [
      "liste.parallelStream()",
      "liste.concurrentStream()",
      "liste.asyncStream()",
      "liste.threadStream()"
    ],
    "correctAnswer": 0,
    "explanation": "`parallelStream()` découpe le traitement en sous-tâches exécutées en parallèle sur le pool commun `ForkJoinPool.commonPool()`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q84",
    "part": 4,
    "topic": "Streams & Lambdas Java",
    "difficulty": "Moyen",
    "question": "Quelle est la syntaxe d'une référence de méthode statique (Method Reference) pour la méthode `valueOf` de la classe `String` ?",
    "options": [
      "String::valueOf",
      "String.valueOf",
      "String->valueOf",
      "String::new"
    ],
    "choices": [
      "String::valueOf",
      "String.valueOf",
      "String->valueOf",
      "String::new"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur de référence de méthode utilise quatre points `::` : `Classe::nomMethode`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q85",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Facile",
    "question": "Quelles sont les deux façons canoniques de créer un nouveau thread d'exécution en Java ?",
    "options": [
      "Hériter de la classe `java.lang.Thread` ou implémenter l'interface `java.lang.Runnable`",
      "Implémenter `Serializable` ou `Cloneable`",
      "Créer une classe abstraite",
      "Utiliser le mot-clé `fork`"
    ],
    "choices": [
      "Hériter de la classe `java.lang.Thread` ou implémenter l'interface `java.lang.Runnable`",
      "Implémenter `Serializable` ou `Cloneable`",
      "Créer une classe abstraite",
      "Utiliser le mot-clé `fork`"
    ],
    "correctAnswer": 0,
    "explanation": "Les deux voies classiques sont : étendre `Thread` (et redéfinir `run()`), ou préférablement implémenter `Runnable` (ou `Callable`) et le passer au constructeur d'un `Thread` ou à un `ExecutorService`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q86",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Facile",
    "question": "Quelle méthode doit-on appeler pour démarrer effectivement un thread dans un nouveau flux d'exécution asynchrone géré par l'OS ?",
    "options": [
      "start()",
      "run()",
      "execute()",
      "launch()"
    ],
    "choices": [
      "start()",
      "run()",
      "execute()",
      "launch()"
    ],
    "correctAnswer": 0,
    "explanation": "Appeler `thread.start()` demande à la JVM de créer le thread natif système qui invoquera ensuite `run()`. Appeler directement `thread.run()` exécuterait simplement le code dans le thread courant sans créer de nouveau fil !",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q87",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Moyen",
    "question": "À quoi sert le mot-clé `synchronized` en Java ?",
    "options": [
      "À acquérir le verrou intrinsèque (Monitor) d'un objet pour garantir qu'un seul thread à la fois peut exécuter le bloc critique de code protégé",
      "À forcer les threads à s'exécuter à la même vitesse d'horloge",
      "À sauvegarder les données sur disque",
      "À convertir le code en assembleur"
    ],
    "choices": [
      "À acquérir le verrou intrinsèque (Monitor) d'un objet pour garantir qu'un seul thread à la fois peut exécuter le bloc critique de code protégé",
      "À forcer les threads à s'exécuter à la même vitesse d'horloge",
      "À sauvegarder les données sur disque",
      "À convertir le code en assembleur"
    ],
    "correctAnswer": 0,
    "explanation": "`synchronized` assure l'exclusion mutuelle : un seul thread détient le moniteur à un instant donné, évitant les accès concurrents corrompus (Race Conditions).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q88",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Difficile",
    "question": "Que garantit le mot-clé `volatile` appliqué à une variable en Java ?",
    "options": [
      "La visibilité mémoire immédiate : toute écriture dans la variable est instantanément propagée en mémoire principale et lue sans cache CPU local par les autres threads (relation Happens-Before)",
      "L'atomicité de l'opération d'incrémentation `i++`",
      "Le verrouillage exclusif de la classe",
      "L'immuabilité de la variable"
    ],
    "choices": [
      "La visibilité mémoire immédiate : toute écriture dans la variable est instantanément propagée en mémoire principale et lue sans cache CPU local par les autres threads (relation Happens-Before)",
      "L'atomicité de l'opération d'incrémentation `i++`",
      "Le verrouillage exclusif de la classe",
      "L'immuabilité de la variable"
    ],
    "correctAnswer": 0,
    "explanation": "`volatile` garantit la visibilité entre threads (pas de mise en cache locale périmée dans les registres processeurs). En revanche, il ne garantit PAS l'atomicité des opérations composées comme `count++`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q89",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre `Runnable` et `Callable<V>` du package `java.util.concurrent` ?",
    "options": [
      "`Callable<V>` peut renvoyer un résultat de type V et déclarer des exceptions vérifiées (Checked Exceptions), alors que `Runnable.run()` ne renvoie rien (void) et ne peut pas lever d'exception vérifiée",
      "`Callable` ne fonctionne que sur un seul thread",
      "`Runnable` est obsolète",
      "Il n'y a aucune différence technique"
    ],
    "choices": [
      "`Callable<V>` peut renvoyer un résultat de type V et déclarer des exceptions vérifiées (Checked Exceptions), alors que `Runnable.run()` ne renvoie rien (void) et ne peut pas lever d'exception vérifiée",
      "`Callable` ne fonctionne que sur un seul thread",
      "`Runnable` est obsolète",
      "Il n'y a aucune différence technique"
    ],
    "correctAnswer": 0,
    "explanation": "`Callable` fournit la méthode `V call() throws Exception`, ce qui en fait l'outil privilégié avec les `ExecutorService` et `Future<V>`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q90",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Difficile",
    "question": "Quelle classe atomique de `java.util.concurrent.atomic` permet d'incrémenter un entier de façon thread-safe sans aucun verrou explicite (Lock-free via l'instruction CPU CAS - Compare-And-Swap) ?",
    "options": [
      "AtomicInteger",
      "VolatileInteger",
      "SynchronizedInteger",
      "ConcurrentInteger"
    ],
    "choices": [
      "AtomicInteger",
      "VolatileInteger",
      "SynchronizedInteger",
      "ConcurrentInteger"
    ],
    "correctAnswer": 0,
    "explanation": "`AtomicInteger` utilise l'instruction matérielle atomique `Compare-And-Swap` (CAS) pour des performances d'incrémentation (`incrementAndGet()`) sans verrouillage lourd.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q91",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Facile",
    "question": "Qu'est-ce qu'un thread Démon (Daemon Thread) en Java (ex: `thread.setDaemon(true)`) ?",
    "options": [
      "Un thread de service en arrière-plan qui n'empêche pas la JVM de s'arrêter lorsque tous les threads utilisateurs normaux ont terminé leur exécution",
      "Un thread malveillant",
      "Un thread qui a la priorité maximale",
      "Un thread qui ne peut jamais être suspendu"
    ],
    "choices": [
      "Un thread de service en arrière-plan qui n'empêche pas la JVM de s'arrêter lorsque tous les threads utilisateurs normaux ont terminé leur exécution",
      "Un thread malveillant",
      "Un thread qui a la priorité maximale",
      "Un thread qui ne peut jamais être suspendu"
    ],
    "correctAnswer": 0,
    "explanation": "Les threads démons (comme le Garbage Collector de la JVM) tournent en tâche de fond. Dès qu'il ne reste plus que des threads démons actifs, la JVM quitte automatiquement.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q92",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Moyen",
    "question": "Quelle méthode de la classe `Thread` permet à un thread appelant d'attendre la fin de l'exécution d'un autre thread avant de poursuivre son propre travail ?",
    "options": [
      "join()",
      "wait()",
      "sleep()",
      "yield()"
    ],
    "choices": [
      "join()",
      "wait()",
      "sleep()",
      "yield()"
    ],
    "correctAnswer": 0,
    "explanation": "`t.join()` bloque le thread courant jusqu'à ce que le thread `t` termine son exécution.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q93",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Difficile",
    "question": "Dans quel état se trouve un objet sur lequel les méthodes `wait()`, `notify()` et `notifyAll()` peuvent être appelées légalement sans lever une `IllegalMonitorStateException` ?",
    "options": [
      "Le thread appelant doit obligatoirement être propriétaire du verrou (Monitor) de cet objet à l'intérieur d'un bloc `synchronized(obj)`",
      "L'objet doit être statique",
      "Le thread doit être en état WAITING",
      "L'objet doit être déclaré volatile"
    ],
    "choices": [
      "Le thread appelant doit obligatoirement être propriétaire du verrou (Monitor) de cet objet à l'intérieur d'un bloc `synchronized(obj)`",
      "L'objet doit être statique",
      "Le thread doit être en état WAITING",
      "L'objet doit être déclaré volatile"
    ],
    "correctAnswer": 0,
    "explanation": "Appeler `wait()` ou `notify()` hors d'un contexte de synchronisation sur l'objet ciblé lève immédiatement une `IllegalMonitorStateException`.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q94",
    "part": 4,
    "topic": "Multithreading Java",
    "difficulty": "Moyen",
    "question": "Quel framework de haut niveau introduit dans `java.util.concurrent` remplace la gestion manuelle de threads par des pools de threads gérés ?",
    "options": [
      "ExecutorService (via Executors)",
      "ThreadFactory manual",
      "ProcessBuilder",
      "ThreadGroup"
    ],
    "choices": [
      "ExecutorService (via Executors)",
      "ThreadFactory manual",
      "ProcessBuilder",
      "ThreadGroup"
    ],
    "correctAnswer": 0,
    "explanation": "`ExecutorService` (ex: `Executors.newFixedThreadPool(4)`) gère le cycle de vie, la réutilisation et la planification efficace des threads sous forme de pool.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q95",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Facile",
    "question": "Que signifie le sigle JVM ?",
    "options": [
      "Java Virtual Machine",
      "Java Variable Manager",
      "Java Verified Memory",
      "Java Version Monitor"
    ],
    "choices": [
      "Java Virtual Machine",
      "Java Variable Manager",
      "Java Verified Memory",
      "Java Version Monitor"
    ],
    "correctAnswer": 0,
    "explanation": "La JVM (Java Virtual Machine) est l'environnement d'exécution abstrait qui charge, vérifie et exécute le bytecode Java (.class).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q96",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Facile",
    "question": "Quel est le rôle du ramasse-miettes (Garbage Collector - GC) dans la JVM ?",
    "options": [
      "Identifier et libérer automatiquement la mémoire occupée sur le tas (Heap) par les objets qui ne sont plus accessibles depuis aucune racine (GC Roots)",
      "Supprimer les fichiers temporaires sur le disque dur",
      "Nettoyer le code source",
      "Fermer les fenêtres du navigateur"
    ],
    "choices": [
      "Identifier et libérer automatiquement la mémoire occupée sur le tas (Heap) par les objets qui ne sont plus accessibles depuis aucune racine (GC Roots)",
      "Supprimer les fichiers temporaires sur le disque dur",
      "Nettoyer le code source",
      "Fermer les fenêtres du navigateur"
    ],
    "correctAnswer": 0,
    "explanation": "Le GC libère automatiquement la mémoire des objets inaccessibles, déchargeant le développeur de la gestion manuelle (`free` en C).",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q97",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Moyen",
    "question": "Quelle est la différence fondamentale entre la mémoire pile (Stack) et le tas (Heap) dans la JVM ?",
    "options": [
      "La pile (Stack) est allouée par thread pour stocker les frames de méthodes et variables locales primitives/références, tandis que le tas (Heap) est partagé par tous les threads et stocke l'ensemble des objets instanciés",
      "Le tas est plus rapide que la pile",
      "La pile stocke les objets et le tas les primitives",
      "Le tas n'existe pas en 64 bits"
    ],
    "choices": [
      "La pile (Stack) est allouée par thread pour stocker les frames de méthodes et variables locales primitives/références, tandis que le tas (Heap) est partagé par tous les threads et stocke l'ensemble des objets instanciés",
      "Le tas est plus rapide que la pile",
      "La pile stocke les objets et le tas les primitives",
      "Le tas n'existe pas en 64 bits"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque thread possède sa propre Stack (très rapide, durée de vie liée aux blocs d'exécution). Le Heap est l'espace global unique où résident tous les objets Java.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q98",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Difficile",
    "question": "Sur quelle hypothèse repose la division générationnelle de la mémoire du tas (Young Generation vs Old / Tenured Generation) ?",
    "options": [
      "L'hypothèse générationnelle faible (Weak Generational Hypothesis) : la grande majorité des objets ont une durée de vie extrêmement courte peu après leur allocation",
      "Tous les objets survivent au moins 10 minutes",
      "Les chaînes de caractères vivent plus longtemps que les entiers",
      "Les classes statiques consomment plus de mémoire"
    ],
    "choices": [
      "L'hypothèse générationnelle faible (Weak Generational Hypothesis) : la grande majorité des objets ont une durée de vie extrêmement courte peu après leur allocation",
      "Tous les objets survivent au moins 10 minutes",
      "Les chaînes de caractères vivent plus longtemps que les entiers",
      "Les classes statiques consomment plus de mémoire"
    ],
    "correctAnswer": 0,
    "explanation": "La majorité des objets meurent très jeunes. En les isolant dans la jeune génération (Eden, Survivor), les collectes mineures (Minor GC) sont extrêmement fréquentes et ultra-rapides.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q99",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Difficile",
    "question": "Qu'est-ce qu'une pause 'Stop-The-World' (STW) provoquée par le Garbage Collector ?",
    "options": [
      "Une phase durant laquelle la JVM suspend temporairement tous les threads applicatifs pour déplacer des objets et mettre à jour les références en mémoire en toute sécurité",
      "Un arrêt définitif du serveur",
      "Une panne matérielle",
      "Une coupure de connexion réseau"
    ],
    "choices": [
      "Une phase durant laquelle la JVM suspend temporairement tous les threads applicatifs pour déplacer des objets et mettre à jour les références en mémoire en toute sécurité",
      "Un arrêt définitif du serveur",
      "Une panne matérielle",
      "Une coupure de connexion réseau"
    ],
    "correctAnswer": 0,
    "explanation": "Durant un Stop-The-World, l'application est figée pour que le GC puisse compacter ou tracer les références sans interférences concurrentes.",
    "source": "Conforme au programme"
  },
  {
    "id": "p4-q100",
    "part": 4,
    "topic": "JVM & Garbage Collection",
    "difficulty": "Moyen",
    "question": "Quel composant de la JVM compile à la volée le bytecode fréquemment exécuté ('hotspots') en code machine natif haute performance ?",
    "options": [
      "Le compilateur JIT (Just-In-Time)",
      "L'interpréteur de commandes",
      "Le ClassLoader",
      "Le Bytecode Verifier"
    ],
    "choices": [
      "Le compilateur JIT (Just-In-Time)",
      "L'interpréteur de commandes",
      "Le ClassLoader",
      "Le Bytecode Verifier"
    ],
    "correctAnswer": 0,
    "explanation": "Le compilateur JIT (Just-In-Time) analyse le code chaud au runtime et le compile en instructions CPU natives pour atteindre des performances proches du C++.",
    "source": "Conforme au programme"
  }
];
