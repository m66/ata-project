import { Card, CardGroup } from 'reactstrap';
import ProductCard from './cards/ProductCard';
import './productes.scss';
import data from '../Data/Data'

function Productes() {
    return (
        <div>
            <CardGroup>
                {
                    data.productItems.map(product => {
                        return <ProductCard key={product.id} {...product}/>
                    })
                }
            </CardGroup>
  
        </div>
    );
}

export default Productes;