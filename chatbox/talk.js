
/*
* BotUI回复配置
*/
var botui = new BotUI("kelecnbot");
botui.message.bot({
   delay: 200,
   content: "Hi，小伙伴👋👋👋"
}).then(function() {
   return botui.message.bot({
       delay: 1000,
       content: "我是Mssk！"
   })
}).then(function() {
   return botui.message.bot({
       delay: 1000,
       content: "是一个常年把VPS干崩的...咳咳！"
   })
}).then(function(){
   // 限制递归的数量：
   return resCircle(8)
});


// 异常对话相关的递归函数
// numCircle可以指定递归的最大次数。
var resCircle = function(numCircle) {

   // 一个关于消极态度的集合
   var negEva = ["小姐姐呐？ 🙄","我劝你善良！ 😆","搞事情是吧？ 😈","哇酷哇酷！ 😋","来点涩图！😍","别挡着我看 😆"]; 
   var indexNegEva = Math.floor((Math.random()*negEva.length)); 
   var negText = negEva[indexNegEva];

   // 一个关于消极态度response的集合
   var negResponse = ["本想介绍小姐姐给你认识，溜了溜了", "不要涩图了吗？", "不好意思，小姐姐归我了！", "哎，小姐姐只能独自伤心了。"]; 
   var indexNegResponse = Math.floor((Math.random()*negResponse.length)); 
   var negResponseText = negResponse[indexNegResponse];

   // 随机图链接
   var randPic = [
       "https://mssk.site/wp-content/uploads/2024/08/cropped-1.png",
	   "https://mssk.site/wp-content/uploads/2024/09/Niconiconi.webp",
   ]; 
   var indexrandPic = Math.floor((Math.random()*randPic.length)); 
   var targetURL= randPic[indexrandPic];

   botui.action.button({
       delay: 1500,
       action: [{
           text: "牛逼呀！ 😃",
           value: "and"
       },
       {
           text: negText,
           value: "gg"
       }]
   }).then(function(res){
       if (res.value == "and") {
           botui.message.bot({
               delay: 1500,
               content: "😘😘😘"
           }).then(function(){
               other()
           })
       } else if (numCircle === 0) {
           botui.message.bot({
               delay: 1500,
               content: "好了，不玩啦！你甚至不想称赞我哪怕一下...哎！"
           }).then(function(){
               other()
           })  
       } else {
           botui.message.bot({
               // loading: true,
               type: 'html',
               delay: 1500,
               content: negResponseText + '<br /><img src="' + targetURL + '" width="500">',
		cssClass: 'botui-no-icon'
           }).then(function() {
               var numCircle2 = numCircle - 1
                console.log(numCircle)
		   console.log('Image URL:', targetURL);
console.log('HTML Content:', negResponseText + '<br /><img src="' + targetURL + '" width="500">');

               return resCircle(numCircle2)
           }) 
       }
   })
}

// 正常对话信息
var other = function() {
   // botui.message.bot({
   //     delay: 1500,
   //     content: "😘😘😘"
   // }).then(function() {
   //     return 
   botui.message.bot({
           delay: 1500,
           content: "我喜欢折腾新事物和思考人生 ㄟ(▔,▔)ㄏ "
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "略懂一些编程，专攻G"
       })
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "喜欢摸鱼..."
       })
   }).then(function() {
       return botui.message.bot({
           delay: 1500,
           content: "目前正在如何悄悄摸鱼的道路上艰难求索..."
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "为什么叫 Mssk 呢？ 🤔",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "因为我有许多事都是卯时三刻才想明白的"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "也就将这点保留了(～￣▽￣)～ "
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "为什么想要搭建此网站呢？(ง •_•)ง",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "最开始是没有做blog的念头的，因为论坛维护就够我消磨时间了"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "后来凌晨看着电脑里的一堆笔记，忽然就想明白了"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "与其像VPS一样吃灰何不直接利用起来呢"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "您未来有什么计划吗？",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "更多地关注时事、前沿和技术。"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "更加爱家人、爱世界！"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "还有呢？（暗示）",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "对对，光顾着说自己了 (～￣▽￣)～ "
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "祝您身体健康、心想事成、前程似锦喽！"
       })
   }).then(function() {
       return botui.action.button({
           delay: 1500,
           action: [{
               text: "谢谢哈！那么如何支持您的工作呢？妈妈教育我不能白嫖...",
               value: "next"
           }]
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "常来看看就是我最大的荣幸！"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: "点击下方的小猫咪可以捐赠~"
       })
   }).then(function(res) {
       return botui.message.bot({
           delay: 1500,
           content: '再次感谢！<br /><img src= "https://bensz.onmicrosoft.cn/images/dlddw.gif" width="500">'
       })
   });
}
