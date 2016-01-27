$(document).ready(getWonnovaScript = function () {
    var src = 'https://secure.wonnova.com/api/getScript?clientKey=HDX59CAJcBph&lang=en&scripts=social,reputation,notifications,api';
    $.ajaxSetup({
        async : false
    });
    $.getScript(src).done(function (script, textStatus) {
        $.ajaxSetup({
            async : true
        });
        
        //User Data
        wonnova.social.getCurrentUserData(function(data){
            console.log(data);
            $("#welcome > h1").html("Bienvenido " + data['fullName'])
        });

        //AboutMe
        wonnova.reputation.getAboutMeData(function(data){
            console.log("AboutMe"+JSON.stringify(data));
        });

            //AboutMe Widget
            var aboutParams = {
                show: true,
                divId : "aboutMeDiv",
                refreshInterval: 15,
                level: {
                    show: true
                },
                layout: "default",
                style: {
                    width : "",
                    height: "",
                    bgColor: "",
                    borderColor: "",
                    fontColor: ""
                }
            }

            //widget initialization
            wonnova.reputation.aboutMe(aboutParams);

                
        //Leaderboard
        wonnova.reputation.getLeaderboardData(
        {
            'minCount': '4',
            'filter': {},

            'callback': function(data){
                console.log("Leaderboard"+JSON.stringify(data));
            }
        });

            //LeaderBoard Widget
            var leaderParams = {
                show: true,
                divId : "leaderboardDiv",
                title : "Champions Leaderboard",
                showEncouragement: true,
                rowsNum: 4,
                refreshInterval: 15,
                layout: "light-grey",
                filter: {
                    
                },
                style:{
                    width : "",
                    rowHeight: "",
                    bgColor: "",
                    borderColor: "",
                    fontColor: "",
                    avatarSize: ""
                }
            }

            //widget initialization
            wonnova.reputation.leaderboard(leaderParams);


        //Team Leaderboard
        wonnova.reputation.getTeamLeaderboardData(
        {
            'minCount': '4',
            'filter': {},
            'callback': function(data){
                console.log("Team Leaderboard"+JSON.stringify(data));
            }
        });

            //Widget Team Leaderboard
            var teamParams = {
                show: false,
                divId: "teamLeaderboardDiv",
                title: "Teams Leaderboard",
                showEncouragement: false,
                showPoweredBy: true,
                rowsNum: 4,
                layout: "default",
                refreshInterval: 15,
                filter: {
                    
                },
                style: {
                    width: "", //px (default 260px)
                    rowHeight: "", //px (default 36px)
                    bgColor: "", //with hash (default gradient #F7F7F7, #DEDEDE)
                    borderColor: "", //with hash (default #C0C0C0)
                    fontColor: "", //with hash (default #404040)
                    avatarSize: "" //px -squared- default (default 27px)
                }
            }

            //widget initialization
            wonnova.reputation.teamLeaderboard(teamParams);

        //Last Updates
        wonnova.reputation.getLastUpdatesData(
        {
            'rowsNum': 5,
            'callback': function(data){
                console.log(JSON.stringify(data));
            }
        });

            //Widget Last Updates
            var params = {
                show: true,
                divId : "lastUpdatesDiv",
                title : "Last Updates",
                rowsNum: 6,
                refreshInterval: 15,
                layout: "rounded-date",
                showPoweredBy: true,
                style: {
                    width : "",
                    rowHeight: "",
                    listHeight: "",
                    bgColor: "",
                    borderColor: "",
                    fontColor: "",
                    lineColor: ""
                }
            };
            //widget init
            wonnova.reputation.lastUpdates(params);        

        //Badges
        wonnova.reputation.getMyBadgesData(function(data){
            console.log("UPDATES"+JSON.stringify(data));
        });

            //Badges Widget
            var badParams =  {
                show: true,
                divId : "myBadgesDiv",
                title : "My Badges",
                showTitle: true,
                showDesc: true,
                emptyText: "No badges yet!",
                refreshInterval: 15,
                style: {
                    width : "",
                    badgesSize: "",
                    bgColor: "",
                    borderColor: "",
                    fontColor: "",
                }
            }

            //widget initialization
            wonnova.reputation.myBadges(badParams);        

        //Widget Social Ambassadors
        var ambParams = {
            divId : "socialAmbassadorDiv",
            refreshInterval: "15",
            providers : ['facebook', 'twitter', 'linkedin'],
            text: "Sé nuestro embajador en redes sociales!",
            text2: "Ya eres embajador en",
            text3: "(todavía no eres embajador en ninguna red. Haz click arriba para empezar!)",
            text4: "(!) Alguna de las redes necesita renovarse, haz click arriba para renovar la suscripción.",
            layout: 'default',
            style : {
                width: '300px',
                bgColor: '',
                borderColor: '',
                fontFamily: '',
                fontSize: '',
                fontColor: ''
            }
        };
        wonnova.social.ambassador(ambParams);

        //Notifications Bar
        wonnova.notifications.getNotificationsData(function(data){
            console.log("NOTIFICATION "+JSON.stringify(data));
        });

        //Widget notifications bar
        var notParams = {
            show: true,
            divId: 'notificationsBarDiv',
            types:['points', 'badges'],
            delay: 4000,
            refreshInterval: 15,
            layout: 'default',
            filter: {
                
            },
            style: {
                width: '900px',
                borderColor: '#d3232e',
                bgColor: '#fee8e9',
                fontColor: '#555555',
                fontSize: '0.9em',
                boxShadow: '3px 3px 3px #999999'
            }
        }

        //widget initialization
        wonnova.notifications.notificationsBar(notParams);

        $("#foo").click( function()
           {
                wonnova.reputation.notifyAction('foo', function(){
                    wonnova.notifications.refresh('notificationsBarDiv');
                    wonnova.reputation.refresh('aboutMeDiv');
                });
           }
        );

        $("#internet").click( function()
           {
                wonnova.reputation.notifyAction('INTERNET_MOVIL', function(){
                    wonnova.notifications.refresh('notificationsBarDiv');
                    wonnova.reputation.refresh('aboutMeDiv');
                });
           }
        );

        $("#buy").click( function()
           {
                wonnova.reputation.notifyAction('BUY', function(){
                    wonnova.notifications.refresh('notificationsBarDiv');
                    wonnova.reputation.refresh('aboutMeDiv');
                });
           }
        );

        $("#test").click( function()
           {
                wonnova.reputation.notifyAction('TEST', function(){
                    wonnova.notifications.refresh('notificationsBarDiv');
                    wonnova.reputation.refresh('aboutMeDiv');
                });
           }
        );

        $("#nextp").click( function()
           {
                $(location).attr('href','/third.php');
           }
        );

    }).fail(function (jqxhr, settings, exception) {
        $.ajaxSetup({
            async : true
        });
        // do something on failure
    });
    }
);
