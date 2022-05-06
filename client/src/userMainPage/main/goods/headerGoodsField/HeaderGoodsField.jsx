import './headerGoodsField.scss';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from 'react';

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

const ModalWindow = () => {
    return (
        <Modal toggle={function noRefCheck(){}}>
            <ModalHeader
            close={<button className="close" onClick={function noRefCheck(){}}>×</button>}
            toggle={function noRefCheck(){}}
            >
            Modal title
            </ModalHeader>
            <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={function noRefCheck(){}}
                >
                    Do Something
                </Button>
                {' '}
                <Button onClick={function noRefCheck(){}}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

function HeaderGoodsField() {

    const [modal, setModal] = useState(false);
    console.log(modal)
    const toggle = () => {
        setModal(!modal);
        console.log(modal)
    }

    return ( 
        <div className='goods-header'>
            <div>
                <h1>
                    <Link to='/goods/my-goods' className='goods-header-logo'>GOODS</Link>
                </h1>
            </div>
            <div className='good-header-title'>
                    <h3>Title</h3>
            </div>
            <div className='goods-header-link'>
                <ul>
                    <li>
                        <SearchInput />
                    </li>
                    <li>
                        <SortSelect />
                    </li>
                    <li>
                    <Button
                        color="danger"
                        onClick={toggle}
                    >
                        +
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader
                        close={<button className="close" onClick={toggle}>×</button>}
                        toggle={function noRefCheck(){}}
                        >
                        Add new product
                        </ModalHeader>
                        <ModalBody>
                            You need to fell all fields, otherwise you can blocked!!!
                            <FormGroup>
                                <Label for="product-name">
                                    Product name
                                </Label>
                                <Input
                                    id="product-name"
                                    name="productName"
                                    placeholder="Title"
                                    type="text"
                                />
                                <Label for="product-price">
                                    Price
                                </Label>
                                <Input
                                    id="product-price"
                                    name="price"
                                    placeholder="price"
                                    type="number"
                                />
                                <Label for="product-description">
                                    Description
                                </Label>
                                <Input
                                    id="product-description"
                                    name="productDescription"
                                    placeholder="Description"
                                    type="text"
                                />
                                <Label for="producte-image">
                                    Product Image
                                </Label>
                                <Input
                                    id="producte-image"
                                    name="producte-image"
                                    type="file"
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={function noRefCheck(){}}
                            >
                                Add
                            </Button>
                            {' '}
                            <Button onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                    </li>
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