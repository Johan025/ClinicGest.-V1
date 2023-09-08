import React from "react";
import c3 from "./../assets/thr.webp";
import quote from './../assets/quote.png'

const Customers = () => {
  return (
    <div className="customers">
      <div className="container">
        <div className="column">
          <div className="col-6">
            <h2 className="text-start">
              {" "}
              <div className="b1"></div>ClinicManage. <div className="b1"></div>
            </h2>
            <h1 className="text-start">De la part de nos clients</h1>
            <p className="text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia aspernatur commodi ducimus temporibus soluta, a,
        
            </p>
          </div>

          <div className="col-12 mt-5">
               <img src={c3} alt=""  id="image"/>
                
                <div className="sayed">
                       <h1>Avis d' un de nos clients</h1>
                       <img src={quote} alt="" id="quote"/>

                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere natus possimus voluptate esse officiis, dolores similique itaque ut quos debitis dolorem ex. Ipsa beatae cumque incidunt voluptates, ad minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, eveniet voluptatem enim beatae cumque sunt neque, v</p>
                       <h2>Dr. Sandra Clark <span>Manager hopital</span></h2>

                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
