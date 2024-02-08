var btn = document.querySelector('#show-or-hide');
var container_btn = document.querySelector('.container_btn');

btn.addEventListener('click', function(){

    if(container_btn.style.display === 'block'){
        container_btn.style.display = 'none';
    } else{
        container_btn.style.display = 'block';
    }

});