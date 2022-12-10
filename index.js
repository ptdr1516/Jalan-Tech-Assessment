var total = 0; // initial total value
var total_Elements = document.getElementById("total"); // gets the total element from index.html
var coffeeList = ["Espresso", "Cappuccino", "Latte"]; // Coffee type list
var ul = document.getElementById("list"); // gets the list element from index.html


// function to calcualte addons count with there actual amount
function cal(i) {
    
    
    var form = document.forms[i]; // Returns the form in the document(index.html).
    var milk = form.elements["Milk"].checked; // Check if the milk is checked from the form element.
    var cream = form.elements["Cream"].checked; // Check if the cream is checked from the form element.
    var latte = form.elements["Latte"].checked; // Check if the latte is checked from the form element.

    // Alert message
    if (!milk && !cream && !latte) {
        alert("Please choose an AddOn");
        return;
    }

    // Creates a new cup object.
    cup = new Cup(i, milk, cream, latte);
    total += cup.getPrice();

    total_Elements.innerText = total;
    
    var li = document.createElement("li"); // create list element
    var option = cup.getOptions(); // function call
    
    console.log(option);

    // Appends coffee list items and creats text string from the specified value
    li.appendChild(document.createTextNode(coffeeList[i] + option +" cost: ₹" + cup.getPrice()));
    ul.appendChild(li);
    console.log(total);
}

// Use of OOPS Concept
// Class Coffee holds coffeeType with addOns price and further inherited by class Cup and holds the properties of class Coffee 

class Coffee {

    constructor(coffeeType) {
        this.milkPrice = coffeeType == 0 ? 60 : coffeeType == 1 ? 80 : 100;
        this.creamPrice = coffeeType == 0 ? 75 : coffeeType == 1 ? 90 : 125;
        this.lattePrice = coffeeType == 0 ? 100 : coffeeType == 1 ? 125 : 150;
    }
}

class Cup extends Coffee {
    constructor(coffee, x, y, z) {
        super(coffee);
        this.milk = x || 0;
        this.cream = y || 0;
        this.latte = z || 0;
    }

    // function to get differnt options for different types of coffee
    getOptions() {
        var option = "";
        console.log(this.milk);

        if (this.milk == true) {
            option += " milk";
        }
        if (this.cream == true ) {
            option += " cream";
        }
        if (this.latte == true) {
            option += " latte";
        }

        return option;
    }

    // Gets the total price of coffee with addOns
    getPrice() {
        const totalPrice = this.milk * this.milkPrice + this.cream * this.creamPrice + this.latte * this.lattePrice;
        return totalPrice;
    }
} 
