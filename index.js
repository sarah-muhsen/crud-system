var inputSiteName=document.getElementById("sitename")
var inputSiteUrl=document.getElementById("siteurl")
var namemessage=document.getElementById("namemessage")
var datalist=[];
if(localStorage.getItem("data")!=null){
   datalist= JSON.parse(localStorage.getItem("data"));
   console.log(datalist)
   displaydata()
}
function adddata(){
   if(validname()==true){
    product={
        name:inputSiteName.value ,
        url:inputSiteUrl.value,
    }
    datalist.push(product)
    localStorage.setItem("data",JSON.stringify(datalist))
    clearform()
    displaydata();
    console.log(datalist)
}
   }


function displaydata(){
    cartona="";
for(var i=0;i<datalist.length;i++){
    cartona+=`
    <tr>
    <td>${i}</td>
    <td>${datalist[i].name}</td>
    <td><button class="btn btn-sm btn8"><a class="text-decoration-none text-dark" href="${datalist[i].url}" target="_blank">visit</a></button></td>
    <td><button  onClick="deletedata(${i})"class="btn btn-sm bg-danger">Delete</button></td>
    </tr>
    `
}
document.getElementById("tablebody").innerHTML=cartona;
}
function deletedata(index){
    datalist.splice(index,1)
   localStorage.setItem("data",JSON.stringify(datalist))
    displaydata()
}
function clearform(){
    inputSiteName.value=" ";
    inputSiteUrl.value=" ";



}
function validname(){
   var text=inputSiteName.value;
   var regexname=/^[a-z][A-Z]{3,8}$/
   if(regexname.test(text)) {
    inputSiteName.classList.add("is-valid")
    inputSiteName.classList.remove("is-invalid")
    namemessage.classList.add("d-none")
    return true;
   }
  
else{
    
    inputSiteName.classList.remove("is-valid")
    inputSiteName.classList.add("is-invalid")
    namemessage.classList.remove("d-none")
    return false;

}
}


