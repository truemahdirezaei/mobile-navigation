const contents = document.querySelectorAll('.content');
const list = document.querySelectorAll('nav ul li');

list.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        contents[idx].classList.add('show');
    })
})


function hideAllItems(){
    list.forEach(item=>item.classList.remove('active'))
}

function hideAllContents(){
    contents.forEach(item=>item.classList.remove('show'))
}
