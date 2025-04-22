import React, { useState } from 'react';
import './FooterOrder.css';


// Sample data for food items
const foodItems = [
  {
    id: 1,
    name: 'TIMATIM SELAXA (ቲማቲም ሰላጣ)',
    price: 5.99,
    img: 'https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp',
    description: 'Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice.'
  },
  {
    id: 2,
    name: 'TIBS (ጥብስ)',
    price: 22.99,
    img: 'https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280',
    description: 'Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain...'
  },
  {
    id: 3,
    name: 'KITFO (ክትፎ)',
    price: 25.99,
    img: 'https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp',
    description: 'Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere)...'
  },
  {
    id: 4,
    name: 'INJERA (እንጀራ)',
    price: 3.99,
    img: 'https://www.aspicyperspective.com/wp-content/uploads/2012/03/injera-recipe-ethiopian-bread-4-1096x1536.jpg',
    description: 'Injera is a sourdough flatbread that is a staple food in Ethiopia and Eritrea. It’s traditionally made with teff flour and served with a variety of stews and dishes.'
  },
  {
    id: 5,
    name: 'DORO WAT (ዶሮ ወጥ)',
    price: 17.99,
    img: 'https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-doro-wat.jpg.webp',
    description: 'Doro Wat is a traditional Ethiopian chicken stew that’s cooked with hard-boiled eggs and berbere spices. It is often served with injera.'
  }
  
];

export default function FoodOrder() {
  // State to manage selected food items
  const [selectedFood, setSelectedFood] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleFoodSelection = (food) => {
    setSelectedFood((prevSelected) => {
      if (prevSelected.includes(food)) {
        return prevSelected.filter(item => item !== food);
      }
      return [...prevSelected, food];
    });
  };

  const calculateTotal = () => {
    return selectedFood.reduce((total, food) => total + food.price, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Total price: $${calculateTotal()}.\nName: ${name}, Address: ${address}`);
  };

  return (
    <div className="foods-container">
   
      <div className="food-items">
        {foodItems.map(item => (
          <div key={item.id} className="single-food">
            <div className="img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="title-price">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="food-desc">{item.description}</div>
            <button onClick={() => handleFoodSelection(item)}>
              {selectedFood.includes(item) ? 'Remove from Order' : 'Add to Order'}
            </button>
          </div>
        ))}
      </div>

      <div className="order-form">
        <h2>Your Order</h2>
        {selectedFood.length > 0 ? (
          <>
            <ul>
              {selectedFood.map(food => (
                <li key={food.id}>{food.name} - ${food.price.toFixed(2)}</li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <input 
                type="text" 
                placeholder="Enter your address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
              <button type="submit">Place Order</button>
            </form>
          </>
        ) : (
          <p>No items selected</p>
        )}
      </div>
    </div>
  );
}
