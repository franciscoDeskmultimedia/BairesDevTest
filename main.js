$(document).ready(function() {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos"
    }).then(function(data) {
        var PrimerAlbum = [];
        var SegundoAlbum = [];
        var TercerAlbum = [];
       console.log(data.length);
       $mostRecentFirst =data.pop().albumId;
       $mostRecentSecond =data.pop().albumId-1;
       $mostRecentThird =data.pop().albumId-2;
       console.log($mostRecentFirst);
       console.log($mostRecentSecond);
       console.log($mostRecentThird);

       for($i= 0 ; $i<=data.length; $i++){
        // console.log(data[$i].albumId);
        if(data[$i] == $mostRecentFirst){
          PrimerAlbum.push($mostRecentFirst);
        };
        if(Number(data.albumId) == $mostRecentSecond){
          SegundoAlbum.push(data);
        };
        if(Number(data.albumId) == $mostRecentThird){
          TercerAlbum.push(data);
        };
       };
       console.log(PrimerAlbum);
       console.log(SegundoAlbum);
       console.log(TercerAlbum);

    });
});
