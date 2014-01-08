  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-29591998-1']);
  _gaq.push(['_trackPageview']);

  // dom ready
  $(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);    

    createNavigation();
  });

  function createNavigation() {
	var nav = $("#ganav");
	if (nav) {
		nav.html('<ul>\
			<li><a href="index.html">Games</a></li>\
			<li><a href="blog.htm">Blog</a></li>\
			<li><a href="articles.htm">Articles</a></li>\
			<li><a href="about.html">About</a></li>\
			</ul>');
	}
  }
