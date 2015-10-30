---
layout: post
title: Windows10手动添加OEM信息
date: 2015-09-21 09:17
author: stardust
comments: true
categories: [Weblog]
---
<a href="/wp-content/uploads/2015/09/oemlogo256px.png"><img class="alignnone size-full wp-image-935" src="/wp-content/uploads/2015/09/oemlogo256px.png" alt="oemlogo256px" width="256" height="100" /></a>

	<li>第一步：选取OEM logo素材，调整尺寸为方形（必须，否则图片无法正确显示），为了保证logo原始比例可以用画布留白的方式调整，保存为 oemlogo.bmp 。</li>

	<li>第二步：将 oemlogo.bmp 保存到目录 C:WindowsSystem32oobe ，需要管理员权限。</li>

	<li>第三步：进注册表编辑器找到注册表项 HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionOEMInformation ，没有则新建。在此项中新建名为 Manufacturer 和 Model 的字符串项，值分别对应制造商和型号。新建名为 Logo 的可扩充字符串项，值对应OEM LOGO路径 C:WindowsSystem32oobeoemlogo.bmp </li>

	<li>第四步：退出注册表，进电脑属性看效果。</li>
<a href="/wp-content/uploads/2015/09/2015-09-21-sysinfo.png"><img src="/wp-content/uploads/2015/09/2015-09-21-sysinfo.png" alt="2015-09-21-sysinfo" width="710" height="519" class="alignnone size-full wp-image-942" /></a>
<hr>
导出的注册表备份文件实例如下：
<pre>
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionOEMInformation]
"Manufacturer"="Lenovo"
"Model"="ThinkStation"
"Logo"=hex(2):43,00,3a,00,5c,00,57,00,69,00,6e,00,64,00,6f,00,77,00,73,00,5c,
  00,73,00,79,00,73,00,74,00,65,00,6d,00,33,00,32,00,5c,00,6f,00,6f,00,62,00,
  65,00,5c,00,6f,00,65,00,6d,00,6c,00,6f,00,67,00,6f,00,2e,00,62,00,6d,00,70,
  00,00,00
</pre>

