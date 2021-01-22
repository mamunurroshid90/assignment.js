

// hotelCost section
function hotelCost(day) {
	var roomCost = 0;
	if (day <= 10) {
		roomCost = day * 100;
	} else if (day <= 20) {
		var firstPart = 10 * 100;
		var remaining = day - 10;
		var secondPart = remaining * 80;
		roomCost = firstPart + secondPart;
	} else {
		var firstPart = 10 * 100;
		var secondPart = 10 * 80;
		var remaining = day - 20;
		var thirdPart = remaining * 50;
		roomCost = firstPart + secondPart + thirdPart;
	}
	return roomCost;
}
var totalCost = hotelCost(22);




// budgetCalculator section
function budgetCalculator(watch, phone, laptop) {
	var productPrice = watch * 50 + phone * 100 + laptop * 500;
	return productPrice;
}
var totalPrice = budgetCalculator(2, 2, 2);



// kilometerToMeter section
function kilometerToMeter(meter) {
	var kilometer = meter * 1000;
	return kilometer;
}
var output = kilometerToMeter(5);



// megaFriend section
function megaFriend(strs) {
	var longest = '';
	for (var i = 0; i < strs.length; i++) {
		if (strs[i].length > longest.length) longest = strs[i];
	}
	return longest;
}
var longestName = megaFriend(['Mamunur roshid', 'maksudur Rahman', 'Mahmudullah']);

