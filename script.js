document.addEventListener("DOMContentLoaded",function(e) {

    let header = document.getElementsByTagName("header");
    header[0].querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    header[0].addEventListener('mouseover', function(e){
        if(e.target.tagName === 'A'){
            e.target.previousElementSibling?.children[0].classList.add("siblingHovered");
            
            e.target.addEventListener('mouseleave', function(event){
                if(e.target === event.target){
                    e.target.previousElementSibling?.children[0].classList.remove("siblingHovered");
                }
            });
        }else{
            if(e.target.tagName === 'SPAN'){
                e.target.parentElement.previousElementSibling?.children[0].classList.add("siblingHovered");
                e.target.addEventListener('mouseleave', function(event){
                    if(e.target === event.target){
                        e.target.parentElement.previousElementSibling?.children[0].classList.remove("siblingHovered");
                    }
                });
            }
        }
    });
});