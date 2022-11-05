fetch("http://localhost:8080/profile").then((data)=>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    // console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
    tableData +=` <tr>
    <td>${values.name}</td>
    <td>${values.email}</td>
    <td>${values.mobile_number}</td>
  </tr>`;
    })
    document.getElementById("profile_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})



function closeNav() {
    document.getElementsByClassName("sidebar")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.marginLeft = "1%";
    document.getElementsByClassName("hambergurgers")[0].style.display = "inline";
}

function openNav() {
    document.getElementsByClassName("sidebar")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.marginLeft = "0";
}