canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black" 
linewidth = 2
radius = 10

canvas.addEventListener("mousedown", my_mousedown)
var mouseevent="" 
function my_mousedown(e)
{
    color = document.getElementById("color").value
    linewidth = document.getElementById("linewidth").value
    radius = document.getElementById("radius").value
    console.log ("color"+color)
    console.log ("linewidth"+linewidth)
    console.log ("radius"+radius)

    mouseevent="mousedown"

}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
    mouseevent="mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft
    current_position_of_y = e.clientY - canvas.offsetTop

    if (mouseevent == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = linewidth
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI )
        ctx.stroke()
                  
    }
}

function clearcanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

