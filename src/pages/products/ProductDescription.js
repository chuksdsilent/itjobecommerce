import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, useParams } from "react-router-dom";
import ProductPageLayout from "../../components/layouts/ProductPageLayout";
import styled from "styled-components";
import view from "../../assets/view.png";
import mark from "../../assets/spec.png";

export const Wrapper = styled.div`
  margin-top: 129px;
  margin-bottom: 50px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
    margin-top: 143px;
  }
  .main-content {
    padding: 0 20px;
  }
  .main-content .gridy {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  .price {
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray6};
  }
  .description {
    color: ${(props) => props.theme.color.gray7};
    padding: 15px 0;
    font-family: "Poppins";
    font-size: 15px;
  }
  .views {
    margin: 0 0 40px 0;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  .product-views {
    overflow-x: auto;
    overflow-y: hidden;

}
.product-views::-webkit-scrollbar {
    height: 2px;
  }

  .product-views::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .product-views::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_01};
    outline: 0;
  }

  
  .product-views  img{
    width: 200px;

  }
  .specification .spec {
    margin: 10px 0;
  }
  .specification {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 0 16px #ccc;
    padding: 10px;
  }
  .buttons {
    width: 70%;
    margin: auto;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 100%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: grid;
      text-align: center;
      /* width: 98%; */
      grid-gap: 20px;
      justify-items: center;
      justify-content: center;
    }
  }
  .buttons button {
    color: ${(props) => props.theme.color.ui_01};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 10px 30px;
    justify-content: center;
    font-size: 14px;
    line-height: 10px;
    font-family: OpenSans;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
      rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  .buttons button.orange {
    background-color: ${(props) => props.theme.color.ui_01};
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  .buttons button:hover {
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }
  .buttons button.orange:hover {
    color: ${(props) => props.theme.color.ui_01};
  }
  .spec-list {
    margin-bottom: 10px;
    font-family: poppins;
  }
  .spec-list img {
    margin-right: 7px;
    width: 20px;
  }
`;

const productView = [
  {
    id: 1,
     view,
  },
  {
    id: 2,
     view,
  },
  {
    id: 3,
     view,
  },
  {
    id: 4,
     view,
  },
];
function ProductDescription({ match }) {
  // Initialize state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(null);

  // Fetch data
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setData(result);
          console.log(data && data);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <ProductPageLayout>
        <div className="main-content">
          {!isLoading ? (
            <>loading...</>
          ) : (
            <div className="grid gridy">
              <div>
                <img src={data.image} alt={data.title} />
                <div className="buttons">
                  <Link to="/cart">
                    <button className="orange" type="button">
                      Add to Cart
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="white" type="button">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
          
              </div>
              <div className="product-details">
              <div className="views">
                 <h4 className="bold">Product views</h4>
               <div className="flex j-btw product-views">
                  {productView.map((image) => (
                    <img src={image.view} alt="product view" />
                  ))}
                </div>
               </div>
                <h1 className="title bold">{data.title}</h1>
                <p className="price">N{data.price}</p>
                <p className="description">{data.description}</p>
                <div className="specification">
                  <h4 className="bold spec">Specification</h4>
                  <div className="spec-details">
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>Processor: Apple A13 Bionic (7 nm+)</span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>RAM: 4 GB</span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>Storage: 64 GB )</span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>Display: 6.1 inches </span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>Camera: 12 MP (wide) + 12 MP (ultrawide)</span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span> Battery: Non-removable Li-Ion 311</span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span> Color: Black </span>
                    </p>
                    <p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>Model: iphone 11</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ProductPageLayout>
      
    </Wrapper>
  );
}

ProductDescription.propTypes = {};

export default ProductDescription;
