document.addEventListener("DOMContentLoaded", () => {
    //Hide add new read book form
    const addBookBtn = document.querySelector("#new-book-btn");
    const bookAddContainer = document.querySelector(".container");
    
    const addShowBtn = document.querySelector("#new-show-btn");
    const showAddContainer = document.querySelector("#new-show");

    addBookBtn.addEventListener('click', () =>
        bookAddContainer.classList.toggle("hidden"));

    addShowBtn.addEventListener('click', () =>
        showAddContainer.classList.toggle("hidden"));
    
    //Fetch requests
    function fetchResource(url) {
        return fetch(url)
        .then(res => res.json())
    }

    function submitBook(newBook) {
        fetch('http://localhost:3000/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(book => console.log(book))
      }

    function submitShow(newShow) {
        fetch('http://localhost:3000/shows', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newShow)
        })
        .then(res => res.json())
        .then(show => console.log(show))
    }

    //Rendering functions
    function createBook(book) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h3.innerText = book.title;
        h4.innerText = book.author;
        p.innerText = book.genre;

        li.append(h3, h4, p);
        document.querySelector('ul').append(li);
    }

    function createShow(show) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
    
        h3.textContent = show.title;
        h4.textContent = show.source;
        p.textContent = show.type;
    
        li.append(h3, h4, p);
        document.getElementById('show-list').append(li);
    }

  

    //Event Handlers
    function handleBookSubmit(e) {
        e.preventDefault();
        let book = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value
        }
        createBook(book);
        submitBook(book);
    }
    
    function handleShowSubmit(e) {
        e.preventDefault();
        let show = {
            title: e.target.title.value,
            source: e.target.source.value,
            type: e.target.type.value
        }
        createShow(show);
        submitShow(show);
    }

    //Invoke functions
    fetchResource('http://localhost:3000/books')
    .then(books => books.forEach(createBook))

    fetchResource('http://localhost:3000/shows')
    .then(shows => shows.forEach(createShow))
    
    document.querySelector('form').addEventListener('submit', handleBookSubmit)

    document.querySelector('#show-form').addEventListener('submit', handleShowSubmit)
    
})