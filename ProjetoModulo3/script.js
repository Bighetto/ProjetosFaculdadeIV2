
function numMaisProx() {
    var numCheio = document.getElementById ('valor1').value
    var numProx = Math.round (numCheio)

    document.getElementById ('verify').value = numProx
}


function calculoPotencia(){
    var pot1 = document.getElementById ('pot1').value
    var pot2 = document.getElementById ('pot2').value

    var resultado = Math.pow(pot1, pot2)
    document.getElementById ('res1').value = resultado
}

function raioCirculo (){
    var raio = document.getElementById ('raio').value

    var resultadoCircunferencia = ( 2 * Math.PI * raio)

    document.getElementById ('res2').value = resultadoCircunferencia
}

function areaCirculo (){
    var areaCirculo = document.getElementById ('raio2').value

    var resultadoAreaCirculo= (Math.PI * Math.pow(areaCirculo, 3))

    document.getElementById ('res3').value = resultadoAreaCirculo
}

function areaBaseCubo() {
    var extremidade = document.getElementById ('extremidadeBaseCubo').value

    var resultadoExtremidade = Math.pow(extremidade, 2)

    document.getElementById ('res4').value = resultadoExtremidade
}

function areaTotalDoCubo() {
    
    var calculoArea = document.getElementById ('areaTotalCubo').value
    var areaBaseCubo = (Math.pow(calculoArea, 2))
    var areaTotCubo = (areaBaseCubo * 6)

    document.getElementById ('res5').value = areaTotCubo
    
}

function volumeTotalDoCubo() {
    var  extremidadeDoCubo = document.getElementById ('VolumeTotDoCubo').value

    var  resultadoExtremidadeCubo = (Math.pow(extremidadeDoCubo, 3))

    document.getElementById ('res6').value = resultadoExtremidadeCubo
}

function raizQuadrada() {
    var numRaizQuadrada = document.getElementById ('CalculoRaizQuadrada').value
    var calRaizQuadrada= Math.sqrt(numRaizQuadrada)

    document.getElementById ('res7').value = calRaizQuadrada
}