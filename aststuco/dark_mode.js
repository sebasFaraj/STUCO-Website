let check = localStorage.getItem('dark')
var body = document.body;
var color1 = document.getElementsByClassName('blue');
var color2 = document.getElementsByClassName('dark-cyan');
var color3 = document.getElementsByClassName('red');
var color4 = document.getElementsByClassName('black');
var title_text = document.getElementsByClassName("title_text");
var body_text_sm = document.getElementsByClassName("body_text_sm");
var body_text_lg= document.getElementsByClassName("body_text_lg");
var btn = document.getElementsByClassName("dark_mode_btn");



/* Backup Dark Mode Values/Function
function darkMode(){
    

    //Light
    if (dark)
    {   
        for (i = 0; i < color1.length; i++)
        {
            color1[i].style.backgroundColor = "rgb(16, 30, 158)";
        }

        for (i = 0; i < color2.length; i++)
        {
            color2[i].style.backgroundColor = "rgb(10, 212, 185)";
        }

        for (i = 0; i < color3.length; i++)
        {
            color3[i].style.backgroundColor = "#ff004c";
        }

        for (i = 0; i < color4.length; i++)
        {
            color4[i].style.backgroundColor = "rgb(151, 77, 197)";
        }

        for (i = 0; i < title_text.length; i++)
        {
            title_text[i].style.color = "black";
        }

        for (i = 0; i < body_text_sm.length; i++)
        {
            body_text_sm[i].style.color = "black";
        }

        for (i = 0; i < body_text_lg.length; i++)
        {
            body_text_lg[i].style.color = "black";
        }

        for (i = 0; i < btn.length; i++)
        {
            btn[i].textContent = "Dark Mode";
        }



        


        body.style.backgroundColor = "rgb(225, 225, 225)";
        dark = !dark;
    }

    //dark
    else 
    {
        for (i = 0; i < color1.length; i++)
        {
            color1[i].style.backgroundColor = "rgb(27, 31, 65)";
        }

        for (i = 0; i < color2.length; i++)
        {
            color2[i].style.backgroundColor = "rgb(64, 2, 105)";
        }

        for (i = 0; i < color3.length; i++)
        {
            color3[i].style.backgroundColor = "#680321";
        }

        for (i = 0; i < color4.length; i++)
        {
            color4[i].style.backgroundColor = "rgb(33, 58, 52)";
        }

        for (i = 0; i < title_text.length; i++)
        {
            title_text[i].style.color = "white";
        }

        for (i = 0; i < body_text_sm.length; i++)
        {
            body_text_sm[i].style.color = "white";
        }

        for (i = 0; i < body_text_lg.length; i++)
        {
            body_text_lg[i].style.color = "white";
        }

        for (i = 0; i < btn.length; i++)
        {
            btn[i].textContent = "Light Mode";
        }

        body.style.backgroundColor = "rgb(27, 27, 27)";
        dark = !dark;
    }   



}
*/

const enableDarkMode = () => {

    //Sets everything to its dark mode value
    for (i = 0; i < color1.length; i++)
        {
            color1[i].style.backgroundColor = "rgb(27, 31, 65)";
        }

    for (i = 0; i < color2.length; i++)
        {
            color2[i].style.backgroundColor = "rgb(64, 2, 105)";
        }

    for (i = 0; i < color3.length; i++)
        {
            color3[i].style.backgroundColor = "#680321";
        }

    for (i = 0; i < color4.length; i++)
        {
            color4[i].style.backgroundColor = "rgb(33, 58, 52)";
        }

    for (i = 0; i < title_text.length; i++)
        {
            title_text[i].style.color = "white";
        }

    for (i = 0; i < body_text_sm.length; i++)
        {
            body_text_sm[i].style.color = "white";
        }

    for (i = 0; i < body_text_lg.length; i++)
        {
            body_text_lg[i].style.color = "white";
        }

    for (i = 0; i < btn.length; i++)
        {
            btn[i].textContent = "Light Mode";
        }

    body.style.backgroundColor = "rgb(27, 27, 27)";    

    //Updates Dark Mode
    localStorage.setItem('dark', "enabled")
};

const disableDarkMode = () => {

    //Sets everything to its dark mode value
    for (i = 0; i < color1.length; i++)
    {
        color1[i].style.backgroundColor = "rgb(16, 30, 158)";
    }

    for (i = 0; i < color2.length; i++)
    {
        color2[i].style.backgroundColor = "rgb(10, 212, 185)";
    }

    for (i = 0; i < color3.length; i++)
    {
        color3[i].style.backgroundColor = "#ff004c";
    }

    for (i = 0; i < color4.length; i++)
    {
        color4[i].style.backgroundColor = "rgb(151, 77, 197)";
    }

    for (i = 0; i < title_text.length; i++)
    {
        title_text[i].style.color = "black";
    }

    for (i = 0; i < body_text_sm.length; i++)
    {
        body_text_sm[i].style.color = "black";
    }

    for (i = 0; i < body_text_lg.length; i++)
    {
        body_text_lg[i].style.color = "black";
    }

    for (i = 0; i < btn.length; i++)
    {
        btn[i].textContent = "Dark Mode";  

    }

    body.style.backgroundColor = "rgb(225, 225, 225)";


    //Updates Dark Mode
    localStorage.setItem('dark', null)
};


if (check === 'enabled') 
{
    enableDarkMode();
}

function toggle(){
    check = localStorage.getItem('dark')
    if (check !== "enabled"){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
};
