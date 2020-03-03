let money, time;
function start() {
    money=+prompt("СКОЛЬКА ТЫ ЗАРАБАТЫВАЕШЬ?","");
    data=prompt("Введите время и дату в формате DD.MM.YYYY!", "");
    }
start();
    




let AppData = {
           budget: money,
           timeData: data,
           expenses: {},
           optionalExpenses: {},
           income: [],
           savings: true,
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a=prompt("Обязательная статья расходов"),
            b=prompt("Во сколько обойдется?");
         if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!= '' && b!= '') {
               console.log("done");
               AppData.expenses[a] = b;
            
         } else {
             i = i - 1;
         }
    }
}
chooseExpenses();




function detectDayBudget() {
    AppData.moneyPerDay=(AppData.budget / 30).toFixed();
    alert(AppData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (AppData.moneyPerDay<500){
        alert("Ежедневный бюджет минимальный");
    } else if(AppData.moneyPerDay<1000){
        alert("Ежедневный бюджет низкий");
    } else if(AppData.moneyPerDay<3000) {
        alert("Ежедневный бюджет средний");
    } else {
        alert("Ежедневный бюджет высокий");
    }
}

detectLevel();

function checkSavings() {
      if (AppData.savings==true) {
          let save=+prompt("Сумма накоплений"),
              percent=+prompt("Процент");
        
        AppData.monthIncome=save/100/12*percent;
        alert(AppData.monthIncome);
      }
}

checkSavings();

let answer1, answer2, answer3;

function choseOptionalExpenses() {
     answer1=pormpt("Введите статью необязательных расходов");
     answer2=pormpt("Введите статью необязательных расходов");
     answer3=pormpt("Введите статью необязательных расходов");
}

choseOptionalExpenses();