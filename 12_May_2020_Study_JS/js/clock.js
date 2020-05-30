const clockContainer = document.querySelector(".clock"),
    clockText = clockContainer.querySelector(".clock_text");




function getTime() {
    // 선언과 초기화 동시에
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    // 빽틱 활용 ***
    // 변수명을 String 과 결합할때 + 를 사용하지않고 그대로 하나의 문자열로 쓸수 있게 해줌
    // 예쁘게 시,분,초 출력해주기
    const now = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    /* clock.innerHTML = hours + " : " + minutes + " : " + seconds; */
    clockText.innerHTML = now;


}


function init() {
    getTime();
    // 1초마다 getTime을 초기화
    setInterval(getTime, 1000);

}

init();