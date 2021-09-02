const inputBtn = () => {
    const searchInputText = document.getElementById('inputId');
    const searchInput = searchInputText.value;

    // empty inputField
    searchInputText.value = '';

    //fetch data
    const url = `https://openlibrary.org/search.json?q=${searchInput}
    `;

    fetch(url)
        .then(res => res.json())
        .then(data => displayBookList(data.docs))

}

const displayBookList = bookData => {
    const bookListId = document.getElementById('bookListId');
    bookListId.textContent = '';

    bookData.forEach(bookList => {
        // console.log(bookList)

        const bookListDiv = document.createElement('div');
        bookListDiv.classList.add('col');
        bookListDiv.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${bookList.cover_i}-M.jpg" class="card-img-top h-50" alt="...">
            <div class="card-body mt-2">
            
            <h5><i class="fas fa-book icon"></i> <span class="cardText">${bookList.title}</span></h5>
            
            <h5><i class="fas fa-user icon"></i> <span class="cardText">${bookList.author_name}</span></h4>
            
            <h5><i class="fas fa-clock icon"></i> <span class="cardText">${bookList.publish_year}</span></h5>

            </div>
    </div>
`
        bookListId.appendChild(bookListDiv);
    })
}