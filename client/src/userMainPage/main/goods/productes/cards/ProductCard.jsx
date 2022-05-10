import './productCard.scss'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function ProductCard({name, price, image}) {
    return (
        <Card>
            <CardImg
            alt={name}
            src={`/imgs/goodImgs/${image}`}
            top
            width="100%"
            height="150px"
            />
            <CardBody>
            <CardTitle tag="h5">
                {name}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                ${price}
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
                Open
            </Button>
            </CardBody>
        </Card>
    );
}

export default ProductCard;