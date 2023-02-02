console.log('working');

var albums = [
    {
        title: 'This Is Why',
        year: '2023',
        image: 'img/album_paramore_this_is_why_front.jpg',
        genre: 'Dua Lipa',
        blurb: 'gfagfagagdf',
        starring: ['Pop', 'Rock'],
        rating: 'PG',
        reviews: [
            {
                postedBy: 'DrSquid',
                review: 'Can we give huge credit to York and Farro as well? This band has had their ups and downs but the last record showed these three have insane chemistry!!!'
            },
            {
                postedBy: 'GSamuel',
                review: 'UNo matter how they change their music style they will always rock and do great songs together'
            }
        ],
        trailerUrl: 'ttps://www.youtube.com/watch?v=xIYJ7VaSxYY'
    },
    {
        title: 'Pony',
        year: '12018',
        image: 'img/album_orville_peck_pony_front.jpg',
        genre: 'Orville Peck',
        blurb: 'xxxxxxxxxxxxxxxxxxxxxx',
        starring: ['Alternative', 'Counrty'],
        rating: 'R16',
        reviews: [
            {
                postedBy: 'Pluto-3',
                review: 'The beginning of one of the greatest series of all time. This film will always remain a classic. It is scary, influential and insanely entertaining. Not just that but Ridley Scott actually has a great sense of style and mood and he plays with that a lot, to make us shiver. There is also an interesting mystery surrounding the Alien which we know practically nothing about. Sigourney Weaver is just as powerful as usual and really brings strength to the film; they make one. Last but not least, the musical score. Wow! It is fantastic. I think the Alien series is known for that aspect as well. Lets hope they will continue the series and dang we need it all on DVD !'
            },
            {
                postedBy: 'BroadSwordDannyBoi2',
                review: 'This is one of the finest science fiction films ever made. Everything is so carefully and expertly constructed to the point that repeated viewings are just as good as the first. Also, the atmosphere, along with the amazing sets, is real shocker and few albums have managed to create the same kind eerie feeling.'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Expert in a dying field',
        year: '2022',
        image: 'img/album_the_beths_expert_in_a_dying_field_front.jpg',
        genre: 'The Beths',
        blurb: 'gfsdhfdshs',
        starring: ['Aotearoa', 'Pop'],
        rating: 'R',
        reviews: [
            {
                postedBy: 'Leofwine-draca',
                review: 'Originally conceived as THE SHINING in space, by the end I think EVENT HORIZON has become more like HELLRAISER in space, although of course one of the later HELLRAISER albums was just that. This is an intriguing and interesting sci-fi/horror album that initially feels like an ALIEN clone before becoming something else quite different.'
            },
            {
                postedBy: 'Agent10',
                review: 'This film was a lot better than what most people gave it credit for. The cinematography was excellent, and the lighting gave the film a very eerie feel to it. Certainly better than the average sci-fi film. Not only did the film mix two mediums almost perfectly (sci-fi and horror), it completed the union almost flawlessly. Not a perfect album, but then again, Sam Neill was amazing in this film. Virtually all of the technical aspects in the film were top-notch. While it did not advance the film industry overall, it did make an impact in the sci-fi genre.'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Welcome to Sin City',
        year: '2022',
        image: 'img/album_sin_city_welcome_to_sin_city_front.jpg',
        genre: 'Action',
        blurb: 'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick is not only competing to be the top fighter pilot, he is also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis).',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        rating: 'PG',
        reviews: [
            {
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInalbums',
                review: 'Ugh.... so cringe!'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
]

// Get all filter inputs
var genre = document.getElementById('genreSelect');
var rating = document.getElementById('ratingSelect');
var starring = document.getElementById('starringSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Event Listeners
genre.addEventListener('change', filterGenre);
rating.addEventListener('change', filterRating);
starring.addEventListener('change', starringFilter);
// Straight Compare Search - Click Event
search.addEventListener('click', searchAlbums);

// On KeyUp - Search - refreshes on every key entry
searchInput.addEventListener('keyup', function(event) {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    // console.log(event.target.value);
    var input = event.target.value;
    for (var i=0; i < albums.length; i++) {
        if ((albums[i].title.toLowerCase().includes(input.toLowerCase())) === true){
            console.log("success");
            var album = albums[i];
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
});


function filterGenre() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i=0; i < albums.length; i++) {
        var album = albums[i];
        if (genre.value === album.genre) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        } 
    }
}

function filterRating() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i=0; i < albums.length; i++) {
        var album = albums[i];
        if (rating.value === album.rating) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        } 
    }
}

function starringFilter() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = ''; 
    for (var i=0; i<albums.length; i++){
        for (var j=0; j<albums[i].starring.length; j++){
            var album = albums[i];
            var stars = albums[i].starring[j];
            if (starring.value === stars) {
                albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        ` 
            }
        }
    }
}

function getAllAblums() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i=0; i < albums.length; i++) {
        var album = albums[i];
        albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
    }
}

getAllAblums();

function searchAlbums() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    var searchValue = searchInput.value;
    for (var i=0; i<albums.length; i++) {
        var album = albums[i];
        if (searchValue.toLowerCase() == album.title.toLowerCase()){
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="${album.title} album Poster">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.rating}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        ` 
        }
    }
}

