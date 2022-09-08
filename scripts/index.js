let bars=document.getElementsByClassName('bars')[0];
let slider=document.getElementsByClassName('slider')[0];
let open=false;
//django
let coverbutton=document.getElementsByClassName('coverbutton')[0];
let cover=document.getElementsByClassName('cover')[0];
let closebutton=document.getElementsByClassName('closebutton')[0];


coverbutton.addEventListener("click",()=>{
    cover.classList.add("show");
})

closebutton.addEventListener("click",()=>{
    cover.classList.remove("show");
})
//django


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