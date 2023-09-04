import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
        // General page layout is setup
        <div className="App">
            <Sidebar /> // Sidebar html is loaded in
            // Space for main page content is drawn out
            <div className='page'> 
                <span className='tags top-tags'>&lt;body&gt;</span>
            </div>

            <Outlet />

            <span className='tags bottom-tags'>
            &lt;/body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    )
}

export default Layout