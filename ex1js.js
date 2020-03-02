let money=prompt("СКОЛЬКА ТЫ ЗАРАБАТЫВАЕШЬ?",""),
    data=prompt("Введите время и дату в формате DD.MM.YYYY!", "");

let AppData = {
           budget: money,
           timeData: data,
           expenses: {},
           optionalExpenses: {},
           income: [],
           savings: false,
};

for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце"),
       b = prompt("Во сколько обойдется");
       AppData.expenses[a] = b;
}

alert(money/30);