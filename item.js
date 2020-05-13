let vm=new Vue({

        el:'#app',
       /* components:{
          'helloWorld':{
              props:['title'],
              data(){
                  return{
                      a:12
                  }
              },
              template:`<div>nihao{{a}}{{title}}</div>`
}
        },*/
        data:{
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
            bor1:'1px solid #5a6268'
        },
        methods:{
            fn(){
                this.isActive=true;
           },
            fn2(){
                this.isActive=false
           },
            fn3(){
                if(!this.isItemList) {
                this.isItemList=true
                }else{
                    this.isItemList=false
                }
            },
            fn4(){
                if(!this.isItemList1) {
                this.isItemList1=true
                }else{
                    this.isItemList1=false
                }
            },
            fn5(){
                if(!this.isItemList2) {
                this.isItemList2=true
                }else{
                    this.isItemList2=false
                }

            },
            delIcon(){
                this.isIcon=true
                if(this.msg===''){
                    this.isIcon=false
                }

            },
            ico(){
                this.isIcon=false;
                this.msg='';
            },
            box(){

                if(this.sty==='none'){
                    this.sty = 'block';
                    //this.line='all 0.1s ease 0.5s'
                }else{
                    this.sty='none'
                }
            },
            rotate(){
                if(this.rot==='rotate(45deg)'){
                    this.rot='rotate(225deg)'
                }else{
                    this.rot='rotate(45deg)'
                }
            },
            dropDown(){

                if(this.od==='none'){
                    this.od='block'
                }else{
                    this.od='none'
                }
            },
            Empty(){
                if(this.msg===''){
                    this.hide='block';
                    this.bor='1px solid red'
                }else{
                    this.hide='none';
                    this.bor='1px solid #5a6268'
                }
            }



        },
    computed:{
            
    }
    })
/*vm.component={
    helloWorld:{
        props:['title'],
            data(){
            return{
                msg:'mm'
            }
        }
    },
    template:`<div>{{msg}}</div>`
}*/
