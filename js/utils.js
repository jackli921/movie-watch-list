import { renderHtml } from "./renderHtml.js"

let localWatchlist = (JSON.parse(localStorage.getItem('watchlist'))? 
                      JSON.parse(localStorage.getItem('watchlist')):[])

function addtoWatchlist(id, completeDataArr){
    let selectedmovie = completeDataArr.filter((movie)=>{
        return movie.imdbID === id
    })[0]
    
    let targetIndex = completeDataArr.indexOf(selectedmovie)
    completeDataArr.splice(targetIndex, 1) 
    renderHtml(completeDataArr, feed, true)
    
    localWatchlist.unshift(selectedmovie)
    localStorage.setItem('watchlist', JSON.stringify(localWatchlist))
}

export { addtoWatchlist , localWatchlist}