# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
Follow.destroy_all
Save.destroy_all

ghost = User.create(username: 'ghostuser', email: 'ghostuser@gmail.com', password: '123456')
user2 = User.create(username: 'user2woohoo', email: 'user2@gmail.com', password: '123456')
grace18 = User.create(username: 'grace18', email: 'grace18@gmail.com', password: '123456')
alexandrax = User.create(username: 'alexandrax', email: 'alexandrax@gmail.com', password: '123456')
luciast = User.create(username: 'luciast', email: 'luciast@gmail.com', password: '123456')
jones3 = User.create(username: 'jones3', email: 'jones3@gmail.com', password: '123456')
musig = User.create(username: 'musig', email: 'musig@gmail.com', password: '123456')

ghost.following << user2
ghost.following << grace18
ghost.followers << alexandrax

# Artists

the1975 = Artist.create(name: 'The 1975')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/1975-artist.jpg')
the1975.photo.attach(io: x, filename: '1975-artist.jpg')

ariana = Artist.create(name: 'Ariana Grande')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana-grande-artist.jpg')
ariana.photo.attach(io: x, filename: 'ariana-grande-artist.jpg')

bastille = Artist.create(name: 'Bastille')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille-artist.jpg')
bastille.photo.attach(io: x, filename: 'bastille-artist.jpg')

birdy = Artist.create(name: 'Birdy')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/birdy-artist.jpg')
birdy.photo.attach(io: x, filename: 'birdy-artist.jpg')

borns = Artist.create(name: 'BORNS')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns-artist.jpg')
borns.photo.attach(io: x, filename: 'borns-artist.jpg')

bishop = Artist.create(name: 'Bishop Briggs')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bishop-briggs-artist.jpg')
bishop.photo.attach(io: x, filename: 'bishop-briggs-artist.jpg')

coin = Artist.create(name: 'COIN')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/coin-artist.jpg')
coin.photo.attach(io: x, filename: 'coin-artist.jpg')

finefrenzy = Artist.create(name: 'A Fine Frenzy')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/fine-frenzy-artist.jpg')
finefrenzy.photo.attach(io: x, filename: 'fine-frenzy-artist.jpg')

hansomeghost = Artist.create(name: 'Handsome Ghost')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/handsome-ghost-artist.jpg')
hansomeghost.photo.attach(io: x, filename: 'handsome-ghost-artist.jpg')

headandtheheart = Artist.create(name: 'The Head and the Heart')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/head-and-the-heart-artist.jpg')
headandtheheart.photo.attach(io: x, filename: 'head-and-the-heart-artist.jpg')

jukeboxtheghost = Artist.create(name: 'Jukebox the Ghost')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jukebox-the-ghost-artist.jpg')
jukeboxtheghost.photo.attach(io: x, filename: 'jukebox-the-ghost-artist.jpg')

londongrammar = Artist.create(name: 'London Grammar')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/london-grammar-artist.jpg')
londongrammar.photo.attach(io: x, filename: 'london-grammar-artist.jpg')

smallpools = Artist.create(name: 'Smallpools')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/smallpools-artist.jpg')
smallpools.photo.attach(io: x, filename: 'smallpools-artist.jpg')

ghost.followed_artists << smallpools
ghost.followed_artists << hansomeghost
ghost.followed_artists << coin
ghost.followed_artists << ariana

# Albums

facedown = Album.create(title: 'Facedown', artist_id: the1975.id)
howwillyouknow = Album.create(title: 'How Will You Know If You Never Try', artist_id: coin.id)
sweetener = Album.create(title: 'Sweetener', artist_id: ariana.id)
fadedheart = Album.create(title: 'Faded Heart', artist_id: borns.id)
brilliantglow = Album.create(title: 'The Brilliant Glow', artist_id: hansomeghost.id)
dangerous = Album.create(title: 'Dangerous Woman', artist_id: ariana.id)
badblood = Album.create(title: 'Bad Blood', artist_id: bastille.id)
deluxe = Album.create(title: 'The 1975 (Deluxe)', artist_id: the1975.id)
sincerity = Album.create(title: 'Sincerity is Scary', artist_id: the1975.id)
musicforcars = Album.create(title: 'Music For Cars', artist_id: the1975.id)

ghost.saved_albums << facedown
ghost.saved_albums << sweetener
ghost.saved_albums << badblood

facedown_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/facedown-album.jpg')
facedown.cover.attach(io: facedown_cover, filename: 'facedown-album.jpg')

musicforcars_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/musicforcars-album.png')
musicforcars.cover.attach(io: musicforcars_cover, filename: 'musicforcars-album.jpg')

deluxe_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/1975deluxe-album.jpg')
deluxe.cover.attach(io: deluxe_cover, filename: '1975deluxe-album.jpg')

sweetener_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener-album.jpg')
sweetener.cover.attach(io: sweetener_cover, filename: 'sweetener-album.jpg')

dangerous_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dangerouswoman-album.jpg')
dangerous.cover.attach(io: dangerous_cover, filename: 'dangerouswoman-album.jpg')

sincerity_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sincerityisscary-album.jpg')
sincerity.cover.attach(io: sincerity_cover, filename: 'sincerityisscary-album.jpg')

badblood_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/badblood-cover.png')
badblood.cover.attach(io: badblood_cover, filename: 'badblood-album.png')

fadedheart_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/fadedheart-album.jpg')
fadedheart.cover.attach(io: fadedheart_cover, filename: 'fadedheart-album.jpg')

howwillyouknow_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/howwillyouknow.jpg')
howwillyouknow.cover.attach(io: howwillyouknow_cover, filename: 'howwillyouknow.jpg')

brilliantglow_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/brilliant-glow-album.png')
brilliantglow.cover.attach(io: brilliantglow_cover, filename: 'brilliantglow-album.jpg')



# Playlists

a = Playlist.create(name: 'Chill Vibes', user_id: ghost.id)

b = Playlist.create(name: 'rainy day', user_id: user2.id)

c = Playlist.create(name: 'Fall Music', user_id: ghost.id)

d = Playlist.create(name: 'harrys favs', user_id: user2.id)

e = Playlist.create(name: 'best of ariana', user_id: user2.id)

f = Playlist.create(name: 'random stuff', user_id: ghost.id)

ghost.followed_playlists << a
ghost.followed_playlists << d
ghost.followed_playlists << f



# Songs

ghost.saved_songs << Song.create(name: 'Facedown', album_id: facedown.id)
ghost.saved_songs << Song.create(name: 'Antichrist', album_id: facedown.id)
ghost.saved_songs << Song.create(name: 'The City', album_id: facedown.id)
ghost.saved_songs << Song.create(name: 'Woman', album_id: facedown.id)
a.songs << Song.create(name: 'Anobrain', album_id: musicforcars.id)
a.songs << Song.create(name: 'Chocolate', album_id: musicforcars.id)
ghost.saved_songs << Song.create(name: 'HNSCC', album_id: musicforcars.id)
b.songs << Song.create(name: 'Me', album_id: musicforcars.id)
a.songs << Song.create(name: 'M.O.N.E.Y', album_id: deluxe.id)
ghost.saved_songs << Song.create(name: 'Talk!', album_id: deluxe.id)
a.songs << Song.create(name: 'Heart Out', album_id: deluxe.id)
a.songs << Song.create(name: 'Girls', album_id: deluxe.id)
b.songs << Song.create(name: 'breathin', album_id: sweetener.id)
a.songs << Song.create(name: 'God is a woman', album_id: sweetener.id)
a.songs << Song.create(name: 'no tears left to cry', album_id: sweetener.id)
b.songs << Song.create(name: 'sweetener', album_id: sweetener.id)
a.songs << Song.create(name: 'Moonlight', album_id: dangerous.id)
a.songs << Song.create(name: 'Be Alright', album_id: dangerous.id)
a.songs << Song.create(name: 'Into You', album_id: dangerous.id)
a.songs << Song.create(name: 'Everyday', album_id: dangerous.id)
Song.create(name: 'I Don\'t Care', album_id: dangerous.id)
Song.create(name: 'Thinkin Bout You', album_id: dangerous.id)
