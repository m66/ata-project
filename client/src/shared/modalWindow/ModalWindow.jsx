import { useState } from "react";
import {
  Button,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import {
  isRequier,
  minLength3,
  maxLength15,
  priceValidate,
} from "../../helpers/validation";


function ModalWindow({ modal, toggle }) {
  const [inputsData, setInputsData] = useState({
    productName: {
      value: "",
      error: undefined,
      validations: [isRequier, minLength3, maxLength15],
    },
    price: {
      value: 0,
      error: undefined,
      validations: [isRequier, priceValidate],
    },
    productDescription: {
      value: "",
      error: undefined,
      validations: [isRequier, minLength3, maxLength15],
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    //   debugger
    const { value, name } = e.target;
    const { validations } = inputsData[name];
    let error;

    for(let i = 0; i < validations.length; i++) {
        const validation = validations[i];
        console.log(validation)
        const errorMessage = validation(value);

        if(errorMessage) {
            error = errorMessage;
            break;
        }
    }

    setInputsData((prev) => {
        return {
            ...prev,
            [name]: {
                ...prev[name],
                value,
                error
            }
        };
    });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader
        close={
          <button className="close" onClick={toggle}>
            ×
          </button>
        }
        toggle={function noRefCheck() {}}
      >
        Add new product
      </ModalHeader>
      <ModalBody>
        You need to fell all fields, otherwise it will be canceled!!!
        <FormGroup>
          <Label for="product-name">Product name</Label>
          <Input
            id="product-name"
            name="productName"
            placeholder="Title"
            type="text"
            onChange={handleChange}
            invalid={!!inputsData.productName.error}
          />
          {!!inputsData.productName.error && (
            <FormFeedback>{inputsData.productName.error}</FormFeedback>
          )}
          <Label for="product-price">Price</Label>
          <Input
            id="product-price"
            name="price"
            placeholder="price"
            type="number"
            onChange={handleChange}
            invalid={!!inputsData.price.error}
          />
          {!!inputsData.price.error && (
            <FormFeedback>{inputsData.price.error}</FormFeedback>
          )}
          <Label for="product-description">Description</Label>
          <Input
            id="product-description"
            name="productDescription"
            placeholder="Description"
            type="text"
            onChange={handleChange}
            invalid={!!inputsData.productDescription.error}
          />
          {!!inputsData.productDescription.error && (
            <FormFeedback>{inputsData.productDescription.error}</FormFeedback>
          )}
          <Label for="producte-image">Product Image</Label>
          <Input id="producte-image" name="producte-image" type="file" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onSubmit}>
          Add
        </Button>{" "}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalWindow;
