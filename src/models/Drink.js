export class Drink {
  constructor({ name, img, base_spirit = [], ingredients = [] }) {
    this.name = name;
    this.img = img;
    this.base_spirit = base_spirit;
    this.ingredients = ingredients;
  }
}
