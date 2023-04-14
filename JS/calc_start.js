// var z = ['','']
function prnt(x){
    const inpt = document.getElementById('inpt');
    if (!(x == 'AC' || x == 'C' || x == '=')){
        // для замены знаков
        // z.shift()
        // z.push(x)
        // y = z[0]
        // if (y == '/' || y == '*' || y == '-' || y == '%' || y == '+'){
        //     inpt.value = inpt.value.slice(0, -1) + x
            
        // } else {
        //     inpt.value += x
        // }
        // console.log(y)
        inpt.value += x 
    } else if (x== 'C'){
        // удаление крайнего символа
        inpt.value = inpt.value.slice(0, -1)
    } else if (x == 'AC'){
        inpt.value = ''
    } else if (x == '='){
        inpt.value= eval(inpt.value)
    }
}

function msg(){
    const msg_box = document.getElementById('err');

    msg_box.style.top = '10px';
    setTimeout(function(){msg_box.style.top = '0'}, 500)
    setTimeout(function(){msg_box.style.top = '-100px'}, 1000*5)
}

function make_btns(){
    const btns_val = ['AC','C','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','=']

    for (let i = 0; i < btns_val.length; i++) {
        const bv = btns_val[i];
        var btn = document.createElement('button');
        btn.className = 'btns';
        btn.innerHTML = bv;
        btn.onclick = function(){
            try{prnt(bv)}
            catch(SyntaxError){msg()}
        };
        if (bv == '0'){
            btn.style.width = '138px';
            btn.style.borderRadius = '32px';
        }
        if (bv =='/' || bv =='=' || bv =='*' || bv =='-' || bv =='+'){
            btn.style.background = '#fd9913'
        }
        if (bv =='AC' || bv =='C' || bv =='%'){
            btn.style.background = '#a9a9a9'
        }
        document.getElementById('calc').append(btn)
    }
}
make_btns()