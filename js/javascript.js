document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var discount = document.createElement('span');
    var x = e.offsetX;
    var y = e.offsetY;
    discount.style.top = y + 'px';
    discount.style.left = x + 'px';
    var size = Math.random() * 100;
    discount.style.width = size+'px';
    discount.style.height = size+'px';
    body.appendChild(discount);
    setTimeout(function(){
        discount.remove();
    }, 2000)
})


function toggle(){
    document.querySelector(".popup").style.display = "flex";
}

function closed(){
    document.querySelector(".popup").style.display = "none";
}

