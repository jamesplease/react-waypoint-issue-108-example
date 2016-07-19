import React from 'react';
import {render} from 'react-dom';
import Waypoint from 'react-waypoint';

const items = Array(3).fill(`thing`);

let index = 0;
render((
  <div className="app">
    <ul>
      {items.map(i => {
        const key = `item${index++}`;
        return (
          <li key={key} className="list-item">
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => console.log(`Entered @ ${key}`)}
            onLeave={() => console.log(`Left @ ${key}`)}
            topOffset={'80%'}/>
            {key}
          </li>
        );
      })}
    </ul>
    <div className="eighty-percent"/>
  </div>
), document.querySelector('.app-container'));
