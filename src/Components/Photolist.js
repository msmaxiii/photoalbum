import { connect } from "react-redux"
import { fetchPhoto } from '../action'
import Photo from './Photo'
import { useEffect } from "react";

const MapStateToProps = (state)=>({
    Photolist: state.Photolist,
    isFetching:state.isFetching,
    error:state.error,
})
function Photolist(props){
    // console.log(props);
    useEffect(() =>{
    props.fetchPhoto()
    },[])

return(
<>

<div>
<div>Your Mind Awaits for you to Imagine Yourself Here </div>
    {props.isFetching ? 'FetchingPhoto':""}
    {props.error ? props.error:""}
    {props.Photolist && props.Photolist.map(photo => 
    <Photo photo ={photo} favorite ={false} key ={photo.id}/>)}

</div>

</>

)};

export default connect(MapStateToProps,{fetchPhoto})(Photolist)