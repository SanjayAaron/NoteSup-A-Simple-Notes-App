// Selecting Popup Box, Overlay, Button
var popupbox =document.querySelector(".popup-box");
var popupoverlay=document.querySelector(".popup-overlay");
var popupbutton=document.getElementById("popup-button");

popupbutton.addEventListener("click",function(){
   popupoverlay.style.display="block";
   popupbox.style.display="block";
});
//Selecting Cancel Button
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click", function(){
   event.preventDefault()
   popupoverlay.style.display="none";
   popupbox.style.display="none";
})
//Selecting Book Container,book-title-input,book-topic-input,book-note-input

container=document.querySelector(".container")
addbook=document.getElementById("add-book")
booktitleinput=document.getElementById("book-title-input")
booktopicinput=document.getElementById("book-topic-input")
booknoteinput=document.getElementById("book-note-input")

addbook.addEventListener("click", function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=`
    <h2>${booktitleinput.value}</h2>
    <h3>${booktopicinput.value}</h3>
    <p>${booknoteinput.value}</p>
    <button class="delete-button" id="delete">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    deletebutton=document.getElementById("delete");
    deletebutton.addEventListener("click", (event)=>{
       event.target.parentNode.remove()
    });
})
