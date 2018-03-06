var FavorateThings= {
	color:"red",
	background:"yellow"

}
var type="apple"

for (var i=0; i<FavorateThings.length; i++) {
            console.log(FavorateThings[i]);
        }

var topics = ["apple", "orange", "grapes", "wine", "rice", "psychology", "music", "books", "philosophy", "computers", "vacation", "airplanes", "cars"];

var queryurl='http://api.giphy.com/v1/gifs/search?q=' +
    type + '&api_key=Whgwo2CSFMCMEXfXjLqSd3FDPjDU4vo6';
$("#aple").click(function () {
	console.log ("button works");
	// body...
	$.ajax({
    url: queryurl,
    method: 'GET'
  }).then(function(res) {
    var results = res.data;
console.log (results)
var imgUrl = "3dstockcontent.tumblr.com/post/65452192414/3dsc-sh01-122-000602"
$("#container").append('<h3>'+results[0].title + '</h3>' )
$('#container').append('<img src=" ' + imgUrl + '"' + '</img>')
 })
})

