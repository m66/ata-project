import './myOrder.scss'

function MyOrder() {
    return (
        <div className='user-orders'>
            <h1>My orders</h1>
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Product Name</td>
                        <td>Company</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Total Price</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samsung S21</td>
                        <td>Samsung</td>
                        <td>15</td>
                        <td>$800</td>
                        <td>$12.000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>iPhone 12</td>
                        <td>Apple</td>
                        <td>8</td>
                        <td>$600</td>
                        <td>$4.800</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyOrder;