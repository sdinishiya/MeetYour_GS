import React from "react";

// components

import BookTable from "components/Appointment/view.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BookTable />
        </div>
        <div className="w-full mb-12 px-4">
          <BookTable color="dark" />
        </div>
      </div>
    </>
  );
}
