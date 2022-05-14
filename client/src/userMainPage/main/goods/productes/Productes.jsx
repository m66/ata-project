import { useEffect, useState } from "react";
import { Card, CardGroup } from "reactstrap";
import { BACKEND_URL } from "../../../../consts";
import ProductCard from "./cards/ProductCard";
import "./productes.scss";

function Productes({ productes }) {
  // debugger
  const [deletedProductId, setDeletedProductId] = useState();
  const filteredProduct = productes.filter(
    (product) => product._id !== deletedProductId
  );

//   let dblId;

//   if(dblId !== deletedProductId){

//   fetch(`${BACKEND_URL}/task`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(...filteredProduct),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//     dblId = deletedProductId
//   }


  return (
    <div>
      <CardGroup>
        {filteredProduct.map((product) => {
          return (
            <ProductCard
              key={product._id}
              setDeletedProductId={setDeletedProductId}
              {...product}
            />
          );
        })}
      </CardGroup>
    </div>
  );
}

export default Productes;
