let ul=document.querySelector(".ulh1")
let form =document.querySelector(".form")
let input=document.querySelector(".form-control")
let clear=document.querySelector(".btn-delete")

let todos=JSON.parse(localStorage.getItem("list"))||[]

form.addEventListener("submit",(e)=>{
   e.preventDefault()
   const inputText=input.value
   form.reset()
   todos.push({name:inputText})
   setTodos()
   showTodos()
})
function setTodos(){
    localStorage.setItem("list",JSON.stringify(todos))
}
function showTodos(){
    const todos=JSON.parse(localStorage.getItem("list"))
    ul.innerHTML=''
    todos.forEach((elem)=>{
        ul.innerHTML+=`
        <h1 class="text">${elem.name}</h1>
        `
    })
}

clear.onclick=()=>{
    localStorage.setItem("list",JSON.stringify([]))
    todos=[]
    setTodos()
    showTodos()
}