//your JS code here. If required.
let selector = document.getElementById('colorSelect');
let btn = document.querySelector('input')

btn.addEventListener('click',()=>{
    selector.remove(selector.selectedIndex)
  
})