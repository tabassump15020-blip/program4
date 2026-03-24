function book() { 
alert("Appointment feature coming soon! Stay healthy +"); 
}
function validate() { 
let name = document.getElementById("name").value; 
let phone = document.getElementById("phone").value; 
} 
if (name==="" || phone === "") {
alert("Please fill all fields!"); 
return false; 
}
if (phone.length < 10) { 
alert("Enter a valid phone number!"); 
return false; 
}
alert("Appointment Request Submitted Successfully!"); 
return true;