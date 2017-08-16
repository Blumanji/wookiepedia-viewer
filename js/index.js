$(document).ready(function() {
  var query = "";
  var api = "";
  var chewieNoise = $("#wookie1")[0];
  var chewieNoise2 = $("#wookie2")[0];
  
  $("#randbutt").on("click", function(){
    chewieNoise.play();
  });
  $("#results").children().on("click", function(){
    chewieNoise.play();
  });
  $("#search-button").on("click", function() {
    chewieNoise2.play();
    query = $("#search-box").val();
    api =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      query +
      "&limit=10&format=json";
    $("#results").html("");
    
    $.ajax( {
    url: api,
    dataType: 'jsonp',
    success: function(data) {
       for(var i=0; i<10; i++){
         $("#results").append('<div class="card card-outline-primary">' +
  '<div class="card-block">'
   + '<a href="' + data[3][i] +'"' +'target="blank">' +
      '<h4 class="card-title">' + data[1][i] + '</h4>' +
      '<p class="card-text">' +
        data[2][i] +
      '</p>' +
    '</a>' +
  '</div>' +
'</div>'
       )};
      $("#results").children().on("click", function(){
    chewieNoise.play();
  });
    }
    });
  });
$("#search-box").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-button").click();
    }
});
});