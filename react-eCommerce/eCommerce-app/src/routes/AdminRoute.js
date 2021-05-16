import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AdminRoute = ({component: Component, ...rest}) => {

  const {userInfo} = useSelector(state => state.userLogInReducer);

  return (
    <Route {...rest} render={ props => {
      if(userInfo && userInfo.isAdmin) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/', state: { from: props.location }}} />
      }
    }} />
  )
}

