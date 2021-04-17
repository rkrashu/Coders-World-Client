import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import image from '../../../../image/programming.png'


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const handleSignOut = () =>{
        setLoggedInUser({})
        sessionStorage.removeItem('token')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark text-primary">
                <div class="container-fluid">
                   <Link to='/' class="navbar-brand text-white"> 
                        <img src={image}  style={{width:'30px'}} class="d-inline-block align-text-top"/>
                            Coders World
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class=" navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page" to ='/'>Home</Link></a>
                                </li>
                                <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page" to ='#'>Services</Link></a>
                                </li>
                                <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page" to ='/Dashboard'>Dashboard</Link></a>
                                </li>
                                <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page"  to ='#'>Admin</Link></a>
                                </li>
                                <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page" to ='#'>Contact Us</Link></a>
                                </li>
                                
                                {
                                    loggedInUser && 
                                    <li class="nav-item me-3">
                                    <a><Link class="text-white nav-link active" aria-current="page" to ='/'>{loggedInUser.name}</Link></a>
                                    </li>
                                    
                                }
                                {
                                    !loggedInUser.email?
                                   <li class="nav-item me-3"><Link class="text-white nav-link active" aria-current="page" to ='/login'>Login</Link></li>:
                                   <li class="nav-item me-3">
                                    <a><Link onClick={handleSignOut} class="text-white nav-link " aria-current="page">Sign Out</Link></a>
                                </li>
                                
                                }
                            </ul>
                        </div>
                </div>
            </nav>
        </div >
    );
}
export default Navbar;