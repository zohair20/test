import { DEFAULT_QUESTIONS, PART_1_QUESTIONS, PART_2_QUESTIONS, PART_3_QUESTIONS, PART_4_QUESTIONS, PART_5_QUESTIONS, PART_6_QUESTIONS, PART_7_QUESTIONS, PART_8_QUESTIONS, PART_9_QUESTIONS, PART_10_QUESTIONS } from '../src/data/defaultQuestions';
import { PART_DEFINITIONS } from '../src/types';

console.log('================== AUDIT COMPLET DES 1 000 QUESTIONS ==================');
console.log(`Nombre total de questions chargées dans DEFAULT_QUESTIONS : ${DEFAULT_QUESTIONS.length}`);

const partArrays = [
  PART_1_QUESTIONS, PART_2_QUESTIONS, PART_3_QUESTIONS, PART_4_QUESTIONS,
  PART_5_QUESTIONS, PART_6_QUESTIONS, PART_7_QUESTIONS, PART_8_QUESTIONS,
  PART_9_QUESTIONS, PART_10_QUESTIONS
];

let totalAncient = 0;
let totalConforme = 0;

partArrays.forEach((pQs, idx) => {
  const partNum = idx + 1;
  const def = PART_DEFINITIONS[partNum];
  console.log(`\n--- PARTIE ${partNum} : ${def.title} ---`);
  console.log(`  Description : ${def.description}`);
  console.log(`  Nombre de questions : ${pQs.length}`);
  if (pQs.length !== 100) {
    throw new Error(`Partie ${partNum} ne contient pas 100 questions (actuel: ${pQs.length}) !`);
  }

  let ancientCount = 0;
  let conformeCount = 0;

  pQs.forEach((q, qIdx) => {
    if (q.part !== partNum) {
      throw new Error(`Incohérence: Q${qIdx+1} a part=${q.part}, attendu=${partNum}`);
    }
    if (!q.question || q.question.trim().length === 0) {
      throw new Error(`Q${qIdx+1} texte vide`);
    }
    if (!q.options || q.options.length !== 4) {
      throw new Error(`Q${qIdx+1} n'a pas 4 options (actuel: ${q.options?.length})`);
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`Q${qIdx+1} correctAnswer invalide: ${q.correctAnswer}`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      throw new Error(`Q${qIdx+1} explication vide`);
    }
    if (q.source === 'Ancien concours') {
      ancientCount++;
    } else if (q.source === 'Conforme au programme') {
      conformeCount++;
    } else {
      throw new Error(`Q${qIdx+1} source inconnue: ${q.source}`);
    }
  });

  console.log(`  Questions "Ancien concours" : ${ancientCount}`);
  console.log(`  Questions "Conforme au programme" : ${conformeCount}`);
  totalAncient += ancientCount;
  totalConforme += conformeCount;
});

console.log('\n================== BILAN STATISTIQUE ET AUDIT ==================');
console.log(`✓ 10 Parties auditées avec succès.`);
console.log(`✓ Total questions : ${DEFAULT_QUESTIONS.length} / 1 000 (100% conformes).`);
console.log(`✓ Total "Ancien concours" : ${totalAncient}`);
console.log(`✓ Total "Conforme au programme" : ${totalConforme}`);
console.log('✓ Toutes les questions ont 4 options, un index de réponse valide et une explication pédagogique détaillée.');
