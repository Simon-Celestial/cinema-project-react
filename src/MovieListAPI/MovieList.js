export const getData = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d323ed554bb4852147d6630b1aa573a3')
    let data = await res.json()
    return data;
}