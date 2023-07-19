window.onload = function()
{
    const secNiddle = document.querySelector(".sec-niddle"),
    minNiddle = document.querySelector(".min-niddle"),
    hourNiddle = document.querySelector(".hour-niddle");

    function updateNiddleLocation()
    {
        var date = new Date(),
        deg;

        deg = (date.getSeconds()+(date.getMilliseconds()/1000))*6;
        secNiddle.style.transform = "rotate("+deg+"deg)";

        deg = ((date.getMinutes()*60)+date.getSeconds()+(date.getMilliseconds()/1000))*0.1;
        minNiddle.style.transform = "rotate("+deg+"deg)";

        deg = date.getHours();
        deg = deg > 12 ? deg-12 : deg;
        deg = ((deg*3600)+(date.getMinutes()*60)+date.getSeconds()+(date.getMilliseconds()/1000))*0.0083;
        hourNiddle.style.transform = "rotate("+deg+"deg)";

        requestAnimationFrame(updateNiddleLocation);
    }

    updateNiddleLocation();
}

/* Code Completed */