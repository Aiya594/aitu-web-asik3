$(document).ready(function () {
    console.log("jQuery is ready!"); // Task 0 test message

    // Task 1
    $("#theme-toggle").click(function () {
        const btn = $("#theme-toggle");

        const body = $("body");

        if (body.css("background-color") === "rgb(232, 216, 196)") {
            body.css({
                "background-color": "#561C24",
                "color": "#ffffffff"
            });

            $("header, footer, .contact").css({
                "background-color": "#333",
                "color": "#ffffffff"
            });

            $(".sidebar, .main").css({
                "background-color": "#222",
                "color": "#ffffffff"
            });

            btn.text("Light Theme");
        } else {
            body.css({
                "background-color": "#E8D8C4",
                "color": "#561C24"
            });

            $("header, footer").css({
                "background-color": "#561C24",
                "color": "#E8D8C4"
            });

            $(".sidebar, .main, .contact").css({
                "background-color": "#E8D8C4",
                "color": "#561C24",
                "border-color": "#561C24"
            });

            btn.text("Dark Theme");
        }
    });



    // ================= PART 2: jQuery Effects =================

    // Task 2: Visibility
    $("#hideBtn").click(function () {
        $("#visText").hide();
    });
    $("#showBtn").click(function () {
        $("#visText").show();
    });
    $("#toggleBtn").click(function () {
        $("#visText").toggle();
    });

    // Task 3: Fade
    $("#fadeOutBtn").click(function () {
        $("#fadeImg").fadeOut(1000)
    });
    $("#fadeInBtn").click(function () {
        $("#fadeImg").fadeIn(1000)
    });
    $("#fadeToggleBtn").click(function () {
        $("#fadeImg").fadeToggle(1000)
    });

    // Task 4: Slide

    $("#slideToggleBtn").click(function () {
        $("#cards").slideToggle(600)
    });
    $("#slideUpBtn").click(function () {
        $("#cards").slideUp(600)
    });
    $("#slideDownBtn").click(function () {
        $("#cards").slideDown(600)
    });

    // Task 5: Add & Remove
    $("#addItem").click(function () {
        $("#itemList").append("<li>New Task</li>");
    });
    $("#removeItem").click(function () {
        $("#itemList li:last").remove();
    });


    // Task 6: Modifying Attributes
    $("#changeSrc").click(function () {
        if ($("#changeImg").attr("src").includes("photos/girlies.jpg")) {
            $("#changeImg").attr("src", "photos/why.jpg");
        } else {
            $("#changeImg").attr("src", "photos/girlies.jpg")
        }

    });

    // Task 7: Form Interaction
    $("#contactName").on("input", function () {
        $("#previewName").text($(this).val());
    });

    $("#contactEmail").on("input", function () {
        $("#previewEmail").text($(this).val());
    });


    // Task 8–10: Animate
    $("#animateBtn").click(function () {
        $("#box").animate({ left: "200px", width: "150px", height: "150px" }, 1000);
    });

    $("#sequenceBtn").click(function () {
        $("#box")
            .animate({ left: "200px" }, 800)
            .animate({ top: "100px" }, 800)
            .animate({ width: "50px", height: "50px" }, 800)
            .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 800);
    });

    $("#combinedBtn").click(function () {
        $("#box").animate(
            {
                left: "150px",
                opacity: 0.5,
                width: "120px",
                height: "120px",
            },
            1200,
            () => {
                $("#box").animate({ opacity: 1, left: "0px" }, 800);
            }
        );
    });



});
