/* Minified theme script */
var PROREZ=PROREZ||{};!function(e){"use strict";PROREZ.initialize={pageAnimsition:function(){i.animsition({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:'#site-navigation ul li a:not([target="_blank"]):not([href*="#"]):not([data-lightbox]):not([href^="mailto"]):not([href^="tel"]):not([href^="sms"]):not([href^="call"])',loading:!0,loadingParentElement:"body",loadingClass:"page-preloader",loadingInner:'<span class="loader"><span class="loader-inner"></span></span>'})},pageTransition:function(){PROREZ.initialize.addBlacklistClass();var t={anchors:"a",debug:!1,cacheLength:10,forms:".search-form",onStart:{duration:250,render:function(e){PROREZ.slider.stopSlide(),u.length>0&&u.trigger("click"),m.length>0&&m.trigger("click")}},onReady:{duration:100,render:function(t,a){var n=e("<div>").html(a);PROREZ.elementorFrontEnd.destroy(),PROREZ.header.destroy(),PROREZ.slider.destroy(),PROREZ.portfolio.destroy(),e("#main-content").stop().fadeOut(400,function(){PROREZ.initialize.fadeOutOldPage(a,n)})}},onAfter:function(t,n){setTimeout(function(){e("#main-content").waitForImages().done(function(){PROREZ.initialize.addBlacklistClass(),PROREZ.header.init(),e(".swiper-container").waitForImages().done(function(){PROREZ.slider.init()}),PROREZ.portfolio.init(),PROREZ.widget.init(),PROREZ.elementorFrontEnd.init(),w&&window.elementorFrontend.init(),e("body").hasClass("single-post")&&e("#comments").length>0&&window.addComment.init(),PROREZ.initialize.ajaxWpcf7(),a=setInterval(PROREZ.initialize.fadeInNewPage(),100)})},800)}};e("#page").smoothState(t).data("smoothState")},addBlacklistClass:function(){e("a").each(function(){(-1!==this.href.indexOf("/wp-admin/")||-1!==this.href.indexOf("/wp-login.php")||e(this).hasClass("cbp-lightbox")||e(this).hasClass("comment-reply-link"))&&e(this).addClass("no-smoothState")})},fadeInNewPage:function(){PROREZ.portfolio.checkInitPortfolio()&&PROREZ.slider.checkInitSlider()&&(clearInterval(a),e("#main-content").delay(100).stop().fadeIn(400,function(){e("#ajax-loader").removeClass("ajax-loading"),e("#ajax-loader").addClass("ajax-loaded")}))},fadeOutOldPage:function(t,a){a.find("#main-content").css({visibility:"visible",display:"none"});var n=a.find("#main").html();r.find("li.current").removeClass("current"),s.find("li.current").removeClass("current"),e(".search-form .search-field").val(""),e("#main-content").hide().remove(),PROREZ.initialize.changePageHeader(t,a),e("#main").html(n)},changePageHeader:function(t,a){w=!1;var n=a.find("title").html();e("title").html(n);var i=a.find("meta");e("head").find("meta").remove(),e("head").prepend(i);var o=t.match(/<body[^>]*class="(.+)"/i);if(o){var l=(o=o[1]).indexOf('"');-1!=l&&(o=o.substring(0,l)),e("body").attr("class",o)}var c=a.find('link[rel*="stylesheet"]');void 0!==c&&(e('link[id*="elementor-post"]').remove(),c.each(function(){var t=e(this).attr("id");e("#"+t).length<1&&e("head").append(e(this))}));var d=a.find("style:not([id=prorez-style-inline-css])");e("head").find("style:not([id=prorez-style-inline-css])").remove(),e("head").append(d);var p=a.find('script[type="text/javascript"]');e("html").find('script[type="text/javascript"]:not([src])').remove(),void 0!==p&&e(p).each(function(){void 0===e(this).attr("src")&&e("head").append(e(this))});var u=a.find('script[type="text/javascript"]');void 0!==u&&e(u).each(function(){var t=e(this).attr("src");-1==t.indexOf("elementor/assets/js/frontend.min.js")&&-1==t.indexOf("elementor-pro/assets/js/frontend.min.js")||(w=!0),void 0!==e(this).attr("src")&&e('script[src="'+t+'"]').length<1&&e("body").append(e(this))}),r.find(".current-menu-item").removeClass("current-menu-item"),r.find(".current-menu-parent").removeClass("current-menu-parent"),r.find(".current-menu-ancestor").removeClass("current-menu-ancestor"),s.find(".current-menu-item").removeClass("current-menu-item"),s.find(".current-menu-parent").removeClass("current-menu-parent"),s.find(".current-menu-ancestor").removeClass("current-menu-ancestor");var f=a.find("#top-menu");f.find(".current-menu-item").each(function(){var t=e(this).attr("id"),a=t.substring(t.lastIndexOf("-")+1);e("#top-menu #menu-item-top-"+a).addClass("current-menu-item"),e("#top-menu-mobile #menu-item-mobile-"+a).addClass("current-menu-item")}),f.find(".current-menu-parent").each(function(){var t=e(this).attr("id"),a=t.substring(t.lastIndexOf("-")+1);e("#top-menu #menu-item-top-"+a).addClass("current-menu-parent"),e("#top-menu-mobile #menu-item-mobile-"+a).addClass("current-menu-parent")}),f.find(".current-menu-ancestor").each(function(){var t=e(this).attr("id"),a=t.substring(t.lastIndexOf("-")+1);e("#top-menu #menu-item-top-"+a).addClass("current-menu-ancestor"),e("#top-menu-mobile #menu-item-mobile-"+a).addClass("current-menu-ancestor")})},ajaxWpcf7:function(){"undefined"!=typeof wpcf7&&("function"!=typeof wpcf7.initForm?PROREZ.initialize.wpcf7Reinit():void 0===wpcf7.supportHtml5&&(wpcf7.supportHtml5=function(){var t={},a=document.createElement("input");t.placeholder="placeholder"in a;return e.each(["email","url","tel","number","range","date"],function(e,n){a.setAttribute("type",n),t[n]="text"!==a.type}),t}(),e("div.wpcf7 > form").each(function(){var t=e(this);wpcf7.initForm(t),wpcf7.cached&&wpcf7.refill(t)})))},wpcf7Reinit:function(){wpcf7=e.extend({cached:0,inputs:[]},wpcf7),wpcf7.supportHtml5=function(){var t={},a=document.createElement("input");t.placeholder="placeholder"in a;return e.each(["email","url","tel","number","range","date"],function(e,n){a.setAttribute("type",n),t[n]="text"!==a.type}),t}(),wpcf7.getId=function(t){return parseInt(e('input[name="_wpcf7"]',t).val(),10)},wpcf7.initForm=function(t){var a=e(t);a.off().on("submit",function(t){wpcf7.supportHtml5.placeholder||e("[placeholder].placeheld",a).each(function(t,a){e(a).val("").removeClass("placeheld")}),"function"==typeof window.FormData&&(wpcf7.submit(a),t.preventDefault())}),e(".wpcf7-submit",a).after('<span class="ajax-loader"></span>'),wpcf7.toggleSubmit(a),a.on("click",".wpcf7-acceptance",function(){wpcf7.toggleSubmit(a)}),e(".wpcf7-exclusive-checkbox",a).on("click","input:checkbox",function(){var t=e(this).attr("name");a.find('input:checkbox[name="'+t+'"]').not(this).prop("checked",!1)}),e(".wpcf7-list-item.has-free-text",a).each(function(){var t=e(":input.wpcf7-free-text",this),a=e(this).closest(".wpcf7-form-control");e(":checkbox, :radio",this).is(":checked")?t.prop("disabled",!1):t.prop("disabled",!0),a.on("change",":checkbox, :radio",function(){e(".has-free-text",a).find(":checkbox, :radio").is(":checked")?t.prop("disabled",!1).focus():t.prop("disabled",!0)})}),wpcf7.supportHtml5.placeholder||e("[placeholder]",a).each(function(){e(this).val(e(this).attr("placeholder")),e(this).addClass("placeheld"),e(this).focus(function(){e(this).hasClass("placeheld")&&e(this).val("").removeClass("placeheld")}),e(this).blur(function(){""===e(this).val()&&(e(this).val(e(this).attr("placeholder")),e(this).addClass("placeheld"))})}),wpcf7.jqueryUi&&!wpcf7.supportHtml5.date&&a.find('input.wpcf7-date[type="date"]').each(function(){e(this).datepicker({dateFormat:"yy-mm-dd",minDate:new Date(e(this).attr("min")),maxDate:new Date(e(this).attr("max"))})}),wpcf7.jqueryUi&&!wpcf7.supportHtml5.number&&a.find('input.wpcf7-number[type="number"]').each(function(){e(this).spinner({min:e(this).attr("min"),max:e(this).attr("max"),step:e(this).attr("step")})}),e(".wpcf7-character-count",a).each(function(){var t=e(this),n=t.attr("data-target-name"),i=t.hasClass("down"),o=parseInt(t.attr("data-starting-value"),10),r=parseInt(t.attr("data-maximum-value"),10),s=parseInt(t.attr("data-minimum-value"),10),l=function(a){var n=e(a).val().length,l=i?o-n:n;t.attr("data-current-value",l),t.text(l),r&&r<n?t.addClass("too-long"):t.removeClass("too-long"),s&&n<s?t.addClass("too-short"):t.removeClass("too-short")};e(':input[name="'+n+'"]',a).each(function(){l(this),e(this).keyup(function(){l(this)})})}),a.on("change",".wpcf7-validates-as-url",function(){var t=e.trim(e(this).val());t&&!t.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==t.indexOf(".")&&(t="http://"+(t=t.replace(/^\/+/,""))),e(this).val(t)})},wpcf7.submit=function(t){if("function"==typeof window.FormData){var a=e(t);e(".ajax-loader",a).addClass("is-active"),wpcf7.clearResponse(a);var n=new FormData(a.get(0)),i={id:a.closest("div.wpcf7").attr("id"),status:"init",inputs:[],formData:n};e.each(a.serializeArray(),function(e,t){if("_wpcf7"==t.name)i.contactFormId=t.value;else if("_wpcf7_version"==t.name)i.pluginVersion=t.value;else if("_wpcf7_locale"==t.name)i.contactFormLocale=t.value;else if("_wpcf7_unit_tag"==t.name)i.unitTag=t.value;else if("_wpcf7_container_post"==t.name)i.containerPostId=t.value;else if(t.name.match(/^_wpcf7_\w+_free_text_/)){var a=t.name.replace(/^_wpcf7_\w+_free_text_/,"");i.inputs.push({name:a+"-free-text",value:t.value})}else t.name.match(/^_/)||i.inputs.push(t)}),wpcf7.triggerEvent(a.closest("div.wpcf7"),"beforesubmit",i);e.ajax({type:"POST",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId(a)+"/feedback"),data:n,dataType:"json",processData:!1,contentType:!1}).done(function(t,n,o){!function(t,a,n,o){i.id=e(t.into).attr("id"),i.status=t.status,i.apiResponse=t;var r=e(".wpcf7-response-output",o);switch(t.status){case"validation_failed":e.each(t.invalidFields,function(t,a){e(a.into,o).each(function(){wpcf7.notValidTip(this,a.message),e(".wpcf7-form-control",this).addClass("wpcf7-not-valid"),e("[aria-invalid]",this).attr("aria-invalid","true")})}),r.addClass("wpcf7-validation-errors"),o.addClass("invalid"),wpcf7.triggerEvent(t.into,"invalid",i);break;case"acceptance_missing":r.addClass("wpcf7-acceptance-missing"),o.addClass("unaccepted"),wpcf7.triggerEvent(t.into,"unaccepted",i);break;case"spam":r.addClass("wpcf7-spam-blocked"),o.addClass("spam"),wpcf7.triggerEvent(t.into,"spam",i);break;case"aborted":r.addClass("wpcf7-aborted"),o.addClass("aborted"),wpcf7.triggerEvent(t.into,"aborted",i);break;case"mail_sent":r.addClass("wpcf7-mail-sent-ok"),o.addClass("sent"),wpcf7.triggerEvent(t.into,"mailsent",i);break;case"mail_failed":r.addClass("wpcf7-mail-sent-ng"),o.addClass("failed"),wpcf7.triggerEvent(t.into,"mailfailed",i);break;default:var s="custom-"+t.status.replace(/[^0-9a-z]+/i,"-");r.addClass("wpcf7-"+s),o.addClass(s)}wpcf7.refill(o,t),wpcf7.triggerEvent(t.into,"submit",i),"mail_sent"==t.status&&(o.each(function(){this.reset()}),wpcf7.toggleSubmit(o)),wpcf7.supportHtml5.placeholder||o.find("[placeholder].placeheld").each(function(t,a){e(a).val(e(a).attr("placeholder"))}),r.html("").append(t.message).slideDown("fast"),r.attr("role","alert"),e(".screen-reader-response",o.closest(".wpcf7")).each(function(){var a=e(this);if(a.html("").attr("role","").append(t.message),t.invalidFields){var n=e("<ul></ul>");e.each(t.invalidFields,function(t,a){if(a.idref)var i=e("<li></li>").append(e("<a></a>").attr("href","#"+a.idref).append(a.message));else i=e("<li></li>").append(a.message);n.append(i)}),a.append(n)}a.attr("role","alert").focus()})}(t,0,0,a),e(".ajax-loader",a).removeClass("is-active")}).fail(function(t,n,i){var o=e('<div class="ajax-error"></div>').text(i.message);a.after(o)})}},wpcf7.triggerEvent=function(t,a,n){var i=e(t),o=new CustomEvent("wpcf7"+a,{bubbles:!0,detail:n});i.get(0).dispatchEvent(o),i.trigger("wpcf7:"+a,n),i.trigger(a+".wpcf7",n)},wpcf7.toggleSubmit=function(t,a){var n=e(t),i=e("input:submit",n);void 0===a?n.hasClass("wpcf7-acceptance-as-validation")||(i.prop("disabled",!1),e(".wpcf7-acceptance",n).each(function(){var t=e(this),a=e("input:checkbox",t);if(!t.hasClass("optional")&&(t.hasClass("invert")&&a.is(":checked")||!t.hasClass("invert")&&!a.is(":checked")))return i.prop("disabled",!0),!1})):i.prop("disabled",!a)},wpcf7.notValidTip=function(t,a){var n=e(t);if(e(".wpcf7-not-valid-tip",n).remove(),e('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(a).appendTo(n),n.is(".use-floating-validation-tip *")){var i=function(t){e(t).not(":hidden").animate({opacity:0},"fast",function(){e(this).css({"z-index":-100})})};n.on("mouseover",".wpcf7-not-valid-tip",function(){i(this)}),n.on("focus",":input",function(){i(e(".wpcf7-not-valid-tip",n))})}},wpcf7.refill=function(t,a){var n=e(t),i=function(t,a){e.each(a,function(e,a){t.find(':input[name="'+e+'"]').val(""),t.find("img.wpcf7-captcha-"+e).attr("src",a);var n=/([0-9]+)\.(png|gif|jpeg)$/.exec(a);t.find('input:hidden[name="_wpcf7_captcha_challenge_'+e+'"]').attr("value",n[1])})},o=function(t,a){e.each(a,function(e,a){t.find(':input[name="'+e+'"]').val(""),t.find(':input[name="'+e+'"]').siblings("span.wpcf7-quiz-label").text(a[0]),t.find('input:hidden[name="_wpcf7_quiz_answer_'+e+'"]').attr("value",a[1])})};void 0===a?e.ajax({type:"GET",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId(n)+"/refill"),beforeSend:function(e){var t=n.find(':input[name="_wpnonce"]').val();t&&e.setRequestHeader("X-WP-Nonce",t)},dataType:"json"}).done(function(e,t,a){e.captcha&&i(n,e.captcha),e.quiz&&o(n,e.quiz)}):(a.captcha&&i(n,a.captcha),a.quiz&&o(n,a.quiz))},wpcf7.clearResponse=function(t){var a=e(t);a.removeClass("invalid spam sent failed"),a.siblings(".screen-reader-response").html("").attr("role",""),e(".wpcf7-not-valid-tip",a).remove(),e("[aria-invalid]",a).attr("aria-invalid","false"),e(".wpcf7-form-control",a).removeClass("wpcf7-not-valid"),e(".wpcf7-response-output",a).hide().empty().removeAttr("role").removeClass("wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked")},wpcf7.apiSettings.getRoute=function(e){var t=wpcf7.apiSettings.root;return t=t.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+e)},e("div.wpcf7 > form").each(function(){var t=e(this);wpcf7.initForm(t),wpcf7.cached&&wpcf7.refill(t)})}},PROREZ.header={init:function(){PROREZ.header.menuItemTrigger(),PROREZ.header.hamMobMenuTrigger(),PROREZ.header.hamSidebarMenuTrigger(),PROREZ.header.hamSidebarMenuCloseTrigger(),PROREZ.header.onePageScroll(),PROREZ.header.customPageScroll(),PROREZ.header.onepageScroller(),PROREZ.header.onepageLoadScroll()},destroy:function(){r.find("ul.sub-menu").slideUp(),r.find("li.menu-item-has-children > a").off("click"),s.find("li.menu-item-has-children > a").off("click"),c.off("click"),p.off("click"),m.off("click"),u.off("click"),m.off("click"),e(".page-click-capture").off("click"),r.off("click"),s.off("click")},menuItemTrigger:function(){r.find("li.menu-item-has-children > a").on("click",function(t){return e(this).closest("li").siblings().find("ul.sub-menu").slideUp(),e(this).closest("li").siblings().removeClass("current-menu-parent"),e(this).closest("li").children("ul.sub-menu").slideToggle(),e(this).closest("li").toggleClass("current-menu-parent"),!1}),s.find("li.menu-item-has-children > a").on("click",function(t){return e(this).closest("li").siblings().find("ul.sub-menu").slideUp(),e(this).closest("li").siblings().removeClass("current-menu-parent"),e(this).closest("li").children("ul.sub-menu").slideToggle(),e(this).closest("li").toggleClass("current-menu-parent"),!1})},hamMobMenuTrigger:function(){c.length>0&&c.on("click",function(){return s.find("ul.sub-menu").slideUp(),l.slideToggle(200).toggleClass("display-menu"),e(this).toggleClass("open"),!1})},hamSidebarMenuTrigger:function(){var a=e(".page-click-capture");(t=new TimelineMax({paused:!0})).to(d,.8,{ease:Expo.easeInOut,right:"0%",strictUnits:!0,onStart:function(){a.addClass("page-overlay"),d.addClass("display-sidebar"),n.addClass("sidebar-opened")},onReverseComplete:function(){a.removeClass("page-overlay"),d.removeClass("display-sidebar"),n.removeClass("sidebar-opened")}}),t.reversed(!0),p.length>0&&p.on("click",function(){return t.restart(),e(this).addClass("open"),!1}),f.length>0&&f.on("click",function(){return t.restart(),e(this).addClass("open"),!1})},hamSidebarMenuCloseTrigger:function(){u.length>0&&u.on("click",function(){t.reverse(),p.removeClass("open"),f.removeClass("open")}),m.length>0&&m.on("click",function(){t.reverse(),p.removeClass("open"),f.removeClass("open")}),e(".page-click-capture").on("click",function(){t.reverse(),p.removeClass("open"),f.removeClass("open")})},onePageScroll:function(){r.on("click",function(t){if(e(t.target).is("a")&&-1!=e(t.target).attr("href").indexOf("#")){var a=r,n=e(t.target).attr("href"),i=n.substring(n.indexOf("#")+1),o=a.attr("data-speed"),s=a.attr("data-easing");if(o||(o=1250),s||(s="easeInOutExpo"),""!=i){var l=document.querySelector("#"+i);if(null==l)return!0;animateScroll(l,o,s,0)}return!1}return!0}),s.on("click",function(t){if(e(t.target).is("a")&&-1!=e(t.target).attr("href").indexOf("#")){var a=s,n=e(t.target).attr("href"),i=n.substring(n.indexOf("#")+1),o=a.attr("data-speed"),r=a.attr("data-easing");if(o||(o=1250),r||(r="easeInOutExpo"),""!=i){var d=e("#masthead-mobile").height(),p=document.querySelector("#"+i);if(null==p)return l.slideUp(300,function(){e(this).removeClass("display-menu"),c.removeClass("open")}),!0;l.slideUp(300,function(){e(this).removeClass("display-menu"),c.removeClass("open"),animateScroll(p,o,r,d)})}return!1}return l.slideUp(300,function(){e(this).removeClass("display-menu"),c.removeClass("open")}),!0})},customPageScroll:function(){e(".custom-scroll, .custom-scroll a").on("click",function(){var t=e(this).attr("href"),a=e(this).attr("data-speed"),n=e(this).attr("data-easing"),i=h<1023?e("#masthead-mobile").height():0;if(a||(a=1250),n||(n="easeInOutExpo"),e(t).length>0){var o=document.querySelector(t);if(null==o)return!0;animateScroll(o,a,n,i)}return!1})},onepageScroller:function(){r.navpoints({offset:0,classToParent:!0,currentClass:"current"}),s.navpoints({offset:0,classToParent:!0,currentClass:"current"})},onepageLoadScroll:function(){var t=window.location.href;if(-1!=t.indexOf("#")){var a=t.substr(t.indexOf("#"));window.location.hash="";var n=e("#masthead-mobile").height(),i=h<1023?n:0;if(e(a).length>0){window.scrollTo(0,0);var o=document.querySelector(a);null!=o&&setTimeout(function(){animateScroll(o,1250,"easeInOutExpo",i)},1e3)}}}},PROREZ.slider={init:function(t){var a=e(".swiper-container.blog-media");n.hasClass("single-portfolio")&&(a=e(".swiper-container.portfolio-media")),(t||a).each(function(){PROREZ.slider.initializeSlider(this)})},stopSlide:function(){var t=e(".swiper-container.testimonial-slider"),a=e(".swiper-container.blog-media");n.hasClass("single-portfolio")&&(a=e(".swiper-container.portfolio-media")),a.each(function(){e(this).length>0&&e(this).get(0).swiper.autoplay.stop()}),t.each(function(){e(this).length>0&&e(this).get(0).swiper.autoplay.stop()})},destroy:function(){var t=e(".swiper-container.testimonial-slider"),a=e(".swiper-container.blog-media");n.hasClass("single-portfolio")&&(a=e(".swiper-container.portfolio-media")),a.each(function(){e(this).length>0&&e(this).get(0).swiper.destroy(!0,!0)}),t.each(function(){e(this).length>0&&e(this).get(0).swiper.destroy(!0,!0)})},checkInitSlider:function(){var t=e(".swiper-container.testimonial-slider"),a=e(".swiper-container.blog-media");n.hasClass("single-portfolio")&&(a=e(".swiper-container.portfolio-media"));var i=!0;return a.each(function(){if(!(e(this).length>0&&void 0!==e(this).get(0).swiper))return!1;i=!0}),t.each(function(){if(!(e(this).length>0&&void 0!==e(this).get(0).swiper))return!1;i=!0}),i},initializeSlider:function(t){var a=e(t);new Swiper(t,{init:!1,lazy:!1,autoHeight:!0,slidesPerView:null==a.data("slides-per-view")?1:a.data("slides-per-view"),spaceBetween:null==a.data("space-between")?0:a.data("space-between"),centeredSlides:null!=a.data("centered-slides")&&a.data("centered-slides"),freeMode:null!=a.data("free-mode")&&a.data("free-mode"),grabCursor:null!=a.data("grab-cursor")&&a.data("grab-cursor"),mousewheel:null!=a.data("mouse-wheel")&&a.data("mouse-wheel"),loop:null==a.data("loop")||a.data("loop"),effect:null==a.data("effect")?"slide":a.data("effect"),autoplay:{delay:null==a.data("autoplay-delay")?5e3:a.data("autoplay-delay"),disableOnInteraction:null==a.data("disable-on-interaction")||a.data("disable-on-interaction")},pagination:{el:".swiper-pagination",type:null==a.data("pagination-type")?"bullets":a.data("pagination-type"),clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpointsInverse:!0,breakpoints:{1024:{slidesPerView:null==a.data("slides-per-view")?1:a.data("slides-per-view"),spaceBetween:null==a.data("space-between")?0:a.data("space-between")},768:{slidesPerView:null==a.data("tablet-slide-per-view")?1:a.data("tablet-slide-per-view"),spaceBetween:null==a.data("space-between")?0:a.data("space-between")},640:{slidesPerView:null==a.data("mobile-slide-per-view")?1:a.data("mobile-slide-per-view"),spaceBetween:null==a.data("space-between")?0:a.data("space-between")},320:{slidesPerView:null==a.data("mobile-slide-per-view")?1:a.data("mobile-slide-per-view"),spaceBetween:null==a.data("space-between")?0:a.data("space-between")}}}).init()}},PROREZ.portfolio={init:function(t){(t||e("[id^=portfolio-container]")).each(function(){PROREZ.portfolio.initializePortfolio(this)})},destroy:function(){var t=e("[id^=portfolio-container]");e("[id=portfolio-section-widget-container]").each(function(){e(this).length>0&&void 0!==e(this).cubeportfolio&&e(this).cubeportfolio("destroy")}),t.each(function(){e(this).length>0&&void 0!==e(this).cubeportfolio&&e(this).cubeportfolio("destroy")})},checkInitPortfolio:function(){var t=e("[id^=portfolio-container]"),a=e("[id=portfolio-section-widget-container]"),n=!0;return a.each(function(){if(!(e(this).length>0&&void 0!==e(this).cubeportfolio))return!1;n=!0}),t.each(function(){if(!(e(this).length>0&&void 0!==e(this).cubeportfolio))return!1;n=!0}),n},initializePortfolio:function(t){var a=e(t),n={filters:"#filters-container,[id^=filters-container-subcategory]",layoutMode:null==a.data("layoutmode")?"grid":a.data("layoutmode"),sortToPreventGaps:!0,mediaQueries:[{width:1150,cols:null==a.data("large-desktop")?4:a.data("large-desktop")},{width:800,cols:null==a.data("tablet-landscape")?3:a.data("tablet-landscape")},{width:500,cols:null==a.data("tablet-portrait")?2:a.data("tablet-portrait")},{width:400,cols:null==a.data("mobile")?1:a.data("mobile")}],defaultFilter:a.data("defaultfilter"),animationType:a.data("animationtype"),gapHorizontal:null==a.data("gaphorizontal")?0:a.data("gaphorizontal"),gapVertical:null==a.data("gapvertical")?0:a.data("gapvertical"),gridAdjustment:"responsive",caption:null==a.data("captionanimation")?"fadeIn":a.data("captionanimation"),displayType:null==a.data("displaytype")?"fadeIn":a.data("displaytype"),displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',plugins:{loadMore:{element:"#more-projects",action:a.data("loadmoreaction"),loadItems:a.data("loadnoofitems")}}};a.cubeportfolio(n),a.on("lazyLoad.cbp",function(e,t){var a=t.getAttribute("data-cbp-srcset"),n=t.getAttribute("data-sizes");null!=a&&(t.srcset=a,t.removeAttribute("data-cbp-srcset")),null!=n&&(t.sizes=n,t.removeAttribute("data-sizes"))}),a.on("onAfterLoadMore.cbp",function(){e(".cbp-l-loadMore-link").hasClass("cbp-l-loadMore-stop")&&e(".cbp-l-loadMore-noMoreLoading").html(a.data("button-text"))})}},PROREZ.widget={init:function(){"undefined"!=typeof google&&g.each(function(){PROREZ.widget.initializeMap(this)}),1==prorezMainJs.ajaxPageLoad&&e("body").hasClass("single-post")&&e("#commentform").length>0&&e("#commentform").ajaxComments(),e("body").hasClass("single-post")&&e(".post-share").length>0&&e(".post-share a").socialshare(),e("body").hasClass("single-portfolio")&&e(".portfolio-share").length>0&&e(".portfolio-share a").socialshare()},animateCounter:function(){elementorFrontend.waypoint(e(".counter-wrap"),function(){e(this).find(".counter-number").each(function(){var t=e(this),a=t.data(),n=a.toValue.toString().match(/\.(.*)/);n&&(a.rounding=n[1].length),t.numerator(a)})})},initializeMap:function(t){var a=e(t).data("latitude"),n=e(t).data("longitude"),i=e(t).data("zoom"),o=e(t).data("mapmarker"),r={center:new google.maps.LatLng(a,n),zoom:i,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,mapTypeControl:!1,panControl:!1,scaleControl:!1,streetViewControl:!1,zoomControl:!1},s=new google.maps.Map(t,r);new google.maps.Marker({position:new google.maps.LatLng(a,n),map:s,icon:o});s.setOptions({styles:JSON.parse(prorezMainJs.mapStyle.toString())})}},PROREZ.elementorFrontEnd={init:function(){e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/prorez-portfolio-section-widget.default",function(){var t=e("[id=portfolio-section-widget-container]");PROREZ.portfolio.init(t)}),elementorFrontend.hooks.addAction("frontend/element_ready/prorez-testimonial-carousel-widget.default",function(){var t=e(".swiper-container.testimonial-slider");e(".swiper-container.testimonial-slider").waitForImages().done(function(){PROREZ.slider.init(t)})}),elementorFrontend.hooks.addAction("frontend/element_ready/prorez-counter-block-widget.default",function(){PROREZ.widget.animateCounter()})})},destroy:function(){e(window).off("elementor/frontend/init")}},PROREZ.documentOnResize={init:function(){h=e(window).width()}},PROREZ.documentOnReady={init:function(){n.hasClass("elementor-editor-active")?i.removeClass("animsition"):(PROREZ.initialize.pageAnimsition(),1==prorezMainJs.ajaxPageLoad&&PROREZ.initialize.pageTransition()),PROREZ.header.init(),PROREZ.slider.init(),PROREZ.widget.init(),PROREZ.elementorFrontEnd.init()}},PROREZ.documentOnLoad={init:function(){null!=window.elementorFrontend&&elementorFrontend.isEditMode()&&PROREZ.elementorFrontEnd.init(),PROREZ.portfolio.init(),PROREZ.header.onepageLoadScroll(),PROREZ.documentOnLoad.windowscroll()},windowscroll:function(){e(window).on("scroll",function(){var t=e(window).scrollTop();e("#footer").offset().top-t>1e3?o.show():o.hide()})}};var t,a,n=e("body"),i=e("#page"),o=e("#scroll-down"),r=e("#top-menu"),s=e("#top-menu-mobile"),l=e("#site-navigation-mobile"),c=e("#ham-trigger-wrap"),d=e("#secondary, #secondary .widget-area"),p=e("#ham-sidebar-trig-desktop"),u=e("#ham-sidebar-close-desktop"),f=e("#ham-sidebar-trig-mobile"),m=e("#ham-sidebar-close-mobile"),h=e(window).width(),g=e("[id^=googleMap]"),w=!1;e(document).ready(PROREZ.documentOnReady.init),e(window).load(PROREZ.documentOnLoad.init),e(window).on("resize",PROREZ.documentOnResize.init)}(jQuery);