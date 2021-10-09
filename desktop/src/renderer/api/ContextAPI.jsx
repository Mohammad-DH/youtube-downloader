import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const Provider = (props) => {
  // states
  const [Data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  // functions for changing the state

  const SetData = (I) => {
    setData(I);
  };
  const SetLoading = (I) => {
    setloading(I);
  };

  // restart functions for whene user change the page

  return (
    <div className="Provider">
      <AppContext.Provider value={{ Data, SetData, SetLoading, loading }}>
        {props.children}
      </AppContext.Provider>

      <style jsx>{`
        .Provider {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Provider;
