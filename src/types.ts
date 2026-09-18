export type Difficulty = 'Facile' | 'Moyen' | 'Difficile';
export type QuestionSource = 'Ancien concours' | 'Conforme au programme' | 'Ancien examen' | 'Générée' | 'Examen Précédent' | 'Préparation';

export interface PartInfo {
  number: number;
  title: string;
  shortTitle: string;
  fullName: string;
  description: string;
  questionCount: number;
}

export const PART_DEFINITIONS: Record<number, PartInfo> = {
  1: {
    number: 1,
    title: 'Réseaux informatiques',
    shortTitle: 'Réseaux',
    fullName: 'Partie 1 — Réseaux informatiques',
    description: 'Modèle OSI, TCP/IP, IPv4 / IPv6, adressage, subnetting, routage, switching, ARP, DHCP, DNS, HTTP/HTTPS, TCP/UDP, ports, VLAN, NAT, Wi-Fi, sécurité réseau.',
    questionCount: 100,
  },
  2: {
    number: 2,
    title: 'Bases de données, SQL et Oracle',
    shortTitle: 'Bases de données & SQL',
    fullName: 'Partie 2 — Bases de données, SQL et Oracle',
    description: 'Modèle relationnel, clés, contraintes, normalisation 1NF-3NF/FNBC, SQL (SELECT, JOIN, GROUP BY, DDL, DML), transactions ACID, PL/SQL Oracle, triggers, séquences.',
    questionCount: 100,
  },
  3: {
    number: 3,
    title: 'Programmation C',
    shortTitle: 'Programmation C',
    fullName: 'Partie 3 — Programmation C',
    description: 'Syntaxe C, types, pointeurs, tableaux, chaînes, structures, unions, enum, allocation dynamique (malloc/free), préprocesseur, fichiers, récursivité, code reading.',
    questionCount: 100,
  },
  4: {
    number: 4,
    title: 'Programmation Java et POO',
    shortTitle: 'Java & POO',
    fullName: 'Partie 4 — Programmation Java et POO',
    description: 'Classes, objets, encapsulation, héritage, polymorphisme, interfaces, classes abstraites, collections (ArrayList, HashMap), exceptions, JVM, Garbage Collector, threads.',
    questionCount: 100,
  },
  5: {
    number: 5,
    title: 'Algorithmique et structures de données',
    shortTitle: 'Algorithmique & Données',
    fullName: 'Partie 5 — Algorithmique et structures de données',
    description: 'Complexité Big-O, piles, files, listes chaînées, arbres, BST, graphes, tables de hachage, tris (rapide, fusion, insertion), BFS/DFS, Dijkstra, programmation dynamique.',
    questionCount: 100,
  },
  6: {
    number: 6,
    title: 'Systèmes d’exploitation et Linux/Unix',
    shortTitle: 'Systèmes d’Exploitation & Linux',
    fullName: 'Partie 6 — Systèmes d’exploitation et Linux/Unix',
    description: 'Processus, threads, ordonnancement CPU, mémoire virtuelle, pagination, deadlocks (Coffman), sémaphores, mutex, commandes Linux (grep, chmod, ps, find), shell Bash.',
    questionCount: 100,
  },
  7: {
    number: 7,
    title: 'Architecture et organisation des ordinateurs',
    shortTitle: 'Architecture des Ordinateurs',
    fullName: 'Partie 7 — Architecture et organisation des ordinateurs',
    description: 'CPU, ALU, unité de contrôle, registres, mémoire cache, bus, pipeline RISC 5 étages, aléas, Von Neumann vs Harvard, logique numérique combinatoire/séquentielle, binaire.',
    questionCount: 100,
  },
  8: {
    number: 8,
    title: 'Génie logiciel et systèmes d’information',
    shortTitle: 'Génie Logiciel & SI',
    fullName: 'Partie 8 — Génie logiciel et systèmes d’information',
    description: 'Cycle de vie (cascade, V), méthodes Agiles (Scrum, Kanban), diagrammes UML (classes, cas d’utilisation, séquence), tests logiciels, Git, design patterns GoF, Merise.',
    questionCount: 100,
  },
  9: {
    number: 9,
    title: 'Web, cybersécurité et systèmes distribués',
    shortTitle: 'Web, Sécurité & Distribués',
    fullName: 'Partie 9 — Web, cybersécurité et systèmes distribués',
    description: 'Technologies Web (HTML5, CSS3, JS, HTTP/S, REST), cybersécurité (authentification, hachage, chiffrement AES/RSA, OWASP XSS/CSRF/SQLi), systèmes distribués (CAP, microservices).',
    questionCount: 100,
  },
  10: {
    number: 10,
    title: 'Informatique générale et technologies informatiques',
    shortTitle: 'Informatique Générale',
    fullName: 'Partie 10 — Informatique générale et technologies informatiques',
    description: 'Fondamentaux théoriques, machines de Turing, calculabilité, P vs NP, compilateurs et interpréteurs, virtualisation (VM vs Docker), cloud computing (IaaS, PaaS, SaaS), IA.',
    questionCount: 100,
  },
};

export interface Question {
  id: string;
  part: number; // 1 to 10
  question: string;
  options: string[];
  choices?: string[]; // alias for options
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  topic: string;
  difficulty: Difficulty;
  source?: QuestionSource;
}

export type QuizMode = 'practice' | 'exam' | 'random100' | 'mistakes' | 'favorites';

export interface UserAnswerRecord {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizSessionResult {
  id: string;
  date: string;
  mode: QuizMode;
  partFilter: number | 'all';
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  records: UserAnswerRecord[];
}

export interface QuizProgress {
  totalAttempted: number;
  totalCorrect: number;
  examsCompleted: number;
  bestExamScore: number;
  lastStudiedDate: string;
  history: QuizSessionResult[];
}

export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
}
