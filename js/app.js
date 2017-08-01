//Create overlay with large image

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);

//Add caption to overlay
$overlay.append($caption);

//Add overlay
$('html').append($overlay);

//Capture the click event on a link to an image
$('#gallery a.preview').click(function(){
	event.preventDefault();
	var imgLocation = $(this).attr("href");

  //Update overlay with the image linked in the link
  $image.attr('src', imgLocation);
  
  //Show the overlay.
  $overlay.show();
});

  //Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');  
  $caption.text(captionText);

//When overlay is clicked
$overlay.click(function(){
	//Hide overlay
	$overlay.hide();
});