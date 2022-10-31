import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";


export default function ProductCreateForm(props) {
  const [newProduct, setNewProduct] = useState({});


  console.log(props)
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
    props.handleSubmitFileProduct(props.response.data.user._id);
    updatePage();
  };

  const handleProductFileInputChange = (e) => {
    props.handleProductFileInputChange(e)
  };



  return (
    <div className="container add-form">
      <h1>Let's sell it!</h1>
      <form encType="multiform/form-data">
        <input
          className="add-product-field full-width"
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Product name"
        ></input>
        <input
          className="add-product-field full-width"
          name="subTitle"
          type="text"
          onChange={handleChange}
          placeholder="Product Subtitle"
        ></input>
        <input
          className="add-product-field full-width"
          name="description"
          type="textarea"
          onChange={handleChange}
          placeholder="Description"
        ></input>
        <input
          className="add-product-field full-width"
          name="condition"
          type="text"
          onChange={handleChange}
          placeholder="Condition"
        ></input>
        <input
          className="add-product-field full-width"
          name="price"
          type="text"
          onChange={handleChange}
          placeholder="Price in £"
        ></input>
        <div>
          <select
            className="add-product-field full-width"
            name="category"
            onChange={handleChange}
            placeholder="Category"
          >
            <option value="no-category">Category</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="sports-hobbies-leisures">
              Sports, hobbies, leisures
            </option>
            <option value="home-garden">Home and Garden</option>
            <option value="motors">Motors</option>
            <option value="media">Media</option>
            <option value="office-supplies">Office Supplies</option>
            <option value="health-beauty">Health and Beauty</option>
            <option value="collectables-art">Collectables and Art</option>
          </select>
        </div>{" "}
        <br />
        <div>
          <select
            className="add-product-field full-width"
            type="text"
            name="subCategory"
            onChange={handleChange}
            placeholder="Subcategory"
          >
            <option value="no-category">Sub Category</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="sports-hobbies-leisures">
              Sports, hobbies, leisures
            </option>
            <option value="home-garden">Home and Garden</option>
            <option value="motors">Motors</option>
            <option value="media">Media</option>
            <option value="office-supplies">Office Supplies</option>
            <option value="health-beauty">Health and Beauty</option>
            <option value="collectables-art">Collectables and Art</option>
          </select>
        </div>{" "}
        <br />
        <input
          className="add-product-field full-width"
          name="shippingRate"
          type="text"
          onChange={handleChange}
          placeholder="Shipping Rate"
        ></input>
        <input
          className="add-product-field full-width"
          name="returnsPolicy"
          type="text"
          onChange={handleChange}
          placeholder="Your returns policy"
        ></input>
        <br />
        <label>Upload a photo of the product</label>&nbsp;<br></br>
        <div>
          <input
            className="add-product-field full-width"
            name="cloudinary_url"
            type="file"
            onChange={handleProductFileInputChange}
          ></input>
        </div>
        <div>
          {props.previewSourceProduct && (
            <img
              src={props.previewSourceProduct}
              alt="chosen"
              style={{ height: "150px" }}
            />
          )}
        </div>
        <button className="sign-button" onClick={handleSubmit}>
          Add product
        </button>{" "}
        <br />
        <br />
        <br />
      </form>

      {/* <Form onSubmit={handleSubmit}>
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

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
}
