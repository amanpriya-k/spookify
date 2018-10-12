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

User.create(username: 'ghostuser', email: 'ghostuser@gmail.com', password: '123456')


# Artists

the1975 = Artist.create(name: 'The 1975')
# x = File.open('app/assets/images/1975-artist.jpg')
x = File.open('https://s3-us-west-1.amazonaws.com/spookify-dev/3ULsAsCRJ8gW1ijynqpq4e4y')
the1975.photo.attach(io: x, filename: '1975-artist.jpg')

ariana = Artist.create(name: 'Ariana Grande')
x = File.open('app/assets/images/ariana-grande-artist.jpg')
ariana.photo.attach(io: x, filename: 'ariana-grande-artist.jpg')

bastille = Artist.create(name: 'Bastille')
x = File.open('app/assets/images/bastille-artist.jpg')
bastille.photo.attach(io: x, filename: 'bastille-artist.jpg')

birdy = Artist.create(name: 'Birdy')
x = File.open('app/assets/images/birdy-artist.jpg')
birdy.photo.attach(io: x, filename: 'birdy-artist.jpg')

borns = Artist.create(name: 'BORNS')
x = File.open('app/assets/images/borns-artist.jpg')
borns.photo.attach(io: x, filename: 'borns-artist.jpg')

bishop = Artist.create(name: 'Bishop Briggs')
x = File.open('app/assets/images/bishop-briggs-artist.jpg')
bishop.photo.attach(io: x, filename: 'bishop-briggs-artist.jpg')

coin = Artist.create(name: 'COIN')
x = File.open('app/assets/images/coin-artist.jpg')
coin.photo.attach(io: x, filename: 'coin-artist.jpg')

finefrenzy = Artist.create(name: 'A Fine Frenzy')
x = File.open('app/assets/images/fine-frenzy-artist.jpg')
finefrenzy.photo.attach(io: x, filename: 'fine-frenzy-artist.jpg')

hansomeghost = Artist.create(name: 'Handsome Ghost')
x = File.open('app/assets/images/handsome-ghost-artist.jpg')
hansomeghost.photo.attach(io: x, filename: 'handsome-ghost-artist.jpg')

headandtheheart = Artist.create(name: 'The Head and the Heart')
x = File.open('app/assets/images/head-and-the-heart-artist.jpg')
headandtheheart.photo.attach(io: x, filename: 'head-and-the-heart-artist.jpg')

jukeboxtheghost = Artist.create(name: 'Jukebox the Ghost')
x = File.open('app/assets/images/jukebox-the-ghost-artist.jpg')
jukeboxtheghost.photo.attach(io: x, filename: 'jukebox-the-ghost-artist.jpg')

londongrammar = Artist.create(name: 'London Grammar')
x = File.open('app/assets/images/london-grammar-artist.jpg')
londongrammar.photo.attach(io: x, filename: 'london-grammar-artist.jpg')

smallpools = Artist.create(name: 'Smallpools')
x = File.open('app/assets/images/smallpools-artist.jpg')
smallpools.photo.attach(io: x, filename: 'smallpools-artist.jpg')

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

facedown_cover = File.open('app/assets/images/facedown-album.jpg')
facedown.cover.attach(io: facedown_cover, filename: 'facedown-album.jpg')

musicforcars_cover = File.open('app/assets/images/musicforcars-album.png')
musicforcars.cover.attach(io: musicforcars_cover, filename: 'musicforcars-album.jpg')

deluxe_cover = File.open('app/assets/images/1975deluxe-album.jpg')
deluxe.cover.attach(io: deluxe_cover, filename: '1975deluxe-album.jpg')

sweetener_cover = File.open('app/assets/images/sweetener-album.jpg')
sweetener.cover.attach(io: sweetener_cover, filename: 'sweetener-album.jpg')

dangerous_cover = File.open('app/assets/images/dangerouswoman-album.jpg')
dangerous.cover.attach(io: dangerous_cover, filename: 'dangerouswoman-album.jpg')

sincerity_cover = File.open('app/assets/images/sincerityisscary-album.jpg')
sincerity.cover.attach(io: sincerity_cover, filename: 'sincerityisscary-album.jpg')

badblood_cover = File.open('app/assets/images/badblood-cover.png')
badblood.cover.attach(io: badblood_cover, filename: 'badblood-album.png')

fadedheart_cover = File.open('app/assets/images/fadedheart-album.jpg')
fadedheart.cover.attach(io: fadedheart_cover, filename: 'fadedheart-album.jpg')

howwillyouknow_cover = File.open('app/assets/images/howwillyouknow.jpg')
howwillyouknow.cover.attach(io: howwillyouknow_cover, filename: 'howwillyouknow.jpg')

brilliantglow_cover = File.open('app/assets/images/brilliant-glow-album.png')
brilliantglow.cover.attach(io: brilliantglow_cover, filename: 'brilliantglow-album.jpg')


# Songs

Song.create(name: 'Facedown', album_id: facedown.id)
Song.create(name: 'Antichrist', album_id: facedown.id)
Song.create(name: 'The City', album_id: facedown.id)
Song.create(name: 'Woman', album_id: facedown.id)
Song.create(name: 'Anobrain', album_id: musicforcars.id)
Song.create(name: 'Chocolate', album_id: musicforcars.id)
Song.create(name: 'HNSCC', album_id: musicforcars.id)
Song.create(name: 'Me', album_id: musicforcars.id)
Song.create(name: 'M.O.N.E.Y', album_id: deluxe.id)
Song.create(name: 'Talk!', album_id: deluxe.id)
Song.create(name: 'Heart Out', album_id: deluxe.id)
Song.create(name: 'Girls', album_id: deluxe.id)
Song.create(name: 'breathin', album_id: sweetener.id)
Song.create(name: 'God is a woman', album_id: sweetener.id)
Song.create(name: 'no tears left to cry', album_id: sweetener.id)
Song.create(name: 'sweetener', album_id: sweetener.id)
Song.create(name: 'Moonlight', album_id: dangerous.id)
Song.create(name: 'Be Alright', album_id: dangerous.id)
Song.create(name: 'Into You', album_id: dangerous.id)
Song.create(name: 'Everyday', album_id: dangerous.id)
Song.create(name: 'I Don\'t Care', album_id: dangerous.id)
Song.create(name: 'Thinkin Bout You', album_id: dangerous.id)
