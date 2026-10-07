import React from 'react';

const Country = ({country}) => {

    // const {name, capital,region,language, population, flag} = country;
    console.log(country);
    return (
        <div className = "card">
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
            <img className="flag" src={country.flags.flags.png} alt={country.name.common} />
            <p>Population: {country.population.population}</p>
            <p>Currencies: {country.currencies?.currencies?.name}</p>
        </div>
    );
};

export default Country;