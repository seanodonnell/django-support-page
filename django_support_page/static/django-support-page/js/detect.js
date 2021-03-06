var detector = function(){
    
    var detected = {};
    var plugins = new Array();

    function base_detect()
    {
        var browserd = browserTest();
        detected["browser"] = browserd.browser.name;
        detected["browserversion"] = browserd.browser.version;
        detected["browserlayoutengine"] = browserd.layout.name;
        detected["layoutengineversion"] = browserd.layout.version;
        detected["operatingsystem"] = browserd.os.name;
        /*detected["supportsajax"] = $.support.ajax;
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
        detected["tableelementwithouttbody"] = $.support.tbody;*/
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
        detected["localstorage"] = Modernizr.localstorage;
        detected["sessionstorage"] = Modernizr.sessionstorage;
        detected["webworkers"] = Modernizr.webworkers;
        detected["applicationcache"] = Modernizr.applicationcache;
        detected["svg"] = Modernizr.svg;
        detected["inlinesvg"] = Modernizr.inlinesvg;
        detected["svgclippaths"] = Modernizr.svgclippaths;
        detected["smil"] = Modernizr.smil;
        detected["websqldatabase"] = Modernizr.websqldatabase;
        detected["indexeddb"] = Modernizr.indexeddb;
        detected["websockets"] = Modernizr.websockets;
        detected["hashchange"] = Modernizr.hashchange;
        detected["historymanagement"] = Modernizr.historymanagement;
        detected["draganddrop"] = Modernizr.draganddrop;
        detected["crosswindowmessaging"] = Modernizr.postmessage;
        detected["touchevents"] = Modernizr.touch;
    }

    function execute_plugins()
    {
        for(plugin in plugins)
        {
            try
            {
                var r = plugins[plugin]();
                for(k in r)
                {
                    detected[k] = r[k];
                }
            }
            catch(err)
            {
                detected[plugin.valueOf] = "PLUGIN ERROR:" + err.message;
            }
        }
    }

    return {detect: function()
        {
        base_detect();
        execute_plugins();
        for(k in detected)
        {
            if(detected[k] == "")
            {
                detected[k] = false;
            }
        }
        return detected;    
        },
        add_plugin: function(p)
        {
            plugins.push(p);
        }
    };
    
}();

function example_plugin()
{
    var result = {};
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
    };

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
    };

    result["appversion"] = navigator.appVersion;
    result["windowheight"] = detect_window_height();
    result["windowwidth"] = detect_window_width();
    return result;
}

detector.add_plugin(example_plugin);

function collect_browser_data()
{
    document.getElementById('id_js_info').value = JSON.stringify(detector.detect());
}

DOMReady.add(function(){
addEvent(document.getElementById('supportform'), 'submit', collect_browser_data);
});

