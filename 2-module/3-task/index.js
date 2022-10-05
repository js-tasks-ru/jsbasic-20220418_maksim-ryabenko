
let calculator = {

  read(val1 = 0, val2 = 0){
    this.num = val1,
    this.num2 = val2
  },
  
  sum(){
    return this.num + this.num2;
  },

  mul(){
    return this.num * this.num2;
  },
  
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
