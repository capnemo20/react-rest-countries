import React from 'react';

const Country = ({country}) => {

    // const {name, capital,region,language, population, flag} = country;
    // console.log(country);

    const currencies = Object.values(country.currencies?.currencies??{})
    return (
        <div className = "card">
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
            <img className="flag" src={country.flags.flags.png} alt={country.name.common} />
            <p>Population: {country.population.population}</p>
            <p>Currency Name: {currencies.map(currency => `${currency.name} (${currency.symbol?? 'N/A'})`).join(', ') || "N/A"}</p>
        </div>
    );
};

export default Country;