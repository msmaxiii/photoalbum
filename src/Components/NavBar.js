import { Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav style={container}>
            <Link to='/' style={{ color:"#fff"}}>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Favorite'>Favorite</Link>
            <Link to='/Add Contact Information'>Contact Us</Link>
        </nav>
    )
    }
   const container ={
       display: "flex",
       justifyContent: "space-around",
       backgroundColor: "#3498db",
       height: "50px"
    
}
export default NavBar;