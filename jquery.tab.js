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
			boxElement: '.tab-box',
			defaultOpenTab: 0
		}, options);
	
		$(o.tabElement, o.targetID).each(function() {
			
			var selectedTab = $.cookie(o.targetID + 'selectedTab');
			if (selectedTab) {
				$(o.boxElement, o.targetID).not(':eq(' +selectedTab+')').hide();
				$(o.tabElement, o.targetID).eq(selectedTab).addClass('selected');				
			} else {
				$(o.boxElement, o.targetID).hide().eq(o.defaultOpenTab).show();
				$(o.tabElement, o.targetID).eq(o.defaultOpenTab).addClass('selected');
			}
			
			$(this).click(function(){
				var tabIndex = $(o.tabElement, o.targetID).index(this);
				$.cookie(o.targetID + 'selectedTab', tabIndex);
				$(o.tabElement, o.targetID).removeClass('selected');
				$(this).addClass('selected');
				$(o.boxElement, o.targetID).hide().eq(tabIndex).addClass('selected').fadeIn();
			});
			
		});
		return this;
	};
})(jQuery);