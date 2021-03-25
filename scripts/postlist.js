arr=[1,2,3,4,5];
function oddpostinbetween()//this function is to place the odd no post in center of the screen
{
    var count=arr.length;
    element=arr[count-1];
    if(count%2!=0)
    {
        document.getElementById(element).style.margin="4% 4% 4% 28%";//if thhey are odd no then change the left margin
        
    }
    if(count%2===0)
    {
        document.getElementById(element).style.margin="4% 4% 4% 4%";//if they are even no then sets its margin as 4%;  
    }
}
oddpostinbetween();//function called to order the posts
var tempid;

function areyousure(id){//this function is for modal here overlay is the background sheet of modal
    document.getElementById("trashmodalcontainer").style.display="block";
    document.getElementsByClassName("overlay")[0].style.height="1000px";
    document.getElementsByClassName("overlay")[0].style.width="100%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0.6)";
    tempid=id;//temp id is to store the id of the block which we want to delete
}
function onclickno(){
    document.getElementById("trashmodalcontainer").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="0px";
    document.getElementsByClassName("overlay")[0].style.width="0%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0)";
    
}
function onclickyes(){
    (function() {
        document.getElementById("trashmodalcontainer").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="0px";
    document.getElementsByClassName("overlay")[0].style.width="0%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0)";
    document.getElementById(tempid).style.display="none";//here tempid is getting from areyousure function 
    console.log("the item to be deleted is"+tempid);
        
      }())
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===tempid)
        {
            arr.splice(i,1);//this is to remove that post id from athe array which is to be removed
        }
    }
    oddpostinbetween();//again ordering the post after deletion 
}
var postheading;
var nameofauthor;
function changepagefromBtoC(element,authorname,content)
{
    
     postheading=document.getElementById(element.id).innerHTML;
     nameofauthor=document.getElementById(authorname.id).innerHTML;
     fullpara=document.getElementById(content.id).innerHTML;
     localStorage.setItem("aname",nameofauthor);
     localStorage.setItem("glvar",postheading);
     localStorage.setItem("content",fullpara)
     window.open("./post.html");//open the new tab

}
console.log(postheading);