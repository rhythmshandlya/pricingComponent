$(".swi").click(function () { 
    $(".btnMY").toggleClass("btnoff");
    $(".swi").toggleClass("btnoff_2");
});

var slider = document.getElementById("myRange");
$(".price").html(slider.value);
$(".pageViews").html("500k");

/*
10K pageviews / $8 per month
50K pageviews / $12 per month
100K pageviews / $16 per month
500k pageviews / $24 per month
1M pageviews / $36 per month
*/
slider.oninput = function () { 
    let x = slider.value;
    
    if (x == 8) {
        slider.value = 8;
        $(".pageViews").html("10k ");
        $(".price").html("8");
    }
    else if (x > 8 && x <= 12) {
        slider.value = 12;
        $(".pageViews").html("50k ");
        $(".price").html("12");
    }
    else if (x > 12 && x <= 16) {
        slider.value = 16;
        $(".pageViews").html("100k ");
        $(".price").html("16");
    }
    else if (x > 16 && x <= 24) {
        slider.value = 24;
        $(".pageViews").html("500k ");
        $(".price").html("24");
    }
    else {
        slider.value = 36;
        $(".pageViews").html("1M ");
        $(".price").html("36");
    }
}
$(".startTrial").click(function () { 
    let totalAmount = 0;
    if ($(".btnMY").hasClass("btnoff")) {
        totalAmount = 0.75 * (12 * slider.value);
    }
    else {
        totalAmount = slider.value;
    }
    alert("Proceed to pay $"+totalAmount);
});