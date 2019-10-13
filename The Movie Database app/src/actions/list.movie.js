export const listfilm = (film) => {
    //console.log(payload);
    return {
        type: 'LIST_LOAD',
        film
    }
}
export const fetchDataMovieList = url => {
    return (dispatch) => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res
        })
        .then(res => res.json())
        .then(films =>{
            dispatch(listfilm(films.items))
            
        })
    }
}
