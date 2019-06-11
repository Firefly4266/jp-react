const initState = {
    post: []
}
const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD-POST'){
        console.log(state)
    }
}
export default rootReducer