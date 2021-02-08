import React from 'react'
import Navbar from '../components/navbar'

import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) => {
    return (
        <div>
            <main>
              <Navbar />
            {props.children}
            </main>
        </div >
    )
}

export default Layout