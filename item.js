  var vm=new Vue({

        el:'#app',
        data:{
            vm:'配置',
            msg:'',
            msg1:'',
            isActive: false,
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            isIcon:false,
            sty:'none',
            rot:'rotate(45deg)',
            line:'',
            od:'none',
            hide:'none',
            hide1:'none',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            con:'block',
            con1:'none',
            bg:'#e2e3e5',
            bg1:'white',
            bg3:'',
            off:'',
            offOne:''
        },
        methods:{
            fn:function(){
                this.isActive=true;
           },
            fn2:function(){
                this.isActive=false
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
            delIcon:function(){
                this.isIcon=true
                if(this.msg===''){
                    this.isIcon=false
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
            //历史版本的查询
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
            //监听历史查询维度
            register:function(){
                if(this.rot==='rotate(45deg)'){
                    this.rot='rotate(225deg)'
                        this.sty='block'

                }else{
                    this.rot='rotate(45deg)'
                    this.sty='none'
                }
            },
            content:function(){
                if(this.rot==='rotate(225deg)'){
                    this.rot='rotate(45deg)'
                    this.sty='none'
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

            }
        },
    computed:{

    }
    })

