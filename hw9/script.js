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