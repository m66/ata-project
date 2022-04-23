import './goods.scss';
import data from './Data/Data'
import HeaderGoodsField from './headerGoodsField/HeaderGoodsField';
import GoodsRoutes from './goodsRoutes/GoodsRoutes'
function Goods() {
    const { productItems } = data;
  
    return (
        <div className='goods'>
            <HeaderGoodsField />
            <GoodsRoutes />
        </div>
    )
}

export default Goods;