import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key, hello, page) => {
  const res = await fetch("http://swapi.dev/api/planets/");

  console.log(page);

  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery(["planets", "hello", 2], fetchPlanets);

  // console.log(data);

  return (
    <div className="content">
      <h2>Planets</h2>
      {status === "loading" && <div>data fetching loading</div>}
      {status === "error" && <div>data fetching error</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
