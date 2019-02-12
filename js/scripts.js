$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var phoneInput = $("input#phone").val();
    var emailInput= $("input#email").val();
    var addressInput = $("input#address").val();
    var born = $("#born").val();


    $(".person1").append(person1Input);
    $(".phone").append(phoneInput);
    $(".email").append(emailInput);
    $(".address").append("<h1 class="styles"" > + addressInput + "</h1>");
    $(".born").append(born);

    $("#story").show();

    event.preventDefault();
  });
});


$("ul#story").click(function() {
  $("ul#person1").prepend("<li>Goodbye!</li>");
  $("ul#phone").prepend("<li>Goodbye!</li>");
  $("ul#email").prepend("<li>Goodbye!</li>");
  $("ul#address").prepend("<li>Goodbye!</li>");
  $("ul#born").prepend("<li>Goodbye!</li>");
});
