function moveDots () {
    var range = document.getElementById("egoismRange").value;
    var circles = document.getElementsByTagName("circle");
    for (circle of circles) {
        var cx = parseInt(circle.getAttribute("cx"));
        var cy = parseInt(circle.getAttribute("cy"));

        circle.setAttribute("cx", cx + Math.floor(Math.random() * 100) - 50);
        circle.setAttribute("cy", cy + Math.floor(Math.random() * 100) - 50);
    }
}
