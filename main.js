let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

const formcheck = document.querySelector("#Feedback");
          
          formcheck.addEventListener("submit", function (event){
            const ratingbarcheck = document.querySelector('input[name="satisfied"]:checked');
            const textboxcheck = document.querySelector('input[name="reason"]:checked');
            
            if(!ratingbarcheck){
              event.preventDefault();
              if(!textboxcheck){
                event.preventDefault();
              }
            }
            else{
              alert("Thank you for your Feedback.")
            }
          });
  