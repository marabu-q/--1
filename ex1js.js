let money=prompt("СКОЛЬКА ТЫ ЗАРАБАТЫВАЕШЬ?","");
   console.log(money);
let data=prompt("Введите время и дату в формате DD.MM.YYYY!", "");
   console.log(data);
let rashodi=prompt("Введите обязательную статью расходов в этом месяце","");
   console.log(rashodi);
let cost=prompt("Во сколько обойдется");
   console.log(cost);
let income = [];
let expenses = {
      "ответ на первый вопрос" : rashodi,
      "ответ на второй вопрос" : cost,
      }
let AppData = {
          "бюджет" : money,
          "Данные времени" : data,
          "обязательные расходы" : expenses,
          "доп доход" : income,
          "savings" : false,
}

alert(money/30);
