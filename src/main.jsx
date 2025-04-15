// https://www.youtube.com/watch?v=eA6rskkE9y8&t=894s ==> EdRoh

// Importing StrictMode from React to highlight potential issues in the app
import { StrictMode } from 'react';

// Importing createRoot from React DOM to render the app (React 18+ syntax)
import { createRoot } from 'react-dom/client';

// Importing the main App component
import App from './App.jsx';

// Importing Provider from react-redux to allow our app to access the Redux store
import { Provider } from 'react-redux';

// Importing Redux utilities to create a store and apply middleware
import { combineReducers, createStore, applyMiddleware } from 'redux';

// Importing Redux-Saga middleware
import createSagaMiddleware from 'redux-saga';

// Importing a reducer (your custom reducer for managing state)
import myFirstReducer from './reducer';

// Importing a saga (your custom saga for handling side effects)
import mySaga from './sagas.js';

// Creating an instance of the Redux-Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combining all reducers into a root reducer
// You only have one reducer now, but you can add more later
const rootReducer = combineReducers({ myFirstReducer });

// Creating the Redux store and applying the saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Running the root saga
sagaMiddleware.run(mySaga);

// Rendering the React app inside the root DOM node
// The Redux store is passed down to the app using the Provider
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Helps with highlighting potential problems in development */}
    <Provider store={store}> {/* Makes Redux store available to all components */}
      <App /> {/* Your main app component */}
    </Provider>
  </StrictMode>,
);
