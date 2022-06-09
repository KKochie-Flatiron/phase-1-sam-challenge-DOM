const cookbook = {
    title: "The Book on Pie",
    author: "Erin Jeanne McDowell",
    subject: "Baking",
}

const nonFiction = {
    title: "Crying in H-Mart",
    author: "Michelle Zauner",
    genre: "Memoir",
}

const fiction = {
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    genre: "Historical Fiction",
}

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

function createCookbook(book) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h3.innerText = book.title;
    h4.innerText = book.author;
    p.innerText = book.subject;

    li.className = 'cooking';

    li.append(h3, h4, p);
    document.getElementById('recent-books').append(li);
}


createBook(fiction);
createBook(nonFiction);


