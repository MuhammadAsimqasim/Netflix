import axios from 'axios';
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

instance.interceptors.request.use(config => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTQ2NjhhMGE3ZjhiNjNkODFiYTNmOGNkNzc0Y2U1OCIsInN1YiI6IjY1Njg5MmNjZmI1Mjk5MDExZjcwZGNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZSYu9Upg0960Rj04uTSUDDXer4mCKsK_JeAyTVf1n4';
    if (accessToken) config.headers.Authorization = 'Bearer ' + accessToken;  
    return config;
});

export default instance;