/**
 * Created by design on 29/02/16.
 */
 // declare globals to hold all the links and all the panel elements
var gridBox;
var gridPanel;

window.onload=function() {
        // when the page loads, grab the a elements
        gridBox = document.getElementById("collectionNav").getElementsByTagName("a");
    // Now get all the tab panel container section
    gridPanel = document.getElementById("blk_content").getElementsByTagName("section");

    // activate the _first_ one
        displayPanel(gridBox[0]);

        // attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
        for (var i = 0; i < gridBox.length; i++) {
                gridBox[i].onclick = function() {
            displayPanel(this);
            return false;
        }
                gridBox[i].onfocus = function() {
            displayPanel(this);
            return false;
        }
        }
}

function displayPanel(tabToActivate) {
        // go through all the <a> elements
        for (var i = 0; i < gridBox.length; i++) {
                if (gridBox[i] == tabToActivate) {
            // if it's the one to activate, change its class
                        gridBox[i].classList.add("active");
            // and display the corresponding panel
            gridPanel[i].style.display = "block";
                } else {
            // remove the active class on the link
                    gridBox[i].classList.remove("active");
            // hide the panel
            gridPanel[i].style.display = "none";
                }
    }
}
