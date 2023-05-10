//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.


class MenuItem {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    display() {
      return `${this.name} ($${this.price}): ${this.description}`;
    }
  }
  
  class Menu {
    constructor() {
      this.menuItems = [];
    }
  
    addItem(item) {
      this.menuItems.push(item);
    }
  
    viewMenu() {
      if (this.menuItems.length === 0) {
        console.log("The menu is empty.");
      } else {
        for (let item of this.menuItems) {
          console.log(item.display());
        }
      }
    }
  
    deleteItem(name) {
      for (let i = 0; i < this.menuItems.length; i++) {
        if (this.menuItems[i].name === name) {
          this.menuItems.splice(i, 1);
          console.log(`${name} has been deleted from the menu.`);
          return;
        }
      }
      console.log(`${name} is not in the menu.`);
    }
  }
  
  
  
  