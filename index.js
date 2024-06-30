const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const empty = document.querySelector(".empty");
const filled = document.querySelector(".filled");
let flag = 0;
setInterval(next,5000);

function next(){
    if(flag == 0){
        div1.classList.add("hidden");
        div2.classList.remove("hidden");
        flag = 1;
        empty.textContent = "⬤";
        filled.textContent ="○";
    }
    else{
        div2.classList.add("hidden");
        div1.classList.remove("hidden");
        flag = 0;
        empty.textContent = "○";
        filled.textContent ="⬤";
    }
}