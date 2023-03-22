// navmenu icon change 
const mynavbar = document.getElementById('mynavbar');
const barIcon = document.getElementById('barIcon');

barIcon.addEventListener('click',function(){
    const x = barIcon.querySelector('svg');
    // console.log(x.classList[1]);
    if(x.classList[1] == 'fa-bars'){
      x.classList.add('fa-bars-staggered');
    }
    if(x.classList[1] == 'fa-bars-staggered'){
      x.classList.add('fa-bars');
    }
});