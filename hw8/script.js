let linksArr = document.querySelectorAll('a');

linksArr[0].addEventListener('click', task1);

function task1(event) {
    event.preventDefault();
    let admin;
    let name = 'Katherine';
    admin = name;
    alert(admin);
}

linksArr[1].addEventListener('click', task2);

function task2(event) {
    event.preventDefault();
    alert('Константу birthday можна записати великими літерами, тому що вона відома нам на початку, константа ж age ' +
        'вираховується в процесі виконання скрипта, тому її треба записати малими літерами');
}

linksArr[2].addEventListener('click', task3);

function task3(event) {
    event.preventDefault();
    let name = "Ilya " ;
    alert ( ` hello ${ 1 } ` ); // hello 1
    alert ( ` hello ${ "name " } ` ); // hello name, тому що name в кавичках
    alert ( ` hello ${ name } ` ); // hello ilya
}

linksArr[3].addEventListener('click', task4);

function task4(event){
    event.preventDefault();
    let firstExpression = "" + 1 + 0;
    let secondExpression = "" - 1 + 0;
    let thirdExpression = true + false;
    let fourthExpression = 6 / "3";
    let fifthExpression =  "2" * "3";
    let sixthExpression = 4 + 5 + "px";
    let seventhExpression = "$" + 4 + 5;
    let eighthExpression = "4" - 2;
    let ninthExpression = "4px" - 2;
    let tenthExpression = 7/0;
    let eleventhExpression = " – 9 " + 5;
    let twelfthExpression = " – 9 " - 5;
    let thirteenthExpression = null + 1;
    let fourteenthExpression = undefined + 1;
    alert(`"" + 1 + 0 = ${firstExpression}\n` + //10, тому що ""+1 = "1" - рядок, і "1"+0= "10" - також рядок
    `"" - 1 + 0 = ${secondExpression}\n` + //-1, тому що в цьому випадку - перетворює операнди на числа і немає +, щоби перетворити вираз в рядок
    `true + false = ${thirdExpression}\n` + //1, немає рядків, тому все складається як числа, true=1, false=0, 1+0=1
    `6 / "3" = ${fourthExpression}\n` + //2, немає +, тому перетворення до рядка не відбувається, а відбувається перетворення на число
    `"2" * "3" = ${fifthExpression}\n` + //6, за такою ж логікою, як і в попередньому виразі
    `4 + 5 + "px" = ${sixthExpression}\n` + //9px, зліва направо - спочатку виконується складання чисел, далі перетворення на рядок і складання рядків
    `"$" + 4 + 5 = ${seventhExpression}\n` + //$45, числа перетворюються в рядки та складаються рядки
    `"4" - 2 = ${eighthExpression}\n` + //2, за такою ж логікою як і в другому виразі
    `"4px" - 2 = ${ninthExpression}\n` + //NaN, 4px не перетворюється в число, тому видає NaN, NaN-1=NaN, бо результатом обчислення з NaN буде NaN
    `7/0 = ${tenthExpression}\n` + //Infinity
    `" – 9 " + 5 = ${eleventhExpression}\n` + //-9 5, + перетворює 5 в рядок
    `" – 9 " - 5 = ${twelfthExpression}\n` + //NaN, мінус в рядку " - 9 " не дозволяє бінарному мінусу перетворити рядок в число
    `null + 1 = ${thirteenthExpression}\n` + //1, при використанні математичних операторів null стає 0
    `undefined + 1 = ${fourteenthExpression}`); //NaN, при використанні математичних операторів undefined стає NaN
}

linksArr[4].addEventListener('click', task5);

function task5(event){
    event.preventDefault();
    let a = 1, b = 1;
    let c = ++a; //2, префіксний інкремент повертає нове значення
    let d = b++;//1, постфіксний інкремент повертає старе значення, при цьому aleft(b) вже покаже 2
    alert(`c = ${c}, d = ${d}`);
}

linksArr[5].addEventListener('click', task6);

function task6(event){
    event.preventDefault();
    let a = 2;
    let x = 1 + (a *= 2 ); //спочатку виконується множення та присвоєння в дужках, потім додавання
    alert(`a = ${a}, x=${x}`);
}

linksArr[6].addEventListener('click', task7);

function task7(event){
    event.preventDefault();
    alert(`5 > 4 - ${5>4}\n` + //true
        `"ананас" > "яблуко" - ${"ананас" > "яблуко"}\n` + //false, бо перший символ a < я
        `"2" > "12" - ${"2" > "12"}\n` + //true, бо перший символ 2 > 1
        `undefined == null - ${undefined == null}\n` + //true, ці значення дорівнюють один одному та не дорівнюють жодним іншим значенням
        `undefined === null - ${undefined === null}\n` + //false, вони мають різні типи
        `null == "\\n0\\n" - ${null == "\n0\n"}\n` + //false, null дорівнює лише undefined
        `null === +"\\n0\\n " - ${null === +"\n0\n "}`); //false, вони мають різні типи
}

linksArr[7].addEventListener('click', task8);

function task8(event){
    event.preventDefault();
    let name = prompt("What is your name?");
    alert(`Your name is ${name}`);
}

linksArr[8].addEventListener('click', task9);

function task9(event){
    event.preventDefault();
    if ("0") {
        alert( ' Привіт');
    } //alert виводиться, бо непустий рядок завжди true
}

linksArr[9].addEventListener('click', task10);

function task10(event){
    event.preventDefault();
    let answer = prompt("Яка офіційна назва JavaScript?");
    if (answer === "ECMAScript"){
        alert("Правильно!");
    } else {
        alert("Не знаєте? ECMAScript!")
    }
}

linksArr[10].addEventListener('click', task11);

function task11(event){
    event.preventDefault();
    let number = prompt("Введіть будь-яке число:");
    if (number > 0){
        alert('1');
    } else if (number < 0){
        alert('-1');
    } else {
        alert('0');
    }
}

linksArr[11].addEventListener('click', task12);

function task12(event){
    event.preventDefault();
    alert(`let result = (a + b < 4) ? "Мало" : "Багато";`);
}

linksArr[12].addEventListener('click', task13);

function task13(event){
    event.preventDefault();
    alert(`let message = (login=="Співробітник") ? "Привіт" : \n
                        (login=="Директор") ? "Добрий день!" : \n
                        (login=="") ? "Відсутній логін" : \n
                        "";`);
}

linksArr[13].addEventListener('click', task14);

function task14(event){
    event.preventDefault();
    alert( null || 2 || undefined ); //2 перше true значення
}

linksArr[14].addEventListener('click', task15);

function task15(event){
    event.preventDefault();
    alert(alert (1) || 2 || alert(3));//спочатку виконається перший алерт (який повертає undefined), але потім другий алерт виведе 2 - перше true значення
}

linksArr[15].addEventListener('click', task16);

function task16(event){
    event.preventDefault();
    alert(1 && null && 2);//null - перше false значення
}

linksArr[16].addEventListener('click', task17);

function task17(event){
    event.preventDefault();
    alert(alert(1) && alert(2));//спочатку виконається перший алерт (який повертає undefined), тому наступний алерт виведе undefined, перше false значення
}

linksArr[17].addEventListener('click', task18);

function task18(event){
    event.preventDefault();
    alert(null || 2 && 3 || 4 );//3, 2 && 3 виконується першим, через вищий пріорітет &&, далі вираз перетворюється в null || 3 || 4, 3 - перше true значення
}

linksArr[18].addEventListener('click', task19);

function task19(event){
    event.preventDefault();
    alert("if(age>= 14 && age <= 90){}");
}

linksArr[19].addEventListener('click', task20);

function task20(event){
    event.preventDefault();
    alert("if (!(age >= 14 && age <= 90)){}\n" +
        "if (age < 14 || age > 90){}");
}

linksArr[20].addEventListener('click', task21);

function task21(event){
    event.preventDefault();
    if (-1 || 0) alert( 'first');//виконується, -1 - true значення
    if (-1 && 0) alert( 'second' );// не виконується, через те що 0 - false
    if (null || -1 && 1) alert('third' );//виконується, спочатку виконується вираз -1 && 1, поверне 1, після чого виконується null || 1, де 1 - true значення
}

linksArr[21].addEventListener('click', task22);

function task22(event){
    event.preventDefault();
    let login = prompt("Введіть логін:");
    if (login === "Адмін"){
        let password = prompt("Введіть пароль:");
        if (password === "" || password === null){
            alert("Скасовано");
        } else if (password === "я головний"){
            alert("Здрастуйте!");
        } else {
            alert("Невірний пароль");
        }
    } else if (login === "" || login === null){
        alert("Скасовано");
    } else {
        alert("Я вас не знаю");
    }
}

linksArr[22].addEventListener('click', task23);

function task23(event){
    event.preventDefault();
    alert("if (browser === 'Edge'){\n" +
    "alert('You've got the Edge!');\n" +
    "} else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera' {\n" +
    "alert('Okay we support these browsers too');\n" +
    "} else {\n" +
    "alert('We hope that this page looks ok')\n" +
    "}");
}

linksArr[23].addEventListener('click', task24);

function task24(event){
    event.preventDefault();
    alert("let a = +prompt( 'a?', '');\n" +
    "switch(a){\n" +
    "case 0:\n" +
        "alert(0);\n" +
        "break;\n" +
    "case 1:\n" +
        "alert(1);\n" +
        "break;\n" +
    "case 2:\n" +
    "case 3:\n" +
        "alert('2,3');\n" +
        "break;")
}

linksArr[24].addEventListener('click', task25);

function task25(event){
    event.preventDefault();
    let a = prompt('Input a number');
    if(a > 0) {
        alert(++a)
    } else {
        alert(a);
    }
}

linksArr[25].addEventListener('click', task26);

function task26(event){
    event.preventDefault();
    let a = prompt('Input a number');
    if(a > 0) {
        alert(++a);
    } else {
        alert(a-2);
    }
}

linksArr[26].addEventListener('click', task27);

function task27(event){
    event.preventDefault();
    let a = Number(prompt("Input a number"));
    if (a > 0){
        alert(++a);
    } else if (a < 0){
        alert(a - 2);
    } else if (a === 0){
        alert(a = 10);
    }
}

linksArr[27].addEventListener('click', task28);

function task28(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    let c = prompt("Input the third number");
    let numArr = [a, b, c];
    let counter = 0;
    numArr.forEach((element) => {
        if(element > 0){
            counter++;
        }
    })
    alert(counter);
}

linksArr[28].addEventListener('click', task29);

function task29(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    let c = prompt("Input the third number");
    let numArr = [a, b, c];
    let positiveCounter = 0;
    let negativeCounter = 0;
    numArr.forEach((element) => {
        if(element > 0){
            positiveCounter++;
        } else if (element < 0){
            negativeCounter++;
        }
    })
    alert("Кількість позитивних чисел: " + positiveCounter + "\nКількість негативних чисел: " + negativeCounter);
}

linksArr[29].addEventListener('click', task30);

function task30(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    if (a > b){
        alert(a + " is the biggest number");
    } else if(b > a){
        alert(b + " is the biggest number");
    } else {
        alert("You should type two different numbers");
    }
}

linksArr[30].addEventListener('click', task31);

function task31(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    if (a > b){
        alert(b + " is the smallest number");
    } else if(b > a){
        alert(a + " is the smallest number");
    } else {
        alert("You should type two different numbers");
    }
}

linksArr[31].addEventListener('click', task32);

function task32(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    if (a > b){
        alert(a + " is the biggest number\n" +
        b + " is the smallest number");
    } else if(b > a){
        alert(b + " is the biggest number\n" +
        a + " is the smallest number");
    } else {
        alert("You should type two different numbers");
    }
}

linksArr[32].addEventListener('click', task33);

function task33(event){
    event.preventDefault();
    let a = prompt("Input the first number");
    let b = prompt("Input the second number");
    if (a > b) {
        [a, b] = [b, a]
    } else if (a === b) {
        alert("You should type two different numbers");
    }
    alert("a = " + a + " b = " + b);
}

linksArr[33].addEventListener('click', task34);

function task34(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    if (a !== b){
        a = b = a + b;
    } else {
        a = b = 0;
    }
    alert("a = " + a + "\nb = " + b);
}

linksArr[34].addEventListener('click', task35);

function task35(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    if (a !== b && a > b){
        b = a;
    } else if (a !== b && b > a){
        a = b;
    } else {
        a = b = 0;
    }
    alert("a = " + a + "\nb = " + b);
}

linksArr[35].addEventListener('click', task36);

function task36(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    let c = Number(prompt("Input the third number"));
    if (a < b && a < c){
        alert(a + " - the smallest number");
    } else if (b < a && b < c){
        alert(b + " - the smallest number");
    } else if (c < a && c < b){
        alert(c + " - the smallest number");
    } else {
        alert("You should type three different numbers");
    }
}

linksArr[36].addEventListener('click', task37);

function task37(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    let c = Number(prompt("Input the third number"));
    if (a > b && a > c){
        if (b > c){
            alert(b + " is the middle number");
        } else{
            alert(c + " is the middle number");
        }
    } else if (b > a && b > c){
        if (a > c){
            alert(a + " is the middle number");
        } else{
            alert(c + " is the middle number");
        }
    } else if (c > a && c > b){
        if (a > b){
            alert(a + " is the middle number");
        } else{
            alert(b + " is the middle number");
        }
    } else if (a === b || a === c || b === c) {
        alert("You should type three different numbers");
    }
}

linksArr[37].addEventListener('click', task38);

function task38(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    let c = Number(prompt("Input the third number"));
    if (a > b && a > c){
        if (b > c){
            alert (c + " is the smallest number");
        } else {
            alert(b + " is the smallest number");
        }
        alert(a + " is the biggest number");
    } else if (b > a && b > c){
        if (a > c){
            alert(c + " is the smallest number");
        } else {
            alert(a + "is the smallest number");
        }
        alert(b + " is the biggest number");
    } else if (c > a && c > b){
        if (a > b){
            alert(b + " is the smallest number");
        } else {
            alert(a + " is the smallest number");
        }
        alert(c + " is the biggest number");
    } else if (a === b || a === c || b === c){
        alert("You should type three different numbers");
    }
}

linksArr[38].addEventListener('click', task39);

function task39(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    let c = Number(prompt("Input the third number"));
    let sum;
    if (a > b && a > c){
        if(b > c){
            sum = a + b;
        } else {
            sum = a + c;
        }
    } else if (b > a && b > c){
        if (a > c){
            sum = b + a;
        } else {
            sum = b + c;
        }
    } else if (c > a && c > b){
        if (a > b){
            sum = c + a;
        } else {
            sum = c + b;
        }
    } else if (a === b || a === c || b === c){
        alert("You should type three different numbers");
    }
    alert(sum);
}

linksArr[39].addEventListener('click', task40);

function task40(event){
    event.preventDefault();
    let a = Number(prompt("Input the first number"));
    let b = Number(prompt("Input the second number"));
    let c = Number(prompt("Input the third number"));
    if (a === b && b === c){
        alert("One of numbers should be different");
    } else if (a === b){
        alert(c);
    } else if (a === c){
        alert(b);
    } else {
        alert(a);
    }
}