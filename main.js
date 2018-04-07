$(document).ready(function() {
       window.localStorage.clear();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        success:function(data){

          var albunes = data;
          var PrimerAlbum = [];
          var SegundoAlbum = [];
          var TercerAlbum = [];
         $mostRecentFirst =data.pop().albumId;
         $mostRecentSecond =data.pop().albumId-1;
         $mostRecentThird =data.pop().albumId-2;
         var contadorUno = 0;
         var contadorDos = 0;
         var contadorTres = 0;

         for(var i in data){
          console.log(data[i].albumId);
          if(data[i].albumId == $mostRecentFirst){
            //console.log(albunes[i].title);
            //console.log(contadorUno)
            PrimerAlbum.push({"albumId": data[i].albumId,"id": data[i].id,"title": data[i].title,"url": data[i].url,"thumbnailUrl": data[i].thumbnailUrl});
            localStorage.setItem("PrimerAlbum"+contadorUno,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
            //console.log(PrimerAlbum[contadorUno])
            contadorUno = contadorUno + 1;
          };
          if(data[i].albumId ==  $mostRecentSecond){
            SegundoAlbum.push({"albumId": data[i].albumId,"id": data[i].id,"title": data[i].title,"url": data[i].url,"thumbnailUrl": data[i].thumbnailUrl});
            localStorage.setItem("SegundoAlbum"+contadorDos,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
            //console.log(SegundoAlbum[contadorDos])
            contadorDos = contadorDos + 1;
          };
          if(data[i].albumId ==  $mostRecentThird){
            TercerAlbum.push({"albumId": data[i].albumId,"id": data[i].id,"title": data[i].title,"url": data[i].url,"thumbnailUrl": data[i].thumbnailUrl});
            localStorage.setItem("TercerAlbum"+contadorTres,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
            //console.log(TercerAlbum[contadorTres])
            contadorTres = contadorTres + 1;
          // };

         };
       };
       $(".album:nth-child(1) h1").text(PrimerAlbum[0].title);
       $(".album:nth-child(1) .album-image img").attr("src",PrimerAlbum[0].thumbnailUrl);

       $(".album:nth-child(2) h1").text(SegundoAlbum[0].title);
       $(".album:nth-child(2) .album-image img").attr("src",SegundoAlbum[0].thumbnailUrl);

       $(".album:nth-child(3) h1").text(TercerAlbum[0].title);
       $(".album:nth-child(3) .album-image img").attr("src",TercerAlbum[0].thumbnailUrl);

       $(".album a").click(function(event){
         event.preventDefault();
         console.log("lola");
       })
     }//.then(function(data) {
    //     var albunes = data;
    //     var PrimerAlbum = [];
    //     var SegundoAlbum = [];
    //     var TercerAlbum = [];
    //    $mostRecentFirst =Number(data.pop().albumId);
    //    $mostRecentSecond =data.pop().albumId-1;
    //    $mostRecentThird =data.pop().albumId-2;
    //    var contadorUno = 0;
    //    var contadorDos = 0;
    //    var contadorTres = 0;
    //
    //    for(var i= 0 ; i<=albunes.length; i++){
    //     //console.log("FOR :"+albunes[i].albumId);
    //     if(albunes[i].albumId == $mostRecentFirst){
    //       //console.log(albunes[i].title);
    //       //console.log(contadorUno)
    //       PrimerAlbum.push({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl});
    //       localStorage.setItem("PrimerAlbum"+contadorUno,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
    //       //console.log(PrimerAlbum[contadorUno])
    //       contadorUno = contadorUno + 1;
    //     };
    //     if(albunes[i].albumId ==  $mostRecentSecond){
    //       SegundoAlbum.push({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl});
    //       localStorage.setItem("SegundoAlbum"+contadorDos,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
    //       //console.log(SegundoAlbum[contadorDos])
    //       contadorDos = contadorDos + 1;
    //     };
    //     if(albunes[i].albumId ==  $mostRecentThird){
    //       TercerAlbum.push({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl});
    //       localStorage.setItem("TercerAlbum"+contadorTres,JSON.stringify({"albumId": albunes[i].albumId,"id": albunes[i].id,"title": albunes[i].title,"url": albunes[i].url,"thumbnailUrl": albunes[i].thumbnailUrl}));
    //       //console.log(TercerAlbum[contadorTres])
    //       contadorTres = contadorTres + 1;
    //     };
    //     //jQuery(".album:nth-child(1) .id-title h1").text(PrimerAlbum[1].title)
    //    };
    //
    // });


});
});
