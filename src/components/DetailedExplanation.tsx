import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  BookOpen, 
  HelpCircle, 
  Code2, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers
} from 'lucide-react';
import { Question } from '../types';
import { FormattedQuestionText } from './FormattedQuestionText';

interface DetailedExplanationProps {
  question: Question;
  selectedOptionIndex: number;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Detects if the question, explanation, or options contain programming code or technical syntax
 */
function detectTechnicalDomain(question: Question): {
  isCode: boolean;
  language: string;
  isSubnetting: boolean;
  isSQL: boolean;
  isAlgorithms: boolean;
  isOSI: boolean;
} {
  const combined = (
    question.question + ' ' + 
    question.explanation + ' ' + 
    question.topic + ' ' + 
    question.options.join(' ')
  ).toLowerCase();

  const isC = /\b(printf|scanf|malloc|free|pointeur|int main|sizeof|#include|\*ptr|char\s*\*)\b/.test(combined);
  const isJava = /\b(system\.out|public static void|extends|implements|arraylist|polymorph|jvm|jdk)\b/.test(combined);
  const isSQL = /\b(select|insert|update|delete|group by|order by|join|inner join|primary key|foreign key|where)\b/.test(combined);
  const isBash = /\b(chmod|chown|grep|sed|awk|bash|linux|terminal|commande|\/bin)\b/.test(combined);
  const isSubnetting = /\b(masque|sous-réseau|cidr|192\.168|adresse ip|broadcast|passerelle|adresse réseau)\b/.test(combined);
  const isAlgorithms = /\b(complexité|o\(n|o\(log|pile|file|arbre|graphe|dijkstra|tri à bulles|tri fusion|tri rapide)\b/.test(combined);
  const isOSI = /\b(modèle osi|couche|tcp\/ip|transport|liaison|routage|arp|dns|http|udp)\b/.test(combined);

  let language = 'Informatique';
  if (isC) language = 'Langage C';
  else if (isJava) language = 'Java / POO';
  else if (isSQL) language = 'SQL & Bases de données';
  else if (isBash) language = 'Systèmes Unix / Linux & Bash';
  else if (isSubnetting) language = 'Réseaux & Adressage IP';
  else if (isAlgorithms) language = 'Algorithmique & Structures de données';
  else if (isOSI) language = 'Réseaux & Protocoles OSI';

  return {
    isCode: isC || isJava || isSQL || isBash,
    language,
    isSubnetting,
    isSQL,
    isAlgorithms,
    isOSI,
  };
}

/**
 * Generates an educational rationale explaining why an incorrect answer was wrong,
 * tailored to the selected option, question topic, and correct answer.
 */
function getWhyWrongExplanation(
  question: Question,
  selectedIndex: number,
  correctIndex: number,
  domain: ReturnType<typeof detectTechnicalDomain>
): string {
  const selectedText = question.options[selectedIndex] || '';
  const correctText = question.options[correctIndex] || '';

  // Specific domain analysis for common traps
  if (domain.isSubnetting) {
    return `Votre choix (${selectedText}) ne correspond pas au calcul réseau bit à bit. Pour trouver l'adresse réseau d'une machine, il faut impérativement appliquer l'opération logique ET entre chaque bit de l'adresse IP et chaque bit du masque de sous-réseau. Tout bit du masque à 0 isole la partie hôte et doit être mis à zéro dans l'adresse réseau.`;
  }

  if (domain.language === 'Langage C') {
    if (selectedText.toLowerCase().includes('erreur') || selectedText.toLowerCase().includes('infinie')) {
      return `Cette réponse suppose une erreur de compilation ou d'exécution, or la syntaxe et les opérations du code sont valides selon la norme C. Le compilateur évalue fidèlement les instructions séquentielles sans incident.`;
    }
    if (/\d+/.test(selectedText) && /\d+/.test(correctText)) {
      return `Le résultat numérique sélectionné (${selectedText}) provient généralement d'une méprise sur l'ordre de priorité des opérateurs, l'évaluation des pré/post-incrémentations (a++ vs ++a), ou la portée des variables lors des passages de paramètres par valeur plutôt que par adresse (pointeur).`;
    }
    return `En langage C, la proposition choisie (${selectedText}) est erronée car elle ne suit pas les règles strictes de manipulation de la mémoire, de gestion des pointeurs ou d'évaluation des expressions du compilateur.`;
  }

  if (domain.language === 'Java / POO') {
    return `En Programmation Orientée Objet (Java), la proposition (${selectedText}) ne reflète pas le comportement réel de l'environnement d'exécution (JVM). Les mécanismes de liaison dynamique (polymorphisme), de visibilité ou d'héritage imposent la résolution appliquée dans la bonne réponse.`;
  }

  if (domain.language === 'SQL & Bases de données') {
    return `La proposition (${selectedText}) est syntaxiquement ou sémantiquement incorrecte pour le standard SQL. Les clauses doivent respecter l'ordre d'évaluation logique (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY) et l'intégrité relationnelle.`;
  }

  if (domain.isOSI) {
    return `La proposition sélectionnée (${selectedText}) attribue une responsabilité à un niveau inapproprié du modèle de communication. Chaque couche du modèle OSI ou TCP/IP possède un rôle strictement délimité (ex : routage en couche 3, transmission de trames en couche 2, contrôle de flux et ports en couche 4).`;
  }

  if (domain.isAlgorithms) {
    return `La proposition (${selectedText}) sous-estime ou surestime le coût algorithmique ou la structure requise. Les parcours, récursions et invariants de boucle démontrent rigoureusement le comportement décrit dans la solution exacte.`;
  }

  return `La réponse sélectionnée (${selectedText}) est incorrecte car elle ne vérifie pas la définition technique et les critères requis énoncés dans la question.`;
}

/**
 * Generates an actionable learning takeaway or practical tip
 */
function getConceptTakeaway(
  question: Question,
  domain: ReturnType<typeof detectTechnicalDomain>
): { title: string; text: string; example?: string } {
  if (domain.isSubnetting) {
    return {
      title: "Règle d'or pour les concours (Adressage IP) :",
      text: "Dans un masque /24, les 3 premiers octets sont figés. Pour /25 (128), /26 (192), /27 (224), calculez le pas : Pas = 256 - dernier_octet_masque. Les adresses de sous-réseaux sont toujours des multiples stricts de ce pas !",
      example: "Exemple : Avec un masque 255.255.255.192 (/26), le pas vaut 256 - 192 = 64. Les réseaux commencent donc obligatoirement à .0, .64, .128, .192."
    };
  }

  if (domain.language === 'Langage C') {
    return {
      title: "Règle d'or en C (Passage & Pointeurs) :",
      text: "En C, TOUT passage d'argument se fait par valeur ! Pour modifier une variable de l'appelant, on doit obligatoirement transmettre son adresse (&variable) et déréférencer le pointeur (*ptr) dans la fonction.",
      example: "Attention au piège fréquent des concours : 'a++' utilise d'abord la valeur actuelle puis l'incrémente après, alors que '++a' incrémente immédiatement avant l'utilisation."
    };
  }

  if (domain.language === 'Java / POO') {
    return {
      title: "Règle clé en POO (Polymorphisme & Liaison) :",
      text: "Le type de la référence détermine quelles méthodes sont visibles à la compilation, mais le type réel de l'objet instancié avec 'new' détermine quelle version de méthode surchargée est exécutée au runtime (liaison dynamique / late binding).",
      example: "Exemple : Avec 'A obj = new B(); obj.afficher();', si B redéfinit 'afficher()', c'est la méthode de B qui est appelée."
    };
  }

  if (domain.language === 'SQL & Bases de données') {
    return {
      title: "Mémo pour les requêtes SQL :",
      text: "Les fonctions d'agrégation (COUNT, SUM, AVG) exigent que toutes les colonnes non agrégées du SELECT figurent obligatoirement dans la clause GROUP BY. Le filtrage sur les agrégats se fait avec HAVING, jamais avec WHERE.",
      example: "WHERE filtre les lignes individuelles avant le regroupement ; HAVING filtre les groupes une fois formés."
    };
  }

  if (domain.isOSI) {
    return {
      title: "Astuce mnémotechnique (Modèle OSI) :",
      text: "Mémorisez les 7 couches de bas en haut (1 à 7) : Physique (bits), Liaison (trames/MAC), Réseau (paquets/IP), Transport (segments/TCP-UDP), Session, Présentation, Application.",
      example: "Pensez à la phrase : 'Pour Le Réseau Tout Se Passe Après' (Physique, Liaison, Réseau, Transport, Session, Présentation, Application)."
    };
  }

  if (domain.isAlgorithms) {
    return {
      title: "Rappel de complexité en concours :",
      text: "Distinguez toujours le pire des cas, le cas moyen et le meilleur cas. Un algorithme par division et conquête (comme le tri fusion ou la recherche dichotomique) introduit généralement un facteur logarithmique O(log n).",
      example: "Exemple : Recherche linéaire = O(n), Recherche dichotomique sur tableau trié = O(log n)."
    };
  }

  return {
    title: "Notion essentielle à retenir :",
    text: `Sur le thème « ${question.topic || 'Informatique'} », la rigueur terminologique est déterminante. Relevez systématiquement les mots-clés de l'énoncé et validez chaque hypothèse avant de trancher.`,
    example: "Une bonne réponse en concours doit être vérifiable à 100% par les définitions formelles et les spécifications standardisées."
  };
}

export const DetailedExplanation: React.FC<DetailedExplanationProps> = ({
  question,
  selectedOptionIndex,
}) => {
  const [showOtherOptions, setShowOtherOptions] = useState(false);

  const isCorrect = selectedOptionIndex === question.correctAnswer;
  const selectedLetter = OPTION_LETTERS[selectedOptionIndex] || `${selectedOptionIndex + 1}`;
  const correctLetter = OPTION_LETTERS[question.correctAnswer] || `${question.correctAnswer + 1}`;
  
  const selectedText = question.options[selectedOptionIndex] || '';
  const correctText = question.options[question.correctAnswer] || '';

  const domain = detectTechnicalDomain(question);
  const whyWrong = !isCorrect ? getWhyWrongExplanation(question, selectedOptionIndex, question.correctAnswer, domain) : '';
  const takeaway = getConceptTakeaway(question, domain);

  // Filter other options that are neither chosen nor correct, or all incorrect options
  const otherIncorrectOptions = question.options
    .map((opt, idx) => ({ text: opt, letter: OPTION_LETTERS[idx] || `${idx + 1}`, index: idx }))
    .filter(item => item.index !== question.correctAnswer);

  return (
    <div 
      className={`p-4 sm:p-5 rounded-2xl border mb-6 transition-all duration-300 shadow-sm ${
        isCorrect
          ? 'bg-emerald-50/70 border-emerald-300/80 dark:bg-emerald-950/20 dark:border-emerald-700/60'
          : 'bg-rose-50/70 border-rose-300/80 dark:bg-rose-950/20 dark:border-rose-700/60'
      }`}
    >
      {/* 1. Header Banner: Immediate clarity on verdict */}
      <div className="flex items-start gap-3 pb-3.5 mb-4 border-b border-stone-200/80 dark:border-stone-800">
        <div className="mt-0.5 shrink-0">
          {isCorrect ? (
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm">
              <XCircle className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="grow">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`text-sm font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${
                isCorrect
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200'
              }`}
            >
              {isCorrect ? 'Excellente réponse !' : 'Réponse incorrecte'}
            </span>

            {domain.isCode && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                <Code2 className="w-3 h-3" />
                {domain.language}
              </span>
            )}
          </div>

          <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200">
            {isCorrect ? (
              <span>
                Vous avez correctement sélectionné l'option{' '}
                <strong className="text-emerald-700 dark:text-emerald-400 font-bold">
                  {selectedLetter}
                </strong>
                .
              </span>
            ) : (
              <span>
                Vous avez sélectionné l'option{' '}
                <strong className="text-rose-700 dark:text-rose-400 font-bold">
                  {selectedLetter}
                </strong>
                , mais la réponse attendue est l'option{' '}
                <strong className="text-emerald-700 dark:text-emerald-400 font-bold">
                  {correctLetter}
                </strong>
                .
              </span>
            )}
          </p>
        </div>
      </div>

      {/* 2. Structured Sections based on correctness */}
      <div className="space-y-4">
        {/* IF INCORRECT: SECTION 1 - Why user's choice is wrong */}
        {!isCorrect && (
          <div className="bg-white dark:bg-stone-900/90 rounded-xl p-3.5 sm:p-4 border border-rose-200 dark:border-rose-900/50 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-rose-800 dark:text-rose-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>Pourquoi votre proposition ({selectedLetter}) est fausse :</span>
            </div>

            <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-2">
              <div className="p-2 sm:p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-stone-800 dark:text-stone-200">
                <span className="font-semibold text-rose-900 dark:text-rose-300 mr-1.5">
                  Proposition choisie :
                </span>
                <span className="italic">« {selectedText} »</span>
              </div>

              <p className="pt-1">
                {whyWrong}
              </p>
            </div>
          </div>
        )}

        {/* SECTION 2: The Correct Answer Highlight */}
        <div className="bg-white dark:bg-stone-900/90 rounded-xl p-3.5 sm:p-4 border border-emerald-200 dark:border-emerald-900/50 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>
              {isCorrect ? 'Confirmation de la bonne réponse :' : 'Quelle est la bonne réponse ?'}
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 mb-3 text-stone-900 dark:text-stone-100">
            <span className="font-bold text-emerald-700 dark:text-emerald-400 mr-2 text-sm sm:text-base">
              Option {correctLetter} :
            </span>
            <span className="font-semibold text-sm sm:text-base leading-snug">
              {correctText}
            </span>
          </div>

          {/* SECTION 3: Why it is correct & Full explanation */}
          <div>
            <div className="text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Pourquoi cette réponse est correcte (Démonstration) :</span>
            </div>

            <div className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed bg-stone-50/80 dark:bg-stone-800/60 p-3 sm:p-3.5 rounded-xl border border-stone-200 dark:border-stone-700">
              <FormattedQuestionText content={question.explanation} />
            </div>
          </div>
        </div>

        {/* SECTION 4: Concept takeaway, concrete example & exam tip */}
        <div className="bg-blue-50/80 dark:bg-blue-950/30 rounded-xl p-3.5 sm:p-4 border border-blue-200 dark:border-blue-800/60 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-200 mb-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{takeaway.title}</span>
          </div>

          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-2">
            {takeaway.text}
          </p>

          {takeaway.example && (
            <div className="mt-2 pt-2 border-t border-blue-200/60 dark:border-blue-900/60 flex items-start gap-2 text-blue-950 dark:text-blue-100 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{takeaway.example}</span>
            </div>
          )}
        </div>

        {/* SECTION 5: Analysis of all other choices (accordion for pedagogy without clutter) */}
        {!isCorrect && otherIncorrectOptions.length > 0 && (
          <div className="border border-stone-200/70 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/40 overflow-hidden">
            <button
              onClick={() => setShowOtherOptions(!showOtherOptions)}
              className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {showOtherOptions
                  ? 'Masquer le comparatif des autres propositions'
                  : 'Voir pourquoi les autres propositions sont également fausses'}
              </span>
              {showOtherOptions ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {showOtherOptions && (
              <div className="px-3.5 pb-3.5 pt-1 space-y-2 border-t border-stone-200/50 dark:border-stone-800">
                {otherIncorrectOptions.map((item) => {
                  const wasChosen = item.index === selectedOptionIndex;
                  return (
                    <div
                      key={item.index}
                      className={`p-2.5 rounded-lg text-xs leading-relaxed border flex items-start gap-2 ${
                        wasChosen
                          ? 'bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-200 font-medium'
                          : 'bg-white border-stone-200 text-stone-700 dark:bg-stone-800/80 dark:border-stone-700 dark:text-stone-300'
                      }`}
                    >
                      <span className="font-bold shrink-0 uppercase px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-[11px]">
                        Option {item.letter}
                      </span>
                      <div className="grow">
                        <span className="font-semibold block mb-0.5">{item.text}</span>
                        <span className="text-[11px] text-stone-500 dark:text-stone-400">
                          {wasChosen
                            ? '— Proposition choisie (incorrecte selon la démonstration ci-dessus).'
                            : '— Proposition distractrice réfutée par la règle et les spécifications énoncées.'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
