let linksArr = document.querySelectorAll('a');
linksArr[0].addEventListener('click', task1);

function task1(event) {
    event.preventDefault();
    let objectExample = {
        name: "there is name",
        age: 21,
        "some other property": "property",
    }
    function isEmpty(obj){
        let objectPropertiesArr = Object.getOwnPropertyNames(obj);
        return objectPropertiesArr.length === 0;
    }
    alert(isEmpty(objectExample));
}

linksArr[1].addEventListener('click', task2);

function task2(event) {
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

linksArr[2].addEventListener('click', task3);

function task3(event) {
    event.preventDefault();
    readNumber();
    function readNumber(){
        let input = "Some text for NaN to be true";
        while (isNaN(+input)){
            input = prompt("");
            if (input == null || input === ""){
                return null;
            }
        }
    }
}

linksArr[3].addEventListener('click', task4);

function task4(event) {
    event.preventDefault();
    let minNum = +prompt("");
    let maxNum = +prompt("");
    alert(random(minNum, maxNum));
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
}

linksArr[4].addEventListener('click', task5);

function task5(event) {
    event.preventDefault();
    let minNum = +prompt("");
    let maxNum = +prompt("");
    alert(randomInteger(minNum, maxNum));
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

linksArr[5].addEventListener('click', task6);

function task6(event) {
    event.preventDefault();
    let str = "вася";
    alert(ucFirst(str));
    function ucFirst(string){
        return string[0].toUpperCase() + string.slice(1);
    }
}

linksArr[6].addEventListener('click', task7);

function task7(event) {
    event.preventDefault();
    let str = "wdlkmwf viagra XXX"
    alert(checkSpam(str));
    function checkSpam(string){
        string = string.toLowerCase();
        return string.includes("xxx")||string.includes("viagra");
    }
}

linksArr[7].addEventListener('click', task8);

function task8(event) {
    event.preventDefault();
    let string = "lorem ipsum neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
    let max = 20;
    alert(truncate(string, max));
    function truncate(str, maxlength){
        if(str.length > maxlength){
            str = str.slice(0, maxlength-3) + "...";
        }
        return str;
    }
}

linksArr[8].addEventListener('click', task9);

function task9(event) {
    event.preventDefault();
    let string = "$100";
    alert(extractCurrencyValue(string));
    function extractCurrencyValue(str){
        return +str.slice(1);
    }
}

linksArr[9].addEventListener('click', task10);

function task10(event) {
    event.preventDefault();
    alert(sumInput());
    function sumInput() {
        let numbers = [];
        while(true) {
            let input = prompt("");
            if (input === null || input === "" || isNaN(+input)) {
                break;
            }
            numbers.push(+input);
        }
        let sum = 0;
        numbers.forEach(number => sum += number);
        return sum;
    }
}

linksArr[10].addEventListener('click', task11);

function task11(event) {
    event.preventDefault();
    checkAge(18);
    function checkAge (age) {
        if (age > 18) {
            return true;
        } else {
            // else можна спокійно прибрати з цього коду, так як якщо age > 18, то функція поверне значення і завершить виконання
            // при цьому якщо age <= 18, то виконається код під блоком if, тобто той же самий, що зараз в блоці else
            return confirm( ' Батьки дозволили ?');
        }
    }
}

linksArr[11].addEventListener('click', task12);

function task12(event) {
    event.preventDefault();
    alert(checkAge(18));
    alert(checkAge2(18));
    function checkAge (age) {
        return age > 18 ? true : confirm('Батьки дозволили?');
    }
    function checkAge2 (age) {
        return age > 18 || confirm('Батьки дозволили?');
    }
}

linksArr[12].addEventListener('click', task13);

function task13(event) {
    event.preventDefault();
    let a = +prompt("");
    let b = +prompt("");
    alert(min(a,b));
    function min(a, b) {
        return a < b ? a : b;
    }
}

linksArr[13].addEventListener('click', task14);

function task14(event) {
    event.preventDefault();
    let x = +prompt("");
    let n = +prompt("");
    alert(pow(x,n));
    function pow(x, n) {
        if (n === 0) {
            return 1;
        }
        if (x === 0 || x === 1 || n === 1) {
            return x;
        }
        let power = x;
        for (let i = 1; i < n; i++) {
            power *= x;
        }
        return power;
    }
}

linksArr[14].addEventListener('click', task15);

function task15(event) {
    event.preventDefault();
    function ask(question, yes, no) {
        if (confirm(question)) yes( )
        else no( );
    }
    ask (
        "Ви згодні?",
        () => alert("Ви погодилися."),
        () => alert ("Ви скасували виконання.")
    );
}

linksArr[15].addEventListener('click', task16);

function task16(event) {
    event.preventDefault();
    let income = 3333;
    let outcome = 1750;
    let palmCost = 8000;
    function calcMonthsToBuyPalm() {
        let months = 0;
        let birds = 0;
        while (birds < palmCost) {
            birds += income - outcome;
            months++;
        }
        return months;
    }
    alert(calcMonthsToBuyPalm());
}

linksArr[16].addEventListener('click', task17);

function task17(event) {
    event.preventDefault();
    alert(sumNegatives());
    function sumNegatives() {
        let negatives = [];
        for (let i = 0; i < 10; i++) {
            let num = +prompt("");
            if (num < 0) {
                negatives.push(num);
            }
        }
        let sum = 0;
        negatives.forEach(num => sum += num);
        return sum;
    }
}





