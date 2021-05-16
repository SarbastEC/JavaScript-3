import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const UserRoute = ({component: Component, ...rest}) => {

  const {userInfo} = useSelector(state => state.userLogInReducer);

  return (
    <Route {...rest} render={ props => {
      if(userInfo) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
      }
    }} />
  )
}

