import {renderHtml} from './renderHtml.js'

const watchlistContainer = document.getElementById('watchlist-feed')
const placeholderContainer = document.getElementById('placeholder-container')

let watchlist = 
(JSON.parse(localStorage.getItem('watchlist'))) ? JSON.parse(localStorage.getItem("watchlist")):[]
 
 
function renderWatchlist(){
    if(watchlist.length > 0){
        placeholderContainer.style.display = "none"
        renderHtml(watchlist, watchlistContainer, false)
    }
    else{
        placeholderContainer.style.display = "block"
        watchlistContainer.innerHTML = ``
    }
}
 
renderWatchlist()

document.addEventListener('click',(e)=>{
    if(e.target.id === "addToWatchlist"){
        removeFromWatchlist(e.target.dataset.id)
    }
})

function removeFromWatchlist(id){
    let targetMovie = watchlist.filter((movie)=>{
        return movie.imdbID === id
    })[0]
    watchlist.splice(targetMovie, 1)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    renderWatchlist()
}
