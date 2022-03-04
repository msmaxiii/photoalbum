import { connect } from 'react-redux'
import { addFavorite , removeFavorite } from '../action/index'


const Photo =(props)=>{
//  console.log(props)
    const handleFavorite =(e) => {
        console.log(e.target.id)
        props.addFavorite(e.target.id);
        // props.removeFavorite.filter(e.target.id);
    }

    return(
        <div className="photo-container">
            <img src={props.photo.urls.small} alt='photo' id={props.photo.id}/>

            <div >
                <button id={props.photo.urls.small} onClick={handleFavorite}>
                    {props.favorite ? 'Remove from favorite': 'Add to Favorite'}
                </button>

            </div>
           
        </div>

    )

}
export default connect (null,{addFavorite,removeFavorite})(Photo);