import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "../product/Product";
import Profile from "../user/Profile";
import MyProducts from "./MyProducts";

export default function SellerAccount(props) {
  const [products, setProducts] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  console.log(props)
  // const loadDashboard = () => {
  //   Axios.get("/seller/dashboard")
  //     .then((response) => {

  //       setSellers(response.data.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);

  //     });
  // }

  // const loadProductList = (seller) => {

  //   if (seller.products) {
  //     const products = seller.products.map((item, key) => (
  //       <div key={key}>
  //         <p>{item.title}</p>
  //       </div>
  //     ));
  //     return products;
  //   }
  // };
  useEffect(() => {
    // Axios function
    loadProductList();
  }, []);

  const loadProductList = () => {
    // Axios code will go here
    Axios.get("/product/index")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = (product, id) => {
    Axios.post(`/product/add?id=${id}`, product)
      .then((response) => {
        console.log("Product added successfully from seller account");
        loadProductList()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const editView = (id) => {
  //   Axios.get(`/product/edit?id=${id}`)
  //     .then((response) => {
  //       let product = response.data.product;
  //       setIsEdit(true);
  //       setCurrentProduct(product);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const editProduct = (product) => {
  //   Axios.put("/product/update", product)
  //     .then((response) => {
  //       console.log(response);
  //       // loadProductList();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const deleteProduct = (id) => {
  //   Axios.delete(`/product/delete?id=${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       // loadProductList();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const allProducts = products.map((product, index) => (
    <div key={index}>
      <Product
        {...product}
        // editView={editView}
        // deleteProduct={deleteProduct}
      />
      {/* {loadProductList(sellers)} */}
    </div>
  ));

  return (
    <div className="container">
      <Profile user={props.user} />
      <MyProducts
        handleFileInputChange={props.handleFileInputChange}
        previewSource={props.previewSource}
        seller={props.seller}
        user={props.user}
        products={props.products}
        addProduct={addProduct}
        // editView={editView}
        // editProduct={editProduct}
        // deleteProduct={deleteProduct}
      ></MyProducts>
    </div>
  );
}
