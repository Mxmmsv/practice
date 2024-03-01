/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

let user = Number(prompt('Сколько вам лет?'));
let money = Number(prompt('Сколько у вас кэшика?'));
let isJob = (prompt('У вас есть работа?')) === 'Да' ? true : false;

function credit(user, isJob) {
	switch (true) {
		case user >= 24 && isJob:
			return 500;
		case user >= 24:
			return 100;
		default:
			return 0;
	}
}

function canBuy(money, credit = 0) {
	return money + credit >= 2000;
}

console.log(`Вы ${canBuy(money, credit(user, IsJob)) ? 'можете' : 'не можете'} купить новенький MacBook.`);