var firstQuestion = +prompt("Ваш бюджет?", "500 rub");
var secondQuestion = prompt("Название вашего магазина?", "Aliexpress");

var mainList = {};

mainList = {
	budget: 0,
	nameShop: "",
	shopGoods: [],
	employers: {},
	open: ""
}

mainList.nameShop = secondQuestion;
mainList.budget = firstQuestion;


console.log(mainList.nameShop);
console.log(mainList.budget);
console.log( typeof(mainList.shopGoods));