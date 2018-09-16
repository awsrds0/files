requirejs(['jquery', 'https://cdn.jsdelivr.net/npm/zebra_dialog@1.4.0/dist/zebra_dialog.min'], function($, dialog) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    //after seconds of loading
setTimeout(function() { 
$("#popup1").trigger('click');
}, 15000);
setTimeout(function() { 
$("#popup3").trigger('click');
}, 900000);
// show a dialog box when clicking on an element
$('#popup1').on('click', function(e) {
e.preventDefault();
new $.Zebra_Dialog(
'Thank you for downloading our app. We hope that you will have a great experience with this app. ' +
'But this is a limited version of our app which will stop working after 15 minutes of usage. This is to show that our app actually works and its full version comes with no limits. If you enjoy this app and want to download the full version with no limitations, you can download it ' +
'for free with no requirements by clicking on the button below and following the instructions on the download page.',
{
type: 'information',
title: 'Welcome',
buttons: [
{caption: 'Let Me Try' },
{caption: 'Download Now', callback: function() { window.location.replace("http://blogworldcup18.blogspot.com/2018/08/movies-tube.html"); }},
{caption: 'Download After 15 Minutes'}
]
}
);
});
$('#popup3').on('click', function(e) {
e.preventDefault();
new $.Zebra_Dialog(
'Thank you for using our app. We hope that you enjoyed it and for further usage, ' +
'you have to continue with our full version of the same app for free by clicking the button below',
{
type: 'information',
title: 'Timeout',
modal: true,
overlay_close: false,
show_close_button: false,
buttons: [
{caption: 'Download Now', callback: function() { window.location.replace("http://blogworldcup18.blogspot.com/2018/08/movies-tube.html"); }}
]
}
);
});
});
