  // dom ready
  $(function() {
    createNavigation();
  });

  function createNavigation() {
	var nav = $("#ganav");
	if (nav) {
		nav.html('<ul>\
			<li><a href="videogames.htm">Games</a></li>\
			<li><a href="blog.htm">Blog</a></li>\
			<li><a href="articles.htm">Articles</a></li>\
			<li><a href="about.htm">About</a></li>\
			</ul>');
	}
  }
