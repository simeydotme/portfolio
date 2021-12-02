$(document).ready(function () {

    var clickAbout = $('.btn_about');
    var clickExperience = $('.btn_experience');
    var clickSkills = $('.btn_skills');
    var clickWeb = $('.btn_web');
    var clickDesign = $('.btn_design');

    var click_array = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];

    clickAbout.on("click", sectionActive);
    clickExperience.on("click", sectionActive);
    clickSkills.on("click", sectionActive);
    clickWeb.on("click", sectionActive);
    clickDesign.on("click", sectionActive);

    function sectionActive() {
        var item = $(this);
        item.addClass("btn_active");
        click_array.splice((click_array.indexOf("#" + this.id)), 1);
        for (var i = 0; i < click_array.length; i++) {
            click_array.forEach(function (e) {
                $(e).removeClass("btn_active");
            })
        }
        click_array = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];
    }

});