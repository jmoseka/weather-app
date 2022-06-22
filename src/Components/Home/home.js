import React, { useEffect } from 'react';
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

  console.log(cityData);

  return (
    <div className="home">

      <div className="home-header">
        <div className="header-logo center">
          <GiAfrica />
        </div>
        <div className="header-text">
          <p>My weather update</p>
          <p>Africa</p>
        </div>
      </div>

      <section className="cities">
        <ul className="city-list">
          {
              cityData.map((data) => (
                <Link
                  to="/detail"
                  key={data.capital}
                  className="card-country"
                >
                  <p>
                    <BsArrowRightCircle />
                  </p>
                  <p>{data.capital}</p>
                </Link>
              ))
            }

        </ul>
      </section>

    </div>
  );
}

export default Home;
