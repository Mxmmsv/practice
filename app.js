/*
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- Расчёта среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(operations, startingBalance) {
	let balance = startingBalance
	for (const money of operations) {
		balance += money
	}
	return balance;
}

function isNegative(operations) {
	let balance = startingBalance;
	for (let i in operations) {
	  balance += operations[i];
	  if (balance < 0) {
		return false;
	  }
	}
	return true;
  }

  function averageBalance(operations) {
	let totalIncome = 0;
	let totalExpense = 0;
	let incomeCount = 0;
	let expenseCount = 0;
	for (let i = 0; i < operations.length; i++) {
	  if (operations[i] > 0) {
		totalIncome += operations[i];
		incomeCount++;
	  } else {
		totalExpense += Math.abs(operations[i]);
		expenseCount++;
	  }
	}
  
	const avgIncome = incomeCount > 0 ? totalIncome / incomeCount : 0;
	const avgExpense = expenseCount > 0 ? totalExpense / expenseCount : 0;
  
	return { avgIncome, avgExpense };
  }

  const { avgIncome, avgExpense } = averageBalance(operations);

getBalance(operations,startingBalance);
isNegative(operations);
averageBalance(operations);

console.log(`Ваш баланс: ${getBalance(operations,startingBalance)}`);
console.log(`Ваш средний доход:`, avgIncome);
console.log(`Ваш средний расход:`, avgExpense);
console.log(`Наличие отрицательного баланса: ${isNegative(operations) ? 'Не обнаружено' : 'обнаружено'}`);
