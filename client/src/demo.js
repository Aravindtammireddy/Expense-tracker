const obj1 = {
    fun(){
        console.log(this);
    },
  
         fun1 () {

           
             console.log(this);
            function fun2(){     
                console.log(this);   
            }
           fun2 = fun2.bind(this);
           fun2();
        }
  
};

obj1.fun1();

const test  = obj1.fun1;
test();
