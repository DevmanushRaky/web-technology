// for checking if any field is null

// method 1

{/*
function validation()
{
  var n = document.Rform.name;
  var fn = document.Rform.FatherName;
  var eml = document.Rform.email;
  var mob = document.Rform.phone;
  var gen = document.Rform.gender;
  var dob = document.Rform.birthday;
  var pic = document.Rform.myFile;
  var pass = document.Rform.pass;
  var quali = document.Rform.Qualification;
  var Country = document.Rform.nationality;

  if (n.value.length <= 0){
   alert("Name is required");
   n.focus();
   return false;
  }
  if (fn.value.length <= 0){
   alert("Father Name is required");
   fn.focus();
   return false;
  }
  if (eml.value.length <= 0){
   alert("Email is required");
   eml.focus();
   return false;
  }
  if (mob.value.length <= 0){
   alert("Phone Number is required");
   mob.focus();
   return false;
  }
  if (gen.value.length <= 0){
   alert("Gender is required");
   gen.focus();
   return false;
  }
  if (dob.value.length <= 0){
   alert("Birth date is required");
   dob.focus();
   return false;
  }
  if (pic.value.length <= 0){
   alert("Photo is required");
   pic.focus();
   return false;
  }
  if (pass.value.length <= 0){
   alert("Password must required");
   pass.focus();
   return false;
  }

  var check = false;
  for(var i= quali.length - 1; i>=0;i--){
    if (quali[i].checked){
      check=true;
    }
  }
  if(check==false){
    alert ("Qualification is required");
    return false;
  }

  if (Country.value=="Select-Region"){
   alert("Please select your country");
   Country.focus();
   return false;
  }
  return false;
}
*/}

// method 2 for checking validation

function validation()
{
  var n = document.Rform.name;
  var fn = document.Rform.FatherName;
  var eml = document.Rform.email;
  var mob = document.Rform.phone;
  var gen = document.Rform.gender;
  var dob = document.Rform.birthday;
  var pic = document.Rform.myFile;
  var pass = document.Rform.pass;
  var quali = document.Rform.Qualification;
  var Country = document.Rform.nationality;


  if(!n || !fn || !eml || !mob || !gen || !dob || !pic || !pass || !quali ||!Country){
    alert("Please fill every field properly");
    return false;
  }
  return false;
}