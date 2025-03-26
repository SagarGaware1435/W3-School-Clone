export const dataRecognized = [
  {
    Title: "HTML",
    description: "The language for building web pages",
    buttonsEncountered: [
      "Learn Html",
      "Visual Tutioral",
      "HTML Reference",
      "Get Certified",
    ],
    Example:"HTML Example:",
    code: [
      "<!DOCTYPE html>",
      "<html>",
      "<head>",
      "<title>Page Title</title>",
      "</head>",
      "<body>",
      "<h1>This is a Heading</h1>",
      "<p>This is a paragraph.</p>",
      "</body>",
      "</html>",
    ],
    data: `Try it Yourself`,
    linksEmbedded:'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default'
  },
  {
    Title: "CSS",
    description: "The language for styling web pages",
    buttonsEncountered: ["Learn CSS", "CSS Reference", "Get Certified"],
    Example:"CSS Example:",
    code: [
      "body {",
        "background-color: lightblue;",
      "}",
      
      "h1 {",
        "color: white;",
        "text-align: center;",
      "}",
      
      "p {",
        "font-family: verdana;",
      "}",
    ],
    data: `Try it Yourself`,
    linksEmbedded:"https://www.w3schools.com/css/tryit.asp?filename=trycss_default"
  },
  {
    Title: "Javascript",
    description: "The language for programming web pages",
    
    buttonsEncountered: [
      "Learn Javascript",
      "Javascript Reference",
      "Get Certified",
    ],
    Example:"Javascript Example:",
    code: [
      "<button onclick='myFunction()'>:",
      "Click Me!</button>",
      "<script>",
        "function myFunction() {",
        "let x",
        "x= document.getElementById('demo');",
        "x.style.fontSize = '25px';",
        "x.style.color = 'red';",
        "}",
      "</script>",
    ],
    data: `Try it Yourself`,
    linksEmbedded:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_default"
  },
  {
    Title: "Bootstrap",
    description:
      "Using Bootstrap to create responsive and visually appealing web designs.",
    buttonsEncountered: [
      "Learn Bootstrap",
      "Bootstrap Reference",
      "Get Certified",
    ],
    Example:"Bootstrap Example:",
    code: [
      "<div class='toast show'>",
        "<div class='toast-header'>",
          "Toast Header",
         "<button type='button' ",
         "class='btn-close' ",
         "data-bs-dismiss='toast'></button>",
         "</div>",
        "<div class='toast-body'>" ,
        "Some text inside the toast body",
            "</div>",
           "</div>",
    ],
    data: `Try it Yourself`,
    linksEmbedded:"https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_toast_close&stacked=h"
  },
  {
    Title: "React",
    description:
      "Developing dynamic user interfaces with React for seamless interactivity.",
    buttonsEncountered: [
      "Learn React",
      "Visual Tutioral",
      "React Reference",
      "Get Certified",
    ],
    Example:"React Example:",
    code: [
      "import React from 'react';",
      "import ReactDOM from 'react-dom/client';",
      "function Hello(props) {",
        "return <h1>Hello World!</h1>;",
      "}",
      "const x ",
      "x= document.getElementById('root');",
      "const r = ReactDOM.createRoot(x);",
      "r.render(<Hello />);",
    ],
    data: `Try it Yourself`,
    linksEmbedded:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_test"
  },
  {
    Title: "MongoDB",
    description:
      "Storing and managing data efficiently with MongoDB, a NoSQL database solution.",
    buttonsEncountered: ["Learn MongoDB", "MongoDB Reference", "Get Certified"],
    Example:"MongoDB Example:",
    code: [
      "db.posts.aggregate([",
        "// Stage 1: Only find documents",
        " that have more than 1 like",
        "{",
          "$match: { likes: { $gt: 1 } }",
        "},",
       " // Stage 2: Group documents by ",
       "category and sum each categories likes",
        "{",
          "$group: { _id: '$category',",
          " totalLikes: { $sum: '$likes' } }",
       " }",
      "])",
    ],
    data: `Try it Yourself`,
    linksEmbedded:"https://www.w3schools.com/mongodb/showmongodb.php?filename=demo_aggregations_intro"
  },
];

export const userData ={
  MyLearningContent : "Welcome to the new My learning here at W3schools. This will be your hub to all the tutorials we offer and your learning progress.",
  Note:"We hope you will continue to learn with us.",
  MyLearningButton1 :'Continue "Learn HTML"',
  MyLearningButton2 :"Browse tutorials",
}