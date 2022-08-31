import React, { useState } from "react";
import menu from "./menu";


const Dishes = () => {

    const[items, setItems] = useState(menu);
    const filterItem = (itemCategory) => {
        const updatedItems = menu.filter((currentElem) => {
            return currentElem.category === itemCategory;
        })
        setItems(updatedItems);
    }
    const nofilter = () => {
        
        setItems(menu);
    }

  return (
    <>
    <h1 className=" text-center main-heading">Order Your Favourite Dishes</h1>
    <hr />
   
    <div className="mx-auto text-center ">
      <button className="btn btn-warning" onClick={()=>filterItem('Breakfast')}>Breakfast</button>
      <button className="btn btn-warning" onClick={()=>filterItem('Lunch')}>Lunch</button>
      <button className="btn btn-warning" onClick={()=>filterItem('Dinner')}>Dinner</button>
      <button className="btn btn-warning" onClick={()=>nofilter()}>All-Items</button>

    </div>
   
  
    {/* main container */}
    <div   className="menu-items container-fluid mt-5">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row my-5">

            {
                items.map((elem)=>{
                    const{ id, name, image , info, price } = elem;
                    return(
                        
                        <div className="item1 shadow-lg bg-white col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                            <div className="row items-inside">

              {/* image section */}
                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                    <img src={image} alt={name} className="img-fluid"/>
                                </div>

              {/* image information */}
                            <div className=" details col-12 col-md-12 col-lg-8">
                                <div className="main-title pt-3 pb-2">
                                    <h1>{name}</h1>
                                    <p>{info}</p>
                                </div>
                                <div className="menu-price">
                                <div className="price-note-divide d-flex justify-content-between">
                                    <h2>50</h2>
                                    <a href="#" >
                                    <button className="btn btn-primary"> Order Now</button>
                                    </a>
                                </div>
                                <p>{info}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                    )
                })
            }


            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dishes;