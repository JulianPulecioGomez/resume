( function ( $ ) {   
    
        // USE STRICT
	"use strict";        
     
        var socialShareWidget = {
            
            socialShareDialog: function( network, shareurl ) {

                    var social_networks = {
                                                'fab fa-facebook-f'   : 'http://www.facebook.com/sharer.php?u=',
                                                'fab fa-twitter'    : 'https://twitter.com/share?url=',
                                                'fab fa-google-plus-g' : 'https://plus.google.com/share?url=',
                                                'fab fa-linkedin-in'   : 'http://www.linkedin.com/shareArticle?mini=true&amp;url=',
                                                'fab fa-xing'       : 'https://www.xing.com/spi/shares/new?url=',
                                                'fab fa-pinterest-p'  : 'http://pinterest.com/pin/create/link/?url='
                                           }

                    var width  = 575,
                                 height = 520,
                                 left   = ( $( window ).width()  - width )  / 2,
                                 top    = ( $( window ).height() - height ) / 2,
                                 opts   = 'status=1' +
                                           ',width='  + width  +
                                           ',height=' + height +
                                           ',top='    + top    +
                                           ',left='   + left;

                    var url = social_networks[ network ] + shareurl;                    

                    var newwindow = window.open( url , '', opts );

                    if ( window.focus ) {
                        newwindow.focus();
                    }
            },
            
            init: function( socialShareLinks ) {
                
                if( socialShareLinks.length > 0 ) {

                    socialShareLinks.on( 'click', function() {

                        var network = $(this).data( 'network' );
                        var shareurl = $(this).data( 'shareurl' );

                        socialShareWidget.socialShareDialog( network, shareurl );

                        return false;
                    });
                }                
                
            }
        };
        
        $.fn.socialshare = function() {               
            socialShareWidget.init( this );                
        };
    
})( jQuery );