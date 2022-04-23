import Ads from './ads/Ads';
import List from './list/List';
import './userMainPage.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import CoWorkers from './pages/coWorkers/CoWorkers';
import MyOrder from './pages/myOrders/MyOrder'
import Market from './pages/market/Market';
import Progress from './pages/progress/Progress';
import NewPartners from './pages/newPartners/NewPartners';
import Feedback from './pages/feedback/Feedback'
import Settings from './pages/settings/Settings';

function UserMainPage() {
    return (
        <div className='userMainPage'>
            <List />
            <div className='pages'>
                <Routes>
                    <Route path='/goods' element={<Main />} />
                    <Route path='/co-workers' element={< CoWorkers/>} />
                    <Route path='/order' element={< MyOrder/>} />
                    <Route path='/market' element={< Market/>} />
                    <Route path='/progress' element={< Progress/>} />
                    <Route path='/new-partners' element={< NewPartners/>} />
                    <Route path='/feedback' element={< Feedback/>} />
                    <Route path='/settings' element={< Settings/>} />
                    <Route path='/*' element={< Main/>} />
                </Routes>
            </div>
            <Ads />
        </div>
    )
}

export default UserMainPage;