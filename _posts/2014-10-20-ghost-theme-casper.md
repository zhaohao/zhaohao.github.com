---
layout: post
title: 修改Ghost博客Casper主题，配置时区
date: 2014-10-20 17:10
author: zhaohao
comments: true
categories: [weblog]
---
1.修改主题配色。

2.将blog-logo img居中显示，添加hover延时1.5秒旋转360度效果。

3.所有页面左下角添加 到顶部、到底部 按钮。

4.文章页面根据 Ghost Form中Justin Yek的[方法](https://gist.github.com/jyek/5141bc6166b01419d43f)添加 上一篇、下一篇 文章按钮。   

以上两项的JS文件合并到goto.js加以调用。

5.整体页面设置灰色背景色、添加加亮的纹理背景图片。再增加了一层透明png小图片的overlay遮罩。(__在去掉和不去之间徘徊__)

6.顶部main-header使用CSS3的双背景图片添加一层透明png的遮罩。在screen.css中设置header双层背景，同Ghost后台设置顶部图片有冲突，screen.css中的设置被后台背景图片覆盖以致无效。在后台中将顶部背景图片Blog Cover删除，又触发调用了no-cover css，使得screen.css中的背景依然无效。因此又在index.hbs中将 <code><header class="main-header {{#if @blog.cover}}" style="background-image: url({{@blog.cover}}){{else}}no-cover{{/if}}"></code> 删掉no-cover，防止调用no-cover css。

7.未解决时间问题：__发布文章时间同页面显示时间相差大约13个小时（未精确查对）。__ 感觉同时区有关，非常困惑。Ghost后台设置中又没有时区相关的设定，~~论坛中也未看到相关条目~~。待解决。

__Update__：搜索Ghost论坛，提到Ghost中暂时未有时区Timezone相关设置，Ghost调用的是系统时区，本博客使用的是DigitalOcean的新加坡VPS,SSH命令中<code>date</code>显示<code>Mon Oct 20 03:43:35 EDT 2014</code>，美国东部时间。这样时差的问题就明确了。使用命令<code>root@zhaohao:~# sudo dpkg-reconfigure tzdata</code>设置时区为<code>Asia/Shanghai</code>，__时间__ 问题 __部分__ 解决。

__Update__：调整模版在文章页面显示时间，精确到分钟：<code>{{date format="dddd,YYYY-MM-DD,HH:MM"}}</code>结果本博客显示的 __分钟__ 数字同实际发布时间仍旧相差几十分钟。甚是怪异。

__Update__：去掉整体[body]的png遮罩。

@2014-10-20 16:40 CST
