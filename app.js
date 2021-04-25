let items =  Array.from(document.getElementsByClassName('items'));
let navigation = Array.from(document.getElementsByClassName('navigation'))[0];

items.forEach((value,index,items) => {
    value.addEventListener('click',function() {
        navigation.innerHTML = 
       `
        You have clicked on ${value.innerHTML} and its index is ${index}
       `
    })
})