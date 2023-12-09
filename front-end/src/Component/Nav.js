import react, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (

        <div>
            <img className='logo' src='https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png' />

           {
                auth ? <ul className='nav-ul'>
                    <li><Link to="/">Product</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    {/* <li><Link to="/update">Update Product</Link></li> */}
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                    {/* <li>{auth ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">SignUp</Link>}</li>
                <li><Link to="/login">LogIn</Link></li> */}
                </ul>
                    :
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                    </ul>
            }

        </div>

    )
}
export default Nav;