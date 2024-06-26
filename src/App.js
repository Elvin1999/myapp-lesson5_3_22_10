import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { useRef, useState } from "react";
import Item from "./Item";
import Shapes from "./Shapes";

// function App() {
//   return (
//     <div className="App">
//       {/* <Form></Form> */}
//     </div>
//   );
// }

// function App() {
//   const [artists, setArtists] = useState([]);
//   const [name, setName] = useState("");
//   const next = useRef(0);
//   function addArtist() {
//     if (name.trim() !== "") {
//       next.current += 1;
//       setArtists([
//         ...artists,
//         {
//           id: next.current,
//           name: name,
//         },
//       ]);
//       setName("");
//     }
//     // setArtists([
//     //   {
//     //     id:next.current,
//     //     name:name
//     //   },
//     //   ...artists
//     // ])
//   }

//   function deleteItem(id) {
//     setArtists(artists.filter((a) => a.id !== id));
//   }

//   return (
//     <div className="App">
//       <h1>Out Artists</h1>
//       <section>
//         <input value={name} onChange={(e) => setName(e.target.value)}></input>
//         <button onClick={addArtist}>Add</button>
//       </section>
//       <ul>
//         {artists.map((a) => (
//           <Item item={a} deleteItem={deleteItem}></Item>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
     <Shapes></Shapes>
    </div>
  );
}

export default App;
