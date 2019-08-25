$(document).ready(function() {

    //create starting array
    var topics = ["Dylan Rieder", "Chris Cole", "Michael Vick", "Allen Iverson",
     "Kobe Bryant","Tim Duncan", 'Nyjah Huston'];
    
    //function to create initial buttons
    function renderButtons(){
        $("#buttons-go-here").empty(); //so there won't be repeat buttons
        //loop through array
        for (var i = 0; i < topics.length; i++){
            //dynamically create buttons for all items in array
            var a = $("<button>");
            //add class
            a.addClass("topics");
            //add attribute & value of array item at index i
            a.attr("data-search", topics[i]);
            //button's text
            a.text(topics[i]);
            //inserting buttons into HTML
            $("#buttons-go-here").append(a);
        }
    
    }
    //adding new buttons
    $("#add-button").submit(function(event){ 
    event.preventDefault();
        //grab html from what is typed into box
        var textBox = $("#input").val().trim();
        topics.push(textBox);
        renderButtons();
        console.log(topics);
    });
    
    renderButtons();
    
    //function gets the GIFs when a button is clicked
        $(document).on("click", ".topics", function(){
            var x = $(this).data("search");
            console.log(x);
    
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=RPaK9Z4sSu8wS60vAUOVtsfL2gAI98u0&limit=10"; 
            console.log(queryURL);
    
            $.ajax({url:queryURL, 
                method: "GET"})
                .done(function(response){
                    console.log(response);
                    for (var i=0; i < response.data.length; i++){
                        $("#gifs-go-here").prepend("<p>Rating: " + response.data[i].rating+"<p>");
                        $("#gifs-go-here").prepend("<img src='" + response.data[i].images.downsized.url + "'>");
                    }
                })
                    
                })});