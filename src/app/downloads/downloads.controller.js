'use strict';

angular.module('meandmycronies')
  .controller('DownloadsCtrl', function ($scope) {
    var self = this,
        userId = '115957945',
        followBtn = document.getElementById('follow_btn'),
        dlButton = document.getElementById('download-btn');

    var scAuth =  function() {
      SC.initialize({
        client_id: '7a5a526b34d1122486148f55795ebb16',
        redirect_uri: 'http://localhost:3000/#/callback'
      });
    };

    var makeDownloadable = function() {
      dlButton.setAttribute('href', 'https://docs.google.com/uc?id=0B_d1iNQW3yjBYk1GbmlXeEZvdUE&export=download');
    };

    $scope.handleClientLoad = function() {
      scAuth();
    };

    $scope.connectAuth = function() {
      SC.connect(function() {

        SC.put('/me/followings/' + userId, function(usr, err){
          if(err) {
            console.log('Error: ' + err.message);
          } else {
            followBtn.style.background = 'rgb(182, 182, 182)';
            followBtn.style.color = 'rgb(96, 255, 70)';
            
            dlButton.style.background = 'rgb(255, 255, 255)';
            dlButton.style.color = 'rgb(95, 95, 95)';
            makeDownloadable();
          }
        });

      });
    };

    $scope.socialNetworks = [
      {
        title: "SoundCloud",
        name: "sc"
      },

      {
        title: "Facebook",
        name: "fb"
      },

      {
        title: "Twitter",
        name: "tw"
      }
    ];

    $scope.handleClientLoad();

  });
