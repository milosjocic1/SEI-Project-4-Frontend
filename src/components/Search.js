import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from '../product/ProductList';
import "../App.css";


export default function Search() {

  
  return (
    <div>
      <InputGroup className="mb-4 div-search">
        <Form.Control
          placeholder="What are you looking for?"
          aria-label="Search"
          aria-describedby="basic-addon2"
          className='search-input'
        />
        <Link to="productlist">
        <Button className='search-btn' variant="outline-secondary" id="button-addon2">
          Search
        </Button>
        </Link>
      </InputGroup>
      <div>
        <Routes>
          <Route path="productlist" element={<ProductList></ProductList>}></Route>
        </Routes>
      </div>
    </div>
  );
}
