class Meal {
  constructor(
    id,
    ctagoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    IsVegetarian,
    IsLactoseFree
  ) {
      this.id=id,
      this.ctagoryId=ctagoryId,
      this.title=title,
      this.affordability=affordability,
      this.complexity=complexity,
      this.imageUrl=imageUrl,
      this.duration=duration,
      this.ingredients=ingredients,
      this.steps=steps,
      this.isGlutenFree=isGlutenFree,
      this.isVegan=isVegan,
      this.IsVegetarian=IsVegetarian,
      this.IsLactoseFree=IsLactoseFree
  }
}


export default Meal