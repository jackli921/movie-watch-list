function renderHtml(movieArr, element, addBtn){    
    
    const btnText = addBtn ? {Symbol:"add", Text:"Watchlist"} :
                                {Symbol:"remove", Text:"Remove"}
                                
    const html = movieArr.map(movie=>{
        const {Poster, Title, Genre, Plot, Runtime, imdbID, imdbRating} = movie
        
        const currentRuntime = 
            Runtime === "N/A" ? `Runtime unknown! 🤔`: Runtime
        
        const currentRating = 
            imdbRating === "N/A" ? `No ratings avilable 😔`:
                imdbRating
                
        const currentPlot = 
            Plot === "N/A" ? `No plot found. Watch it to find out! 😲` :
            Plot
        
        const posterImg = 
            Poster === "N/A" ? `<img src="/img/poster_not_available.jpg" class="poster">`:`<img src="${Poster}" class="poster">`
        
        return `<div class="search-result-card">
                ${posterImg}
            
                <div class="result-texts">
                    <div class="text-row-1">
                        <span class="title">${Title}</span>
                        <img src="/img/icon-star.png" alt="">
                        <span class="rating" id="rating">${currentRating}</span>
                    </div>
            
                    <div class="text-row-2">
                        <span id="length">${currentRuntime}</span>
                        <span id="category">${Genre}</span>
                        
                        <button class="watchlist-btn" id="addToWatchlist" data-id="${imdbID}">
                            <img src="/img/icon-${btnText.Symbol}.png">
                            <span>${btnText.Text}</span>
                        </button>
                    </div>
            
                    <p class="summary">${currentPlot}</p>
                </div>
            </div>
            <hr>
        `
    }).join("")
    
    element.innerHTML = html
}

export { renderHtml }