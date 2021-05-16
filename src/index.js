import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import './index.css';
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className='heading_style'>List Of 5 Netflix Series</h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );

    })}
  </>
  , document.getElementById("root")
);


