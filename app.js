function myFunction(){
    var list = document.getElementById('show');
    list.style.display="block";
    var menu = document.getElementById('toggle-btn').style.display="none";
    document.getElementById('cls').style.display="block";
}
function navClose(){
    document.getElementById('show').style.display="none";
    document.getElementById('cls').style.display="none";
    document.getElementById('toggle-btn').style.display="block";
}
$(document).ready(function(){
    $("#see-more").click(function(){
      $(".achieve4").fadeIn();
      $(".achieve5").fadeIn("slow");
      $(".achieve6").fadeIn(3000);
      $("#see-more").hide();
      $("#see-less").show();
      
    });
    $("#see-less").click(function(){
      $(".achieve4").hide();
      $(".achieve5").hide();
      $(".achieve6").hide();
      $("#see-less").hide();
      $("#see-more").show();
    });
  });