"use strict";






var pizza = {
    crustType: "",
    topping: "",
    size: "",

    buildPizza: function (_elementID) {
        document.getElementById(_elementID).innerHTML = `We are making your ${this.size} pizza on a
                                                    ${this.crustType} crust with ${this.topping}.`;

    }
};



var pizzaShoppingList = {

    calculateFlour: function (_crustType, _size) {

        var flour = (_crustType == "thin") ? 1 : 2;

        switch (_size) {
            case "small":
                flour = flour * 1;
                break;
            case "large":
                flour = flour * 2;
                break;
        }

        return flour;

    },
    buildList: function (_crustType, _topping, _size, _elementID) {
        var flourAmount = this.calculateFlour(_crustType, _size);
        document.getElementById(_elementID).innerHTML = `You will need to buy ${flourAmount} cup(s) of flour
                                                        and 1 lb of ${_topping}`;
    },

};