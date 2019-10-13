const ListMovie = (state = [], action) =>{
    switch (action.type) {
        case 'LIST_LOAD':
            return action.film
           
        default:
            return state
    }
}
export default ListMovie;