import React from "react";

export default function ProductCreateForm(props) {
  const [newProduct, setNewProduct] = useState({});

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const product = { ...newProduct };
    product[attributeToChange] = newValue;
    console.log(product);
    setNewProduct(product);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addProduct(newProduct);
    event.target.reset();
  };

  return (
    <div>
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
          <Form.Control name="category" type="text" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Subcategory</Form.Label>
          <Form.Control name="subcategory" type="text" onChange={handleChange}></Form.Control>
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
