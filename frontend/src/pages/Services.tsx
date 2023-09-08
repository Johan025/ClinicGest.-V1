import React from "react";
import c1 from "./../assets/cardiologue.jpg";
import c2 from "./../assets/chirurgiens.jpg";
import c3 from "./../assets/thr.webp";

const Services = () => {
  return (
    <div className="services text-end">
      <div className="container">
        <div className="column">
          <div className="col-6">
            <h2 className="text-start">
              {" "}
              <div className="b1"></div>ClinicManage. <div className="b1"></div>
            </h2>
            <h1 className="text-start">Nos services</h1>
            <p className="text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia aspernatur commodi ducimus temporibus soluta, a,
              nobis voluptas corrupti perferendis culpa totam
            </p>
          </div>

          <div className="col-12 mt-5">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={c1}
                      alt=""
                      className="text-start cardImg card-img-top"
                    />
                  </div>
                </div>
                <h3 className="text-center">Cardiologie</h3>
                <button className="btn btn-primary text-center">Rendez-vous</button>
              </div>
              <div className="col">
                {" "}
                <div className="card">
                  <div className="card-body">
                    <img
                      src={c2}
                      alt=""
                      className="text-start cardImg card-img-top"
                    />
                  </div>
                </div>
                <h3 className="text-center">Anesthésiologie</h3>
                <button className="btn btn-primary text-center">Rendez-vous</button>
              </div>

              <div className="col">
                {" "}
                <div className="card">
                  <div className="card-body">
                    <img
                      src={c3}
                      alt=""
                      className="text-start cardImg card-img-top"
                      id="image3"
                    />
                  </div>
                </div>
                <h3 className="text-center">Thérapie</h3>
                <button className="btn btn-primary text-center">Rendez-vous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
