import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  // const {name, capital,region,language, population, flag} = country;
  // console.log(country);

  // const currencies = Object.values(country.currencies?.currencies ?? {});
  // const languages = Object.values(country.languages?.languages ?? {});


  const handleVisited = ()=>{
    console.log("button clicked");
  }

  return (
    <div className="country">
      <h2>Name: {country.name.common}</h2>
      <p>Capital: {country.capital.capital}</p>
      <img
        className="flag"
        src={country.flags.flags.png}
        alt={country.name.common}
      />
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area>300000?"Big Country":"Small Country"}</p>
      <button onClick={handleVisited}>Not Visited</button>

      {/* <p>
        Currency Name:{" "}
        {currencies
          .map((currency) => `${currency.name} (${currency.symbol ?? "N/A"})`)
          .join(", ") || "N/A"}
      </p> */}
      {/* <p>
        {languages.length > 1 ? (
          <div>
            <p>Languages:</p>
            <ul className="display-name" >
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Language: {languages[0]?? "N/A"}</p>
        )}
      </p> */}
    </div>
  );
};

export default Country;
