---
layout: post
title: IPV6设置整理
date: 2010-08-28 12:47
author: zhaohao
comments: true
categories: [weblog]
---
<table style="border-collapse: collapse;" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr style="height: 13.7pt;">
<td style="width: 426.1pt; border: 1pt solid windowtext; background: none repeat scroll 0% 0% #17365d; padding: 0cm 5.4pt; height: 13.7pt;" valign="top" width="568"><span lang="EN-US" style="font-size: 11pt; font-family: 'Lucida Console'; color: white;">CMD :</span></td>
</tr>
<tr>
<td style="width: 426.1pt; border-width: medium 1pt 1pt; border-style: none solid solid; border-color: -moz-use-text-color windowtext windowtext; background: none repeat scroll 0% 0% #17365d; padding: 0cm 5.4pt;" valign="top" width="568"><span lang="EN-US" style="font-size: 11pt; font-family: 'Lucida Console'; color: white;">C:UsersAcui&gt;netsh
netsh&gt;int
netsh interface&gt;ipv6
netsh interface ipv6&gt;isatap
netsh interface ipv6 isatap&gt;set route <a href="http://isatap.sysu.edu.cn/">isatap.sysu.edu.cn</a>
netsh interface ipv6 isatap&gt;set state enabled
netsh interface ipv6 isatap&gt;quit</span></td>
</tr>
</tbody>
</table>

可用ISATAP IPV6 ROUTER
<a href="http://isatap.sysu.edu.cn/">isatap.sysu.edu.cn</a> / <a href="http://isatap.tsinghua.edu.cn/">isatap.tsinghua.edu.cn</a> / <a href="http://isatap.shu.edu.cn/">isatap.shu.edu.cn</a>
<a href="http://isatap.hust.edu.cn/">isatap.hust.edu.cn</a> /  <a href="http://isatap.sjtu.edu.cn/">isatap.sjtu.edu.cn</a> / <a href="http://isatap.scu.edu.cn/">isatap.scu.edu.cn</a>

附：网络上有人整理的一些网站IPV6地址
#Google和各种网站的IPv6服务hosts #利用IPv6技术翻墙，保证Google服务可用
#发布地址：<a href="http://docs.google.com/View?id=dfkdmxnt_61d9ck9ffq">http://docs.google.com/View?id=dfkdmxnt_61d9ck9ffq</a>
#共享链接：<a href="http://docs.google.com/Doc?docid=0ARhAbsvps1PlZGZrZG14bnRfNjFkOWNrOWZmcQ&amp;hl=zh_CN">http://docs.google.com/Doc?docid=0ARhAbsvps1PlZGZrZG14bnRfNjFkOWNrOWZmcQ&amp;hl=zh_CN</a>
#表格版的host列表地址：<a href="http://spreadsheets.google.com/ccc?key=0AhhAbsvps1PldEVXVzBkR3hBaWFnbEQ0OWIwMU5ycmc&amp;hl=zh_CN">http://spreadsheets.google.com/ccc?key=0AhhAbsvps1PldEVXVzBkR3hBaWFnbEQ0OWIwMU5ycmc&amp;hl=zh_CN</a>
