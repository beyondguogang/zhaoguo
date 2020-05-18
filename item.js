 let firstTitle={
         data:function(){
             return{
                 isActive: false,
             }
         },
         methods:{
             fn:function(){
                 this.isActive=true;
             },
             fn2:function(){
                 this.isActive=false
             },
         },
         template:` 
       <div class="title">
           <a href="#javascript">
            <img alt="logo" class="logo" src="img/logo-2000-390.svg" style="">
           </a>
    </div>`
     }
 let firstOne={
    data:function(){
             return{
            msg:'',
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            isIcon:false,
            sty:'none',
            rot:'rotate(45deg)',
            line:'',
            od:'none',
        }
 },
    methods:{
     fn3:function(){
         if (!this.isItemList) {
             this.isItemList=true
         }else{
             this.isItemList=false
         }
     },
     fn4:function(){
         if (!this.isItemList1) {
             this.isItemList1=true
         }else{
             this.isItemList1=false
         }
     },
     fn5:function(){
         if (!this.isItemList2) {
             this.isItemList2=true
         }else{
             this.isItemList2=false
         }

     },
     ico:function(){
         this.isIcon=false;
         this.msg='';
     },
     box:function(){

         if(this.sty==='none'){
             this.sty = 'block';
             //this.line='all 0.1s ease 0.5s'
         }else{
             this.sty='none'
         }
     },
     rotate:function(){
         if(this.rot==='rotate(45deg)'){
             this.rot='rotate(225deg)'
         }else{
             this.rot='rotate(45deg)'
         }
     },
     dropDown:function(){

         if(this.od==='none'){
             this.od='block'
         }else{
             this.od='none'
         }
     },
        delIcon:function(){
            this.isIcon=true
            if(this.msg===''){
                this.isIcon=false
            }

        },
 },
    template: `<div style="display: none">
        <!--内容-->
        <div class="content" >
            <!--左边栏-->
            <div class="list-item">
                <h2 class="flag">标题</h2>
                <div class="project">
                    <div class="aa" v-on:click="fn3">
                        <i v-bind:class="{icon:isItemList}"></i>配置管理
                    </div>
                    <!--列表项-->
                    <div class="dis" v-bind:class="{itemList:isItemList}">
                        <div style="background: #ececf6">配置列表</div>
                        <div class="bb">历史版本</div>
                        <div class="bb">监听查询</div>
                    </div>


                    <div class="aa" v-on:click="fn4">
                        <i v-bind:class="{icon:isItemList1}"></i>服务管理
                    </div>
                    <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                        <div class="bb">服务列表</div>
                        <div class="bb">订阅者列表</div>
                    </div>


                    <div class="aa"> 命名空间</div>
                    <div class="aa" v-on:click="fn5">
                        <i v-bind:class="{icon:isItemList2}"></i>数据管理
                    </div>
                    <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                        <div class="bb">节点列表</div>
                    </div>


                </div>
                <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
            </div>
            <!--右边栏-->
            <div class="page">
                <!--右边栏头部导航-->
                <div class="content-right-nav">
                    <span class="sp1">public</span>
                    <span class="sp2">sandbox-intranet</span>
                    <span class="sp3">sandbox</span>
                </div>
                <!--动态显示查询结果  -->
                <div class="query">
                    <table>
                   <thead>
                   <tr>
                   <th>group1</th> 
                   </tr>
                   </thead>
                    </table>
                </div>
                <!--查询输入框   -->
                <div class="in">
                    <label for="text">Data ID:</label>
                    <input id="text" style="border: 1px solid rgb(90, 98, 104);" placeholder="模糊查询请输入Data " type="text">
                    <label for="text1">Group:</label>
                    <input id="text1" style="border: 1px solid rgb(90, 98, 104);" placeholder="模糊查询请输入Group" type="text" v-model="msg" v-on:input="delIcon">
                    <span class="icon"><img src="img/timg3.jpg" alt="" v-bind:class="{ic:isIcon}" v-on:click="ico"></span>

                    <button>查询</button>
                    <span class="frame" v-on:click="box">高级查询</span>
                    <button>导出高级查询</button>
                    <button>导入配置</button>
                    <div class="plus">+</div>
                    <div style="display: none" class="senior" v-bind:style="{display:sty}">
                            <label for="text2">归属应用:</label>
                            <input id="text2" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入应用名" type="text">

                            <label for="text3">标签:</label>
                            <input id="text3" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入标签" type="text">
                            <i class="arrow" @click="rotate" :style="{transform:rot,transition:line}" v-on:click="dropDown"></i>
                        <div class="sel" :style="{display:od}"><span>无选项</span></div>
                    </div>
                </div>

                <!--显示隐藏-->

                <!--数据 头-->
                <div class="data">
                    <table>
                        <thead>
                        <tr>
                            <th class="add">Data Id</th>
                            <th class="add">Group</th>
                            <th class="add">归属应用:</th>
                            <th class="add"> 操作</th>
                           </tr>      
                           <tr>
                           <td>1212</td>
                           <td>1212</td>
                           <td>1212</td>
                           <td>121212</td>
                           </tr>
                         
                                
                               
                            
                            
                
             
              
                           
                       
                        </thead>
                    </table>
                </div>
                <!--数据内容 -->
                
            </div>
            <!--底部-->
            <div></div>
        </div>
    </div>`
}
 let firstTwo={
    data:function(){
        return{
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg1:'',
            msg:'',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            hide:'none',
            hide1:'none',
        }
    },
     methods:{
         fn3:function(){
             if (!this.isItemList) {
                 this.isItemList=true
             }else{
                 this.isItemList=false
             }
         },
         fn4:function(){
             if (!this.isItemList1) {
                 this.isItemList1=true
             }else{
                 this.isItemList1=false
             }
         },
         fn5:function(){
             if (!this.isItemList2) {
                 this.isItemList2=true
             }else{
                 this.isItemList2=false
             }

         },
         inp:function(){
             this.hide='none';
             this.bor='1px solid #5a6268';
             if(this.msg===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }
         },
         inp2:function(){
             this.hide1='none';
             this.bor1='1px solid #5a6268';
             if(this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         Empty:function(){
             if(this.msg===''&& this.msg1===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }else if(this.msg===''&& this.msg1!==''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }else if(this.msg!==''&&this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
     },
     template:`<div style="display: none">
        <div style="display: block">
            <!--内容-->
            <div class="content" >
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="header">
                        <h5>历史版本(保留30天)</h5>
                    </div>
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--动态显示查询结果  -->
                    <div class="query">
                        <i></i>
                        配置管理
                        <span class="txt">public</span>
                        <span class="txt1">查询结果：共查询到x条满足要求的配置。</span>
                    </div>
                    <!--查询输入框   -->
                    <div class="in">
                        <label for="textTwo"><i style="color: red ;padding-right: 5px;">*</i>Data ID:</label>
                        <input id="textTwo" placeholder="模糊查询请输入Data " type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Tow"><i style="color: red ;padding-right: 5px;">*</i>Group:</label>
                        <input id="text1Tow" placeholder="模糊查询请输入Group" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div class="text">
                            <span style="display: none" :style="{display:hide}">Data ID不能为空</span>
                            <span :style="{display:hide1}" style=" display: none;position: absolute;left: 257px">Group不能为空</span>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>


                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>
                                <th class="add1"><span></span></th>
                                <th class="add">
                                    <div>Data Id</div>
                                </th>
                                <th class="add">
                                    <div>Group</div>
                                </th>
                                <th class="add">
                                    <div>归属应用:</div>
                                </th>
                                <th class="add">
                                    <div>操作</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>
    </div>`
 }
 let firstThree={
    data:function () {
        return{
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            msg1:'',
            msg:'',
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            vm:'配置',
            con:'block',
            con1:'none',
            rot:'rotate(45deg)',
            hide:'none',
            hide1:'none',
            bg:'#e2e3e5',
            bg1:'white',
            sty:'none',
        }
    },
     methods:{
         content:function(){
             if(this.rot==='rotate(225deg)'){
                 this.rot='rotate(45deg)'
                 this.sty='none'
             }

         },
         fn3:function(){
             if (!this.isItemList) {
                 this.isItemList=true
             }else{
                 this.isItemList=false
             }
         },
         fn4:function(){
             if (!this.isItemList1) {
                 this.isItemList1=true
             }else{
                 this.isItemList1=false
             }
         },
         fn5:function(){
             if (!this.isItemList2) {
                 this.isItemList2=true
             }else{
                 this.isItemList2=false
             }

         },
         register:function(){
             if(this.rot==='rotate(45deg)'){
                 this.rot='rotate(225deg)'
                 this.sty='block'

             }else{
                 this.rot='rotate(45deg)'
                 this.sty='none'
             }
         },
         inp:function(){
             this.hide='none';
             this.bor='1px solid #5a6268';
             if(this.msg===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }
         },
         inp2:function(){
             this.hide1='none';
             this.bor1='1px solid #5a6268';
             if(this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         Empty:function(){
             if(this.msg===''&& this.msg1===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }else if(this.msg===''&& this.msg1!==''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }else if(this.msg!==''&&this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         configure:function(){
             this.vm='配置';
             this.con1='none';
             this.con='block';
             if(this.bg!=='#e2e3e5'){
                 this.bg='#e2e3e5';
                 this.bg1='white'
             }

         },
         ip:function(){
             this.vm='IP';
             this.con='none';
             this.con1='block';
             if(this.bg1!=='#e2e3e5'){
                 this.bg1='#e2e3e5';
                 this.bg='white'
             }
         },
     },
     template:`<div style="display:none" v-cloak>
        <div style="display: block">
            <!--内容-->
            <div class="content"  @click="content">
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="header">
                        <h5>监听查询</h5>
                    </div>
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--查询输入框 1  -->
                    <div class="in" style="display: block" :style="{display:con}" v-cloak>
                        <label for="text0Three">查询维度:</label>
                        <input id="text0Three" type="text"  v-model="vm">
                        <i class="arrow" style="transform: rotate(45deg);" @click.stop="register" :style="{transform:rot}"></i>
                        <label for="textThree"><i style="color: red ;padding-right: 5px;">*</i>Data ID:</label>
                        <input id="textThree" placeholder="模糊查询请输入Data " type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Three"><i style="color: red ;padding-right: 5px;">*</i>Group:</label>
                        <input id="text1Three" placeholder="模糊查询请输入Group" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div  class="text1">
                            <span style="display: none" :style="{display:hide}">Data ID不能为空</span>
                            <span :style="{display:hide1}" style="display: none;position: absolute;left: 257px">Group不能为空</span>
                        </div>

                        <div class="swi" style="display: none" :style="{display:sty}" >
                           <p @click="configure" :style="{background:bg}" ><i class="correct"></i><span class="sp">配置</span></p>
                            <p @click="ip" :style="{background:bg1}"><i class="correct"></i><span class="sp">IP</span></p>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>
                    <!--查询输入框 2  -->
                    <div class="in" style="display: none" :style="{display:con1}" v-cloak>
                        <label for="text0Three">查询维度:</label>
                        <input class="inp3" id="text0Three1" type="text"  v-model="vm">
                        <i class="arrow" @click.stop="register" :style="{transform:rot}"></i>
                        <input class="inp3" type="text" placeholder="请输入IP">
                        <button @click="Empty">查询</button>
                        <div class="swi" :style="{display:sty}" >
                            <p @click="configure" :style="{background:bg}"><i class="correct"></i><span class="sp">配置</span></p>
                            <p @click="ip" :style="{background:bg1}"><i class="correct"></i><span class="sp">IP</span></p>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>
                    <!--显示隐藏-->

                    <!--数据 头1-->
                    <div style="display: block" :style="{display:con}">
                    <div class="data">
                        <table style="width: 100%">
                            <thead>
                            <tr>
                                <th class="add" style="width: 33.33%;border:none">
                                    <div>Data ID</div>
                                </th>
                                <th class="add" style="width: 33.33%">
                                    <div>Group</div>
                                </th>
                                <th class="add" style="width: 33.33%">
                                    <div>MD5</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                    <div class="data-item">
                        <button><i class="left-arrow"></i>上一页</button>
                        <button class="btn1">1</button>
                        <button>下一页<i class="right-arrow"></i></button>
                    </div>
                </div>
                    <!--数据 头2-->
                    <div style="display: none" :style="{display:con1}">
                        <div class="data">
                            <table style="width: 100%">
                                <thead>
                                <tr>
                                    <th class="add" style="width: 50%;border:none">
                                        <div>IP:</div>
                                    </th>
                                    <th class="add" style="width: 50%">
                                        <div>MD5</div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <!--数据内容 -->
                        <div class="data-content">
                            <p> 没有数据</p>
                        </div>
                        <div class="data-item">
                            <button><i class="left-arrow"></i>上一页</button>
                            <button class="btn1">1</button>
                            <button>下一页<i class="right-arrow"></i></button>
                        </div>
                    </div>


                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>
    </div>`
 }
 let firstFour={
    data:function () {
        return{
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg:'',
            bg3:'',
            off:'',
            offOne:''
        }
    },
     methods:{
         fn3:function(){
             if (!this.isItemList) {
                 this.isItemList=true
             }else{
                 this.isItemList=false
             }
         },
         fn4:function(){
             if (!this.isItemList1) {
                 this.isItemList1=true
             }else{
                 this.isItemList1=false
             }
         },
         fn5:function(){
             if (!this.isItemList2) {
                 this.isItemList2=true
             }else{
                 this.isItemList2=false
             }

         },
         delIcon:function(){
             this.isIcon=true
             if(this.msg===''){
                 this.isIcon=false
             }

         },
         offTwo:function(){
             if(this.off!=='0'){
                 this.off='0';
                 this.offOne='translateX(0)';
                 this.bg3='#e9ecef'
             }else{
                 this.off='100%';
                 this.offOne='translateX(-100%)';
                 this.bg3='#5584ff'
             }

         },

     },
     template:`<div style="display: none">
            <!--内容-->
            <div class="content" >
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--动态显示查询结果  -->
                    <div class="query">
                        <i></i>
                        配置管理
                        <span class="txt">public</span>
                        <span class="txt1">查询结果：共查询到x条满足要求的配置。</span>
                    </div>
                    <!--查询输入框   -->
                    <div class="in">
                        <label for="text4">服务名称</label>
                        <input id="text4" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入服务器名称" type="text">
                        <label for="text1Four">分组名称</label>
                        <input id="text1Four" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入分组名称" type="text" v-model="msg" v-on:input="delIcon">
                        <span class="sp-hide">隐藏空服务</span>
                        <div class="slide" @click="offTwo" :style="{background:bg3}"><i :style="{left:off,transform:offOne}"></i></div>
                        <button class="query-btn">查询</button>
                        <button class="establish-btn">创建服务</button>
                    </div>
                    <div>
                        <textarea name="" ></textarea>
                    </div>

                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>
                                <th class="add" style="border:none">
                                    <div>服务名</div>
                                </th>
                                <th class="add">
                                    <div>分组名称</div>
                                </th>
                                <th class="add">
                                    <div>集群数目</div>
                                </th>
                                <th class="add">
                                    <div>实例数</div>
                                </th>
                                <th class="add">
                                    <div>健康实例数</div>
                                </th>
                                <th class="add">
                                    <div>触发保护阈值</div>
                                </th>
                                <th class="add">
                                    <div>操作</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>`
 }
 let firstFive={
    data:function () {
        return {
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg1:'',
            msg:'',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            hide:'none',
            hide1:'none',
        }
    },
     methods:{
         fn3:function(){
             if (!this.isItemList) {
                 this.isItemList=true
             }else{
                 this.isItemList=false
             }
         },
         fn4:function(){
             if (!this.isItemList1) {
                 this.isItemList1=true
             }else{
                 this.isItemList1=false
             }
         },
         fn5:function(){
             if (!this.isItemList2) {
                 this.isItemList2=true
             }else{
                 this.isItemList2=false
             }

         },
         inp:function(){
             this.hide='none';
             this.bor='1px solid #5a6268';
             if(this.msg===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }
         },
         inp2:function(){
             this.hide1='none';
             this.bor1='1px solid #5a6268';
             if(this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         Empty:function(){
             if(this.msg===''&& this.msg1===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }else if(this.msg===''&& this.msg1!==''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }else if(this.msg!==''&&this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
     },
     template:`<div style="display: none">
        <div style="display: block">
            <!--内容-->
            <div class="content" >
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="header">
                        <h5>历史版本(保留30天)</h5>
                    </div>
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--动态显示查询结果  -->
                    <div class="query">
                        <i></i>
                        配置管理
                        <span class="txt">public</span>
                        <span class="txt1">查询结果：共查询到x条满足要求的配置。</span>
                    </div>
                    <!--查询输入框   -->
                    <div class="in">
                        <label for="textFive">服务名称</label>
                        <input id="textFive" placeholder="请输入服务名称" type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Five">分组名称</label>
                        <input id="text1Five" placeholder="请输入分组名称" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div class="text">
                            <span style="display: none" :style="{display:hide}">请输入服务器名称</span>
                            <span :style="{display:hide1}" style=" display: none;position: absolute;left: 257px">请输入服务器名称</span>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>


                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>                                                        
                                <th class="add">
                                    <div>地址</div>
                                </th>
                                <th class="add" style="width: 766px">
                                    <div>客户端版本</div>
                                </th>
                                <th class="add">
                                    <div>应用名</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>
    </div>`
 }
 //命名空间
 let am=`<div style="display: block" >
        <div style="display: block" >
            <!--内容-->
            <div class="content">
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page" >
                    <!--右边栏头部导航-->
                       <div class="header" style="font-size: 30px">
                        <i style=" border:1px solid deepskyblue;font-size: 30px;"></i>命名空间 
                       </div>
                       <button class="btn-six" @click="establish">新建命名空间</button>
                       <div style="clear: both"></div>
                        <div class="data" >
                        
           <table>
                        <thead>
                        <tr>
                            <th class="add" style="width:25% ">命名空间名称</th>
                            <th class="add"  style="width:40% ">命名空间ID</th>
                            <th class="add"  style="width:10% ">配置数</th>
                            <th class="add"  style="width:25% "> 操作</th>
                           </tr>      
                           <tr>
                           <td>1212</td>
                           <td>1212</td>
                           <td>1212</td>
                           <td>121212</td>
                           </tr>
                        </thead>
                    </table>
                       </div >
             
                 <div class="spring-box">
                 <span class="newly-build">新建命名空间</span>          
                <img src="img/resizeApi.png" alt="12" class="newly-build1">
                <div class="box-m">
                  <div class="space"> <label for="in1"><i>*</i>命名空间名</label>  <input idin type="text"> </div>
                  <div class="describe">  <label for="in2"><i>*</i>描述</label><input id="in2" type="text"></div>
                </div>
                

               
                <button class="determine">确定</button>
                <button class="cancel">取消</button>
                 </div>    
                 
           
               </div>  
               
               
              
    `
 let firstSix={
    data:function(){
        return {
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg1:'',
            msg:'',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            hide:'none',
            hide1:'none',
        }
    },
     methods:{
         fn3:function(){
             if (!this.isItemList) {
                 this.isItemList=true
             }else{
                 this.isItemList=false
             }
         },
         fn4:function(){
             if (!this.isItemList1) {
                 this.isItemList1=true
             }else{
                 this.isItemList1=false
             }
         },
         fn5:function(){
             if (!this.isItemList2) {
                 this.isItemList2=true
             }else{
                 this.isItemList2=false
             }

         },
         inp:function(){
             this.hide='none';
             this.bor='1px solid #5a6268';
             if(this.msg===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }
         },
         inp2:function(){
             this.hide1='none';
             this.bor1='1px solid #5a6268';
             if(this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         Empty:function(){
             if(this.msg===''&& this.msg1===''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }else if(this.msg===''&& this.msg1!==''){
                 this.hide='inline-block';
                 this.bor='1px solid red';
             }else if(this.msg!==''&&this.msg1===''){
                 this.hide1='inline-block';
                 this.bor1='1px solid red';
             }
         },
         establish:function(){

         }
     },
     template:am
 }
 let vm=new Vue({
      el:'#app',
        components:{
            'first-title':firstTitle,
            'first-one':firstOne,
            'first-two':firstTwo,
            'first-three':firstThree,
            'first-four':firstFour,
            'first-five':firstFive,
            'first-six':firstSix
      },
        data:{


        }
    })

