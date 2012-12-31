<script type="text/javascript" src="js/jquery-1.8.1.min.js"></script>
<script type="text/javascript">
$document.ready(function() {

	(function($) {
		$.fn.extend( {
			limiter: function(limit, elem) {
				$(this).on("keyup focus", function() {
					setCount(this, elem);
				});
				function setCount(src, elem) {
					var chars = src.value.length;
					if (chars > limit) {
						src.value = src.value.substr(0, limit);
						chars = limit;
					}
					elem.html( limit - chars );
				}
				setCount($(this)[0], elem);
			}
		});
	});
	
})(jQuery);	//end document ready	
</script>