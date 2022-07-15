window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input'),
    button = document.querySelector('.button'),
    addTodoList = document.querySelector('.todo-list');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    displayMessages();

    input.value = '';

    const editNote = document.querySelectorAll('.edit'),
      deleteNote = document.querySelectorAll('.delete');

    editNote.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.innerText.toLowerCase() == 'edit') {
          e.target.innerText = 'Save';
          e.target.closest('.task').firstChild.nextSibling.firstChild.nextSibling.removeAttribute('readonly');
          e.target.closest('.task').firstChild.nextSibling.firstChild.nextSibling.focus();
        } else {
          e.target.innerText = 'Edit';
          e.target.closest('.task').firstChild.nextSibling.firstChild.nextSibling.setAttribute('readonly', 'readonly');
        }
      });
    });

    deleteNote.forEach(item => {
      item.addEventListener('click', (e) => {
        e.target.closest('.task').remove();
      });
    });
  });

  function displayMessages() {
    let displayMessage = '';

    displayMessage = `
      <div class="task">
        <div class="content">
          <input class="text" type="text" value="${input.value}" readonly />
        </div>
        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
    `;

    addTodoList.innerHTML += displayMessage;
  }
});