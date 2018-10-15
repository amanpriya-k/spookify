import React from 'react';
import { Link } from 'react-router-dom';


class SongIndexItem extends React.Component {

  


  render () {
    let { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to="/"><h2>♪ <span><p>{song.name}</p></span></h2></Link>
        <h4><Link className="ugh" to="/">{song.artistName}</Link> • <Link className="ugh" to="/">{song.albumTitle}</Link></h4>
      </li>
    )
  }

}


export default SongIndexItem;
