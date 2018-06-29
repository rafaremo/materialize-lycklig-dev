$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.inside-text').toggleClass('scale-in');

  $('#contactBtn').click(function(e){
    e.preventDefault();

    var nombre = $('#first_name').val();
    var correo = $('#email').val();
    var telefono = $('#phone').val();
    var empresa = $('#empresa').val();
    var mensaje = $('#textarea1').val();
    var forma = $('#contactForm');

    if(nombre === '' || correo === ''){
      alert('El nombre y correo son obligatorios');
      return;
    }

    var person = {
      "fields": [
        {
          "name": "firstname",
          "value": nombre
        },
        {
          "name": "email",
          "value": correo
        },
        {
          "name": "phone",
          "value": telefono
        },
        {
          "name": "company",
          "value": empresa
        },
        {
          "name": "message",
          "value": mensaje
        }
      ],
      "context": {
        "pageUri": "td.lycklig.com.mx",
        "pageName": "Lycklig Development"
      },
      "legalConsentOptions":{
        "consent":{
          "consentToProcess":true,
          "text":"I agree to allow Lycklig Development to store and process my personal data.",
          "communications":[
            {
              "value":true,
              "subscriptionTypeId":999,
              "text":"I agree to receive marketing communications from Lycklig Development."
            }
          ]
        }
      }
    };

    $.ajax({
      url: 'https://api.hsforms.com/submissions/v3/integration/submit/4275092/622e4fde-6c79-46c1-87e9-4dbd4c05ab76',
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(person)
    }).done(function (data) {
      var respondText = data.inlineMessage;
      forma.html(respondText);
    });
  });
});