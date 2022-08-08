let bars=document.getElementsByClassName('bars')[0];
let slider=document.getElementsByClassName('slider')[0];
let open=false;


const tooglenav=()=>{
    if(!open){
        slider.classList.add('active') 
        bars.classList.add('activ') 
        open=true;
    }else{
        slider.classList.remove('active') 
        bars.classList.remove('activ') 
        open=false;
    }
    
}

bars.addEventListener('click',tooglenav)