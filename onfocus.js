// 浏览器切换标题 

var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://mssk.site/wp-content/uploads/2024/09/Niconiconi.webp");
        document.title = 'o(〃＾▽＾〃)o 你去哪了?!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://mssk.site/wp-content/uploads/2024/09/Niconiconi.webp");
        document.title = '(✿◠‿◠) 你肥来啦!';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});