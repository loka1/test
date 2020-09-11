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

        $(el).append($.parseHTML(`

        	<div class="bar1"></div>
        	<div class="bar2"></div>

        `));
        html +="<div style='min-height:60px'>";
        $.each(list, function(index, val) {
			if(jQuery(window).width() < 700){
				var intprecent = 1000;
			}else{
				var intprecent = 100;
			}

        	 var img = $(val).find("img").attr("src"),
				 text = $.trim($(val).text()),
				 
        	 	s = $(val).offset(),
			    d = $(document).height(),
			     c = $(window).height(),
			    scrollPercent = (s.top  / (d - c )  ) * intprecent ;


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
					var intprecent = 1000;
				}else{
					var intprecent = 100;
				}
				
        		var scroll = $(window).scrollTop(),
			        dh = $(document).height(),
			        wh = $(window).height();
		        scrollPercent = (scroll  / (dh - wh)) * intprecent;
		        console.log(scrollPercent);
		        $(el).find(".bar2").css("width",scrollPercent + "%");

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