function loadMeizi(){
    $(function(){
        $("<div id=\"live2d-widget\">\n" +
            "    <canvas id=\"live2dcanvas\" width=\"300\" height=\"600\" style=\"position: fixed; opacity: 0.7; right: 0px; bottom: -20px; z-index: 99999; pointer-events: none; border: 1px dashed rgb(204, 204, 204);\">\n" +
            "    </canvas>\n" +
            "</div>").appendTo("body");
        $("<link rel='stylesheet' href='bundle-SimpleMemory-mobile.css'>").appendTo("head");
        $("<link rel='stylesheet' href='blog-common.css'>").appendTo("head");
        $("<link rel='stylesheet' href='210495.css'>").appendTo("head");
        $("<script src='L2Dwidget.0.min.js'>"+"</script>").appendTo("body");
        $("<script src='L2Dwidget.min.js'></script>").appendTo("body");
        L2Dwidget.init();
    });
}
loadMeizi();
