import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.items);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
                    description: "Removes mold spores and purifies air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity and purifies air.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to grow and effective at removing toxins.",
                    cost: "$22"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283236_1280.jpg",
                    description: "Purifies air and has medicinal benefits.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$18"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729808999-6677111d4530?q=80&w=1000&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$16"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating aroma, used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/27/18/17/mint-1165181_1280.jpg",
                    description: "Refreshing scent, great for teas and beverages.",
                    cost: "$10"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy aroma, relieves stress and anxiety.",
                    cost: "$12"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Beautiful floral fragrance for indoor spaces.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283236_1280.jpg",
                    description: "Soothes burns and skin irritations.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/14/02/echinacea-558072_1280.jpg",
                    description: "Boosts immune system and fights infections.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive discomfort and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes better sleep.",
                    cost: "$12"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes stomach aches and reduces anxiety.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/19/09/47/calendula-4348618_1280.jpg",
                    description: "Heals wounds and improves skin health.",
                    cost: "$12"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleA = {
        color: 'white',
        fontSize: '20px',
        textDecoration: 'none',
        margin: '10px',
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="tag_home_link">
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div className="luxury">
                                <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eccentric-5465488_1280.png" alt="" />
                                <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                                    <div>
                                        <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                        <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                                    </div>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a>
                    <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                        <h1 className="cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="68" width="68">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L32.6,39.6A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="main-icon"></path>
                            </svg>
                            <span className="cart_quantity_count">{totalQuantity}</span>
                        </h1>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((categoryObj, index) => (
                        <div key={index}>
                            <h1 className="plant_heading">
                                <div>{categoryObj.category}</div>
                            </h1>
                            <div className="product-list">
                                {categoryObj.plants.map((plant, plantIndex) => {
                                    const isAdded = cart.some((item) => item.name === plant.name);
                                    return (
                                        <div className="product-card" key={plantIndex}>
                                            <img className="product-image" src={plant.image} alt={plant.name} />
                                            <div className="product-title">{plant.name}</div>
                                            <div className="product-description">{plant.description}</div>
                                            <div className="product-cost">{plant.cost}</div>
                                            <button
                                                className={`product-button ${isAdded ? 'disabled' : ''}`}
                                                disabled={isAdded}
                                                onClick={() => handleAddToCart(plant)}
                                            >
                                                {isAdded ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;