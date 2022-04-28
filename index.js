let newMsg = "This is really cool!"
let oldMsg = document.querySelector('p')
document.addEventListener('DOMContentLoaded', () =>{
    oldMsg.innerHTML = newMsg
})

//code below also works, but wouldn't pass test-requirment to use querySelector
// let newPtag = document.getElementById("text").textContent = newMsg
