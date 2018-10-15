import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import NewPlaylistForm from './new_playlist_form';

class NewPlaylistModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let { modal, closeModal } = this.props;
    if (!modal) {
      return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <NewPlaylistForm></NewPlaylistForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistModal);
