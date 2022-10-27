import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function ProductCreateForm(props) {
  const [newProduct, setNewProduct] = useState({});

  const thisSellerId = props.seller._id;

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const product = { ...newProduct };
    product[attributeToChange] = newValue;

    setNewProduct(product);
  };

  // const changeOptions = (event) => {
  //   const parentValue = event.target.value;
  //   let options;
  //   if (parentValue == "Fashion") {
  //     options = ""
  //   }
  // }
  function updatePage() {
    props.handleShowAddProductForm(false);
    // props.myProducts();
  }

  // const changeOptions = (event) => {
  //   const parentValue = event.target.value;
  //   let options;
  //   if (parentValue == "Fashion") {
  //     options = ""
  //   }
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.functions.addProduct(newProduct, thisSellerId);
    event.target.reset();
    updatePage();
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            name="subTitle"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Condition</Form.Label>
          <Form.Control
            name="condition"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          {/* <Form.Control name="category" type="text" onChange={handleChange}></Form.Control> */}
          <Form.Select
            name="category"
            type="text"
            onChange={handleChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Categories
            </option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports, Hobbies, Leisure">
              Sports, Hobbies, Leisure
            </option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="Motors">Motors</option>
            <option value="Media">Media</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Collectables and Art">Collectables and Art</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Subcategory</Form.Label>
          {/* <Form.Control name="subcategory" type="text" onChange={handleChange}></Form.Control> */}
          <Form.Select
            name="subCategory"
            type="text"
            onChange={handleChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Sub-Categories
            </option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports, Hobbies, Leisure">
              Sports, Hobbies, Leisure
            </option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="Motors">Motors</option>
            <option value="Media">Media</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Collectables and Art">Collectables and Art</option>
          </Form.Select>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            name="seller"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group> */}

        <Form.Group>
          <Form.Label>Shipping Rate</Form.Label>
          <Form.Control
            name="shippingRate"
            type="number"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Returns</Form.Label>
          <Form.Control
            name="returnsPolicy"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        {/* <Form.Group>
          <Form.Check
            type="radio"
            id="custom-switch"
            label="I am ready to sell it!"
            name="seller"
            defaultValue={thisSellerId}
          />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
