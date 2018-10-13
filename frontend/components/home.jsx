import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import Main from './main';


const Home = ( {currentUser} ) => {
  if (currentUser) {
    return (<Main></Main>);
  } else {
    return (<Splash></Splash>)
  }
};


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

export default connect(mapStateToProps)
                      (Home);
