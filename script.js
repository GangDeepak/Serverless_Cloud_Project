//add your api here below
var API_ENDPOINT = "Paste endpoint URL"
//AJAX GET REQUEST
document.getElementById("saveprofile").onclick = function(){
  var inputData = {
    "StuId":$('#Stuid').val(),
        "StuFirstName":$('#fname').val(),
        "empLastName":$('#lname').val(),
    "stdAge":$('#stdage').val()           
      };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
//AJAX GET REQUEST
document.getElementById("getprofile").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#StudentProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#StudentProfile").append("<tr> \
                <td>" + data['stuId'] + "</td> \
                <td>" + data['stuFirstName'] + "</td> \
                <td>" + data['stuLastName'] + "</td> \
                <td>" + data['stuAge'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}