document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector(`#new-item-form`);
  form.addEventListener('submit', handleFormSubmit);


});

const handleFormSubmit = function(event){

  event.preventDefault();

  const newBookList = document.createElement('li');
  newBookList.textContent = '\r Book Title: ' + this.title.value + ' \r\n ' + 'Author: ' + this.author.value + ' \r\n ' + 'Category: ' + this.category.value;

  const list = document.querySelector('ul');
  list.appendChild(newBookList)

  const form = document.querySelector('#new-item-form');
  form.reset()
}
