import { connect } from 'react-redux'
import { addFavorite , removeFavorite } from '../action/index'


const Photo =(props)=>{
//  console.log(props)
    const handleFavorite =(e) => {
        props.addFavorite(e.target.id);
        props.removeFavorite.filter(e.target.id);
    }

    return(
        <div >
            <img src={props.photo.urls.small} alt='photo' id={Photo}/>

            <div >
                <button id={Photo} onClick={handleFavorite}>
                    {props.favorite ? 'Remove from favorite': 'Add to Favorite'}
                </button>

            </div>
           
        </div>

    )

}
export default connect (null,{addFavorite,removeFavorite})(Photo);