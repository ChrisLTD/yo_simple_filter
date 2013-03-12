# Yo Simple Filter
## Version .01b
Yo Simple Filter does simple single category filtering on a set of elements. 

![Animated Example](https://github.com/chrisltd/yo_simple_filter/raw/master/example.gif)

Just activate the plugin on a properly formatted wrapper element, make sure you have a proper set of filters and you're good to go. Alternatively, you can pass alternate selectors as settings to match your custom HTML structure.

## Usage Examples
Simple example
```html
<button class="filter" data-filter="">All</button>
<button class="filter" data-filter=".f-fruit">Fruit</button>
<button class="filter" data-filter=".f-vegetable">Vegetables</button>

<div id="items">
	<div class="filter_item f-vegetable">Celery</div>
	<div class="filter_item f-fruit">Apple</div>
	<div class="filter_item f-fruit f-vegetable">Tomato</div>
</div>

<!-- Include JQuery Core above this line -->
<script src="jquery.yosimplefilter.js"></script>
<script>
	$("#items").YoSimpleFilter();
</script>
```

## Options
```js
'childObject' : '.filter_item',       				// Targets to be filtered
'filterObject' : '.filter',                		// Next and Previous button tag
'animate' : true,                          		// Should the filtering be animated
'animationSpeed' : 200,												// Animation speed in milliseconds
'initCallback' : function() {},            		// Called if plugin initialized on an object
'filterCallback' : function() {}           		// Called after a filter is run
```