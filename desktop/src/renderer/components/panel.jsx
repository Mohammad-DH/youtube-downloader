import React, { useContext, useEffect } from 'react';

import { AppContext } from '../api/ContextAPI';
import DropDown from './dropDown';

function Panel() {
  const { Data, SetLoading } = useContext(AppContext);

  function newTab(url) {
    window.open(url, '_blank');
  }

  useEffect(() => {
    SetLoading(false);
  }, [Data]);

  if (Data) {
    return (
      <div className="panel">
        <p className="title">{Data.title}</p>
        <div className="pic">
          <img
            onClick={() => newTab(Data.target)}
            src={Data.thumbnail}
            alt=""
          />
        </div>
        <div className="options">
          <DropDown formats={Data.formats} />
        </div>

        <style>{`
          .panel {
            position: relative;
            width: 80%;
            border: 3px solid rgba(117, 238, 182, 0.6);
            border-radius: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5%;
            overflow: hidden;
            background-color: rgba(245, 245, 220, 0.5);
          }
          .pic {
            width: 55%;
            margin-left: -5%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .pic img {
            width: 80%;
            height: 80%;
            margin-top: 5%;
            margin-bottom: 5%;
            border: 2px solid white;
            border-radius: 1.5rem;
            cursor: pointer;
          }
          .title {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0%;
            height: 100%;
            width: 2rem;
            background-color: white;
            border-radius: 0 0 1rem 0;
            color: black;
            padding: 15px;
            line-height: 2rem;
            writing-mode: vertical-lr;
          }
          .options {
            width: 45%;
            height: 100%;
          }
          @media only screen and (max-width: 600px) {
            .panel {
              flex-direction: column;
              border-radius: 1rem;
            }
            .title {
              position: relative;
              left: 2%;
              height: 2rem;
              width: 100%;
              padding: 10px;
              padding-top: 20px;
              line-height: 1rem;
              writing-mode: horizontal-tb;
            }
            .pic {
              width: 100%;
              margin-left: 0;
            }

            .pic img {
              width: 95%;
              border-radius: 0.5rem;
            }
          }
        `}</style>
      </div>
    );
  }
  return <></>;
}

export default Panel;
