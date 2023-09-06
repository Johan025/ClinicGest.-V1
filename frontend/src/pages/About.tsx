import React from "react";
import About1 from "../components/About1";
import c1 from './../assets/clinique.png';
import c2 from './../assets/deplacement.png';
import c3 from './../assets/recrutement.png';

const About = () => {
  return (
    <div className="About text-end">
      <div className="container">
        <div className="column">
          <div className="col-6">
            <h2 className="text-start">
              {" "}
              <div className="b1"></div>ClinicManage. <div className="b1"></div>
            </h2>
            <h1 className="text-start">A propos</h1>
            <p className="text-start">
              Ceci est un app web vous permettant de réserver vos rendez-vous en
              ligne dans un clinique pour éviter les déplacements
            </p>
          </div>

          <div className="col-12 mt-5">
            <div className="row">
              <div className="col">
                <div className="card">
                    
                  <div className="card-body">
                  <img src={c1} alt="" className="text-start cardImg card-img-top" />
                    <h5 className="card-title text-start mt-4">Amélioration de la gestion du clinique</h5>
                    <p className="card-text text-start mt-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis in consequatur
                    </p>
                 
                  </div>
                </div>
              </div>
              <div className="col"> <div className="card">
              <div className="card-body">
                  <img src={c2} alt="" className="text-start cardImg card-img-top" />
                    <h5 className="card-title text-start mt-4">Eviter les déplacements pour rien</h5>
                    <p className="card-text text-start mt-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis in consequatur
                    </p>
                 
                  </div>
                </div></div>

              <div className="col"> <div className="card">
                  <div className="card-body">
                  <img src={c3} alt="" className="text-start cardImg card-img-top" />
                    <h5 className="card-title text-start mt-4"> Recrutement de personnel qualifié</h5>
                    <p className="card-text text-start mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis in consequatur
                    </p>
                   
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

