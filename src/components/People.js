import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");

  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);

  console.log(data);

  return (
    <div className="content">
      <h2>Planets</h2>
      {status === "loading" && <div>data fetching loading</div>}
      {status === "error" && <div>data fetching error</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
