---
layout: post
title: Let’s Encrypt
date: 2015-12-30 18:00
author: zhaohao
comments: true
categories: [weblog]
---
Let’s Encrypt is a new Certificate Authority:
It’s free, automated, and open.

Anyone who has gone through the trouble of setting up a secure website knows what a hassle getting and maintaining a certificate can be. Let’s Encrypt automates away the pain and lets site operators turn on and manage HTTPS with simple commands.

No validation emails, no complicated configuration editing, no expired certificates breaking your website. And of course, because Let’s Encrypt provides certificates for free, no need to arrange payment.

This page describes how to carry out the most common certificate management functions using the <a href="https://github.com/letsencrypt/letsencrypt">Let’s Encrypt client</a>. You’re welcome to use any compatible client, but we only provide instructions for using the client that we provide.

If you’d like to know more about how this works behind the scenes, check out our <a href="https://letsencrypt.org/howitworks/technology/">technical overview</a>.
<h3 id="installing-lets-encrypt">Installing Let’s Encrypt</h3>
<strong>Note: Let’s Encrypt is in beta. Please don’t use it unless you’re comfortable with beta software that may contain bugs.</strong>

If your operating system includes a packaged copy of letsencrypt, install it from there and use the <code>letsencrypt</code> command. Otherwise, you can use our <code>letsencrypt-auto</code> wrapper script to get a copy quickly:
<pre><code>$ git clone https://github.com/letsencrypt/letsencrypt
$ cd letsencrypt
$ ./letsencrypt-auto --help
</code></pre>
<code>letsencrypt-auto</code> accepts the same flags as <code>letsencrypt</code>; it installs all of its own dependencies and updates the client code automatically (but it’s comparatively slow and large in order to achieve that).
<h3 id="how-to-use-the-client">How To Use The Client</h3>
The Let’s Encrypt client supports a number of different “plugins” that can be used to obtain and/or install certificates. A few examples of the options are included below:

If you’re running Apache on a recent Debian-based OS, you can try the Apache plugin, which automates both obtaining and installing certs:

<code>./letsencrypt-auto --apache</code>

On other platforms automatic installation is not yet available, so you will have to use the <code>certonly</code> command. Here are some examples:

To obtain a cert using a “standalone” webserver (you may need to temporarily stop your exising webserver) for example.com and www.example.com:

<code>./letsencrypt-auto certonly --standalone -d example.com -d www.example.com</code>

To obtain a cert using the “webroot” plugin, which can work with the webroot directory of any webserver software:

<code>./letsencrypt-auto certonly --webroot -w /var/www/example -d example.com -d www.example.com -w /var/www/thing -d thing.is -d m.thing.is</code>

The this will obtain a single cert for example.com, www.example.com, thing.is, and m.thing.is; it will place files below /var/www/example to prove control of the first two domains, and under /var/www/thing for the second pair.
<h3 id="renewing-a-certificate">Renewing a Certificate</h3>
To renew a certificate, simply run <code>letsencrypt</code> again providing the same values when prompted. Let’s Encrypt is working hard to fully automate this process and we apologize for the inconvenience until this functionality is ready.

<h3 id="revoking-a-certificate">Revoking a Certificate</h3>
The following command can be used to revoke a particular certificate.

<code>$ letsencrypt revoke --cert-path example-cert.pem</code>
<h3 id="full-documentation">Full Documentation</h3>
For more information on the official client, please see the <a href="https://letsencrypt.readthedocs.org/en/latest/intro.html">full documentation</a>.
