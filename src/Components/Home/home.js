import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiAfrica } from 'react-icons/gi';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Home.css';
import { Link } from 'react-router-dom';
import { fetchCity } from '../../Redux/Cities';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  const cityData = useSelector((state) => state.cityData);

  const [postCity, setCity] = useState('');
  const dataSearch = (str) => setCity(str);

  return (
    <div className="home">

      <div className="home-header">
        <div className="header-logo center">
          <GiAfrica />
        </div>
        <div className="header-text">
          <h1 className="header-app-name">My Weather Update</h1>
          <p className="header-country">AFRICA</p>
        </div>
      </div>

      <section className="cities">
        <input className="search-city" type="text" placeholder="search city" onChange={(e) => dataSearch(e.target.value)} />
        <ul className="city-list">
          {
            cityData.filter((value) => value.country
              .toLowerCase().includes(postCity
                .toLocaleLowerCase()))
              .map((data) => (
                <Link
                  to="/detail"
                  key={data.capital}
                  className="card-country"
                  state={{ country: data.country, capital: data.capital, flags: data.flags }}
                >
                  <p className="detail-btn"><BsArrowRightCircle /></p>

                  <p className="country-name">{data.country.toUpperCase()}</p>

                  <div className="flag-country">
                    <div className="img-flag"><img src={data.flags} alt="flag" /></div>

                    <p className="country-capital">{data.capital}</p>

                  </div>

                </Link>
              ))
            }

        </ul>
      </section>

    </div>
  );
}

export default Home;
