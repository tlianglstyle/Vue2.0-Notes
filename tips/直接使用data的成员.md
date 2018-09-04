···

var obj = {
    name:"tanliang",
    age:27
    }
  function Person(data){
    this.data = data;
    var _that = this
		for(var a in data){
      (function(a){
      Object.defineProperty(_that,a,{
          get:function(){
            return _that.data[a]
          }
        })
      })(a)
    }
  }
  var person = new Person(obj);
  console.log(person.data.age);//27
  console.log(person.name);//tanliang
  console.log(person.age);//27





















···