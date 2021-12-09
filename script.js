$(document).ready(function () {

    var $buttons = $(".btn_wapper button");
    $buttons.on("click", sectionActive );

    function sectionActive() {
        var $this = $(this);
        $this.addClass("btn_active").siblings().removeClass("btn_active");
    }

});
