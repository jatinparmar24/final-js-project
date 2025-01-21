



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
               <td onclick="formfill('${e.id}')">Edit</td>
              
       
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

//  formfill

let formfill = async(id)=>{


    let url=`http://localhost:3000/flights/${id}`

    let res=await fetch(url,{method:"GET"})
    let data= await res.json()

    let formdata=`
    
      <h2>Enter Name</h2>
    <input type="text" id="formnam" value="${data.name}"> <br>

    <h2>Enter Your Age</h2>
    <input type="number" id="formag" value="${data.age}"> <br>

    <h2>Enter Number</h2>
    <input type="number" id="formnom" value="${data.number}"> <br>

    <h2>Enter Place</h2>
    <select id="formplac">
             <option value="Mumbai">Mumbai</option>
             <option value="Delhi">Delhi</option>
             <option value="Kashmir">Kashmir</option>
             <option value="Tamil Nadu">Tamil Nadu</option>
             <option value="West Bengal">West Bengal </option>
             <option value="Gujurat">Gujurat</option>

    </select> <br>

    <h2>Enter Number of People</h2>
    <input type="number" id="formpeopl" value="${data.place}"> <br>

    <h2>Date</h2>
    <input type="date" id="formdat" value="${data.date}"> <br> <br>

    <input type="submit" onclick="return finalupdate('${data.id}')">
    
    `

    document.querySelector("#formdisplay").innerHTML=formdata
}
 

let finalupdate=(id)=>{

    let Name=document.querySelector("#formnam").value
    let Age=document.querySelector("#formag").value
    let Number=document.querySelector("#formnom").value
    let People=document.querySelector("#forpeopl").value
    let Date=document.querySelector("#formdat").value

    
    
    let url=`http://localhost:3000/flights/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(
            {
                name:Name,
                 age:Age,
                 number:Number,
                 people:People,
                 date:Date,
                 price:1500,
            }
        )
    })

    return false;
}

