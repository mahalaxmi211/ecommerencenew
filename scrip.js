const input=document.getElementById('input1');
const listcont=document.getElementById('listcont');


function getlisitem() {
    if (input.value === '') {
        alert('please enter something to display');

    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listcont.appendChild(li);
        let span1 = document.createElement("span");
    }
    input.value = '';
    savedta()
    span1.innerHTML="\n00d7";
    li.appendChild(span1);

}
listcont.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        savedta();
    }
    else if(e.target.tagName === 'span'){
        e.target.parentElement.remove()
        savedta();
    }
},false);
function savedta(){
    localStorage.setItem("Data",listcont.innerHTML);
    console.log(localStorage.getItem("Data"));
}
function actualupdated(){
    listcont.innerHTML=localStorage.getItem("Data");
}
actualupdated();