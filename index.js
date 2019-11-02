document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        moviesHTML = movieArray.map(function (currentMovie) {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${currentMovie.Title} ${currentMovie.Year}</p>
            </div>
            </div>`
        })
        return moviesHTML.join()
    }
      
    let content = document.getElementsByClassName("movie")[0];
    // document.getElementById("searchButton").addEventListener("submit", renderMovies(movieData))
    // content.innerHTML = (renderMovies(movieData))   
    $('#searchButton').click(function() {
        content.innerHTML = renderMovies(movieData)
    })
})

