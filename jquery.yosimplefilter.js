// By Chris Johnson
// http://chrisltd.com
// Created March 2013
// Version .01b
// Yo Simple Filter does simple single category filtering on a set of elements. Just activate the plugin on a properly formatted wrapper element, make sure you have a proper set of filters and you're good to go. Alternatively, you can pass settings to match your custom HTML structure.

(function( $ ){

  $.fn.YoSimpleFilter = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'childObject'  : '.filter_item',  				    // Targets to be filtered
      'filterObject' : '.filter',                		// Next and Previous button tag
      'animate' : true,                          		// Should the filtering be animated
      'animationSpeed' : 200,												// Animation speed in milliseconds
      'initCallback' : function() {},            		// Called if plugin initialized on an object
      'filterCallback' : function() {}           		// Called after a filter is run
    }, options);

    // Plugin code
    return this.each(function(index, value) {        
			wrapper = this;
      // Find and make sure there are child objects before continuing
      var childTotal = $(settings.childObject, wrapper).length;
      if(childTotal == 0){
        return;
      }
			var childTotal = $(settings.filterObject).length; // make sure there are filters
      if(childTotal == 0){
        return;
      }
      settings.initCallback();

			// Bind filter action
			$(settings.filterObject).click(function(event) {
				event.preventDefault();
				// Add active class to selected filter
				$(settings.filterObject).removeClass("active");
				$(this).addClass("active");
				
				filter = $(this).data("filter");
				if(settings.animate){
					// Show all items					
					$(settings.childObject, wrapper).fadeOut(settings.animationSpeed,
						function(){
							// Hide the ones that don't match the filter
							$(settings.childObject + filter, wrapper).fadeIn(settings.animationSpeed);	
						}
					);					
				} else {
					// Show all items
					$(settings.childObject, wrapper).hide();
					// Hide the ones that don't match the filter
					$(settings.childObject + ':not("' + filter + '")', wrapper).show();
				}
				
				settings.filterCallback();
			});
			

    });


  };
})( jQuery );