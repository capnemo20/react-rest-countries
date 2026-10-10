import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  // console.log(countriesData);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h1> This is the Countries component: {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
