import axios from 'axios'

export const FETCH_PHOTO_START ='FETCH_PHOTO_START'
export const FETCH_PHOTO_COMPLETE ='FETCH_PHOTO_COMPLETE'
export const FETCH_PHOTO_FAIL ='FETCH_PHOTO_FAIL'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE ='REMOVE_FAVORITE'

export const addFavorite =(photo)=>(dispatch)=>{
    dispatch({type:ADD_FAVORITE, payload:photo})
}
export const removeFavorite =(photo)=>(dispatch)=>{
    dispatch({type:REMOVE_FAVORITE, payload:photo})
}
export const fetchPhotos = () => dispatch =>{
    dispatch({type:FETCH_PHOTO_START})
}
axios
.get('')
.then(data =>{ console.log(data);
    dispatch({type:FETCH_PHOTO_COMPLETE, payload:data.data.file})
})
.catch(err =>{
({type:FETCH_PHOTO_FAIL, payload:err.NOT_FOUND})
})
