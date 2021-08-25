let arr =[1,2,3,4,5,6,7,8,9]; //default data set
let html;
const shuffle =()=>{
document.querySelector("#outer-square").innerHTML = null;
arr.sort(() => (Math.random() > .5) ? 1 : -1);
arr.forEach(element => {
    html='<div id="element'+element+'" class="inner-square element'+element+'"><div class="side-bar'+element+'"></div><div class="btn-text element'+element+'">'+element+'</div></div>'
    document.querySelector("#outer-square").innerHTML += html;
});
}

const sort =()=>{
arr.sort();
document.querySelector("#outer-square").innerHTML = null;
arr.forEach(element => {
    html='<div id="element'+element+'" class="inner-square element'+element+'"><div class="side-bar'+element+'"></div><div class="btn-text element'+element+'">'+element+'</div></div>'
    document.querySelector("#outer-square").innerHTML += html;
});
}