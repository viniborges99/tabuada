function verificar(){
    var num = window.document.getElementById('txttab')
    var res = window.document.getElementById('tab')
    if(num.value.length == 0){
        window.alert('ERRO numeros invalidos')
    }else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML=""
        while( c <=10){
            var s = n * c
            var item = document.createElement('option')
            item.text=` ${n} x ${c} = ${s}`
            res.appendChild(item)
            c++
        }
    }
}