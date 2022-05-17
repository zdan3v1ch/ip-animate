$(document).ready(function() 
{
  $('.myLinkModal').click( function(event)
  {
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function()
    {
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);        
    });
  });
  
  $('#myModal__close, #myOverlay').click( function()
  {
    $('#myModal').animate({opacity: 0}, 198, function()
    {
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});

$(document).ready(function()
{
  $('.myLinkModal2').click(function(event)
  {
    event.preventDefault();
    $('#myOverlay2').fadeIn(297,	function()
    {
      $('#myModal2') 
      .css('display', 'block')        
      .animate({opacity: 1}, 198);
    });
  });
  
  $('#myModal__close2, #myOverlay2').click( function()
  {
    $('#myModal2').animate({opacity: 0}, 198, function()
    {
      $(this).css('display', 'none');
      $('#myOverlay2').fadeOut(297);
    });
  });
});

$(document).ready(function() 
{
  $('.myLinkModal3').click( function(event)
  {
    event.preventDefault();
    $('#myOverlay3').fadeIn(297,	function()
    {
      $('#myModal3') 
      .css('display', 'flex')
      .css('align-items', 'center')
      .css('justify-content','center')
      .animate({opacity: 1}, 198);
    });
  });
  
  $('#myModal__close3, #myOverlay3').click( function()
  {
    $('#myModal3').animate({opacity: 0}, 198, function()
    {
      $(this).css('display', 'none');
      $('#myOverlay3').fadeOut(297);        
    });
      $('#multik')
      .css('display', 'none');
      $('#for_play')
      .css('display', 'inline');
  });
});

$(document).ready(function() 
{
  $('#first_form').submit(function(e) 
  {
    e.preventDefault();
    var login = $('#login').val();     
    var email = $('#email').val();
    var telephone = $('#telephone').val();
    $(".error").remove();

    if (login.length< 1) 
    {
      $('#login').after('<span class="error">Это поле должно быть заполненно</span>');
      $('#login').removeClass('not_error');
    }
    else
    {
      $('#login').addClass('not_error');
    }

    if (telephone.length< 1) 
    {
      $('#telephone').after('<span class="error">Это поле должно быть заполненно</span>');
      $('#telephone').removeClass('not_error');
    } 
    else 
    {
      var regEx = /^(\+375|80)[-\ ]?(29|25|44|33)[-\ ]?(\d{3})[-\ ]?(\d{2})[-\ ]?(\d{2})$/;
      var validTel = regEx.test(telephone);
      if (!validTel) 
      {
        $('#telephone').after('<span class="error">Введите номер телефона с кодом (+375 или 80)</span>');
        $('#telephone').removeClass('not_error');
      }
      else
      {
        $('#telephone').addClass('not_error');
      }
    }

    if (email.length< 1) 
    {
      $('#email').after('<span class="error">Это поле должно быть заполненно</span>');
      $('#email').removeClass('not_error');
    } 
    else 
    {
      var regEx = /.+@.+\..+/i;
      var validEmail = regEx.test(email);
      if (!validEmail) 
      {
        $('#email').after('<span class="error">Введите корректный email</span>');
        $('#email').removeClass('not_error');
      }
      else
      {
        $('#email').addClass('not_error');
      }
    }
      
    if($('.not_error').length == 3)
    {
      $(this).unbind('submit').submit()
    }
    else
    {
      return false;
    }
  });
});
  
  
$(document).ready(function() 
{
  $('#two_form').submit(function(e) 
  {
    e.preventDefault();
    var login2 = $('#login2').val();
    var telephone2 = $('#telephone2').val();   
    $(".error").remove();
   
    if (login2.length< 1) 
    {
      $('#login2').after('<span class="error">Это поле должно быть заполненно</span>');
      $('#login2').removeClass('not_error');
    }
    else
    {
      $('#login2').addClass('not_error');
    }
   
    if (telephone2.length< 1) 
    {
      $('#telephone2').after('<span class="error">Это поле должно быть заполненно</span>');
      $('#telephone2').removeClass('not_error');
    } 
    else 
    {
      var regEx2 = /^(\+375|80)[-\ ]?(29|25|44|33)[-\ ]?(\d{3})[-\ ]?(\d{2})[-\ ]?(\d{2})$/;
      var validTel2 = regEx2.test(telephone2);
      if (!validTel2) 
      {
        $('#telephone2').after('<span class="error">Введите номер телефона с кодом (+375 или 80)</span>');
        $('#telephone2').removeClass('not_error');
      }
      else
      {
        $('#telephone2').addClass('not_error');
      }
      
    }
      
    if($('.not_error').length == 2)
    {
      $(this).unbind('submit').submit()
    }
    else
    {
      return false;
    }
  });
}); 

$(document).ready(function() 
{
	var headerHeight = $('header').outerHeight();      
  $('ul  li').click(function(e) 
  {
    var targetHref = $(this).attr('href');        
    $('html, body').animate(
    {
      scrollTop: $(targetHref).offset().top - headerHeight 
    }, 1000);
    e.preventDefault();
  });
});