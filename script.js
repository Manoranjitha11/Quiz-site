$(document).ready(function() {
  $(".notification").fadeIn(2000);
    $("#next1").attr("disabled", true);
  $("#disable").attr("disabled", true);
  var correctAnswer = 0;
  var incorrectAnswer = 0;
        $("#getAnswer1").click(function(){
            var favorite = [];
            $("#answer").show();
            $(this).attr("disabled", true);
            $("#next1").attr("disabled", false);
            $.each($("input[name='animal']:checked"), function(){            
                favorite.push($(this).val());
            });
            var favString = favorite.join(", ");
            
              if(favString.indexOf("wolverine") >= 0 && favString.indexOf("wolf") >= 0 && favString.indexOf("bear") >= 0 && favorite.length == 3) {
                  $("#answer").html("Correct answer");
                  $("#answer").css("color", "green");
                  correctAnswer += 1;
                } else {
                  $("#answer").html("Incorrect answer");
                  $("#answer").css("color", "red");
                  incorrectAnswer += 1;
                }
            // alert("My favourite sports are: " + favorite.join(", "));
        });

        $("#getAnswer2").click(function(){
            $(this).attr("disabled", true);
            $("#answer").show();
            $("#next2").attr("disabled", false);
            var radioValue = $("input[name='capital']:checked").val();
            if(radioValue == 'delhi'){
                $("#answer").html("Correct answer");
                $("#answer").css("color", "green");
                 correctAnswer += 1;
            } else {
              $("#answer").html("Incorrect answer");
              $("#answer").css("color", "red");

              incorrectAnswer += 1;
            }
            $("#correctAnswer").html(correctAnswer);
            $("#incorrectAnswer").html(incorrectAnswer);
        });

        $("#getAnswer3").click(function(){
          $(this).attr("disabled", true);
          $("#answer").show();

            $("#next3").attr("disabled", false);
            var radioValue = $("input[name='add']:checked").val();
            if(radioValue == '4'){
                $("#answer").html("Correct answer");
                $("#answer").css("color", "green");
                 correctAnswer += 1;
            } else {
                $("#answer").html("Incorrect answer");
                $("#answer").css("color", "red");
                incorrectAnswer += 1;
            }
            $("#correctAnswer").html(correctAnswer);
            $("#incorrectAnswer").html(incorrectAnswer);
        });
        $("#getAnswer4").click(function(){
          $(this).attr("disabled", true);
            $("#next4").attr("disabled", false);
            $("#answer").show();
            var radioValue = $("input[name='computer']:checked").val();
            if(radioValue == 'charles'){
                $("#answer").html("Correct answer");
                $("#answer").css("color", "green");
                 correctAnswer += 1;
            } else {
                $("#answer").html("Incorrect answer");
                $("#answer").css("color", "red");
                incorrectAnswer += 1;
            }
            $("#correctAnswer").html(correctAnswer);
            $("#incorrectAnswer").html(incorrectAnswer);
        });
        $("#getAnswer5").click(function(){
          $(this).attr("disabled", true);
            $("#submit").attr("disabled", false);

            $("#answer").show();
            var radioValue = $("input[name='truefalse']:checked").val();
            if(radioValue == 'true'){
                $("#answer").html("Correct answer");
                $("#answer").css("color", "green");
                 correctAnswer += 1;
            } else {
                $("#answer").html("Incorrect answer");
                $("#answer").css("color", "red");
                incorrectAnswer += 1;
            }
            $("#correctAnswer").html(correctAnswer);
            $("#incorrectAnswer").html(incorrectAnswer);
        });
    $(".pagination-next").click(function(event){
      console.log('check', $("#progress").val());
      var progressVal = $("#progress").val();
      $("#progress").val(progressVal + 20);
      var idNum = event.target.id.split("next")[1];
      idNum = parseInt(idNum);
      $("#answer").hide();
      let fadeOutElem = "#question" + idNum;
      idNum = idNum + 1;
      let fadeInElem = "#question" + idNum;
      let nextDisable = "#next" + idNum;
      $(nextDisable).attr("disabled", true);
      $("#submit").attr("disabled", true);
      $(fadeOutElem).toggle( "slide" );
      $(fadeInElem).toggle( "slide" );
      });
      $("#submit").click(function(event){
      $("#correctAnswerCount").html(correctAnswer);
      $("#question5").toggle( "slide" );
      $("#totalMark").toggle( "slide" );
      $("#progress").hide();
      });
      
      $('#restart').click(function() {
    location.reload();
});
    });


// $(".notification”).slideUp() 