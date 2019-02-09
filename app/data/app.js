$(document).ready(function() {
    var questions = require('./questions');
    var qbox = $("#qBox");
    var submit = $("#submitBtn");

    questions.forEach((x, i) => {
        let q = `
                <div>
                    <h2>Question ${i + 1}</h2>
                    <p>${x}</p>
                    <select class="form-control" id='q${i + 1}'>
                        <option selected>Choose...</option>
                        <option value='1'>1 Strongly disagree</option>
                        <option value='2'>2 Disagree</option>
                        <option value='3'>3 Neutral</option>
                        <option value='4'>4 Agree</option>
                        <option value='5'>5 Strongly Agree</option>
                    </select>
                </div>
                `;
        qbox.append(q);
    });

    submit.click(e => {
        e.preventDefault();
        var name = $("#nameInput").val().trim();
        var pic = $("#picture").val().trim();
        var score = [];
        questions.forEach((x, i) => {
            let q = $(`#q${i + 1}`).val().trim();
            score.push(q);
        });
        let newfriend = {
            "name": name,
            "pic": pic,
            "score": score
        };
        $.post('/api/friends', newfriend).then(data => {
            $('#modName').text(data.name);
            $('#modPic').attr('src', data.pic);
            $('#modFriend').modal('toggle');
        });
    });
})