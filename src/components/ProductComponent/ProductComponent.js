import React from "react";


const ProductComponent = ({ product }) => {

   console.log(product)

  const { _id, title, imageURL, price} = product;
  return (
    <div class="container pt-5">
         <div class="col">
                <div class="card rounded-3 shadow p-3 mb-5 bg-body rounded" style={{height:"25rem", width: '18rem', padding:"20px" }}>
            <img src={imageURL} class="card-img-top" style={{ width: "250px" }} alt={title} />
            <div class="card-body text-center">
                <h5 class="card-title">{title}</h5>
                <br/>
              <h4 class="card-text"> {price} </h4>
               <br/>

             </div>
          </div>
          </div>
    </div>
  );
   
};

export default ProductComponent;
