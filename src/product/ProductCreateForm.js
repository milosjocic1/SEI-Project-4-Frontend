import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function ProductCreateForm(props) {
  const [newProduct, setNewProduct] = useState({});

  const handleChange = (event) => {
    console.log(event.target)
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const product = { ...newProduct };
    product[attributeToChange] = newValue;
    console.log(product);
    setNewProduct(product);
  };

  const changeOptions = (event) => {
    const parentValue = event.target.value;
    let options;
    if (parentValue == "Fashion") {
      options = ""
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addProduct(newProduct);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Subtitle</Form.Label>
          <Form.Control name="subtitle" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Condition</Form.Label>
          <Form.Control name="condition" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Category</Form.Label>
          {/* <Form.Control name="category" type="text" onChange={handleChange}></Form.Control> */}
          <Form.Select name="category" type="text" onChange={handleChange}>
            <option>Open this select menu</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports, Hobbies, Leisure">Sports, Hobbies, Leisure</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="Motors">Motors</option>
            <option value="Media">Media</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Collectables and Art">Collectables and Art</option>
           </Form.Select>
        </Form.Group>
        <Form.Group >
          <Form.Label>Subcategory</Form.Label>
          {/* <Form.Control name="subcategory" type="text" onChange={handleChange}></Form.Control> */}
          <Form.Select name="subcategory" type="text" onChange={handleChange} changeOptions={changeOptions}>

            
            <option>Open this select menu</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports, Hobbies, Leisure">Sports, Hobbies, Leisure</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="Motors">Motors</option>
            <option value="Media">Media</option>
            <option value="Office Supplies">Office Supplies</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Collectables and Art">Collectables and Art</option>
           </Form.Select>
        </Form.Group>
        <Form.Group >
          <Form.Label>Shipping Rate</Form.Label>
          <Form.Control
            name="shippingRate"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Returns</Form.Label>
          <Form.Control
            name="returnsPolicy"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}
