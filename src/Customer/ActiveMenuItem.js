function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function markActiveMenuItem(updateTopMenu) {
    var lastPassedElement;
    var listMenuItems = [];
    const el = document.scrollingElement || document.documentElement;
    var anchors = document.getElementsByClassName("top-category-anchor");
    for (let i = 0; i < anchors.length; i++) {
        var index = anchors[i].href.indexOf("#");
        var anchor = anchors[i].href.substring(index + 1, anchors[i].href.length);
        var hrefAnchor = "[href='#" + decodeURIComponent(anchor) + "']";
        var anchorElementsInMenu = document.querySelectorAll(hrefAnchor);
        if (anchorElementsInMenu.length === 1) {
            listMenuItems.push(anchorElementsInMenu[0]);
        }
        var anchorElements = document.getElementsByName(decodeURIComponent(anchor));
        if (anchorElements.length === 1) {
            var anchorElement = anchorElements[0];
            if (el.scrollTop >= offset(anchorElement).top - 5) {
                lastPassedElement = anchorElement.name;
                anchorElement.classList.add(encodeURIComponent(lastPassedElement));
            }
        }
    }
    if (listMenuItems.length === 0) {
        return
    }

    // Remove all active class tags
    for (let i = 0; i < listMenuItems.length; i++) {
        listMenuItems[i].classList.remove('active-menu');
    }
    // Set correct link to active
    var anchorElementsHref = document.querySelectorAll("[href='#" + decodeURIComponent(lastPassedElement) + "']");
    if (anchorElementsHref.length === 1) {
        var anchorElementHref = anchorElementsHref[0];
        anchorElementHref.classList.add('active-menu');

        // Scroll top menu automatically when the selected element is fully/partially of the screen.
        if (updateTopMenu && (anchorElementHref.getBoundingClientRect().left > window.screen.width - anchorElementHref.offsetWidth || anchorElementHref.getBoundingClientRect().left < 0 )) {
            var topMenu = document.getElementById("top-menu");
            topMenu.scrollTo(anchorElementHref.offsetLeft - 5, 0);
        }

    } else {
        // If there is no menu item scrolled over, mark the first
        listMenuItems[0].classList.add('active-menu');
    }
}

// Setup scrolling variable
var isScrolling;
window.onscroll = function () {

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        markActiveMenuItem(true);

    }, 25);

    markActiveMenuItem(false);
};
