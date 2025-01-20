



//  bookingdata
let fetchData=async()=>{

    let url='http://localhost:3000/flights'
    let res=await fetch(url,{method:"GET"})
 
    let data=await res.json()
    console.log(data);
    
    let show=document.querySelector("#display")
    data.map((e)=>{
 
        show.innerHTML+=`
        
        <tr>
        
         <td>${e.name}</td>
          <td>${e.age}</td>
           <td>${e.number}</td>
            <td>${e.place}</td>
              <td>${e.price}</td>
              <td>${e.people}</td>
              <td>${e.price*e.people}</td>
              <td onclick="del('${e.id}')">Cancel</td>
              
       
        
 
        </tr>
        `
    })
 
 
 }
 
 
 
 let del=(id)=>{
 
    let urls=`http://localhost:3000/flights/${id}`
 
    fetch(urls,{method:"DELETE"})
 }
 
 
 
 // bookingform
 
 let formsubmit=()=>{
 
    let inpname=document.querySelector("#formname").value;
    let inpage=document.querySelector("#formage").value;
    let inpnum=document.querySelector("#formnum").value;
    let inpplace=document.querySelector("#formplace").value;
    let inppeople=document.querySelector("#formpeople").value;
    let inpdate=document.querySelector("#formdate").value;
 
 
    let url='http://localhost:3000/flights'
    fetch(url,{
 
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
 
                 {
                    name:inpname,
                    age:inpage,
                    number:inpnum,
                    place:inpplace,
                    people:inppeople,
                    price:2000
                 }
 
        )
 
 
    })
 
    location.href='bookingdata.html'
    return false;
 }
 