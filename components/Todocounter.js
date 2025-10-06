class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = 0; // filter the completed ones and then use length
    this._total = todos.length; // use the length for the total
  }
    
    // Call this when a checkbox is clicked, and when a completed
    // to-do is deleted.
    updateCompleted = (increment) => {
      if (increment) {
        this._completed++;
      } else if (this._completed > 0) {
        this._completed--;
      }
      this.updateText();
      
    };
    
    updateTotal = (increment) => {
      if (increment) {
        this._total++;
      } else {
        this._total--;
      }

      this.updateText();
    };
  
    // Call the method to update the text content;
    updateText() {
      // Sets the text content of corresponding text element.  
      // Call this in the constructor, and whenever the counts get updated.
      this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
    }
  }
  
  export default TodoCounter;