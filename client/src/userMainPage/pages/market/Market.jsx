import './market.scss';

function Market() {
    return (
        <div className='market'>
            <h1>Market</h1>
            <nav>
                <div>Main</div>
                <div>Productes</div>
                <div>Categories</div>
                <div>Companies</div>
                <div>
                    <input type='text' placeholder='Search Company / category / product' />
                </div>
            </nav>
            <div className='recomended-productes-field'>
                <div className='recomended-producte-card'>
                    <div className='recomended-producte-card-img'></div>
                    <div className='recomended-producte-card-info-wrapper'>
                        <p>Product Name</p>
                        <p>Company</p>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;