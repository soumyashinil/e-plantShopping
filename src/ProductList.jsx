import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./CartSlice";
function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  //productname:true
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: `${import.meta.env.BASE_URL}/images/snake.jpg`,
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: `${import.meta.env.BASE_URL}/images/spider.jpg`,
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image: `${import.meta.env.BASE_URL}/images/peace_lilly.jpg`,
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Areca Palm",
          image: `${import.meta.env.BASE_URL}/images/areka.jpg`,
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image: `${import.meta.env.BASE_URL}/images/rubber.jpg`,
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image: `${import.meta.env.BASE_URL}/images/alovera.jpg`,
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "oregano",
          image: `${import.meta.env.BASE_URL}/images/rosemary.jpg`,
          description:
            "The oregano plants contains compounds that can deter certain insects.",
          cost: "$10",
        },
        {
          name: "Marigold",
          image: `${import.meta.env.BASE_URL}/images/mary.jpg`,
          description:
            "Natural insect repellent, also adds color to the garden.",
          cost: "$8",
        },
        {
          name: "Geraniums",
          image: `${import.meta.env.BASE_URL}/images/geranium.jpg`,
          description:
            "Known for their insect-repelling properties while adding a pleasant scent.",
          cost: "$20",
        },
        {
          name: "Basil",
          image: `${import.meta.env.BASE_URL}/images/basil.jpg`,
          description: "Repels flies and mosquitoes, also used in cooking.",
          cost: "$9",
        },
        {
          name: "Lavender",
          image: `${import.meta.env.BASE_URL}/images/lavendar.jpg`,
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Citronella",
          image: `${import.meta.env.BASE_URL}/images/citronella.jpg`,
          description: "CBest natural mosquito repellent.",
          cost: "$15",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: `${import.meta.env.BASE_URL}/images/alovera.jpg`,
          description: "Soothing gel used for skin ailments.",
          cost: "$14",
        },
        {
          name: "Echinacea",
          image: `${import.meta.env.BASE_URL}/images/echi.jpg`,
          description: "Boosts immune system, helps fight colds.",
          cost: "$16",
        },
        {
          name: "Peppermint",
          image: `${import.meta.env.BASE_URL}/images/peppermint.jpg`,
          description: "Relieves digestive issues and headaches.",
          cost: "$13",
        },
        {
          name: "Lemon Balm",
          image: `${import.meta.env.BASE_URL}/images/lemon.jpg`,
          description: "Calms nerves and promotes relaxation.",
          cost: "$14",
        },
        {
          name: "Chamomile",
          image: `${import.meta.env.BASE_URL}/images/chammolie.jpg`,
          description: "Soothes anxiety and promotes sleep.",
          cost: "$15",
        },
        {
          name: "Calendula",
          image: `${import.meta.env.BASE_URL}/images/calendula.jpg`,
          description: "Heals wounds and soothes skin irritations.",
          cost: "$12",
        },
      ],
    },
  ];
  const styleObj = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
    backgroundColor: "#b1888e",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    maxWidth: "800px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    justifyContent: "center",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({ ...prevState, [product.name]: true }));
    console.log(addedToCart);
  };
  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src={"/e-plantShopping/images/logo.png"} alt="Logo" />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: "white" }}>Little Leaf Nursery</h3>
                <i style={{ color: "white" }}>Where Minds Blossom</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            {" "}
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            {" "}
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <span className="cart_quantity_count">{cartItems.length}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((items, index) => (
            <>
              {" "}
              <div className="plant_name_heading">
                <div className="plant_heading">{items.category}</div>
              </div>
              <div className="product-list">
                {items.plants.map((item, index) => (
                  <div className="product-card">
                    <div className="product-title">{item.name} Plant</div>

                    <div className="product-image">
                      <img src={item.image} />
                      {/* <img
                        src={`${import.meta.env.BASE_URL}/images/bg.jpg`}
                        alt="fff"
                      /> */}
                    </div>
                    <div className="product-price">{item.cost}</div>
                    <div className="product-description">
                      {item.description}
                    </div>
                    <button
                      className={
                        cartItems.find((product) => product.name === item.name)
                          ? "product-button added-to-cart"
                          : "product-button"
                      }
                      onClick={() => handleAddToCart(item)}
                    >
                      {addedToCart[item.name] ? "Added To Cart" : "Add To Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
