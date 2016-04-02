// メディアオブジェクトを定義
var media = null;
var current_sound = '';
var playing = 0;
// クイズ用のコントローラ
myApp.controller('soundController',['$scope', '$timeout', function($scope, $timeout) {
    $scope.init = function (filename) {
        current_sound = filename;
        playing = 1;
        setTimeout(function(){
            playAudio(filename);
            playing = 1;
        }, 1000);
    };
    
    $scope.stop = function() {
        stopAudio();
    };
}]);


// 指定した音声ファイルを再生します。
function playAudio(sound_file)
{
    var str   = location.pathname;
    var i     = str.lastIndexOf('/');
    var path  =  str.substring(0, i + 1);
    if (media) {
        media.stop();
    }
    // 失敗・成功のコールバック関数を指定してメディアオブジェクトを生成
    media = new Media(path + 'sound_data/' + sound_file, onSuccess, onError);
    media.play();
}

function toggleAudio(elem)
{
    if (playing == 1) {
        $('i', elem).removeClass('fa-pause');
        $('i', elem).addClass('fa-play');
        pauseAudio();
    } else {
        $('i', elem).removeClass('fa-play');
        $('i', elem).addClass('fa-pause');
        startAudio();   
    }
}

function stopAudio()
{
    playing = 0;
    if (media) {
        media.stop();
    }
    
}
function pauseAudio()
{
    playing = 0;
    if (media) {
        media.pause();
    }
}
function startAudio()
{
    playing = 1;
    if (media) {
        media.play();
    }
}
// Mediaオブジェクトを生成する際の第２引数に設定した音声再生成功時のコールバック関数です
function onSuccess() {
      console.log("playAudio(): PLAYING...");
}
// Mediaオブジェクトを生成する際の第３引数に設定した音声再生失敗時のコールバック関数です
function onError(error) {
}
