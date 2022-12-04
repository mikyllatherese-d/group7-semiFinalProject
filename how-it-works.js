
var a;
function show_hide()
{
    if (a==0)
    {
        document.getElementById("show_hide").style.display="inline";    
        return a=1;
    }
    else
    {
        document.getElementById("show_hide").style.display="none";
        return a=0 ;
    }
}
var b;
function insight()
{
    if (b==1)
    
    {
        document.getElementById("ticketing").style.display="inline";    
        return b=0;
    }
    else
    {
        document.getElementById("ticketing").style.display="none";
        return b=1 ;
    }
}
var c;
function payment()
{
if (c==1)
    
    {
        document.getElementById("payment").style.display="inline";    
        return c=0;
    }
    else
    {
        document.getElementById("payment").style.display="none";
        return c=1 ;
    }
}
var d;
function check()
{
if (d==1)
    
    {
        document.getElementById("check").style.display="inline";    
        return d=0;
    }
    else
    {
        document.getElementById("check").style.display="none";
        return d=1 ;
    }
}
