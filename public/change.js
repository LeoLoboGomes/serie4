$(document).ready(function(){
    $("button").on('click', function(e){
        e.preventDefault();

        $.getJSON("newtext.json", function(result){
            $.each(result, function(i, field){
                $("div").empty();
                $("div").append(field);
                
            });
        });

        //$("div").load("test.txt");
        /*var data = $('input[name=quote]').val();
        $.ajax({
            type: 'post',
            url: "/ajax",
            data: data,
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });*/
    });
});