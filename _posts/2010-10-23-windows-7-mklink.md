---
layout: post
title: Windows 7 Mklink
date: 2010-10-23 20:50
author: zhaohao
comments: true
categories: [weblog]
---
C:UsersAcui&gt;mklink<br />
创建符号链接。<br />
MKLINK [[/D] | [/H] | [/J]] Link Target<br />
/D 创建目录符号链接。默认为文件符号链接。<br />
/H 创建硬链接，而不是符号链接。<br />
/J 创建目录联接。<br />
Link 指定新的符号链接名称。<br />
Target 指定新链接引用的路径<br />
C:UsersAcui&gt;mklink /d C:UsersAcuiAppDataLocalgoogle E:FileTreeAppDatalocalGoogle<br />
为 C:UsersAcuiAppDataLocalgoogle &lt;&lt;===&gt;&gt; E:FileTreeAppDatalocalGoogle 创建的符号链接
