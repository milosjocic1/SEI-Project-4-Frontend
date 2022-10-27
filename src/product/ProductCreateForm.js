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
    props.handleSubmitFile(props.response.data.user._id);
    updatePage();
  };

  const handleFileInputChange = (e) => {
    props.handleFileInputChange(e)
  };

  console.log(props)

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form>
        <div>
          <input name="title" type="text" onChange={handleChange} placeholder="Product Title"></input>
          <input name="subTitle" type="text" onChange={handleChange} placeholder="Product Subtitle"></input>
          <input name="description" type="text" onChange={handleChange} placeholder="Desription"></input>
          <input name="condition" type="text" onChange={handleChange} placeholder="Condition"></input>
          <input name="price" type="text" onChange={handleChange} placeholder="Price"></input>
          <select name="category" onChange={handleChange} placeholder="Category">
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="sports-hobbies-leisures">Sports, hobbies, leisures</option>
            <option value="home-garden">Home & Garden</option>
            <option value="motors">Motors</option>
            <option value="media">Media</option>
            <option value="office-supplies">Office Supplies</option>
            <option value="health-beauty">Health & Beauty</option>
            <option value="collectables-art">Collectables and Art</option>
          </select>
          <select name="subCategory" onChange={handleChange} placeholder="Subcategory">
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="sports-hobbies-leisures">Sports, hobbies, leisures</option>
            <option value="home-garden">Home & Garden</option>
            <option value="motors">Motors</option>
            <option value="media">Media</option>
            <option value="office-supplies">Office Supplies</option>
            <option value="health-beauty">Health & Beauty</option>
            <option value="collectables-art">Collectables and Art</option>
          </select>
          <input name="shippingRate" type="text" onChange={handleChange} placeholder="Shipping Rate"></input>
          <input name="returnsPolicy" type="text" onChange={handleChange} placeholder="Policy"></input>
          <label>Upload a photo of the product</label>&nbsp;<br></br>
              <div>
                <input name="cloudinary_url" type="file"  onChange={handleFileInputChange}></input>
              </div> 
               <div>
                {props.previewSource && (
                  <img
                    src={props.previewSource}
                    alt="chosen"
                    style={{ height: "150px" }}
                  />
                )}
              </div>
          <button
                className="sign-button"
                onClick={handleSubmit}
              >
                Add product
              </button>
        </div>

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
            type="text"
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

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
}
