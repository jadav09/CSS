
function fun1(x)

{

    x.style.height="3px"
    x.style.width="100%"
    x.style.color="blue"
    x.style.backgroundColor="powderBlue"
}



// *****************


function men(x)

{
    if(x.style.visibility=="hidden")
    {

    x.style.visibility="visible"

    }
    else
    {
    x.style.visibility="hidden"

    }
}


// **************counters***********



c1=document.getElementsByClassName("count")

console.log(c1)

x=0,
y=0,
z=0

function scrl()
{

    if(document.documentElement.scrollTop>1400)
    {

           
function countxyz()
{

    if(x<=853)
    {
        c1[0].innerHTML=(x)
        x++;

    }

    if(y<=643)
    {
        c1[1].innerHTML=y
        y++;
    }

    if(z<=55)
    {
        c1[2].innerHTML=z
        z++
    }
    // count()
    setTimeout(countxyz,20)

}

setTimeout(countxyz)

}
    } 


    // ********************

    s_tag=document.getElementsByClassName("s")
    s1_tag=document.getElementsByClassName("s1")
    wmn_tag = document.querySelector(".women")



console.log(wmn_tag)
    // wmn_tag[1].style.backgroundColor="red"

    wmn_tag[0].style.display="block"


    

    console.log(wmn_tag)

    function scrlp()
    {
        if(document.documentElement.scrollTop>1800)
        {
            
    function pos()
    {

    s_tag[0].style.translate="20px 0px"
    s_tag[0].style.transition="2s"
    s_tag[0].style.opacity="1"


    s_tag[1].style.backgroundPosition="0px 0px"
    s_tag[1].style.transition="2s"

    s_tag[2].style.backgroundPosition="0px 0px"
    s_tag[2].style.transition="2s"

    s1_tag[0].style.opacity="1"
    s1_tag[0].style.translate="20px"
    s1_tag[0].style.transition="2s"

    s1_tag[1].style.opacity="1"
    s1_tag[1].style.translate="20px"
    s1_tag[1].style.transition="2s"

    wmn_tag.style.backgroundPosition="0px 0px"



    }
    pos()

        }

        else

        {
    s_tag[0].style.translate="-20px 0px"
    s_tag[0].style.opacity="0"
    s_tag[1].style.backgroundPosition="-50px 0px"
    s_tag[2].style.backgroundPosition="-50px 0px"


    s1_tag[0].style.opacity="0"
    s1_tag[0].style.translate="-20px"

    s1_tag[1].style.opacity="0"
    s1_tag[1].style.translate="-20px"

    wmn_tag.style.backgroundPosition="-50px 0px"


    // wmn_tag[0].style.backgroundPosition="-50px 0px"
    

        }
    }











