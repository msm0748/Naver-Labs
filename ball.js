let ball = document.querySelector('#circle1');
ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // 초기 이동을 고려한 좌표 (pageX, pageY)에서
  // 공을 이동합니다.
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
    console.log(pageX);
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // mousemove로 공을 움직입니다.
  document.addEventListener('mousemove', onMouseMove);

  // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
  // ball.onmouseup = function() {
  //   document.removeEventListener('mousemove', onMouseMove);
  //   ball.onmouseup = null;
    
  // };

};

ball.ondragstart = function() {
  return false;
};












/*************************************************** */
let slide_click = false;
let slide_up = false;

console.log(slide_click);
let $slide = document.querySelector('.slide');
$slide.onmousedown = function(e) {
    let slide_down_X = e.clientX;
    console.log(e.clientX);
    function moveAt(clientX){
        $slide.style.transform = `translate(${-clientX}px)`
        console.log(-clientX);
    }

    function onMouseMove(event) {
        moveAt(event.clientX);
    }

    document.addEventListener("mousemove", onMouseMove);   


    document.onmouseup = function(e) {

        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
        let slide_up_X = e.clientX;
        let slide_sum = slide_up_X - slide_down_X;
        let res = 0;
        res += slide_sum;
        console.log(res);
        $slide.style.transform = `translate(${res}px)`;
    }

};


$slide.ondragstart = function() {
  return false;
}; //브라우저 자체적으로 이미지나 요소에 대한 드래그 앤 드롭 비활성화



