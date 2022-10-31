import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "../product/ProductList";
import "../App.css";

import { useNavigate } from "react-router-dom";
import "../App.css";

function searchFunc(query, navigate, event) {
  event.preventDefault();
  if (!query) return;
  navigate(`/search?query=${query}`);
}

export default function Search(){

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  

  return (
    <form
      className="container"
      onSubmit={(e) => searchFunc(search, navigate, e)}
    >
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

        <Button
          className="search-btn"
          variant="outline-secondary"
          id="button-addon2"
          type="submit"
        >
          Search
        </Button>
      </InputGroup>
    </form>
  );
}
