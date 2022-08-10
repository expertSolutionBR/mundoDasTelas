const imgs = document.getElementById("img");
const img = document.querySelectorAll(".textoservico");

let imgAtual = 0;

function carrossel() {  
    imgAtual++;

    if(imgAtual > img.length -1){
        imgAtual = 0;
        }

        imgs.style.transform = `translateX(${-imgAtual * 1000}px)`
}
function carrossel2() {  
    imgAtual--;

    if(imgAtual < 0){
        imgAtual = img.length - 1;
        }
        imgs.style.transform = `translateX(${-imgAtual * 1000}px)`
}
document.getElementById('proximo').addEventListener('click', carrossel);
document.getElementById('anterior').addEventListener('click', carrossel2);

//setInterval(carrossel, 2800);
