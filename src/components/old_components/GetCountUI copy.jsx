import React from "react";

function GetCountUIcopy({ whichCount, countNumber }) {
  return (
    <>
      <div>
        {whichCount}: {countNumber}
      </div>
    </>
  );
}

export default GetCountUIcopy;
