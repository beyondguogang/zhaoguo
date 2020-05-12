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
            isActive: false,
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            isIcon:false
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
            }






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
