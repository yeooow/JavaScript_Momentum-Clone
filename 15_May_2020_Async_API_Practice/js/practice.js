const body = document.querySelector(".bodyWrapper");




function requestAPI() {

    const URL = "https://dapi.kakao.com/v3/search/book";
    const target = "target=title";
    const query = "query='JAVA'";
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "KakaoAK 97f706a0db88e3572923a0d9150c6cbc");



    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const myRequest = new Request(`${URL}?${target}&${query}`, myInit);

    // fetch(myRequest)
    //     .then(function (response) {
    //         return response.json();
    //     }).then(function (myJson) {

    //         const finalData = JSON.stringify(myJson);

    //         localStorage.setItem("myData", finalData);
    //         drawOnBody(finalData);
    //     });

    fetch(myRequest)
        .then(response => response.json())
        .then(json => {

            const finalData = JSON.stringify(json);

            localStorage.setItem("myData", finalData);

            drawOnBody(finalData);

        });
}

function drawOnBody(data) {

    const finalJsonData = JSON.parse(data);

    for (var i = 0; i < finalJsonData.documents.length; i++) {
        body.innerHTML += finalJsonData.documents[i].title +
            "<br>";
    }

}

function loadSearch() {

    const myData = localStorage.getItem("myData");

    if (myData === null) { // javascript에서 === 를 쓰는 이유 : 객체까지 완전히 일치하는지 
        // API 요청하기.
        console.log("값 없어");
        requestAPI();
    } else {
        // body에 그려줘~
        drawOnBody(myData);
        console.log("값 있어");
    }
}

function init() {
    loadSearch();

    // 옛날버전
    var arr = [1, 2, 3];
    var pow = arr.map(function (x) {
        return x * 3;
    })
    console.log(pow);

    // 최근버전(화살표 함수 사용)
    const arr2 = [1, 2, 3];
    const pow2 = arr2.map(x => x * 3);
    console.log(pow2);

    // this 
    const student = {
        name: "Sang-Yeop",
        age: 30
    }

    sayHello2(student.name, student.age);

    const student2 = {
        name: "Nan-yeong",
        age: 28
    }

    sayHello2(student2.name, student2.age);

    // prototype 으로 올려주기.
    Object.prototype.sayHello = function () {
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old.`);
    }

    // function sayHello() {

    //     console.log(`Hello, My name is ${student.name}. I am ${student.age} years old.`);

    //     // console.log(`Hello, My name is ${this.name}. I am ${this.age} years old.`);
    // }

    student.sayHello();
    student2.sayHello();


    function sayHello2(name, age) {
        console.log(`Hello, My name is ${name}. I am ${age} years old.`);
    }

    // test
    // setInterval(getSeconds, 1000);

    //function getSeconds() {
        // date 변수에 현재
        // const date = new Date();
        // const seconds = date.getSeconds();

        // 빽틱에 삼항연산자를 쓸 수 있다.
        // body.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;

        // const time = document.createElement("div");

        // time.className = "currenTime";
        // time.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;

        // body.appendChild(time);
    // }




}

init();