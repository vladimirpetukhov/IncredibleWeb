import React from "react";

export const FilterMovies = (props) => {

  
  return (
    <section className="subheader">
      <div className="genre-container">
        <ul className="">
                    
          <li
            id="filterName"
            className=""
            onClick={(event) => props.mostPopular(event.target.value)}
          ><input type="checkbox" defaultChecked={true}/>
            name
          </li>
          <li
            id="filterYear"
            className=""
            onClick={(event) => props.kidsPopular(event.target.value)}
          ><input type="checkbox" defaultChecked={true}/>
            year
          </li>
        </ul>
      </div>
    </section>
  );
};
