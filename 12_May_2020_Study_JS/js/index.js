/* function init() {
    window.document.querySelectorAll('div').forEach(function (e) { e.style.border = "1px solid red"; });

}

init(); */


var a = 1;
var b = 2;
var c = a + b;
console.log(c);

/* const는 상수이다. 한번 선언이 되면 값을 바꿀 수 없다. */
// 장점 or 단점 / 다른 사용자에 의해 변수값이 새롭게 초기화 될 수 있기 때문에, 자바스크립트를 개발한 사람들은 var 보다는 const나 let 사용을 권장한다.
// 자바스크립트 구리다고 말하던 사람들은 호이스팅때문이었는데 var 변수는 function 변수라고 하고 let, const -> block 변수.
// 중괄호를 벗어나면 function 이 안되기 때문에 변수관리가 용이하다.
// 스파게티 코드? => 지저분하게 꼬여있는 코드
const a = 1;

// let은 재초기화가 가능하다.
let b = 1;


