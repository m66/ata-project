import './goods.scss';
import HeaderGoodsField from './headerGoodsField/HeaderGoodsField';
import GoodsRoutes from './goodsRoutes/GoodsRoutes'
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../../consts';

function Goods() {

    const [productes, setProductes] = useState([]);
    
    useEffect(() => {
        fetch(`${BACKEND_URL}/task`)
            .then(response => response.json())
            .then(data => setProductes(data))
    }, [])

    return (
        <div className='goods'>
            <HeaderGoodsField setProductes={setProductes}/>
            <GoodsRoutes productes={productes}/>
        </div>
    )
}

export default Goods;