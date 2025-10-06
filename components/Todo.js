class Todo {
    constructor(data, selector, handleCheck, handleDelete, handleTodo) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
        if (!this._templateElement) {
            throw new Error(`No element found with Selector: ${selector}`);
        }
        this._handleCheck = handleCheck;
        this._handleDelete = handleDelete;
        this._handleTodo = handleTodo;
    }

    _setEventListeners () {
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        
        this._todoCheckboxEl.addEventListener("change", () => {
            this._data.completed = this._todoCheckboxEl.checked; // i changed only here
            this._handleCheck(this._data.completed);
            console.log(this._data.completed);
        });
        //when clicked, change completion from true to false
        this._todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
            this._handleDelete(this._data.completed);
        });

    }

    _setDateEl () {
        //Add the date stuff from index.js
       this._todoDate = this._todoElement.querySelector(".todo__date");
        this._dueDate = new Date(this._data.date);
        if (!isNaN(this._dueDate)) {
          this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`;
        }
    }

    _generateCheckboxEl () {
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        this._todoCheckboxEl.checked = this._data.complete
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    getView() {
        this._todoElement = this._templateElement.content
          .querySelector(".todo")
          .cloneNode(true);

        this._todoNameEl = this._todoElement.querySelector(".todo__name");     
        this._todoNameEl.textContent = this._data.name;
        
        this._generateCheckboxEl();

        this._setDateEl();

        this._setEventListeners();

        return this._todoElement;
    }
}

export default Todo;