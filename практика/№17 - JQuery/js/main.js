$(document).ready(function() {

  $('.container').on('click', function(event) {

    let target = $(event.target),
        a = $('a[href="#sheldure"]');
        
    if ( target.is( a ) || target.is( ".main_btn" ) || target.is( ".main_btna" )) {

      $('.overlay').animate(
            {
              opacity: 'toggle'
            }, 1500
          );

      let b = $('.modal');

      $(b).animate(
        {
          marginTop: '-2000px',
          opacity: 'toggle'
        }, 10
      );
      $(b).animate(
        {
          marginTop: '40px'
        }, 1500
      );
    }

  }); 

  $('.close > span').on('click', function() {

    $('.overlay').animate(
      {
        opacity: 'toggle'
      }, 1500
    );

    let b = $('.modal');
    
    $(b).animate(
      {
        marginTop: '-2000px',
        opacity: 'toggle'
      }, 1500
    );
    
  });

});