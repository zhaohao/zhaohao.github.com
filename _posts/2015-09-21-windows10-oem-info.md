---
layout: post
title: Windows10手动添加OEM信息
date: 2015-09-21 09:17
author: zhaohao
comments: true
categories: [weblog]
---
<a href="/Resource/oemlogo256px.png"><img class="alignnone size-full wp-image-935" src="/Resource/oemlogo256px.png" alt="oemlogo256px" width="256" height="100" /></a>

<pre><code>&lt;li&gt;第一步：选取OEM logo素材，调整尺寸为方形（必须，否则图片无法正确显示），为了保证logo原始比例可以用画布留白的方式调整，保存为 oemlogo.bmp 。&lt;/li&gt;

&lt;li&gt;第二步：将 oemlogo.bmp 保存到目录 C:\Windows\System32\oobe ，需要管理员权限。&lt;/li&gt;

&lt;li&gt;第三步：进注册表编辑器找到注册表项 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation ，没有则新建。在此项中新建名为 Manufacturer 和 Model 的字符串项，值分别对应制造商和型号。新建名为 Logo 的可扩充字符串项，值对应OEM LOGO路径 C:\Windows\System32\oobe\oemlogo.bmp &lt;/li&gt;

&lt;li&gt;第四步：退出注册表，进电脑属性看效果。&lt;/li&gt;
</code></pre>

<a href="/Resource/2015-09-21-sysinfo.png"><img src="/Resource/2015-09-21-sysinfo.png" alt="2015-09-21-sysinfo" width="710" height="519" class="alignnone size-full wp-image-942" /></a>
