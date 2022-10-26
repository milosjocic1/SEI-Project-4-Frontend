import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "../product/Product";
import Profile from "../user/Profile";
import MyProducts from "./MyProducts";

export default function SellerAccount(props) {
  const [products, setProducts] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  console.log(props);

  // const loadDashboard = () => {
  //   Axios.get("/seller/dashboard")
  //     .then((response) => {
  //       console.log("hi");
  //       console.log(response.data.user);
  //       setSellers(response.data.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("error retrieving user line 40");
  //     });
  // }

  // const loadProductList = (seller) => {
  //   console.log(seller);
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
      console.log(response);
      setProducts(response.data.products);
    })
    .catch((error) => {
      console.log("Error Retrieving Products");
      console.log(error);
    });
};

  // const getSellerId = (id) => {
  //   Axios.get(`/seller/dashboard?userId=${id}`, id)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // // getSellerId()

  const addProduct = (product, id) => {
    Axios.post(`/product/add?id=${id}`, product)
      .then((response) => {
        console.log("Product added successfully from seller account");
      })
      .catch((error) => {
        console.log("Error adding Product");
        console.log(error);
      });
  };

  const editView = (id) => {
    Axios.get(`/product/edit?id=${id}`)
      .then((response) => {
        console.log(response.data.product);
        let product = response.data.product;
        console.log("Loaded Product Information");
        setIsEdit(true);
        setCurrentProduct(product);
      })
      .catch((error) => {
        console.log("Error loading product information");
        console.log(error);
      });
  };

  const editProduct = (product) => {
    Axios.put("/product/update", product)
      .then((response) => {
        console.log("Product Updated Successfully!");
        console.log(response);
        // loadProductList();
      })
      .catch((error) => {
        console.log("Error editing Product");
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    Axios.delete(`/product/delete?id=${id}`)
      .then((response) => {
        console.log("Product deleted successfully!");
        console.log(response);
        // loadProductList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const allProducts = products.map((product, index) => (
    <div key={index}>
      <Product
        {...product}
        editView={editView}
        deleteProduct={deleteProduct}
      ></Product>

      {/* {loadProductList(sellers)} */}
    </div>
  ));

  console.log(props);
  return (
    <div className="container">
      <Profile user={props}></Profile>
      <MyProducts
        seller={props}
        user={props}
        product={props}
        products={allProducts}
        addProduct={addProduct}
        editView={editView}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      ></MyProducts>
    </div>
  );
}
