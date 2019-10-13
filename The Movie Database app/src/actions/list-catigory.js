export const listcatigory = (catigory) => {
    //console.log(payload);
    return {
        type: 'CAT_LOAD',
        catigory
    }

}

export const fetchDataCatigory = url => {
    return (dispatch) => {
        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                    return res;
                
            })
            .then(res => res.json())
            .then(catigory => {
                //console.log(popularfilms.results)
                dispatch(listcatigory(catigory.genres))
            }
            )
    }
}
