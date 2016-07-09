---
layout: post
title: 在DigitalOcean的Ubuntu VPS上安装Ghost
date: 2014-10-24 16:14
author: zhaohao
comments: true
categories: [weblog]
---
Ghost博客系统刚刚发布的时候就在官方站点注册了一个尝试，记得最初还是以Ghost.io作为官方主域名的。
很快过了免费试用期，在官方站点的使用也随之结束。

在PC上也安装了本地的Ghost博客系统，对模版还有其它一些功能有了进一步的了解。

前面还冲了$5.0加送了$10在Linode上开了VPS，选的最便宜的0.015/hr to $10/mo，运行了大概一周时间,在上面折腾了一次Ghost的安装，都还顺利，因为有Bluehost的Wordpress博客，所以也就没有再继续折腾，在耗费了$2.79之后就删掉了VPS,上面的Ghost也随着永远的消失掉。

几天前又在DigitalOcean上开了个VPS,DigitalOcean上的更简单彻底，新建Droplet的时候直接可选配置好Ghost的系统，不过是64位的Ubuntu，想着内存总共才512M，想把系统换为32位的试下，DigitalOcean后台里有更换内核的选项，不过没有使用，不知道好不好用。

想着再重温一下手工安装Ghost的步骤，就新开了个空白的Ubuntu 12 32位的系统，结果过程中屡屡出问题，无法正确安装，想着可能是Node.js没有装好的问题、可能XX的问题。对linux又不熟，就再重置换Ubuntu14 32位的系统，结果一路丝滑顺畅。

<hr />

本文记录了在Ubuntu 14.04 x32系统上安装<a href="http://ghost.org/">Ghost</a>博客程序的过程。已经在DigitalOcean的VPS上创建了Ubuntu的Droplet，并且本域名zhao.im已经指向服务器128.199.174.200。

下述步骤在自用DigitalOcean VPS上验证通过。
VPS配置：

<pre>512MB RAM 20GB SSD Disk 新加坡1号机房 Ubuntu14.04 x32系统
</pre>

<strong>1.安装Node</strong>
通过SSH登录你的服务器，运行下列命令以更新Ubuntu系统：

<pre>sudo apt-get update
sudo apt-get upgrade
sudo aptitude install build-essential zip    
</pre>

运行下列命令以访问<a href="http://nodejs.org/">Nodejs.org</a> 下载最新版本的Node.js包：

<pre>wget http://nodejs.org/dist/latest/node-v0.10.32.tar.gz
tar -zxvf node-v0.10.32.tar.gz
cd node-v0.10.32
./configure
make
sudo make install    
</pre>

上述安装Node.js的步骤将会耗费一段时间，请耐心等待。

<strong>2.安装Ghost</strong>

通过下列命令下载并安装Ghost（假定安装在目录 <code>/var/www</code> )：

<pre>sudo mkdir -p /var/www
cd /var/www
sudo wget https://ghost.org/zip/ghost-latest.zip
sudo unzip ghost-latest.zip
sudo npm install    
</pre>

此时已经可以通过在 <code>/var/www</code> 目录下运行 <code>npm start</code> 启动Ghost。然后可以访问<a href="http://128.199.174.200:2368/">http://128.199.174.200:2368</a> 查看ghost是否运行正常。

<strong>备注</strong>：此步骤中的npm install在ubuntu12.04 32位系统平台下报错，安装不成功，转换为Ubuntu14.04 32位系统，正确安装。

<strong>3.配置Ghost（暂时不使用Nginx之类软件，Ghost独占80端口）</strong>

打开目录 <code>/var/www</code> 下的<code>config.js</code>文件（Windows下可以使用WindSCP登录进服务器目录）。将 <code>host</code> 更改为自己服务器IP地址128.199.174.200，server port改为80。

<strong>4.将Ghost作为Service运行</strong>

新建一个新的服务配置文件 ghost.conf

<pre>sudo nano /etc/init/ghost.conf
</pre>

配置文件加入如下内容：

<pre>#/etc/init/ghost.conf
description "Ghost Blog"
author "Your Name"
# Start the service after everything loaded
start on (local-filesystems and net-device-up IFACE=eth0)
stop on shutdown
# Automatically restart service
respawn
respawn limit 99 5
script
# Navigate to your app directory
cd /var/www

# Run the script with Node.js and output to a log
export NODE_ENV=production
exec /usr/local/bin/npm start /var/www 2&gt;&amp;1 &gt;&gt; /var/log/ghost.log
end script    
</pre>

之后就可以通过下列命令控制Ghost service：

<pre>sudo service ghost start
sudo service ghost stop
sudo service ghost restart
sudo service ghost status
</pre>

现在无论是在你重启了VPS，还是Ghost运行崩溃的情况下，<code>init</code> 都能够自动启动一个新的Ghost实例，从而保证Ghost一直运行。

<strong>6.设置服务器时区</strong>

由于Ghost博客是根据服务器时区来显示文章发布时间，而DigitalOcean的VPS默认了美国东部时区，即使是新加坡的机房也是如此，因此导致Ghost博客显示时间错乱。Ghost管理界面目前没有可以更改时区的选项，因此在服务器端修改Ubuntu默认时区，使之同实际时区一致。使用下列命令更改Ubuntu默认时区:

<pre>sudo dpkg-reconfigure tzdata    
</pre>

选择 <code>Asia/Singapore</code> 或者其它 UTC+8:00 的时区即可。

<strong>7.完成安装</strong>

可以通过下列命令启动Ghost service：

<pre>sudo service ghost start    
</pre>

<strong>8.博客备份及导入</strong>

进入<a href="http://zhao.im/ghost/debug">http://zhao.im/ghost/debug</a> 后台页面，对Ghost博客进行导入、导出备份操作。

<hr />

本文安装步骤及大部分命令引用自 <a href="http://ghost.pellegrom.me/installing-ghost-on-ubuntu/">http://ghost.pellegrom.me/installing-ghost-on-ubuntu/</a> 根据自己的安装过程及遇到的问题做了小的调整。
