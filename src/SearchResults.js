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
      <br />
      <br />
      <br />
      <br />
      
      <Search></Search>
      <div className="row">
        {searchResults.map((searchResult) => (
          <div className="col-lg-4 col-sm-12">
            <Link to={`/product/${searchResult._id}`}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`${searchResult.cloudinary_url}`}
                  alt={searchResult.title}
                ></img>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <button className="index-price-button">
                        £{searchResult.price}
                      </button>
                    </div>
                    <div className="col-6">Reviews</div>
                  </div>
                  <h3 className="card-title">{searchResult.title}</h3>
                  <p className="card-text">{searchResult.subTitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}