document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        finalHTML = ""
        moviesHTML = movieArray.map(function (currentMovie) {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${currentMovie.Title}</p>
            </div>
            </div>`
        })
        finalHTML += moviesHTML.join()
        return finalHTML
    }
    // let content = document.getElementById("movie");
    // content.innerHTML = (renderMovies(movieData))
    
})

