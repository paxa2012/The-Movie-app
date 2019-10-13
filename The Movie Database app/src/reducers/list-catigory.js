const ListCatigory = (state = [], action) => {
    //console.log(state)
    switch (action.type) {
        case 'CAT_LOAD':
            return action.catigory

        default:
            return state
    }
}
export default ListCatigory