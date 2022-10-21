import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
        <Button className='search-btn' variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
}
