
let movebugs = function(){
    document.querySelectorAll('.bug').forEach(function(item){
    // item.style.position = 'relative';
    let left = Number(item.style.left.slice(0,-2));
    let top = Number(item.style.top.slice(0,-2));
    left = Math.random()*1000+100;
    top = Math.random()*500+100;
    item.style.left = left + 'px';
    item.style.top = top + 'px';
})
}

let startmoving = setInterval(movebugs, 1000);