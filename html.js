function top() {
    return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Equivalent Experience</title>
                    <meta http-equiv="Content-Type" content="text/html"; charset="utf-8" />
                    <script type="text/javascript" src="jquery.js"></script>
                    <script type="text/javascript" src="scripts.js"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
                    <link rel="stylesheet" type="text/css" href="style.css">
                </head>
                <body>
                <div id="spinner" class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <a id="github" href="https://www.github.com/sprintup/CS-Courses-Keywords">Github</a>
    `
}

function bottom() {
    return `
        </body>
    </html>
    `
}       

function span(val, count) {
    if(!val) val = "_";
    return `
    <span id="`+val+`">
        <span class="badge badge-secondary m-2">`+count+`</span>`+`
        <a href='http://www.google.com/search?q=`+val+`' target="_blank">`+val+`</a>
        <button class="badge badge-pill badge-danger m-2" onclick="deleteNode('`+val+`')">X</button>
    </span>`
}


module.exports.htmlTop = top;
module.exports.htmlBottom = bottom;
module.exports.span = span;
