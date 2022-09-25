let linksArr = document.querySelectorAll('a');

linksArr[0].addEventListener('click', task1);

function task1(event) {
    event.preventDefault();
    let i = 3;
    while (i) {
        alert(i--); //1, тому що після того як виконається постфіксний декремент, умова while буде false, тому тіло while не виконається
    }
}

linksArr[1].addEventListener('click', task2);

function task2(event){
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    let c = +prompt("");
    if (a < b && b < c){
        a *= 2;
        b *= 2;
        c *= 2;
        alert("Числа подвоїлись: " + a + ", " + b + ", " + c);
    } else {
        a = -a;
        b = -b;
        c = -c;
        alert("Протилежні числа: " + a + ", " + b + ", " +c);
    }
}

linksArr[2].addEventListener('click', task3);

function task3(event){
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    let c = +prompt("");
    if ((a < b && b < c)|| (a > b && b > c)){
        a *= 2;
        b *= 2;
        c *= 2;
        alert("Числа подвоїлись: " + a + ", " + b + ", " + c);
    } else {
        a = -a;
        b = -b;
        c = -c;
        alert("Протилежні числа: " + a + ", " + b + ", " +c);
    }
}

linksArr[3].addEventListener('click', task4);

function task4(event){
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    let c = +prompt("");
    let ab = Math.abs(b - a);
    let ac = Math.abs(c - a);
    if (ab > ac){
        alert("Точка с розташована ближче, її значення: " + c + "\nВідстань від точки а: " + ac);
    } else if (ab < ac){
        alert("Точка b розташована ближче, її значення: " + b + "\nВідстань від точки а: " + ab);
    } else {
        alert("Точки рівновіддалені");
    }
}

linksArr[4].addEventListener('click', task5);

function task5(event){
    event.preventDefault();
    let x = +prompt("");
    let y = +prompt("");
    if(x === 0 && y === 0){
        alert(0);
    } else if (x === 0){
        alert(1);
    } else if (y === 0){
        alert(2);
    } else {
        alert(3);
    }
}

linksArr[5].addEventListener('click', task6);

function task6(event) {
    event.preventDefault();
    let x = +prompt("");
    let y = +prompt("");
    if (x > 0 && y > 0){
        alert(1);
    } else if (x < 0 && y > 0){
        alert(2);
    } else if (x < 0 && y < 0){
        alert(3);
    } else {
        alert(4);
    }
}

linksArr[6].addEventListener('click', task7);

function task7(event){
    event.preventDefault();
    let A = prompt("").split(" ");
    let B = prompt("").split(" ");
    let C = prompt("").split(" ");

    let D = [0, 0];

    if (A[0] === B[0] && A[1] === C[1]) {
        D[0] = C[0];
        D[1] = B[1];
    } else if (A[0] === C[0] && A[1] === B[1]) {
        D[0] = B[0];
        D[1] = C[1];
    } else if (B[0] === A[0] && B[1] === C[1]) {
        D[0] = C[0];
        D[1] = A[1];
    } else if (B[0] === C[0] && B[1] === A[1]) {
        D[0] = A[0];
        D[1] = C[1];
    } else if (C[0] === A[0] && C[1] === B[1]) {
        D[0] = B[0];
        D[1] = A[1];
    } else if (C[0] === B[0] && C[1] === A[1]) {
        D[0] = A[0];
        D[1] = B[1];
    }

    alert(D);
}

linksArr[7].addEventListener('click', task8);

function task8(event){
    event.preventDefault();
    let year = +prompt("");
    let remainder = year%4;
    if (remainder === 0){
        if (year%100===0 && year%400!==0){
            alert("Рік " + year + " не є високосним");
        } else{
            alert("Рік " + year + " - високосний");
        }
    } else{
        alert("Рік " + year + " не є високосним");
    }
}

linksArr[8].addEventListener('click', task9);

function task9(event){
    event.preventDefault();
    let a = +prompt("");
    let strAlert = "";
    if (a === 0) {
        strAlert = "нульове";
    } else {
        if(a > 0){
            strAlert+="позитивне";
        } else if(a < 0){
            strAlert+="негативне";
        }
        if (a % 2 === 0) {
            strAlert+=" парне";
        } else {
            strAlert+= " непарне";
        }
    }
    alert(strAlert + " число");
}

linksArr[9].addEventListener('click', task10);

function task10(event){
    event.preventDefault();
    let a = +prompt("");
    let strAlert = "";
    if(a%2 ===0){
        strAlert+="парне";
    } else{
        strAlert+="непарне";
    }
    if(a<10){
        strAlert+=" однозначне";
    } else if(a<100){
        strAlert+=" двозначне";
    } else if (a<1000){
        strAlert+=" трьохзначне";
    }
    alert(strAlert + " число");
}

linksArr[10].addEventListener('click', task11);

function task11(event){
    event.preventDefault();
    let i = 0;
    while (++i < 5) alert(i);
    //1, 2, 3, 4 -префіксний інкремент спочатку міняє значення і, потім перевіряє на умову while, і далі виконується тіло while
    let j = 0;
    while (j++ < 5) alert(j);
    //1, 2, 3, 4, 5 -постфіксний інкремент спочатку перевіряє умову, потім міняє значення і вже далі виконується тіло
}

linksArr[11].addEventListener('click', task12);

function task12(event){
    event.preventDefault();
    for (let i = 0; i < 5; i++) alert(i);
    //0, 1, 2, 3, 4 - тут на відміну від попереднього завдання перевірка вже йде після виконання постфіксного інкременту
    for (let j = 0; j < 5; ++j) alert(j);
    //тут так само, j зміниться на 5, але в перевірку більше не пройде, тому тіло циклу не виконається і 5 не буде показана
}

linksArr[12].addEventListener('click', task13);

function task13(event){
    event.preventDefault();
    for(let i = 2; i <= 10; i+=2) alert(i);
}

linksArr[13].addEventListener('click', task14);

function task14(event){
    event.preventDefault();
    let i = 0;
    while (i<3){
        alert(`number ${i}!`);
        i++;
    }
}

linksArr[14].addEventListener('click', task15);

function task15(event){
    event.preventDefault();
    let i = 0;
    do{
       i = prompt("");
       console.log(i);
    } while (i!==null && i <= 100);
}

linksArr[15].addEventListener('click', task16);

function task16(event) {
    event.preventDefault();
    let intervalStart = 2;
    let intervalEnd = +prompt("");
    let primes = [];
    for (let i = intervalStart; i < intervalEnd; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    alert(primes);
}

function isPrime(number) {
    if (number === 2) {
        return true;
    }
    for (let j = 2; j < number; j++) {
        if (number % j === 0) {
            return false;
        }
    }
    return true;
}

linksArr[16].addEventListener('click', task17);

function task17(event) {
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    alert((a + b) / 2);
}

linksArr[17].addEventListener('click', task18);

function task18(event) {
    event.preventDefault();
    let a = +prompt("");
    alert(a * a);
}

linksArr[18].addEventListener('click', task19);

function task19(event) {
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    let c = +prompt("");
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    alert(max - min);
}

linksArr[19].addEventListener('click', task20);

function task20(event) {
    event.preventDefault();
    let a = +prompt("");
    if (a % 2 === 0) {
        alert("парне");
    } else {
        alert("непарне");
    }
}

linksArr[20].addEventListener('click', task21);

function task21(event) {
    event.preventDefault();
    let a = +prompt("");
    let sum = 0;
    let numbersAmount = 0;
    while (a) {
        let temp = a % 10;
        a = (a - temp) / 10;
        sum += temp;
        numbersAmount++;
    }
    alert(`Кількість цифр: ${numbersAmount}, сумма цифр: ${sum}`);
}

linksArr[21].addEventListener('click', task22);

function task22(event) {
    event.preventDefault();
    let coefficient = 2.54;
    let option = confirm("Для переведення сантиметрів в дюйм, натисніть 'ОК', для протилежної операції - 'Скасування'");
    let number = +prompt();
    if (option) {
        alert(`${number} см = ${number / coefficient} дюймів`);
    } else {
        alert(`${number} дюймів = ${number * coefficient} см`);
    }
}

linksArr[22].addEventListener('click', task23);

function task23(event) {
    event.preventDefault();
    let questions = [
        {
            question: "Яка країна найбільша за площею у Європі?",
            options: [
                "Польща",
                "Німеччина",
                "Україна"
            ],
            correct: 3
        },
        {
            question: "Що зображено на державному прапорі Канади?",
            options: [
                "Кленовий лист",
                "Каштан",
                "Вафля"
            ],
            correct: 1
        },
        {
            question: "Які три основні кольори?",
            options: [
                "Білий, чорний, сірий",
                "Червоний, зелений, синій",
                "Жовтий, рожевий, блакитний"
            ],
            correct: 2
        },
    ]
    let usedQuestions = [];
    let points = 0;
    for (const question of questions) {
        let currentQuestion = -1;
        do {
            currentQuestion = Math.floor(Math.random() * (questions.length + 1));
        } while (usedQuestions.includes(currentQuestion));
        usedQuestions.push(currentQuestion);
        let answer = +prompt(`${question.question}\n${getOptionsString(question.options)}\n` +
            `Введіть ваш варіант відповіді`);
        if (answer === question.correct) {
            alert("Правильна відповідь!");
            points++;
        } else {
            alert("Неправильна відповідь!");
            break;
        }
    }
    if (points === questions.length) {
        alert("Вітаємо з перемогою!");
    } else {
        alert(`Пощастить наступного разу.\nНабрано балів: ${points}`);
    }
}

function getOptionsString(options) {
    let optionsString = "";
    options.forEach((item, index) => {
        optionsString += `${index + 1}. ${item}\n`;
    })
    return optionsString;
}

linksArr[23].addEventListener('click', task24);

function task24(event) {
    event.preventDefault();
    let a = +prompt("");
    let result = 1;
    let isEven = false;
    if (a % 2 === 0) {
        isEven = true;
        result = 0;
    }
    while (a) {
        let temp = a % 10;
        a = (a - temp) / 10;
        if (isEven) {
            result += temp;
        } else {
            result *= temp;
        }
    }
    alert(result);
}

linksArr[24].addEventListener('click', task25);

function task25(event) {
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    let c = +prompt("");
    if (a + b > c && a + c > b && b + c > a) {
        alert("Такий трикутник існує");
    } else {
        alert("Такий трикутник не існує");
    }
}

linksArr[25].addEventListener('click', task26);

function task26(event) {
    event.preventDefault();
    let A = [4, 9];
    let R = 10;
    let distanceToA = Math.sqrt(A[0] * A[0] + A[1] * A[1]);
    if (distanceToA < R) {
        alert(`Точка з координатами ${A} лежить у колі з радіусом ${R}`);
    } else {
        alert(`Точка з координатами ${A} не лежить у колі з радіусом ${R}`);
    }
}

linksArr[26].addEventListener('click', task27);

function task27(event) {
    event.preventDefault();
    alert("let user = {};\n" +
        "user.name = \"John\";\n" +
        "user.surname = \"Smith\";\n" +
        "user.name = \"Pete\";\n" +
        "delete user.name;")
}

linksArr[27].addEventListener('click', task28);

function task28(event) {
    event.preventDefault();
    const user = {
        name: "John"
    };
    user.name = "Pete";
    //const не дозволяє записати нове значення саме в змінну user, але об'єкт(його властивості), що об'явлено як константу є мутабельним
    alert(user.name);
}

linksArr[28].addEventListener('click', task29);

function task29(event) {
    event.preventDefault();
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
    let sum = 0;
    for (let person in salaries) {
        sum += salaries[person];
    }
    alert(sum);
}

linksArr[29].addEventListener('click', task30);

function task30(event) {
    event.preventDefault();
    let obj = {
        num1: 2,
        str1: "str1",
        num2: 3
    }
    multiplyNumeric(obj);
    alert(JSON.stringify(obj));
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}