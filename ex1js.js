let money=+prompt("СКОЛЬКА ТЫ ЗАРАБАТЫВАЕШЬ?",""),
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
        let a=prompt("Обязательная статья расходов"),
            b=prompt("Во сколько обойдется?");
         if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!= '' && b!= '') {
               console.log("done");
               AppData.expenses[a] = b;
            
            }
}


alert(money/30);