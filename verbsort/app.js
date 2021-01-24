// An array of all the possible items that will be shown on-screen
//24
const ITEMS = [
    {
        src: "img/bail.png",
        name: "Bailigh",
        bin: "caol2"
    },
    {
        src: "img/bi.png",
        name: "Bí",
        bin: "irreg"
    },
    {
        src: "img/bris.png",
        name: "Bris",
        bin: "caol1"
    },
    {
        src: "img/caith.png",
        name: "Caith",
        bin: "caol1"
    },
    {
        src: "img/ceann.png",
        name: "Ceannaigh",
        bin: "leathan2"
    },
    {
        src: "img/clois.png",
        name: "Clois",
        bin: "irreg"
    },
    {
        src: "img/crich.png",
        name: "Críochnaigh",
        bin: "leathan2"
    },
    {
        src: "img/cuir.png",
        name: "Cuir",
        bin: "caol1"
    },
    {
        src: "img/dean.png",
        name: "Déan",
        bin: "irreg"
    },
    {
        src: "img/diol.png",
        name: "Díol",
        bin: "leathan1"
    },
    {
        src: "img/dun.png",
        name: "Dún",
        bin: "leathan1"
    },
    {
        src: "img/eir.png",
        name: "Éirigh",
        bin: "caol2"
    },
    {
        src: "img/fan.png",
        name: "Fan",
        bin: "leathan1"
    },
    {
        src: "img/soc.png",
        name: "Socraigh",
        bin: "leathan2"
    },
    {
        src: "img/imir.png",
        name: "Imir",
        bin: "caol2"
    },
    {
        src: "img/Ith.png",
        name: "Ith",
        bin: "irreg"
    },
    {
        src: "img/tabhair.png",
        name: "Tabhair",
        bin: "irreg"
    },
    {
        src: "img/teigh.png",
        name: "Téigh",
        bin: "irreg"
    },
    {
        src: "img/tog.png",
        name: "Tóg",
        bin: "leathan1"
    },
    {
        src: "img/tos.png",
        name: "Tosaigh",
        bin: "leathan2"
    },
    {
        src: "img/eist.png",
        name: "Éist",
        bin: "caol1"
    },
    {
        src: "img/gort.png",
        name: "Gortaigh",
        bin: "leathan2"
    },
    {
        src: "img/abair.png",
        name: "Abair",
        bin: "irreg"
    },
    {
        src: "img/tar.png",
        name: "Tar",
        bin: "irreg"
    }
    
    
    
];


const FEEDBACK_TIMEOUT = 1500; // in MS
const BINS = ["leathan1", "caol1", "irreg", "leathan2", "caol2"];
const IMAGE_WIDTH = 150;
const MESSAGE = "This game only works on computer/laptops currently, so if your on a computer/laptop go ahead! \n If your on mobile the game won't function for you. Sorry!"


let possibleItems; // for items that are yet to be displayed
let score = 0;
let time = 60;
let itemsAtPlay = 0;
let timerInterval;
var mouse = true;


let bottomShelfWidth = document.getElementById("bottom_shelf").offsetWidth;
let bottomShelfHeight = document.getElementById("bottom_shelf").offsetHeight;
let topShelfHeight = document.getElementById("top_shelf").offsetHeight;



//alert(MESSAGE);
window.onload = startscreen;

function startscreen(){
    let gameStartScreen = document.getElementById("game_end");
    gameStartScreen.innerHTML = "<h1>Tarraing agus scaoil na briathra sa chatagóir cheart.</h1>";

       
    gameStartScreen.innerHTML += "<h2>Dá luaithe a eagraíonn tú iad is airde do scór!</h2>";
    

    
    gameStartScreen.style.display = "block";

    gameStartScreen.innerHTML += "<button onclick='init()'>Imir Cluiche</button>";

}


function init() {
    
    //document.addEventListener("mousedown",dragElement);
    
    // hide the end game screen
    document.getElementById("game_end").style.display = "none";

    // clear any leftover images if any
    document.getElementById("bottom_shelf").innerHTML = "";

    // Shuffle ITEMS array and deep copy into possible items
    possibleItems = JSON.parse(JSON.stringify(shuffle(ITEMS)));

    // Add the first three itmems
    for (let i = 0; i < 3; i++)  {
        addItem();
        
    }

    // clear all possible intervals
    window.clearInterval(timerInterval);

    // start the timer
    startTimer();
}



function addItem() {
    // if there are any items left
    if (possibleItems.length > 12) {
        // get the last item
        let item = possibleItems.pop();

        // create an image object from item
        let image = new Image();
        image.src = item.src;
        image.width = IMAGE_WIDTH;
        itemsAtPlay++;
        

        // add image to screen
        let el = document.getElementById("bottom_shelf").appendChild(image);
        

        
        // set the bin and name property for answer checking
        image.setAttribute("bin", item.bin);
        image.setAttribute("name", item.name);

        // randomly place image in bottom shelf
        image.style.top = topShelfHeight + Math.floor(Math.random() * (bottomShelfHeight - (el.naturalHeight / 2))) + "px";
        image.style.left = Math.floor(Math.random() * (bottomShelfWidth - IMAGE_WIDTH)) + "px";

        // allow the item to be draggable
        
        dragElement(image);
        
    }
    // if there are no more items left -- you have won the game
    else {
        if (!itemsAtPlay)
            endGame(true);
    }
}






function endGame(won) {
    let gameEndScreen = document.getElementById("game_end");

    // show the end game screen
    gameEndScreen.style.display = "block";

    // show end game message
    if (won)  {
        // stop timer
        window.clearInterval(timerInterval);

        
        gameEndScreen.innerHTML = "<h1>Comhghairdeas, chríochnaigh tú an cliuche!</h1>";

        
        gameEndScreen.innerHTML += "<h2>Scór: " + score + "</h2>";

    }
    else {
        // show game lose text
        gameEndScreen.innerHTML = "<h1>Sorry, you ran out of time. Try again!</h1>";

        
        gameEndScreen.innerHTML += "<h2>Scór: " + score + "</h2>";
    }

    
    gameEndScreen.innerHTML += "<button onclick='init()'>Imir Arís?</button>";
}

function showNotification(correct, item) {
    let notification = document.getElementById("notification");

  
    if (correct) {
       notification.innerHTML = "Maith thú!"; 
       notification.style.backgroundColor = "#d4edda";
    }
    else {
        document.getElementById("notification").innerHTML = "Níl sé sin ceart, déan iarracht arís.";

        notification.style.backgroundColor = "#f8d7da";
    }
    
    
    document.getElementById("notification").style.display = "block";

   
    setTimeout(function() {
        document.getElementById("notification").style.display = "none";
    }, FEEDBACK_TIMEOUT);
}


function startTimer() {
    
    time = 0;

    
    timerInterval = setInterval(function() {
        
        time++;
        document.getElementById("timer").innerHTML = "Amadóir: " + time;

    }, 1000);
}


function updateScoreboard() {
    document.getElementById("score").innerHTML = "Scór: " + score;
}

/**
* https://www.w3schools.com/howto/howto_js_draggable.asp
* 
*/
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        
        // Place element where the finger is
        elmnt.style.left = touch.pageX-25 + 'px';
        elmnt.style.top = touch.pageY-25 + 'px';
        
        event.preventDefault();
        
        
        
      }, false);
      elmnt.addEventListener('touchend', function(event) {
       
        let draggedItem = event.srcElement;
    
            
            for (let bin of BINS) {
                
                if (detectOverlap(draggedItem, document.getElementById(bin))) {
                   
                    if (bin == draggedItem.getAttribute("bin")) {
                        showNotification(true, draggedItem);
    
                        
                        itemsAtPlay--;
    
                        
                        score += 100;
    
                        
                        setTimeout(function() {
                            draggedItem.remove();
                        }, FEEDBACK_TIMEOUT);
    
                        
                        addItem();
                    }
                    
                    else {
                        
                        if (!detectOverlap(draggedItem, document.getElementById("bottom_shelf")))
                            showNotification(false);
    
                        
                        score -= 50;
                    }
    
                    updateScoreboard();
                }
            }
        event.preventDefault();
        
        
        
        
      }, false);
      
    /*document.body.addEventListener('touchstart', function(e){
        elmnt.ontouchstart = dragFingerDown;
        function dragFingerDown(e){
        
            e = e || window.event;
    
            e.preventDefault();
    
            pos3 = e.touches[0].clientX;
            pos4 = e.tocues[0].clientY;
    
            document.ontouchend = closeDragElementTouch;
            document.ontouchmove = elementDragTouch;
        }    
            function elementDragTouch(e) {
                e = e || window.event;
        
                e.preventDefault();
        
                // calculate the new cursor position:
                
                pos1 = pos3 - e.touches[0].clientX;
                pos2 = pos4 - e.touches[0].clientY;
                pos3 = e.touches[0].clientX;
                pos4 = e.touches[0].clientY;
        
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        
               
            }
               
        
    }, false)*/

        
        
            elmnt.onmousedown = dragMouseDown;
        
        
    
    
    function dragMouseDown(e) {
        e = e || window.event;

        e.preventDefault();

        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        

        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        
    }

    

    
    function elementDrag(e) {
        e = e || window.event;

        e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    
   
    function closeDragElement(e) {
        e = e || window.event;

       
        document.onmouseup = null;
        document.onmousemove = null;

        
        let draggedItem = e.srcElement;

        
        for (let bin of BINS) {
            
            if (detectOverlap(draggedItem, document.getElementById(bin))) {
                
                if (bin == draggedItem.getAttribute("bin")) {
                    showNotification(true, draggedItem);

                    
                    itemsAtPlay--;

                    
                    score += 100;

                    
                    setTimeout(function() {
                        draggedItem.remove();
                    }, FEEDBACK_TIMEOUT);

                    
                    addItem();
                }
                
                else {
                    if (!detectOverlap(draggedItem, document.getElementById("bottom_shelf")))
                        showNotification(false);

                   
                    score -= 50;
                }

                updateScoreboard();
            }
        }
    }

    
    
    
}


/**
 * https://stackoverflow.com/a/29959520
 */
var detectOverlap = (function () {
    function getPositions(elem) {
        var pos = elem.getBoundingClientRect();
        return [[pos.left, pos.right], [pos.top, pos.bottom]];
    }

    function comparePositions(p1, p2) {
        var r1, r2;

        if (p1[0] < p2[0]) {
            r1 = p1;
            r2 = p2;
        } 
        else {
            r1 = p2;
            r2 = p1;
        }

        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function (a, b) {
        var pos1 = getPositions(a),
            pos2 = getPositions(b);

        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
    };
})();

/**
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}