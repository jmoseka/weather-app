import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGlobeAfrica } from 'react-icons/fa';
import './Home.css';
import { fetchCity } from '../../Redux/Cities';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  const cityData = useSelector((state) => state.cityData);
  console.log(cityData);

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
        {
        cityData.map((data) => (
          <div key={data.capital} className="card-country">
            {data.capital}
          </div>
        ))
        }
      </section>
    </div>
  );
}

export default Home;
