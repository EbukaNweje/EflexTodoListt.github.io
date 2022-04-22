const AddTodo = document.getElementById("AddTodo")
let TodoInput = document.getElementById("TodoInput")
AddTodo.addEventListener("click", AddTodos)
let AllTodo = []
AllTodo = JSON.parse(localStorage.getItem("AllTodosInfo")) || []

function AddTodos(e){
    e.preventDefault()

    AllTodo.push(TodoInput.value)
    localStorage.setItem("AllTodosInfo", JSON.stringify(AllTodo))
    window.location.reload()
}

const TodoOutput = document.querySelector(".TodoOutput")
    AllTodo.forEach((todos, index) => {   
    const render = `
    <div class="OutPutDiv">
        <div><input type="checkbox" name="CheckBox" id=${index} class="checkbox"></div>
        <div> <input type="text" class="TodoText" id="TodoText${index}" value="${todos}"></div>
        <div class="Edit"><i class="fa fa-pencil" aria-hidden="true"></i></div>
        <button class="Delete" id=${index}><i class="fa fa-trash Dell" aria-hidden="true"></i></button>
    </div>
    `
    // console.log(AddTodo)
    TodoOutput.innerHTML += render
});


const deletes = document.querySelectorAll(".Delete")
deletes.forEach((Deletes, index)=>{
      Deletes.addEventListener("click", ()=>{
            AllTodo = AllTodo.filter((book, i)=> index !== i)
            localStorage.setItem("AllTodosInfo", JSON.stringify(AllTodo))
            window.location.reload()
            console.log(deletes);
      })       
})
// 'input[type=checkbox]'

const Checkme = ()=>{
    const checkbox = document.querySelectorAll('input[type=checkbox]')
checkbox.forEach((check)=>{
    check.addEventListener('change', () => {
        if(check.checked) {
            TodoText = document.getElementById("TodoText")
            TodoText.style.textDecoration = "line-through"
        } else {
            TodoText = document.getElementById("TodoText")
            TodoText.style.textDecoration = "none"
        }
      });
})
}
Checkme()

const edit = document.querySelectorAll('.fa.fa-pencil');
edit.forEach((edits, index) => edits.addEventListener('click', () => editTask(AllTodo, index)));
function editTask(AllTodo, index){
    AllTodo[index] = document.getElementById(`TodoText${index}`).value
    localStorage.setItem("AllTodosInfo", JSON.stringify(AllTodo))
    window.location.reload()
}
