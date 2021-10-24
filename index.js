let slide_btns = document.querySelector(".slide_btns");
let btns = slide_btns.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active_btn");
  current[0].className = current[0].className.replace("active_btn", "");
  this.className += " active_btn";
  });
}

document.querySelector('.footer_right select').addEventListener("change", function(){
    if(this.value){
        window.open(this.value, '_blank');
    }
})

document.querySelector(".silde_btn2").addEventListener("click", function() {
    document.querySelector(".slide").style.transform = 'translate(-1000px)';
});
document.querySelector(".silde_btn3").addEventListener("click", function() {
    document.querySelector(".slide").style.transform = 'translate(-2000px)';
});
document.querySelector(".silde_btn1").addEventListener("click", function() {
    document.querySelector(".slide").style.transform = 'translate(0)';
});


document.querySelector(".top").addEventListener("click", function(){
    window.scroll({ top: 0, behavior: 'smooth' });
})

/* ex11 마진값 추가 */
if (navigator.userAgent.match(/Trident\/7\./)) {
    let $nav = document.querySelector('.nav');
    let $sec = document.querySelector('.section');
    let nav_height = $nav.clientHeight;

    $sec.style.marginTop = nav_height + 'px';
}



/* ie11 헤더 떨림 방지 */
if (navigator.userAgent.match(/Trident\/7\./)) {
    let $body = document.querySelector('body');
    $body.addEventListener('mousewheel', function(){
        event.preventDefault();
        let wheelDelta = event.wheelDelta;
        let currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
    $body.addEventListener('keydown', function(e){
                e.preventDefault(); // prevent the default action (scroll / move caret)
                let currentScrollPosition = window.pageYOffset;

                switch (e.which) { case 38: // up 
                    window.scrollTo(0, currentScrollPosition - 120); 
                    break; 
                    case 40: // down 
                    window.scrollTo(0, currentScrollPosition + 120); 
                    break;

                    default: return; // exit this handler for other keys 
                }
    });
}




/* 모바일 */
let $body = document.querySelector('body');
let mobile = window.matchMedia("screen and (max-width: 1000px)");
let menu_btn = document.querySelector(".inner button");
let $footer_inner = document.querySelector('.footer_inner');
let menu_clk = false;

menu_btn.addEventListener("click", function(){
    menu_clk = !menu_clk;
    menu_clk && mobile ? menu_btn.style.backgroundImage = "url('X_btn.png')" : menu_btn.style.backgroundImage = "url('menu_btn.png')";

    if(mobile && menu_clk){
        $body.classList.add("menu_bar");
        $footer_inner.classList.add("footer_m");
    }else{
        $body.classList.remove("menu_bar");
        $footer_inner.classList.remove("footer_m");
    }
});










let slide_click = false;
let slide_up = false;

console.log(slide_click);
let $slide = document.querySelector('.slide');
// $slide.onmousedown = function(e) {
//     let slide_down_X = e.clientX;
//     console.log(e.clientX);
//     function moveAt(clientX){
//         $slide.style.transform = `translate(${-clientX}px)`
//         console.log(-clientX);
//     }
//     function onMouseMove(event) {
//         moveAt(event.clientX);
//     }
//     document.addEventListener("mousemove", onMouseMove);   
//     document.onmouseup = function(e) {
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//         let slide_up_X = e.clientX;
//         let slide_sum = slide_up_X - slide_down_X;
//         let res = 0;
//         res += slide_sum;
//         console.log(res);
//         $slide.style.transform = `translate(${res}px)`;
//     }
// };


$slide.ondragstart = function() {
  return false;
}; //브라우저 자체적으로 이미지나 요소에 대한 드래그 앤 드롭 비활성화









// if(mouse_draging == true){
//     //마우스 드래그를 인식
//     obj_name.on("mousedown", function(a){
//         obj_drag = true;
//         currX = a.pageX;
//         startX = a.pageX;
//         obj_name.on("mousemove", function(b){
//             if(obj_drag ==  true){
//                 prevX = currX;
//                 currX = b.pageX;
//                 moveX = prevX - currX;
//                 drag_move(moveX);
//             }
//         });
//     });
//     $(document).on("mouseup", function(){
//         if((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))){
//             drag_end();
//         }
//         obj_drag = false;
//         obj_name.off("mousemove");
//     });
// }

// //drag 혹은 touch 시 오브젝트를 움직이는 함수
// function drag_move(moveX){
//     $(obj_name).offset({
//         left : $(obj_name).offset().left - moveX
//     });
//     obj_index = parseInt(-($(obj_name).position().left) / obj_width);
//     index_change(obj_index);
// }

// // ///drag 혹은 touch가 종료되었을때 실행하는 함수
// function drag_end(){
//     if($(obj_name).position().left > 0){
//         afterX = 0;
//     }else if($(obj_name).position().left < -((obj_length+1) * obj_width)){
//         afterX = (obj_length) * obj_width;
//     }else{
//         if(moveX > 0){
//             afterX = (obj_index+1) * obj_width;
//         }else{
//             afterX = (obj_index) * obj_width;
//         }
//     }
//     $(obj_name).animate({
//         left : -afterX
//     }, 500, function(){
//         obj_index = parseInt(-($(obj_name).position().left) / obj_width);
//         if(obj_index <= 0){
//             obj_index = obj_length;
//             $(obj_name).css("left", -(obj_length*obj_width));
//         }else if(obj_index > obj_length){
//             obj_index = 1;
//             $(obj_name).css("left", -obj_width);
//         }
//         index_change(obj_index);
//     });
// }