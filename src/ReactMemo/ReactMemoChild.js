import React from "react";

const ReactMemoChild = React.memo(({ value }) => {
  console.log("ReactMemoChild rendered");
  return <div>Child value: {value}</div>;
});

export default ReactMemoChild;
