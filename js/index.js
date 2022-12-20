import { addtoWatchlist, localWatchlist } from "./utils.js"
import { renderHtml } from "./renderHtml.js"

const searchBtn = document.getElementById('search-button')
const noResultMsg = document.getElementById('no-result-msg')
const startExploringMsg = document.getElementById('start-exploring')
let feed = document.getElementById('feed')
let completeDataArr = []

searchBtn.addEventListener('click', handleSearch)

function handleSearch(){
    completeDataArr = []
    let Title = document.getElementById('search-bar').value
    
    if(Title){
        fetch(`https://www.omdbapi.com/?apikey=d80a6534&s=${Title}`)    
        .then(response => response.json())
        .then(data =>{  
            if (data.Search){
                
                noResultMsg.style.display = "none"
                startExploringMsg.style.display = "none"
                
                let movieIds = data.Search.map(movie =>{
                    return movie.imdbID
                })
                getMovies(movieIds)   
            }    
        
            else{
                noResultMsg.style.display = "block"
                startExploringMsg.style.display = "none"
            }
        })
    }
        
    else{     
        alert("Please enter a movie title")
        }
}

function getMovies(movieIds){
    let searchResultArr = movieIds.map(id=>{
        fetch(`https://www.omdbapi.com/?apikey=d80a6534&i=${id}&page=1`)
        .then(res =>res.json())
        .then(data=>{
            getCompleteDataArr(data)
        })
    })
}

function getCompleteDataArr(data){
    completeDataArr.push(data)
    renderHtml(completeDataArr, feed, true)
}

document.addEventListener('click',(e)=>{
    if (e.target.id === "addToWatchlist"){
        addtoWatchlist(e.target.dataset.id, completeDataArr)
    } 
})


