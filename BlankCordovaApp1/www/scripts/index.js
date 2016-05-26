// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    // Handle the Cordova pause and resume events
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    var element = document.getElementById("deviceready");
    element.innerHTML = 'Device Ready';
    element.className += ' ready';
    var now = new Date().getTime(),
    _5_sec_from_now = new Date(now + 5 * 1000);

    cordova.plugins.notification.local.schedule({
        id: 5,
        title: "Sample Notification",
        text: "kill the batman ",
        at: _5_sec_from_now,
        icon: 'res://icon',
        smallIcon: 'res://icon',
        every: 87600
    });

};

function onPause() {
    // TODO: This application has been suspended. Save application state here.
};

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
};
