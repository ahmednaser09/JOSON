
const books = {
    booksList: [
        {
            title: " Book1",
            author: " ali mousa",
            publicationDate: "2022-01-01"
        },
        {
            title: " Book2",
            author: " ahmed naser",
            publicationDate: "2021-05-15"
        },
        {
            title: " Book3",
            author: "naser hashem",
            publicationDate: "2020-09-30"
        }
    ]
};


function getBookTitles(jsonObject) {
    return jsonObject.booksList.map(book => book.title);
}


const bookTitles = getBookTitles(books);
console.log(bookTitles); 