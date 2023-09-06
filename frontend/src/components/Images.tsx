import React from 'react';
import couv1 from './../assets/couv1.jpg';
import couv2 from './../assets/couv2.jpg';
import couv3 from './../assets/couv3.jpg';
const Images = () => {
    return (
         <div className='couv'>
               <img src={couv1} alt="" />
               <img src={couv2} alt="" />
               <img src={couv3} alt="" />
         </div>
    );
};

export default Images;