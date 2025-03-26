import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import './Styles.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                {/* Part - 1 */}
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item"> <Link to={'/'}>Home</Link> </li>
                        <li className="nav-item"> <Link to={'/about'}>About</Link> </li>
                        <li className="nav-item"> <Link to={'/contact'}>Contact</Link> </li>
                        <li className="nav-item"> <Link to={'/users'}>Users</Link> </li>
                    </ul>
                </div>

                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </div>
            </BrowserRouter>





            {/* <BrowserRouter>
                <h1>Navigation Component</h1>

                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item"> <Link to={'/'}>Home</Link> </li>
                        <li className="nav-item"> <Link to={'/about'}>About</Link> </li>
                        <li className="nav-item"> <Link to={'/contact'}>Contact</Link> </li>
                        <li className="nav-item"> <Link to={'/users'}>Users</Link> </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/users" element={<Users />} />
                </Routes>

            </BrowserRouter> */}
        </div>
    )
}
export default Navigation