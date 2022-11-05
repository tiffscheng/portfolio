var $j = jQuery.noConflict();
$j(document).ready(function () {
    var modalSelect = $j(this).attr("data-target");
    $j(".btn").click(function () {
        $j(modalSelect).modal('show');
    });
    $j(".replay-jedi").click(function () {
        var timestamp = new Date().getTime();
        $j("#jedi-gif").find('img').attr('src', 'resources/images/jedi-logo.gif' + '?' + timestamp);
    });
    $j(".replay-cam").click(function () {
        var timestamp = new Date().getTime();
        $j("#cam-gif").find('img').attr('src', 'resources/images/camera.gif' + '?' + timestamp);
    });
});
