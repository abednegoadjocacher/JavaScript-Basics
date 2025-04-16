const todoList = [{
    name:'wash dishes',
    dateAdd: '2020-12-12' 
    },
    {
        name:'wash bowls', 
        dateAdd: '2020-21-12'}
    ];

renderTodoList();
function renderTodoList(){

    let todoListHTML = '';
    for(let i =0; i < todoList.length; i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dateAdd = todoObject.dateAdd;
        const {name, dateAdd } = todoObject;//this is called a destructuring. It does the same this as the lines commented above.
        const html = `
            <div>
                ${name}
            </div>
            <div> 
                ${dateAdd}
            </div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                " class="delete-btn">Delete
            </button>`;
        todoListHTML += html;
    }
    // console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addDoList(){
   const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const inputDateElement = document.querySelector('.js-input-date');
    const dateValue = inputDateElement.value;
    // console.log(name);
    todoList.push(
        {
        name: name,
        dateAdd: dateValue
        });
    // console.log(todoList)

    inputElement.value = '';

    renderTodoList();
}