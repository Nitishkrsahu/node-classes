const path = require('path');

// console.log(path.basename("C://Users//nitish//OneDrive//Desktop//API_key.txt"));
// console.log(path.dirname("C://Users//nitish//OneDrive//Desktop//API_key.txt"));
// console.log(path.extname("C://Users//nitish//OneDrive//Desktop//API_key.txt"));
// console.log(path.relative("C://Users//nitish//OneDrive", "Desktop//API_key.txt"));
// console.log(path.isAbsolute("C://Users//nitish//OneDrive//Desktop//API_key.txt"));
// console.log(path.isAbsolute("notes.txt"))




var uploaded_file = "D:\\stackfood\\multi.pdf";

if(path.extname(uploaded_file) === ".pdf"){
    console.log(`File uploaded Successfully..\nUploaded from ${path.dirname(uploaded_file)} Folder`);
}else{
    console.log(`Invalid Format - You can upload only PDF Files`)
}