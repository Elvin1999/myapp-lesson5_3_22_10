import React, { Fragment, useState } from "react";
import { useImmer } from "use-immer";
export default function Form() {
//   const [person, setPerson] = useState({
//     name: "Niki de Saint",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

const [person, setPerson] = useImmer({
    name: "Niki de Saint",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });


  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <h1>My Form</h1>
      <label>
        Name : <input value={person.name} onChange={handleNameChange}></input>
      </label>
      <br />
      <label>
        Title :{" "}
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        City : <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <label>
        Image :{" "}
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <br />
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        located in {person.artwork.city}
      </p>
      <img src={person.artwork.image} alt={person.artwork.title}></img>
    </>
  );
}
