---
layout: post
title: 安装windows Fonts到ubuntu
date: 2011-04-06 13:40
author: zhaohao
comments: true
categories: [weblog]
---
1 拷贝微软字体到桌面的windows7fonts文件：
2 sudo gnome-open /usr/share/fonts ———————打开fonts文件夹
3 拷贝windows7fonts到文件夹内 ———————直接拉进去就可以了 if 自动配置__&gt; ok,stop here.
OR_________&gt;&gt;
sudo cd /usr/share/fonts——————进入字体文件夹
4 sudo chmod 755 windows7fonts -R ——————权限设置

5 ：建立字体缓存
1） sudo mkfontscale
2）sudo mkfontdir
3）sudo fc-cache -fv
————————————————————————————————————————————————————————
原文链接：<a href="http://forum.ubuntu.org.cn/viewtopic.php?f=8&amp;t=196512&amp;sid=464293325ffc611865972be3c46ab707&amp;start=0">http://forum.ubuntu.org.cn/viewtopic.php?f=8&amp;t=196512&amp;sid=464293325ffc611865972be3c46ab707&amp;start=0</a>
最后由 wowoto 编辑于 2009-11-26 4:42，总共编辑了 10 次
