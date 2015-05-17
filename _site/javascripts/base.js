$.getJSON( "https://api.github.com/orgs/crowdhealthio/repos", function( data ) {
  $.each( data, function( key, val ) {
  	$.getJSON( val.contributors_url, function( repoData ) {
  		$.each( repoData, function( key, val ) {
  		  $('<img />').attr({
            src: val.avatar_url,
            width:64,
            height:64
          }).appendTo($('<a />').attr({
            href:'https://github.com/'+val.login
          }).insertAfter('#contributors h1'));
  		});
  	});
  });
});
