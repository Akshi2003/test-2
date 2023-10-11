let num = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e'}
console.time ('a')
for(let i in num){
    console.log(i+':'+num[i])
}
console.timeEnd ('a')
console.table (num)
console.error ('ERROR!!')


