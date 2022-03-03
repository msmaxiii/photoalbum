import { connect} from 'react-redux'
import Photo from './Photo'


const mapStateToProps =state =>({
  favoritePhoto:state.favorites
})

const Favorite=({favoritePhoto}) =>{
  return (
    <div>
        {favoritePhoto.length > 0 ? favoritePhoto.map((photo)=> <img src={photo} alt='photo'/> ) : <h3> No Favs</h3>}

    </div>
  )
}
export default connect (mapStateToProps,{})(Favorite)
