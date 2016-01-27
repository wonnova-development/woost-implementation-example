$(document).ready(getWonnovaScript = function () {
    var src = 'https://secure.wonnova.com/api/getScript?clientKey=HDX59CAJcBph&lang=en&scripts=social,reputation,notifications';
    $.ajaxSetup({
        async : false
    });
    $.getScript(src).done(function (script, textStatus) {
        $.ajaxSetup({
            async : true
        });
        
        // widget settings
        var params = {
            divId : "loginDiv",
            //onLogin: function(userData){},
            onLogout: function(){},
            onUserChecked: function(userData){},
            redirectUrl: "http://local.website.com/second.php",
            providers : ['facebook', 'twitter', 'linkedin'],
            showLogout : true,
            layout: "default",
            loginText: "Sign in using one of the following providers:" ,
            logoutText: "Are you sure you want to sign out?"
        }

        //widget initialization
        wonnova.social.login(params);

        $("#login").submit(function(e){
                e.preventDefault();
                wonnova.social.notifyLogin(getUserData(),{redirectUrl:"/second.php"});
            });
        
    }).fail(function (jqxhr, settings, exception) {
        $.ajaxSetup({
            async : true
        });
        // do something on failure
    });
    }
);

function getUserData(){
    var username = $("#nombre").val();

    var userData = {
        provider: 'website',
        username: username,
        fullName: 'Razvan Puscas'
    };

    return userData;
}