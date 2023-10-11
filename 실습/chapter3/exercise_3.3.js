const express = require('express');

const port = 3000;
const app = express();

const factorial = (n) => {    
    var sum=1;
    for(var i =1;i<=n;i++)
    {
        sum*=i;
    }
    return sum;
};

app.get('/factorial', (req, res) => 
    res.redirect(`/factorial/${req.query.number}`));

app.get('/factorial/:number', (req, res) => 
    res.send(`${factorial(req.params.number)}`));

app.listen(port, () => console.log(`Server listening on port ${port}!`));