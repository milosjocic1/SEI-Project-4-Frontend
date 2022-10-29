import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import "../App.css";


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
          onKeyDown={event => {
            if (event.key === 'Enter') {
              navigate(`/search?query=${search}`);
            }
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