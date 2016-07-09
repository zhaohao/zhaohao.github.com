---
layout: post
title: ubuntu VPS安装Nginx并配置Ghost博客
date: 2014-11-18 16:31
author: zhaohao
comments: true
categories: [weblog]
---
• 安装 nginx

<pre>$ sudo apt-get install nginx</pre>

这个命令将会安装nginx并且设定好所有必需的目录和基础配置。

• 配置你的站点
○ 在 <code>/etc/nginx/sites-available</code> 创建一个 <code>ghost.conf</code> 文件。
○ 使用文本编辑器打开这个文件 (e.g. sudo nano /etc/nginx/sites-available/ghost.conf) 把以下内容复制进这个文件：

<pre>server {
    listen 80;
    server_name example.com;

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:2368;
    }
}    
</pre>

○ 将 <code>server_name</code> 的值改为你的域名。
○ 把你的配置文件软链接到 <code>sites-enabled</code> 文件夹下:

<pre>$ sudo ln -s /etc/nginx/sites-available/ghost.conf /etc/nginx/sites-enabled/ghost.conf</pre>

○ 重启 nginx

<pre>$ sudo service nginx restart</pre>
