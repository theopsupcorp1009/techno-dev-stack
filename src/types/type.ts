import type { CategoryType } from "./categoryType";
import type { DifficultiesType } from "./difficultyType";

export interface ITechnoCartType {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  icon: string;
  rating: number;
  difficulty: DifficultiesType;
  badge: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}