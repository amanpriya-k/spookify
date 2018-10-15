import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchAllPlaylists, fetchFollowedPlaylists } from './../actions/music_actions';

class PlaylistIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/playlists") {
      this.props.fetchAllPlaylists();
    } else {
      this.props.fetchFollowedPlaylists();
    }
  }

  render() {
    let { playlists } = this.props;

    if (playlists.length < 1) {
      return null;
    }

    return(
      <div>
        <ul className="playlist-index">
          {playlists.map(
            (playlist, idx) =>
            (<li key={idx}>
              <Link to={`/playlists/${playlist.id}`}>
                <div className="img-container">
                  <img src={'https://s3.us-west-1.amazonaws.com/spookify-dev/playlist-image.png?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEB8aDKiOmkN9J65j%2BzkR7SL6AZbapgjoLmy0gwzx%2Bl0%2BtpgnpvkguS04H4tc4qA6OH6du4dqs4h5cLYQbPKcqdYiHi%2FxRX8ZWAYaTXdB8OBrF%2BRqZQ0NHIO%2FnDM7YANoRs9eHroR6YelCwGzXlf7JZS5o0RWkyCAWK6R5WVPQwksI9rYn9Sq88bUKjtkrCvPrgtW0PfPAjXdlx4IK2B0N81W%2FrWUkehzNYDPwrO9Fy%2BDZgMo%2B4aHkWwzr7qwPB0S5TH1UEFwbj%2BkzFVw%2Frb15fGyupO%2BQnAE4018b9b%2FR2GkZ9O5c9f5Gxeuy7ngBkZKaa2ZPqGI0gULWQ%2BcB5It4nh8mtksKxnDO5DjIrgomNSQ3gU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181015T054830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAT5INYYERUKTNNXGW%2F20181015%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=3c8e47bee2558f18300cbb7553566345d0c5e26a533f58a570769c6da1ae0738'}></img>
                  <i className="far fa-play-circle"></i>
                </div>
              </Link>

              <Link to={`/playlists/${playlist.id}`}><h2>{playlist.name}</h2></Link>
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
  fetchAllPlaylists: () => (dispatch(fetchAllPlaylists())),
  fetchFollowedPlaylists: () => (dispatch(fetchFollowedPlaylists()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistIndex)
