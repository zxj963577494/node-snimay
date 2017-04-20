# snimay

## General notes

诗尼曼API



## API Details


### Activities

活动





### Activities

活动列表




#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/activities?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Activities/:_id

活动详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/activities/58c748205e91bc30c8ebe4ff</td></tr>
</table>









### Activities

新增活动

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/activities</td></tr>
</table>









### Activities/:_id

更新活动

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/activities/58c748205e91bc30c8ebe4ff</td></tr>
</table>









### Activities:/_id

删除活动

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/activities/58c748205e91bc30c8ebe4ff</td></tr>
</table>








### Banners

首页通栏广告





### Banners

首页通栏列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/banners?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Banners/:_id

首页通栏详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/banners/58c64e4fc5d9002439849641</td></tr>
</table>









### Banners

新增首页通栏

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/banners</td></tr>
</table>









### Banners/:_id

修改首页通栏

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/banners</td></tr>
</table>









### Banners/:_id

删除首页通栏

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/banners/58c74fa82c3cab33716c1f74</td></tr>
</table>








### Categories

类别





### Categories

类别列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/categories</td></tr>
</table>









### Categories/:_id

类别详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/categories/586c5ac48fc4b61b883393df</td></tr>
</table>









### Categories

新增类别(一般不使用)

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/Categories</td></tr>
</table>









### Categories/:_id

修改类别(一般不使用)

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/Categories/586c5ac48fc4b61b883393df</td></tr>
</table>









### Categories/:_id

删除类别(一般不使用)

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/categories/58c5fe19ca53ad0d957b014a</td></tr>
</table>








### Consults

用户咨询





### Consults

用户资讯列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/consults?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Consults/:id

用户咨询详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/consults/58c752f44f3b4a34b9fd8443</td></tr>
</table>









### Consults

新增用户咨询

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/consults</td></tr>
</table>









### Consults/:id

修改用户咨询

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/consults/58c752f44f3b4a34b9fd8443</td></tr>
</table>









### Consults/:id

删除用户资讯

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/consults/58c752f44f3b4a34b9fd8443</td></tr>
</table>








### Matches

配套家具





### Matches

配套家具列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/matches?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Matches/:_id

配套家具详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/matches/58c64e4fc5d9002439849652</td></tr>
</table>









### Matches

新增配套家具

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/matches</td></tr>
</table>









### Matches/:_id

修改配套家具

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/matches/58c64e4fc5d9002439849652</td></tr>
</table>









### Matches:/_id

删除配套家具

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/matches/58c631a578887e1a655a3c70</td></tr>
</table>








### Modes

定制家具





### Modes

定制家具列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/modes?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Modes/:_id

定制家具详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/modes/58c759a5bd333437f991533d</td></tr>
</table>









### Modes

新增定制家具

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/modes</td></tr>
</table>









### Modes/:_id

修改定制家具

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/modes/58c631a578887e1a655a3c70</td></tr>
</table>









### Modes:/_id

删除定制家具

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/modes/58c631a578887e1a655a3c70</td></tr>
</table>








### Productors

产品体验





### Products

产品体验列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/products?sortby=createTime&order=desc&pageindex=1&pagesize=12</td></tr>
</table>









### Products/:id

产品体验详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/products/58c64e4fc5d9002439849646</td></tr>
</table>









### Products

新增产品体验

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/products</td></tr>
</table>









### Products/:_id

修改产品体验

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/products/58c631a578887e1a655a3c70</td></tr>
</table>









### Products/:_id

删除产品体验

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/products/58c631a578887e1a655a3c70</td></tr>
</table>








### Selectors

多条件筛选





### Selectors/Heads/:cid/:_id

多条件筛选头部字段详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/heads/1/58c64e4fc5d9002439849638</td></tr>
</table>









### Selectors/Heads/:cid

多条件筛选列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/heads/1</td></tr>
</table>









### Selectors/Heads/:cid

新增多条件筛选

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/heads/1</td></tr>
</table>









### Selectors/Heads/:_id

修改多条件筛选

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/heads/58c642c4d640221d7d734790</td></tr>
</table>









### Selectors/Heads/:_id

删除多条件筛选

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/heads/58c64e4fc5d9002439849638</td></tr>
</table>









### Selectors/Bodys/:_id/:_sid

多条件筛选下级内容详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/bodys/58c64e4fc5d9002439849638/586c5ac48fc4b61b123393df</td></tr>
</table>









### Selectors/Bodys/:_id

多条件筛选下级内容列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/bodys/58c64e4fc5d9002439849638</td></tr>
</table>









### Selectors/Bodys/:_id

新增多条件筛选内容

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selector/bodys/586c5ac48fc4b61b113393df</td></tr>
</table>









### Selectors/Bodys/:_id/:_sid

修改多条件筛选下级内容


#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selector/bodys/58c64e4fc5d9002439849638/58c64f004b0f6024b5151272</td></tr>
</table>









### Selectors/Bodys/:_id/:_sid

删除多调价筛选下级内容

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/selectors/bodys/58c64e4fc5d9002439849638</td></tr>
</table>








### Signin

登录






### signin

登录

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/signin</td></tr>
</table>








### Users

管理员用户





### Users

用户列表

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/users</td></tr>
</table>









### Users/:_id

用户详情

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/users/58c64e4fc5d9002439849637</td></tr>
</table>









### Users

新增用户

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/users</td></tr>
</table>









### Users/:_id

修改用户

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/users/58c75c75bd333437f991533e</td></tr>
</table>









### Users/:_id

删除用户

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/users/58c75c75bd333437f991533e</td></tr>
</table>








### Websites







### WebSites

获取网站配置 

#### Request

<table>
    <tr><th>Method</th><td>GET</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/websites</td></tr>
</table>









### WebSites

新增网站配置(一般不调用)

#### Request

<table>
    <tr><th>Method</th><td>POST</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/websites</td></tr>
</table>









### WebSites/:_id

修改网站配置

#### Request

<table>
    <tr><th>Method</th><td>PUT</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/websites/58c64e56c5d9002439849658</td></tr>
</table>









### WebSites/:_id

删除网站配置(一般不调用)

#### Request

<table>
    <tr><th>Method</th><td>DELETE</td></tr>
    <tr><th>URL</th><td>https://snimay.herokuapp.com/api/v1/websites/58c64e56c5d9002439849658</td></tr>
</table>








