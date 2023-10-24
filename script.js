const panels=document.querySelectorAll('.panel');
//got the nodeList that acts like an array ,then loop through it
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}