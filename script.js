//Seleção de elemento html:
const toDoForm = document.querySelector('#toDoForm');
const toDoInput = document.querySelector('#toDoInput');
const editForm = document.querySelector('#editForm');
const editInput = document.querySelector('#editInput')
const cancelBTN = document.querySelector('#cancelEditBTN');
const toDoList = document.querySelector('#toDoList')
//Funções
const saveToDo = (text) => {
    const toDoItem =document.createElement('div');
    toDoItem.classList.add('toDoItem')

    const toDoTitle = document.createElement('h4')
    toDoTitle.innerText = text;
    toDoItem.appendChild(toDoTitle)
    //console.log(toDoItem)
}

//Eventos
toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('Enviou form');
    const inputValue = toDoInput.value;
    if(inputValue){
        //console.log(inputValue)
        saveToDo(inputValue)
    }
})


