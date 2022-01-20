import { Link }  from 'react-router-dom';
const Navbar = () => {
    return (
            <nav className="nav navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand mr-3" to="/">Mesh photography</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-right mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/gallery'> Gallery </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'> About </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="  nav-link dropdown-toggle" to='/booksession' id="navbarDropdown" 
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to='/booksession'> Book Session</Link></li>
                                    <li><Link className="dropdown-item" to='/paysession'> Pay for a Session</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to='/requestquote'> Request a Quotation</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <br />
            </nav>
            
    )
}

export default  Navbar;