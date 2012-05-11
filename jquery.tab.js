/*
 * jquery.tab.js
 * 
 * Editor Poundhound
 *
 * Ç≤é©óRÇ…Ç≤óòópÇ≠ÇæÇ≥Ç¢ÅB
 * 
 * http://www.nk0206.com/life/
 * 
 *
 */
 
(function($) {
	$.fn.tabs = function(options) {
		var o = $.extend({
			targetID: '#tab',
			tabElement: '.tab-list li',
			boxElement: '.tab-box'
		}, options);
	
		$(o.tabElement, o.targetID).each(function() {
			$(o.boxElement, o.targetID).not(':first').hide();
			$(o.tabElement, o.targetID).eq(0).addClass('selected');
			
			$(this).click(function() {
				var tabIndex = $(o.tabElement, o.targetID).index(this);
				$(o.tabElement, o.targetID).removeClass('selected');
				$(this).addClass('selected');
				$(o.boxElement, o.targetID).hide().eq(tabIndex).addClass('selected').fadeIn();
			});
		});
		return this;
	};
})(jQuery);