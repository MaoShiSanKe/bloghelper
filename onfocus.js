// 浏览器标题  快回来!!! 终于回来了
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'o(〃＾▽＾〃)o 你去哪了?!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(✿◠‿◠) 你肥来啦!';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
