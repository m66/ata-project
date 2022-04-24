import './coWorkers.scss';

function CoWorkers() {
    return (
        <div className='all-co-workers'>
            <div className='co-worker id1'>
                <div className='co-worker-info'>
                    <div className='co-worker-info-id'><h2>1.</h2></div>
                    <div className='co-worker-info-img'>Logo</div>
                    <div className='co-worker-info-name'><h2>Company Name</h2></div>
                </div>
                <div className='co-worker-data'>
                    <div className='co-worker-count-products'>Productes Count: 7/15</div>
                </div>
            </div>
        </div>
    );
}

export default CoWorkers;