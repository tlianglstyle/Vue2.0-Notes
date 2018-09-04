var obj = {}
var depList = []
obj.trigger = function (){
  for(var dep in depList){
	depList[dep].event.apply(this,arguments)
  }
}
depList.push({
  event:function(value){
    console.log(1)
	console.log(value)
  }
})
depList.push({
  event:function(value){
    console.log(2)
	console.log(value)
  }
})
obj.trigger('trigger')

