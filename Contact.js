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

// js for textarea count
const textarea=document.getElementById("textarea");
const count=document.getElementById("count");
const maxLength=textarea.maxLength;

textarea.addEventListener("input",function(){
    //const remaining=maxLength - textarea.value.length;
    //count.textContent=remaining;
    count.textContent=textarea.value.length;
    
});

// js for form inputs
const contact_form=document.getElementById("contact_form");
contact_form.addEventListener("submit",function (event){
    event.preventDefault();
    
    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();
    
    const textarea=document.getElementById("textarea").value.trim();
    
    if(name===""){
    alert("please enter name");
    return;
    }
    if(email==="")
    {
        alert("please enter email");
        return;
    }


});
