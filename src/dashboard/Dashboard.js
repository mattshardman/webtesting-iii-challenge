import React, { useState } from "react";

import Display from "../display/Display";
import Controls from "../controls/Controls";

const Dashboard = () => {
  const [locked, setLocked] = useState(false);
  const [closed, setClosed] = useState(false);
  //

  const toggleLocked = () => {
    setLocked(prev => !prev );
  };

  const toggleClosed = () => {
    setClosed(prev => !prev);
  };

  return (
    <>
      <Display locked={locked} closed={closed} />
      <Controls
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
      />
    </>
  );
};

export default Dashboard;
