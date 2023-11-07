/*
	Пользователь хочет приобрести игру в магазине
	Он может это сделать отлько если:
	- Eго баланс больше 1000 (balance) 
	или число бонусов больше 100 (bonusBalance)
	- Он не забанен (isBanned)
	- Игра не кулена (isExist)
	- Игра в продаже (isSelling)
	Напишите условие для покупки и выведите в консоль
	результат
*/

let balance = prompt('Введите число на балансе')
let bonusBalance = prompt('Введите число бонусов')
let isBanned = prompt('Вы забанены?')
switch (isBanned) {
    case 'да':
        isBanned = true;
        break;
    case 'нет':
        isBanned = false;
        break;
    default:
        isBanned = false;
        break;
}

let isExist = prompt('Игра куплена?')
switch (isExist) {
    case 'да':
        isExist = true;
        break;
    case 'нет':
        isExist = false;
        break;
    default:
        isExist = false;
        break;
}

let isSelling = prompt('Игра продаётся?')
switch (isSelling) {
    case 'да':
        isSelling = true;
        break;
    case 'нет':
        isSelling = false;
        break;
    default:
        isSelling = false;
        break;
}

let capacity = (balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling;
console.log(`Вася хочет купить игру, и он ${capacity} сделать это!`)