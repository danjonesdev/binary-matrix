$(function () {

    //========================= GLOBAL VARIABLES =========================

    var PALARRAY = ['binary', 'bold', 'normal', 'black', 'gray'];

    //========================= PAGE LOAD / ANIMATIONS =========================

    //fade body in
    $("body").fadeIn(300);
    animatePalette()

    //animates colour palette items
    function animatePalette() {

        //sets palette positions
        $('.colour-pal').animate({ bottom: '-35px' }, 0);

        //animates palette
        var paletteWait = 500;
        setTimeout(function () {
            $(".colour-pal").animate({
                bottom: '25px'
            }, 800, "easeInOutBack");
        }, paletteWait);

        //sets colours positions
        $(".colour-pal--item").each(function (i, obj) {
            $('#' + obj.id + '').animate({ top: '50px' }, 0);
        });

        //animates colours
        setTimeout(function () {
            $("#colour-pal-1").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 200);
        setTimeout(function () {
            $("#colour-pal-2").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 350);
        setTimeout(function () {
            $("#colour-pal-3").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 500);
        setTimeout(function () {
            $("#colour-pal-4").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 650);
        setTimeout(function () {
            $("#colour-pal-5").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 800);
        setTimeout(function () {
            $("#colour-pal-6").animate({ top: '0px' }, 800, "easeInOutQuart");
        }, paletteWait + 950);

        //fades in palette text
        setTimeout(function () {
            $(".palette-text").fadeIn(1000);
        }, paletteWait + 1850);
    }

    //========================= BINARY MATRIX =========================

    //creates binary items inside matrix container
    for (i = 0; i < 189; i++) {
        $('#binaryMatrix').append('<div id="binary-item-' + i + '" class="binary">' + '0' + '</div>');
    }

    //loops the binary items
    $("#binaryMatrix .binary").each(function (i, obj) {

        setInterval(function () {
            var random = PALARRAY[Math.floor(Math.random() * PALARRAY.length)],
                item = $('#' + obj.id + '');

            switch (random) {
                case "binary":
                    item["0"].innerText = (item["0"].innerText == '0') ? '1' : '0';
                    break;
                case "bold":
                    item.css("font-weight", "bolder");
                    break;
                case "normal":
                    item.css("font-weight", "normal");
                    break;
                case "black":
                    item.css("color", "black");
                    break;
                case "gray":
                    item.css("color", "#575757");
                    break
                case "blue":
                    item.css("color", "#4F94CD");
                    break
                case "purple":
                    item.css("color", "purple");
                    break;
                case "red":
                    item.css("color", "red");
                    break;
                case "green":
                    item.css("color", "green");
                    break
                case "orange":
                    item.css("color", "darkorange");
                    break;
                case "yellow":
                    item.css("color", "#e6e600");
                    break;
            }

        }, Math.floor(Math.random() * (1000 - 200 + 1) + 200));
    });

    //========================= COLOUR PALETTE =========================

    //adds colours to array
    $("#colour-pal .colour-pal--item").click(function () {
        var palItem = $('#' + this.id + '');
        switch (this.id) {
            case "colour-pal-1":
                if (PALARRAY.includes("blue")) {
                    PALARRAY.pop("blue");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("blue");
                    palItem.css("opacity", "1");
                }
                break;
            case "colour-pal-2":
                if (PALARRAY.includes("purple")) {
                    PALARRAY.pop("purple");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("purple");
                    palItem.css("opacity", "1");
                }
                break;
            case "colour-pal-3":
                if (PALARRAY.includes("red")) {
                    PALARRAY.pop("red");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("red");
                    palItem.css("opacity", "1");
                }
                break;
            case "colour-pal-4":
                if (PALARRAY.includes("green")) {
                    PALARRAY.pop("green");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("green");
                    palItem.css("opacity", "1");
                }
                break;
            case "colour-pal-5":
                if (PALARRAY.includes("orange")) {
                    PALARRAY.pop("orange");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("orange");
                    palItem.css("opacity", "1");
                }
                break;
            case "colour-pal-6":
                if (PALARRAY.includes("yellow")) {
                    PALARRAY.pop("yellow");
                    palItem.css("opacity", ".4");
                } else {
                    PALARRAY.push("yellow");
                    palItem.css("opacity", "1");
                }
                break;
        }
    });

});
