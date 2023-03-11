import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Foodform.css";

function Addfooddata() {
  return (
    <div className="form-outer">
      <h1>Add Food Data</h1>
      <Form className="form-inner">
        <label>Food Name</label>
        <input type="text" name="food_name" />
        <br />
        <label>Food Description</label>
        <input type="text" name="food_description" />
        <br />
        <label>Food Price</label>
        <input type="text" name="food_price" />
        <br />
        <label>Food image</label>
        <input type="file" name="food_image" />
        <br />
        <label>Restaurant Name</label>
        <input type="text" name="restaurants_name" />
        <br />
        <label>Restaurant Address</label>
        <input type="text" name="food_address" />
        <br />
        <label>Restaurant Phone</label>
        <input type="number" name="food_phone" />
        <br />
        <Button>Add Food</Button>
      </Form>
    </div>
  );
}

export default Addfooddata;
