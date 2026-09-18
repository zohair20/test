import { Question } from '../types';
import { PART_1_QUESTIONS } from './parts/part1';
import { PART_2_QUESTIONS } from './parts/part2';
import { PART_3_QUESTIONS } from './parts/part3';
import { PART_4_QUESTIONS } from './parts/part4';
import { PART_5_QUESTIONS } from './parts/part5';
import { PART_6_QUESTIONS } from './parts/part6';
import { PART_7_QUESTIONS } from './parts/part7';
import { PART_8_QUESTIONS } from './parts/part8';
import { PART_9_QUESTIONS } from './parts/part9';
import { PART_10_QUESTIONS } from './parts/part10';

export {
  PART_1_QUESTIONS,
  PART_2_QUESTIONS,
  PART_3_QUESTIONS,
  PART_4_QUESTIONS,
  PART_5_QUESTIONS,
  PART_6_QUESTIONS,
  PART_7_QUESTIONS,
  PART_8_QUESTIONS,
  PART_9_QUESTIONS,
  PART_10_QUESTIONS,
};

export const DEFAULT_QUESTIONS: Question[] = [
  ...PART_1_QUESTIONS,
  ...PART_2_QUESTIONS,
  ...PART_3_QUESTIONS,
  ...PART_4_QUESTIONS,
  ...PART_5_QUESTIONS,
  ...PART_6_QUESTIONS,
  ...PART_7_QUESTIONS,
  ...PART_8_QUESTIONS,
  ...PART_9_QUESTIONS,
  ...PART_10_QUESTIONS,
];

export const ALL_TOPICS = Array.from(new Set(DEFAULT_QUESTIONS.map(q => q.topic))).sort();
