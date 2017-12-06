function styleTables() {
    var $tables = $('table');
    // itterate through tables
    for (var t = 0; t < $tables.length; t++) {
        var statusCol = -1;
        var $rows = $($tables[t]).find('tr');
        // itterate through rows
        for (var r = 0; r < $rows.length; r++) {
            var $cells = $($rows[r]).find('td');
            var status = "";
            // itterate through cells
            for (var c = 0; c < $cells.length; c++) {
                var cellVal = $($cells[c]).text();
                // if on first row
                if (statusCol < 0 && cellVal === "Status") {
                    statusCol = c;
                } else {
                    if (c === statusCol) {
                        status = cellVal;
                    }
                }
            }
    
            if (
                status === "Verified" || 
                status === "Create QAN" || 
                status === "Fixed" || 
                status === "Never Mind" || 
                status === "Closed as Duplicate" ||
                status === "Moved To DLG") {
                $($rows[r]).css("color", "#AAAAAA");
            }
        }
    }
}

function navBar() {
    // add the "DLG ######" to the nav bar
    $('.anchors').prepend($('.title a').clone());
    
    var styleNode = $(`<style type="text/css">
        div.anchors,
        #ScrollLinks {
            background-color: #50719b;
            border-right: 1px solid #50719b;
            line-height: 0;
            overflow-y: auto;
        }

        div.anchors a[style],
        #ScrollLinks a[style] {
            display: block !important;
        }

        div.anchors a {
            text-align: left;
            padding: 8px 10px;
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border-bottom: 1px solid #39577E;
            font-weight: bold;
            line-height: 1rem;
        }

        div.anchors a:first-child {
            border-top: 1px solid #39577E;
        }

        #ScrollLinks span {
            display: block;
            padding: 8px 10px;
            font-size: 1rem;
            border-bottom: 1px solid #39577E;
            text-align: left;
        }

        #ScrollLinks span a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            font-weight: bold;
            line-height: 1rem;
        }

        div.anchors a:hover,
        #ScrollLinks a:hover {
            background-color: white;
            color: #50719b;
        }

        .anchors a:first-child {
            text-align: center;
            display: block;
            font-size: 20px;
            padding-top: 20px;
            line-height: 20px;
            padding-bottom: 20px;
            vertical-align: middle;
        }
        </style>`);
    $('html').append(styleNode);
}

function applyCss() {
    var styleNode = $(`<style type="text/css">
        body.Info {
            font-family: "Roboto",sans-serif;
            font-size: 14px;
        }
        
        table.title[style],
        table.titleText[style],
        td.title {
            background-color: inherit !important;
            font-size: 1.5rem;
        }
        span.heading {
            display: inline-block;
            margin: 20px 0 10px;
            padding: 0;
            font-weight: bold;
            -webkit-font-smoothing: antialiased;
            cursor: text;
            position: relative;
            text-decoration: none;
        }
        
        span.heading {
        font-size: 1.25rem;
        color: black; 
        }
        
        /* horizontal gray line */
        hr.solid {
            height: 1px;
            border: none;
            background-color: rgb(229, 229, 229);
            margin-top: 1rem;
        }
        
        /* table headers */
        td.txtbu {
            color: black;
            text-decoration: none;
        }
        
        td.txtb {
            color: black;
            text-align: right;
        }
        
        /* tr tr:hover {
            background-color: rgba(81, 112, 154, 0.24);
        } */
        
        table {
            border-collapse: collapse;
        }
        
        a[href="#TOP"]:after {
                color: red;
            content:url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><polygon points="40 90 60 110 85 85 110 110 130 90 85 45 40 90"></polygon></svg>');
            display:inline-block;
            width: 1.25rem;
            height: 1.25rem;
            margin:10px 5px 0 10px;
        }
    </style>`);
    $('html').append(styleNode);
}

function applyGrid() {
  
  // remove the pointless Top div
  $('#TOP').remove();
  //remove random break
  var $body = $('body.Info');
  $body.children('br').remove();
  
  // make the body the wrapper
  $body.css({
    "margin": "0",
  });
  
  var $navBar = $('.anchors');
  var $navBarDiv = $('<div class="navBar">');
  $navBar.wrap($navBarDiv);
  $navBarDiv.css({
    "position": "fixed",
    "top": "0",
    "left": "0",
    "height": "100%",
    "width": "150px",
  });
  
  var $header = $('table.title');
  var $headerDiv = $('<div class="navBar">');
  $$header.wrap($headerDiv);
  $headerDiv.css({
    "grid-area": "header",
  });
  
  var $content = $header.nextAll();
  var $contentDiv = $('<div class="content">');
  $content.wrapAll($contentDiv);
  $contentDiv.css({
    "grid-area": "content",
  });

  var $wrapper = $headerDiv.add($contentDiv);
  var $wrapperDiv = $('<div class="wrapper">');
  $wrapper.wrap($wrapperDiv);
  $wrapperDiv.css({
    "display": "grid",
    "grid-template-columns": "150px 1fr",
    "grid-gap": "10px",
    "grid-template-areas":
      `"header"
      "content"`,
  });
  
  
}

applyCss();
navBar();
styleTables();
applyGrid();