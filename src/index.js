import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApartmentItems from './containers/ApartmentItems';
import ApartmentDetail from './components/ApartmentDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
          <Route exact path="/" component={LoginForm} />
            <Route exact path="/apartments" component={ApartmentItems} />
            <Route exact path="/apartments/:id" component={ApartmentDetail} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
