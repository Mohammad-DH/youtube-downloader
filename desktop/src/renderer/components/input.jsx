import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../api/ContextAPI';

import btn from '../../../assets/btn.png';

function Input() {
  const { SetData, SetLoading } = useContext(AppContext);

  const [URL, setURL] = useState('');

  const changeHandeler = (e) => {
    setURL(e.target.value);
  };

  function SEND(url) {
    if (url.length > 10) {
      SetLoading(true);

      const formData = new FormData();
      formData.append('url', url);

      axios
        .post(`http://localhost:4000/check`, formData)
        .then((res) => {
          if (res) {
            SetData(res.data);
            setURL('');
          }
        })
        .catch((err) => {
          console.log(err);
          return 'failed';
        });
    }
  }

  return (
    <div className="main">
      <span className="BG" />
      <div className="box">
        <input
          placeholder="https://www.youtube.com/example"
          className="input"
          onChange={(e) => changeHandeler(e)}
          type="text"
          value={URL}
        />
        <img onClick={() => SEND(URL)} className="btn" src={btn} alt="" />
      </div>
      <style>
        {`
          .main {
            width: 75vw;
            height: 1vw;
            background-color: rgba(255, 255, 255, 0.3);
            border:  5px solid rgba(117, 238, 182, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100rem;
            padding: 4vw 3vw;
            overflow: hidden;
          }
          .box {
            width: 95%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 100rem;
            padding: 1rem 2rem;
          }
          .BG {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.6);
            width: 72%;
            height: 6%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 100rem;
            padding: 1rem 2rem;
          }
          .input {
            background-color: white;
            width: 95%;
            height: auto;
            outline: none;
            border: 2px solid rgb(255, 255, 255);
            font-size: 2rem;
            border-radius: 100rem;
            padding: 0.7rem 1.5rem;
            z-index: 2;
          }
          .input:focus {
            border: 2px solid rgb(150, 255, 150);
          }
          .btn {
            position: relative;
            right: -0.5rem;
            height: 4.5rem;
            cursor: pointer;
            transition: all 0.2s linear;
          }
          .btn:hover {
            transform: scale(1.1);
          }

          @media only screen and (max-width: 600px) {
            .main {
              width: 75vw;
              height: 1vw;
              border-radius: 100rem;
              padding: 1.8rem 1vw;
              overflow: visible;
            }
            .btn {
              position: absolute;
              right: 0.5rem;
              z-index: 9;
            }
            .BG {
              display: none;
            }
            .box {
              position: relative;
            }

            .input {
              position: absolute;
              left: 0;
              width: 60%;
              border: 1px solid rgb(255, 255, 255);
              font-size: 1rem;
              padding: 0.7rem 1.5rem;
              z-index: 2;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Input;
