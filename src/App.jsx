// import { useDispatch, useSelector } from "react-redux";
// import { getUsersFetch } from "./actions";

// export default function App() {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.myFirstReducer.users)
//   console.log(users);
//   return (
//     <div>
//       <h1>App Component</h1>
//       {
//         users.map((user) => {
//           <p>{user.id}</p>
//         })
//       }
//     </div>
//   )
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

export default function App() {
  // Get the dispatch function to send actions
  const dispatch = useDispatch();

  // Select users data from the Redux store
  const users = useSelector(state => state.myFirstReducer.users);

  // useEffect runs once after initial render
  useEffect(() => {
    // Dispatch the action to fetch users (triggers saga)
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>App Component</h1>
      {
        // Render each user's name
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }
    </div>
  );
}
