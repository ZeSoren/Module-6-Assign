function menuselect()
{
    if (document.getElementById("menu").value == "Create Customer")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Update Shipping Address")
    {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}

function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var result = JSON.parse(objRequest.responseText);
             OperationResult1(result);
        }
    }
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    
    
}

function OperationResult1(output)
{
     if (output.WasSuccessful == 1)
     {
        document.getElementById("result1").innerHTML = "The operation was successful!";
     }
     else
     {
         document.getElementById("result1").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
     }
}

function UpdateShip()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernumber = document.getElementById("shiporder").value;
    var ordername = document.getElementById("shipname").value;
    var orderaddress = document.getElementById("shipaddress").value;
    var ordercity = document.getElementById("shipcity").value;
    var orderpostal = document.getElementById("shippostal").value;
    
    var newupdate = '{"OrderID":"' + ordernumber + '","ShipAddress":"' + orderaddress +'","ShipCity":"' + ordercity +'","ShipName":"' + ordername + '","ShipPostcode":"' + orderpostal + '"}';
    
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var result2 = JSON.parse(objRequest.responseText);
             OperationResult2(result2);
        }
    }
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newupdate);
}

function OperationResult2(output)
{
     if (output == 1)
     {
        document.getElementById("result2").innerHTML = "The operation was successful!";
     }
     else
     {
         document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
     }
}

function DeleteCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("custid2").value;
    
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var result3 = JSON.parse(objRequest.responseText);
             OperationResult3(result3);
        }
    }
    objRequest.open("GET", url, true);
    objRequest.send();
}

function OperationResult3(output)
{
    if(output.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful";
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}
