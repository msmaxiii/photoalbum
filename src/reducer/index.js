import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_COMPLETE,
    FETCH_PHOTO_FAIL,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from './action';

const initialState ={
    Photolist:'',
    isLoading:false,
    error:'',
    favorites:[]
}

 export default function reducer(state = initialState,action){
    switch(action.type){
        case ADD_FAVORITE:
            return{...state,favorites: [...state.favorites,action.payload]
            }

        case REMOVE_FAVORITE:
            let newState = state.favorites.filter(photo =>photo!==action.payload)
            return {
                ...state,favorites:newState,
            }

        case FETCH_PHOTO_START:
            return{
                ...state,isLoading:true,Photolist:'',error:''
            } 

        case FETCH_PHOTO_COMPLETE:
            console.log(action.payload)
            return{
                ...state,Photolist: action.payload, isLoading:false, error:'',
            } 

        case FETCH_PHOTO_FAIL:
            return{
                ...state,isLoading:false, error: action.payload,Photolist:''
            }  
            default: return state;  

}}