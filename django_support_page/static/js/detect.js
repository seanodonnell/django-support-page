

detected = {}

function detect_appversion()
{
    return navigator.appVersion;
}

function detect_os()
{
    var os_name = "Unknown OS";
    if (navigator.appVersion.indexOf("Win")!= -1)
    {
        os_name = "Windows";
    }
    if (navigator.appVersion.indexOf("Mac")!= -1)
    {
        os_name = "MacOS";
    }
    if (navigator.appVersion.indexOf("X11")!= -1)
    {
        os_name = "Unix";
    }
    if (navigator.appVersion.indexOf("Linux")!= -1)
    {
        os_name = "Linux";
    }

    return os_name;
}

function detect_window_width()
{
    if(window.innerWidth)
    {
        return window.innerWidth;
    }

    if(document.body)
    {
        if(document.body.offsetWidth)
        {
            return document.body.offsetWidth;
        }
    }
    return "unknown";
}

function detect_window_height()
{
    if(window.innerHeight)
    {
        return window.innerHeight;
    }

    if(document.body)
    {
        if(document.body.offsetHeight)
        {
            return document.body.offsetHeight;
        }
    }
    return "unknown";
}

user agent
http_accept headers
browser plugins
time zone
screen size and color depth
fonts
cookies enabled
see browserspy.dk
