import React from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home">

      <div className="home-header">
        <div className="header-logo">
          <FaGlobeAfrica />
        </div>
        <div className="header-text">
          Africa
          My weather update
        </div>
      </div>

      <div className="search-box">
        <input className="search-input" placeholder="Search city" />
      </div>

      <section className="cities">
        <div className="card-country">
          Kamplala
        </div>
        <div className="card-country">
          Dar-Es-Salaam
        </div>
        <div className="card-country">
          Kigali
        </div>
        <div className="card-country">
          Bunjumbura
        </div>
        <div className="card-country">
          Kinshasa
        </div>
        <div className="card-country">
          Addis Ababa
        </div>
      </section>
    </div>
  );
}

export default Home;
