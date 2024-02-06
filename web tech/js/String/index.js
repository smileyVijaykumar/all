let x = 10;
const obj = {
    name: 'vijay',
    age: 102,
    fun: function() {
        console.log(this.name)
        console.log(this.age)
    }
}
obj.fun();

function window(params) {
    
}