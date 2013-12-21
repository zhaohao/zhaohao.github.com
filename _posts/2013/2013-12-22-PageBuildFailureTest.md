---
layout: post
title: PageBuildFailureTest
categories:
- Weblog
tags:
- ME
---
Hello World!   
Goodbye Cruel World!  
**********
2013-12-22-PageBuildFailureTest
自从“拖延症”这篇日志正常发布之后，无数次的更新都被邮件通知：    
[zhaohao.github.com] Page build failure    
The page build failed with the following error:    
page build failed    
搜索网络相关信息，修改可能影响到的问题都无果，今天再次尝试，Google搜索后在[这个链接](http://stackoverflow.com/questions/15131526/page-build-failed-when-pushing-a-new-blog-post-to-github)上发现可能是categories处出了问题，尝试删除了categories里面标签云相关的东西，不报希望又有一丝希望的再试了一次[Link](https://github.com/zhaohao/zhaohao.github.com/commit/3c88365a51f4f30285a9c55992065b013d8d2a86)，没想到新添加的日志编译通过了。后面要看一下原因。
