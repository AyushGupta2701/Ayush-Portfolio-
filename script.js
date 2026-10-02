const words = [
    "Java",
    "Spring Boot",
    "REST API",
    "MySQL",
    "React"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,2000);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            isDeleting=false;

            wordIndex=(wordIndex+1)%words.length;
        }

    }

    setTimeout(typeEffect,isDeleting?80:200);

}

typeEffect();

// Js for panels in contact section
function showPanel(type,card)
{
    const panels=document.querySelectorAll(".contact_panel");
    const cards=document.querySelectorAll(".contact-card");
    panels.forEach(function(one_by_one_panel){
        one_by_one_panel.classList.remove("active_panel")

    });
    cards.forEach(function(card_by_card){
        card_by_card.classList.remove("active");
    });
    document.getElementById(type).classList.add("active_panel");
    document.getElementById(card).classList.add("active");

}
