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
export const fetchPhoto = () => dispatch =>{
    dispatch({type:FETCH_PHOTO_START})
console.log('here');
axios
.get('https://api.unsplash.com/collections/z2cqu0Gyn0U/photos/?client_id=OjWTcJNA_Vhs6R_XUJnqyNC6J-SIxJ_217tx8fjn-_s')

.then(data =>{
     console.log(data.data);
    dispatch({type:FETCH_PHOTO_COMPLETE, payload:data.data})
})
.catch(err =>{
dispatch ({type:FETCH_PHOTO_FAIL, payload:console.err})
})
}
