export const getData = async (page) => {
    let res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=d323ed554bb4852147d6630b1aa573a3`)
    let data = await res.json()
    return data.results;
}
