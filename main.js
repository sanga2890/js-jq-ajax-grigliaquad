// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.

// intercetto il click su ogni quadrato;
$('.square').click(function(){
    // dichiaro la variabile this esterna ad Ajax perchè altrimenti non verrebbe considerata;
    var single_square = $(this);
    // faccio partire la richiesta per recuperare il numero random;
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data) {
            // recupero il numero generato dall'api;
            var numero = data.response;
            console.log('Numero generato: ' + numero);

            // stampo in pagina il numero generato nella sua rispettiva casella;
            $(single_square).text(numero)

            // azzero tutte le condizioni in modo da poter ricliccare più volte sulla stessa casella e ottenere sempre il risultato desiderato;
            $(single_square).removeClass('yellow')
            $(single_square).removeClass('green')

            // creo la condizione per cambiare il colore della casella;
            if (numero <= 5) {
                $(single_square).addClass('yellow')
            } else {
                $(single_square).addClass('green')
            }

        },
        'error': function() {
            alert('si è verificato un errore');
        }
    })
})
