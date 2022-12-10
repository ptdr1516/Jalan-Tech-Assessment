var total = 0;
var total_Elements = document.getElementById("total");
var coffeeList = ["Espresso", "Cappuccino", "Latte"];
var ul = document.getElementById("list");


function cal(i) {
    var form = document.forms[i];
    var milk = form.elements["Milk"].checked;
    var cream = form.elements["Cream"].checked;
    var latte = form.elements["Latte"].checked;

    if (!milk && !cream && !latte) {
        alert("Please choose an AddOn :)");
        return;
    }

    cup = new Cup(i, milk, cream, latte)
    total += cup.getPrice();

    total_Elements.innerText = total;
    
    var li = document.createElement("li");
    var option = cup.getOptions();
    
    console.log(option);

    li.appendChild(document.createTextNode(coffeeList[i] + option +" cost: ₹" + cup.getPrice()));
    ul.appendChild(li);
    console.log(total);
}

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

    getPrice() {
        const totalPrice = this.milk * this.milkPrice + this.cream * this.creamPrice + this.latte * this.lattePrice;
        return totalPrice;
    }
} 
