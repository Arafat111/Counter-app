
document.getElementById('subtract').addEventListener('click', function(){
    const count = parseInt(document.getElementById('count').innerText);
    const newcount = count - 1;
    document.getElementById('count').innerText = newcount;
})

document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('count').innerText = 0;
})

document.getElementById('add').addEventListener('click', function(){
    const count = parseInt(document.getElementById('count').innerText);
    const newcount = count + 1;
    document.getElementById('count').innerText = newcount;
})