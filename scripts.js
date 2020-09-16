
$(function(){
    console.log('ready', document);
    var spinner = document.getElementById("spinner");
    spinner.remove();
});

function deleteNode(val) {
    var element = document.getElementById(val);
    element.remove();
}
