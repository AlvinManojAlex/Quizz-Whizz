let questions = [
    {
        "qn": "Any qualities, feelings or ideas are referred to be",
        "option1": "Abstract nouns",
        "option2": "Common nouns",
        "option3": "Proper nouns",
        "correct": "option1"
    },
    {
        "qn": "Words like crowd, army, fleet and swarm are called",
        "option1": "Collective nouns",
        "option2": "Abstract nouns",
        "option3": "Proper nouns",
        "correct": "option1"
    },
    {
        "qn": "A _____ of thieves was caught by the police last week",
        "option1": "group",
        "option2": "gang",
        "option3": "bunch",
        "correct": "option2"
    },
    {
        "qn": "A _____ of geese swam in the pond",
        "option1": "gang",
        "option2": "stack",
        "option3": "gaggle",
        "correct": "option3"
    },
    {
        "qn": "A ____ of wolves chased a _____ of deer",
        "option1": "group, cattle",
        "option2": "pack, herd",
        "option3": "union, colony",
        "correct": "option2"
    },
    {
        "qn": "The Australian hockey _____ won the match against Japan by four goals",
        "option1": "group",
        "option2": "bundle",
        "option3": "team of players",
        "correct": "option3"
    },
    {
        "qn": "Our _____ consists of thirty members",
        "option1": "jury",
        "option2": "committee",
        "option3": "union",
        "correct": "option2"
    },
    {
        "qn": "She bought a ______ of flowers for her sister",
        "option1": "bunch",
        "option2": "bundle",
        "option3": "bouquet",
        "correct": "option3"
    },
    {
        "qn": "The woman carried a _____ of sticks on her head",
        "option1": "bundle",
        "option2": "group",
        "option3": "None of the above",
        "correct": "option1"
    },
    {
        "qn": "A _____ of sheep was grazing in the meadows",
        "option1": "flock",
        "option2": "herd",
        "option3": "colony",
        "correct": "option1"
    }
];


var score = 0;
var i = 0;
questionload(0);

function questionload(i) {
    $(".question-heading").text(questions[i].qn);
    $("#option1").text(questions[i].option1);
    $("#option2").text(questions[i].option2);
    $("#option3").text(questions[i].option3);
    var chosen = "";

    $(".btn-option").click(function () {

        chosen = $(this).attr("id");
        // console.log(chosen+" and "+questions[i].correct);
        altBtn(chosen, questions[i].correct);
        if (chosen == questions[i].correct) {
            score++;
        }

    });
    
    if (i == questions.length-1) {
        $(".btn-continue").text("Finish");
        // call finish fucnction to display answer
    }
    $(".btn-continue").click(function () {
        i++;
        $(".btn-option").removeClass("btn-correct");
        $(".btn-option").removeClass("btn-wrong");
        questionload(i);
    });

}

function altBtn(chosen, correct) {
    if (chosen == correct) {
        $("#" + chosen).addClass("btn-correct");
    }
    else {
        $("#" + chosen).addClass("btn-wrong");
        $("#" + correct).addClass("btn-correct");
    }
}
