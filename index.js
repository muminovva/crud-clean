let form=document.getElementById('form-create')
let inp=document.querySelector('.input-create')
let ul=document.querySelector('.list-group')
//check
let todo =JSON.parse(localStorage.getItem('list'))? JSON.parse(localStorage.getItem('list')):[]
//getTodos
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const todoText = inp.value
  form.reset()
  todo.push({text:todoText})
  setTodos()
  showTodos()
  
})
//setTodos
function setTodos(){
  localStorage.setItem('list',JSON.stringify(todo))
}
//showTidos
function showTodos(){
  const todo=JSON.parse(localStorage.getItem('list'))
  ul.innerHTML=''
  todo.forEach((item,i)=>{
    ul.innerHTML+=`
    <div class="list">
    <li class="list-item ">${item.text}</li>
      
        <div class="button">  
           <button class="btn-edit">Edit</button>
          <button onclick='(deleteTodo(${i}))' class="btn-delete">Delete</button>
        </div>

           </div>
           <hr>
    `
  })
}
//deleteTodo
function deleteTodo(id){
  const deletedTodos=todo.filter((item,i)=>{
    return i!==id
  })
  todo=deletedTodos
  setTodos()
  showTodos()
}