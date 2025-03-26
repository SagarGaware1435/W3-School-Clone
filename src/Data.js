import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';





import "./App.css"
export const dataInfo = [
    // html page 1
    {
        section: "HTML",
        page_name: "Home",
        components: [
            {
                name: "Box1",
                props: {
                    head: "HTML Tutorial",
                    info: [
                        "HTML is the standard markup language for Web pages.",
                        "With HTML you can create your own Website.",
                        "HTML is easy to learn - You will enjoy it!"
                    ],
                    button_data: "Study our free HTML Tutorial"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Easy Learning with HTML "Try it Yourself"`,
                    info: "With our Try it Yourself editor, you can edit the HTML code and view the result:",
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default",
                    data: `Click on the "Try it Yourself" button to see how it works.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Examples",
                    info: "In this HTML tutorial, you will find more than 200 examples. With our online Try it Yourself editor, you can edit and test each example yourself!"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "My Learning",
                    info: "Track your progress with the free My Learning program here at W3Schools. Log in to your account, and start earning points! This is an optional feature. You can study W3Schools without using My Learning.",
                    img: true
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML References",
                    info: "At W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:"
                }
            },
        ],

    },
    // html page 2
    {
        section: "HTML",
        page_name: "Introduction",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Introduction",
                    info: "HTML is the standard markup language for creating Web pages."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is HTML?",
                    links: [
                        "HTML stands for Hyper Text Markup Language",
                        "HTML is the standard markup language for creating Web pages",
                        "HTML describes the structure of a Web page",
                        "HTML consists of a series of elements",
                        "HTML elements tell the browser how to display the content",
                        "HTML elements label pieces of content such as 'this is a heading', 'this is a paragraph' 'this is a link'"
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `A Simple HTML Document`,
                    code: ["<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Example Explained",
                    links: [
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;html&gt;</span> element is the root element of an HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;head&gt;</span> element contains meta information about the HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;h1&gt;</span> element defines a large heading</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;p&gt;</span> element defines a paragraph</>
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is an HTML Element?",
                    info: [
                        "An HTML element is defined by a start tag, some content, and an end tag: <tagname> Content goes here... </tagname>",
                        "The HTML element is everything from the start tag to the end tag: <h1>My First Heading</h1><p>My first paragraph.</p>"
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Web Browsers",
                    info: [
                        "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.",
                        "A browser does not display the HTML tags, but uses them to determine how to display the document"
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Page Structure",
                    info: [
                        "Below is a visualization of an HTML page structure:",
                    ],
                    img: image1,
                    note: "The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab.",
                    img_width: "100%"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML History",
                    info: [
                        "Since the early days of the World Wide Web, there have been many versions of HTML:",
                        "This tutorial follows the latest HTML5 standard."
                    ],
                    img: image2,
                    img_width: "100%"
                }
            },
            {
                name: "Box5",
                props: {
                    info: "This tutorial follows the latest HTML5 standard."
                }
            }
        ]
    },
    // html page 3
    {
        section: "HTML",
        page_name: "Editors",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Editors",
                    info: "A simple text editor is all you need to learn HTML."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "WLearn HTML Using Notepad or TextEdit",
                    info: [
                        "Web pages can be created and modified by using professional HTML editors.",
                        "However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).",
                        "We believe that using a simple text editor is a good way to learn HTML.",
                        "Follow the steps below to create your first web page with Notepad or TextEdit.",
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 1: Open Notepad (PC)",
                    info: [
                        <>Open <b>Finder &gt; Applications &gt; TextEdit</b></>,
                        <>Also change some preferences to get the application to save files correctly. In <b>Preferences &gt; Format &gt;</b>choose<b> "Plain Text"</b></>,
                        `Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".`,
                        <><b>Then open a new document to place the code.</b></>,
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Step 2: Write Some HTML`,
                    info: "Write or copy the following HTML code into Notepad:",
                    code: ["<!DOCTYPE html>", "<html>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    imageSrc: "https://www.w3schools.com/html/img_notepad.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 3: Save the HTML Page",
                    info: [
                        <>Save the file on your computer. Select <b>File &gt; save as</b> in the NotePad menu</>,
                        <>Name the file <b>"index.htm"</b> and set the encoding to <b>UTF-8</b> (which is the preferred encoding for HTML files).</>,
                    ],
                    img: "https://www.w3schools.com/html/img_saveas.png",
                }
            },
            {
                name: "Box5",
                props: {
                    info: <><b>Tip:</b> You can use either .htm or .html as file extension. There is no difference; it is up to you.</>
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 4: View the HTML Page in Your Browser",
                    info: [
                        `Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").`,
                        `The result will look much like this:`
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png",
                    img_width: "60%"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `W3Schools Online Editor - "Try it Yourself"`,
                    info: [
                        "With our free online editor, you can edit the HTML code and view the result in your browser.",
                        "It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:"
                    ],
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    data: <><b>Click on the "Try it Yourself" button to see how it works.</b></>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editors"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "W3Schools Spaces",
                    info: [
                        "If you want to create your own website and save your code online, try our free website builder, called W3schools Spaces:",
                    ],
                    howitworks: true
                }
            }
        ]
    },
    {

        section: "HTML",
        page_name: "Basic",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Basic Examples",
                    info: ["In this chapter, we will show some basic HTML examples.",
                        "Don't worry if we use tags you have not learned about yet."
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Documents",
                    info: [<>All HTML documents must start with a document type declaration: <span className='red_grey'> &lt;!DOCTYPE html&gt;</span></>,
                    <>The HTML document itself begins with <span className='red_grey'> &lt;HTML&gt;</span> and ends with <span className='red_grey'>&lt;HTML&gt;</span>.</>,
                    <>The visible part of the HTML document is between <span className='red_grey'> &lt;Body&gt;</span> and <span className='red_grey'> &lt;Body&gt;</span>.</>
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The <!DOCTYPE> Declaration",
                    info: [<>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration represents the document type and helps browsers display web pages correctly.</>,
                    <>It must only appear once, at the top of the page (before any HTML tags).</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration is not case sensitive.</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration for HTML5 is:</>
                    ],
                    code: ["<!DOCTYPE html>"],
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<h2>This is heading 2</h2>",
                        "<h3>This is heading 3</h3>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_headings"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [<>HTML paragraphs are defined with the <span className='red_grey'> &lt;p&gt;</span> tag:</>],
                    code: ["<p>This is a paragraph.</p>",
                        "<p>This is another paragraph.</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Links",
                    example_info: "HTML links are defined with the <a> tag:",
                    code: [`<a href="https://www.w3schools.com">This is a link</a>`],
                    data: ["The link's destination is specified in the href attribute.",
                        "Attributes are used to provide additional information about HTML elements.",
                        "You will learn more about attributes in a later chapter."
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_link"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Images",
                    info: [<>HTML images are defined with the <span className='red_grey'>&lt;img&gt;</span> tag.</>,
                    <>The source file (<span className='red_grey'>src</span>), alternative text (<span className='red_grey'>alt</span>), <span className='red_grey'>width</span>, and <span className='red_grey'>height</span> are provided as attributes:</>
                    ],
                    code: [`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_img"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "How to View HTML Source",
                    info: `Have you ever seen a Web page and wondered "Hey! How did they do that?"`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "View HTML Source Code:",
                    info: `Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Inspect an HTML Element:",
                    info: `Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.`
                }
            },

        ]
    },
    {

        section: "HTML",
        page_name: "Elements",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Elements",
                    info: ["An HTML element is defined by a start tag, some content, and an end tag."],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Elements",
                    info: ["The HTML element is everything from the start tag to the end tag:",
                        "<tagname>Content goes here...</tagname>",
                        "Examples of some HTML elements:",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>"],
                    img: image5,
                    img_width: "100%"
                }

            },
            {
                name: "Box5",
                props: {
                    info: `"Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!"`,
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Nested HTML Elements",
                    info: ["HTML elements can be nested (this means that elements can contain other elements).",
                        "All HTML documents consist of nested HTML elements.",
                        "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):"
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Example Explained",
                    info: [
                        <>The <span className='red_grey'>&lt;html&gt;</span> element is the root element and it defines the whole HTML document.</>,
                        <>It has a start tag <span className='red_grey'>&lt;html&gt;</span> and an end tag <span className='red_grey'>&lt;/html&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;html&gt;</span> element there is a <span className='red_grey'>&lt;body&gt;</span> element:</>
                    ],
                    code: ["<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>"
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;body&gt;</span> element defines the document's body.</>,
                        <>It has a start tag <span className='red_grey'>&lt;body&gt;</span> and an end tag <span className='red_grey'>&lt;/body&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;body&gt;</span> element there are two other elements: <span className='red_grey'>&lt;h1&gt;</span> and <span className='red_grey'>&lt;p&gt;</span>:</>
                    ],
                }

            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>It has a start tag <span className='red_grey'>&lt;p&gt;</span> and an end tag <span className='red_grey'>&lt;/p&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;h1&gt;</span> element defines a heading.</>,
                        <>It has a start tag <span className='red_grey'>&lt;h1&gt;</span> and an end tag <span className='red_grey'>&lt;/h1&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<p>My first paragraph.</p>",
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Never Skip the End Tag",
                    info: ["Some HTML elements will display correctly, even if you forget the end tag"],
                    code: ["<html>",
                        "<body>",
                        "<p>This is a paragraph",
                        "<p>This is a paragraph",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_no_endtag",
                    data_bold: "However, never rely on this! Unexpected results and errors may occur if you forget the end tag!"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Empty HTML Elements",
                    info: ["HTML elements with no content are called empty elements.",
                        "The <br> tag defines a line break, and is an empty element without a closing tag:"
                    ],
                    code: ["<p>This is a <br> paragraph with a line break.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML is Not Case Sensitive",
                    info: ["HTML tags are not case sensitive: <P> means the same as <p>.",
                        "The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML."
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes.",
                        "Tag	Description",
                        "<html>	Defines the root of an HTML document",
                        "<body>	Defines the document's body",
                        "<h1> to <h6>	Defines HTML headings"
                    ],
                    data: "For a complete list of all available HTML tags, visit our HTML Tag Reference.",
                }

            },

        ]
    },


    {

        section: "HTML",
        page_name: "Headings",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Headings",
                    info: ["HTML headings are titles or subtitles that you want to display on a webpage."],
                    code: ["Heading 1",
                        "Heading 2",
                        "Heading 3",
                        "Heading 4",
                        "Heading 5",
                        "Heading 6"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>Heading 1</h1>",
                        "<h2>Heading 2</h2>",
                        "<h3>Heading 3</h3>",
                        "<h4>Heading 4</h4>",
                        "<h5>Heading 5</h5>",
                        "<h6>Heading 6</h6>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings",
                }
            },
            {
                name: "Box5",
                props: {
                    info: "Browsers automatically add some white space (a margin) before and after a heading."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Headings Are Important",
                    info: [
                        "Search engines use the headings to index the structure and content of your web pages.",
                        "Users often skim a page by its headings. It i s important to use headings to show the document structure.",
                        <><span className='red_grey'>&lt;h1&gt;</span> headings should be used for main headings, followed by <span className='red_grey'>&lt;h2&gt;</span> headings, then the less important <span className='red_grey'>&lt;h3&gt;</span>, and so on.</>
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: <><b>Note:</b> Use HTML headings for headings only. Don't use headings to make text BIG or bold.</>
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Bigger Headings",
                    info: [<>Each HTML heading has a default size. However, you can specify the size for any heading with the <span className='red_grey'>style</span> attribute, using the CSS <span className='red_grey'>font-size</span> property:</>],
                    code: [`<h1 style="font-size:60px;">Heading 1</h1>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_size"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes."],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "For a complete list of all available HTML tags, visit our HTML Tag Reference."
                }
            }

        ]
    },
    {
        section: "HTML",
        page_name: "Paragraphs",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Paragraphs",
                    info: [<>"A paragraph always starts on a new line, and is usually a block of text."</>],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a <span className='red_grey'>&lt;p&gt;</span> element.</>
                    ],
                    code: ["<p>This is a paragraph.</p>", "<p>This is another paragraph.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs1"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Display",
                    info: [
                        <>You cannot be sure how HTML will be displayed.</>,
                        <>Large or small screens, and resized windows will create different results.</>,
                        <>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</>,
                        <>The browser will automatically remove any extra spaces and lines when the page is displayed:</>
                    ],
                    code: [
                        "<p>",
                        "This paragraph",
                        "contains a lot of lines",
                        "in the source code,",
                        "but the browser",
                        "ignores it.",
                        "</p>",
                        "<p>",
                        "This paragraph",
                        "contains         a lot of spaces",
                        "in the source         code,",
                        "but the        browser",
                        "ignores it.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs2"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Horizontal Rules",
                    info: [
                        <>The <span className='red_grey'>&lt;hr&gt;</span> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</>,
                        <>The <span className='red_grey'>&lt;hr&gt;</span> element is used to separate content (or define a change) in an HTML page:</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<p>This is some text.</p>",
                        "<hr>",
                        "<h2>This is heading 2</h2>",
                        "<p>This is some other text.</p>",
                        "<hr>"
                    ],
                    data: <><span className='red_grey'>&lt;hr&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_hr"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Line Breaks",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;br&gt;</span> element defines a line break.</>,
                        <>Use <span className='red_grey'>&lt;br&gt;</span> if you want a line break (a new line) without starting a new paragraph:</>
                    ],
                    code: ["<p>This is<br>a paragraph<br>with line breaks.</p>"],
                    data: <><span className='red_grey'>&lt;br&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The Poem Problem",
                    info: [<>"This poem will display on a single line:"</>],
                    code: [
                        "<p>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_poem"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Solution - The HTML <pre> Element",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;pre&gt;</span> element defines preformatted text. The text inside a <span className='red_grey'>&lt;pre&gt;</span> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</>
                    ],
                    code: ["<pre>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</pre>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_pre",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: [<>"W3Schools' tag reference contains additional information about these tags and their attributes."</>],
                }
            },
            {
                name: "Box5",
                props: {
                    info: <>"For a complete list of all available HTML tags, visit our HTML Tag Reference."</>
                }
            }
        ]
    },

    {
        section: "HTML",
        page_name: "Styles",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Styles",
                    info: ["The HTML style attribute is used to add styles to an element, such as color, font, size, and more."],
                    code: ["I am Red",
                        "I am Blue",
                        "I am Big",
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_intro",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The HTML Style Attribute",
                    info: ["Setting the style of an HTML element, can be done with the style attribute.",
                        "The HTML style attribute has the following syntax:"
                    ],
                    code: [`<tagname style="property:value;">`],
                }
            },
            {
                name: "Box5",
                props: {
                    info: "You will learn more about CSS later in this tutorial.",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Background Color",
                    info: ["The CSS background-color property defines the background color for an HTML element."],
                    example_info: ["Set the background color for a page to powderblue:"],
                    code: [`<body style="background-color:powderblue;">`,
                        "<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color"
                }
            },
            {
                name: "Box2",
                props: {
                    example_info: ["Set background color for two different elements:"],
                    code: ["<body>",
                        `<h1 style="background-color:powderblue;">This is a heading</h1>`,
                        `<p style="background-color:tomato;">This is a paragraph.</p>`,
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color2",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Color",
                    info: ["The CSS color property defines the text color for an HTML element:"],
                    code: [`<h1 style="color:blue;">This is a heading</h1>
                    <p style="color:red;">This is a paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Fonts",
                    info: ["The CSS font-family property defines the font to be used for an HTML element:"],
                    code: [`<h1 style="font-family:verdana;">This is a heading</h1>`,
                        `<p style="font-family:courier;">This is a paragraph.</p>`
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_font-family"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Size",
                    info: ["The CSS font-size property defines the text size for an HTML element:"],
                    code: [`<h1 style="font-size:300%;">This is a heading</h1>
                    <p style="font-size:160%;">This is a paragraph.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Alignment",
                    info: ["The CSS text-align property defines the horizontal text alignment for an HTML element:"],
                    code: [`<h1 style="text-align:center;">Centered Heading</h1>
                    <p style="text-align:center;">Centered paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Chapter Summary",
                    links: [
                        <>Use the <span className='red_grey'>style</span> attribute for styling HTML elements</>,
                        <>Use <span className='red_grey'>background-color</span> for background color</>,
                        <>Use <span className='red_grey'>color</span> for text colors</>,
                        <>Use <span className='red_grey'>font-family</span> for text fonts</>,
                        <>Use <span className='red_grey'>font-size</span> for text sizes</>,
                        <>Use <span className='red_grey'>text-align</span> for text alignment</>
                    ],

                }
            },
        ]

    },
    {
        section: "HTML",
        page_name: "Formating",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Text Formatting",
                    info: ["HTML contains several elements for defining text with a special meaning."],
                    code: [`This text is bold
                    This text is italic
                    This is subscript and superscript`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_intro",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Formatting Elements",
                    info: ["Formatting elements were designed to display special types of text:"],
                    links: [
                        <><span className='red_grey'>&lt;b&gt;</span> for bold text</>,
                        <><span className='red_grey'>&lt;strong&gt;</span> for important text</>,
                        <><span className='red_grey'>&lt;i&gt;</span> for italic text</>,
                        <><span className='red_grey'>&lt;em&gt;</span> for emphasized text</>,
                        <><span className='red_grey'>&lt;mark&gt;</span> for marked text</>,
                        <><span className='red_grey'>&lt;small&gt;</span> for smaller text</>,
                        <><span className='red_grey'>&lt;del&gt;</span> for deleted text</>,
                        <><span className='red_grey'>&lt;ins&gt;</span> for inserted text</>,
                        <><span className='red_grey'>&lt;sub&gt;</span> for subscript text</>,
                        <><span className='red_grey'>&lt;sup&gt;</span> for superscript text</>
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <b> and <strong> Elements",
                    info: ["The HTML <b> element defines bold text, without any extra importance."],
                    code: ["<b>This text is bold</b>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_b",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold."],
                    code: ["<strong>This text is important!</strong>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_strong"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <i> and <em> Elements",
                    info: ["The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.",
                        "Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.",
                        "Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <small> Element",
                    info: ["The HTML <small> element defines smaller text:"],
                    code: ["<small>This text is small</small>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <ins> Element",
                    info: ["The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:"],
                    code: ["<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <sub> Element",
                    info: ["The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:"],
                    code: [`<p>This is <sub>subscripted</sub> text.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            }
        ]
    },


    //copy pasted from above section 2 starts 
    //
    //
    {
        section: "HTML",
        page_name: "Quotations",
        components: [
            {
                name: "Box1",
                props: {
                    head: "HTML Tutorial",
                    info: [
                        "HTML is the standard markup language for Web pages.",
                        "With HTML you can create your own Website.",
                        "HTML is easy to learn - You will enjoy it!"
                    ],
                    button_data: "Study our free HTML Tutorial"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Easy Learning with HTML "Try it Yourself"`,
                    info: "With our Try it Yourself editor, you can edit the HTML code and view the result:",
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default",
                    data: `Click on the "Try it Yourself" button to see how it works.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Examples",
                    info: "In this HTML tutorial, you will find more than 200 examples. With our online Try it Yourself editor, you can edit and test each example yourself!"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "My Learning",
                    info: "Track your progress with the free My Learning program here at W3Schools. Log in to your account, and start earning points! This is an optional feature. You can study W3Schools without using My Learning.",
                    img: true
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML References",
                    info: "At W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:"
                }
            },
        ],

    },
    // html page 2
    {
        section: "HTML",
        page_name: "Comments",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Introduction",
                    info: "HTML is the standard markup language for creating Web pages."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is HTML?",
                    links: [
                        "HTML stands for Hyper Text Markup Language",
                        "HTML is the standard markup language for creating Web pages",
                        "HTML describes the structure of a Web page",
                        "HTML consists of a series of elements",
                        "HTML elements tell the browser how to display the content",
                        "HTML elements label pieces of content such as 'this is a heading', 'this is a paragraph' 'this is a link'"
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `A Simple HTML Document`,
                    code: ["<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Example Explained",
                    links: [
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;html&gt;</span> element is the root element of an HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;head&gt;</span> element contains meta information about the HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;h1&gt;</span> element defines a large heading</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;p&gt;</span> element defines a paragraph</>
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is an HTML Element?",
                    info: [
                        "An HTML element is defined by a start tag, some content, and an end tag: <tagname> Content goes here... </tagname>",
                        "The HTML element is everything from the start tag to the end tag: <h1>My First Heading</h1><p>My first paragraph.</p>"
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Web Browsers",
                    info: [
                        "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.",
                        "A browser does not display the HTML tags, but uses them to determine how to display the document"
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Page Structure",
                    info: [
                        "Below is a visualization of an HTML page structure:",
                    ],
                    img: image1,
                    note: "The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab.",
                    img_width: "100%"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML History",
                    info: [
                        "Since the early days of the World Wide Web, there have been many versions of HTML:",
                        "This tutorial follows the latest HTML5 standard."
                    ],
                    img: image2,
                    img_width: "100%"
                }
            },
            {
                name: "Box5",
                props: {
                    info: "This tutorial follows the latest HTML5 standard."
                }
            }
        ]
    },
    // html page 3
    {
        section: "HTML",
        page_name: "Colors",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Editors",
                    info: "A simple text editor is all you need to learn HTML."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "WLearn HTML Using Notepad or TextEdit",
                    info: [
                        "Web pages can be created and modified by using professional HTML editors.",
                        "However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).",
                        "We believe that using a simple text editor is a good way to learn HTML.",
                        "Follow the steps below to create your first web page with Notepad or TextEdit.",
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 1: Open Notepad (PC)",
                    info: [
                        <>Open <b>Finder &gt; Applications &gt; TextEdit</b></>,
                        <>Also change some preferences to get the application to save files correctly. In <b>Preferences &gt; Format &gt;</b>choose<b> "Plain Text"</b></>,
                        `Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".`,
                        <><b>Then open a new document to place the code.</b></>,
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Step 2: Write Some HTML`,
                    info: "Write or copy the following HTML code into Notepad:",
                    code: ["<!DOCTYPE html>", "<html>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    imageSrc: "https://www.w3schools.com/html/img_notepad.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 3: Save the HTML Page",
                    info: [
                        <>Save the file on your computer. Select <b>File &gt; save as</b> in the NotePad menu</>,
                        <>Name the file <b>"index.htm"</b> and set the encoding to <b>UTF-8</b> (which is the preferred encoding for HTML files).</>,
                    ],
                    img: "https://www.w3schools.com/html/img_saveas.png",
                }
            },
            {
                name: "Box5",
                props: {
                    info: <><b>Tip:</b> You can use either .htm or .html as file extension. There is no difference; it is up to you.</>
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 4: View the HTML Page in Your Browser",
                    info: [
                        `Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").`,
                        `The result will look much like this:`
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png",
                    img_width: "60%"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `W3Schools Online Editor - "Try it Yourself"`,
                    info: [
                        "With our free online editor, you can edit the HTML code and view the result in your browser.",
                        "It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:"
                    ],
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    data: <><b>Click on the "Try it Yourself" button to see how it works.</b></>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editors"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "W3Schools Spaces",
                    info: [
                        "If you want to create your own website and save your code online, try our free website builder, called W3schools Spaces:",
                    ],
                    howitworks: true
                }
            }
        ]
    },
    {

        section: "HTML",
        page_name: "CSS",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Basic Examples",
                    info: ["In this chapter, we will show some basic HTML examples.",
                        "Don't worry if we use tags you have not learned about yet."
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Documents",
                    info: [<>All HTML documents must start with a document type declaration: <span className='red_grey'> &lt;!DOCTYPE html&gt;</span></>,
                    <>The HTML document itself begins with <span className='red_grey'> &lt;HTML&gt;</span> and ends with <span className='red_grey'>&lt;HTML&gt;</span>.</>,
                    <>The visible part of the HTML document is between <span className='red_grey'> &lt;Body&gt;</span> and <span className='red_grey'> &lt;Body&gt;</span>.</>
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The <!DOCTYPE> Declaration",
                    info: [<>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration represents the document type and helps browsers display web pages correctly.</>,
                    <>It must only appear once, at the top of the page (before any HTML tags).</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration is not case sensitive.</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration for HTML5 is:</>
                    ],
                    code: ["<!DOCTYPE html>"],
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<h2>This is heading 2</h2>",
                        "<h3>This is heading 3</h3>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_headings"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [<>HTML paragraphs are defined with the <span className='red_grey'> &lt;p&gt;</span> tag:</>],
                    code: ["<p>This is a paragraph.</p>",
                        "<p>This is another paragraph.</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Links",
                    example_info: "HTML links are defined with the <a> tag:",
                    code: [`<a href="https://www.w3schools.com">This is a link</a>`],
                    data: ["The link's destination is specified in the href attribute.",
                        "Attributes are used to provide additional information about HTML elements.",
                        "You will learn more about attributes in a later chapter."
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_link"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Images",
                    info: [<>HTML images are defined with the <span className='red_grey'>&lt;img&gt;</span> tag.</>,
                    <>The source file (<span className='red_grey'>src</span>), alternative text (<span className='red_grey'>alt</span>), <span className='red_grey'>width</span>, and <span className='red_grey'>height</span> are provided as attributes:</>
                    ],
                    code: [`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_img"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "How to View HTML Source",
                    info: `Have you ever seen a Web page and wondered "Hey! How did they do that?"`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "View HTML Source Code:",
                    info: `Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Inspect an HTML Element:",
                    info: `Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.`
                }
            },

        ]
    },
    {

        section: "HTML",
        page_name: "Links",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Elements",
                    info: ["An HTML element is defined by a start tag, some content, and an end tag."],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Elements",
                    info: ["The HTML element is everything from the start tag to the end tag:",
                        "<tagname>Content goes here...</tagname>",
                        "Examples of some HTML elements:",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>"],
                    img: image5,
                    img_width: "100%"
                }

            },
            {
                name: "Box5",
                props: {
                    info: `"Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!"`,
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Nested HTML Elements",
                    info: ["HTML elements can be nested (this means that elements can contain other elements).",
                        "All HTML documents consist of nested HTML elements.",
                        "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):"
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Example Explained",
                    info: [
                        <>The <span className='red_grey'>&lt;html&gt;</span> element is the root element and it defines the whole HTML document.</>,
                        <>It has a start tag <span className='red_grey'>&lt;html&gt;</span> and an end tag <span className='red_grey'>&lt;/html&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;html&gt;</span> element there is a <span className='red_grey'>&lt;body&gt;</span> element:</>
                    ],
                    code: ["<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>"
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;body&gt;</span> element defines the document's body.</>,
                        <>It has a start tag <span className='red_grey'>&lt;body&gt;</span> and an end tag <span className='red_grey'>&lt;/body&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;body&gt;</span> element there are two other elements: <span className='red_grey'>&lt;h1&gt;</span> and <span className='red_grey'>&lt;p&gt;</span>:</>
                    ],
                }

            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>It has a start tag <span className='red_grey'>&lt;p&gt;</span> and an end tag <span className='red_grey'>&lt;/p&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;h1&gt;</span> element defines a heading.</>,
                        <>It has a start tag <span className='red_grey'>&lt;h1&gt;</span> and an end tag <span className='red_grey'>&lt;/h1&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<p>My first paragraph.</p>",
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Never Skip the End Tag",
                    info: ["Some HTML elements will display correctly, even if you forget the end tag"],
                    code: ["<html>",
                        "<body>",
                        "<p>This is a paragraph",
                        "<p>This is a paragraph",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_no_endtag",
                    data_bold: "However, never rely on this! Unexpected results and errors may occur if you forget the end tag!"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Empty HTML Elements",
                    info: ["HTML elements with no content are called empty elements.",
                        "The <br> tag defines a line break, and is an empty element without a closing tag:"
                    ],
                    code: ["<p>This is a <br> paragraph with a line break.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML is Not Case Sensitive",
                    info: ["HTML tags are not case sensitive: <P> means the same as <p>.",
                        "The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML."
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes.",
                        "Tag	Description",
                        "<html>	Defines the root of an HTML document",
                        "<body>	Defines the document's body",
                        "<h1> to <h6>	Defines HTML headings"
                    ],
                    data: "For a complete list of all available HTML tags, visit our HTML Tag Reference.",
                }

            },

        ]
    },


    {

        section: "HTML",
        page_name: "Images",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Headings",
                    info: ["HTML headings are titles or subtitles that you want to display on a webpage."],
                    code: ["Heading 1",
                        "Heading 2",
                        "Heading 3",
                        "Heading 4",
                        "Heading 5",
                        "Heading 6"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>Heading 1</h1>",
                        "<h2>Heading 2</h2>",
                        "<h3>Heading 3</h3>",
                        "<h4>Heading 4</h4>",
                        "<h5>Heading 5</h5>",
                        "<h6>Heading 6</h6>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings",
                }
            },
            {
                name: "Box5",
                props: {
                    info: "Browsers automatically add some white space (a margin) before and after a heading."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Headings Are Important",
                    info: [
                        "Search engines use the headings to index the structure and content of your web pages.",
                        "Users often skim a page by its headings. It i s important to use headings to show the document structure.",
                        <><span className='red_grey'>&lt;h1&gt;</span> headings should be used for main headings, followed by <span className='red_grey'>&lt;h2&gt;</span> headings, then the less important <span className='red_grey'>&lt;h3&gt;</span>, and so on.</>
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: <><b>Note:</b> Use HTML headings for headings only. Don't use headings to make text BIG or bold.</>
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Bigger Headings",
                    info: [<>Each HTML heading has a default size. However, you can specify the size for any heading with the <span className='red_grey'>style</span> attribute, using the CSS <span className='red_grey'>font-size</span> property:</>],
                    code: [`<h1 style="font-size:60px;">Heading 1</h1>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_size"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes."],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "For a complete list of all available HTML tags, visit our HTML Tag Reference."
                }
            }

        ]
    },
    {
        section: "HTML",
        page_name: "Favicons",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Paragraphs",
                    info: [<>"A paragraph always starts on a new line, and is usually a block of text."</>],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a <span className='red_grey'>&lt;p&gt;</span> element.</>
                    ],
                    code: ["<p>This is a paragraph.</p>", "<p>This is another paragraph.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs1"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Display",
                    info: [
                        <>You cannot be sure how HTML will be displayed.</>,
                        <>Large or small screens, and resized windows will create different results.</>,
                        <>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</>,
                        <>The browser will automatically remove any extra spaces and lines when the page is displayed:</>
                    ],
                    code: [
                        "<p>",
                        "This paragraph",
                        "contains a lot of lines",
                        "in the source code,",
                        "but the browser",
                        "ignores it.",
                        "</p>",
                        "<p>",
                        "This paragraph",
                        "contains         a lot of spaces",
                        "in the source         code,",
                        "but the        browser",
                        "ignores it.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs2"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Horizontal Rules",
                    info: [
                        <>The <span className='red_grey'>&lt;hr&gt;</span> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</>,
                        <>The <span className='red_grey'>&lt;hr&gt;</span> element is used to separate content (or define a change) in an HTML page:</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<p>This is some text.</p>",
                        "<hr>",
                        "<h2>This is heading 2</h2>",
                        "<p>This is some other text.</p>",
                        "<hr>"
                    ],
                    data: <><span className='red_grey'>&lt;hr&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_hr"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Line Breaks",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;br&gt;</span> element defines a line break.</>,
                        <>Use <span className='red_grey'>&lt;br&gt;</span> if you want a line break (a new line) without starting a new paragraph:</>
                    ],
                    code: ["<p>This is<br>a paragraph<br>with line breaks.</p>"],
                    data: <><span className='red_grey'>&lt;br&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The Poem Problem",
                    info: [<>"This poem will display on a single line:"</>],
                    code: [
                        "<p>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_poem"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Solution - The HTML <pre> Element",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;pre&gt;</span> element defines preformatted text. The text inside a <span className='red_grey'>&lt;pre&gt;</span> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</>
                    ],
                    code: ["<pre>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</pre>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_pre",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: [<>"W3Schools' tag reference contains additional information about these tags and their attributes."</>],
                }
            },
            {
                name: "Box5",
                props: {
                    info: <>"For a complete list of all available HTML tags, visit our HTML Tag Reference."</>
                }
            }
        ]
    },

    {
        section: "HTML",
        page_name: "Table",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Styles",
                    info: ["The HTML style attribute is used to add styles to an element, such as color, font, size, and more."],
                    code: ["I am Red",
                        "I am Blue",
                        "I am Big",
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_intro",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The HTML Style Attribute",
                    info: ["Setting the style of an HTML element, can be done with the style attribute.",
                        "The HTML style attribute has the following syntax:"
                    ],
                    code: [`<tagname style="property:value;">`],
                }
            },
            {
                name: "Box5",
                props: {
                    info: "You will learn more about CSS later in this tutorial.",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Background Color",
                    info: ["The CSS background-color property defines the background color for an HTML element."],
                    example_info: ["Set the background color for a page to powderblue:"],
                    code: [`<body style="background-color:powderblue;">`,
                        "<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color"
                }
            },
            {
                name: "Box2",
                props: {
                    example_info: ["Set background color for two different elements:"],
                    code: ["<body>",
                        `<h1 style="background-color:powderblue;">This is a heading</h1>`,
                        `<p style="background-color:tomato;">This is a paragraph.</p>`,
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color2",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Color",
                    info: ["The CSS color property defines the text color for an HTML element:"],
                    code: [`<h1 style="color:blue;">This is a heading</h1>
                    <p style="color:red;">This is a paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Fonts",
                    info: ["The CSS font-family property defines the font to be used for an HTML element:"],
                    code: [`<h1 style="font-family:verdana;">This is a heading</h1>`,
                        `<p style="font-family:courier;">This is a paragraph.</p>`
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_font-family"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Size",
                    info: ["The CSS font-size property defines the text size for an HTML element:"],
                    code: [`<h1 style="font-size:300%;">This is a heading</h1>
                    <p style="font-size:160%;">This is a paragraph.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Alignment",
                    info: ["The CSS text-align property defines the horizontal text alignment for an HTML element:"],
                    code: [`<h1 style="text-align:center;">Centered Heading</h1>
                    <p style="text-align:center;">Centered paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Chapter Summary",
                    links: [
                        <>Use the <span className='red_grey'>style</span> attribute for styling HTML elements</>,
                        <>Use <span className='red_grey'>background-color</span> for background color</>,
                        <>Use <span className='red_grey'>color</span> for text colors</>,
                        <>Use <span className='red_grey'>font-family</span> for text fonts</>,
                        <>Use <span className='red_grey'>font-size</span> for text sizes</>,
                        <>Use <span className='red_grey'>text-align</span> for text alignment</>
                    ],

                }
            },
        ]

    },
    {
        section: "HTML",
        page_name: "Lists",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Text Formatting",
                    info: ["HTML contains several elements for defining text with a special meaning."],
                    code: [`This text is bold
                    This text is italic
                    This is subscript and superscript`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_intro",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Formatting Elements",
                    info: ["Formatting elements were designed to display special types of text:"],
                    links: [
                        <><span className='red_grey'>&lt;b&gt;</span> for bold text</>,
                        <><span className='red_grey'>&lt;strong&gt;</span> for important text</>,
                        <><span className='red_grey'>&lt;i&gt;</span> for italic text</>,
                        <><span className='red_grey'>&lt;em&gt;</span> for emphasized text</>,
                        <><span className='red_grey'>&lt;mark&gt;</span> for marked text</>,
                        <><span className='red_grey'>&lt;small&gt;</span> for smaller text</>,
                        <><span className='red_grey'>&lt;del&gt;</span> for deleted text</>,
                        <><span className='red_grey'>&lt;ins&gt;</span> for inserted text</>,
                        <><span className='red_grey'>&lt;sub&gt;</span> for subscript text</>,
                        <><span className='red_grey'>&lt;sup&gt;</span> for superscript text</>
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <b> and <strong> Elements",
                    info: ["The HTML <b> element defines bold text, without any extra importance."],
                    code: ["<b>This text is bold</b>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_b",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold."],
                    code: ["<strong>This text is important!</strong>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_strong"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <i> and <em> Elements",
                    info: ["The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.",
                        "Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.",
                        "Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <small> Element",
                    info: ["The HTML <small> element defines smaller text:"],
                    code: ["<small>This text is small</small>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <ins> Element",
                    info: ["The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:"],
                    code: ["<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <sub> Element",
                    info: ["The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:"],
                    code: [`<p>This is <sub>subscripted</sub> text.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            }
        ]
    },
    {
        section: "HTML",
        page_name: "Classes",
        components: [
            {
                name: "Box1",
                props: {
                    head: "HTML Tutorial",
                    info: [
                        "HTML is the standard markup language for Web pages.",
                        "With HTML you can create your own Website.",
                        "HTML is easy to learn - You will enjoy it!"
                    ],
                    button_data: "Study our free HTML Tutorial"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Easy Learning with HTML "Try it Yourself"`,
                    info: "With our Try it Yourself editor, you can edit the HTML code and view the result:",
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default",
                    data: `Click on the "Try it Yourself" button to see how it works.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Examples",
                    info: "In this HTML tutorial, you will find more than 200 examples. With our online Try it Yourself editor, you can edit and test each example yourself!"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "My Learning",
                    info: "Track your progress with the free My Learning program here at W3Schools. Log in to your account, and start earning points! This is an optional feature. You can study W3Schools without using My Learning.",
                    img: true
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML References",
                    info: "At W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:"
                }
            },
        ],

    },
    // html page 2
    {
        section: "HTML",
        page_name: "Layout",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Introduction",
                    info: "HTML is the standard markup language for creating Web pages."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is HTML?",
                    links: [
                        "HTML stands for Hyper Text Markup Language",
                        "HTML is the standard markup language for creating Web pages",
                        "HTML describes the structure of a Web page",
                        "HTML consists of a series of elements",
                        "HTML elements tell the browser how to display the content",
                        "HTML elements label pieces of content such as 'this is a heading', 'this is a paragraph' 'this is a link'"
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `A Simple HTML Document`,
                    code: ["<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Example Explained",
                    links: [
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;html&gt;</span> element is the root element of an HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;head&gt;</span> element contains meta information about the HTML page</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;h1&gt;</span> element defines a large heading</>,
                        <>The <span className='text-[#de143c] bg-[#f5f5f5] font-semibold'>&lt;p&gt;</span> element defines a paragraph</>
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is an HTML Element?",
                    info: [
                        "An HTML element is defined by a start tag, some content, and an end tag: <tagname> Content goes here... </tagname>",
                        "The HTML element is everything from the start tag to the end tag: <h1>My First Heading</h1><p>My first paragraph.</p>"
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Web Browsers",
                    info: [
                        "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.",
                        "A browser does not display the HTML tags, but uses them to determine how to display the document"
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Page Structure",
                    info: [
                        "Below is a visualization of an HTML page structure:",
                    ],
                    img: image1,
                    note: "The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab.",
                    img_width: "100%"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML History",
                    info: [
                        "Since the early days of the World Wide Web, there have been many versions of HTML:",
                        "This tutorial follows the latest HTML5 standard."
                    ],
                    img: image2,
                    img_width: "100%"
                }
            },
            {
                name: "Box5",
                props: {
                    info: "This tutorial follows the latest HTML5 standard."
                }
            }
        ]
    },
    // html page 3
    {
        section: "HTML",
        page_name: "Responsive",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Editors",
                    info: "A simple text editor is all you need to learn HTML."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "WLearn HTML Using Notepad or TextEdit",
                    info: [
                        "Web pages can be created and modified by using professional HTML editors.",
                        "However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).",
                        "We believe that using a simple text editor is a good way to learn HTML.",
                        "Follow the steps below to create your first web page with Notepad or TextEdit.",
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 1: Open Notepad (PC)",
                    info: [
                        <>Open <b>Finder &gt; Applications &gt; TextEdit</b></>,
                        <>Also change some preferences to get the application to save files correctly. In <b>Preferences &gt; Format &gt;</b>choose<b> "Plain Text"</b></>,
                        `Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".`,
                        <><b>Then open a new document to place the code.</b></>,
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: `Step 2: Write Some HTML`,
                    info: "Write or copy the following HTML code into Notepad:",
                    code: ["<!DOCTYPE html>", "<html>", "<body>", "<h1>My First Heading</h1>", "<p>My first paragraph.</p>", "</body>", "</html>"
                    ],
                    imageSrc: "https://www.w3schools.com/html/img_notepad.png"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 3: Save the HTML Page",
                    info: [
                        <>Save the file on your computer. Select <b>File &gt; save as</b> in the NotePad menu</>,
                        <>Name the file <b>"index.htm"</b> and set the encoding to <b>UTF-8</b> (which is the preferred encoding for HTML files).</>,
                    ],
                    img: "https://www.w3schools.com/html/img_saveas.png",
                }
            },
            {
                name: "Box5",
                props: {
                    info: <><b>Tip:</b> You can use either .htm or .html as file extension. There is no difference; it is up to you.</>
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Step 4: View the HTML Page in Your Browser",
                    info: [
                        `Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").`,
                        `The result will look much like this:`
                    ],
                    img: "https://www.w3schools.com/html/img_chrome.png",
                    img_width: "60%"
                }
            },
            {
                name: "Box2",
                props: {
                    title: `W3Schools Online Editor - "Try it Yourself"`,
                    info: [
                        "With our free online editor, you can edit the HTML code and view the result in your browser.",
                        "It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:"
                    ],
                    code: [
                        "<!DOCTYPE html>", "<html>", "<head>", "<title>Page Title</title>", "</head>", "<body>", "<h1>This is a Heading</h1>", "<p>This is a paragraph.</p>", "</body>", "</html>"
                    ],
                    data: <><b>Click on the "Try it Yourself" button to see how it works.</b></>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editors"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "W3Schools Spaces",
                    info: [
                        "If you want to create your own website and save your code online, try our free website builder, called W3schools Spaces:",
                    ],
                    howitworks: true
                }
            }
        ]
    },
    {

        section: "HTML",
        page_name: "Video",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Basic Examples",
                    info: ["In this chapter, we will show some basic HTML examples.",
                        "Don't worry if we use tags you have not learned about yet."
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Documents",
                    info: [<>All HTML documents must start with a document type declaration: <span className='red_grey'> &lt;!DOCTYPE html&gt;</span></>,
                    <>The HTML document itself begins with <span className='red_grey'> &lt;HTML&gt;</span> and ends with <span className='red_grey'>&lt;HTML&gt;</span>.</>,
                    <>The visible part of the HTML document is between <span className='red_grey'> &lt;Body&gt;</span> and <span className='red_grey'> &lt;Body&gt;</span>.</>
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The <!DOCTYPE> Declaration",
                    info: [<>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration represents the document type and helps browsers display web pages correctly.</>,
                    <>It must only appear once, at the top of the page (before any HTML tags).</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration is not case sensitive.</>,
                    <>The <span className='red_grey'> &lt;!DOCTYPE&gt;</span> declaration for HTML5 is:</>
                    ],
                    code: ["<!DOCTYPE html>"],
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<h2>This is heading 2</h2>",
                        "<h3>This is heading 3</h3>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_headings"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [<>HTML paragraphs are defined with the <span className='red_grey'> &lt;p&gt;</span> tag:</>],
                    code: ["<p>This is a paragraph.</p>",
                        "<p>This is another paragraph.</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Links",
                    example_info: "HTML links are defined with the <a> tag:",
                    code: [`<a href="https://www.w3schools.com">This is a link</a>`],
                    data: ["The link's destination is specified in the href attribute.",
                        "Attributes are used to provide additional information about HTML elements.",
                        "You will learn more about attributes in a later chapter."
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_link"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML Images",
                    info: [<>HTML images are defined with the <span className='red_grey'>&lt;img&gt;</span> tag.</>,
                    <>The source file (<span className='red_grey'>src</span>), alternative text (<span className='red_grey'>alt</span>), <span className='red_grey'>width</span>, and <span className='red_grey'>height</span> are provided as attributes:</>
                    ],
                    code: [`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_img"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "How to View HTML Source",
                    info: `Have you ever seen a Web page and wondered "Hey! How did they do that?"`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "View HTML Source Code:",
                    info: `Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Inspect an HTML Element:",
                    info: `Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.`
                }
            },

        ]
    },
    {

        section: "HTML",
        page_name: "Audio",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Elements",
                    info: ["An HTML element is defined by a start tag, some content, and an end tag."],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Elements",
                    info: ["The HTML element is everything from the start tag to the end tag:",
                        "<tagname>Content goes here...</tagname>",
                        "Examples of some HTML elements:",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>"],
                    img: image5,
                    img_width: "100%"
                }

            },
            {
                name: "Box5",
                props: {
                    info: `"Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!"`,
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Nested HTML Elements",
                    info: ["HTML elements can be nested (this means that elements can contain other elements).",
                        "All HTML documents consist of nested HTML elements.",
                        "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):"
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Example Explained",
                    info: [
                        <>The <span className='red_grey'>&lt;html&gt;</span> element is the root element and it defines the whole HTML document.</>,
                        <>It has a start tag <span className='red_grey'>&lt;html&gt;</span> and an end tag <span className='red_grey'>&lt;/html&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;html&gt;</span> element there is a <span className='red_grey'>&lt;body&gt;</span> element:</>
                    ],
                    code: ["<body>",
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                        "</body>"
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;body&gt;</span> element defines the document's body.</>,
                        <>It has a start tag <span className='red_grey'>&lt;body&gt;</span> and an end tag <span className='red_grey'>&lt;/body&gt;</span>.</>,
                        <>Then, inside the <span className='red_grey'>&lt;body&gt;</span> element there are two other elements: <span className='red_grey'>&lt;h1&gt;</span> and <span className='red_grey'>&lt;p&gt;</span>:</>
                    ],
                }

            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>It has a start tag <span className='red_grey'>&lt;p&gt;</span> and an end tag <span className='red_grey'>&lt;/p&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<h1>My First Heading</h1>",
                        "<p>My first paragraph.</p>",
                    ],
                    data: [
                        <>The <span className='red_grey'>&lt;h1&gt;</span> element defines a heading.</>,
                        <>It has a start tag <span className='red_grey'>&lt;h1&gt;</span> and an end tag <span className='red_grey'>&lt;/h1&gt;</span>:</>
                    ],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [
                        "<p>My first paragraph.</p>",
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Never Skip the End Tag",
                    info: ["Some HTML elements will display correctly, even if you forget the end tag"],
                    code: ["<html>",
                        "<body>",
                        "<p>This is a paragraph",
                        "<p>This is a paragraph",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_no_endtag",
                    data_bold: "However, never rely on this! Unexpected results and errors may occur if you forget the end tag!"
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Empty HTML Elements",
                    info: ["HTML elements with no content are called empty elements.",
                        "The <br> tag defines a line break, and is an empty element without a closing tag:"
                    ],
                    code: ["<p>This is a <br> paragraph with a line break.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML is Not Case Sensitive",
                    info: ["HTML tags are not case sensitive: <P> means the same as <p>.",
                        "The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML."
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elements_br"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes.",
                        "Tag	Description",
                        "<html>	Defines the root of an HTML document",
                        "<body>	Defines the document's body",
                        "<h1> to <h6>	Defines HTML headings"
                    ],
                    data: "For a complete list of all available HTML tags, visit our HTML Tag Reference.",
                }

            },

        ]
    },


    {

        section: "HTML",
        page_name: "Forms",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Headings",
                    info: ["HTML headings are titles or subtitles that you want to display on a webpage."],
                    code: ["Heading 1",
                        "Heading 2",
                        "Heading 3",
                        "Heading 4",
                        "Heading 5",
                        "Heading 6"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Headings",
                    info: [
                        <>HTML headings are defined with the <span className='red_grey'>&lt;h1&gt;</span> to <span className='red_grey'>&lt;h6&gt;</span> tags.</>,
                        <><span className='red_grey'>&lt;h1&gt;</span> defines the most important heading. <span className='red_grey'>&lt;h6&gt;</span> defines the least important heading.</>
                    ],
                    code: ["<h1>Heading 1</h1>",
                        "<h2>Heading 2</h2>",
                        "<h3>Heading 3</h3>",
                        "<h4>Heading 4</h4>",
                        "<h5>Heading 5</h5>",
                        "<h6>Heading 6</h6>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings",
                }
            },
            {
                name: "Box5",
                props: {
                    info: "Browsers automatically add some white space (a margin) before and after a heading."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Headings Are Important",
                    info: [
                        "Search engines use the headings to index the structure and content of your web pages.",
                        "Users often skim a page by its headings. It i s important to use headings to show the document structure.",
                        <><span className='red_grey'>&lt;h1&gt;</span> headings should be used for main headings, followed by <span className='red_grey'>&lt;h2&gt;</span> headings, then the less important <span className='red_grey'>&lt;h3&gt;</span>, and so on.</>
                    ],
                }

            },
            {
                name: "Box5",
                props: {
                    info: <><b>Note:</b> Use HTML headings for headings only. Don't use headings to make text BIG or bold.</>
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Bigger Headings",
                    info: [<>Each HTML heading has a default size. However, you can specify the size for any heading with the <span className='red_grey'>style</span> attribute, using the CSS <span className='red_grey'>font-size</span> property:</>],
                    code: [`<h1 style="font-size:60px;">Heading 1</h1>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_size"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: ["W3Schools' tag reference contains additional information about these tags and their attributes."],
                }

            },
            {
                name: "Box5",
                props: {
                    info: "For a complete list of all available HTML tags, visit our HTML Tag Reference."
                }
            }

        ]
    },
    {
        section: "HTML",
        page_name: "Forms Attributes",
        components: [
            {
                name: "Box3",
                props: {
                    head: "HTML Paragraphs",
                    info: [<>"A paragraph always starts on a new line, and is usually a block of text."</>],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Paragraphs",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;p&gt;</span> element defines a paragraph.</>,
                        <>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a <span className='red_grey'>&lt;p&gt;</span> element.</>
                    ],
                    code: ["<p>This is a paragraph.</p>", "<p>This is another paragraph.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs1"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Display",
                    info: [
                        <>You cannot be sure how HTML will be displayed.</>,
                        <>Large or small screens, and resized windows will create different results.</>,
                        <>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</>,
                        <>The browser will automatically remove any extra spaces and lines when the page is displayed:</>
                    ],
                    code: [
                        "<p>",
                        "This paragraph",
                        "contains a lot of lines",
                        "in the source code,",
                        "but the browser",
                        "ignores it.",
                        "</p>",
                        "<p>",
                        "This paragraph",
                        "contains         a lot of spaces",
                        "in the source         code,",
                        "but the        browser",
                        "ignores it.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs2"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Horizontal Rules",
                    info: [
                        <>The <span className='red_grey'>&lt;hr&gt;</span> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</>,
                        <>The <span className='red_grey'>&lt;hr&gt;</span> element is used to separate content (or define a change) in an HTML page:</>
                    ],
                    code: ["<h1>This is heading 1</h1>",
                        "<p>This is some text.</p>",
                        "<hr>",
                        "<h2>This is heading 2</h2>",
                        "<p>This is some other text.</p>",
                        "<hr>"
                    ],
                    data: <><span className='red_grey'>&lt;hr&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_hr"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML Line Breaks",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;br&gt;</span> element defines a line break.</>,
                        <>Use <span className='red_grey'>&lt;br&gt;</span> if you want a line break (a new line) without starting a new paragraph:</>
                    ],
                    code: ["<p>This is<br>a paragraph<br>with line breaks.</p>"],
                    data: <><span className='red_grey'>&lt;br&gt;</span> tag is an empty tag, which means that it has no end tag.</>,
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The Poem Problem",
                    info: [<>"This poem will display on a single line:"</>],
                    code: [
                        "<p>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</p>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_poem"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Solution - The HTML <pre> Element",
                    info: [
                        <>The HTML <span className='red_grey'>&lt;pre&gt;</span> element defines preformatted text. The text inside a <span className='red_grey'>&lt;pre&gt;</span> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</>
                    ],
                    code: ["<pre>",
                        "My Bonnie lies over the ocean.",
                        "My Bonnie lies over the sea.",
                        "My Bonnie lies over the ocean.",
                        "Oh, bring back my Bonnie to me.",
                        "</pre>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_pre",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Tag Reference",
                    info: [<>"W3Schools' tag reference contains additional information about these tags and their attributes."</>],
                }
            },
            {
                name: "Box5",
                props: {
                    info: <>"For a complete list of all available HTML tags, visit our HTML Tag Reference."</>
                }
            }
        ]
    },

    {
        section: "HTML",
        page_name: "Form Types",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Styles",
                    info: ["The HTML style attribute is used to add styles to an element, such as color, font, size, and more."],
                    code: ["I am Red",
                        "I am Blue",
                        "I am Big",
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_intro",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The HTML Style Attribute",
                    info: ["Setting the style of an HTML element, can be done with the style attribute.",
                        "The HTML style attribute has the following syntax:"
                    ],
                    code: [`<tagname style="property:value;">`],
                }
            },
            {
                name: "Box5",
                props: {
                    info: "You will learn more about CSS later in this tutorial.",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Background Color",
                    info: ["The CSS background-color property defines the background color for an HTML element."],
                    example_info: ["Set the background color for a page to powderblue:"],
                    code: [`<body style="background-color:powderblue;">`,
                        "<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color"
                }
            },
            {
                name: "Box2",
                props: {
                    example_info: ["Set background color for two different elements:"],
                    code: ["<body>",
                        `<h1 style="background-color:powderblue;">This is a heading</h1>`,
                        `<p style="background-color:tomato;">This is a paragraph.</p>`,
                        "</body>"
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_background-color2",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Color",
                    info: ["The CSS color property defines the text color for an HTML element:"],
                    code: [`<h1 style="color:blue;">This is a heading</h1>
                    <p style="color:red;">This is a paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Fonts",
                    info: ["The CSS font-family property defines the font to be used for an HTML element:"],
                    code: [`<h1 style="font-family:verdana;">This is a heading</h1>`,
                        `<p style="font-family:courier;">This is a paragraph.</p>`
                    ],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_font-family"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Size",
                    info: ["The CSS font-size property defines the text size for an HTML element:"],
                    code: [`<h1 style="font-size:300%;">This is a heading</h1>
                    <p style="font-size:160%;">This is a paragraph.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Text Alignment",
                    info: ["The CSS text-align property defines the horizontal text alignment for an HTML element:"],
                    code: [`<h1 style="text-align:center;">Centered Heading</h1>
                    <p style="text-align:center;">Centered paragraph.</p>
                    `],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_styles_color",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Chapter Summary",
                    links: [
                        <>Use the <span className='red_grey'>style</span> attribute for styling HTML elements</>,
                        <>Use <span className='red_grey'>background-color</span> for background color</>,
                        <>Use <span className='red_grey'>color</span> for text colors</>,
                        <>Use <span className='red_grey'>font-family</span> for text fonts</>,
                        <>Use <span className='red_grey'>font-size</span> for text sizes</>,
                        <>Use <span className='red_grey'>text-align</span> for text alignment</>
                    ],

                }
            },
        ]

    },
    {
        section: "HTML",
        page_name: "Input Field",
        components: [
            {
                name: "Box2",
                props: {
                    head: "HTML Text Formatting",
                    info: ["HTML contains several elements for defining text with a special meaning."],
                    code: [`This text is bold
                    This text is italic
                    This is subscript and superscript`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_intro",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "HTML Formatting Elements",
                    info: ["Formatting elements were designed to display special types of text:"],
                    links: [
                        <><span className='red_grey'>&lt;b&gt;</span> for bold text</>,
                        <><span className='red_grey'>&lt;strong&gt;</span> for important text</>,
                        <><span className='red_grey'>&lt;i&gt;</span> for italic text</>,
                        <><span className='red_grey'>&lt;em&gt;</span> for emphasized text</>,
                        <><span className='red_grey'>&lt;mark&gt;</span> for marked text</>,
                        <><span className='red_grey'>&lt;small&gt;</span> for smaller text</>,
                        <><span className='red_grey'>&lt;del&gt;</span> for deleted text</>,
                        <><span className='red_grey'>&lt;ins&gt;</span> for inserted text</>,
                        <><span className='red_grey'>&lt;sub&gt;</span> for subscript text</>,
                        <><span className='red_grey'>&lt;sup&gt;</span> for superscript text</>
                    ]
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <b> and <strong> Elements",
                    info: ["The HTML <b> element defines bold text, without any extra importance."],
                    code: ["<b>This text is bold</b>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_b",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold."],
                    code: ["<strong>This text is important!</strong>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_strong"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <i> and <em> Elements",
                    info: ["The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.",
                        "Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    info: ["The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.",
                        "Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress."
                    ],
                    code: ["<i>This text is italic</i"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <small> Element",
                    info: ["The HTML <small> element defines smaller text:"],
                    code: ["<small>This text is small</small>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_i",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <ins> Element",
                    info: ["The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:"],
                    code: ["<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>"],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "HTML <sub> Element",
                    info: ["The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:"],
                    code: [`<p>This is <sub>subscripted</sub> text.</p>`],
                    src: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_formatting_sub"
                }
            }
        ]
    },
    //
    //
    // section 2 ends

    // css
    // cs
    // cs
    // c
    // sc
    // s
    // c
    // sc
    // sc
    // sc
    {
        section: "CSS",
        page_name: "Home",
        components: [
            {
                name: "Box1",
                props: {
                    head: "CSS Tutorial",
                    info: [
                        "CSS is the language we use to style an HTML document.",
                        "CSS describes how HTML elements should be displayed.",
                        "This tutorial will teach you CSS from basic to advanced."
                    ],
                    button_data: "Start learning CSS now >>"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Examples in Each Chapter",
                    info: [
                        "This CSS tutorial contains hundreds of CSS examples.",
                        "With our online editor, you can edit the CSS, and click on a button to view the result.",

                    ],
                    code: ["body {", "background-color: lightblue;", "}", "h1 {", "color: white;", "text-align: center;", "}", "p {", "font-family: verdana;", "font-size: 20px;", "}"],
                    data: `Click on the "Try it Yourself" button to see how it works.`
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Examples",
                    info: [
                        "Learn from over 300 examples! With our editor, you can edit the CSS, and click on a button to view the result.",
                    ],
                    button_data: "Go to CSS Examples!",
                    button_color: "#e7e9eb"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Use the Menu",
                    info: [
                        "We recommend reading this tutorial, in the sequence listed in the menu.",
                        "If you have a large screen, the menu will always be present on the left.",
                        "If you have a small screen, open the menu by clicking the top menu sign ☰.",
                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Templates",
                    info: [
                        "We have created some responsive W3.CSS templates for you to use.",
                        "You are free to modify, save, share, and use them in all your projects.",
                        "Free CSS Templates!",

                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Quiz",
                    info: "Test your CSS skills with a quiz.",
                    button_data: "Start CSS Quiz",
                    button_color: "#2196f3"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "My Learning",
                    info: [
                        `Track your progress with the free "My Learning" program here at W3Schools.`,
                        "Log in to your account, and start earning points!",
                        "This is an optional feature. You can study W3Schools without using My Learning.",

                    ],
                    img: true,
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS References",
                    info: "At W3Schools you will find complete CSS references of all properties and selectors with syntax, examples, browser support, and more.",

                }
            },
        ]
    },
    {
        section: "CSS",
        page_name: "Introduction",
        components: [
            {
                name: "Box3",
                props: {
                    head: "CSS Introduction",
                    info: [
                        "CSS is the language we use to style a Web page.",
                    ],

                }
            },
            {
                name: "Box3",
                props: {
                    title: "What is CSS?",
                    links: [
                        "CSS stands for Cascading Style Sheets",
                        "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
                        "CSS saves a lot of work. It can control the layout of multiple web pages all at once",
                        "External stylesheets are stored in CSS files",

                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Demo - One HTML Page - Multiple Styles!",
                    info: `Here we will show one HTML page displayed with four different stylesheets. Click on the "Stylesheet 1", "Stylesheet 2", "Stylesheet 3", "Stylesheet 4" links below to see the different styles:`,
                    img: image3,
                    img_width: "100%"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Why Use CSS?",
                    info: [
                        "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.",
                    ],
                    code: ["body {", "background-color: lightblue;", "}", "h1 {", "color: white;", "text-align: center;", "}", "p {", "font-family: verdana;", "font-size: 20px;", "}"],
                    button_data: "try it yourself",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Solved a Big Problem",
                    info: [
                        "HTML was NEVER intended to contain tags for formatting a web page!",
                        "HTML was created to describe the content of a web page, like:",
                        "<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",
                        "When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.",
                        "To solve this problem, the World Wide Web Consortium (W3C) created CSS.",
                        "CSS removed the style formatting from the HTML page!",
                        "If you don't know what HTML is, we suggest that you read our HTML Tutorial.",

                    ]
                }
            },
            {
                name: "Box5",
                props: {
                    info: "If you don't know what HTML is, we suggest that you read our HTML Tutorial."
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Saves a Lot of Work!",
                    info: [
                        "The style definitions are normally saved in external .css files.",
                        "With an external stylesheet file, you can change the look of an entire website by changing just one file!",
                    ]
                }
            },
        ]
    },
    {
        section: "CSS",
        page_name: "Syntax",
        components: [
            {
                name: "Box3",
                props: {
                    head: "CSS Syntax",
                    info: "A CSS rule consists of a selector and a declaration block.",
                },
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Syntax",
                    title_img: "https://www.w3schools.com/css/img_selector.gif",
                    info: [
                        "The selector points to the HTML element you want to style.",
                        "The declaration block contains one or more declarations separated by semicolons.",
                        "Each declaration includes a CSS property name and a value, separated by a colon.",
                        "Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.",
                    ],
                    code: ["p {", "color: red;", "text-align: center;", "}"],
                    data: "In this example all <p> elements will be center-aligned, with a red text color:",
                }
            },
            {
                name: "Box2",
                props: {
                    code: ["p {", "color: red;", "text-align: center;", "}"],
                    example_info: "In this example all <p> elements will be center-aligned, with a red text color:",
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Example Explained",
                    links: [
                        <><span className='text-[#de143c] bg-[#f5f5f5] font-semibold'> P </span>is a selector in CSS (it points to the HTML element you want to style: &lt;p&gt;)</>,
                        <><span className='text-[#de143c] bg-[#f5f5f5] font-semibold'> Color </span>is a property, and<span className='text-[#de143c] bg-[#f5f5f5] font-semibold'> red </span>is the property value</>,
                        <><span className='text-[#de143c] bg-[#f5f5f5] font-semibold'> Text-align </span>is a property, and<span className='text-[#de143c] bg-[#f5f5f5] font-semibold'> center </span>is the property value</>
                    ]
                },
            },
            {
                name: "Box5",
                props: {
                    info: ["You will learn much more about CSS selectors and CSS properties in the next chapters!"]
                }
            }
        ],

    },
    {
        section: "CSS",
        page_name: "Selectors",
        components: [
            {
                name: "Box3",
                props: {
                    head: "CSS Selectors",
                    info: "A CSS selector selects the HTML element(s) you want to style.",
                },
            },

            {
                name: "Box3",
                props: {
                    title: "CSS Selectors",
                    info: [
                        `CSS selectors are used to "find" (or select) the HTML elements you want to style.`,
                        "We can divide CSS selectors into five categories:"
                    ],
                    links: [
                        "Simple selectors (select elements based on name, id, class)",
                        "Combinator selectors (select elements based on a specific relationship between them)",
                        "Pseudo-class selectors (select elements based on a certain state)",
                        "Pseudo-elements selectors (select and style a part of an element)",
                        "Attribute selectors (select elements based on an attribute or attribute value)",
                        "This page will explain the most basic CSS selectors."
                    ]
                },
            },
            {
                name: "Box2",
                props: {
                    title: "The CSS element Selector",
                    info: "The element selector selects HTML elements based on the element name.",
                    example_info: "Here, all <p> elements on the page will be center-aligned, with a red text color: ",
                    code: ["p {", " text-align: center;", " color: red;", "}",],
                    button_data: "Try it Yourself>>",
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The CSS id Selector",
                    info: [
                        "The id selector uses the id attribute of an HTML element to select a specific element.",
                        "The id of an element is unique within a page, so the id selector is used to select one unique element!",
                        "To select an element with a specific id, write a hash (#) character, followed by the id of the element."
                    ],
                    example_info: `The CSS rule below will be applied to the HTML element with id="para1": `,
                    code: ["para1{", " text-align: center;", " color: red;", "}",],
                    button_data: "Try it Yourself>>",
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_id"
                }
            },
            {
                name: "Box5",
                props: {
                    info: "Note: An id name cannot start with a number!",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The CSS class Selector",
                    info: [
                        "The class selector selects HTML elements with a specific class attribute.",
                        "To select elements with a specific class, write a period (.) character, followed by the class name."
                    ],
                    example_info: `In this example all HTML elements with class="center" will be red and center-aligned: `,
                    code: ["* {",
                        "text-align: center;",
                        "color: red;",
                        "}"],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_class"
                }
            },
            {
                name: "Box2",
                props: {
                    info: `You can also specify that only specific HTML elements should be affected by a class.`,
                    example_info: `In this example only <p> elements with class="center" will be red and center-aligned:  `,
                    code: ["p.center {",
                        "text-align: center;",
                        "color: red;",
                        "}"],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element_class"
                }
            },
            {
                name: "Box2",
                props: {
                    info: `HTML elements can also refer to more than one class.`,
                    example_info: `In this example the <p> element will be styled according to class="center" and to class="large": `,
                    code: [`<p class="center large">This paragraph refers to two classes.</p>`],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_element_class2"
                }
            },
            {
                name: "Box5",
                props: {
                    info: <><b>Note: </b> A class name cannot start with a number!</>
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The CSS Universal Selector",
                    info: [
                        "The universal selector (*) selects all HTML elements on the page.",
                    ],
                    example_info: "The CSS rule below will affect every HTML element on the page: ",
                    code: ["* {",
                        "text-align: center;",
                        "color: blue;",
                        "}"],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_syntax_universal"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "The CSS Grouping Selector",
                    info: [
                        "The grouping selector selects all the HTML elements with the same style definitions.",
                        "Look at the following CSS code (the h1, h2, and p elements have the same style definitions):",
                    ],
                    code: ["h1 {",
                        "text-align: center;",
                        "color: red;",
                        "}",
                        "",
                        "h2 {",
                        "text-align: center;",
                        "color: red;",
                        "}",
                        "",
                        "p {",
                        "text-align: center;",
                        "color: red;",
                        "}"],
                }
            },
            {
                name: "Box2",
                props: {
                    info: [
                        "It will be better to group the selectors, to minimize the code.",
                        "To group selectors, separate each selector with a comma.",
                    ],
                    code: ["h1, h2, p {",
                        "text-align: center;",
                        "color: red;"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_grouping"
                }
            }

        ]
    },
    {
        section: "CSS",
        page_name: "How to",
        components: [
            {
                name: "Box3",
                props: {
                    head: "How To Add CSS",
                    info: ["When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet."],

                }
            },
            {
                name: "Box3",
                props: {
                    title: "Three Ways to Insert CSS",
                    info: ["There are three ways of inserting a style sheet:"],
                    links: [
                        "External CSS",
                        "Internal CSS",
                        "Inline CSS"
                    ]
                }

            },
            {
                name: "Box2",
                props: {
                    title: "External CSS",
                    info: ["With an external style sheet, you can change the look of an entire website by changing just one file!",
                        "Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section."],
                    example_info: "External styles are defined within the <link> element, inside the <head> section of an HTML page:",
                    code: [",<!DOCTYPE html>",
                        "<html>",
                        "<head>",
                        `<link rel="stylesheet" href="mystyle.css">`,
                        "</head>",
                        "<body>",
                        ",<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",

                        "</body>",
                        "</html>",
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_external"
                }

            },
            {
                name: "Box3",
                props: {
                    info: ["An external style sheet can be written in any text editor, and must be saved with a .css extension.",
                        "The external .css file should not contain any HTML tags.",
                        `Here is how the "mystyle.css" file looks:`],
                }
            },
            {
                name: "Box5",
                props: {
                    info: [
                        <><b>Note: </b> Do not add a space between the property value (20) and the unit (px):</>,
                        <>Incorrect (space): <span className='text-red-500'>margin-left: 20 px;</span></>,
                        <>Correct (no space): <span className='text-red-500'>margin-left: 20px;</span></>
                    ],
                    color: "#ffdddd"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Internal CSS",
                    info: ["An internal style sheet may be used if one single HTML page has a unique style.",
                        "The internal style is defined inside the <style> element, inside the head section."],
                    example_info: ["Internal styles are defined within the <style> element, inside the <head> section of an HTML page:"],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<head>",
                        "<style>",
                        "body {",
                        "  background-color: linen;",
                        "}",

                        "h1 {",
                        "  color: maroon;",
                        "  margin-left: 40px;",
                        "}",
                        "</style>",
                        "</head>",
                        "<body>",

                        "<h1>This is a heading</h1>",
                        "<p>This is a paragraph.</p>",

                        "</body>",
                        "</html>"],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_internal",
                }

            },
            {
                name: "Box2",
                props: {
                    title: "Inline CSS",
                    info: ["To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.",
                        "To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property."],
                    example_info: [`Inline styles are defined within the "style" attribute of the relevant element:`],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        `<h1 style="color:blue;text-align:center;">This is a heading</h1>`,
                        `<p style="color:red;">This is a paragraph.</p>`,

                        "</body>",
                        "</html>"],
                    src: "https://w3schools.com/css/tryit.asp?filename=trycss_howto_inline"
                }

            },
            {
                name: "Box5",
                props: {
                    info: <><b>Tip: </b>  An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.</>
                }
            },
            {
                name: "Box2",
                props: {
                    title: "Multiple Style Sheets",
                    info: ["If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. "],
                    example_info: "Assume that an external style sheet has the following style for the <h1> element:",
                    code: [
                        "h1 {",
                        "color: navy;",
                        "}"
                    ]
                }

            },
            {
                name: "Box2",
                props: {
                    example_info: "Then, assume that an internal style sheet also has the following style for the <h1> element:",
                    code: [
                        "h1 {",
                        "color: orange;",
                        "}"
                    ]
                }

            },
            {
                name: "Box2",
                props: {
                    info: [`If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange":`],
                    code: ["<head>",
                        `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
                        "<style>",
                        "h1 {",
                        "  color: orange;",
                        "}",
                        "</style>",
                        "</head>"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_multiple"
                }
            },
            {
                name: "Box2",
                props: {
                    info: [`However, if the internal style is defined before the link to the external style sheet, the <h1> elements will be "navy": `],
                    code: ["<head>",
                        "<style>",
                        "h1 {",
                        "  color: orange;",
                        "}",
                        "</style>",
                        `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
                        "</head>"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_multiple2"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "Cascading Order",
                    info: ["What style will be used when there is more than one style specified for an HTML element?",
                        "All the styles in a page will 'cascade' into a new 'virtual' style sheet by the following rules, where number one has the highest priority:",
                    ],
                    links: [
                        "1. Inline style (inside an HTML element)",
                        "2. External and internal style sheets (in the head section)",
                        "3. Browser default",
                    ]
                }
            },
            {
                name: "Box3",
                props: {
                    info: "So, an inline style has the highest priority, and will override external and internal styles and browser defaults."
                }
            },
            {
                name: "Box5",
                props: {
                    info: "Ever heard about W3Schools Spaces? Here you can create your own website, or save code snippets for later use, for free.",
                }
            }
        ]

    },
    {
        section: "CSS",
        page_name: "Comments",
        components: [
            {
                name: "Box3",
                props: {
                    head: "CSS Comments",
                    info: ["CSS comments are not displayed in the browser, but they can help document your source code"],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "CSS Comments",
                    info: ["Comments are used to explain the code, and may help when you edit the source code at a later date.",
                        "Comments are ignored by browsers.",
                        "A CSS comment is placed inside the <style> element, and starts with /* and ends with */:"
                    ],
                    code: ["/* This is a single-line comment */", "p {",
                        "color: red;",
                        "}",],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_comments"
                }

            },
            {
                name: "Box2",
                props: {
                    info: "You can add comments wherever you want in the code:",
                    code: ["p {",
                        "color: red;    /* Set text color to red */",
                        "}",],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_comments2",
                }

            },
            {
                name: "Box2",
                props: {
                    info: `Comments can also span multiple lines:`,
                    code: ["/* This is a multi-linecomment */", "p {",
                        "color: red;",
                        "}",],
                }

            },
            {
                name: "Box2",
                props: {
                    title: "HTML and CSS Comments",
                    info: ["From the HTML tutorial, you learned that you can add comments to your HTML source by using the <!--...--> syntax.",
                        "In the following example, we use a combination of HTML and CSS comments:"
                    ],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<head>",
                        "<style>",
                        "p {",
                        "  color: red; /* Set text color to red */",
                        "}",
                        "</style>",
                        "</head>",
                        "<body>",
                        "<h2>My Heading</h2>",
                        "<!-- These paragraphs will be red -->",
                        "<p>Hello World!</p>",
                        "<p>This paragraph is styled with CSS.</p>",
                        "<p>CSS comments are not shown in the output.</p>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_comments4"
                }
            },
        ]

    },






    {
        section: "CSS",
        page_name: "Height-Width",
        components: [
            {
                name: "Box3",
                props: {
                    head: "CSS Height, Width and Max-width",
                    info: [<>The CSS<span className='red_grey'> Height </span>and<span className='red_grey'> Width </span> properties are used to set the height and width of an element</>,
                    <>The CSS<span className='red_grey'> max-width </span> property is used to set the maximum width of an element.</>,
                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "CSS Setting height and width",
                    info: [<>The CSS<span className='red_grey'> Height </span>and<span className='red_grey'> Width </span> properties are used to set the height and width of an element</>,
                        "The height and width properties do not include padding, borders, or margins. They set the height/width of the area inside the padding, border, and margin of the element."
                    ],
                }

            },
            {
                name: "Box3",
                props: {
                    title: "CSS height and width Values",
                    info: `The height and width properties may have the following values:`,
                    links: [
                        <><span className='red_grey'>auto</span> - This is default. The browser calculates the height and width.</>,
                        <><span className='red_grey'>length</span> - Defines the height/width in px, cm, etc.</>,
                        <><span className='red_grey'>%</span> - Defines the height/width in percent of the containing block.</>,
                        <><span className='red_grey'>initial</span> - Sets the height/width to its default value.</>,
                        <><span className='red_grey'>inherit</span> - The height/width will be inherited from its parent value.</>
                    ]
                }
            },
            {
                name: "Box5",
                props: {
                    title: "CSS height and width Examples",
                    info: ["This element has a height of 200 pixels and a width of 50%"],
                    height: "200px",
                    width: "50%",
                    color: "#b0e0e6",
                    margin: "40px"
                }

            },
            {
                name: "Box2",
                props: {
                    example_info: ["Set the height and width of a <div> element:"],
                    code: ["div {",
                        "  height: 200px;",
                        "  width: 50%;",
                        "  background-color: powderblue;",
                        "}"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_dim_height_width2"
                }

            },
            {
                name: "Box5",
                props: {
                    info: "This element has a height of 100 pixels and a width of 500 pixels.",
                    height: "100px",
                    width: "500px",
                    color: "#b0e0e6",
                    margin: "40px"
                }

            },
            {
                name: "Box2",
                props: {
                    info: ["Set the height and width of another <div> element:"],
                    code: ["div {",
                        "  height: 100px;",
                        "  width: 500px;",
                        "  background-color: powderblue;",
                        "}"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_dim_height_width",
                    data: "Note: Remember that the height and width properties do not include padding, borders, or margins! They set the height/width of the area inside the padding, border, and margin of the element!"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "Setting max-width",
                    info: [<>The <span className='red_grey'>max-width</span> property is used to set the maximum width of an element.</>,
                    <>The <span className='red_grey'>max-width</span> can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default, meaning that there is no maximum width).</>,
                    <>The problem with the <span className='red_grey'>&lt; div &gt;</span> above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.</>,
                    <>Using <span className='red_grey'>max-width</span> instead, in this situation, will improve the browser's handling of small windows.</>,
                    <>Tip: Drag the browser window to smaller than 500px wide to see the difference between the two divs!</>,
                    <><b>Note: </b> If you for some reason use both the <span className="red_grey">width</span> property and the <span className="red_grey">max-width</span> property on the same element, and the value of the <span className="red_grey">width</span> property is larger than the <span className="red_grey">max-width</span> property; the <span className="red_grey">max-width</span> property will be used (and the <span className="red_grey">width</span> property will be ignored).</>
                    ],
                    code: ["This element has a height of 100 pixels and a max-width of 500 pixels"],
                    data: "Note: If you for some reason use both the width property and the max-width property on the same element, and the value of the width property is larger than the max-width property; the max-width property will be used (and the width property will be ignored).",
                }

            },
            {
                name: "Box2",
                props: {
                    example_info: ["This <div> element has a height of 100 pixels and a max-width of 500 pixels: "],
                    code: ["div {",
                        "  max-width: 500px;",
                        "  height: 100px;",
                        "  background-color: powderblue;",
                        "}"
                    ],
                    src: "https://www.w3schools.com/css/tryit.asp?filename=trycss_dim_max_width"
                }

            },
            {
                name: "Box3",
                props: {
                    title: "Try it Yourself - Examples",
                    info: ["Set the height and width of elements",
                        "This example demonstrates how to set the height and width of different elements.",
                        "Set the height and width of an image using percent",
                        "This example demonstrates how to set the height and width of an image using a percent value.",
                        "Set min-width and max-width of an element",
                        "This example demonstrates how to set a minimum width and a maximum width of an element using a pixel value.",
                        "Set min-height and max-height of an element",
                        "This example demonstrates how to set a minimum height and a maximum height of an element using a pixel value."
                    ],
                }

            },
            {
                name: "Box3",
                props: {
                    title: "All CSS Dimension Properties",
                    img: image4,
                    img_width: "100%"
                }
            },
        ]
    },
    {
        section: "JAVASCRIPT",
        page_name: "Home",
        components: [
            {
                name: "Box1",
                props: {
                    head: "JavaScript Tutorial",
                    info: ["JavaScript is the world's most popular programming language.",
                        "JavaScript is the programming language of the Web.",
                        "JavaScript is easy to learn.",
                        "This tutorial will teach you JavaScript from basic to advanced."
                    ],
                    button_data: "Start Learning JavaScript now>>",
                },


            },
            {
                name: "Box2",
                props: {
                    title: "Examples in Each Chapter",
                    info: [`With our "Try it Yourself" editor, you can edit the source code and view the result.`],
                    code: ["My First JavaScript", "Click me to display date and time"],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst"

                }
            },
            {
                name: "Box3",
                props: {
                    title: "Use the Menu",
                    info: ["We recommend reading this tutorial, in the sequence listed in the menu.",
                        "If you have a large screen, the menu will always be present on the left.",
                        "If you have a small screen, open the menu by clicking the top menu sign ☰."
                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Learn by Examples",
                    info: ["Examples are better than 1000 words. Examples are often easier to understand than text explanations.",
                        "This tutorial supplements all explanations with clarifying 'Try it Yourself' examples."
                    ],
                }
            },
            {
                name: "Box5",
                props: {
                    info: ["If you try all the examples, you will learn a lot about JavaScript, in a very short time!"],
                    button_data: "JavaScript Examples"

                }
            },
            {
                name: "Box3",
                props: {
                    title: "Why Study JavaScript?",
                    info: ["JavaScript is one of the 3 languages all web developers must learn:"],
                    links: [<> <b>HTML</b> to define the content of web pages</>,
                    <><b>CSS</b> to specify the layout of web pages</>,
                    <><b>JavaScript</b> to program the behavior of web pages</>
                    ]
                }
            },
            {
                name: "Box5",
                props: {
                    info: ["This tutorial covers every version of JavaScript"],
                    links: ["The Original JavaScript ES1 ES2 ES3 (1997-1999)",
                        "The First Main Revision ES5 (2009)",
                        "The Second Revision ES6 (2015)",
                        "All Yearly Additions (2016, 2017, 2018, 2019, 2020)"
                    ],
                    color: "#d9eee1"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Learning Speed",
                    info: ["In this tutorial, the learning speed is your choice.",
                        "Everything is up to you.",
                        "If you are struggling, take a break, or re-read the material.",
                        "Always make sure you understand all the 'Try-it-Yourself' examples.",
                        "The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code !"
                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "Commonly Asked Questions",
                    links: ["How do I get JavaScript?",
                        "Where can I download JavaScript?",
                        "Is JavaScript Free?"
                    ],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "My Learning",
                    info: ["Track your progress with the free 'My Learning' program here at W3Schools.",
                        "Log in to your account, and start earning points!",
                        "This is an optional feature. You can study W3Schools without using My Learning."
                    ],
                    img: true
                }
            },
            {
                name: "Box3",
                props: {
                    title: "JavaScript References",
                    info: ["W3Schools maintains a complete JavaScript reference, including all HTML and browser objects.",
                        "The reference contains examples for all properties, methods, and events, and is continuously updated according to the latest web standards."
                    ],
                    button_data: "JavaScript Reference",
                    button_color: "#04aa6d"
                }
            },
            {
                name: "Box3",
                props: {
                    title: "JavaScript Quiz Test",
                    info: ["Test your JavaScript skills at W3Schools!"],
                    button_data: "Start JavaScript Quiz",
                    button_color: "#0d8bf2"
                }
            },

        ],
    },
    {
        section: "Javascript",
        page_name: "Introduction",
        components: [
            {
                name: "Box5",
                props: {
                    head: "JavaScript Introduction",
                    info: ["This page contains some examples of what JavaScript can do."],
                    color: "#d9eee1"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript Can Change HTML Content",
                    info: [<>One of many JavaScript HTML methods is <span className='red_grey'>getElementById()</span>.</>,
                        `The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":`
                    ],
                    code: [`document.getElementById("demo").innerHTML = "Hello JavaScript";`],
                    src: `https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html`
                }
            },
            {
                name: "Box5",
                props: {
                    // title:"",
                    info: ["JavaScript accepts both double and single quotes:"],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "",
                    code: [`document.getElementById('demo').innerHTML = 'Hello JavaScript';`],
                    src: `https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html_quotes`,
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript Can Change HTML Styles (CSS)",
                    info: ["Changing the style of an HTML element, is a variant of changing an HTML attribute:"],
                    code: [`document.getElementById("demo").style.fontSize = "35px";`],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_style",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript Can Hide HTML Elements",
                    info: [<>Hiding HTML elements can be done by changing the <span className='red_grey'>display</span> style:</>],
                    code: [`document.getElementById("demo").style.display = "none";`],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_hide",
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript Can Show HTML Elements",
                    info: [<>Showing hidden HTML elements can also be done by changing the <span>display</span> style:</>],
                    code: [`document.getElementById("demo").style.display = "block";`],
                    src: `https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_show`
                }
            },
            {
                name: "Box1",
                props: {
                    title: "Did You Know?",
                    info: ["JavaScript and Java are completely different languages, both in concept and design.",
                        "JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.",
                        "ECMA-262 is the official name of the standard. ECMAScript is the official name of the language."
                    ],
                    button_data: "JavaScript Versions >>",
                    color: "#ffffcc"
                }
            },

        ]
    },
    {
        section: "javascript",
        page_name: "Where To",
        components: [

            {
                name: "Box2",
                props: {
                    title: "The <script> Tag",
                    head: "JavaScript Where To",
                    info: [<>In HTML, JavaScript code is inserted between <span className='red_grey'> &lt; script &gt; </span> and <span className='red_grey'> &lt; script &gt; </span> tags.</>],
                    code: ["<script>",
                        "document.getElementById('demo').innerHTML = 'My First JavaScript';",
                        "</script>"
                    ],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto"
                }
            },
            {
                name: "Box5",
                props: {
                    // title:"",
                    info: [`"Old JavaScript examples may use a type attribute: <script type='text/javascript'>.",
                    "The type attribute is not required. JavaScript is the default scripting language in HTML."
                        `],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "JavaScript Functions and Events",
                    info: [`A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
                    For example, a function can be called when an event occurs, like when the user clicks a button`],
                }
            },
            {
                name: "Box5",
                props: {
                    // title:"",
                    info: [`You will learn much more about functions and events in later chapters.`],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "JavaScript in <head> or <body>   ",
                    info: [`You can place any number of scripts in an HTML document.`,

                        <>Scripts can be placed in the <span className='red_grey'> &lt;body&gt; </span>, or in the <span className='red_grey'> &lt;head&gt; </span> section of an HTML page, or in both.</>],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript in <head>",
                    info: [<>In this example, a JavaScript <span className='red_grey'> function </span> is placed in the<span className='red_grey'> &lt;head&gt; </span> section of an HTML page.</>,

                        `The function is invoked (called) when a button is clicked:`],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<head>",
                        "<script>",
                        "function myFunction() {",
                        "  document.getElementById('demo').innerHTML = 'Paragraph changed.';",
                        "}",
                        "</script>",
                        "</head>",
                        "<body>",
                        "<h2>Demo JavaScript in Head</h2>",
                        "<p id='demo'>A Paragraph</p>",
                        "<button type='button' onclick='myFunction()'>Try it</button>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_head"
                }
            },
            {
                name: "Box2",
                props: {
                    title: "JavaScript in <body>",
                    info: [<>In this example, a JavaScript <span className='red_grey'> function </span> is placed in the<span className='red_grey'> &lt;body&gt; </span> section of an HTML page.</>,

                        `The function is invoked (called) when a button is clicked:`],
                    code: ["<!DOCTYPE html>",
                        "<html>",
                        "<body>",
                        "<h2>Demo JavaScript in Body</h2>",
                        "<p id='demo'>A Paragraph</p>",
                        "<button type='button' onclick='myFunction()'>Try it</button>",
                        "<script>",
                        "function myFunction() {",
                        "  document.getElementById('demo').innerHTML = 'Paragraph changed.';",
                        "}",
                        "</script>",
                        "</body>",
                        "</html>"
                    ],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_body"
                }
            },
            {
                name: "Box5",
                props: {
                    // title:"",
                    info: ["Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.                    "],
                }
            },
            {
                name: "Box2",
                props: {
                    title: "External JavaScript",
                    info: ["Scripts can also be placed in external files:"],
                    code: [`function myFunction() {
                        document.getElementById("demo").innerHTML = "Paragraph changed.";
                      }`]
                }
            },
            {
                name: "Box3",
                props: {
                    title: "External JavaScript Advantages",
                    info: ["Placing scripts in external files has some advantages:"],
                    links: [`It separates HTML and code`,
                        `It makes HTML and JavaScript easier to read and maintain`,
                        `Cached JavaScript files can speed up page loads`],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [`<script src="myScript1.js"></script>`,
                        `<script src="myScript2.js"></script>`],
                }
            },
            {
                name: "Box3",
                props: {
                    title: "External References",
                    info: ["An external script can be referenced in 3 different ways:"],
                    links: [`With a full URL (a full web address)`,
                        `With a file path (like /js/)`,
                        `Without any path`],
                }
            },
            {
                name: "Box2",
                props: {
                    code: [`<script src="https://www.w3schools.com/js/myScript.js"></script>`],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_url"
                }
            },

            {
                name: "Box2",
                props: {
                    info: "This example uses a file path to link to myScript.js:",
                    code: [`<script src="/js/myScript.js"></script>`],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_url_relative",
                }
            },
            {
                name: "Box2",
                props: {
                    info: "This example uses no path to link to myScript.js:",
                    code: [`<script src="myScript.js"></script>`],
                    src: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_external"
                }
            }, {
                name: "Box5",
                props: {
                    info: "You can read more about file paths in the chapter HTML File Paths."
                }
            }

        ]
    },
];

