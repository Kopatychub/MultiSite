var addnum = -1;

function addtext(){
    addnum *= (-1)
    console.log(addnum)
    const btnok =  document.getElementById('ok'), btnplus = document.getElementById('plus');
    const banner = document.getElementById('banner'), addbox = document.getElementById('add_box');
    if (addnum > 0){    
        btnok.style.zIndex = '1';
        btnok.style.opacity = '1';
        banner.style.zIndex = '1';
        banner.style.opacity = '.5';
        btnplus.style.zIndex = '1';
        btnplus.style.transform = 'rotateZ(135deg)';
        addbox.style.zIndex = '1';
        addbox.style.opacity = '1';
    } else if (addnum < 0) {
        btnok.style.zIndex = '-1';
        btnok.style.opacity = '0';
        banner.style.zIndex = '-1';
        banner.style.opacity = '0';
        btnplus.style.zIndex = '0';
        btnplus.style.transform = 'rotateZ(0deg)'
        addbox.style.zIndex = '-1';
        addbox.style.opacity = '0';
    }
}

function addOkey(){
    console.log('ok')
    const heading = document.getElementById('headingg'), txtinfo = document.getElementById('txt');
    const btnok =  document.getElementById('ok'), btnplus = document.getElementById('plus');
    const banner = document.getElementById('banner'), addbox = document.getElementById('add_box');

    head = heading.value;
    txt = txtinfo.value;

    function hide(){
        btnok.style.zIndex = '-1';
        btnok.style.opacity = '0';
        banner.style.zIndex = '-1';
        banner.style.opacity = '0';
        btnplus.style.zIndex = '0';
        btnplus.style.transform = 'rotateZ(0deg)'
        addbox.style.zIndex = '-1';
        addbox.style.opacity = '0';
        addnum *= -1
    }

    if ((head.replace(/\s/g,"")) && (txt.replace(/\s/g,""))){

        var div = document.createElement('div');
        div.className = 'info-box';
        div.innerHTML = `<h2>${head}</h2>\n<p>${txt}</p>`;
        document.body.append(div);

        heading.value = '';
        txtinfo.value = '';
        hide()
    } else {
        if (!head.replace(/\s/g,"")){
            heading.style.borderBottom = '2px solid red';
            setTimeout(function(){heading.style.borderBottom = '2px solid white'},500)
        }
        if (!txt.replace(/\s/g,"")){
            txtinfo.style.backgroundPositionX = '1425px';
            txtinfo.style.transition = '.5s';
            setTimeout(function(){txtinfo.style.transition = '0s'; txtinfo.style.backgroundPositionX = '272px'},500)
        }
    }
}

var menunum = -1

function menu(){
    const menubtn = document.getElementById('menu')

    menunum *= -1

    if (menunum>0){
        menubtn.style.transform = 'rotateZ(180deg)'
    } else {menubtn.style.transform = 'rotateZ(0deg)'}
}  