
const list = document.querySelector('#list');
function addItem(){
    const newItem = document.createElement('li');
    newItem.textContent = 'new Item'
    list.appendChild(newItem)
}


function removeItem(){
 if(list.lastChild){
    list.removeChild(list.lastChild);
 }
}

