// modalウインドウでレクタングル広告を表示するためのコントローラ

var elem1;
var modal_flag = false;

myApp.controller('modalController',['$scope', '$timeout', function($scope, $timeout) {
    modal_flag = true;
    $('div#new_nend_wrapper_rect_home').html($(elem1).html());
    setTimeout(function(){
        console.log($(elem1).html());
        showModal();
    }, 2000);
     // 1.1.1対策
}]);


window.addEventListener('load', onLoad, false);
function onLoad()
{
    elem1 = $('#nend_wrapper_rect_home');
    setTimeout(function(){
        $('div#new_nend_wrapper_rect_home').html($(elem1).html());
    }, 1000);
    
}
// レクタングル広告関係
function showModal()
{
    if (modal_flag) {
        if ($('div#new_nend_wrapper_rect_home').html() && $('div#new_nend_wrapper_rect_home').html().match('click.php')) {
            modal.show();
        } else if ($('div#new_nend_wrapper_rect_home').html() && $('div#new_nend_wrapper_rect_home').html().match('mobile.co.jp')) {
            modal.show();
        }
    }
}