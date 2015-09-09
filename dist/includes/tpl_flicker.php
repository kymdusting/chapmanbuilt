<script type="text/javascript" src="js/jflickrfeed.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('#flickr').jflickrfeed({
		limit: 6,
		qstrings: {
		id: '50774996@N03'
		},
	itemTemplate: '<li><a href="{{image_b}}" style="display:block;position:relative;" class="flickrPhoto"><img src="{{image_s}}" alt="{{title}}" class="bordered1" width="56" height="56"/></a></li>'
	}, function(){
		$('a.flickrPhoto').prettyPhoto()
	});
});
</script>

<ul id="flickr" class="flicker_widget"></ul>