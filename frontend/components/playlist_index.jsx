import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPlaylists } from './../actions/music_actions';

class PlaylistIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPlaylists();
  }

  render() {

    let { playlists } = this.props;
    if (playlists.length < 1) {
      return <h1> there's nothing here :o </h1>
    }

    return(
      <div className="playlist-index">
        <ul>
          {playlists.map(
            (playlist, idx) =>
            (<li key={idx}>
              <h2>title: {playlist.name}</h2>
              <h3>cover: {playlist.imageUrl}</h3>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playlists: Object.values(state.entities.playlists)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPlaylists: () => (dispatch(fetchAllPlaylists()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistIndex)
