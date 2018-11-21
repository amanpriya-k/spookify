import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllAlbums, fetchSavedAlbums, fetchSearchedAlbums } from './../actions/music_actions';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/albums") {
      this.props.fetchAllAlbums()
         .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else  if (this.props.location.pathname == "/library/albums") {
      this.props.fetchSavedAlbums()
         .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else if ( this.props.searchTerm != undefined ) {
      this.props.fetchSearchedAlbums(this.props.searchTerm)
         .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  componentWillReceiveProps(newProps) {
    // window.setTimeout(
    //   this.setState({ loading: true }), 500
    // )
    if (this.props.searchTerm != newProps.searchTerm ) {
      this.props.fetchSearchedAlbums(newProps.searchTerm)
         .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  render() {

    let { albums } = this.props;

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <PulseLoader
            sizeUnit={"px"}
            height={30}
            width={30}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div>
      )
    }

    if (albums.length < 1) {
      return null;
    }
    
    return(
      <div className="albumIndexContainer">
        <div>
          { this.props.searchTerm ? <h1>Albums</h1> : null }
          <ul className="album-index">

            {albums.map(
              (album, idx) =>
              (<li key={idx}>
                <Link to={`/albums/${album.id}`}>
                  <div className="img-container">
                    <img src={album.coverUrl}></img>
                    <i className="far fa-play-circle"></i>
                  </div>
                </Link>

                <Link to={`/albums/${album.id}`}><h2>{album.title}</h2></Link>
                <h3>{album.artistName}</h3>
              </li>)
            )}

          </ul>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllAlbums: () => (dispatch(fetchAllAlbums())),
  fetchSavedAlbums: () => (dispatch(fetchSavedAlbums())),
  fetchSearchedAlbums: (searchTerm) => (dispatch(fetchSearchedAlbums(searchTerm)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                      (AlbumIndex));





                      // <ProtectedRoute path="/albums/:albumId" component={AlbumShow}></ProtectedRoute>
