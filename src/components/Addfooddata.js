import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Foodform.css";

// firebase Imports 
import { db, storage} from "../Firebase/Firebaseconfig"
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function Addfooddata() {
  const [foodName, setFoddName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [restaurantPhone, setRestaurantPhone] = useState("");

  const handleSubmit = (e) => {
    // e.PreventDefault()
    const FoodData = {
      foodName,
      foodPrice,
      foodImage,
      foodCategory,
      foodDescription,
      restaurantName,
      restaurantAddress,
      restaurantPhone,
    };
    console.log(FoodData)

  };

  
  return (
    <div className="form-outer">
      <h1>Add Food Data</h1>
      <Form className="form-inner">
        <label>Food Name</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => {
            setFoddName(e.target.value);
          }}
        />
        <br />
        <label>Food Description</label>
        <input
          type="text"
          name="food_description"
          onChange={(e) => {
            setFoodDescription(e.target.value);
          }}
        />
        <br />
        <label>Food Price</label>
        <input
          type="number"
          name="food_price"
          onChange={(e) => {
            setFoodPrice(e.target.value);
          }}
        />
        <br />
        <label>Food Category</label>
        <input
          type="text"
          name="food_category"
          onChange={(e) => {
            setFoodCategory(e.target.value);
          }}
        />
        <br />
        <label>Food image</label>
        <input
          type="file"
          name="food_image"
          onChange={(e) => {
            setFoodImage(e.target.files[0]);
          }}
        />
        <br />
        <label>Restaurant Name</label>
        <input
          type="text"
          name="restaurants_name"
          onChange={(e) => {
            setRestaurantName(e.target.value);
          }}
        />
        <br />
        <label>Restaurant Address</label>
        <input
          type="text"
          name="food_address"
          onChange={(e) => {
            setRestaurantAddress(e.target.value);
          }}
        />
        <br />
        <label>Restaurant Phone</label>
        <input
          type="number"
          name="food_phone"
          onChange={(e) => {
            setRestaurantPhone(e.target.value);
          }}
        />
        <br />
        <Button onClick={handleSubmit}>Add Food</Button>
      </Form>
    </div>
  );
}

export default Addfooddata;
