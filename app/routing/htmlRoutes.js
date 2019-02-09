module.exports = (app, path) => {
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // If anything else is typed into the query, re-directs to home page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    })
}