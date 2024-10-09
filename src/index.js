document.addEventListener("DOMContentLoaded", () => {  
 let form= document.querySelector('form') 
  form.addEventListener('submit', (e) => {  
    e.preventDefault();  
   
    const description = document.getElementById("new-task-description");  

  
    handleToDo( description.value); 
    form.reset() 
  });  
});

function handleToDo(todo){
  let p =document.createElement('p')
  p.textContent=`${todo}`
  p.style.color="red"
  p.style.fontSize="20px"
  let btn= document.createElement("button")
  btn.addEventListener('click',deleteIt)
  btn.textContent="remove"
  btn.style.color="green";
  p.appendChild(btn)
  console.log(p);
  
  document.querySelector('#list').appendChild(p)
 
}
function deleteIt(e){
  e.target.parentNode.remove()
}
document.getElementById('addTaskButton').onclick = function() {  
  const newTask = '<div><input type="text" placeholder="User" required><input type="number" placeholder="Duration (hours)" required><input type="date" required></div>';  
  document.getElementById('taskInputs').insertAdjacentHTML('beforeend', newTask); 
  
};  

document.getElementById('taskForm').onsubmit = function(event) {  
  event.preventDefault();  
  
  const output = document.getElementById('output');  
  output.innerHTML = '<h2>Submitted Tasks:</h2>';  
  output.style.color="yellow"
  output.style.fontSize="20px"
  document.querySelectorAll('#taskInputs > div').forEach(task => {  
      const inputs = task.getElementsByTagName('input');  
      output.innerHTML += `<p>User: ${inputs[0].value}, Duration: ${inputs[1].value} hours, Date Due: ${inputs[2].value}</p>`;  
  });  
};  
