const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reload = document.querySelector('.btn-reload').addEventListener("click", function() {
    location.reload(); // Recarrega a página
  });



const jump= () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');


    },500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPostion < 100 ){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none'
        mario.style.bottom = `${marioPostion}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

      
        document.querySelector('.btn-reload').style.display = "block";
        document.addEventListener('keydown', reload)     
        
        

        

        clearInterval(loop);


    }

},10);



document.addEventListener('keydown', jump);
