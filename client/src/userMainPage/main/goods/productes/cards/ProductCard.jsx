import "./productCard.scss";
import defaultProductImg from "../../goodImgs/default-product-img.png";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { BACKEND_URL } from "../../../../../consts";

function ProductCard({ _id, title, image, price='unknow price', description, setDeletedProductId }) {

  const onDelete = () => {
    setDeletedProductId(_id);
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "DELETE"
    })
    .then(response => response.text())
    .then(res => console.log(res))
  }

  return (
    <Card>
      <CardImg
        alt={title}
        src={!image ? defaultProductImg : `/imgs/goodImgs/${image}`}
        top
        width="100%"
        height="150px"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          ${price}
        </CardSubtitle>
        <CardText>
          {description}
        </CardText>
        <Button>Open</Button>
        <Button className="product-delete-btn" onClick={onDelete}>Delete</Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;