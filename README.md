Laolin Online
=================


# 框架执行/加载原理

## index.html

静态文件index.html是个空白bootstrap模板,
它有以下有个事项：

* 加载了以下通用js库：
  - jQuery
  - underscore
  - backbone
* 定义了函数 set_top_nav(tdata) 用来动态显示 页头导航条(top_av)
* 定义了函数 set_main_box(htm) 用来动态显示 页面主要内容(main_box)
* 同时加载了laolin.main.js, 包含了自定义的一些常用辅助函数
* 加载了laolin.router.js，它利用backbone，定义了laolin.router来实现router功能
* 加载了 apps/apps.js，它的功能见下一节。

## apps/apps.js
- 它定义并登记了所有的app（laolin.router.allApps）、和各app的所有item
- 通过laolin.router设定router，并和各app和各item对应的页面html，css,js文件关联起来
- 由router决定当前的app。函数activeApp并根据app的设定，调用set_top_nav，显示合适的顶部导航条
- 由router决定当前的app的当前item,最终通过set_main_box()来加载html，
- 根据app的设定通过函数laolin.fn.loadCss()加载需要的css
- 根据app的设定通过函数laolin.fn.loadJs()加载需要的js

# Authors
-------

**LaoLin (LaoLinCom) **

+ http://laolin.com/
+ http://weibo.com/n/laolincom
 

Copyright and license
---------------------

Copyright 2012~2013 LaoLin 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
