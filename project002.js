let button = document.querySelector(".button");
let write = document.querySelector(".write");
let info = document.querySelector(".info");

let array =[]
if(localStorage.getItem("note")){
    array = JSON.parse(localStorage.getItem("note"))
    displayMessages()
}

button.addEventListener("click",()=>{
 let noted ={
    note: write.value,
 }
 array.push(noted)
 displayMessages();
 localStorage.setItem("note",JSON.stringify(array));
})

function displayMessages(){
    let displayMessage = " "
     array.forEach(function(item,index){
        displayMessage += `
        <li id = "${index}">
           ${item.note}
        </li>
        `;
        info.innerHTML = displayMessage
     })
}

info.addEventListener("click",function(event){
    event.preventDefault()
    array.forEach(function(i){
            if(event.ctrlKey){
                array.splice(i,array.length-1)
            }
                
    })
            displayMessages()
            localStorage.setItem("note",JSON.stringify(array));
           
    })