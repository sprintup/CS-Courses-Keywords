var resumeElement;
var sectionElements;
var aboutElement;
var aboutElementHTML;
var childrenArray;
var testElement;
var childNodes;
var globalElement;
var depth;
var testNode;
var ulElements;
var independentStudyElement;
var cards;

$(function(){
    console.log('ready');


    // var reachedResume = false;
    // resumeElement = $('#resume');
    // independentStudyElement = $('#independentStudy');
    // navElement = $('nav').get(0);
    // aboutElement = $('#about');
    // sectionElements = $('section');
    // sectionElements.each(addDeleteListenerToParent);
    // cards = $('.card');
    // cards.each(addDeleteListenerToCard);
    // var hr = $('hr');
    // hr.each(addDeleteListenerToElement);
    // ulElements = $('ul');
    // ulElements.each(addDeleteListenerToParent);

    // walkTheDOM(document.body, function (node) {
    //     if (node.nodeType === 1) {
    //         if (resumeElement.get(0).contains(node)){
    //             if(node.childNodes.length === 1){
    //                 //console.log("node: ", node);
    //                 node.addEventListener("click",()=>{
    //                     node.remove();
    //                 });
    //             }
    //         }
    //     }
    // });

})

function deleteNode(val) {

    console.log("val: ",val);
}

function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

function callback(e){
    console.log("callback: ",e);
}

function genPDF(){
    var doc = new jsPDF();
    console.log('doc: ',doc);
    var source = $('#resume').get(0);
    doc.fromHTML(source, 20,20,{'width':160, 'align':'justify'});
    //doc.addFont('Lobster-Regular', 'Lobster', 'normal');
    // doc.text(100 , 100, "hello!!")
    doc.setLineHeightFactor(60);
    doc.setFontSize(callback);
    doc.save('Stephen_Printup.pdf');
    // var html2canvas = new html2canvas();

    // html2canvas(document.body, {
    //     onrendered: function (canvas){
    //         var img = canvas.toDataUrl("corky.jpg");
    //         var doc = new jsPDF();
    //         doc.addImage(img, 'JPEG',20,20);
    //         doc.fromHTML($('#resume').get(0), 20,20,{'width':160, 'align':'justify'});
    //         doc.save('Stephen_Printup.pdf');
    //     }
    // })
}

function addDeleteListenerToParent(index , element){
    //console.log("el: ",element);
    if(element.childNodes.length === 1){
        //console.log("node: ", node);
        node.addEventListener("click",()=>{
            node.remove();
        });
    }
}
var card;
function addDeleteListenerToCard(index , element){
    //console.log("el: ",element);
    //console.log("node: ", node);
    card = element;
    element.addEventListener("click",()=>{
        if (element.innerText === "") {
            element.remove();
        }
    });
}

function addDeleteListenerToElement(index , element){
    //console.log("el: ",element);
    //console.log("node: ", node);
    element.addEventListener("click",()=>{
        element.remove();
    });
}
