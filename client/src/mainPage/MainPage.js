import './mainPage.scss'
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LoginPage from '../loginPage/LoginPage';
import RegisterPage from '../registerPage/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserMainPage from '../userMainPage/UserMainPage';

function MainPage() {
    return (
        <Router>
            <div>
                <Header />

                <UserMainPage />

                {/* <Routes>
                    <Route exact path='/' element={<Content />}/>
                    <Route path='/login-page' element={<LoginPage />} />
                    <Route path='/register-page' element={<RegisterPage />} />
                    <Route path='/*' element={<Content />} />
                </Routes> */}

                <Footer />
            </div>
        </Router>
    )
}

export default MainPage;