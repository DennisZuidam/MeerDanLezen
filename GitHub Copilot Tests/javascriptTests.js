function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

// Find images withoud alt text and give them a red border
function GiveRedBorderToImgageWithoutAltText() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "1px solid red";
        }
    }
}

// Return the current time
function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    return time;
}

// Create class Article with properties id, title, author, dateAdded and UserName
function Article(id, title, author, dateAdded, userName) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.dateAdded = dateAdded;
    this.userName = userName;
}

// Read json file and return the Articles in a List
function getArticles() {
    var articles = [];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "articles.json", false);
    xhr.send();
    var json = JSON.parse(xhr.responseText);
    for (var i = 0; i < json.length; i++) {
        var article = new Article(json[i].id, json[i].title, json[i].author, json[i].dateAdded, json[i].userName);
        articles.push(article);
    }
    return articles;
}