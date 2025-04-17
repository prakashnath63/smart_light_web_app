$(document).ready(function(){
    console.log("It is time to start javascript program");
    //triggers click event onClick() of red button
    $("#color_changer_red").click(function()
    { console.log("changing color red on led");
    //alert("changing color red on led");
    change_led_color("red", "1"); });
    //triggers click event onClick() of Green button
    $("#color_changer_green").click(function(){
    //alert("changing color green on led");
    change_led_color("green", "1"); });
    //triggers click event onClick() of Blue button
    $("#color_changer_blue").click(function(){
    //alert("changing color blue on led");
    change_led_color("blue", "1"); });
    //triggers click event onClick() of LED Off button
    $("#color_changer_off").click(function(){
    //alert("changing color red on led");
    change_led_color("red", "0"); });
    //trigger smart light
    $("#smart_light_power_on").click(function()
    {
    console.log("Turning LED power on");
    var color = $("#color");
    change_led_color(color.val(), "1");
    });
    $("#smart_light_power_off").click(function()
    {
    console.log("Turning LED power on");
    var color = $("#color");
    change_led_color(color.val(), "0");
    });
    });
    function change_led_color(color, power){
    var settings = {
    "url": "https://wizklub.com/api/secured/wiziot-poll-request/",
    "method": "POST",
    "dataType": "json",
    "contentType": "application/json; charset=utf-8",
    "headers": {"Api-Access-Key": "RXFNUXZKNDNHWXoxelFRYl9LbXU=", "Api-Secret-Key":
    "SUlsZkN4akpwbG5ycXpLYmZ0TGl5YldmZTE4dERWd3RfUQ==", "Content-Type":
    "application/json"},
    
    "data": JSON.stringify({"mode": "WRITE", "device_id": "sc12002", "source": "API",
    "api": "smartlight", "type": "strip_switch", "color": color, "power": power}),
    };
    console.log(power, color);
    $.ajax(settings).done(function (response) {
    console.log(response);
    });
    }