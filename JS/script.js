function clr(x){
    document.getElementById('clrb').style.boxShadow = '0 0 5px '+x+', 0 0 25px '+x+',0 0 50px '+x+',0 0 100px '+x;
    document.getElementById('txt').innerText = x;
    document.getElementById('txt').style.color = x
    document.documentElement.style.setProperty('--btn-neon', x)
}

var i = -1;

function disco() {
    i = i * (-1);
    console.log(i)
    second()
    function second(){
        var y = 1;

        function fir(){  
        const clrs = ['red','orangered','yellow','green','cyan','blue','purple'];       
        setTimeout(function() {
            var x = clrs[y-1]
            document.getElementById('clrb').style.boxShadow = '0 0 5px '+x+', 0 0 25px '+x+',0 0 50px '+x+',0 0 100px '+x;
            y++;                    
            if ((y < 8) && (i>0)) { 
                fir();              
            } else if ((y>= 8) && (i>0)){
                second()
            }              
        }, 300)
        }
        console.log(2)
        fir()
}
}

function sultan() {
    i = i*(-1)
    console.log(1)
    second()
    function second(){
        var y = 1;
        function fir(){
            const clrs = ['black','blue','green','yellow']
            setTimeout(function(){
                var x = clrs[y-1]
                console.log(x)
                document.getElementById('btn').style.background = x;
                y++
                if((y<4) &&(i>0)){
                    fir()
                }
                else if((y>=4)&&(i>0)){
                    second()
                }
            }, 2000)
        }
        fir()
    }
}
