$(document).ready(function() {
       window.localStorage.clear();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        success:function(data){

          var albunes = data;
          console.log(data[data.length-1]);
          var PrimerAlbum = [];
          var SegundoAlbum = [];
          var TercerAlbum = [];
         $mostRecentFirst =data[data.length-1].albumId;
         $mostRecentSecond =data[data.length-1].albumId-1;
         $mostRecentThird =data[data.length-1].albumId-2;
         var contadorUno = 0;
         var contadorDos = 0;
         var contadorTres = 0;

         for(var i in data){
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
       $(".album:nth-child(1)").attr("data-album",PrimerAlbum[0].albumId);

       $(".album:nth-child(2) h1").text(SegundoAlbum[0].title);
       $(".album:nth-child(2) .album-image img").attr("src",SegundoAlbum[0].thumbnailUrl);
       $(".album:nth-child(2)").attr("data-album",SegundoAlbum[0].albumId);

       $(".album:nth-child(3) h1").text(TercerAlbum[0].title);
       $(".album:nth-child(3) .album-image img").attr("src",TercerAlbum[0].thumbnailUrl);
       $(".album:nth-child(3)").attr("data-album",TercerAlbum[0].albumId);

       $(".album").click(function(event){
         event.preventDefault();
         $(".render-last-albums").slideUp("slow");
         setTimeout(function(){$(".SelectedAlbum").slideDown("fast");},500)
         $getAtribute = $(this).attr("data-album");
         if($getAtribute == PrimerAlbum[0].albumId){
           $(".selectedAlbumPhotos li:first-child img").attr("src",PrimerAlbum[PrimerAlbum.length-1].thumbnailUrl);
           $(".selectedAlbumPhotos li:last-child img").attr("src",PrimerAlbum[PrimerAlbum.length-2].thumbnailUrl);
         }
         if($getAtribute == SegundoAlbum[0].albumId){
           console.log("segundo");
           $(".selectedAlbumPhotos li:first-child img").attr("src",SegundoAlbum[SegundoAlbum.length-1].thumbnailUrl);
           $(".selectedAlbumPhotos li:last-child img").attr("src",SegundoAlbum[SegundoAlbum.length-2].thumbnailUrl);
         }
         if($getAtribute == TercerAlbum[0].albumId){
           console.log("tercero");
           $(".selectedAlbumPhotos li:first-child img").attr("src",TercerAlbum[TercerAlbum.length-1].thumbnailUrl);
           $(".selectedAlbumPhotos li:last-child img").attr("src",TercerAlbum[TercerAlbum.length-2].thumbnailUrl);
         }
       });
       $(".BackButton").click(function(){
         setTimeout(function(){$(".render-last-albums").slideDown("fast");},500)
         $(".SelectedAlbum").slideUp("fast");
       });
     }
   });
});
