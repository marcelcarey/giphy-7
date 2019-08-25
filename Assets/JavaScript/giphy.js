$(document).ready(function() {

    //create starting array
    var topics = ['Dylan Rieder', 'Chris Cole', 'Michael Jordan', 'Allen Iverson',
     'Kobe Bryant','Tim Duncan', 'Nyjah Huston']
    

    function renderButtons(){
        $('#buttons-go-here').empty(); 

        for (var i = 0; i < topics.length; i++){

            var a = $('<button>')

            a.addClass('topics')

            a.attr('data-search', topics[i])

            a.text(topics[i])

            $('#buttons-go-here').append(a)
        }
    
    }

    $('#add-button').submit(function(event){ 
    event.preventDefault()

        var textBox = $('#input').val().trim()
        topics.push(textBox)
        renderButtons()
        console.log(topics)
    })
    
    renderButtons()
    

        $(document).on('click', '.topics', function(){
            var x = $(this).data('search')
            console.log(x)
    
            var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + x + '&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0&limit=10' 
            console.log(queryURL)
    
            $.ajax({url:queryURL, 
                method: 'GET'})
                .done(function(response){
                    console.log(response)
                    for (var i=0; i < response.data.length; i++){
                        $('#gifs-go-here').prepend('<p>Rating: ' + response.data[i].rating+'<p>')    
                        $('#gifs-go-here').prepend('<img src=' + response.data[i].images.downsized.url + '>')
                    }
                })
                    
                })
                })