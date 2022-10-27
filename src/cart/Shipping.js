import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ShippingForm(props) {
  const [newShipping, setNewShipping] = useState(props.shipping);

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const shipping = { ...newShipping };
    shipping[attributeToChange] = newValue;
    setNewShipping(shipping);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editAuthor(newProduct);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Shipping & Billing</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <div>Your Shipping Address</div>  
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            name="addressLine1"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            name="addressLine2"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>County</Form.Label>
          <Form.Control
            name="county"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>PostCode</Form.Label>
          <Form.Control
            name="price"
            type="text"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" type="text" onChange={handleChange}>
            <option>Open this select menu</option>
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
          <Form.Select name="subCategory" type="text" onChange={handleChange}>
            <option>Open this select menu</option>
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
          <Form.Label>Shipping Rate</Form.Label>
          <Form.Control
            name="shippingRate"
            type="text"
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

        <Button variant="primary" value="Update Product" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
