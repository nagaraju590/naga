import { modelCreator } from '../../global/functions';

export interface Category {
  categoryId: number;
  displayName: string;
  isPrimary: boolean;
}

export const newCategory = modelCreator<Category>({
  categoryId: null,
  displayName: null,
  isPrimary: null,
});
