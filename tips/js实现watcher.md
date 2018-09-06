```
function watcher(opts){
    var that = this
    this.data = opts.data
    this.watch = opts.watch
    for(var attr in this.data){
        this[attr] = this.data[attr]
        for(var w in this.watch){
            if(attr==w){
                (function(w,attr){//解决for循环索引问题
                    Object.defineProperty(that,attr,{
                        set:function(val){
                            that.watch[w].call(that,val,that.data[attr])
                            that.data[attr] = val
                        },
                        get:function(){
                            return that.data[attr]
                        }
                    })
                })(w,attr)
            }
        }
    }
}
var vm = new watcher({
    data:{
        a: 1,
        b: 2 
    },
    watch:{
        a:function(newVal,oldVal){
            console.log('newVal:'+newVal);
            console.log('oldVal:'+oldVal);
        },
        b:function(newVal,oldVal){
            console.log('newVal1:'+newVal);
            console.log('oldVal1:'+oldVal);
        }
    }
})
vm.a = 3
vm.b = 4
console.log(vm.a)
// newVal1:3
// oldVal1:1
// newVal1:4
// oldVal1:2
//3
```