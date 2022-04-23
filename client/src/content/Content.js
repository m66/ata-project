import './content.scss';
import facebook from '../images/fb.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

let lis = document.querySelectorAll('.socialMediaLinks li');

lis.forEach(li => {
    
});

function Content() {
    return (
        <div className='content'>
            <div className='info'>
                <h2>About Us</h2>
                <br/>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                of Lorem Ipsum.
            </div>
            <div className='socialMediaLinks'>
                <ul>
                    <li>
                        {/* <a href='#'> */}
                        {/* </a> */}
                            <img src={facebook} alt=''/>
                    </li>
                    <li>
                        {/* <a href='#'> */}
                            <img src={instagram} alt=''/>
                        {/* </a> */}
                    </li>
                    <li>
                        {/* <a href='#'> */}
                            <img src={twitter} alt=''/>
                        {/* </a> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Content;