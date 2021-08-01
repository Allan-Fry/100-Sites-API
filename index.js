const express = require("express");
const port = 3000;
const app = express();

app.use(
    express.json()
);

app.use(
    express.urlencoded(
        { 
            extend: true 
        }
    )
);

app.get ('/', (req, res) => 
        {
            res.json(
                {
                    message: "Hellow World"
                }
            );
        }
);

require("./routes/authors.routes.js")(app);

app.listen(port, () =>{
    console.log(
        `Server is running on localhost:${port}`
    )
});
