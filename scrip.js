const input=document.getElementById('input1');
const listcont=document.getElementById('listcont');


function getlisitem(){
    if(input.value === ''){
        alert('please enter something to display');

    }
    else{
let li=document.createElement('li');
li.innerHTML=input.value;
listcont.appendChild(li);
let span=document.createElement('span');
    }
input.value='';
}