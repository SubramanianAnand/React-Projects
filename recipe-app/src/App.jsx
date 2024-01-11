import { useState } from "react";
import "./App.css";

function App() {
  const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [count, setCount] = useState(0);

  return (
    <div className="d-flex bg-warning vh-100 justify-content-center align-items-center">
      <div className="w-25 bg-danger rounded  p-3">
        <div className="mb-2">
          <h3>Recipe Finder</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Recipe Name"
          />
          <br />
          <button className="btn btn-success">Search</button>
        </div>
      </div>
      <div className="card">
        <img src="strMealThumb" alt="strMeal" className="card-image" />
        <div className="card-body">
          <span className="category">{strCategory}</span>
          <h3>{strMeal}</h3>
          <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">
            Instructions
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
