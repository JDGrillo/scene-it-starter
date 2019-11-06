document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        moviesHTML = movieArray.map(function (currentMovie) {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${currentMovie.Title} ${currentMovie.Year}</p>
            <button class="btn btn-primary input-group-btn" type="submit" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</button>
            </div>
            </div>`
        })
        return moviesHTML.join()
    }

    let content = document.getElementsByClassName("movie")[0];
    // document.getElementById("searchButton").addEventListener("submit", renderMovies(movieData))
    // content.innerHTML = (renderMovies(movieData))   
    $('#searchButton').click(function (e) {
        e.preventDefault()
        content.innerHTML = renderMovies(movieData)
        console.log(renderMovies(movieData))
    })
})

function saveToWatchlist(imdb) {
    let movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdb
    })
    console.log(movieData)
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    if (watchlist === null) {
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)

}