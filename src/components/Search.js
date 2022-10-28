import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from '../product/ProductList';
import "../App.css";



import { useNavigate } from "react-router-dom";


export default function Search(){
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className='container'>
     <InputGroup className="mb-4 div-search">
        <Form.Control 
        type="search"
          placeholder="What are you looking for?"
          aria-label="Search"
          aria-describedby="basic-addon2"
          className='search-input'
          onChange={(e) => {
            setSearch(e.target.value);
          }}

        />
       
        <Button className='search-btn' variant="outline-secondary" id="button-addon2"
        onClick={() => navigate(`/search?query=${search}`)}
        >
          Search
        </Button>
        
      </InputGroup>
    
    </div>
  );
};