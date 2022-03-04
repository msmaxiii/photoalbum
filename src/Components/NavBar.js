import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav style={container}>
            <Link to='/' style={{ color:"#fff"}}>Home</Link>
            <Link to='/Photogallery'>Photolist</Link>
            <Link to='/Favorite'>Favorite</Link>
            
        </nav>
    )
    }
   const container ={
       display: "flex",
       justifyContent: "space-around",
       backgroundColor: "#f1bd0e",
       height: "50px"
    
}
export default NavBar;