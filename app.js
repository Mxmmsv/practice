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

const MacBookCoastUsd = 2000;

function calculateLoan(age,job) {
    switch (true) {
        case age >= 24 && job:
            return 500;
        case age >= 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(age,job,money) {
    if (money >= MacBookCoastUsd) {
        return true;
    } else {
        const loanPrice = money + calculateLoan(age,job)
        if (loanPrice >= MacBookCoastUsd) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(canBuy(24,true,1800))