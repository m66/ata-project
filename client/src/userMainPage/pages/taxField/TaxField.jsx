import './taxField.scss';

function NewPartners() {
    return (
        <div className='tax-field'>
            <div className='my-turnover'>
                <h1>My Turnover</h1>
                <div>
                    <h3>Schedule</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>1st month turnover</td>
                                <td>$10.000</td>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>12th month turnover</td>
                                <td>$16.000</td>
                            </tr>
                            <tr>
                                <td>Average value of total turnover by month</td>
                                <td>$10.400</td>
                            </tr>
                            <tr>
                                <td>Total turnover value by year</td>
                                <td>$125.000</td>
                            </tr>
                            <tr>
                                <td>Total tax value</td>
                                <td>$1.400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='download-pdf-btn'>Download PDF</button>
            </div>
            <div className='low-field'>
                <h1>Low</h1>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione quas eos corporis 
                    maiores quam voluptate officiis beatae harum sapiente impedit fugit, neque iste explicabo 
                    nobis quae veniam dolorum laborum cum debitis, delectus molestias itaque? Asperiores maxime 
                    dignissimos dolor ullam. Dicta at ducimus laudantium doloribus iusto doloremque nemo commodi,
                    laboriosam eius reiciendis distinctio, rem odio perspiciatis officiis corporis dignissimos
                    dolorum mollitia atque minima quibusdam? Eaque explicabo quasi quo dicta a. Facilis ad quod 
                    laborum dolores qui dolorum! Dicta laudantium ipsa repellendus deleniti nulla explicabo 
                    necessitatibus, id, ducimus at repellat soluta illo et quod velit sit perspiciatis culpa 
                    laboriosam vel? Pariatur quo nulla praesentium provident quaerat. Velit laudantium molestias
                    veritatis officia enim praesentium minus quia sequi ab? Nostrum, error iusto sunt incidunt 
                    nesciunt officiis ipsa eaque suscipit assumenda, dicta temporibus ipsam consectetur hic 
                    explicabo, officia nemo laboriosam aperiam? Quo, labore quod et repudiandae ea eaque quae 
                    similique tempore tempora. Tenetur, iure!
                </div>
            </div>
        </div>
    );
}

export default NewPartners;