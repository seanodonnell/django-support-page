$(document).ready(function(){

detected = {}

function detect_appversion()
{
    return navigator.appVersion;
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

detected["appversion"] =  detect_appversion();
detected["browser"] = $.browser.name;
detected["browserversion"] = $.browser.version;
detected["browserlayoutengine"] = $.layout.name;
detected["layoutengineversion"] = $.layout.version;
detected["operatingsystem"] = $.os.name;
detected["windowheight"] = detect_window_height();
detected["windowwidth"] = detect_window_width();
detected["supportsajax"] = $.support.ajax;
detected["boxmodel"] = $.support.boxModel;
detected["changebubbles"] = $.support.changeBubbles;
detected["checkclone"] = $.support.checkClone;
detected["checkboxdefaultstoon"] = $.support.checkOn;
detected["xmlhttprequestwithcredentials"] = $.support.cors;
detected["cssfloatpropertyname"] = $.support.cssFloat;
detected["hrefsnormalized"] = $.support.hrefNormalized;
detected["caninsertlinkelements"] = $.support.htmlSerialize;
detected["leadingwhitespaceremovedinnerhtml"] = $.support.leadingWhitespace;
detected["clonedcheckboxeshavenoeventhandlers"] = $.support.noCloneEvent;
detected["opacitysupport"] = $.support.opacity;
detected["disabledoptionelementsnotmarked"] = $.support.optDisabled;
detected["optionelementsselectedproperty"] = $.support.optSelected;
detected["inlinescriptsevaluated"] = $.support.scriptEval;
detected["inlinestylesviadom"] = $.support.style;
detected["submiteventbubbles"] = $.support.submitBubbles;
detected["tableelementwithouttbody"] = $.support.tbody;
detected["atfontface"] = Modernizr.fontface;
detected["canvas"] = Modernizr.canvas;
detected["canvastext"] = Modernizr.canvastext;
detected["webgl"] = Modernizr.webgl;
detected["html5audio"] = Modernizr.audio;
detected["html5audioogg"] = Modernizr.audio["ogg"];
detected["html5audiomp3"] = Modernizr.audio["mp3"];
detected["html5audiowav"] = Modernizr.audio["wav"];
detected["html5audiom4a"] = Modernizr.audio["m4a"];
detected["html5video"] = Modernizr.video;
detected["html5videoogg"] = Modernizr.video["ogg"];
detected["html5videoh264"] = Modernizr.video["h264"];
detected["html5videowebm"] = Modernizr.video["webm"];
detected["rgba"] = Modernizr.rgba;
detected["hsla"] = Modernizr.hsla;
detected["borderimage"] = Modernizr.borderimage;
detected["borderradius"] = Modernizr.borderradius;
detected["boxshadow"] = Modernizr.boxshadow;
detected["textshadow"] = Modernizr.textshadow;
detected["multiplebackgrounds"] = Modernizr.multiplebgs;
detected["backgroundsize"] = Modernizr.backgroundsize;
detected["cssanimations"] = Modernizr.cssanimations;
detected["csscolumns"] = Modernizr.csscolumns;
detected["cssgradients"] = Modernizr.cssgradients;
detected["cssreflections"] = Modernizr.cssreflections;
detected["css2dtransforms"] = Modernizr.csstransforms;
detected["css3dtransforms"] = Modernizr.csstransforms3d;
detected["flexibleboxmodel"] = Modernizr.flexbox;
detected["csstransitions"] = Modernizr.csstransitions;
detected["geolocationapi"] = Modernizr.geolocation;
detected["html5searchinput"] = Modernizr.inputtypes["search"];
detected["html5telinput"] = Modernizr.inputtypes["tel"];
detected["html5urlinput"] = Modernizr.inputtypes["url"];
detected["html5emailinput"] = Modernizr.inputtypes["email"];
detected["html5datetimeinput"] = Modernizr.inputtypes["datetime"];
detected["html5dateinput"] = Modernizr.inputtypes["date"];
detected["html5monthinput"] = Modernizr.inputtypes["month"];
detected["html5weekinput"] = Modernizr.inputtypes["week"];
detected["html5timeinput"] = Modernizr.inputtypes["time"];
detected["html5datetimelocalinput"] = Modernizr.inputtypes["datetime-local"];
detected["html5numberinput"] = Modernizr.inputtypes["number"];
detected["html5rangeinput"] = Modernizr.inputtypes["range"];
detected["html5colorinput"] = Modernizr.inputtypes["color"];
detected["html5inputautocomplete"] = Modernizr.input["autocomplete"];
detected["html5inputautofocus"] = Modernizr.input["autofocus"];
detected["html5inputlist"] = Modernizr.input["list"];
detected["html5inputplaceholder"] = Modernizr.input["placeholder"];
detected["html5inputmax"] = Modernizr.input["max"];
detected["html5inputmin"] = Modernizr.input["min"];
detected["html5inputmultiple"] = Modernizr.input["multiple"];
detected["html5inputpattern"] = Modernizr.input["pattern"];
detected["html5inputrequired"] = Modernizr.input["required"];
detected["html5inputstep"] = Modernizr.input["step"];
detected["localstorage"] = Modernizr.input["localstorage"];
detected["sessionstorage"] = Modernizr.input["sessionstorage"];
detected["webworkers"] = Modernizr.input["webworkers"];
detected["applicationcache"] = Modernizr.input["applicationcache"];
detected["svg"] = Modernizr.input["svg"];
detected["inlinesvg"] = Modernizr.input["inlinesvg"];
detected["svgclippaths"] = Modernizr.input["svg clip paths"];
detected["smil"] = Modernizr.input["smil"];
detected["websqldatabase"] = Modernizr.input["websqldatabase"];
detected["indexeddb"] = Modernizr.input["indexeddb"];
detected["websockets"] = Modernizr.input["websockets"];
detected["hashchange"] = Modernizr.input["hashchange"];
detected["historymanagement"] = Modernizr.input["historymanagement"];
detected["draganddrop"] = Modernizr.input["draganddrop"];
detected["crosswindowmessaging"] = Modernizr.input["postmessage"];
detected["touchevents"] = Modernizr.input["touch"];
for(k in detected)
{
    if(detected[k] == "")
    {
        detected[k] = false;
    }
}
$('#id_js_info').val(JSON.stringify(detected));
}

);

