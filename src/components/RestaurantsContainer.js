import { data } from "../data/data.js";

import Restaurant from  "./Restaurant.js";

//Containers are for behind the scenes logic
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {data.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;

