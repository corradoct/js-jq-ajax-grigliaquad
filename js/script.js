// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(
  function() {

    // // Aggiungo l'evento click al quadrato
    // $('.col').on('click',
    //   function() {
    //     // Assegno il quadrato cliccato ad una variabile
    //     var clickedElement = this;
    //     // Effettuo la chiamata ajax
    //     $.ajax(
    //       {
    //         // Dichiaro l'endpoint della API e il metodo utilizzato
    //     		url: 'https://flynn.boolean.careers/exercises/api/random/int',
    //     		method: 'GET',
    //         // In caso di successo della chiamata eseguo le operazioni
    //     		success: function(data) {
    //           // Assegno il risultato della chiamata ad una variabile
    //     			var numero = data.response;
    //           // Se il numero è minore o uguale a 5 il quadrato diventa giallo
    //           if (numero <= 5) {
    //             $(clickedElement).removeClass('green');
    //             $(clickedElement).addClass('yellow');
    //           } else {  // Altrimenti diventa verde
    //             $(clickedElement).removeClass('yellow');
    //             $(clickedElement).addClass('green');
    //           }
    //           // Inserisco il numero all'interno del quadrato
    //           $(clickedElement).find('span').text(numero);
    //     		},
    //         // In caso di fallimento della chiamata faccio comparire un errore
    //     		error: function() {
    //     			alert("Si è verificato un errore");
    //     		}
    //     	}
    //     );
    //   }
    // );


    // Creo la griglia dinamicamente con Handlebars
    var source = $('#griglia').html();
    var template = Handlebars.compile(source);

    var numeroQuadrati = 36;

    for (var i = 0; i < numeroQuadrati; i++) {
      $('.grid').append(template);
    }

    // Aggiungo l'evento click al quadrato
    $('.square').on('click',
      function() {
        // Assegno il quadrato cliccato ad una variabile
        var clickedElement = this;
        // Effettuo la chiamata ajax
        $.ajax(
          {
            // Dichiaro l'endpoint della API e il metodo utilizzato
        		url: 'https://flynn.boolean.careers/exercises/api/random/int',
        		method: 'GET',
            // In caso di successo della chiamata eseguo le operazioni
        		success: function(data) {
              // Assegno il risultato della chiamata ad una variabile
        			var numero = data.response;
              // Se il numero è minore o uguale a 5 il quadrato diventa giallo
              if (numero <= 5) {
                $(clickedElement).removeClass('green');
                $(clickedElement).addClass('yellow');
              } else {  // Altrimenti diventa verde
                $(clickedElement).removeClass('yellow');
                $(clickedElement).addClass('green');
              }
              // Inserisco il numero all'interno del quadrato
              $(clickedElement).find('span').text(numero);
        		},
            // In caso di fallimento della chiamata faccio comparire un errore
        		error: function() {
        			alert("Si è verificato un errore");
        		}
        	}
        );
      }
    );
  }
);
