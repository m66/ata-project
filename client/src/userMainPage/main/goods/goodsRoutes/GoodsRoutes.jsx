import { Route, Routes } from 'react-router-dom';
import Cart from '../cart/Cart';
import Productes from '../productes/Productes';

function GoodsRoutes({productes}) {
    return (
        <div>
            <Productes productes={productes}/>
            {/* <Routes>
                <Route path='/goods/my-goods' element={<Productes />} />
                <Route path='/goods/cart' element={<Cart />} />
                <Route path='/goods/*' element={<Productes />} />
            </Routes> */}
        </div>
    );
}

export default GoodsRoutes;