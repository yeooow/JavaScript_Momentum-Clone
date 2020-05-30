const body = document.querySelector("body"),
    locationText = document.querySelector(".location_text");
    console.log(locationText);

const API_KEY =
    "t1pJMX9l-VW7NvpwM6DaQ40QMXN5wtkDuOV0LxZzGBY";

const IMAGEURL =
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&orientation=landscape&query=landscape`;


function saveBackGround(url, city, country, name) {
    
    const savedImage = localStorage.getItem("background");
    if(savedImage !== null){
        localStorage.removeItem("background");
    }

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
 
    const imageObject = {
        url : url,
        expireDate : expireDate,
        city : city,
        country : country,
        name : name
    };
    localStorage.setItem("background",JSON.stringify(imageObject));
    // 불러와야겠다.
    loadBackGround();

}

function getBackGround() {
    // API URL 로 요청하고, 반환받아서, localStorage에 저장하고, 
    // fetch(IMAGEURL)
    // .then(function (response){
    //     return response.json();
    // })
    // .then(function (myJson){
    //     console.log(JSON.stringify(myJson.urls.full));
    // });
    
    fetch(IMAGEURL)
        .then(response => response.json())
        .then(json => {
            const image = json;
            if (image.urls &&
                image.urls.full &&
                image.location.city &&
                image.location.country &&
                image.location.name) {
                const full = image.urls.full;
                const city = image.location.city;
                const country = image.location.country;
                const name = image.location.name;
                // 불러온 사진URL과, 도시이름과, 나라이름과, NAME을 localStorage에 저장을 해야한다.
                saveBackGround(full, city, country, name);
            }else{
                 // 만약에 실패하면 다시 요청.
               getBackGround();
            }
            
        });
   
}


function loadBackGround() {
    // 저장된 키값은 변경될 일이 없고, 다시 선언되지 않아야 하므로,
    // 상수인 const로 선언합니다.
    const savedImage = localStorage.getItem("background");
    if (savedImage === null) {
        //  로컬 스토리지에 background라는 키 값을 가진 value가 없는 조건
        getBackGround();
    } else {
        const parsedImageObject = JSON.parse(savedImage);
        // 있는 조건
        // 그려주면 되겠다.
        // 오늘 날짜를 일단 불러오고
        const today = new Date();
        if(today > parsedImageObject.expireDate){
            // 유통기한을 오늘 날짜 +1 저장해놓고
            // 불러올때 유통기한이 오늘보다 작다면 다시 요청
            getBackGround();
        }else{
            body.style.background = `url(${parsedImageObject.url})`;
            locationText.innerHTML = 
            `${parsedImageObject.name}, ${parsedImageObject.city}, ${parsedImageObject.country}`;
        }
        
        // 불러올때 유통기한이 남았으면, 그냥 받아온걸 쓴다.
    }

}


function init() {
    loadBackGround();

}

init();