import { connect } from 'react-redux';
import SessionForm from './session_form'
import { signup, receiveErrors} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
