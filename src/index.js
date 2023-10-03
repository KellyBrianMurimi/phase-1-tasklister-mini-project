document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      handleForm(e.target.Description1.value)
      form.reset()
    })
  })

function handleForm(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'delete'
  li.textContent =`${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#todo_container').appendChild(li)
}

function handleDelete(e){
  e.target.parentName.remove()
}