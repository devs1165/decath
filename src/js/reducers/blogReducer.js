export default function reducer(state = {
    posts : [],
    edit:{},
    delete:{},
}, action){
    switch(action.type){
        case "POSTS" : {
            return { ...state, posts : action.payload }
        }
        case "EDIT" : {
            return { ...state, edit : action.payload }
        }
        case "DELETE" : {
            return { ...state, delete : action.payload }
        }

        default : {}
    }

    return state;
}