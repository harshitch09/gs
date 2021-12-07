var image1x_ar = new Array();
var image1y_ar = new Array();

image1_posx = new Array();
image1_posy = new Array();

var width = window.innerWidth;
var height = window.innerHeight;
function initial()
{
    var dots = document.getElementsByClassName("dot");
    var num = width*height/(dots.length);
    var dim = Math.floor(Math.sqrt(num));
    width = width - dim;
    var xdir = width/dim;
    var ydir = height/dim;
    var ki=0;
    for (let i=0; i<xdir; i++)
    {
        for(let j=0; j<ydir-1; j++)
        {
            dots[ki].style.left = (i*dim+Math.random()*0) + 'px';
            dots[ki].style.top = (j*dim+Math.random()*0 + dim/2) + 'px';
            dots[ki].style.animationDelay = Math.random()*3 + 's';
            ki++;     
        }
    }
    
}
function calculate()
{
    document.getElementById("txt1").innerHTML = '5';
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img = document.getElementById("image1");
    context.drawImage(img, 0, 0);
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    //store values of black pixels
    var i;
    var k=0;
    for(i=0; i<imgData.data.length; i += 20)
    {
        if(imgData.data[i+3] > 0)
        {
            var j=i/4;
            image1y_ar[k] = Math.floor((j/canvas.width));
            image1x_ar[k] = j - (canvas.width*image1y_ar[k]);
            k++;
            console.log(image1x_ar[k-1] + "__" + image1y_ar[k-1]);
        }
    }

    var dots = document.getElementsByClassName("dot");
    for(i=0; i<dots.length; i++)
    {
        var index = Math.floor((Math.random()*image1x_ar.length));
        var px = image1x_ar[index] + 250;
        var py = image1y_ar[index] + 100;
        if(i>0)
        {
            for(let j=0; j<i; j++)
            {
                if(distance(px, py, image1_posx[j], image1_posy[j]) < 15)
                {
                    i--;
                    console.log("falsy");
                    break;
                }
                else
                {
                    image1_posx[i] = px;
                    image1_posy[i] = py;
                }
            }
        }
        else
        {
            image1_posx[i] = px;
            image1_posy[i] = py;
        }

    }
    
}
function show()
{
    var dots = document.getElementsByClassName("dot");
    for(i=0; i<dots.length; i++)
    {
        var px = image1_posx[i] + 'px';
        var py = image1_posy[i] + 'px';
        dots[i].style.left = px;
        dots[i].style.top = py;  
        dots[i].style.animationDelay = Math.random()*3 + 's';
    }

}

function distance(x1, y1, x2, y2)
{
    var a = x2-x1;
    var b = y2-y1;
    return Math.sqrt(a*a + b*b);
}