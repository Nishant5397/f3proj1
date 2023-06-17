class person{
    name;
    profession;
    age;
    constructor(name,profession,age){
        this.name = name;
        this.profession= profession;
        this.age= age;
    }
}

let arr = [];
let id = 1;

document.getElementById("submit").addEventListener('click',(event)=>{
event.preventDefault();
let form = document.getElementById('employee-form');
let name = document.getElementById('name').value;
let profession = document.getElementById('profession').value;
let age = document.getElementById('age').value;
console.log(name + profession +age);
if(name.trim()===""||profession.trim()===""||age.trim()===""){
    let message = document.getElementById('message');
    message.innerText = 'Error : Please Make Sure All The Fields Are filled';
    message.style = `
    color : red;
    padding-bottom : 10px;`
}
else{
    let message = document.getElementById('message');
    message.innerText = 'Success : Employee Added Successfully!';
    message.style = `
    color :green;
    padding-bottom : 10px;`
    document.getElementById('placeholder').style.display = 'none';
    let employeeContainer = document.getElementById('employee-list');
      let employee = document.createElement('div');
      employee.className = 'employee-box';
      employee.innerHTML = `
        <div class="employee-details ">
            <p>${id}.</p>
            <p>Name: <span>${name}</span></p>
            <p>profession: <span>${profession}</span></p>
            <p>Age: <span>${age}</span></p>
        </div>
        <div> <button class="delete-btn ">Delete User</button></div>
        `
      employeeContainer.append(employee);
      let newPerson = new person(name, profession, age);
      arr.push(newPerson);
      id++;
      form.reset();
  
      //  event listener to the delete button
      let deleteBtn = employee.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {

        let index = arr.indexOf(newPerson);
        arr.splice(index, 1);
        
        employee.remove();
        
        if(arr.length === 0){
        document.getElementById('placeholder').style.display = 'block';
        }
       
      });
      
    }
    
}
)
console.log(arr);