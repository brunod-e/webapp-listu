const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
    if (inputValue.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>`

        event.target.reset()
    }
}

const removeTodo = clickedElement => { 
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
    
    if (trashDataValue) {
        todo.remove()
    }
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => {
    return todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })
}

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })
}

const hideTodos = (todos, inputValue) => { 
    todos
    const todosToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    todos
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex', 'hidden')
}

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)
    
    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
    clickedElement.classList.toggle('done')
})

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()
           
    const inputValue = event.target.add.value.trim()
    addTodo(inputValue)
})