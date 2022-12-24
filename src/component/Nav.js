import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='container'>
            <div className="content">
                <h2>Emoticon</h2>
            </div>
            <div className="assets">
                <ul>
                    <li>
                        <Link class="link" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link class="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link class="link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav