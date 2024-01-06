const API_KEY = "e14668a0a7f8b63d81ba3f8cd774ce58"


const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTQ2NjhhMGE3ZjhiNjNkODFiYTNmOGNkNzc0Y2U1OCIsInN1YiI6IjY1Njg5MmNjZmI1Mjk5MDExZjcwZGNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZSYu9Upg0960Rj04uTSUDDXer4mCKsK_JeAyTVf1n4"

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_networks=213`,
    fetchNetlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRommanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default request;