
// timee ends here

// book login

let bookk=()=>{
   console.log(localStorage.getItem("islogin"));
   
   if(localStorage.getItem("islogin")==="true"){
      location.href="bookingform.html"
   }

   else{
      alert("Please Login First")
   }
}

// 





let checklogin=()=>{

   let loginbtn=document.querySelector("#loginbt")
   let logoutbt=document.querySelector("#logoutbt")

   if(localStorage.getItem("islogin")==="true"){
      loginbtn.style.display="none"
     logoutbt.style.display="block"
   }
   else{
       loginbtn.style.display="block"
     logoutbt.style.display="none"
   }
}

let logoutbbt=()=>{
   localStorage.removeItem("islogin")
}






 let login=()=>{

   let loginname=document.querySelector("#loginname").value
   let loginpass=document.querySelector("#loginpass").value

   let localname=localStorage.getItem("Name")
   let localpass=localStorage.getItem("Password")

   if(loginname==localname && loginpass==localpass){
    location.href='index.html'
   }
   else{
    alert("Invalid Name and Password")
   }

   return false

 }




let submits=()=>{

  let name=document.querySelector("#inpname").value;
  let num=document.querySelector("#inpnum").value;
  let email=document.querySelector("#inpemail").value;
  let pass=document.querySelector("#inppass").value;
  let cpass=document.querySelector("#inpcpass").value;

  localStorage.setItem("Name",name)
  localStorage.setItem("Number",num)
  localStorage.setItem("Email",email)
  localStorage.setItem("Password",pass)
  localStorage.setItem("C-Passwpord",cpass)
  localStorage.setItem("islogin","true")

  let errname=document.querySelector("#errorname");
  let errnum=document.querySelector("#errornum");
  let erremail=document.querySelector("#erroremail");
  let errpass=document.querySelector("#errorpass");
  let errcpass=document.querySelector("#errorcpass");



  
  if(name===""){
     errname.innerHTML="Please Enter Your Name";
     errname.style.color="red";
     errname.style.fontSize="25px"
     return false;
  }

  else if(!(
 name.match(/[A-Z]/) && name.match(/[a-z]/)
  )){
   errname.innerHTML=" Capital and Small Letters Please";
    errname.style.color="red";
   errname.style.fontSize="25px"
   return false;
}

  else if(num===""){
   errnum.innerHTML="Please Enter Digits";
   errnum.style.color="red";
   errnum.style.fontSize="25px"
   return false;

  }
  else if(isNaN(num)){                   
     errnum.innerHTML="Please Enter Digits Only";
      errnum.style.color="red";
     errnum.style.fontSize="25px"
     return false;
  }
  else if(num.length!=10){
     errnum.innerHTML="Please Enter 10 Digits";
      errnum.style.color="red";
     errnum.style.fontSize="25px"
     return false;
  }

  else if(email===""){
     erremail.innerHTML="Please Enter Your Email";
     erremail.style.color="red";
     erremail.style.fontSize="25px"
     return false;
  }

  else if(!(email.includes("@") && email.includes(".com"))){   
   erremail.innerHTML="Please Enter Valid Email";
   erremail.style.color="red";
   return false;
  }

  else if(pass===""){
   errpass.innerHTML="Please Enter Your Password";
   errpass.style.color="red";
   errpass.style.fontSize="25px"
   return false;
}

else if(cpass===""){
   errcpass.innerHTML="Please Confirm Your Password";
   errcpass.style.color="red";
   errcpass.style.fontSize="25px"
   return false;
}

else if(pass!==cpass){
   errcpass.innerHTML="Password and C-Password Should be Same";
   errcpass.style.color="red";
   errcpass.style.fontSize="25px"

   return false;
}

else if(!(
   pass.match(/[1234567890]/) && pass.match(/[!@#$%^&*()]/) && pass.match(/[a-z]/) && pass.match(/[A-Z]/)
)){
   errcpass.innerHTML="Password should have num,symbol,capital and small letters also";
   errcpass.style.color="red";
   errcpass.style.fontSize="25px"

   return false;
}

location.href='localLogin.html'
return false;

}

// section 4 main center div images //

let child1=()=>{
   let imge=document.querySelector("#maincenterdiv")
    imge.style.backgroundImage="url('planeimage/child1.jpeg')"
    imge.style.backgroundSize="contain"
     imge.style.backgroundSize="cover"
    imge.style.backgroundRepeat="no-repeat"
    imge.style.backgroundPosition="center"

}

let child2=()=>{
   let imge2=document.querySelector("#maincenterdiv")
   imge2.style.backgroundImage="url('planeimage/child2.jpeg')"
   imge2.style.backgroundSize="contain"
   imge2.style.backgroundSize="cover"
  imge2.style.backgroundRepeat="no-repeat"
  imge2.style.backgroundPosition="center"
}

let child3=()=>{
   let imge3=document.querySelector("#maincenterdiv")
   imge3.style.backgroundImage="url('planeimage/child3.jpeg')"
   imge3.style.backgroundSize="contain"
   imge3.style.backgroundSize="cover"
   imge3.style.backgroundRepeat="no-repeat"
   imge3.style.backgroundPosition="center"
}

let child4=()=>{
   let imge4=document.querySelector("#maincenterdiv")
   imge4.style.backgroundImage="url('planeimage/express.jpg')"
   imge4.style.backgroundSize="contain"
   imge4.style.backgroundSize="cover"
   imge4.style.backgroundRepeat="no-repeat"
   imge4.style.backgroundPosition="center"
}

let child5=()=>{
   let imge5=document.querySelector("#maincenterdiv")
   imge5.style.backgroundImage="url('planeimage/child1.jpeg')"
   imge5.style.backgroundSize="contain"
   imge5.style.backgroundSize="cover"
   imge5.style.backgroundRepeat="no-repeat"
   imge5.style.backgroundPosition="center"
}

let child6=()=>{
   let imge6=document.querySelector("#maincenterdiv")
   imge6.style.backgroundImage="url('planeimage/child2.jpeg')"
   imge6.style.backgroundSize="contain"
   imge6.style.backgroundSize="cover"
   imge6.style.backgroundRepeat="no-repeat"
   imge6.style.backgroundPosition="center"
}

let child7=()=>{
   let imge7=document.querySelector("#maincenterdiv")
   imge7.style.backgroundImage="url('planeimage/child3.jpeg')"
   imge7.style.backgroundSize="contain"
   imge7.style.backgroundSize="cover"
   imge7.style.backgroundRepeat="no-repeat"
   imge7.style.backgroundPosition="center"
}

let child8=()=>{
   let imge8=document.querySelector("#maincenterdiv")
   imge8.style.backgroundImage="url('planeimage/express.jpg')"
   imge8.style.backgroundSize="contain"
   imge8.style.backgroundSize="cover"
   imge8.style.backgroundRepeat="no-repeat"
   imge8.style.backgroundPosition="center"
}

//  section 4 main center div images ends //






