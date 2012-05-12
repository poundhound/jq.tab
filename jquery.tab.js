/*
 * jquery.tab.js
 * 
 * Editor Poundhound
 *
 * ご自由にご利用ください。
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
			
			var selectedTab = $.cookie(o.targetID + 'selectedTab');
			if (selectedTab) {
				$(o.boxElement, o.targetID).not(':eq(' +selectedTab+')').hide();
				$(o.tabElement, o.targetID).eq(selectedTab).addClass('selected');				
			} else {
				$(o.boxElement, o.targetID).not(':first').hide();
				$(o.tabElement, o.targetID).eq(0).addClass('selected');
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