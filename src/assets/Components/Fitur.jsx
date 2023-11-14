import React from "react";
import AdminControl from "../admin-contol.png";

const Fitur = () => {
  return (
    <div>
      <div className="hero bg-blue-700">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white pt-6 pb-6">
              Fitur-Fitur Website
            </h1>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="text-center text-2xl font-bold">
                    Admin Control
                  </h2>
                </div>
                <figure>
                  <img className="h-auto w-auto pb-8" src={AdminControl} alt="Shoes" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
