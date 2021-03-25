//here var k is storing the heading of the post.
var k=localStorage.getItem("glvar");
var count=0;
var likecount=0;//like count is to memorize the no of likes recieved
document.getElementById("headingofpost").innerHTML=k;
//aname stores the author name of the post
var aname=localStorage.getItem("aname");
var fp=localStorage.getItem("content");
document.getElementById("para").innerHTML=fp;

document.getElementById("authorname").innerHTML=aname;
function wecanedit(){
    document.getElementById("para").style.border="solid";//changing the border of text boxes
    document.getElementById("para").style.borderColor="pink";//setting the border-color to pink
    var t=document.createElement("textarea");//textarea is added in heading when edit button is pressed
    t.setAttribute("id","editedheading");
    var u=document.getElementById("headingofpost").innerHTML;
    t.innerHTML=u;
    document.getElementById("headingofpost").innerHTML="";
    document.getElementById("headingofpost").appendChild(t);
    document.getElementById("editedheading").cols="147";
    document.getElementById("editedheading").rows="2";
    document.getElementById("editedheading").style.fontSize="14px";
    document.getElementById("editedheading").style.textAlign="center";
    document.getElementById("editedheading").style.border="none";
    document.getElementById("editbutton").style.display="none";
    document.getElementById("savebutton").style.display="block";
    document.getElementById("headingofpost").style.border="solid";
    document.getElementById("headingofpost").style.borderColor="pink";
    document.getElementsByClassName("overlay2")[0].style.height="0px";
    document.getElementsByClassName("overlay2")[0].style.width="0%";
}
function saveit(){
    var t=document.getElementById("editedheading").value;
    document.getElementById("editedheading").style.display="none";
    document.getElementById("headingofpost").innerHTML=t;//updating the text
    var t=document.getElementById("para").value;
    document.getElementById("para").innerHTML=t;
    document.getElementById("para").style.border="none";
    document.getElementById("headingofpost").style.border="none";
    document.getElementsByClassName("overlay2")[0].style.height="286px";
    document.getElementsByClassName("overlay2")[0].style.width="120%";
    document.getElementById("savebutton").style.display="none";
    document.getElementById("editbutton").style.display="block";
}
function likeincrement(){
    likecount+=1;
    if(likecount>=1)
    {
        document.getElementById("likeorliked").innerHTML="Liked";
        var r=likecount + '  person likes this !';
        document.getElementsByClassName("likes")[0].innerHTML=r;
    }
}
function addcomment(element)
{
    var s=document.getElementById(element.id).value;
    if(s!=""){//if the comment box is empty then do not add the comment div
    var box= '<div id="allcomments">'+s+'</div>';
    document.getElementById("entercomments").innerHTML=box+document.getElementById("entercomments").innerHTML;}
    var g=document.getElementById("commenthere");
    g.value=g.defaultValue;
    

}