import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import getStore from './redux/store'

import Home from './pages/home';

export const { store, persistor } = getStore()


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
          <PersistGate persistor={persistor}>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
            </Switch>
        </PersistGate>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
