window.onload = function() {
    setHtmlFontSize();

    function setHtmlFontSize() {
        // 设计稿宽度/机器宽度 = 默认大小/fontsize
        //fontsize = 默认大小 *机器宽度 /设计稿宽度

        var baseval = 100;

        var pageWidth = 640;

        var screenWidth = document.querySelector("html").offsetWidth;

        var fontsize = baseval * screenWidth / pageWidth;

        document.querySelector("html").style.fontSize = fontsize + "px";
        console.log(fontsize);

    }



    window.onresize = function() {

        setHtmlFontSize();

    }

}