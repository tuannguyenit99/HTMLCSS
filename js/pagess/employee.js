$(document).ready(function(){
  loaddata();
}
)
function loaddata()
{
 $.ajax({

   url:'http://api.manhnv.net/api/employees',
   method:"GET",


 })
 .done(function(res){
       var data =res;
       debugger;
 }).fail(function(res){

 })
}