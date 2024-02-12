  let form = document.getElementById('form');
    let input = document.getElementById('input');
    let todos = document.getElementById('todos')
    let btn = document.getElementById('btn')
    btn.addEventListener('click', () => addTodo())



    //getting todos from localStorage

    let allTodos = JSON.parse(localStorage.getItem('allText'))


    if (allTodos) {
      allTodos.forEach((todo) => {
        addTodo(todo)
      })
    }


    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTodo();
    })


    function addTodo(todo) {

      //add the text in li
      let todoText = input.value;

      if (todo) {
        todoText = todo.text
      }



      if (todoText) {
        let todoLi = document.createElement('li')

        if (todo) {
          todoLi.innerText = todo.text
        }


        todoLi.innerText = todoText;


        todos.appendChild(todoLi)
        input.value = '';


        //adding delete option
        todoLi.addEventListener('dblclick', () => {
          todoLi.remove()
          updateLocalStore()

        })
        //adding complete option
        todoLi.addEventListener('click', () => {
          todoLi.classList.toggle('complete')
          updateLocalStore()
        })
        updateLocalStore()
      }
    }

    function updateLocalStore() {
      let noteLis = document.querySelectorAll('li')

      let notes = []

      noteLis.forEach((note) => {
        notes.push({
          text: note.innerText
        })
      })

      localStorage.setItem('allText', JSON.stringify(notes))
    }

    //
