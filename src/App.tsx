import './App.css'
import Main from './layout/sections/main/Main.tsx';
import Skills from './layout/sections/skills/Skills.tsx';
import {Works} from './layout/sections/works/Works.tsx';
import {Testimony} from './layout/sections/testimony/Testimony.tsx';
import {Contact} from './layout/sections/contact/Contact.tsx';
import {Slogan} from './layout/sections/slogan/Slogan.tsx';
import {Footer} from './layout/footer/Footer.tsx';
import {Header} from './layout/header/Header.tsx';


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    )
}

export default App

