export class Meal {
  id?: string;
  name?: string;
  category?: string;
  nacionality?: string;
  ingredients: Array<string> = [];
  measures: Array<string> = [];
  instructions?: string;
  image?: string;
}
