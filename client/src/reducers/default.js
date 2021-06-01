
const initialState = {
    loading: false
}

const defaultReducer = (state = initialState, action) => {
    const { type, payload} = action
    switch (type) {
        case 'LOADING':
            return {
                loading: true
            }
        case 'LOADED':
                return {
                    loading: false
                }
       
         
    
        default:
            return state
    }
}

export default defaultReducer