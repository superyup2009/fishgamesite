startbtn = document.querySelector(".btn-3");
stopfishbtn = document.querySelector(".btn-2");
getfishbtn = document.querySelector(".btn-1");
nowfishtext = document.querySelector(".div-2")
let money_div = document.querySelector(".money");
let start = 0
startbtn.addEventListener("click", () => {
    if(start == 0){
        start = 1;
        nowfishtext.textContent = '낚시하기 딱 좋은 날씨네!';
        nowfishtext.style.backgroundColor = 'green';
        init();
    }
})
let money = 0;
let game_start;
let random_n;
let random_n1;
function init() {
    game_start = setInterval(() => {
        random_n = Math.floor(Math.random()*(10-1+1)) + 1;

        if (random_n == 1) {
            nowfishtext.style.backgroundColor = 'red';
            nowfishtext.textContent = '!!! 낚싯대가 흔들린다!';
        }
        else if (random_n == 2) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '기다리는중..';
        }
        else if (random_n == 3) {
            nowfishtext.style.backgroundColor = 'red';
            nowfishtext.textContent = '!!! 앗! 집에 가고싶다!';
        }
        else if (random_n == 4) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '하암...';
        }
        else if (random_n == 5) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '언제 올라오나..';
        }
        else if (random_n == 6) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '좋은 물고기가 낚였으면..';
        }
        else if (random_n == 7) {
            nowfishtext.style.backgroundColor = 'red';
            nowfishtext.textContent = '!!! 뭔가 까먹은듯 만듯!!';
        }
        else if (random_n == 8) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '심심하당..';
        }
        else if (random_n == 9) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '잠이 온다..';
        }
        else if (random_n == 10) {
            nowfishtext.style.backgroundColor = 'green';
            nowfishtext.textContent = '언제 올라올까?';
        }
    }, 1000);
}

stopfishbtn.addEventListener("click", () => {
    nowfishtext.style.backgroundColor = 'blue';
    nowfishtext.textContent = '낚시를 시작해주세요';
    start = 0

    clearInterval(game_start);
})

getfishbtn.addEventListener("click", () => {

    if(start == 1){
        if(random_n == 1){
            random_n1 = Math.floor(Math.random()*(13-1+1)) + 1;
            clearInterval(game_start);
            
            nowfishtext.style.backgroundColor = 'blue';
            nowfishtext.textContent = '낚시를 시작해주세요';
            if (random_n1 == 1){
                money += 100;
                alert("'금붕어'(이)가 잡혔다!!")
                alert("+100원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 2){
                money += 5800;
                alert("'바다거북'(이)가 잡혔다!!")
                alert("+5800원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 3){
                money += 180000;
                alert("'백상아리'(이)가 잡혔다!!")
                alert("+180000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 4){
                money -= 500;
                alert("'비닐봉지'(이)가 낚였다..")
                alert("처리비 -500원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 5){
                money += 3000;
                alert("'곰치'(이)가 잡혔다!!")
                alert("+3000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 6){
                money += 5000;
                alert("'갈치'(이)가 잡혔다!!")
                alert("+5000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 7){
                money += 15000;
                alert("'독도새우'(이)가 잡혔다!!")
                alert("+15000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 8){
                alert("'물고기 시체'(이)가 낚였다..")
                alert("+0원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 9){
                money -= 12000;
                alert("'폭탄'(이)가 낚였다..")
                alert("처리비 -12000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 10){
                money += 1000;
                alert("'가리비'(이)가 잡혔다!!")
                alert("+1000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 11){
                money += 10;
                alert("'퓨터'(이)가 잡혔다!!")
                alert("+10원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 12){
                money += 10000;
                alert("'평범한해파리'(이)가 잡혔다!!")
                alert("+10000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
            else if (random_n1 == 13){
                money += 20000;
                alert("'희귀한해파리'(이)가 잡혔다!!")
                alert("+20000원")
                nowfishtext.style.backgroundColor = 'blue';
                nowfishtext.textContent = '낚시를 시작해주세요';
                start = 0
            }
        
        money_div.innerText = `돈: ${money}원`
        }
        else{
            alert("아무것도 낚이지 않았다..")
            nowfishtext.style.backgroundColor = 'blue';
            nowfishtext.textContent = '낚시를 시작해주세요';
            clearInterval(game_start);
            start = 0;
        }
    
        
    }
    
    
})
