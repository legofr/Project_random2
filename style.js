function loginbutton(){
     
  score_name1 = document.getElementById("player_1_input").value;
    score_name2 = document.getElementById("player_2_input").value;

    localStorage.setItem("score_name1", score_name1);
    localStorage.setItem("score_name2", score_name2);
    window.location ="math_quiz.html"
}