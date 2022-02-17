document.getElementById("emailcopied").addEventListener("click", function() {
 	copyText();
});

function copyText() {
   var element = event.target
    var range;
    if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
    document.execCommand("copy");
    window.getSelection().empty();
    window.getSelection().removeAllRanges();
}

//hover or click the collection items
var hoverOrClick = function() {
	let $titlewrap = $(this).children('.home_titlecontainer').children('.home_titlewrapper');
    if( $(this).siblings().children('.home_imglist').hasClass('active') ) {
        $(this).siblings().children('.home_imglist').removeClass('active');
        $(this).siblings().children('.home_listtextholder').children('.home_listtextselect').removeClass('active');
        $(this).siblings().children('.home_titlecontainer').children('.home_titlewrapper').removeClass('active');
      } else {
        $(this).children('.home_imglist').addClass('active');
        $(this).children('.home_listtextholder').children('.home_listtextselect').addClass('active');
       	$titlewrap.addClass('active');
      }
    $(this).children('.home_imglist').addClass('active');
    $(this).children('.home_listtextholder').children('.home_listtextselect').addClass('active');
    $titlewrap.addClass('active');
}

//hover or click the mobile collection items
var mobileClick = function() {
    if( $(this).siblings().children('.mobile_imglist').hasClass('active') ) {
        $(this).siblings().children('.mobile_imglist').removeClass('active');
        $(this).siblings().children('.mobile_listselectholder').children('.mobile_listselect').removeClass('active');
      } else {
        $(this).children('.mobile_imglist').addClass('active');
        $(this).children('.mobile_listselectholder').children('.mobile_listselect').addClass('active');
      }
    $(this).children('.mobile_imglist').addClass('active');
    $(this).children('.mobile_listselectholder').children('.mobile_listselect').addClass('active');
}
