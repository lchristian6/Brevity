import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav.jsx'
import Footer from './Footer/Footer.jsx'
import URLForm from "./URLShortenerForm/URLForm.jsx";

function App() {

    return (
        <>
            <Nav/>
            <URLForm/>
            <Footer/>
        </>
    );
}

export default App
