document.addEventListener("DOMContentLoaded", () => {
    //Fetch requests
    function fetchResource(url) {
        return fetch(url)
        .then(res => res.json())
    }

    //Rendering functions
    function createCompletedBook(book) {
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

    function createNextBook(book) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
    
        h3.innerText = book.title;
    
        li.append(h3);
        document.getElementById('up-next').append(li);
    }

    //Invoke functions
    fetchResource('http://localhost:3000/complete')
    .then(books => books.forEach(createCompletedBook))

    fetchResource('http://localhost:3000/next')
    .then(books => books.forEach(createNextBook))
    

})



newBooks.forEach(booksUpNext);