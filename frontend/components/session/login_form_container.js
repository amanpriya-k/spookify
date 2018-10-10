import { connect } from 'react-redux';
import SessionForm from './session_form'
import { login, receiveErrors, loginDemo } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login',
  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
