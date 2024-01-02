document.querySelector(".btn");
let button=document.querySelector(".btn");
button.style.background="blue";
 button.addEventListener("click",(e) =>
{                             
 console.log("click");
 e.preventDefault();
});

let nameInput=document.querySelector("#name");
let emailInput=document.querySelector("#email");
nameInput.addEventListener("input",e=>
{ 
document.querySelector(".container").append(nameInput.value);
});
emailInput.addEventListener("input",e=>
{ 
document.querySelector(".container").append(emailInput.value);
});
function onSubmit(e){                              
  e.preventDefault();                              
   }            
console.log(nameInput);
console.log(nameInput.value); 
console.log(emailInput);
console.log(emailInput.value); 
let myform=document.querySelector("my-form");
myform.addEventListener('submit',onSubmit);
let msg=document.querySelector(".msg");
if(nameInput.value===''||emailInput.value==='')
{                
msg.classList.add('error');
msg.innerHTML='Please enter all fields';
}
else
{
console.log('success');
}
