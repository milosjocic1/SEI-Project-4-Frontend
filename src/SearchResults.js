import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Search from "./components/Search";

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { slug } = useParams();
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(`/search/?q=${query}`); setSearchResults(data.products);
        } catch (error) {
         setError(error.response?.data?.message);
         }
        };
         searchProduct();
       }, []);

  return (
    <div className="container">
        <Search />
      <div className="row">
        {searchResults.map((searchResult) => (
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <img
                className="card-img-top"
                src={`${searchResult.cloudinary_url}`}
                alt={searchResult.title}
              ></img>
              <div className="card-body">
                <h3 className="card-title">{searchResult.title}</h3>
                <p className="card-text">{searchResult.subTitle}</p>
                <Link
                  className="index-price-button"
                  to={`/product/${searchResult._id}`}
                >
                  £{searchResult.price}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}