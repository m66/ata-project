import './headerGoodsField.scss';
import { Link } from 'react-router-dom';

function HeaderGoodsField() {
    return ( 
        <div className='goods-header'>
            <div>
                <h1>
                    <Link to='/goods/my-goods' className='goods-header-logo'>GOODS</Link>
                </h1>
            </div>
            <div className='goods-header-link'>
                <ul>
                    <li>
                        <Link to='/goods/cart' className='cart'>
                            <i className='fa fa-shopping-cart' />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderGoodsField;