

function click(){
    let btnheader=document.querySelector('.menuMobile');

    btnheader.addEventListener('click', function(e){
        e.preventDefault();
        let btnheade2 = document.getElementById('nav');
        if(document.querySelector('#nav.activo') ){
            btnheade2.classList.remove('activo');
        }else{
            btnheade2.classList.add('activo');
        }
        console.log(btnheade2);
    });
}

click();