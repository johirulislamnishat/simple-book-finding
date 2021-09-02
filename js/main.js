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
        //.then(data => console.log(data))
        .then(data => displayBookList(data))


}

const displayBookList = bookData => {

    const booksInfo = bookData.docs;

    //error id finding
    const displayError = document.getElementById('error');
    displayError.textContent = '';

    //totalcount id finding
    const totalBookCount = document.getElementById('totalCount');
    totalBookCount.textContent = '';

    //booklist id finding
    const bookListId = document.getElementById('bookListId');
    bookListId.textContent = '';

    //error handling
    if (bookData.numFound === 0 || bookData.numFound === '') {

        // const displayError = document.getElementById('error');
        // displayError.textContent = '';

        displayError.innerHTML = `
        <h1 class="text-center text-danger  mx-auto" >Ohhhhh! Please enter valid Book Name</h1>
`;

    }
    else {

        //total count
        totalBookCount.innerHTML = `

        <div class="card-body mt-2">
            <h4 class="text-center">Total: <span class="cardText"> ${booksInfo.length}</span> Out Of: <span class="cardText"> ${bookData.numFound}</span></h4>

                </div>
        `

        // show booklist

        booksInfo.forEach(bookList => {
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
}