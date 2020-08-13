import { Category } from '../category.model';

export interface CategoriesResponse {
  categories: Category[];
  isSuccessfull: boolean;
}
