const friends = require('../data/friends');

module.exports = (app, path) => {
    // Display json of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(friends);
        console.log('damn');
    });
    // Handles incoming requests
    app.post('/api/friends', (req, res) => {
        var newfriend = req.body;
        var newscore = newfriend.score;
        var diff = 40;
        var match;
        friends.forEach( f => {
            console.log(`Checking for ${f.name}...`);
            var total = 0;
            let score = f.score;
            score.forEach((num, i)=> {
                total += Math.abs(parseInt(num) - parseInt(newscore[i]));
            });
            if (total < diff) {
                match = f;
                diff = total;
            }
        });
        console.log(`You've been matched with ${match.name}`);
        friends.push(newfriend);
        res.json(match);
    });
}