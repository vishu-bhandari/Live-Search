import React, { useState } from "react";

const Search = () => {
  const [img, setImg] = useState("vishu");

  const inputEvent=(event)=>{
    const data=event.target.value;
    console.log(data)
    setImg(data);
  }

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Anything"
          value={img}
          onChange={inputEvent}
        />
      </div>
    </>
  );
};

export default Search;
