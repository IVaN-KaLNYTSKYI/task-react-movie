import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        "api_key": '8aaf14eada5c1779a594aaa553b31207'
    }
}

let axiosInstance = axios.create(options);

const path = {
    discover: '/discover/movie',
    movie: '/movie/'
}

const getMovie = (page) => {
    return axiosInstance.get(path.discover + "?page=" + page) // promise
};

const getMovieId = (id) => {
    return axiosInstance.get(path.movie + id); // promise
};
const getVideo = (id) => {
    return axiosInstance.get('/movie/'+id+"/videos"); // promise
};
const getMovieSearch = (page,text) => {
    return axiosInstance.get("/search/movie?query="+text+"&page="+page); // promise
};

export {getMovie, getMovieId,getVideo,getMovieSearch}