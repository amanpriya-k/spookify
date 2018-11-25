# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy everything in db

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

ghost = User.create(username: 'ghostuser', email: 'ghost@gmail.com', password: '123456')
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

b = Playlist.create(name: 'rainy day', user_id: ghost.id)

c = Playlist.create(name: 'Fall Music', user_id: ghost.id)

d = Playlist.create(name: 'harrys favs', user_id: user2.id)

e = Playlist.create(name: 'best of ariana', user_id: user2.id)

f = Playlist.create(name: 'random stuff', user_id: ghost.id)

ghost.followed_playlists << a
ghost.followed_playlists << c
ghost.followed_playlists << f

# The 1975

the1975 = Artist.create(name: 'The 1975')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/1975.jpg')
the1975.photo.attach(io: x, filename: '1975-artist.jpg')

ghost.followed_artists << the1975

deluxe = Album.create(title: 'The 1975 (Deluxe)', artist_id: the1975.id)
deluxe_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/Layer+14.jpg')
deluxe.cover.attach(io: deluxe_cover, filename: '1975deluxe-album.jpg')

the1975song = Song.create(name: 'The 1975', album_id: deluxe.id)
the1975_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/01+The+1975.mp3')
the1975song.audio.attach(io: the1975_audio, filename: 'the1975-audio.mp3')


thecity = Song.create(name: 'The City', album_id: deluxe.id)
thecity_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/02+The+City.mp3')
thecity.audio.attach(io: thecity_audio, filename: 'thecity-audio.mp3')
money = Song.create(name: 'M.O.N.E.Y', album_id: deluxe.id)
money_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/03+M.O.N.E.Y.mp3')
money.audio.attach(io: money_audio, filename: 'money-audio.mp3')
chocolate = Song.create(name: 'Chocolate', album_id: deluxe.id)
chocolate_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/04+Chocolate.mp3')
chocolate.audio.attach(io: chocolate_audio, filename: 'chocolate-audio.mp3')
ghost.saved_songs << chocolate
talk = Song.create(name: 'Talk', album_id: deluxe.id)
talk_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/06+Talk!.mp3')
talk.audio.attach(io: talk_audio, filename: 'talk-audio.mp3')
encounter = Song.create(name: 'An Encounter', album_id: deluxe.id)
encounter_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/07+An+Encounter.mp3')
encounter.audio.attach(io: encounter_audio, filename: 'encounter-audio.mp3')
heartout = Song.create(name: 'Heart Out', album_id: deluxe.id)
heartout_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/08+Heart+Out.mp3')
heartout.audio.attach(io: heartout_audio, filename: 'heartout-audio.mp3')
ghost.saved_songs << heartout
robber = Song.create(name: 'Robber', album_id: deluxe.id)
robber_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/10+Robbers.mp3')
robber.audio.attach(io: robber_audio, filename: 'robber-audio.mp3')
girls = Song.create(name: 'Girls', album_id: deluxe.id)
girls_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/the1975/11+Girls.mp3')
girls.audio.attach(io: girls_audio, filename: 'girls-audio.mp3')
ghost.saved_songs << girls

a.songs << the1975song
a.songs << thecity
a.songs << heartout

# Ariana Grande

ariana = Artist.create(name: 'Ariana Grande')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/Ariana+Grande.jpg')
ariana.photo.attach(io: x, filename: 'ariana-grande-artist.jpg')

ghost.followed_artists << ariana

sweetener = Album.create(title: 'sweetener', artist_id: ariana.id)
sweetener_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/Layer+2.jpg')
sweetener.cover.attach(io: sweetener_cover, filename: 'sweetener-album.jpg')

godisawoman = Song.create(name: 'God is a woman', album_id: sweetener.id)
godisawoman_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/05.+God+is+a+woman.mp3')
godisawoman.audio.attach(io: godisawoman_audio, filename: 'godisawoman-audio.mp3')
ghost.saved_songs << godisawoman

raindrops = Song.create(name: 'raindrops', album_id: sweetener.id)
raindrops_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/01.+raindrops+(an+angel+cried).mp3')
raindrops.audio.attach(io: raindrops_audio, filename: 'raindrops-audio.mp3')

lightiscoming = Song.create(name: 'The Light Is Coming', album_id: sweetener.id)
lightiscoming_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/03.+the+light+is+coming+(feat.+Nicki+Minaj).mp3')
lightiscoming.audio.attach(io: lightiscoming_audio, filename: 'lightiscoming-audio.mp3')

borderline = Song.create(name: 'borderline', album_id: sweetener.id)
borderline_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/11.+borderline+(feat.+Missy+Elliott).mp3')
borderline.audio.attach(io: borderline_audio, filename: 'borderline-audio.mp3')

petedavidson = Song.create(name: 'pete davidson', album_id: sweetener.id)
petedavidson_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/14.+pete+davidson.mp3')
petedavidson.audio.attach(io: petedavidson_audio, filename: 'petedavidson-audio.mp3')

sweetener_song = Song.create(name: 'sweetener', album_id: sweetener.id)
sweetener_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/06.+sweetener.mp3')
sweetener_song.audio.attach(io: sweetener_audio, filename: 'sweetener-audio.mp3')

successful = Song.create(name: 'successful', album_id: sweetener.id)
successful_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/07.+successful.mp3')
successful.audio.attach(io: successful_audio, filename: 'successful-audio.mp3')

everytime = Song.create(name: 'everytime', album_id: sweetener.id)
everytime_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/08.+everytime.mp3')
everytime.audio.attach(io: everytime_audio, filename: 'everytime-audio.mp3')

breathin = Song.create(name: 'breathin', album_id: sweetener.id)
breathin_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/09.+breathin.mp3')
breathin.audio.attach(io: breathin_audio, filename: 'breathin-audio.mp3')

notearsleft = Song.create(name: 'no tears left to cry', album_id: sweetener.id)
notearsleft_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/ariana/10.+no+tears+left+to+cry.mp3')
notearsleft.audio.attach(io: notearsleft_audio, filename: 'notearsleft-audio.mp3')

a.songs << notearsleft
b.songs << breathin

# Jon Bellion


jonbellion = Artist.create(name: 'Jon Bellion')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/Jon+Bellion.jpg')
jonbellion.photo.attach(io: x, filename: 'jonbellion-artist.jpg')

humancondition = Album.create(title: 'The Human Condition', artist_id: jonbellion.id)
humancondition_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/Layer+13.jpg')
humancondition.cover.attach(io: humancondition_cover, filename: 'humancondition-album.jpg')

ghost.saved_albums << humancondition

heisthesame = Song.create(name: 'He Is The Same', album_id: humancondition.id)
heisthesame_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/01-jon_bellion-he_is_the_same.mp3')
heisthesame.audio.attach(io: heisthesame_audio, filename: 'heisthesame-audio.mp3')
eightiesfilms = Song.create(name: '80\'s films', album_id: humancondition.id)
eightiesfilms_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/02-jon_bellion-80s_films.mp3')
eightiesfilms.audio.attach(io: eightiesfilms_audio, filename: 'eightiesfilms-audio.mp3')
alltimelow = Song.create(name: 'All Time Low', album_id: humancondition.id)
alltimelow_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/03-jon_bellion-all_time_low.mp3')
alltimelow.audio.attach(io: alltimelow_audio, filename: 'alltimelow-audio.mp3')
newyorksoul = Song.create(name: 'New York Soul (pt. II)', album_id: humancondition.id)
newyorksoul_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/04-jon_bellion-new_york_soul_(pt_ii).mp3')
newyorksoul.audio.attach(io: newyorksoul_audio, filename: 'newyorksoul-audio.mp3')
ghost.saved_songs << newyorksoul
fashion = Song.create(name: 'Fashion', album_id: humancondition.id)
fashion_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/05-jon_bellion-fashion.mp3')
fashion.audio.attach(io: fashion_audio, filename: 'fashion-audio.mp3')
maybeidk = Song.create(name: 'Maybe IDK', album_id: humancondition.id)
maybeidk_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/06-jon_bellion-maybe_idk.mp3')
maybeidk.audio.attach(io: maybeidk_audio, filename: 'maybeidk-audio.mp3')
guillotine = Song.create(name: 'Guillotine (ft. Travis Scott)', album_id: humancondition.id)
guillotine_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/13-jon_bellion-guillotine_(feat_travis_mendes).mp3')
guillotine.audio.attach(io: guillotine_audio, filename: 'guillotine-audio.mp3')
ghost.saved_songs << guillotine
handofgod = Song.create(name: 'Hand of God)', album_id: humancondition.id)
handofgod_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/14-jon_bellion-hand_of_god_(outro).mp3')
handofgod.audio.attach(io: handofgod_audio, filename: 'handofgod-audio.mp3')
irobot = Song.create(name: 'iRobot', album_id: humancondition.id)
irobot_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/12-jon_bellion-irobot.mp3')
irobot.audio.attach(io: irobot_audio, filename: 'irobot-audio.mp3')
morninginamerica = Song.create(name: 'Morning In America', album_id: humancondition.id)
morninginamerica_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/jonbellion/11-jon_bellion-morning_in_america.mp3')
morninginamerica.audio.attach(io: morninginamerica_audio, filename: 'morninginamerica-audio.mp3')

a.songs << newyorksoul
b.songs << handofgod
c.songs << morninginamerica

# Hozier

hozier = Artist.create(name: 'Hozier')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/Hozier.jpg')
hozier.photo.attach(io: x, filename: 'hozier-artist.jpg')

hozieralbum = Album.create(title: 'Hozier', artist_id: hozier.id)
hozieralbum_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/220px-Hozier_album.jpg')
hozieralbum.cover.attach(io: hozieralbum_cover, filename: 'hozieralbum-album.jpg')

ghost.saved_albums << hozieralbum

tobealone = Song.create(name: 'To Be Alone', album_id: hozieralbum.id)
tobealone_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-05+To+Be+Alone.mp3')
tobealone.audio.attach(io: tobealone_audio, filename: 'tobealone-audio.mp3')
likerealpeople = Song.create(name: 'Like Real People Do', album_id: hozieralbum.id)
likerealpeople_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-10+Like+Real+People+Do.mp3')
likerealpeople.audio.attach(io: likerealpeople_audio, filename: 'likerealpeople-audio.mp3')
ghost.saved_songs << likerealpeople
cherrywine = Song.create(name: 'Cherry Wine', album_id: hozieralbum.id)
cherrywine_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-13+Cherry+Wine+(Live).mp3')
cherrywine.audio.attach(io: cherrywine_audio, filename: 'cherrywine-audio.mp3')
inthewoods = Song.create(name: 'In The Woods Somewhere', album_id: hozieralbum.id)
inthewoods_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/2-01+In+the+Woods+Somewhere.mp3')
inthewoods.audio.attach(io: inthewoods_audio, filename: 'inthewoods-audio.mp3')
takem = Song.create(name: 'Take Me To Church', album_id: hozieralbum.id)
takem_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-01+Take+Me+To+Church.mp3')
takem.audio.attach(io: takem_audio, filename: 'takem-audio.mp3')
angel = Song.create(name: 'Angel Of Small Death', album_id: hozieralbum.id)
angel_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-02+Angel+of+Small+Death+%26+the+Codeine+Scene.mp3')
angel.audio.attach(io: angel_audio, filename: 'angel-audio.mp3')
fromede = Song.create(name: 'From Eden', album_id: hozieralbum.id)
fromede_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-06+From+Eden.mp3')
fromede.audio.attach(io: fromede_audio, filename: 'fromede-audio.mp3')
worksong = Song.create(name: 'Work Song', album_id: hozieralbum.id)
worksong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-09+Work+Song.mp3')
worksong.audio.attach(io: worksong_audio, filename: 'worksong-audio.mp3')
jackie = Song.create(name: 'Jackie and Wilson', album_id: hozieralbum.id)
jackie_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hozier/1-03+Jackie+and+Wilson.mp3')
jackie.audio.attach(io: jackie_audio, filename: 'jackie-audio.mp3')


# Bastille

bastille = Artist.create(name: 'Bastille')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/Bastille.jpg')
bastille.photo.attach(io: x, filename: 'bastille-artist.jpg')

wildworld = Album.create(title: 'Wild World', artist_id: bastille.id)
wildworld_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/Layer+3.jpg')
wildworld.cover.attach(io: wildworld_cover, filename: 'wildworld-album.jpg')

goodgrief = Song.create(name: 'Good Grief', album_id: wildworld.id)
goodgrief_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/01.+Good+Grief.mp3')
goodgrief.audio.attach(io: goodgrief_audio, filename: 'goodgrief-audio.mp3')
thecurrents = Song.create(name: 'The Currents', album_id: wildworld.id)
thecurrents_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/02.+The+Currents.mp3')
thecurrents.audio.attach(io: thecurrents_audio, filename: 'thecurrents-audio.mp3')
lethargy = Song.create(name: 'Lethargy', album_id: wildworld.id)
lethargy_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/09.+Lethargy.mp3')
lethargy.audio.attach(io: lethargy_audio, filename: 'lethargy-audio.mp3')
blame = Song.create(name: 'Blame', album_id: wildworld.id)
blame_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/11.+Blame.mp3')
blame.audio.attach(io: blame_audio, filename: 'blame-audio.mp3')
winter = Song.create(name: 'Winter Of Youth', album_id: wildworld.id)
winter_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/bastille/14.+Winter+Of+Our+Youth.mp3')
winter.audio.attach(io: winter_audio, filename: 'winter-audio.mp3')

c.songs << winter

# HAIM

haim = Artist.create(name: 'HAIM')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/Haim.jpg')
haim.photo.attach(io: x, filename: 'haim-artist.jpg')

somethingtotellyou = Album.create(title: 'Something To Tell You', artist_id: haim.id)
somethingtotellyou_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/Layer+8.jpg')
somethingtotellyou.cover.attach(io: somethingtotellyou_cover, filename: 'somethingtotellyou-album.jpg')

ghost.saved_albums << somethingtotellyou

youneverknew = Song.create(name: 'You Never Knew', album_id: somethingtotellyou.id)
youneverknew_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/06+-+You+Never+Knew.mp3')
youneverknew.audio.attach(io: youneverknew_audio, filename: 'youneverknew-audio.mp3')
wantyouback = Song.create(name: 'Want You Back', album_id: somethingtotellyou.id)
wantyouback_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/01+-+Want+You+Back.mp3')
wantyouback.audio.attach(io: wantyouback_audio, filename: 'wantyouback-audio.mp3')
little = Song.create(name: 'Little of your Love', album_id: somethingtotellyou.id)
little_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/03+-+Little+Of+Your+Love.mp3')
little.audio.attach(io: little_audio, filename: 'little-audio.mp3')
nightsolong = Song.create(name: 'Night So Long', album_id: somethingtotellyou.id)
nightsolong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/11+-+Night+So+Long.mp3')
nightsolong.audio.attach(io: nightsolong_audio, filename: 'nightsolong-audio.mp3')
keptme = Song.create(name: 'Kept Me Crying', album_id: somethingtotellyou.id)
keptme_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/07+-+Kept+Me+Crying.mp3')
keptme.audio.attach(io: keptme_audio, filename: 'keptme-audio.mp3')

daysaregone = Album.create(title: 'Days Are Gone', artist_id: haim.id)
daysaregone_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/Layer+7.jpg')
daysaregone.cover.attach(io: daysaregone_cover, filename: 'daysaregone-album.jpg')

falling = Song.create(name: 'Falling', album_id: daysaregone.id)
falling_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/01+-+Haim+-+Falling.mp3')
falling.audio.attach(io: falling_audio, filename: 'falling-audio.mp3')
forever = Song.create(name: 'Forever', album_id: daysaregone.id)
forever_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/02+-+Haim+-+Forever.mp3')
forever.audio.attach(io: forever_audio, filename: 'forever-audio.mp3')
thewire = Song.create(name: 'The Wire', album_id: daysaregone.id)
thewire_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/03+-+Haim+-+The+Wire.mp3')
thewire.audio.attach(io: thewire_audio, filename: 'thewire-audio.mp3')
dontsaveme = Song.create(name: 'Don\'t Save Me', album_id: daysaregone.id)
dontsaveme_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/10+-+Haim+-+Let+Me+Go.mp3')
dontsaveme.audio.attach(io: dontsaveme_audio, filename: 'dontsaveme-audio.mp3')
mysong = Song.create(name: 'My Song', album_id: daysaregone.id)
mysong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/08+-+Haim+-+My+Song+5.mp3')
mysong.audio.attach(io: mysong_audio, filename: 'mysong-audio.mp3')
goslow = Song.create(name: 'Go Slow', album_id: daysaregone.id)
goslow_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/haim/09+-+Haim+-+Go+Slow.mp3')
goslow.audio.attach(io: goslow_audio, filename: 'goslow-audio.mp3')


# Hippo Campus

hippocampus = Artist.create(name: 'Hippo Campus')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/Hippo+Campus.jpg')
hippocampus.photo.attach(io: x, filename: 'hippocampus-artist.jpg')

ghost.followed_artists << hippocampus

landmark = Album.create(title: 'Landmark', artist_id: hippocampus.id)
landmark_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/Layer+9.jpg')
landmark.cover.attach(io: landmark_cover, filename: 'landmark-album.jpg')

sunveins = Song.create(name: 'Sun Veins', album_id: landmark.id)
sunveins_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/01+Sun+Veins.mp3')
sunveins.audio.attach(io: sunveins_audio, filename: 'sunveins-audio.mp3')
vines = Song.create(name: 'Vines', album_id: landmark.id)
vines_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/03+Vines.mp3')
vines.audio.attach(io: vines_audio, filename: 'vines-audio.mp3')
epitaph = Song.create(name: 'Epitaph', album_id: landmark.id)
epitaph_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/04+Epitaph.mp3')
epitaph.audio.attach(io: epitaph_audio, filename: 'epitaph-audio.mp3')
simpleseason = Song.create(name: 'Simple Season', album_id: landmark.id)
simpleseason_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/05+Simple+Season.mp3')
simpleseason.audio.attach(io: simpleseason_audio, filename: 'simpleseason-audio.mp3')
buttercup = Song.create(name: 'Buttercup', album_id: landmark.id)
buttercup_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/13+Buttercup.mp3')
buttercup.audio.attach(io: buttercup_audio, filename: 'buttercup-audio.mp3')
wayitgoes = Song.create(name: 'Way It Goes', album_id: landmark.id)
wayitgoes_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/02+Way+It+Goes.mp3')
wayitgoes.audio.attach(io: wayitgoes_audio, filename: 'wayitgoes-audio.mp3')
monsoon = Song.create(name: 'Monsoon', album_id: landmark.id)
monsoon_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/09+Monsoon.mp3')
monsoon.audio.attach(io: monsoon_audio, filename: 'monsoon-audio.mp3')
tuesday = Song.create(name: 'Tuesday', album_id: landmark.id)
tuesday_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/hippocampus/06+Tuesday.mp3')
tuesday.audio.attach(io: tuesday_audio, filename: 'tuesday-audio.mp3')

# Janelle Monae

janelle = Artist.create(name: 'Janelle Monae')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/Janella+Monae.jpg')
janelle.photo.attach(io: x, filename: 'janelle-artist.jpg')

dirtycomputer = Album.create(title: 'Dirty Computer', artist_id: janelle.id)
dirtycomputer_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/Layer+11.jpg')
dirtycomputer.cover.attach(io: dirtycomputer_cover, filename: 'dirtycomputer-album.jpg')

ghost.saved_albums << dirtycomputer

# janesdream = Song.create(name: 'Janes Dream', album_id: dirtycomputer.id)
# janesdream_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/04+Jane\'s+Dream.mp3')
# janesdream.audio.attach(io: janesdream_audio, filename: 'janesdream-audio.mp3')
dirtycomputersong = Song.create(name: 'Dirty Computer', album_id: dirtycomputer.id)
dirtycomputersong_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/01+Dirty+Computer+(feat.+Brian+Wilson).mp3')
dirtycomputersong.audio.attach(io: dirtycomputersong_audio, filename: 'dirtycomputersong-audio.mp3')
crazyclassiclife = Song.create(name: 'Crazy Classic Life', album_id: dirtycomputer.id)
crazyclassiclife_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/02+Crazy%2C+Classic%2C+Life.mp3')
crazyclassiclife.audio.attach(io: crazyclassiclife_audio, filename: 'crazyclassiclife-audio.mp3')
takeabyte = Song.create(name: 'Take A Byte', album_id: dirtycomputer.id)
takeabyte_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/03+Take+a+Byte.mp3')
takeabyte.audio.attach(io: takeabyte_audio, filename: 'takeabyte-audio.mp3')
igotthejuice = Song.create(name: 'I Got The Juice', album_id: dirtycomputer.id)
igotthejuice_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/09+I+Got+the+Juice+(feat.+Pharrell+Williams).mp3')
igotthejuice.audio.attach(io: igotthejuice_audio, filename: 'igotthejuice-audio.mp3')
dontjudgeme = Song.create(name: 'Don\'t Judge Me', album_id: dirtycomputer.id)
dontjudgeme_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janelle-monae/12+Don\'t+Judge+Me.mp3')
dontjudgeme.audio.attach(io: dontjudgeme_audio, filename: 'dontjudgeme-audio.mp3')
screwed = Song.create(name: 'Screwed', album_id: dirtycomputer.id)
screwed_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/05+Screwed+(feat.+Zoe%CC%88+Kravitz).mp3')
screwed.audio.attach(io: screwed_audio, filename: 'screwed-audio.mp3')

electriclady = Album.create(title: 'The Electric Lady', artist_id: janelle.id)
electriclady_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/Layer+12.jpg')
electriclady.cover.attach(io: electriclady_cover, filename: 'electriclady-album.jpg')

suite5 = Song.create(name: 'Suite IV', album_id: electriclady.id)
suite5_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/01+-+Janelle+Monae+-+Suite+IV+Electric+Overture.mp3')
suite5.audio.attach(io: suite5_audio, filename: 'suite5-audio.mp3')
givinemwhat = Song.create(name: 'Givin Em What They Love', album_id: electriclady.id)
givinemwhat_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/02+-+Janelle+Monae+-+Givin+Em+What+They+Love+(Feat.+Prince).mp3')
givinemwhat.audio.attach(io: givinemwhat_audio, filename: 'givinemwhat-audio.mp3')
queen = Song.create(name: 'Q.U.E.E.N', album_id: electriclady.id)
queen_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/03+-+Janelle+Monae+-+Q.U.E.E.N.+(Feat.+Erykah+Badu).mp3')
queen.audio.attach(io: queen_audio, filename: 'queen-audio.mp3')
goodmornig = Song.create(name: 'Good Morning Midnight', album_id: electriclady.id)
goodmornig_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/05+-+Janelle+Monae+-+Good+Morning+Midnight+(Interlude).mp3')
goodmornig.audio.attach(io: goodmornig_audio, filename: 'goodmornig-audio.mp3')
primetime = Song.create(name: 'Primetime', album_id: electriclady.id)
primetime_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/06+-+Janelle+Monae+-+Primetime+(Feat.+Miguel).mp3')
primetime.audio.attach(io: primetime_audio, filename: 'primetime-audio.mp3')
itscode = Song.create(name: 'It\'s Code', album_id: electriclady.id)
itscode_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/janellemonae/06+-+Janelle+Monae+-+Primetime+(Feat.+Miguel).mp3')
itscode.audio.attach(io: itscode_audio, filename: 'itscode-audio.mp3')


# BORNS

borns = Artist.create(name: 'BORNS')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/Borns.jpg')
borns.photo.attach(io: x, filename: 'borns-artist.jpg')

dopamine = Album.create(title: 'Dopamine', artist_id: borns.id)
dopamine_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/Layer+5.jpg')
dopamine.cover.attach(io: dopamine_cover, filename: 'dopamine-album.jpg')

emeralpools = Song.create(name: '10,000 Emerald Pools', album_id: dopamine.id)
emeralpools_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/01.+10%2C000+Emerald+Pools.mp3')
emeralpools.audio.attach(io: emeralpools_audio, filename: 'emeralpools-audio.mp3')
dugmyheart = Song.create(name: 'Dug My Heart', album_id: dopamine.id)
dugmyheart_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/02.+Dug+My+Heart.mp3')
dugmyheart.audio.attach(io: dugmyheart_audio, filename: 'dugmyheart-audio.mp3')
electriclove = Song.create(name: 'Electric Love', album_id: dopamine.id)
electriclove_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/03.+Electric+Love.mp3')
electriclove.audio.attach(io: electriclove_audio, filename: 'electriclove-audio.mp3')
americanmoeny = Song.create(name: 'American Money', album_id: dopamine.id)
americanmoeny_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/04.+American+Money.mp3')
americanmoeny.audio.attach(io: americanmoeny_audio, filename: 'americanmoeny-audio.mp3')
ghost.saved_songs << americanmoeny
ghost.saved_songs << emeralpools
ghost.saved_songs << electriclove
holyghost = Song.create(name: 'Holy Ghost', album_id: dopamine.id)
holyghost_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/06.+Holy+Ghost.mp3')
holyghost.audio.attach(io: holyghost_audio, filename: 'holyghost-audio.mp3')
clouds = Song.create(name: 'Clouds', album_id: dopamine.id)
clouds_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/08.+Clouds.mp3')
clouds.audio.attach(io: clouds_audio, filename: 'clouds-audio.mp3')

fadedheart = Album.create(title: 'Faded Heart', artist_id: borns.id)
fadedheart_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/Layer+4.jpg')
fadedheart.cover.attach(io: fadedheart_cover, filename: 'fadedheart-album.jpg')

godsave = Song.create(name: 'God Save Our Young Blood', album_id: fadedheart.id)
godsave_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/1+God+Save+Our+Young+Blood.mp3')
godsave.audio.attach(io: godsave_audio, filename: 'godsave-audio.mp3')
supernatural = Song.create(name: 'Supernatural', album_id: fadedheart.id)
supernatural_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/10+Supernatural.mp3')
supernatural.audio.attach(io: supernatural_audio, filename: 'supernatural-audio.mp3')
bluemadonna = Song.create(name: 'Blue Madonna', album_id: fadedheart.id)
bluemadonna_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/11+Blue+Madonna.mp3')
bluemadonna.audio.attach(io: bluemadonna_audio, filename: 'bluemadonna-audio.mp3')
byebye = Song.create(name: 'Bye Bye Darling', album_id: fadedheart.id)
byebye_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/12+Bye-bye+Darling.mp3')
byebye.audio.attach(io: byebye_audio, filename: 'byebye-audio.mp3')
sweetdreams = Song.create(name: 'Sweet Dreams', album_id: fadedheart.id)
sweetdreams_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/3+Sweet+Dreams.mp3')
sweetdreams.audio.attach(io: sweetdreams_audio, filename: 'sweetdreams-audio.mp3')
secondnight = Song.create(name: 'Second Night Of Summer', album_id: fadedheart.id)
secondnight_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/7+Second+Night+Of+Summer.mp3')
secondnight.audio.attach(io: secondnight_audio, filename: 'secondnight-audio.mp3')
idontwant = Song.create(name: 'I Dont Want U Back', album_id: fadedheart.id)
idontwant_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/borns/8+I+Don\'t+Want+U+Back.mp3')
idontwant.audio.attach(io: idontwant_audio, filename: 'idontwant-audio.mp3')
ghost.saved_songs << godsave
ghost.saved_songs << sweetdreams

# Dua Lipa

dualipa = Artist.create(name: 'Dua Lipa')
x = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/Dua+Lipa.jpg')
dualipa.photo.attach(io: x, filename: 'dualipa-artist.jpg')

duaalbum = Album.create(title: 'Dua Lipa (Deluxe)', artist_id: dualipa.id)
duaalbum_cover = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/Layer+6.jpg')
duaalbum.cover.attach(io: duaalbum_cover, filename: 'duaalbum-album.jpg')

genesis = Song.create(name: 'Genesis', album_id: duaalbum.id)
genesis_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/01+-+Genesis.mp3')
genesis.audio.attach(io: genesis_audio, filename: 'genesis-audio.mp3')
hotterthan = Song.create(name: 'Hotter Than Hell', album_id: duaalbum.id)
hotterthan_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/03+-+Hotter+Than+Hell.mp3')
hotterthan.audio.attach(io: hotterthan_audio, filename: 'hotterthan-audio.mp3')
ghost.saved_songs << hotterthan
betheone = Song.create(name: 'Be The One', album_id: duaalbum.id)
betheone_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/04+-+Be+The+One.mp3')
betheone.audio.attach(io: betheone_audio, filename: 'betheone-audio.mp3')
idgaf = Song.create(name: 'IDGAF', album_id: duaalbum.id)
idgaf_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/05+-+IDGAF.mp3')
idgaf.audio.attach(io: idgaf_audio, filename: 'idgaf-audio.mp3')
blowyourmind = Song.create(name: 'Blow Your Mind', album_id: duaalbum.id)
blowyourmind_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/06+-+Blow+Your+Mind+(Mwah).mp3')
blowyourmind.audio.attach(io: blowyourmind_audio, filename: 'blowyourmind-audio.mp3')
badtogether = Song.create(name: 'Bad Together', album_id: duaalbum.id)
badtogether_audio = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/dualipa/16+-+Bad+Together.mp3')
badtogether.audio.attach(io: badtogether_audio, filename: 'badtogether-audio.mp3')
