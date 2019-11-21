var $ = function (id) {
    return document.getElementById(id);
};


var generate = function () {
	var intCount = parseInt($("total_fib").value);
	var i=0;
	var j=1;
	var k;
	var stringOutput = i +" " + j +" ";
    if (isNaN(intCount) || intCount<2 || intCount>100){
        alert("Error: The number is not less than 2 and not greater than 100.");
        $("total_fib").value="";
    }
    while (intCount>2){
        k=i + j;
        stringOutput = stringOutput + k + " ";
        i=j;
        j=k;
        intCount--;
    }

$("output").value=(stringOutput);
};

window.onload = function () 
{
    $("total_fib").value = "";
    $("generate").onclick = generate;
};  