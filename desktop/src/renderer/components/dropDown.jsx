import React, { useState, useMemo } from 'react';

function DropDown({ formats }) {
  const [Selected, setSelected] = useState(null);

  const List = () =>
    formats.map((e, index) => {
      if (e.format_note === '144p' || e.format_note === '240p') {
        return <></>;
      } else {
        if (e.format_note === 'tiny') {
          return (
            <option
              key={index}
              className={`option option${index}`}
              value={e.url}
            >
              {e.ext +
                ' - audio only -- ' +
                (e.filesize / 1000000).toFixed(2) +
                ' mb'}
            </option>
          );
        } else {
          return (
            <option
              key={index}
              className={`option option${index}`}
              value={e.url}
            >
              {e.ext +
                ' - ' +
                e.format_note +
                ' -- ' +
                (e.filesize / 1000000).toFixed(2) +
                ' mb'}
            </option>
          );
        }
      }
    });

  return (
    <div className="options">
      <div>
        <div className="select">
          <select onChange={(e) => setSelected(e.target.value)} required>
            <option value={'null'} hidden>
              Select your format
            </option>
            {List()}
          </select>
        </div>
      </div>
      <div className="download_box">
        <a
          className="download_link"
          href={Selected}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>

      <style jsx>
        {`
          .options {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          }
          .select::after {
            content: ;
            position: absolute;
            top: 0;
            right: 0;
            padding: 0 1em;
            background: #ffffff;
            cursor: pointer;
            pointer-events: none;
            -webkit-transition: 0.25s all ease;
            -o-transition: 0.25s all ease;
            transition: 0.25s all ease;
            color: white;
            border: 1px solid rgb(0, 0, 0);
          }
          .select {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 18vw;
            height: 6vh;
            line-height: 3;
            background: #ffffff;
            overflow: hidden;
            border-radius: 1vh;
            border: 1px solid rgb(0, 0, 0);
          }
          .select:hover::after {
            color: #59b800;
          }
          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;
            outline: 0;
            box-shadow: none;
            border: 0 !important;
            background: #cfcfcf91;
            background-image: none;
          }
          select::-ms-expand {
            display: none;
          }
          select {
            flex: 1;
            padding: 0 0.5em;
            color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 2vh;
          }
          @media only screen and (max-width: 600px) {
            .select {
              width: 50vw;
              height: 6vh;
              margin-top: 10vw;
            }
          }
          .download_box {
            border: 2px solid rgb(0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 3rem;
            background-color: #cfcfcf91;
            border-radius: 2rem;
            cursor: pointer;
            transition: all 0.2s linear;
          }
          .download_box:hover {
            background-color: hsla(0, 0%, 81%, 0.8);
          }
          .download_link {
            color: black;
            text-decoration: none;
            font-size: 3rem;
            font-weight: bold;
          }

          @media only screen and (max-width: 600px) {
            .download_box {
              border: 0px solid rgb(0, 0, 0);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 1rem;
              border-radius: 0.3rem;
              background-color: #cfcfcfdc;
              margin: 2rem 0rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default DropDown;
