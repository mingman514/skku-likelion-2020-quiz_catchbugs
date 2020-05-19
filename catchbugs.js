let bugs = ['ant.png','beetle.png','fly.png','spider.png']
const room = document.querySelector('#room'); 

let count = 0;

document.querySelector('#add').onclick = (event) => {
    event.preventDefault(); // 새로고침 방지
    // 입력값 읽어오기
    let bugNum = document.querySelector('#bugNum').value;

    // 입력한 수만큼 랜덤하게 bug 생성하기
    let i=0;
    while(i < bugNum){
        let newBug = document.createElement('img');
        let randomNum = Math.floor(Math.random()*4); // 0~3 사이 랜덤 숫자
        console.log(randomNum);
        newBug.src = '/img/' + bugs[randomNum];
        newBug.className = 'bug';
        room.appendChild(newBug);
        i = i+1;
    }

    // 각 bug 클릭하면 count ++ & 태그없애기 이벤트 달기
    document.querySelectorAll('.bug').forEach(function(item){
        item.addEventListener('mouseover',function(){
            count = count + 1;
            document.querySelector('#countNum').textContent = count;
            item.remove();
        });
    })
}


