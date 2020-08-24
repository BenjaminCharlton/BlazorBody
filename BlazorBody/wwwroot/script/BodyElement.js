var getBodyElement = function() {
    return document.getElementsByTagName("body")[0];
}

var setCssClassOfBody = function (cssClass) {
    getBodyElement().className = cssClass;
}

var addCssClassToBody = function (cssClass) {
    var body = getBodyElement();

    if (!body.classList.contains(cssClass)) {
        body.classList.add(cssClass);
    }
}

var removeCssClassFromBody = function (cssClass) {
    var body = getBodyElement();
    if (body.classList.contains(cssClass))
        body.classList.remove(cssClass);
}

var toggleCssClassOfBody = function (cssClass) {
    var body = getBodyElement();

    if (body.classList.contains(cssClass)) {
        removeCssClassFromBody(cssClass);
    }
    else {
        addCssClassToBody(cssClass);
    }
}

var setLanguageOfBody = function (language) {
    var body = getBodyElement();
    body.lang = language;
}

var setTextDirectionOfBody = function (direction) {
    var body = getBodyElement();
    body.dir = direction;
}