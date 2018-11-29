const elems = document.querySelectorAll('section>div');

elems.forEach(item => item.addEventListener('click', foo));
function foo(element) {
    stugum.push(this);
    this.style.zIndex = '2';
    this.style.transform = 'rotateY(180deg)';
    this.style.transitionDuration = '2s';
    console.log(element)
     setTimeout(function() { 
         if(stugum[0].className != stugum[1].className){
            stugum[0].style.transform = 'rotateY(0deg)';
            stugum[0].style.transitionDuration = '2s';
            stugum[1].style.transform = 'rotateY(0deg)';
            stugum[1].style.transitionDuration = '2s';
         }
     }, 2000);  
     setTimeout(function() { 
        if (stugum.length == 2){
            stugum.length = 0;
        }
    }, 2005);    
};
let stugum = [];
