const nameContainer = document.querySelector(".myName");

function drawName(name) {
    nameContainer.innerHTML = "";
    const drawName = document.createElement("span");
    drawName.className = "name_text";
    drawName.innerHTML = `Hello ! ${name}!`;
    nameContainer.appendChild(drawName);
}

function handleSubmit(event) {
    // 이벤트 버블링을 막아야한다. (페이지 새로고침 막아야하기 때문)
    event.preventDefault();
    // 이벤트가 일어나는 곳이 폼이고
    const form = event.target;
    // 그 인풋안에 폼
    const input = form.querySelector("input");
    const name = input.value;
    localStorage.setItem("username", name);
    // 입력받은 이름을 출력해주면 된다.
    drawName(name);
}

function drawInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "name_input";
    input.placeholder = "Type your name here!";

    const form = document.createElement("form");

    form.addEventListener("submit", handleSubmit);

    form.appendChild(input);
    nameContainer.appendChild(form);
}

function checkName() {
    const name = localStorage.getItem("username");
    if (name === null) {
        // 처음 방문한 사람.
        // 이름을 물어봐야 됨.
        drawInput();

    } else {
        // 이름을 아니까, 반겨주면 됨.
        drawName(name);
    }
}


function init() {
    checkName();

    
}

init();