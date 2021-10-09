import React, { useContext } from "react";

import { AppContext } from "../api/ContextAPI";

function Loader() {
  const { loading } = useContext(AppContext);

  return (
    <div className={loading === true ? "preloader" : "false"}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>

      <style jsx>{`
        .false {
          display: none;
        }
        .preloader {
          background-color: rgba(78, 78, 78, 0.705);
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          font-size: 12rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 90;
        }
        .loader {
          color: black;
          border: 3px solid white;
          padding: 0.5rem 10rem;
          background-color: rgba(196, 196, 196, 0.7);
          animation: loader 2s linear infinite;
          font-size: 8rem;
        }

        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #dfc;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 8px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 8px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 32px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 56px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }

        @keyframes loader {
          0% {
          }
          50% {
            transform: scale(1.1);
            filter: blur(3px);
          }
          100% {
          }
        }
        @media only screen and (max-width: 600px) {
          .loader {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
