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
           chooseExpenses: function() {
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
           },
           detectDayBudget: function() {
                    AppData.moneyPerDay=(AppData.budget / 30).toFixed();
                    alert(AppData.moneyPerDay);
           },
           detectLevel: function() {
            if (AppData.moneyPerDay<500){
                alert("Ежедневный бюджет минимальный");
            } else if(AppData.moneyPerDay<1000){
                alert("Ежедневный бюджет низкий");
            } else if(AppData.moneyPerDay<3000) {
                alert("Ежедневный бюджет средний");
            } else {
                alert("Ежедневный бюджет высокий");
            }
           },
           checkSavings: function() {
            if (AppData.savings==true) {
                let save=+prompt("Сумма накоплений"),
                    percent=+prompt("Процент");
              
              AppData.monthIncome=save/100/12*percent;
              alert(AppData.monthIncome);
            }
           },
           chooseOptionalExpenses: function() {
               for (let i=1; i<3; i++) {
                    let opt=prompt("Статья необязательных расходов", " ");
                    AppData.chooseOptionalExpenses[i]=opt;
                    };
               },
           chooseIncome: function() {
               for (let i=1; i<2; i++){
                let items=prompt("Что принесет доп доход?(перечислить доп. доход)", " ");
               if (typeof(items)=='string' && typeof(items)!='null' && items!=' ') {
               AppData.income = items.split(", ");
               AppData.income.push(prompt("Может, что-то еще?"));
               AppData.income.sort();
               } else {
                   i=i-1;
                    }
                }
            },
}

 AppData.chooseExpenses();

 AppData.detectDayBudget();

 AppData.detectLevel();

 AppData.checkSavings();
 
 AppData.chooseOptionalExpenses();

 AppData.chooseIncome();

AppData.income.forEach(function(item, i) {
    i=i+1;
    alert(i + ': ' + item);
});

for (var prop in AppData) {
    console.log(prop + ":" + AppData[prop])
} 

