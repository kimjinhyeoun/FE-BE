import React from "react";

const App = () => {
  let msg ="World";
  const addResult = (x, y) => {
    return(
      <div>
        {x} + {y} = {x + y}
      </div>
    );
  };

  return(
    <div>
      <h2>hello {msg}!</h2>
      <hr />
      {addResult(4, 3)}
    </div>
  );
};

export default App;