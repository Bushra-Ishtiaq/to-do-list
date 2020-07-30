function list() {
    // to get input 
    let item = document.querySelector('input').value;

    // to create a text node by using create text node method
    let userInput = document.createTextNode(item);

    // to get the under order list 
    let listText = document.querySelector('ul');

    // to get the Li by using create element 
    let showList = document.createElement('li');

    // to append userInput in to showList 
    showList.appendChild(userInput);

    // to append showList into listText 
    listText.appendChild(showList);
}

function removeItem(){
        var itemToRemove = document.querySelector('li');
        itemToRemove.parentNode.removeChild(itemToRemove);
}
