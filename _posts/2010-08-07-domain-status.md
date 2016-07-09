---
layout: post
title: 国际域名状态
date: 2010-08-07 12:25
author: zhaohao
comments: true
categories: [weblog]
---
1、.com.net国际域名几种状态
<br />&lt;Active&gt; 正常状态
<br />&lt;Server Hold&gt; 注册局暂停，域名没有解析，可以续费
<br />&lt;Server Update prohibited&gt; 注册局禁止更新，不能修改，可以续费
<br />&lt;Server Transfer prohibited&gt; 注册局禁止转移，不能转移注册商
<br />&lt;Server Delete prohibited&gt; 注册局禁止删除
<br />&lt;Server Renew prohibited&gt; 注册局禁止续费
<br />&lt;Client Hold&gt; 注册商暂停，域名没有解析，可以续费
<br />&lt;Client Update prohibited&gt; 注册商禁止更新，不能修改，可以续费
<br />&lt;Client Transfer prohibited&gt; 注册商禁止转移，不能转移注册商
<br />&lt;Client Delete prohibited&gt; 注册商禁止删除
<br />&lt;Client Renew prohibited&gt; 注册商禁止续费
<br />&lt;Redemption period&gt; 偿还期，域名过期后由注册商申请删除域名，域名进入偿还期，偿还期30天内不能正常使用，但可以交纳赎回费用恢复域名，否则进入删除期
<br />&lt;Pending Restore&gt; 域名进入偿还期后，由注册商申请恢复，交费后进入恢复期，提交报告后，域名可以恢复正常
<br />&lt;Pending Delete&gt; 域名30天偿还期后进入5天的删除期，删除期不允许其他人注册，此状态表明域名即将被删除释放
<br />&lt;Pending Transfer&gt; 域名处于转移状态
<br />
<br />2、org的几种域名状态
<br />&lt;OK&gt;This is the nominal status value for a domain object at all times,whether or not the domain has pending operations or prohibitions.
<br />正常状态，可以做任何操作
<br />&lt;New&gt;This is the nominal status for a newly created domain object. The domain can be modified unless locked.
<br />&#160;新注册，可以修改，但不能进行锁定lock操作
<br />&lt;Active&gt;The domain can be modified and appears in a zone. This is the nominal status for a domain object once it has been published in a zone. 
<br />正常状态,可以修改，正常解析
<br />&lt;Locked&gt;The domain cannot be transferred, renewed, or deleted. (Though the status value can be changed.) Hierarchical and associated objects cannot be added or removed from the domain object.
<br />锁定，域名解析正常，不能更改任何信息，不能转移注册商
<br />&lt;Hold&gt;The domain will not be published in a zone for DNS resolution. Names without at least two name servers may be placed on Hold status; in this case submit nameserver data through your registrar.
<br />暂停，域名没有被解析，不能正常使用。被暂停的原因较多，应联系当前注册商查询原因并申请解除
<br />&lt;Pending Transfer&gt;A transfer request has been received for the domain, and completion of the request is pending.The domain cannot be renewed, deleted, or updated while in this state.
<br />转移中，表明已经有注册上提出转移入申请，正等待当前注册商是否同意的过程中。此状态不能更改人和信息，不能续费,域名解析正常，不影响使用
<br />&lt;Pending Delete Restorable&gt;A delete request has been received for the domain. The domain has been removed from the zone,but has not yet been purged from the registry database. The domain cannot be renewed, deleted,transferred, or updated while in this state.
<br />偿还期，缴纳手续费可以恢复，此状态最多保持30天
<br />&lt;PENDING DELETE – SCHEDULED FOR RELEASE&gt;
<br />删除期 不可恢复，等待删除释放后重新注册
<br />&lt;Client Hold&gt;The domain will not be published in a zone for DNS resolution. 
<br />用户申请hold,没有解析
<br />&lt;Client Lock&gt;The domain cannot be transferred, renewed, deleted, or updated.An update command may be used to change the status value. Hierarchical and associated objects cannot not be added or removed from the domain object. 
<br />用户申请锁定，不能转移、不能删除、不能更改。如果要更改信息，必须先更改这个状态
<br />&lt;Inactive&gt;
<br />域名没有解析，不能正常使用。一般是由于域名的dns没有填写，或填写不完整造成的，最少需要填写2个dns才能正常解析。

<div>http://haozhao.blogspot.com/</div>
