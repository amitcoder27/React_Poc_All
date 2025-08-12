// a) Using useContext Hook (Recommended for Function Components)


// jsx
// Copy
// Edit
// import React, { useContext } from "react";
// import { MyContext } from "./MyProviderFile";

// export default function ChildComponent() {
//   const { value, setValue } = useContext(MyContext);

//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={() => setValue("Updated via useContext!")}>Update</button>
//     </div>
//   );
// }

import React from "react";
import { MyContext } from "./ContextAPIProviderConsumer";

export default function Consumer() {
  return (
    <MyContext.Consumer>
      {({ value, setValue }) => (
        <div>
            <h1>Context API  Provider  Consumer</h1>
          <p>{value}</p>
          <button onClick={() => setValue("Updated via Consumer!")}>Update</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}
