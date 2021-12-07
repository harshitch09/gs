var image1x_ar = new Array();
var image1y_ar = new Array();

image1_posx = new Array();
image1_posy = new Array();

image2_class1_posx = new Array();
image2_class1_posy = new Array();

image2_class2_posx = new Array();
image2_class2_posy = new Array();

image3_class1_posx = new Array();
image3_class1_posy = new Array();
image3_class2_posx = new Array();
image3_class2_posy = new Array();

image4_class23_posx = new Array();
image4_class23_posy = new Array();

image0_class_posx = new Array();
image0_class_posy = new Array();

image5_class_posx = new Array();
image5_class_posy = new Array();

image6_class_posx = new Array();
image6_class_posy = new Array();

var width = window.innerWidth;
var height = window.innerHeight;

var centerX = 1200;
var centerY = 350;
var R = 170;
var r = 120;

var text = document.getElementsByClassName("txt");
var text_high = document.getElementsByClassName("high");

function initial()
{
    // var dots = document.getElementsByClassName("dot");
    // var num = width*height/(dots.length);
    // var dim = Math.floor(Math.sqrt(num));
    // width = width - dim;
    // var xdir = width/dim;
    // var ydir = height/dim;
    // var ki=0;
    // for (let i=0; i<xdir; i++)
    // {
    //     for(let j=0; j<ydir-1; j++)
    //     {
    //         dots[ki].style.left = (i*dim+Math.random()*0) + 'px';
    //         dots[ki].style.top = (j*dim+Math.random()*0 + dim/2) + 'px';
    //         dots[ki].style.animationDelay = Math.random()*3 + 's';
    //         ki++;     
    //     }
    // }

    var dimx = width/25;
    var dimy = height/20;
    var i, j, k=0;
    for(i=0; i<20; i++)
    {
        for(j=0; j<25; j++)
        {
            image0_class_posx[k] = dimx/2 + (j*dimx) + Math.random()*5;
            image0_class_posy[k] = dimy/2 + (i*dimy) + Math.random()*5;
            k++;
        }
    }

    var dot = document.getElementsByClassName("dot");
    for(i=0; i<dot.length; i++)
    {
        var px = image0_class_posx[i] + 'px';
        var py = image0_class_posy[i] + 'px';
        dot[i].style.left = px;
        dot[i].style.top = py;  
        dot[i].style.animationDelay = Math.random()*3 + 's';
        dot[i].style.animationName = 'shuffle1';
    }

    // setTimeout(function()
    // {
    //     show();
    // }, 4000);

}
    
function calculate()
{
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

function calculate2()
{
    var dot1 = document.getElementsByClassName("class1");
    var dot2 = document.getElementsByClassName("class2");

    let i,j;
    var temp = 1;
    for(i=0; i<(dot1.length); i++)
    {
            var posx = Math.random()*(2*R) + (centerX - R);
            var posy = Math.random()*(2*R) + (centerY - R);

            if((distance(centerX, centerY, posx, posy) < R) && (distance(centerX, centerY, posx, posy) > r))
            {
                if(i>0)
                {
                    for(j=0; j<i; j++)
                    {
                        if(distance(posx, posy, image2_class1_posx[j], image2_class1_posy[j]) < 10)
                        {
                            --i;
                            temp=0;
                            break;
                        }
                    }
                    if(temp==1)
                    {
                        image2_class1_posx[i] = posx;
                        image2_class1_posy[i] = posy;
                    }
                    else
                    {
                        temp = 1;
                    }
                }
                else
                {
                    image2_class1_posx[0] = posx;
                    image2_class1_posy[0] = posy;
                }
            }
            else
            {
                --i;
            }
    }

    for(i=0; i<(dot2.length); i++)
    {
            var posx = Math.random()*(2*r) + (centerX - r);
            var posy = Math.random()*(2*r) + (centerY - r);

            if(distance(centerX, centerY, posx, posy) < (r-5))
            {
                if(i>0)
                {
                    for(let j=0; j<i; j++)
                    {
                        if(distance(posx, posy, image2_class2_posx[j], image2_class2_posy[j]) < 8)
                        {
                            i--;
                            temp=0;
                            break;
                        }
                    }
                    if(temp==1)
                    {
                        image2_class2_posx[i] = posx;
                        image2_class2_posy[i] = posy;
                    }
                    else
                    {
                        temp = 1;
                    }
                }
                else
                {
                    image2_class2_posx[i] = posx;
                    image2_class2_posy[i] = posy;
                }
            }
            else
            {
                i--;
            }
    }
}

function calculate3()
{
    var dimx = width/25;
    var dimy = height/20;

    var i, j, k=0;
    for(i=0; i<12; i++)
    {
        for(j=0; j<25; j++)
        {
            image3_class1_posx[k] = dimx/1.5 + (j*dimx) + Math.random()*5;
            image3_class1_posy[k] = dimy/2 + (i*dimy) + Math.random()*5;
            k++;
        }
    }
    k=0;
    for(i=12; i<20; i++)
    {
        for(j=0; j<25; j++)
        {
            image3_class2_posx[k] = dimx/1.5 + (j*dimx) + Math.random()*5;
            image3_class2_posy[k] = dimy/2 + (i*dimy) + Math.random()*5;
            k++;
        }
    }
}

function calculate4()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    var dimx = width/10;
    var dimy = height/5;

    var i, j, k=0;
    for(i=0; i<5; i++)
    {
        for(j=0; j<20; j++)
        {
            image4_class23_posx[k] = dimx/3 + (j*dimx) + Math.random()*5;
            image4_class23_posy[k] = dimy/2 + (i*dimy) + Math.random()*5;
            k++;
        }
    }
}

function calculate5()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    var dots = document.getElementsByClassName("dot");
    var i,temp=1,j;
    for(i=0; i<dots.length; i++)
    {
        var posx = Math.floor(Math.random()*width);
        var posy = Math.floor(Math.random()*height);
        if(i>0)
        {
            for(j=0; j<i; j++)
            {
                if(distance(posx, posy, image5_class_posx[j], image5_class_posy[j]) < 10)
                {
                    i--;
                    temp=0;
                    break;
                }
            }
            if(temp==1)
            {
                image5_class_posx[i] = posx;
                image5_class_posy[i] = posy;
            }
            else
            {
                temp = 1;
            }
        }
        else
        {
            image5_class_posx[i] = posx;
            image5_class_posy[i] = posy;
        }
    }
}

function calculate6()
{
    
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    var dots = document.getElementsByClassName("dot");
    var i;
    for(i=0; i<dots.length; i++)
    {
        var posx = Math.floor(Math.random()*width*2);
        if(posx > 0.5*width && posx < 1.5*width)
        {
            i--;
            continue;
        }
        else
        {
            posx = posx - width/2;
        }
        var posy = Math.floor(Math.random()*2*height);
        if(posy > 0.5*height && posy < 1.5*height)
        {
            i--;
            continue;
        }
        else
        {
            posy = posy - height/2;
        }
        image6_class_posx[i] = posx;
        image6_class_posy[i] = posy;
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
        
        dots[i].style.animationName = 'shuffle';
    }
    text[0].style.visibility = 'visible';
    text[0].style.opacity = '1';
    setTimeout(function() 
    {
        text_high[0].style.backgroundPosition = '-100% 100%' ;
    }, 900);
    
    // setTimeout(function()
    // {
    //     show2();
    // }, 4000);
    
}

function show2()
{
    var dot1 = document.getElementsByClassName("class1");
    var dot2 = document.getElementsByClassName("class2");
    for(i=0; i<dot1.length; i++)
    {
        var px = image2_class1_posx[i] + 'px';
        var py = image2_class1_posy[i] + 'px';
        dot1[i].style.left = px;
        dot1[i].style.top = py;  
        dot1[i].style.animationName = 'shuffle1';
    }
    for(i=0; i<dot2.length; i++)
    {
        var px = image2_class2_posx[i] + 'px';
        var py = image2_class2_posy[i] + 'px';
        dot2[i].style.left = px;
        dot2[i].style.top = py; 
        dot2[i].style.animationName = 'shuffle1'; 
    }
    text[0].style.visibility = 'hidden';
    text[0].style.opacity = '0';
    setTimeout( function() {
        text[1].style.visibility = 'visible';
        text[1].style.opacity = '1';
    }, 700);
    setTimeout(function() 
    {
        text_high[1].style.backgroundPosition = '-100% 100%' ;
    }, 900);

    // setTimeout(function()
    // {
    //     show3();
    // }, 4000);
    
}

function show3()
{
    var dot1 = document.getElementsByClassName("class1");
    var dot2 = document.getElementsByClassName("class2");
    for(i=0; i<dot1.length; i++)
    {
        var px = image3_class1_posx[i] + 'px';
        var py = image3_class1_posy[i] + 'px';
        dot1[i].style.left = px;
        dot1[i].style.top = py;  
        dot1[i].style.animationName = 'shuffle1';
    }
    for(i=0; i<dot2.length; i++)
    {
        var px = image3_class2_posx[i] + 'px';
        var py = image3_class2_posy[i] + 'px';
        dot2[i].style.left = px;
        dot2[i].style.top = py; 
        dot2[i].style.animationName = 'shuffle1'; 
        dot2[i].style.backgroundColor = "#000000";
    }
    text[1].style.visibility = 'hidden';
    text[1].style.opacity = '0';
    setTimeout( function() {
        text[2].style.visibility = 'visible';
        text[2].style.opacity = '1';
    }, 700);
    setTimeout(function() 
    {
        text_high[2].style.backgroundPosition = '-100% 100%' ;
    }, 900);

    // setTimeout(function()
    // {
    //     show4();
    // }, 4000);
}

function show4()
{
    var dot1 = document.getElementsByClassName("class1");
    for(i=0; i<dot1.length; i++)
    {
        dot1[i].style.top = (-100*i - 100) + 'px';  
        dot1[i].style.animationName = 'shuffle1';
    }

    var dot2 = document.getElementsByClassName("class2");
    var dot3 = document.getElementsByClassName("class3");

    for(i=0; i<dot2.length; i++)
    {
        var px = image4_class23_posx[i] + 'px';
        var py = image4_class23_posy[i] + 'px';
        dot2[i].style.left = px;
        dot2[i].style.top = py;  
        dot2[i].style.animationName = 'shuffle1';
    }
    for(i=0; i<dot3.length; i++)
    {
        var px = image4_class23_posx[i] + 'px';
        var py = image4_class23_posy[i] + 'px';
        dot3[i].style.left = px;
        dot3[i].style.top = py; 
        dot3[i].style.animationName = 'shuffle1'; 
        dot3[i].style.backgroundColor = "#02fd15";
    }
    text[2].style.visibility = 'hidden';
    text[2].style.opacity = '0';
    setTimeout( function() {
        text[3].style.visibility = 'visible';
        text[3].style.opacity = '1';
    }, 700);
    setTimeout(function() 
    {
        text_high[3].style.backgroundPosition = '-100% 100%' ;
    }, 900)
}

function show5()
{
    var dots = document.getElementsByClassName("dot");
    var i;
    for(i=0; i<dots.length; i++)
    {
        var px = image5_class_posx[i] + 'px';
        var py = image5_class_posy[i] + 'px';

        dots[i].style.left = px;
        dots[i].style.top = py;
        if(i%2==0)
        {
            dots[i].style.backgroundColor = '#001245';
        }
        else
        {
            dots[i].style.backgroundColor = '#ff0000';
        }
    }
    text[3].style.visibility = 'hidden';
    text[3].style.opacity = '0';
    setTimeout( function() {
        text[4].style.visibility = 'visible';
        text[4].style.opacity = '1';
    }, 700);
    // setTimeout(function() 
    // {
    //     text_high[4].style.backgroundPosition = '-100% 100%' ;
    // }, 900)
}

function show6()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    var dots = document.getElementsByClassName("dot");
    var i;
    for(i=0; i<5; i++)
    {
        dots[i].style.left = ((width/2) + 200*(i-2)) + 'px';
        dots[i].style.top = (height/2 - 100) + 'px';
        dots[i].style.backgroundColor = 'green';
        dots[i].style.width = 15 + 'px';
        dots[i].style.height = 15 + 'px';
        dots[i].style.animationName = 'shuffle';
    }
    
    for(i=5; i<dots.length; i++)
    {
        var px = image6_class_posx[i] + 'px';
        var py = image6_class_posy[i] + 'px';
        dots[i].style.left = px;
        dots[i].style.top = py;
    }

    text[4].style.visibility = 'hidden';
    text[4].style.opacity = '0';
    setTimeout( function() {
        text[5].style.visibility = 'visible';
        text[5].style.opacity = '1';
    }, 700);
    setTimeout(function() 
    {
        text_high[4].style.backgroundPosition = '-100% 100%' ;
    }, 900)
}

function show7()
{
    var dots = document.getElementsByClassName("dot");
    var i;
    for(i=0; i<5; i++)
    {
        dots[i].style.left = ((width/2) + 200*(2-i)) + 'px';
        dots[i].style.top = (height/2 - 100) + 'px';
        dots[i].style.backgroundColor = '#fd5151';
        dots[i].style.width = 30 + 'px';
        dots[i].style.height = 30 + 'px';
        dots[i].style.animationDuration = '2.5s';
    }

    text[5].style.visibility = 'hidden';
    text[5].style.opacity = '0';
    setTimeout( function() {
        text[6].style.visibility = 'visible';
        text[6].style.opacity = '1';
    }, 700);
    setTimeout(function() 
    {
        text_high[5].style.backgroundPosition = '-100% 100%' ;
    }, 900)
}

function distance(x1, y1, x2, y2)
{
    var a = x2-x1;
    var b = y2-y1;
    return Math.sqrt(a*a + b*b);
}