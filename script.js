
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/

var codificador = ["e", "i", "a", "o", "u"];
var decodificador = ["enter", "imes", "ai", "ober", "ufat"];
var textoColar = "";

var textoEntrada = document.querySelector("#input-texto");
var textoSaida = document.querySelector("#msg");
var botaoCriptografar = document.querySelector("#btn-cripto");
var botaoDescriptografar = document.querySelector("#btn-descripto");
var botaoCopiar = document.querySelector("#btn-copy");
var botaoColar = document.querySelector("#btn-paste");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;
botaoCopiar.onclick = copiar;
botaoColar.onclick = colar;

function transformar(inicial, final){
	texto = textoEntrada.value;
	t = texto.length;
	for (i=0; i<t; i++)
	{
		if ((texto[i] < "a" || texto[i] > "z") && texto[i] != " ")
		{
			alert("Digite apenas letras minúsculas e sem acento");
			return;
		}
	}
	n = codificador.length;
	for (i=0; i<n; i++)
	{
		texto = texto.replaceAll(inicial[i],final[i]);
	}
	textoSaida.value = texto;
}

function criptografar()
{
	transformar(codificador, decodificador);
}

function descriptografar()
{
	transformar(decodificador, codificador);
}

function copiar()
{
	navigator.clipboard.writeText(textoSaida.value);
	textoColar = textoSaida.value;
	alert("Texto copiado!")
}

function colar()
{
	if (textoColar == "")
		alert("Nenhum texto criptografado foi copiado!");
	else
		textoEntrada.value = textoColar;
}
