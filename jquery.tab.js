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
			defaultOpenTab: 0,
			parmName: 'tab',
			tabName01: 'tab01',
			tabName02: 'tab02',
			tabName03: 'tab03',
			tabName04: 'tab04'
		}, options);
	
		$(o.tabElement, o.targetID).each(function() {
			
			var selectedTab = $.cookie(o.targetID + 'selectedTab');
			if (selectedTab) {
				$(o.boxElement, o.targetID).not(':eq(' +selectedTab+')').hide();
				$(o.tabElement, o.targetID).eq(selectedTab).addClass('selected');
				
				//1.2xånÇÕÇ±ÇøÇÁ
				//$(o.tabElement, o.targetID).filter(':eq(' +selectedTab+')').addClass('selected');
				
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
		
		var parm = getUrlVars();
		if(o.parmName in parm) {
			key = decodeURI(parm[o.parmName]);
			
			switch (key){
				case o.tabName01:
					$(o.tabElement, o.targetID).removeClass('selected');
					$(o.tabElement, o.targetID).eq(0).addClass('selected');
					$(o.boxElement, o.targetID).hide();
					$(o.boxElement, o.targetID).eq(0).fadeIn();
					break;
				case o.tabName02:
					$(o.tabElement, o.targetID).removeClass('selected');
					$(o.tabElement, o.targetID).eq(1).addClass('selected');
					$(o.boxElement, o.targetID).hide();
					$(o.boxElement, o.targetID).eq(1).fadeIn();
					break;
				case o.tabName03:
					$(o.tabElement, o.targetID).removeClass('selected');
					$(o.tabElement, o.targetID).eq(2).addClass('selected');
					$(o.boxElement, o.targetID).hide();
					$(o.boxElement, o.targetID).eq(2).fadeIn();
					break;
				case o.tabName04:
					$(o.tabElement, o.targetID).removeClass('selected');
					$(o.tabElement, o.targetID).eq(3).addClass('selected');
					$(o.boxElement, o.targetID).hide();
					$(o.boxElement, o.targetID).eq(3).fadeIn();
					break;
			}
		}
		
		function getUrlVars() {
			var vars = [];
			var hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
			for(var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = decodeURI(hash[1]);
			}
			return vars;
		}
		return this;
	};
})(jQuery);