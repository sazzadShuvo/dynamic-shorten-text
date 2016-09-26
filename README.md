# Dynamic Shorten Text #
### A script to add `show more` button with dynamic text size ###

#### How to use it? ####

First load jQuery and shorten jQuery plugin (https://github.com/viralpatel/jquery.shorten), then load this script.

Then wrap the text with a div of 'shorten-text shorten-text-`number`' class. Here `number` will be replaced with your your specified number.

##### Example 1 #####

	<body>
		<div class="shorten-text shorten-text-50">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem maxime eum quasi optio maiores minus corporis excepturi iste, sunt culpa voluptatem vel laudantium omnis aliquam sequi. Sed consequuntur cum error.
		</div>
		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		<script src="js/jquery.shorten.min.js"></script>
		<script src="js/dynamic-shorten-text.js"></script>
	</body>

##### Example 2 #####

	<body>
		<div class="shorten-text shorten-text-100">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem maxime eum quasi optio maiores minus corporis excepturi iste, sunt culpa voluptatem vel laudantium omnis aliquam sequi. Sed consequuntur cum error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, praesentium ea mollitia adipisci beatae voluptatem consectetur ipsa incidunt quidem est, autem tenetur recusandae, alias iusto, sint nobis dicta similique. Harum.
		</div>
		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		<script src="js/jquery.shorten.min.js"></script>
		<script src="js/dynamic-shorten-text.js"></script>
	</body>