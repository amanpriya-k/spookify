
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import shuffle from 'shuffle-array';

class ReactMusicPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        active: props.songs[0],
        current: 0,
        progress: 0,
        random: false,
        repeat: true,
        // repeat: false,
        mute: false,
        play: props.autoplay || true,
        // play: props.autoplay || false,
        songs: props.songs
      }
    this.setProgress = this.setProgress.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.toggle = this.toggle.bind(this);
    this.end = this.end.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.randomize = this.randomize.bind(this);
    this.repeat = this.repeat.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  componentDidMount() {
    let playerElement = this.refs.player; // grabs html element playing music, ref='player' element
    playerElement.addEventListener('timeupdate', this.updateProgress); // where do these methods come from? - timeupdate/ended/etc
    playerElement.addEventListener('ended', this.end); // where do these methods come from? - timeupdate/ended/etc
    playerElement.addEventListener('error', this.next); // where do these methods come from? - timeupdate/ended/etc
  }

  componentWillUnmount() { // when will this component ever unmount? when logged out?
    let playerElement = this.refs.player;
    playerElement.removeEventListener('timeupdate', this.updateProgress);
    playerElement.removeEventListener('ended', this.end);
    playerElement.removeEventListener('error', this.next);
  }

  setProgress(e) {
      let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target; // WAT
      let width = target.clientWidth;
      let rect = target.getBoundingClientRect();
      let offsetX = e.clientX - rect.left; // whats this!!
      let duration = this.refs.player.duration; // the html element playing music can say the duration of the audio?
      let currentTime = (duration * offsetX) / width;
      let progress = (currentTime * 100) / duration;

      this.refs.player.currentTime = currentTime; // are we setting the time on the html el?
      this.setState({ progress: progress });
      this.play();
  }

  updateProgress() {
    let duration = this.refs.player.duration;
    let currentTime = this.refs.player.currentTime;
    let progress = (currentTime * 100) / duration;

    this.setState({ progress: progress });
  }

  play() {
    this.setState({ play: true });
    this.refs.player.play();
  }

  pause() {
    this.setState({ play: false });
    this.refs.player.pause();
  }

  toggle() {
    this.state.play ? this.pause() : this.play();
  }

  end() {
      (this.state.repeat) ? this.play() : this.setState({ play: false });
  }

  next() {
    var total = this.state.songs.length;
    var current = (this.state.repeat) ? this.state.current : (this.state.current < total - 1) ? this.state.current + 1 : 0;
    var active = this.state.songs[current];

    this.setState({ current: current, active: active, progress: 0 });

    this.refs.player.src = active.audioUrl;
    this.play();
  }

  previous() { // actually start over??
    var total = this.state.songs.length;
    var current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
    var active = this.state.songs[current];

    this.setState({ current: current, active: active, progress: 0 });

    this.refs.player.src = active.audioUrl;
    this.play();
  }

  randomize() {
    var s = shuffle(this.state.songs.slice());
    this.setState({ songs: (!this.state.random) ? s : this.state.songs, random: !this.state.random });
  }

  repeat() {
    this.setState({ repeat: !this.state.repeat });
  }

  toggleMute() {
    let mute = this.state.mute;

    this.setState({ mute: !this.state.mute });
    this.refs.player.volume = (mute) ? 1 : 0;
  }

  render() {
    // debugger

    const { active, play, progress } = this.state;

    let coverClass = classnames('player-cover', {'no-height': !!!active.imageUrl });
    let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play-circle': !play});
    let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute}, 'vol');
    let repeatClass = classnames('player-btn small repeat', {'active': this.state.repeat});
    let randomClass = classnames('player-btn small random', {'active': this.state.random });

    // <audio src={active.audioUrl} autoPlay={this.state.play} preload="auto" ref="player"></audio>
    return (
        <div className="player-container">
            <audio src={active.audioUrl} autoPlay={this.state.play} ref="player"></audio>

            <div className='player-img'>
              <Link to={`/albums/${active.albumId}`}>
                <img src={active.imageUrl}></img>
              </Link>
            </div>

            <div className="artist-info">
                <Link to={`/albums/${active.albumId}`}>
                  <h2 className="song-name">{active.songName}</h2>
                </Link>
                <Link to={`/artists/${active.artistId}`}>
                  <h3 className="artist-name">{active.artistName}</h3>
                </Link>
            </div>


            <div className="center-player">

              <div className="player-options">

                <div className="player-buttons">
                  <button className={repeatClass} onClick={this.repeat} title="Repeat">
                    <i className="fa fa-random" />
                  </button>
                </div>

                <div className="player-buttons player-controls">
                  <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                    <i className="fa fa-backward" />
                  </button>

                  <button onClick={this.toggle} className="player-btn big" title="Play/Pause">
                    <i className={playPauseClass} />
                  </button>

                  <button onClick={this.next} className="player-btn medium" title="Next Song">
                    <i className="fa fa-forward" />
                  </button>
                </div>

                <div className="player-buttons">
                  <button className={randomClass} onClick={this.randomize} title="Shuffle">
                    <p>∞</p>
                  </button>

                  <button className="player-btn small volume" onClick={this.toggleMute} title="Mute/Unmute">
                    <i className={volumeClass} />
                  </button>

                </div>

              </div>

              <div className="player-progress-container" onClick={this.setProgress}>
                <span className="player-progress-value" style={{width: progress + '%'}}></span>
              </div>

            </div>




        </div>
    );
  }
}


export default ReactMusicPlayer;
