window.movies = {
    filterGenre: (data, buttonId) => {
        const filterMovieByGenere = data.filter(data => data.Genre.includes(buttonId))
        console.log(filterMovieByGenere)
    }
}