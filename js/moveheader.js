

function click(){
    let btnheader=document.querySelector('.menuMobile');

    btnheader.addEventListener('click', function(e){
        e.preventDefault();
        let btnheade2 = document.getElementById('nav');
        if(btnheade2.contains('activo') ){
            btnheade2.classList.remove('activo');
        }else{
            btnheade2.classList.add('activo')
        }
        console.log(btnheade2);
    });
}

click();