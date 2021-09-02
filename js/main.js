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
        .then(data => displayBookList(data.docs[0]))

}

const displayBookList = bookData => {
    console.log(bookData)
    const bookList = document.getElementById('bookListId');
    // clear field data
    //boolList.innerHTML='';

    bookData.forEach(bookInfo => {

        const bookListDiv = document.createElement('div');
        bookListDiv.classList.add('col');
        bookListDiv.innerHTML = `
    
        
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="card-title">Book Name</h2>
                        <p class="card-text">Icon <span>${bookInfo.author_name[0]}</span></p>
                        <p class="card-text">Icon <span>${bookInfo.language[0]}</span></p>
                        <p class="card-text">Icon <span>${bookInfo.publish_date[0]}</span></p>
                        
                    </div>
            </div>
                
    `});
    bookList.appendChild(bookListDiv);

}