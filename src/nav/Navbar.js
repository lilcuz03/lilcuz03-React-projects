import logo from '../images/logo/lilcuz03_logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="row bg-success">
            <div className="my-2   bg-dark col-4">
                <img src={logo} id='logo-image' alt='logo' />
            </div>

            <div className=" my-2 bg-dark col-4">
                <h3>Tafadzwa</h3>
            </div>

            <div className="my-2  bg-dark col-4">
                <div className='row text-center'>
                    <Link to='/' className='col-4'>
                    <button id='btn' className='btn  btn-border-none'>
                        Home
                    </button>
                    </Link>
                    <Link to='/about' className='col-4'>
                    <button id='btn' className='btn  btn-border-none'>
                        About
                    </button>
                    </Link>
                    <Link to='/myprojects' className='col-4 '>
                    <button id='btn' className='btn btn-border-none'>
                        Projects
                    </button>
                    </Link>
                </div>
            </div>

        </div>
     );
}
 
export default Navbar;