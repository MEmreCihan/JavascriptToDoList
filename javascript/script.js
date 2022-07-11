const toastSuccess = document.querySelector('.success');
const toastError = document.querySelector('.error');
let button = document.querySelector("#liveToastBtn");
let ul = document.querySelector("#list");
let task = document.querySelector("#task");
let liTasks = document.getElementsByTagName("li");

function addNewTask() {
 
    if (task.value == "")  {
    $(toastError).toast("show");
    }else {
    $(toastSuccess).toast("show");

    let liDOM = document.createElement('li')
    ul.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    task.value = "";
  

    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    
    liDOM.append(closeButton);
    ul.append(liDOM);
}
}


for(let i=0; i < liTasks.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liTasks[i].append(closeButton);
    liTasks[i].onclick = check;
}



button.addEventListener('click', addNewTask)



function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}

