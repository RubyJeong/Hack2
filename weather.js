$(document).ready(function() {
    var city = "Toronto";
    var searchtext =
        "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
        city +
        "') and u='c'";
    //change city variable dynamically as required
    $.getJSON(
        "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
    ).success(function(data) {
        console.log(data);

        $("#temp").html(
            "Temperature in " +
            city +
            " is " +
            data.query.results.channel.item.condition.temp +
            "°C"
        );
        $("#code").html(
            "Weather condition in " +
            city +
            " is " +
            data.query.results.channel.item.condition.text
        );
    });
});