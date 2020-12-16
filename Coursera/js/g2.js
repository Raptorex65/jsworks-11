
/*Name this external file gallery.js*/

function upDate(previewPic){
  document.getElementById('image').innerHTML=previewPic.alt; //previewPic will get "this" variable and so previewPic.alt will point towards the content in alt.
  document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; //this url will point towards the src url of this id.

   /* In this function you should 
  1) change the url for the background image of the div with the id = "image" 
  to the source file of the preview image
  
  2) Change the text  of the div with the id = "image" 
  to the alt text of the preview image 
  */

}

function unDo(){
  document.querySelector('#image').style.backgroundImage = "url('')"; //this will again change the url to the original blank.
  document.querySelector('#image').innerHTML="Hover over an image below to display here."; //again change the content to the original data.


   /* In this function you should 
  1) Update the url for the background image of the div with the id = "image" 
  back to the orginal-image.  You can use the css code to see what that original URL was
  
  2) Change the text  of the div with the id = "image" 
  back to the original text.  You can use the html code to see what that original text was
  */

  
}



////////////////////////////////
/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image

    

       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      document.getElementById('image').innerHTML=previewPic.alt;
      document.getElementById('image').style.background="url('"+previewPic.src+"')";
       }
   
       function unDo(){
         var oldAlt = "Hover over an image below to display here."
         //var oldPic = (color:"#FFFFFF", backgroundColor: "#8e68ff", backgroundImage: "url('')")
         document.getElementById('image').innerHTML=oldAlt;
         document.getElementById('image').style.background='#8e68ff';
         document.getElementById('image').style.backgroundImage="url('')";
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           
       }

/////////////////////////////////////////////////////////////////////
*********
       function upDate(previewPic) 

    {
      document.getElementById('image').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
      document.getElementById('image').style.backgroundImage ="url(" + previewPic.src + ")";
      document.getElementById('image').innerHTML= previewPic.alt; 
    
}

function unDo() 

    {
    
    document.getElementById('image').style.backgroundImage= "url('')";
    document.getElementById('image') .innerHTML="Hover over an image to display here.";
    
} 

Online protection is OFF! Turn On


********
function upDate(previewPic){
  // display the alt on the box
  document.getElementById("image").innerHTML = previewPic.alt;
  sourceImage = previewPic.src;
  //display pic in the box
  document.getElementById('image').style.backgroundImage = "url(" + sourceImage + ")";
   }

   function unDo(){
    
  // make the image disapear when the image is not hovered over
  document.getElementById("image").style.backgroundImage = "";
  // display the original text
  document.getElementById("image").innerHTML = "hover over an image below to display here.";





   }