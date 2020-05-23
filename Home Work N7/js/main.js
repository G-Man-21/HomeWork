


let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesVal = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSavingsVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsVal = document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    rasch = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumVal = document.querySelector('#sum'),
    percentVal = document.querySelector('#percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value'),
    countBtn = document.querySelector('.count-budget-btn'),
    allBtn = document.getElementsByTagName('button');






let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
rasch.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearVal.value = new Date(Date.parse(time)).getFullYear();
    monthVal.value = new Date(Date.parse(time)).getMonth();
    dayVal.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    rasch.disabled = false;

});


expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
            appData.expenses['sum'] = sum;
        } else {
            alert('Попробуйте еще раз');
            i--;
        } 
    }

    expensesVal.textContent = sum;
});



optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesVal.textContent += appData.optionalExpenses[i] + ' ';       
    }
});


countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.expenses['sum']) / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetVal.textContent = 'Произошла ошибка';
    }

});


incomeItem.addEventListener('input', function() {
    let item = incomeItem.value;
    appData.income = item.split(", ");
    incomeVal.textContent = appData.income; 
});


checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumVal.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumVal.value,
        percent = +percentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal.textContent = appData.monthIncome.toFixed(1);
    }
});


percentVal.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumVal.value,
        percent = +percentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});





let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}



