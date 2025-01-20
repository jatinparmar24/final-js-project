

// gsap

// gsap.to("#logimage",{
//    x:1350,
//    duration:5,
//    dalay:2,
// })

 let login=()=>{

   let loginname=document.querySelector("#loginname").value
   let loginpass=document.querySelector("#loginpass").value

   let localname=localStorage.getItem("Name")
   let localpass=localStorage.getItem("Password")

   if(loginname==localname && loginpass==localpass){
    location.href='localHome.html'
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

//  section 4 main center div images ends //


var swiper = new Swiper(".swiper", {
   cssMode: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   mousewheel: true,
   keyboard: true,
 });