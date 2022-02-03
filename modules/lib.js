//Learn how to import code from other files
/*Examples 1: create a folder called modules:-inside modules create two files
  1.index.js and lib.js
  inside lib.js create a variable  called brand and save a string cslled "wizardcode"*/
  const Brand ="wizardcode"
  
  //we want to export this "Brand" in file called index.js this is what you type :-
  export default Brand;
 
  //go back to index.js and import 

  //Example two:- this can also be an object
  const Brand ={
         Brand:"wizardcode",
         website: "www.wizardcode.com"
  };
  export default Brand;

  //to read more about import and export watch the video om amigoscode
