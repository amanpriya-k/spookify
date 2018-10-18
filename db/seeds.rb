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
UserFollow.destroy_all
PlaylistSong.destroy_all

# Users

ghost = User.create(username: 'ghostuser', email: 'ghostuser@gmail.com', password: '123456')
user2 = User.create(username: 'user2woohoo', email: 'user2@gmail.com', password: '123456')
grace18 = User.create(username: 'grace18', email: 'grace18@gmail.com', password: '123456')
alexandrax = User.create(username: 'alexandrax', email: 'alexandrax@gmail.com', password: '123456')
luciast = User.create(username: 'luciast', email: 'luciast@gmail.com', password: '123456')
jones3 = User.create(username: 'jones3', email: 'jones3@gmail.com', password: '123456')
musig = User.create(username: 'musig', email: 'musig@gmail.com', password: '123456')
thekingofrb = User.create(username: 'thekingofrb', email: 'thekingofrb@gmail.com', password: '123456')
denny = User.create(username: 'denny', email: 'denny@gmail.com', password: '123456')
francine = User.create(username: 'francine', email: 'francine@gmail.com', password: '123456')
jerry1982 = User.create(username: 'jerry1982', email: 'jerry1982@gmail.com', password: '123456')
leilagxh = User.create(username: 'leilagxh', email: 'leilagxh@gmail.com', password: '123456')
reenxa = User.create(username: 'reenxa', email: 'reenxa@gmail.com', password: '123456')
selinak = User.create(username: 'selinak', email: 'selinak@gmail.com', password: '123456')
aprilf = User.create(username: 'aprilf', email: 'aprilf@gmail.com', password: '123456')

# User follows

ghost.following << user2
ghost.following << jones3
ghost.following << grace18
ghost.following << selinak

ghost.followers << alexandrax
ghost.followers << aprilf
ghost.followers << selinak

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

# The 1975

the1975 = Artist.create(name: 'The 1975')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/1975.jpg')
the1975.photo.attach(io: x, filename: '1975-artist.jpg')

deluxe = Album.create(title: 'The 1975 (Deluxe)', artist_id: the1975.id)
deluxe_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/1975deluxe-album.jpg')
deluxe.cover.attach(io: deluxe_cover, filename: '1975deluxe-album.jpg')

the1975 = Song.create(name: 'The 1975', album_id: deluxe.id)
the1975_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/01+The+1975.mp3')
the1975.audio.attach(io: the1975_audio, filename: 'the1975-audio.mp3')
thecity = Song.create(name: 'The City', album_id: deluxe.id)
thecity_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/02+The+City.mp3')
thecity.audio.attach(io: thecity_audio, filename: 'thecity-audio.mp3')
money = Song.create(name: 'M.O.N.E.Y', album_id: deluxe.id)
money_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/03+M.O.N.E.Y.mp3')
money.audio.attach(io: money_audio, filename: 'money-audio.mp3')
chocolate = Song.create(name: 'Chocolate', album_id: deluxe.id)
chocolate_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/04+Chocolate.mp3')
chocolate.audio.attach(io: chocolate_audio, filename: 'chocolate-audio.mp3')
talk = Song.create(name: 'Talk', album_id: deluxe.id)
talk_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/06+Talk!.mp3')
talk.audio.attach(io: talk_audio, filename: 'talk-audio.mp3')
encounter = Song.create(name: 'An Encounter', album_id: deluxe.id)
encounter_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/07+An+Encounter.mp3')
encounter.audio.attach(io: encounter_audio, filename: 'encounter-audio.mp3')
heartout = Song.create(name: 'Heart Out', album_id: deluxe.id)
heartout_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/08+Heart+Out.mp3')
heartout.audio.attach(io: heartout_audio, filename: 'heartout-audio.mp3')
robber = Song.create(name: 'Robber', album_id: deluxe.id)
robber_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/10+Robbers.mp3')
robber.audio.attach(io: robber_audio, filename: 'robber-audio.mp3')


# Ariana Grande

ariana = Artist.create(name: 'Ariana Grande')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/ariana-2.jpg')
ariana.photo.attach(io: x, filename: 'ariana-grande-artist.jpg')

sweetener = Album.create(title: 'sweetener', artist_id: ariana.id)
sweetener_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/220px-Sweetener_album_cover.png')
sweetener.cover.attach(io: sweetener_cover, filename: 'sweetener-album.jpg')

godisawoman = Song.create(name: 'God is a woman', album_id: sweetener.id)
godisawoman_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/05.+God+is+a+woman.mp3')
godisawoman.audio.attach(io: godisawoman_audio, filename: 'godisawoman-audio.mp3')
raindrops = Song.create(name: 'raindrops', album_id: sweetener.id)
raindrops_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/01.+raindrops+(an+angel+cried).mp3')
raindrops.audio.attach(io: raindrops_audio, filename: 'raindrops-audio.mp3')
borderline = Song.create(name: 'borderline', album_id: sweetener.id)
borderline_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/11.+borderline+(feat.+Missy+Elliott).mp3')
borderline.audio.attach(io: borderline_audio, filename: 'borderline-audio.mp3')
betteroff = Song.create(name: 'better off', album_id: sweetener.id)
betteroff_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/12.+better+off.mp3')
betteroff.audio.attach(io: betteroff_audio, filename: 'betteroff-audio.mp3')
petedavidson = Song.create(name: 'pete davidson', album_id: sweetener.id)
petedavidson_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sweetener+-+ariana/14.+pete+davidson.mp3')
petedavidson.audio.attach(io: petedavidson_audio, filename: 'petedavidson-audio.mp3')

# Jon Bellion


jonbellion = Artist.create(name: 'Jon Bellion')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion-artist.jpg')
jonbellion.photo.attach(io: x, filename: 'jonbellion-artist.jpg')

humancondition = Album.create(title: 'The Human Condition', artist_id: jonbellion.id)
humancondition_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/519ynVtvv3L._SY355_.jpg')
humancondition.cover.attach(io: humancondition_cover, filename: 'humancondition-album.jpg')

heisthesame = Song.create(name: 'He Is The Same', album_id: humancondition.id)
heisthesame_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/01-jon_bellion-he_is_the_same.mp3')
heisthesame.audio.attach(io: heisthesame_audio, filename: 'heisthesame-audio.mp3')
eightiesfilms = Song.create(name: '80\'s films', album_id: humancondition.id)
eightiesfilms_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/02-jon_bellion-80s_films.mp3')
eightiesfilms.audio.attach(io: eightiesfilms_audio, filename: 'eightiesfilms-audio.mp3')
alltimelow = Song.create(name: 'All Time Low', album_id: humancondition.id)
alltimelow_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/03-jon_bellion-all_time_low.mp3')
alltimelow.audio.attach(io: alltimelow_audio, filename: 'alltimelow-audio.mp3')
newyorksoul = Song.create(name: 'New York Soul (pt. II)', album_id: humancondition.id)
newyorksoul_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/04-jon_bellion-new_york_soul_(pt_ii).mp3')
newyorksoul.audio.attach(io: newyorksoul_audio, filename: 'newyorksoul-audio.mp3')
fashion = Song.create(name: 'Fashion', album_id: humancondition.id)
fashion_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/05-jon_bellion-fashion.mp3')
fashion.audio.attach(io: fashion_audio, filename: 'fashion-audio.mp3')
maybeidk = Song.create(name: 'Maybe IDK', album_id: humancondition.id)
maybeidk_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/06-jon_bellion-maybe_idk.mp3')
maybeidk.audio.attach(io: maybeidk_audio, filename: 'maybeidk-audio.mp3')
guillotine = Song.create(name: 'Guillotine (ft. Travis Scott)', album_id: humancondition.id)
guillotine_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/13-jon_bellion-guillotine_(feat_travis_mendes).mp3')
guillotine.audio.attach(io: guillotine_audio, filename: 'guillotine-audio.mp3')
handofgod = Song.create(name: 'Hand of God)', album_id: humancondition.id)
handofgod_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/14-jon_bellion-hand_of_god_(outro).mp3')
handofgod.audio.attach(io: handofgod_audio, filename: 'handofgod-audio.mp3')
irobot = Song.create(name: 'iRobot', album_id: humancondition.id)
irobot_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/12-jon_bellion-irobot.mp3')
irobot.audio.attach(io: irobot_audio, filename: 'irobot-audio.mp3')
morninginamerica = Song.create(name: 'Morning In America', album_id: humancondition.id)
morninginamerica_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/11-jon_bellion-morning_in_america.mp3')
morninginamerica.audio.attach(io: morninginamerica_audio, filename: 'morninginamerica-audio.mp3')

# Hozier

hozier = Artist.create(name: 'Hozier')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier-artist.jpg')
hozier.photo.attach(io: x, filename: 'hozier-artist.jpg')

hozieralbum = Album.create(title: 'Hozier', artist_id: hozier.id)
hozieralbum_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/220px-Hozier_album.jpg')
hozieralbum.cover.attach(io: hozieralbum_cover, filename: 'hozieralbum-album.jpg')

tobealone = Song.create(name: 'To Be Alone', album_id: hozieralbum.id)
tobealone_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-05+To+Be+Alone.mp3')
tobealone.audio.attach(io: tobealone_audio, filename: 'tobealone-audio.mp3')
likerealpeople = Song.create(name: 'Like Real People Do', album_id: hozieralbum.id)
likerealpeople_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-10+Like+Real+People+Do.mp3')
likerealpeople.audio.attach(io: likerealpeople_audio, filename: 'likerealpeople-audio.mp3')
cherrywine = Song.create(name: 'Cherry Wine', album_id: hozieralbum.id)
cherrywine_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-13+Cherry+Wine+(Live).mp3')
cherrywine.audio.attach(io: cherrywine_audio, filename: 'cherrywine-audio.mp3')
inthewoods = Song.create(name: 'In The Woods Somewhere', album_id: hozieralbum.id)
inthewoods_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/2-01+In+the+Woods+Somewhere.mp3')
inthewoods.audio.attach(io: inthewoods_audio, filename: 'inthewoods-audio.mp3')
tobealone = Song.create(name: 'To Be Alone', album_id: hozieralbum.id)
tobealone_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jon-bellion/01-jon_bellion-he_is_the_same.mp3')
tobealone.audio.attach(io: tobealone_audio, filename: 'tobealone-audio.mp3')


# Bastille

bastille = Artist.create(name: 'Bastille')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille-artist.jpg')
bastille.photo.attach(io: x, filename: 'bastille-artist.jpg')

wildworld = Album.create(title: 'Wild World', artist_id: bastille.id)
wildworld_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/220px-Wild_World_album_cover.jpg')
wildworld.cover.attach(io: wildworld_cover, filename: 'wildworld-album.jpg')
lethargy = Song.create(name: 'Lethargy', album_id: wildworld.id)
lethargy_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
lethargy.audio.attach(io: lethargy_audio, filename: 'lethargy-audio.mp3')
blame = Song.create(name: 'Blame', album_id: wildworld.id)
blame_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
blame.audio.attach(io: blame_audio, filename: 'blame-audio.mp3')
winter = Song.create(name: 'Winter Of Youth', album_id: wildworld.id)
winter_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
winter.audio.attach(io: winter_audio, filename: 'winter-audio.mp3')

# HAIM

haim = Artist.create(name: 'HAIM')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim-artist.jpg')
haim.photo.attach(io: x, filename: 'haim-artist.jpg')

somethingtotellyou = Album.create(title: 'Something To Tell You', artist_id: haim.id)
somethingtotellyou_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/220px-Something_To_Tell_You_Haim.png')
somethingtotellyou.cover.attach(io: somethingtotellyou_cover, filename: 'somethingtotellyou-album.jpg')

nothingswrong = Song.create(name: 'Nothings Wrong', album_id: somethingtotellyou.id)
nothingswrong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
nothingswrong.audio.attach(io: nothingswrong_audio, filename: 'nothingswrong-audio.mp3')
somethingtotellsong = Song.create(name: 'Something To Tell You', album_id: somethingtotellyou.id)
somethingtotellsong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
somethingtotellsong.audio.attach(io: somethingtotellsong_audio, filename: 'somethingtotellsong-audio.mp3')
youneverknew = Song.create(name: 'You Never Knew', album_id: somethingtotellyou.id)
youneverknew_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
youneverknew.audio.attach(io: youneverknew_audio, filename: 'youneverknew-audio.mp3')
nightsolong = Song.create(name: 'Night So Long', album_id: somethingtotellyou.id)
nightsolong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
nightsolong.audio.attach(io: nightsolong_audio, filename: 'nightsolong-audio.mp3')


# Hippo Campus

hippocampus = Artist.create(name: 'Hippo Campus')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/hippocampus.jpg')
hippocampus.photo.attach(io: x, filename: 'hippocampus-artist.jpg')

landmark = Album.create(title: 'Landmark', artist_id: hippocampus.id)
landmark_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/268x0w.jpg')
landmark.cover.attach(io: landmark_cover, filename: 'landmark-album.jpg')

sunveins = Song.create(name: 'Sun Veins', album_id: landmark.id)
sunveins_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
sunveins.audio.attach(io: sunveins_audio, filename: 'sunveins-audio.mp3')
blame = Song.create(name: 'Blame', album_id: landmark.id)
blame_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
blame.audio.attach(io: blame_audio, filename: 'blame-audio.mp3')
winter = Song.create(name: 'Winter Of Youth', album_id: landmark.id)
winter_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippo-campus/09.+Lethargy.mp3')
winter.audio.attach(io: winter_audio, filename: 'winter-audio.mp3')

# Janelle Monae

janelle = Artist.create(name: 'Janelle Monae')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/janelle.jpg')
janelle.photo.attach(io: x, filename: 'janelle-artist.jpg')

dirtycomputer = Album.create(title: 'Dirty Computer', artist_id: janelle.id)
dirtycomputer_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/220px-DirtyComputer.png')
dirtycomputer.cover.attach(io: dirtycomputer_cover, filename: 'dirtycomputer-album.jpg')

janesdream = Song.create(name: 'Sun Veins', album_id: dirtycomputer.id)
janesdream_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/04+Jane\'s+Dream.mp3')
janesdream.audio.attach(io: janesdream_audio, filename: 'janesdream-audio.mp3')
igotthejuice = Song.create(name: 'I Got The Juice', album_id: dirtycomputer.id)
igotthejuice_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/09+I+Got+the+Juice+(feat.+Pharrell+Williams).mp3')
igotthejuice.audio.attach(io: igotthejuice_audio, filename: 'igotthejuice-audio.mp3')
dontjudgeme = Song.create(name: 'Don\'t Judge Me', album_id: dirtycomputer.id)
dontjudgeme_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/12+Don\'t+Judge+Me.mp3')
dontjudgeme.audio.attach(io: dontjudgeme_audio, filename: 'dontjudgeme-audio.mp3')


# birdy = Artist.create(name: 'Birdy')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/birdy-artist.jpg')
# birdy.photo.attach(io: x, filename: 'birdy-artist.jpg')
#
# borns = Artist.create(name: 'BORNS')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns-artist.jpg')
# borns.photo.attach(io: x, filename: 'borns-artist.jpg')
#
# bishop = Artist.create(name: 'Bishop Briggs')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bishop-briggs-artist.jpg')
# bishop.photo.attach(io: x, filename: 'bishop-briggs-artist.jpg')
#
# coin = Artist.create(name: 'COIN')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/coin-artist.jpg')
# coin.photo.attach(io: x, filename: 'coin-artist.jpg')
#
# finefrenzy = Artist.create(name: 'A Fine Frenzy')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/fine-frenzy-artist.jpg')
# finefrenzy.photo.attach(io: x, filename: 'fine-frenzy-artist.jpg')
#
# hansomeghost = Artist.create(name: 'Handsome Ghost')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/handsome-ghost-artist.jpg')
# hansomeghost.photo.attach(io: x, filename: 'handsome-ghost-artist.jpg')
#
# headandtheheart = Artist.create(name: 'The Head and the Heart')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/head-and-the-heart-artist.jpg')
# headandtheheart.photo.attach(io: x, filename: 'head-and-the-heart-artist.jpg')
#
# jukeboxtheghost = Artist.create(name: 'Jukebox the Ghost')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jukebox-the-ghost-artist.jpg')
# jukeboxtheghost.photo.attach(io: x, filename: 'jukebox-the-ghost-artist.jpg')
#
# londongrammar = Artist.create(name: 'London Grammar')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/london-grammar-artist.jpg')
# londongrammar.photo.attach(io: x, filename: 'london-grammar-artist.jpg')
#
# smallpools = Artist.create(name: 'Smallpools')
# x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/smallpools-artist.jpg')
# smallpools.photo.attach(io: x, filename: 'smallpools-artist.jpg')
#
# ghost.followed_artists << smallpools
# ghost.followed_artists << hansomeghost
# ghost.followed_artists << coin
# ghost.followed_artists << ariana
#
# # Albums
#
#
#
#
#
# facedown = Album.create(title: 'Facedown', artist_id: the1975.id)
# howwillyouknow = Album.create(title: 'How Will You Know If You Never Try', artist_id: coin.id)
# fadedheart = Album.create(title: 'Faded Heart', artist_id: borns.id)
# brilliantglow = Album.create(title: 'The Brilliant Glow', artist_id: hansomeghost.id)
# dangerous = Album.create(title: 'Dangerous Woman', artist_id: ariana.id)
# badblood = Album.create(title: 'Bad Blood', artist_id: bastille.id)
# deluxe = Album.create(title: 'The 1975 (Deluxe)', artist_id: the1975.id)
# sincerity = Album.create(title: 'Sincerity is Scary', artist_id: the1975.id)
# musicforcars = Album.create(title: 'Music For Cars', artist_id: the1975.id)
#
# ghost.saved_albums << facedown
# ghost.saved_albums << sweetener
# ghost.saved_albums << badblood
#
# facedown_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/facedown-album.jpg')
# facedown.cover.attach(io: facedown_cover, filename: 'facedown-album.jpg')
#
# musicforcars_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/musicforcars-album.png')
# musicforcars.cover.attach(io: musicforcars_cover, filename: 'musicforcars-album.jpg')
#
#
# dangerous_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dangerouswoman-album.jpg')
# dangerous.cover.attach(io: dangerous_cover, filename: 'dangerouswoman-album.jpg')
#
# sincerity_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/sincerityisscary-album.jpg')
# sincerity.cover.attach(io: sincerity_cover, filename: 'sincerityisscary-album.jpg')
#
# badblood_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/badblood-cover.png')
# badblood.cover.attach(io: badblood_cover, filename: 'badblood-album.png')
#
# fadedheart_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/fadedheart-album.jpg')
# fadedheart.cover.attach(io: fadedheart_cover, filename: 'fadedheart-album.jpg')
#
# howwillyouknow_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/howwillyouknow.jpg')
# howwillyouknow.cover.attach(io: howwillyouknow_cover, filename: 'howwillyouknow.jpg')
#
# brilliantglow_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/brilliant-glow-album.png')
# brilliantglow.cover.attach(io: brilliantglow_cover, filename: 'brilliantglow-album.jpg')
#
#
#
# # Playlists
#
#
#
#
# # Songs
#
# ghost.saved_songs << Song.create(name: 'Facedown', album_id: facedown.id)
# ghost.saved_songs << Song.create(name: 'Antichrist', album_id: facedown.id)
# ghost.saved_songs << Song.create(name: 'The City', album_id: facedown.id)
# ghost.saved_songs << Song.create(name: 'Woman', album_id: facedown.id)
# a.songs << Song.create(name: 'Anobrain', album_id: musicforcars.id)
# a.songs << Song.create(name: 'Chocolate', album_id: musicforcars.id)
# ghost.saved_songs << Song.create(name: 'HNSCC', album_id: musicforcars.id)
# b.songs << Song.create(name: 'Me', album_id: musicforcars.id)
# a.songs << Song.create(name: 'M.O.N.E.Y', album_id: deluxe.id)
# ghost.saved_songs << Song.create(name: 'Talk!', album_id: deluxe.id)
# a.songs << Song.create(name: 'Heart Out', album_id: deluxe.id)
# a.songs << Song.create(name: 'Girls', album_id: deluxe.id)
# b.songs << Song.create(name: 'breathin', album_id: sweetener.id)
#
# godisawoman = Song.create(name: 'God is a woman', album_id: sweetener.id)
# godisawoman_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/godisawoman.mp3')
# godisawoman.audio.attach(io: godisawoman_audio, filename: 'godisawoman-audio.mp3')
# a.songs << godisawoman
#
# notears = Song.create(name: 'no tears left to cry', album_id: sweetener.id)
# notears_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/notearslefttocry.mp3')
# notears.audio.attach(io: notears_audio, filename: 'notearslefttocry-audio.mp3')
# a.songs << notears
#
# b.songs << Song.create(name: 'sweetener', album_id: sweetener.id)
# a.songs << Song.create(name: 'Moonlight', album_id: dangerous.id)
# a.songs << Song.create(name: 'Be Alright', album_id: dangerous.id)
# a.songs << Song.create(name: 'Into You', album_id: dangerous.id)
# a.songs << Song.create(name: 'Everyday', album_id: dangerous.id)
# Song.create(name: 'I Don\'t Care', album_id: dangerous.id)
# Song.create(name: 'Thinkin Bout You', album_id: dangerous.id)
