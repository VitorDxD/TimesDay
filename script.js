function carregar() {
    var msg= window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var bom = window.document.getElementById('bom');
    var data = new Date()
    var min = ':' + data.getMinutes()
        if(min <10){
            min = '0'+min
        }
    var hora = data.getHours() +  min
    var hora2 = data.getHours()
    msg.innerHTML= `Agora são ${hora}.`
    if (hora2 >=6 && hora2 <12){ //Bom dia!
        img.src='fotodia.png'
        document.body.style.background='#e2cd9f'
        bom.innerHTML='Bom dia!'
    } else if (hora2>=12 && hora2<18){ //Boa tarde!
        img.src='fototarde.png'
        document.body.style.background='#b9846f'
        bom.innerHTML='Boa tarde!'
    } else { //Boa Noite!
        img.src='fotonoite.png'
        document.body.style.background='#515154'
        if (hora2>=0 && hora2<6){
            bom.innerHTML='Boa madrugada!'
        } else {
            bom.innerHTML='Boa noite!'
        }
    }
}
 