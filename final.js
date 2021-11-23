var orange_pos = new Array();
var blue_pos = new Array();
var pink_pos = new Array();
var width = window.innerWidth;
var height = window.innerHeight;

var orange_dot = document.getElementsByClassName("orange");
var blue_dot = document.getElementsByClassName("blue");
var pink_dot = document.getElementsByClassName("pink");
function setArr()
{
    var centerX = width/2 + 200;
    var centerY = height/2;
    var orange_radius = 300;
    var blue_radius = 160;
    var pink_radius = 60;
    //SETTING ARRAY FOR ORANGE DOTS
    for(let i=0; i<orange_dot.length; i++)
    {
        let point = 
        {
            x: (centerX-orange_radius)+Math.random()*(2*orange_radius), 
            y: (centerY-orange_radius)+Math.random()*(2*orange_radius)
        };
        orange_pos[i] = point;
        if(i>0)
        {
            for(let j=0; j<i; j++)
            {
                if((distance(point.x, point.y, orange_pos[j].x, orange_pos[j].y) < 10) || (distance(point.x, point.y, centerX, centerY) < (orange_radius-140)) || (distance(point.x, point.y, centerX, centerY) > orange_radius))
                {
                    i--;
                    break;
                }
            }
        }
        else
        {
            if((distance(point.x, point.y, centerX, centerY) < (orange_radius-140)) || (distance(point.x, point.y, centerX, centerY) > orange_radius))
            {
                i--;
            }
        }
    }
    //SETTING ARRAY FOR BLUE DOTS
    for(let i=0; i<blue_dot.length; i++)
    {
        let point = 
        {
            x: (centerX-blue_radius)+Math.random()*(2*blue_radius), 
            y: (centerY-blue_radius)+Math.random()*(2*blue_radius)
        };
        blue_pos[i] = point;
        if(i>0)
        {
            for(let j=0; j<i; j++)
            {
                if((distance(point.x, point.y, blue_pos[j].x, blue_pos[j].y) < 10) || (distance(point.x, point.y, centerX, centerY) < (blue_radius-100)) || (distance(point.x, point.y, centerX, centerY) > blue_radius))
                {
                    i--;
                    break;
                }
            }
        }
        else
        {
            if((distance(point.x, point.y, centerX, centerY) < (blue_radius-100)) || (distance(point.x, point.y, centerX, centerY) > blue_radius))
            {
                i--;
            }
        }
    }

    //SETTING ARRAY FOR PINK DOTS
    for(let i=0; i<pink_dot.length; i++)
    {
        let point = 
        {
            x: (centerX-pink_radius)+Math.random()*(2*pink_radius), 
            y: (centerY-pink_radius)+Math.random()*(2*pink_radius)
        };
        pink_pos[i] = point;
        if(i>0)
        {
            for(let j=0; j<i; j++)
            {
                if((distance(point.x, point.y, pink_pos[j].x, pink_pos[j].y) < 8) || (distance(point.x, point.y, centerX, centerY) > pink_radius))
                {
                    i--;
                    break;
                }
            }
        }
        else
        {
            if(distance(point.x, point.y, centerX, centerY) > pink_radius)
            {
                i--;
            }
        }
    }
}

function initial()
{
    var dot = document.getElementsByClassName("dot");
    var num = width*height/dot.length;
    var dim = Math.sqrt(num);

    var xdir = width/dim;
    var ydir = height/dim;
    var k=0;
    for (let i=0; i<xdir; i++)
    {
        for(let j=0; j<ydir; j++)
        {
            dot[k].style.left = (i*dim+Math.random()*0) + 'px';
            dot[k].style.top = (j*dim+Math.random()*0) + 'px';
            k++;
        }
    }
}

function show()
{
    
    for(let i=0; i<orange_dot.length; i++)
    {
        var a = orange_pos[i].x + 'px';
        var b = orange_pos[i].y + 'px';
        orange_dot[i].style.left = a;
        orange_dot[i].style.top = b;
        orange_dot[i].style.animationDelay = (Math.random()*3) + 's';
    }

    for(let i=0; i<blue_dot.length; i++)
    {
        var a = blue_pos[i].x + 'px';
        var b = blue_pos[i].y + 'px';
        blue_dot[i].style.left = a;
        blue_dot[i].style.top = b;
        blue_dot[i].style.animationDelay = (Math.random()*3) + 's';
    }

    for(let i=0; i<pink_dot.length; i++)
    {
        var a = pink_pos[i].x + 'px';
        var b = pink_pos[i].y + 'px';
        pink_dot[i].style.left = a;
        pink_dot[i].style.top = b;
        pink_dot[i].style.animationDelay = (Math.random()*3) + 's';
    }
}

function showcol()
{
    for(let i=0; i<orange_dot.length; i++)
    {
        orange_dot[i].style.backgroundColor = '#202a10';
        orange_dot[i].style.opacity = '0.3';
    }

    for(let i=0; i<blue_dot.length; i++)
    {
        blue_dot[i].style.backgroundColor = '#005eb5';
       // blue_dot[i].style.animationDuration = '2s';
    }

    for(let i=0; i<pink_dot.length; i++)
    {
        pink_dot[i].style.backgroundColor = '#005eb5';
       // pink_dot[i].style.animationDuration = '1.5s';
    }
}

function distance(x1, y1, x2, y2)
{
    var a = x2-x1;
    var b = y2-y1;
    return Math.sqrt(a*a + b*b);
}


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 0, 33621530000000, 4000);