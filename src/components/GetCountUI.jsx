import React from "react";

function GetCountUI({ whichCount, countNumber }) {
  return (
    <>
      <div>
        {whichCount}: {countNumber}
      </div>
    </>
  );
}

export default GetCountUI;
