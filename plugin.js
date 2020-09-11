(function($) {
    $.fn.table = function(options) {
    	
    	var list = [],
    		el = $(this)
    		html = "";

    	// set settings
        var settings = $.extend({
            title: "h1",
        }, options);

        list = $(settings.title).toArray();
		
		if(jQuery(window).width() < 700){
			$(el).css("width","500%");
		}

        $(el).append($.parseHTML(`

        	<div class="bar1"></div>
        	<div class="bar2"></div>

        `));
        html +="<div style='min-height:60px'>";
        $.each(list, function(index, val) {
			if(jQuery(window).width() < 700){
				var intprecent = 5;
			}else{
				var intprecent = 1;
			}

        	 var img = $(val).find("img").attr("src"),
				 text = $.trim($(val).text()),
				 
        	 	s = $(val).offset(),
			    d = $(document).height(),
			     c = $(window).height(),
			    scrollPercent = (s.top  / (d - c )  ) * 100 ;


			    $(val).attr("id",text.replaceAll(" ","_"));
			    console.log(s,d,scrollPercent);
        	html +=`

        		<div class="section" data-text="${text.replaceAll(" ","_")}"  style="left:${scrollPercent}%">
        		<div class="tooltiptext">${text}</div>
        		<img src="${img}">
        		</div>

        	`;

        });
        html +="</div>";
        $(el).append($.parseHTML(html));
        // get head info and store in arry
        console.log(list);
        // change url on click
        // syns bar with scroller
        // create animet

        // jQuery(document).ready(function($) {
        	
        	$(window).on("scroll",function(){
				if(jQuery(window).width() < 700){
					var intprecent = 5;
				}else{
					var intprecent = 1;
				}

        		var scroll = $(window).scrollTop(),
			        dh = $(document).height(),
			        wh = $(window).height();
		        scrollPercent = (scroll  / (dh - wh)) * 100;
		        console.log(scrollPercent);
		        $(el).find(".bar2").css("width",scrollPercent + "%");
				if(jQuery(window).width() < 700){
					$(el).css("margin-left","-"+scrollPercent * intprecent + "%");
				}
        	});


        	$(document).on("click",("#table-content .section"),function(e){
        		e.preventDefault();
        		var id = $(this).attr("data-text");
        		window.location.replace("#"+id);
        	});

        // });
        






        return this;
    };
})(jQuery);