javascript:{function removeElementById(id){var elem = document.getElementById(id);if(elem == null) return;elem.parentNode.removeChild(elem);}var cssRulez = ".fbDockWrapperRight { right: 0 !important; } .fbNubFlyoutInner > div:nth-child(2) { height: 800px !important; } ";var styleNode = document.createElement("style");styleNode.type = "text/css";styleNode.appendChild(document.createTextNode(cssRulez));document.head.appendChild(styleNode);document.title = "Fakelook";removeElementById("BuddylistPagelet");removeElementById("pagelet_sidebar");removeElementById("globalContainer");}