export class PrefAlimentaires {

  private _food: string[];
  private _allergies: string[];


  constructor(food: string[], allergies: string[]) {
    this._food = food;
    this._allergies = allergies;
  }


  get food(): string[] {
    return this._food;
  }

  set food(value: string[]) {
    this._food = value;
  }

  get allergies(): string[] {
    return this._allergies;
  }

  set allergies(value: string[]) {
    this._allergies = value;
  }
}
