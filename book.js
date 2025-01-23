



//  bookingdata
let fetchData=async()=>{

    let url='http://localhost:3000/flights'
    let res=await fetch(url,{method:"GET"})
 
    let data=await res.json()
    console.log(data);
    paginationn(data)
}

 let searchh=async()=>{
  let searchinp=document.querySelector("#searchinp").value.toLowerCase();

  let url='http://localhost:3000/flights'
  let res=await fetch(url,{method:"GET"})

  let data=await res.json()

  let filterData=data.filter((e)=>{
    return e.name.toLowerCase().includes(searchinp) || e.age.toString().includes(searchinp)
  })
  paginationn(filterData)
 }


let paginationn=(data)=>{

  $('#pagin').pagination({
    dataSource: data,
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function(data, pagination) {
      datashow(data)
    }
  })
}

  let datashow=(data)=>{
    let show=document.querySelector("#display")
    show.innerHTML=""
    data.map((e)=>{
 
        show.innerHTML+=`
        
        <tr>
        
         <td class="tbhead">${e.name}</td>
         <td class="tbhead">${e.age}</td>
         <td class="tbhead">${e.number}</td>
         <td class="tbhead">${e.place}</td>
         <td class="tbhead">${e.price}</td>
         <td class="tbhead">${e.people}</td>
         <td class="tbhead">${e.date}</td>
         <td class="tbhead">${e.price*e.people}</td>
         <td onclick="condel('${e.id}')" class="tbheads">Cancel</td>
         <td onclick="formfill('${e.id}')" class="tbheads">Edit</td>
              
       
        </tr>
        `
    })
 
 
 }
 
 
 
 let del=(id)=>{

 
    let urls=`http://localhost:3000/flights/${id}`
 
    fetch(urls,{method:"DELETE"})
 }

 let condel=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
 }
 
 
 
 // bookingform
 
 let formsubmitt=()=>{
 
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
                    date:inpdate,
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
    <input type="number" id="formpeopl" value="${data.people}"> <br>

    <h2>Date</h2>
    <input type="date" id="formdat" value="${data.date}"> <br> <br>

    <input type="submit" onclick="return finalupdate('${data.id}')">
    
    `

  let show=  document.querySelector("#formdisplay")
  show.innerHTML=formdata
}
 

let finalupdate=(id)=>{

    let Name=document.querySelector("#formnam").value
    let Age=document.querySelector("#formag").value
    let Number=document.querySelector("#formnom").value
    let Place=document.querySelector("#formplac").value
    let People=document.querySelector("#formpeopl").value
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
                 place:Place,
                 people:People,
                 date:Date,
                 price:1500,
            }
        )
    })

    return false;
}

