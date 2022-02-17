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
