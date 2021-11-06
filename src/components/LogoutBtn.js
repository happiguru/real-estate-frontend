import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn, setUser } from '../actions/user';

const LogoutBtn = ({
  logIn, setUser,
}) => {
  const onLogout = () => {
    localStorage.removeItem('token');
    logIn(false);
    setUser({});
  };

  return (
    <button type="button" onClick={onLogout} className="btn">Logout</button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (status) => dispatch(logIn(status)),
  setUser: (user) => dispatch(setUser(user)),
});

LogoutBtn.propTypes = {
  logIn: PropTypes.func,
  setUser: PropTypes.func,
};

LogoutBtn.defaultProps = {
  logIn: null,
  setUser: null,
};

export default connect(undefined, mapDispatchToProps)(LogoutBtn);