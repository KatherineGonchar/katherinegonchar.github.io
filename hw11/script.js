let linksArr = document.querySelectorAll('a');
linksArr[0].addEventListener('click', task1);

function task1(event) {
    event.preventDefault();
    let myshortstring = "-background-color";
    alert(camelize(myshortstring));
    function camelize(str){
        let strArr = str.split("-");
        for (let i = 1; i < strArr.length; i++){
            strArr[i] = ucFirst(strArr[i]);
        }
        return strArr.join("");
    }
    function ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
}

linksArr[1].addEventListener('click', task2);

function task2(event) {
    event.preventDefault();
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    alert(arr);
    alert(filtered);
    function filterRange(array, a, b){
        [a, b] = a < b ? [a, b] : [b, a];
        return array.filter(number => a <= number && number <= b);
    }
}

linksArr[2].addEventListener('click', task3);

function task3(event) {
    event.preventDefault();
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    alert(arr);
    function filterRangeInPlace(array, a, b){
        [a, b] = a < b ? [a, b] : [b, a];
        for (let i = 0; i < array.length; i++){
            if (array[i] < a || array[i] > b){
                array.splice(i, 1);
            }
        }
    }
}

linksArr[3].addEventListener('click', task4);

function task4(event) {
    event.preventDefault();
    function compareNumeric(a, b){
        if (a > b) return -1;
        if (a === b) return 0;
        if (a < b) return 1;
    }
    let arr = [5, 2, 1, -10, 8];
    arr.sort(compareNumeric);
    alert(arr);
}

linksArr[4].addEventListener('click', task5);

function task5(event) {
    event.preventDefault();
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert(arr);
    alert(sorted);
    function copySorted(array){
        let copy = [...array];
        copy.sort();
        return copy;
    }
}

linksArr[5].addEventListener('click', task6);

function task6(event) {
    event.preventDefault();
    let a = +prompt("input a");
    let action = prompt("choose action: +, -, *, /, %");
    let b = +prompt("input b");
    alert(calculator(a, b, action));
    function calculator(a, b, action) {
        switch (action) {
            case "+" :
                return a + b;
            case "-" :
                return a - b;
            case "*" :
                return a * b;
            case "/" :
                return a / b;
            case "%" :
                return a * b / 100;
        }
    }
}

linksArr[6].addEventListener('click', task7);

function task7(event) {
    event.preventDefault();
    let vasya = { name: "Вася", age: 25};
    let petya = { name: "Петя", age: 30};
    let masha = { name: "Маша", age: 28};
    let users = [ vasya, petya, masha ];
    let names = [];
    for (let i = 0; i < users.length; i++){
        names.push(users[i].name);
    }
    alert(names);
}

linksArr[7].addEventListener('click', task8);

function task8(event) {
    event.preventDefault();
    let vasya = {name : " Вася ", age: 25};
    let petya = {name : " Петро ", age: 30};
    let masha = {name : " Маша ", age: 28};

    let arr = [ vasya , petya , masha ] ;

    sortByAge ( arr );
    alert( arr [0].name); // Вася
    alert ( arr [1].name); // Маша
    alert ( arr [2].name); // Петро

    function sortByAge(array){
        array.sort((a, b) => a.age - b.age);
        return array;
    }
}

linksArr[8].addEventListener('click', task9);

function task9(event) {
    event.preventDefault();
    let vasya = { name: "Вася", age: 25};
    let petya = { name: "Петя", age: 30};
    let masha = { name: "Маша", age: 29};
    let arr = [ vasya, petya, masha ];
    alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
    function getAverageAge(array){
        let nSum = 0;
        for(let i = 0; i < array.length; i++){
            nSum += array[i].age;
        }
        return nSum/array.length;
    }
}

linksArr[9].addEventListener('click', task10);

function task10(event) {
    event.preventDefault();
    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "крішна", ":-O"];
    alert (unique (strings)); // кришна, харе, :-O
    function unique(arr){
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
}

linksArr[10].addEventListener('click', task11);

function task11(event){
    event.preventDefault();
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    alert(unique(values)); // Hare,Krishna,:-O
}

linksArr[11].addEventListener('click', task12);

function task12(event){
    event.preventDefault();
    function makeCounter() {
        let count = 0;
        return function() {
            return count++; };}
    let counter = makeCounter();
    let counter2 = makeCounter();
    alert (counter ()); // 0
    alert (counter ()); // 1
    alert (counter2 ()); // 0 Під час оголошення першого каунтеру запускається функція мейкКаунтер, де каунт = 0, при першому альорті каунт все ще довівнює 0, але вже після return значення каунт = 1, тому на другому альорті ми бачимо 1
    alert (counter2 ()); // 1 Все те саме відбувається під час оголошення другого каунтеру, вони є незалежні один від одного
}

linksArr[12].addEventListener('click', task13);

function task13(event) {
    event.preventDefault();
    function Counter() {
        let count = 0;
        this.up = function() {
            return ++count;
        };
        this.down = function() {
            return - count;
        };
    }
    let counter = new Counter();
    alert(counter.up()); // 1
    alert(counter.up()); // 2
    alert(counter.down() ); // -2 Вкладені функції створюються в межах єдиного зовнішнього лексичного середовища, тому всі дії виконуються з однією спільною змінною каунт
}

linksArr[13].addEventListener('click', task14);

function task14(event) {
    event.preventDefault();
    alert(factorial(5));
    function factorial(n){
        if (n === 0 || n === 1){
            return 1;
        }
        return n * factorial(n-1);
    }
}