(function() {
    function Fixtures() {
        var Fixtures = {};
        /* declared a variable set to an empty object and the factory will return
        this object and make its properties and methods available to other parts of
        the angular application */

        var albumPicasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
                { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
                { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
                { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
                { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
            ]
        };

        var albumMarconi = {
            title: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                { title: 'Hello, Operator?', duration: '1:01' },
                { title: 'Ring, ring, ring', duration: '5:01' },
                { title: 'Fits in your pocket', duration: '3:21' },
                { title: 'Can you hear me now?', duration: '3:14' },
                { title: 'Wrong phone number', duration: '2:15' }
            ]
        };

        Fixtures.getAlbum = function() {
            return albumPicasso;
        };

        Fixtures.getCollection = function(numberOfAlbums) {
            var albumsArray = [];
            for (var i=0; i < numberOfAlbums; i++) {
                albumCollection.push(angular.copy(albumPicasso));
            }
            return albumsCollection;
        };

        return Fixtures;
    }

    angular
        .module('blocJams')
        /* .factory() designates the use of the Factory recipe. For the
        Service recipe, we'd use .service(). The factory will return the
        variable set to an empty object within the Fixtures function and
        make it available to other parts of the app. A factory is a
        function which returns any object. As a breakdown:

        A service: holds a reference to any object.

        A factory: is a function which returns any object.

        A provider: is a function which returns any function.

         */
        .factory('Fixtures', Fixtures);
})();
