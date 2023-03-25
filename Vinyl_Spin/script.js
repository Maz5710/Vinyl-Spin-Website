// Swiper Slide Carousel JS
var swiper = new Swiper(".mySwiperCoverflow", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 3,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Album Card Filtering
console.log('working');

var albums = [{
        title: 'This Is Why',
        year: '2023',
        image: 'img/album_paramore_this_is_why_front.jpg',
        musician: 'Paramore',
        genre: 'Rock',
        blurb: 'The follow-up to 2017’s ‘After Laughter’ will come out on February 10, 2023 via Atlantic, with the band returning to the stage this weekend (October 2) to begin a run of intimate North American gigs.',
        price: '$44.95',
        reviews: 'No matter how they change their music style they will always rock and do great songs together',
        audioUrl: 'https://www.youtube.com/watch?v=xIYJ7VaSxYY'
    },
    {
        title: 'Pony',
        year: '2019',
        image: 'img/album_orville_peck_pony_front.jpg',
        musician: 'Orville Peck',
        genre: 'Country',
        blurb: 'Pony is the debut studio album by South African country musician Orville Peck, released on March 22, 2019 by Sub Pop. A country, alternative country, and cowboy pop album,',
        price: '$34.95',
        reviews: 'With sensuality and Orville Peck presents one of the best in country music of the past few years. A revelation that came with an incredible voice and compositions that need no comment',
        audioUrl: 'https://www.youtube.com/watch?v=aaYSSQelQ1g'
    },
    {
        title: 'Expert in a dying field',
        year: '2022',
        image: 'img/album_the_beths_expert_in_a_dying_field_front.jpg',
        musician: 'The Beths',
        genre: 'New Zealand',
        blurb: 'Sin City will be raising a glass tonight to toast the launch of Nick Armstrong and Jack Beesleys debut album Welcome To Sin City.  Based in Tāmaki Makaurau, but conceived while the bar-crawling duo "found themselves quarantined in a sleazy flat in Alicante, Spain with only a guitar and piano," the long player was recorded over a period of three days with none other than Lyttelton icon Delaney Davidson in the producers hotseat, who also jumped in on a variety of instruments.',
        price: '$44.95',
        reviews: 'The whole album feels simultaneously like it captures a classic "NZ Pop" sound and yet feels so new. It is on loop atm and my fav track is different every play.',
        audioUrl: 'https://www.youtube.com/watch?v=sd3CqVVWJws'
    },
    {
        title: 'The overflow',
        year: '2021',
        image: 'img/album_french_for_rabbits_the_overflow_front.jpg',
        musician: 'French for Rabbits',
        genre: 'New Zealand',
        blurb: 'French for Rabbits have dedicated nearly a decade to creating warmly detailed and expansive music together. They emerged from a vibrant local folk scene alongside Marlon Williams, Aldous Harding and Tiny Ruins.',
        price: '$39.95',
        reviews: 'Every song here is beautifully written and immaculately constructed… the album is faultless',
        audioUrl: 'https://www.youtube.com/watch?v=RfnyR-f74FI'
    },
    {
        title: 'Welcome to Sin City',
        year: '2022',
        image: 'img/album_sin_city_welcome_to_sin_city_front.jpg',
        musician: 'Sin City',
        genre: 'Country',
        blurb: 'Sin City will be raising a glass tonight to toast the launch of Nick Armstrong and Jack Beesleys debut album Welcome To Sin City.  Based in Tāmaki Makaurau, but conceived while the bar-crawling duo "found themselves quarantined in a sleazy flat in Alicante, Spain with only a guitar and piano," the long player was recorded over a period of three days with none other than Lyttelton icon Delaney Davidson in the producers hotseat, who also jumped in on a variety of instruments.',
        price: '$42.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.undertheradar.co.nz/news/19545/Listen-To-Sin-Citys-Debut-Album-Welcome-To-Sin-City.utr'
    },
    {
        title: 'Cheese',
        year: '2020',
        image: 'img/album_stromae_cheese_front.jpg',
        musician: 'Stromae',
        genre: 'Alternative',
        blurb: 'As dance floor fodder goes, Cheese is definitely above average, adding a doze of elegance to the prerequisite "shake-yer-booty" simplistic sound.',
        price: '$34.95',
        reviews: 'Im so in love with this album!!! He is a great artist and lyricist!',
        audioUrl: 'https://www.youtube.com/watch?v=PjnDiAai9F4'
    },
    {
        title: 'Renaissance',
        year: '2022',
        image: 'img/album_beyonce_renaissance_front.png',
        musician: 'Beyonce',
        genre: 'R&B',
        blurb: 'Beyoncé’s seventh album is not just a pop star’s immaculate dance record, but a rich celebration of club music and its sweaty, emancipatory spirit.',
        price: '$34.95',
        reviews: 'This album has something never heard before, each song goes hand in hand with the other and there is an excellent transition between each song.',
        audioUrl: 'https://www.youtube.com/watch?v=_Hd2WpRFgro'
    },
    {
        title: '7',
        year: '2018',
        image: 'img/album_david_guetta_7_front.jpg',
        musician: 'David Guetta',
        genre: 'Electronic Dance',
        blurb: 'The songs have a chunky, brash sound as though muscling into various voguish chart styles (tropical pop, trap music). ',
        price: '$43.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.youtube.com/watch?v=RtK99KqawWo'
    },
    {
        title: 'Sandstorm',
        year: '1998',
        image: 'img/album_darude_sandstorm_front.jpg',
        musician: 'Darude',
        genre: 'Electronic Dance',
        blurb: 'The songs have a chunky, brash sound as though muscling into various voguish chart styles (tropical pop, trap music). ',
        price: '$54.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.youtube.com/watch?v=RtK99KqawWo'
    },
    {
        title: 'Dua Lipa',
        year: '2022',
        image: 'img/album_dua_lipa_front.jpg',
        musician: 'Dua Lipa',
        genre: 'R&B',
        blurb: 'The songs have a chunky, brash sound as though muscling into various voguish chart styles (tropical pop, trap music). ',
        price: '$44.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.youtube.com/watch?v=RtK99KqawWo'
    },
    {
        title: 'The best of me',
        year: '1999',
        image: 'img/album_rick_astley_the_best_of_me_front.jpg',
        musician: 'Rick Astley',
        genre: 'Pop',
        blurb: 'The songs have a chunky, brash sound as though muscling into various voguish chart styles (tropical pop, trap music). ',
        price: '$49.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.youtube.com/watch?v=RtK99KqawWo'
    },
    {
        title: 'Something begining with C',
        year: '1993',
        image: 'img/album_exponents_something_beginning_with_c_front.jpg',
        musician: 'Exponents',
        genre: 'New Zealand',
        blurb: 'The songs have a chunky, brash sound as though muscling into various voguish chart styles (tropical pop, trap music). ',
        price: '$52.95',
        reviews: 'Not since his breakthrough on 2009s One Love has Guetta sounded as uplifted or invested. 7 is a pure joy to experience and a reminder that Guetta is still a master of the genre.',
        audioUrl: 'https://www.youtube.com/watch?v=RtK99KqawWo'
    },
]

// Get all filter inputs
var genre = document.getElementById('genreSelect');
var title = document.getElementById('titleSelect');
var musician = document.getElementById('musicianSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');
var clear = document.getElementById('filterClear');

// Event Listeners
genre.addEventListener('change', filterGenre);
title.addEventListener('change', filterTitle);
musician.addEventListener('change', filterMusician);
clear.addEventListener('click', clearAllFilters);

// Straight Compare Search - Click Event
search.addEventListener('click', searchAlbums);

// Clear Filter Search
function clearAllFilters() {
    getAllAlbums();
}


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
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
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
                    <h4 class="card-title">${album.title}</h4>
                    <h6 class="card-text">${album.year}</h6>
                    <h5 class="card-text">${album.musician}</h5>
                        <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

function filterTitle() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        if (title.value === album.title) {
            albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                    <h4 class="card-title">${album.title}</h4>
                    <h6 class="card-text">${album.year}</h6>
                    <h5 class="card-text">${album.musician}</h5>
                        <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
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
                        <h4 class="card-title">${album.title}</h4>
                        <h6 class="card-text">${album.year}</h6>
                        <h5 class="card-text">${album.musician}</h5>
                        <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}


function getAllAlbums() {
    var albumsOutput = document.getElementById('albumOutput');
    albumsOutput.innerHTML = '';
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        albumsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${album.image}" class="card-img-top" alt="Album Cover">
                    <div class="card-body">
                        <h4 class="card-title">${album.title}</h4>
                        <h6 class="card-text">${album.year}</h6>
                        <h5 class="card-text">${album.musician}</h5>
                        <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
    }
    populateModals();
}

getAllAlbums();

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
                        <h4 class="card-title">${album.title}</h4>
                        <h6 class="card-text">${album.year}</h6>
                        <h5 class="card-text">${album.musician}</h5>
                        <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#albumModal">Read More</a>
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
            //console.log(albums[this.id].audioUrl);
            var albumModal = document.getElementById('modalResult');
            albumModal.innerHTML = `

        <div class="modal-body">
            <img src="${albums[this.id].image}" class="card-img-top" alt="Album Cover">
            <h3 class="card-text">${albums[this.id].musician}</h3>
            <h2 class="modal-title fs-5" id="exampleModalLabel">${albums[this.id].title} - ${albums[this.id].year}</h2>
            <p class="card-text">${albums[this.id].blurb}</p>
            <p class="card-text">${albums[this.id].price}</p>
        </div>
        <div class="modal-footer">
        <a href="${albums[this.id].audioUrl}" target="_blank" class="btn btn-secondary" data-bs-dismiss="modal">Listen</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Buy</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        `
        })
    })
}