var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/

 var calculate = function()
 {
    var floatCreditHours, intStudy, floatStudyTime;
    floatCreditHours = parseFloat($("monthly_payment").value);
    intStudy = parseFloat($("loan_length").value);
    floatStudyTime = parseFloat(floatCreditHours * (intStudy) / 2);
    $("total_cost").value = floatStudyTime;
 };
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
};
