import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import Main from './main';


const Home = ( {currentUser} ) => {
  console.log("HOME COMPONENTTTTT");
  if (currentUser) {
    console.log('logged in!');
    return (
      <Main></Main>
  );
  } else {
    console.log('not logged in!');
    return (<Splash></Splash>)
  }
};


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

export default connect(mapStateToProps)
                      (Home);
