// choose which titles show in the header:
var titles_en = [
                'The Japanese American Association of New York Welcomes You',
                'Celebrating Over 100 Years of Community Service',
                'Dedicated to Engaging the Youth and Supporting the Elderly',
];
	
var titles_ja = [
                'ニューヨーク日系人会へようこそ',
                'Celebrating Over 100 Years of Community Service',
                'Dedicated to Engaging the Youth and Supporting the Elderly',
];
	
// choose which images show in the slider:
var images = [
                'matsuri.jpg',
                'sakura.jpg',
                'art.jpg',
];

// set how often slider transitions (in seconds)
var interval = 7;

// choose which email address to send the membership form to:
var mem_email = "s_sajid@internetacademy.co.jp";

// choose which email address to send the scholarship form to:
var scholar_email = "s_sajid@internetacademy.co.jp";

// choose email that will be used to send the membership form submission to JAANY
var mem_fromemail = "jaany.formM@jaany.org";
    
// choose email that will be used to send the scholarship form submission to JAANY
var scholar_fromemail = "jaany.formM@jaany.org";

// choose email that will be used to send confirmation email to new members
var mem_toemail = "membership@jaany.org";
    
// choose the email that will be used to send confirmation email to new scholarship applicants
var scholar_toemail = "scholarship@jaany.org";

  //==================================//
 //===== DO NOT EDIT CODE BELOW =====//
//==================================//
	
var titles;
var num_of_titles;
var num_of_img = images.length;
var milli_secs = interval * 1000;
var img_counter = 0;
var title_counter = 0;
var populate_popup;
var slide_handle;
var calendar_feed_url;
var calendar_feed_url_en = "https://www.google.com/calendar/feeds/jaa.of.newyork%40gmail.com/public/full";
var calendar_feed_url_ja = "https://www.google.com/calendar/feeds/422ne2f08omvjisr0lhbosgck8%40group.calendar.google.com/public/full";

var future_events_options = {
	'alt': 'json',
	'singleevents': true,
	'max-results': 10,
	'futureevents': true,
	'orderby': 'starttime',
	'sortorder': 'ascending'
};
var past_events_options = {
	'alt': 'json',
	'singleevents': true,
	'max-results': 10,
	'start-max': moment().format('YYYY-MM-DD'),
	'orderby': 'starttime'
};
var next_event_options = {
	'alt': 'json',
	'singleevents': true,
	'max-results': 1,
	'futureevents': true,
	'orderby': 'starttime',
	'sortorder': 'ascending'
};

var emailTo = "";
var ref = "";
var possible = "";
var refn = "";
var member = "";
var pre = "";
var first = "";
var mid = "";
var last = "";
var name = "";
var emaila = "";
var addre = "";
var cit = "";
var stat = "";
var zipc = "";
var emergencyfull = "";
var emergencyph = "";
var emergencyadd = "";
var emergencyjapann = "";
var emergencyjapanphone = "";
var dobd = "";
var dobm = "";
var doby = "";
var religion = "";
var status = "";
var birthplace = "";
var hobbies = "";
var referred = "";
var gift = "";
var payment = "";
var total;
var correct = 1;
	
function isJapaneseSite() {
	var rgx = /^\/ja\//;
	return rgx.test(location.pathname);
}

function isTopPage() {
	return $('header')[0] == null ? false : true;
}

function isHome() {
	var rgx = /^\/(ja\/)?(index\.html)?$/;
	return rgx.test(location.pathname);
}

function isEventsPage() {
	var rgx = /^\/(ja\/)?events\/(index\.html)?$/;
	return rgx.test(location.pathname);
}

function isPastEventsPage() {
	var rgx = /^\/(ja\/)?events\/past\/(index\.html)?$/;
	return rgx.test(location.pathname);
}

function isJoinPage() {
	var rgx = /^\/(ja\/)?join\/(index\.html)?$/;
	return rgx.test(location.pathname);
}

function isScholarshipPage() {
	var rgx = /^\/(ja\/)?programs\/scholarships\/(index\.html)?$/;
	return rgx.test(location.pathname);
}

function setNavShadow() {
	if ($(window).scrollTop() == 0) {
		$('.nav_wrapper').css('box-shadow', 'none');
		$('.nav_wrapper').css('border-bottom', '1px solid #d0d0d0');
		$('.sub_menu').css('box-shadow', 'none');
		$('.sub_menu').css('border-color', '#d0d0d0');
	}
	else {
		$('.nav_wrapper').css('box-shadow', '0 1px 3px #000000');
		$('.nav_wrapper').css('border-bottom', 'none');
		$('.sub_menu').css('box-shadow', '0 1px 3px #000000');
		$('.sub_menu').css('border-color', '#ffffff');
	}
}
    
function slide_show() {
	next_image();
	next_title();
}

function next_slide() {
    clearInterval(slide_handle);
    
    slide_show();
    
    slide_handle = setInterval(slide_show, milli_secs);
}

function prev_slide() {
    clearInterval(slide_handle);
    
	prev_image();
	prev_title();
    
    slide_handle = setInterval(slide_show, milli_secs);
}

function next_image() {
    var old_img_id = '#img' + img_counter;
    img_counter += 1;
    img_counter %= num_of_img;
    var new_img_id = '#img' + img_counter;
    $(old_img_id).css('opacity', 0);
    $(new_img_id).css('opacity', 1);
}

function next_title() {
    var old_title_id = '#title' + title_counter;
    title_counter += 1;
    title_counter %= num_of_titles;
    var new_title_id = '#title' + title_counter;
    $(old_title_id).css('display', 'none');
    $(new_title_id).css('display', 'block');
}

function prev_image() {
    var old_img_id = '#img' + img_counter;
    img_counter -= 1;
    img_counter = img_counter == -1 ? num_of_img - 1 : img_counter;
    var new_img_id = '#img' + img_counter;
    $(old_img_id).css('opacity', 0);
    $(new_img_id).css('opacity', 1);
}

function prev_title() {
    var old_title_id = '#title' + title_counter;
    title_counter -= 1;
    title_counter = title_counter == -1 ? num_of_titles - 1 : title_counter;
    var new_title_id = '#title' + title_counter;
    $(old_title_id).css('display', 'none');
    $(new_title_id).css('display', 'block');
}

function create_img(i, filename) {
    var prefix0 = '/images/';
    var prefix1 = 'header image ' + (i + 1) + ': ';
    var img = $('<img>').attr('id','img' + i).addClass('header_img').attr('src', prefix0 + filename).attr('alt', prefix1 + filename).attr('style','filter: url(#blur);');
    return img;
}

function create_title(i, text) {
    var header = $('<h1>').text(text);
    var div = $('<div>').attr('id', 'title' + i).addClass('header_title');
    div.append(header);
    return div;
}

function populate_header() {
    var img_index;
    var title_index;
	var title;
	var img;
    
    for (img_index = 0; img_index < num_of_img; img_index++) {
        img = create_img(img_index, images[img_index]);
        if (img_index != 0) {
            img.css('opacity', 0);
        }
        $('#slide_show .tint').before(img);
    }
    
    for (title_index = 0; title_index < num_of_titles; title_index++) {
        title = create_title(title_index, titles[title_index]);
        if (title_index != 0) {
            title.css('display', 'none');
        }
        $('#slide_show').append(title);
    }
}

function pixel_to_int(str) {
	var rgx = /^(\d+)px$/;
	return +str.replace(rgx, '$1');
}

function create_popup() {
	// create components
	var popup = $('<div>').attr('id', 'popup');
	var title = $('<p>').attr('id', 'popup_title');
	var details = $('<p>').attr('id', 'popup_details');
	var time = $('<span>').attr('id', 'popup_time');
	var loc = $('<span>').attr('id', 'popup_location');
	var description = $('<p>').attr('id', 'popup_description');
	
	// properly nest them
	details.append(time, $('<br>') ,loc);
	popup.append(title, details, description);
	
	// return
	return popup;
}

function populate_popup_en(event) {
	$('#popup_title').text(event.title);
	$('#popup_time').text(event.start.lang('en').format('ddd, MMM Do @ h:mm A'));
	$('#popup_location').text(event.location || 'No provided location.');
	$('#popup_description').text(event.description || 'There is no description for this event.');
}

function populate_popup_ja(event) {
	$('#popup_title').text(event.title);
	$('#popup_time').text(event.start.lang('ja').format('llll'));
	$('#popup_location').text(event.location || '場所はありません。');
	$('#popup_description').text(event.description || '説明はありません。');
}

function position_popup(x, y) {
	$('#popup').css('left', x);
	$('#popup').css('top', y);
}

function popup_to_mouse(x, y) {
	var x_offset = pixel_to_int($('#popup').css('width')) + 15;
	var y_offset = pixel_to_int($('#popup').css('height')) + 15;
	position_popup(x - x_offset, y - y_offset);
}

function fetch_events(options) {
	$.get(calendar_feed_url, options, function(data) {
		var event_list = parse_events(data.feed.entry);
		display_events(event_list);
	}, 'jsonp');
}

function display_events(event_list) {
	if (isEventsPage()) {
		if (event_list.length == 0) {
			if (isJapaneseSite()) {
				event_list = $('<p>').addClass('new-para2').text('今後のイベントはありません。');
			}
			else {
				event_list = $('<p>').addClass('new-para2').text('No immediate upcoming events.');
			}
		}
		$('#upcoming').append(event_list);
	}
	else if (isPastEventsPage()) {
		if (event_list.length == 0) {
			if (isJapaneseSite()) {
				event_list = $('<p>').addClass('new-para2').text('最近のイベントはありません。');
			}
			else {
				event_list = $('<p>').addClass('new-para2').text('No recent events.');
			}
		}
		$('#main-content').append(event_list)
	}
}

function parse_events(events) {
	var e;
	var event_list = [];
	if (isJapaneseSite()) {
		for (e in events) {
			event_list.push(create_event_ja(events[e]));
		}
	}
	else {
		for (e in events) {
			event_list.push(create_event_en(events[e]));
		}
	}
	return event_list;
}

function create_event_en(event) {
	// extract information
	var title = event.title.$t;
	var time = moment(event.gd$when[0].startTime).lang('en').format('LLLL');
	var location = event.gd$where[0].valueString || 'No provided location.';
	var description = event.content.$t || 'There is no description for this event.';
	
	// create compenents
	var main_div = $('<div>').addClass('main');
	var title_h3 = $('<h3>').addClass('event').text(title);
	var details_p = $('<p>').addClass('new-para2');
	var time_span = $('<span>').addClass('time').text(time);
	var loc_span = $('<span>').addClass('location').text(location);
	var desc_p = $('<p>').addClass('new-para2').text(description);
	
	// nest
	details_p.append(time, ' | ', location);
	main_div.append(title_h3, details_p, desc_p);
	
	// return
	return main_div;
}

function create_event_ja(event) {
	var title = event.title.$t;
	var time = moment(event.gd$when[0].startTime).lang('ja').format('LLLL');
	var location = event.gd$where[0].valueString || '場所はありません。';
	var description = event.content.$t || '説明はありません。';
	
	// create compenents
	var main_div = $('<div>').addClass('main');
	var title_h3 = $('<h3>').addClass('event').text(title);
	var details_p = $('<p>').addClass('new-para2');
	var time_span = $('<span>').addClass('time').text(time);
	var loc_span = $('<span>').addClass('location').text(location);
	var desc_p = $('<p>').addClass('new-para2').text(description);
	
	// nest
	details_p.append(time, ' | ', location);
	main_div.append(title_h3, details_p, desc_p);
	
	// return
	return main_div;
}

$(document).ready(function() {

	if (isJapaneseSite()) {
		titles = titles_ja;
		calendar_feed_url = calendar_feed_url_ja;
		populate_popup = populate_popup_ja;
	}
	else {
		titles = titles_en;
		calendar_feed_url = calendar_feed_url_en;
		populate_popup = populate_popup_en;
	}
	
	num_of_titles = titles.length;
	
	if (isEventsPage()) {
		fetch_events(future_events_options);
	}
	else if (isPastEventsPage()) {
		fetch_events(past_events_options);
	}
	
	if (isHome()) {
		populate_header();
		$('#next').click(next_slide);
		$('#prev').click(prev_slide);
		slide_handle = setInterval(slide_show, milli_secs);
	}

	if ($('#calendar-container')) {
		// insert the popup div
		$('body').append(create_popup());
		
		// initialize the calendar
		$('#calendar-container').fullCalendar({
			events: {
				url: calendar_feed_url,
				color: '#c00',
				textColor: '#c00'
			},

			header: {
				left: 'title',
				center: '',
				right:  'prev,today,next'
			},
			
			// set how tall the calendar is (in pixels)
			contentHeight: 350,
			
			// open a new window when the event is clicked
			eventClick: function(event) {
				if (event.url) {
					window.open(event.url);
					return false;
				}
			},

			// show a popup when hovering over an event
			eventMouseover: function(event, jsEvent, view) {
				// populate popup with event info
				populate_popup(event);

				// ...and reveal
				$('#popup').css('display', 'block');
			},

			eventMouseout: function(event, jsEvent, view) {
				// hide popup
				$('#popup').css('display', 'none');
			}
		});
	}    
    
    $('#membership-form').submit(function(e) {
        e.preventDefault();
        $.post("/php/sendEmail.php",
        {
        emailTo: mem_email,
        jaanyTo: mem_fromemail,
        memTo: mem_toemail,
        refnum: ref,
        membership: $("#membership").val(),
        prefix: $("#prefix").val(),
        firstname: $("input:text[name=firstname]").val(),
        midinit: $("input:text[name=middleinitial]").val(),
        lastname: $("input:text[name=lastname]").val(),
        namekanji: $("input:text[name=namekanji]").val(),
        emailadd: $("input:text[name=emailadd]").val(),
        address: $("input:text[name=address]").val(),
        city: $("input:text[name=city]").val(),
        state: $("#state").val(),
        zip: $("input:text[name=zipcode]").val(),
        emergencyfullname: $("input:text[name=emergencyfullname]").val(),
        emergencyphone: $("input:text[name=emergencyphone]").val(),
        emergencyaddress: $("input:text[name=emergencyaddress]").val(),
        emergencyjapanname: $("input:text[name=emergencyfullnamejap]").val(),
        emergencyjapanphone: $("input:text[name=emergencyphonejap]").val(),
        dobd: $("#day").val(),
        dobm: $("#dob").val(),
        doby: $("#year").val(),
        religion: $("input:text[name=religion]").val(),
        status: $("#status").val(),
        birthplace: $("input:text[name=birthplace]").val(),
        hobbies: $("#hobbies").val(),
        referred: $("input:text[name=referred]").val(),
        gift: $("input:text[name=gift]").val(),
        payment: $("input:radio[name=paying]:checked").val(),
        paid: total
        }).done(function(){
                if ($("input:radio[name=paying]:checked").val() == "Check")
                    window.location.replace("http://www.jaany.org/confirmation");
                else {
                    $("input:hidden[name=amount]").attr("value", "" + total);
                    $("#paypal-form").submit();
                }
            })
        });
        
     $('#scholarship-form').submit(function(e) {  
        e.preventDefault();
        $.post("/php/sendEmailscholarship.php",
           {
            emailTo: scholar_email,
            jaanyTo: scholar_fromemail,
            scholarTo: scholar_toemail,
            prefix: $("#prefix").val(),
            firstname: $("input:text[name=firstname]").val(),
            midinit: $("input:text[name=middleinitial]").val(),
            lastname: $("input:text[name=lastname]").val(),
            namekanji: $("input:text[name=namekanji]").val(),
            emailadd: $("input:text[name=emailadd]").val(),
            address: $("input:text[name=address]").val(),
            city: $("input:text[name=city]").val(),
            state: $("#state").val(),
            zip: $("input:text[name=zipcode]").val(),
            dobd: $("#day").val(),
            dobm: $("#dob").val(),
            doby: $("#year").val(),
            birthplace: $("input:text[name=birthplace]").val(),
            telephone: $("input:text[name=telephone]").val(),
            cellphone: $("input:text[name=cellphone]").val(),
            highschoolname: $("input:text[name=highschool]").val(),
            highschooladdress: $("input:text[name=highschooladdress]").val(),
            mothername: $("input:text[name=motherfullname]").val(),
            motheroccupation: $("input:text[name=motheroccupation]").val(),
            fathername: $("input:text[name=fatherfullname]").val(),
            fatheroccupation: $("input:text[name=fatheroccupation]").val(),
            honors: $("#honors").val(),
            extracurric: $("#extra-cur").val(),
            oextracurric: $("#o-extra-cur").val(),
            colleges: $("#colleges").val(),
            financials: $("#financials").val(),
            member: $("input:radio[name=member]:checked").val(),
            membername: $("input:text[name=membersfullname]").val()
           }
          ).done(function(){
            window.location.replace("http://www.jaany.org/confirmation");
        })
    });
    
    // set up for ref generator
    if (isJoinPage || isScholarshipPage){
    
            // ref number
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        ref = "";
            for( var i=0; i < 10; i++ )
                ref += possible.charAt(Math.floor(Math.random() * possible.length));
            $(".reference").text("Ref # " + ref);
        //}
        // globals
        var memtype = "";
        var str = "0";
        var gift = "0";
        total = 0;
        $(".total").text("$" + total);

        // set membership dollar amount
        $("#membership").change(function () {

            console.log("THis is what was selected " + $("#membership").val());
            memtype = $("#membership").val();
            if ($("#membership").val() == "Platinum")
                str = "2000";
            else if ($("#membership").val() == "Gold")
                str = "1000";
            else if ($("#membership").val() == "Silver")
                str = "500";
            else if ($("#membership").val() == "Supporting")
                str = "300";
            else if ($("#membership").val() == "Regular")
                str = "100";
            else if ($("#membership").val() == "Regular Spouse")
                str = "50";
            else if ($("#membership").val() == "Senior")
                str = "60";
            else if ($("#membership").val() == "Senior Spouse")
                str = "40";
            else if ($("#membership").val() == "Student")
                str = "25";
            else if ($("#membership").val() == "Beiju")
                str = "0";

            $( ".dollars" ).text("$" + str);
            $(".mem-type").text(memtype);
            var p_gift = parseInt(gift);
            var p_str = parseInt(str);
            total = p_gift + p_str;
            $(".total").text("$" + total);
                })


        $(".giftdisp").text("$0");

        $("#giftamnt").keydown(function(e){
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
            if (e.keyCode < 48 || e.keyCode > 57)
                e.preventDefault();
        });
        
        $("#giftamnt").change(function () {
            gift = $("#giftamnt").val();
            if (gift == "")
                gift = "0";
            $(".giftdisp").text("$" + gift);
            var p_gift = parseInt(gift);
            var p_str = parseInt(str);
            total = p_gift + p_str;
            $(".total").text("$" + total);
        })

         $(".total").text("$" + total);

        // Payment method - Membership
        $("input:radio[name=paying]").click(function() {
            var value = $(this).val();
            if (value == "Check")
                $(".info").html("Please make note of your reference number (at the top of the form). Make your check out for the above amount and write "
                                + "your reference number on your check. Make your check payable to:" +
                                "<br><br> Japanese American Association of New York<br><br>Send your check to: <br><br>" +
                                "49 West 45th Street, 11th Floor, <br> New York, <br> NY 10036 <br><br> Your membership application will be "+
                               "processed upon receipt of your check. Not writing your membership number on your check may result in your application not "
                               + "being able to be processed. Thank you for joining the Japanese American Association of New York. We look forward to seeing you "
                               + "at our events!");
            else $(".info").text("Thank you for registering to be an official member of JAANY. Upon clicking the submit button, you will be redirected to paypal" +
                                 " to complete your payment. Please " +
                                "make note of your reference number at the top of the form in case you have any questions or concerns regarding your membership status." +
                                " We look forward to seeing you at our events!");
        });
        
        var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

        $(document).keydown(function(e) {
          kkeys.push( e.keyCode );
          if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            $(document).unbind('keydown',arguments.callee);

            // do something awesome
            $("#main-content").fadeOut( "slow" );
            $("#sidebar").fadeOut( "slow" );
            $("body").attr('style','background-color:black').fadeIn("fast");
            $("#container").append($('<div>').attr('id','developed')).append($('<h1>').attr('id','dev-container').attr('style','color:white;'));
            $("#developed").append($('<a href="http://www.internetacademy.jp" id="ia">'));
            $("#ia").html("<img src=\"/images/ialogo.png\" alt=\"IA_LOGO\" style=\"width:1250px;height:auto;margin:0px auto;\">").fadeIn("slow");
            $("#dev-container").html("Developed By:<br><br><a href=\"http://www.linkedin.com/in/shahyansajid/\">Shahyan A. Sajid</a> - Harvard '15<br><a href=\"http://aadah.me/\">Abdi-Hakin Dirie</a>").fadeIn("slow");
            
          }
        });
        
        //SCHOLARSHIP JS
        $("input:radio[name=member]").click(function() {
            var value = $(this).val();
            if (value == "yes")
                $(".info").html('<input type="text" name="membersfullname" autocomplete="off" placeholder="Member Full Name" required="required" size="35"><br><br>Note:The JAA reserves the right to review the conditions and procedures for this scholarship program and make changes at any time.');
            else $(".info").html("Please contact the JAANY Office after form submission <br><br>Note:The JAA reserves the right to review the conditions and procedures for this scholarship program and make changes at any time.");

                                 });
        
        function refreshDiv(){
            // alert("In function");
             var container = document.getElementById("newsframe");
             var content = container.innerHTML;
            //alert(content);
            container.innerHTML= content;

        }
        
        $("#newsletter").change(function (){
            var nlval = $("#newsletter").val();
            document.getElementById('newsframe').innerHTML = '<embed src=\"' + nlval + '\" style=\"width: 100%; height: 1250px; border: 2px solid #808080;\" >';
        });



        $(function(){ /* to make sure the script runs after page load */

            $('#pres-greetings').each(function(event){ /* select all divs with the item class */

                var max_length = 1727; /* set the max content length before a read more link will be added */

                if($(this).html().length > max_length){ /* check for content length */
                    var long_content	= $(this).html().substr(max_length);
                    var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */


                    $(this).html(short_content+
                                 '<a href="#" class="read_more" style="text-align:center;"><br><br>See More</a>'+
                                 '<span class="more_text" style="display:none;">'+long_content+'</span>'+
                                '<a href="#" class="read_less" style="text-align:center; display:none;"><br><br>See Less</a>'); /* Alter the html to allow the read more functionality */

                    $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

                        event.preventDefault(); /* prevent the a from changing the url */
                        $(this).hide(); /* hide the read more button */
                        $(this).parents('#pres-greetings').find('.more_text').show(); /* show the .more_text span */
                        $(this).parents('#pres-greetings').find('.read_less').show();
                        $(".upcoming-events-container").css("height", "2100px");
                    })

                    $(this).find('a.read_less').click(function(event){
                        event.preventDefault(); /* prevent the a from changing the url */
                        $(this).hide(); /* hide the read more button */
                        $(this).parents('#pres-greetings').find('.more_text').hide(); /* show the .more_text span */
                        $(this).parents('#pres-greetings').find('.read_less').hide();
                        $(".upcoming-events-container").css("height", "1100px");
                        $('.read_more').show();
                    });
                }
            });
        });
    }
});


$(window).load(function() {
	// switch to flat (no shadow) design on sub pages
	if (!isTopPage()) {
		setNavShadow();
		$(window).scroll(setNavShadow);
	}
	
	// keep the popup on the cursor when within the calendar
	if ($('#calendar-container')) {
		$('#calendar-container').mousemove(function(event) {
			popup_to_mouse(event.clientX, event.clientY);
		});
	}
});