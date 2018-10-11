# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create(username: 'ghostuser', email: 'ghostuser@gmail.com', password: '123456')


# Artists

the1975 = Artist.create(name: 'The 1975')
ariana = Artist.create(name: 'Ariana Grande')
bastille = Artist.create(name: 'Bastille')
birdy = Artist.create(name: 'Birdy')
borns = Artist.create(name: 'BORNS')
bishop = Artist.create(name: 'Bishop Briggs')
coin = Artist.create(name: 'COIN')
finefrenzy = Artist.create(name: 'A Fine Frenzy')
hansomeghost = Artist.create(name: 'Handsome Ghost')
headandtheheart = Artist.create(name: 'The Head and the Heart')
jukeboxtheghost = Artist.create(name: 'Jukebox the Ghost')
londongrammar = Artist.create(name: 'London Grammar')
smallpools = Artist.create(name: 'Smallpools')

# Albums

facedown = Albums.create(title: 'Facedown', artist_id: the1975.id)
musicforcars = Albums.create(title: 'Music For Cars', artist_id: the1975.id)
deluxe = Albums.create(title: 'The 1975 (Deluxe)', artist_id: the1975.id)
sweetener = Albums.create(title: 'Sweetener', artist_id: ariana.id)
dangerous = Albums.create(title: 'Dangerous Woman', artist_id: ariana.id)
Albums.create(title: 'Sincerity is Scary', artist_id: the1975.id)

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
