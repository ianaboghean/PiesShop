window.addEventListener('load', router);
window.addEventListener('hashchange', router);

function router(evt) {
    let routes = ["", "/", "fruitpies", "cheesecakes", "seasonalpies", "allpies", "order", "done", 
    "piesubscription", "contact", "applepie", "cheesecakepie"];
    let url = window.location.hash.slice(1) || '/';
    let bodyMain = document.getElementById('bodyMain');

    if (!routes.includes(url)) {
        throw new Error(`Route ${url} not found`);
    }

    bodyMain.classList.remove("container");

    switch (url) {
        case 'fruitpies':
            includeHtmlFile('fruitpies', 'bodyMain');
            break;
        case 'cheesecakes':
            includeHtmlFile('cheesecakes', 'bodyMain');
            break;
        case 'seasonalpies':
            includeHtmlFile('seasonalpies', 'bodyMain');
            break;
        case 'allpies':
            includeHtmlFile('allpies', 'bodyMain');
            break;
        case 'order':
            includeHtmlFile('order', 'bodyMain').onload = formValidation;
            break;
        case 'done':
            includeHtmlFile('done', 'bodyMain');
            break;
        case 'piesubscription':
            includeHtmlFile('piesubscription', 'bodyMain');
            break;
        case 'contact':
            includeHtmlFile('contact', 'bodyMain').onload = formValidation;
            break;
        case 'applepie':
            includeHtmlFile('applepie', 'bodyMain');
            break;
        case 'cheesecakepie':
            includeHtmlFile('cheesecakepie', 'bodyMain');
            break;
        
        default:
            includeHtmlFile('home', 'bodyMain');
            bodyMain.classList.add("container");
            break;
    }
    
};

function includeHtmlFile(htmlFile, elemntId) {
    htmlFile += '.html';
    var xhr= new XMLHttpRequest();
    xhr.open('GET', './pages/' + htmlFile, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        document.getElementById(elemntId).innerHTML= this.responseText;
    };
    
    xhr.send();

    return xhr;
}
