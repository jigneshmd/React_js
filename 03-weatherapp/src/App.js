import "./App.css";
import { Oval } from 'react-loader-spinner'
import axios from 'axios'
import React, { useState } from "react";
function App() {

  const [input, setInput] = useState('')
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput('');
      setWeather({ ...weather, loading: true });
      await axios.get(url, {
        params: {
          q: input,
          units: 'metric',
          appid: api_key,
        }
      }).then((result) => {
        // console.log(result);
        setWeather({ data: result.data, loading: false, error: false });
        // console.log(weather);
      })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setInput('');
          console.log('error', error);
        });
    }
  }
  return (
    <div className="App">
      <div className="vh-100 d-flex justify-content-center py-5 align-items-center" style={{ backgroundColor: ' #80ced6' }}>
        <div className="col-md-8 col-lg-6 col-xl-5">

          <div className="input-group rounded mb-3">
            <input type="search" onKeyPress={search} onChange={(event) =>
              setInput(event.target.value)} value={input} className="form-control rounded" placeholder="Enter City Name" aria-label="Search"
              aria-describedby="search-addon" />
            {/* <a href="#!" type="button">
              <span className="input-group-text border-0 fw-bold" id="search-addon">
                Check!
              </span>
            </a> */}
          </div>

          {weather.loading && (
            <Oval type="Oval" color="black" height={100} width={100} />
          )}
          {weather.error && (
            <span className="error-message">
              <span style={{ fontSize: '20px' }}>City not found</span>
            </span>
          )}
          {weather && weather.data && weather.data.main && (
            <div className="card text-body" style={{ borderRadius: '35px' }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <h6 className="flex-grow-1">{weather.data.name}</h6>
                  <h6>{weather.data.main.feels_like}</h6>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6 className="display-4 mb-0 font-weight-bold"> {weather.data.main.temp}°C </h6>
                  <span className="small" style={{ color: '#868B94' }}>{weather.data.weather[0].main}</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                    <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> {weather.data.wind.speed}km/h
                    </span>
                    </div>
                    <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> 84%
                    </span></div>
                    <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> 0.2h
                    </span></div>
                  </div>
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
