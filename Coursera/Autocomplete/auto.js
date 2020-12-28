/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){

	if(document.querySelector("#same").checked)	{
		var name=document.querySelector("#shippingName").value;   
		var zip=document.querySelector("#shippingZip").value;     

		document.querySelector("#billingName").value=name;   
		document.querySelector("#billingZip").value=zip;
	}
	else {
		document.querySelector("#billingName").value="";
		document.querySelector("#billingZip").value="";
	}
}

/*   Veya bu şekilde;
 */	/* function billingFunction() {
		if (document.getElementById('same').checked) {
			document.getElementById('billingName').value = document.getElementById('shippingName').value;
			document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
		
		} else {
			document.getElementById('billingName').value = "";
			document.getElementById('billingZip').value = "";
		}
	}  */
	

