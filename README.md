![alt text](https://github.com/amanpriya-k/spookify/blob/master/landing-page.png)
# Spookify
---

[Visit Spookify Now](https://spookify.herokuapp.com)

Spookify is a music streaming service in which you can save your favorite songs and albums, follow your favorite artists or your friends, and follow and create your own playlists.

The project was built in 10 days, and more features will be added over time.

---

## Features

- Users can browse a collection of artists, albums, songs, and playlists
- Users can save songs and albums, and follow artists and playlists, and view them in their library
- Users can create and delete their own playlists, and add/remove songs from them
- Users can search the entire collection for other users, songs, albums, artists, and playlists
- Users can follow and be followed by other users
- Users can play music continuously

---

### Search

Users can search for other songs, other users, artists, etc. and interact with the top results from the displayed search results.

This feature used React's rerendering on state change to immediately display the results as the user types. The input box the user types in updates the search results after a .3 second delay. This allows the ajax requests to be made after a short delay, so the calls are sent with the correct input and the results are rendered quicker.

```javascript
// onChange function
updateInput(e) {
  this.setState({render: false})

  let val = e.target.value

  if(this.timeout) clearTimeout(this.timeout);

  this.timeout = setTimeout(() => {
    this.setState({ render: true });
  }, 300);
  this.setState({ searchTerm: val });
}

// input element
<input autoFocus="autoFocus"
  type="text"
  value={this.state.searchTerm}
  onChange={this.updateInput}
  placeholder="Start typing..."></input>

// results element rendered in return, which rerenders its children on change of searchTerm
<SearchResults searchTerm={searchTerm} ></SearchResults>
```
![alt text](http://g.recordit.co/04xYCJAxV4.gif)

### Continuous Play

Songs continuously play in the bottom of the page. When a song is played, the other songs in the list are queued. If the queue is empty, the song will repeat if repeat is selected, or it will stop playing. This was achieved by having a slice of state for the music player, storing the current song and queue, which was updated by the individual song items and also the music player itself, so the currently playing song can be accessed in other components, allowing the currently playing song to be highlighted when displayed elsewhere.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/play.png)

### User's Saves & Follows

Using polymorphic tables for Saves and Follows, the user's saved and followed songs, albums, artists, and playlists are displayed in their library. From any show page for those items, they can save or unsave them.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/library-songs.png)


### Playlist CRUD

Users can create, add to/remove songs from, and delete playlists. Most of these actions were done using modals, passing necessary information to make the requests to the modal and on close, immediately updating the playlist's displayed songs.

![alt text](https://github.com/amanpriya-k/spookify/blob/master/create-playlist.png)
![alt text](http://g.recordit.co/SzcvyMMzG8.gif)


----

## Technologies

This project was built with a Ruby on Rails backend which stores all the data with Postgresql database and utilized Rails ActiveStorage by uploading image and music files to Amazon S3. React and Redux were used on the frontend to make it a single-page application with seamless navigation and dynamic updating (for example, saving songs and following user actions are immediately displayed).

---

## Future plans

Some features I would like to add in the future are
  - the ability to edit playlist information
  - a user show page (for other users) with more information (currently it only displays their username)
  - the ability to add single songs to the queue
  - a suggested/explore feature taking a user's preferences into account
