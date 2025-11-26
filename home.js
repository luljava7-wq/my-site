
document.getElementById("btn1").addEventListener("click", function() {
    window.location.href = "https://google.com";
});

document.getElementById("btn2").addEventListener("click", function() {
    window.location.href = "https://youtube.com";
});

if(!localStorage.getItem("once")){
let yosh=+prompt("yoshingizni yozin");
if(yosh>=18){
    console.log("yoshingiz togri keldi");
}else{
console.log("yoshingiz togri kelmadi");
}
localStorage.setItem("once","true");
}
let countEL = document.getElementById('count');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');

let count = 0;

minusBtn.addEventListener('click', ()=>{
count--;
countEL.textContent = count;
});
plusBtn.addEventListener('click', ()=>{
count ++;
countEL.textContent = count;
});



document.getElementById("btn2").addEventListener("click", function() {
    window.location.href = "https://youtube.com";
});
