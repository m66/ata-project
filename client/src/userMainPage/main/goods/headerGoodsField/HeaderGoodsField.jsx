import "./headerGoodsField.scss";
import { Link } from "react-router-dom";
import {
  Button,
  Input
} from "reactstrap";
import { useState } from "react";
import ModalWindow from "../../../../shared/modalWindow/ModalWindow";

const SearchInput = () => {
  return <Input type="search" placeholder="Search" name="search"></Input>;
};

const SortSelect = () => {
  return (
    <Input name="sort_by" type="select">
      <option>Sort By</option>
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Todo at Newest</option>
    </Input>
  );
};

function HeaderGoodsField() {
  const [modal, setModal] = useState(false);
  console.log(modal);
  const toggle = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div className="goods-header">
      <div>
        <h1>
          <Link to="/goods/my-goods" className="goods-header-logo">
            GOODS
          </Link>
        </h1>
      </div>
      <div className="good-header-title">
        <h3>Title</h3>
      </div>
      <div className="goods-header-link">
        <ul>
          <li>
            <SearchInput />
          </li>
          <li>
            <SortSelect />
          </li>
          <li>
            <Button color="danger" onClick={toggle}>
              +
            </Button>
            <ModalWindow modal={modal} toggle={toggle}/>
          </li>
          <li>
            <Link to="/goods/cart" className="cart">
              <i className="fa fa-shopping-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderGoodsField;
