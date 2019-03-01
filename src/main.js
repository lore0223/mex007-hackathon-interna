const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));
let titles = ['robocop', 'mean-girls', '10-things-i-hate-about-you',
'batman','kill-bill', 'sleepy-hollow','it', 'beetlejuice', 'avatar', 'mockingjay', 'the-notebook', 'amelie',
'blue-valentine', 'pride-and-prejudice', 'love-rosie', 'submarine', 'like-crazy','the-nun','the-exorcist','the-exorcism-of-emily-rose','insidious'];

let allMovies = [];
let resultsMovies = document.getElementById('results');
const btn = document.getElementById('btn');
const searcher = document.getElementById('searcher');
let searcherValue =

btn.addEventListener ('click' , () => {
 let searcherValue = searcher.value;
 console.log(searcherValue);
 const consumingApi = fetchingApi(searcherValue);
})

let searchResult = [];

const fetchingApi = (searcherValue) => {
fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+searcherValue)
.then(res => res.json())
.then(data => {
 searchResult.push(data)
 printSearchResult(searchResult)
})
return searchResult;
};

console.log(searchResult)


for(let i= 0; i< titles.length; i++) {
   fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+ titles[i])
   .then(res => res.json())
       .then (data => {
         allMovies.push(data)
         return allMovies;
       })
   }

   for (let boton in buttonTypes){
     buttonTypes[boton].addEventListener('click', (event) =>{
     const genre = event.target.id
     console.log(genre)
      let r = window.movies.filterGenre(allMovies , genre);
      resultadoImg (r)
      
    })};
    const clickMovie = document.getElementsByClassName('click-movie');
    const singularMovie= document.getElementById('singular-movie');


const resultadoImg = (allMovies) => {
 resultsMovies.innerHTML="";
 allMovies.forEach(element => {
   const arrayProperties= `<div  id="${element.Title}" class='click-movie'><img src="${element.Poster}"> <p> ${element.Title}${element.Runtime}</p></div>`
   resultsMovies.insertAdjacentHTML('beforeend', arrayProperties);
});
for(let i=0; i<clickMovie.length; i++){
    clickMovie[i].addEventListener('click',()=>{
        resultsMovies.classList.add('hide');
         singularMovie.classList.remove('hide');
      const electedMovie=clickMovie[i].id;
      const oneMovie= window.movies.filterSingularMovie(allMovies,electedMovie);
      console.log (oneMovie)
    })
    }
}

const printSearchResult = (searchResult) => {
 searchResult.forEach(element => {
   resultsMovies.innerHTML="";
   const arrayProperties= `<img src="${element.Poster}"> <p> ${element.Title}${element.Runtime}</p>`
   resultsMovies.insertAdjacentHTML('beforeend', arrayProperties);
});
}

