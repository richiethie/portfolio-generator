import inquirer from "inquirer"

import fs from "fs"

const generateHTML = ({name, location, hobby, food, github, linkedin}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <h1>Hi my name is Richie</h1>
    <div class="container">
        <h2>I live in Fond du Lac</h2>
        <h2>My favorite hobby is Skiing</h2>
        <h2>My favorite food is Burgers</h2>
        <h2>My GitHub is richiethie.github</h2>
        <h2>My Linkedin can be found at richiethie.linkedin</h2>
    </div>
    
</body>
</html>`

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where do you live?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?', 
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        }
    ])
    .then((answers) => {
        const htmlContent = generateHTML(answers)
        fs.writeFile("./generatedHTML.html", htmlContent, (error) => {
            if (error) throw error
            else console.log("Successfully created!")
        })
    })
