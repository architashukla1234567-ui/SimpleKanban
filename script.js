const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for(const card of cards){
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend',dragEnd)
}

for(const list of lists){
    list.addEventListener('dragover',dragOver);
    list.addEventListener('dragenter',dragEnter);
    list.addEventListener('dragleave',dragLeave);
    list.addEventListener('drop',dragDrop);
}
function dragStart(e){
    //this allow the deop location to  know which element is being moved when you release it
    e.dataTransfer.setData('text/plain', this.id);
}
function dragEnd(){
    console.log('dragend');
}
function dragOver(e){
    //this line is important because by default, browsers don't allow you to drop elements onto other elemets.
    //this line allows the drop to happen
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();

    this.classList.add("over");
}
function dragLeave(){
    this.classList.remove("over");
}

function dragDrop(e){
    const id = e.dataTransfer.getData('text/plain');
    const card = document.getElementById(id);
    this.appendChild(card);
    this.remove("over");
}
//this project is performed by using the drag and drop API. 
// The drag and drop API is a set of events that allow you to drag and drop elements on a web page.
//  The drag and drop API is supported by all modern browsers. The drag and drop API is not supported by Internet Explorer 9 and earlier versions.
