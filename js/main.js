document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});
$("form").hide();
$("#contact-div a").on("click", function(){
  $("#card-text p").hide();
  $("#contact-div").hide();
  $("form").show();
});


$("form button").on("click", function(){
  event.preventDefault()
  var queryString = $("form").serialize();
    $.ajax({
    url:"http://fvi-grad.com:4004/fakeform?" + queryString,
    success: function(resp, txt, xhr){
      if (resp == "ok") {
        $("form button")
      }
      alert(resp);
  },
  method: "post",
  });

});
