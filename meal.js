const menu = {
    _meal: 'rice ' ,
    _price : 3 ,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.error('Invalid input. Please provide a string for the meal.');
      }
    },
    set price(priceToCheck) {
       if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.error('Invalid input. Please provide a number for the price.');
      }
    },
     get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price.toFixed(2)}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  menu.meal = 'Lunch';
  menu.price = 29;
  console.log(menu);
  
  
  
  