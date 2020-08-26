const input = document.querySelector("input");
let scene = document.querySelector('.scene');

function rain () {
    
let count = 300; 
      let i = 0;
    while(i < count){

        
      
      let drop = document.createElement('drop');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerWidth);
      let size = Math.random() * 20;

      let duration = Math.random() * 1; 

      drop.style.left = x+'px';
      drop.style.top = y+'px';
      drop.style.width = size+'px';
      drop.style.height = size+'px';

      drop.style.borderRadius = "0 50% 50% 50%";
      drop.style.border = "1px solid #3751e0";
      drop.style.background = "linear-gradient(#111425,#3751e0)";
      drop.style.transform = "rotate(45deg)";
  

      drop.style.animationDuration = 2 + duration+'s';
     


     scene.appendChild(drop);
    
      i++;
    }

  
}
    
rain();
 
