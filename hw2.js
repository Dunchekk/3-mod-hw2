document.addEventListener("DOMContentLoaded", function() {
    
    // #1
    let age = prompt("Введите ваш возраст");
    if (age < 65){
        console.log("Вам ещё рано на пенсию");
    }
    else {
        console.log("Поздравляем с пенсионным возрастом!");
    }
    
    // #2
    let login = prompt("Введите логин");
    let password = prompt("Введите пароль");
    if (login === "admin" && password === "12345"){
        console.log("Добро пожаловать!");
    }
    else {
        console.log("Неверный логин или пароль");
    }
    
    // #3
    let number = prompt("Введите любое число");
    if (number < 100){
        console.log("Маленькое число");
    }
    else if(number > 100){
        console.log("Большое число");
    }
    else {
        console.log("Ровно 100!");
    }

})