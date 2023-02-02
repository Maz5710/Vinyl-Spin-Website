// Swiper Cube Logo Style
var swiper = new Swiper(".mySwiperCube", {
    effect: "cube",
    grabCursor: true,
    mousewheel: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});



// Album Card Filtering
console.log('working');

var albums = [{
        title: 'This Is Why',
        year: '2023',
        image: 'img/album_paramore_this_is_why_front.jpg',
        genre: ['Pop', 'Rock'],
        blurb: 'The follow-up to 2017’s ‘After Laughter’ will come out on February 10, 2023 via Atlantic, with the band returning to the stage this weekend (October 2) to begin a run of intimate North American gigs.',
        starring: ['Pop', 'Rock'],
        musician: 'Paramore',
        reviews: [{
                postedBy: 'DrSquid',
                review: 'Can we give huge credit to York and Farro as well? This band has had their ups and downs but the last record showed these three have insane chemistry!!!'
            },
            {
                postedBy: 'GSamuel',
                review: 'No matter how they change their music style they will always rock and do great songs together'
            }
        ],
        audioUrl: 'https://www.youtube.com/watch?v=xIYJ7VaSxYY'
    },
    {
        title: 'Pony',
        year: '2019',
        image: 'img/album_orville_peck_pony_front.jpg',
        genre: ['Alternative', 'Country'],
        blurb: 'Pony is the debut studio album by South African country musician Orville Peck, released on March 22, 2019 by Sub Pop. A country, alternative country, and cowboy pop album,',
        starring: ['Alternative', 'Country'],
        musician: 'Orville Peck',
        reviews: [{
                postedBy: 'Jheath56',
                review: 'Peck’s vocal range is the most impressive music moment of 2019, hands down. His whistling, crooning, and warbling is what makes Pony an unforgettable debut.'
            },
            {
                postedBy: 'PeterS',
                review: 'With sensuality and Orville Peck presents one of the best in country music of the past few years. A revelation that came with an incredible voice and compositions that need no comment'
            }
        ],
        audioUrl: 'https://www.youtube.com/watch?v=aaYSSQelQ1g'
    },
    {
        title: 'Expert in a dying field',
        year: '2022',
        image: 'img/album_the_beths_expert_in_a_dying_field_front.jpg',
        genre: ['Aotearoa', 'Pop'],
        blurb: 'Sin City will be raising a glass tonight to toast the launch of Nick Armstrong and Jack Beesleys debut album Welcome To Sin City.  Based in Tāmaki Makaurau, but conceived while the bar-crawling duo "found themselves quarantined in a sleazy flat in Alicante, Spain with only a guitar and piano," the long player was recorded over a period of three days with none other than Lyttelton icon Delaney Davidson in the producers hotseat, who also jumped in on a variety of instruments.',
        starring: ['Aotearoa', 'Pop'],
        musician: 'The Beths',
        reviews: [{
                postedBy: 'alwbsok',
                review: 'The Beth’s would have smashed the charts in the 90s, but now they’re a hidden gem. Beautiful melodies, rich harmonies, with tender, vulnerable, but never overwrought lyrics. Utterly gorgeous.'
            },
            {
                postedBy: 'ScottyMcG',
                review: 'The whole album feels simultaneously like it captures a classic "NZ Pop" sound and yet feels so new. It is on loop atm and my fav track is different every play.'
            }
        ],
        audioUrl: 'https://www.youtube.com/watch?v=sd3CqVVWJws'
    },
    {
        title: 'Welcome to Sin City',
        year: '2022',
        image: 'img/album_sin_city_welcome_to_sin_city_front.jpg',
        genre: ['Country', 'New Zealand', 'Rock'],
        blurb: 'Sin City will be raising a glass tonight to toast the launch of Nick Armstrong and Jack Beesleys debut album Welcome To Sin City.  Based in Tāmaki Makaurau, but conceived while the bar-crawling duo "found themselves quarantined in a sleazy flat in Alicante, Spain with only a guitar and piano," the long player was recorded over a period of three days with none other than Lyttelton icon Delaney Davidson in the producers hotseat, who also jumped in on a variety of instruments.',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        musician: 'Sin City',
        reviews: [{
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInalbums',
                review: 'Ugh.... so cringe!'
            }
        ],
        audioUrl: 'https://www.undertheradar.co.nz/news/19545/Listen-To-Sin-Citys-Debut-Album-Welcome-To-Sin-City.utr'
    },
]

// Get all filter inputs
var genre = document.getElementById('genreSelect');
var musician = document.getElementById('musicianSelect');
var starring = document.getElementById('starringSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Event Listeners
genre.addEventListener('change', filterGenre);
musician.addEventListener('change', filterMusician);
starring.addEventListener('change', starringFilter);

// Straight Compare Search - Click Event
search.addEventListener('click', searchAlbums);

// On KeyUp - Search - refreshes on every key entry
searchInput.addEventListener('keyup', function (event) {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    // console.log(event.target.value);
    var input = event.target.value;
    for (var i = 0; i < albums.length; i++) {
        if ((albums[i].title.toLowerCase().includes(input.toLowerCase())) === true) {
            console.log("success");
            var album = albums[i];
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                      <h4 class="card-title">${album.title}</h4>
                      <h6 class="card-text">${album.year}</h6>
                      <h5 class="card-text">${album.musician}</h5>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
});


function filterGenre() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        if (genre.value === album.genre) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.musician}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

function filterMusician() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        if (musician.value === album.musician) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.musician}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

function starringFilter() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        for (var j = 0; j < albums[i].starring.length; j++) {
            var album = albums[i];
            var stars = albums[i].starring[j];
            if (starring.value === stars) {
                albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.musician}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
            }
        }
    }
    populateModals();
}

function getAllAblums() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.musician}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
    }
    populateModals();
}

getAllAblums();

function searchAlbums() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    var searchValue = searchInput.value;
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        if (searchValue.toLowerCase() == album.title.toLowerCase()) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="${album.title} Album Cover">
                    <div class="card-body">
                      <h5 class="card-title">${album.title}</h5>
                      <h6 class="card-text">${album.year}</h6>
                      <p class="card-text">${album.musician}</p>
                      <a href="#" class="btn readmore" value="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

// Style Modals
function populateModals() {
    var readMoreButtons = document.querySelectorAll(".readmore");
    Array.from(readMoreButtons).forEach(function (btn) {
        btn.addEventListener('click', function () {
            var albumModal = document.getElementById('modalResult');
            albumModal.innerHTML = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${albums[this.id].title} - ${albums[this.id].year}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${albums[this.id].image}" class="card-img-top" alt="Albim Cover">
            <p class="card-text">${albums[this.id].musician}</p>
            <p class="card-text">${albums[this.id].blurb}</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        `
        })
    })
}