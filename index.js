const Jimp = require('jimp');
const fs = require('fs');
const image_path = process.argv[2]
 
asciiMap = (n) => {
  if(n>1 && n<=25) 
    return "%"
  if(n>25 && n<=50) 
    return "#"
  if(n>50 && n<=75) 
    return "*"
  if(n>75 && n<=100) 
    return "+"
  else if(n>100 && n<=125) 
    return "-"
  else if (n>125 && n<=150) 
    return "`"
  else if (n>175 && n<=200) 
    return ":"
  else if (n>200 && n<=225) 
    return "`"
  else if (n>225 && n<=255) 
    return "."
  else
    return "@"
} 

if ( image_path ) {
  Jimp.read(image_path , (err, image) => {
    if (err) throw err;
    let arr = []
    //console.log(image)
    for(let i = 0; i < 64 ; i++ ) {
      let arr1 = []
      for(let j = 0; j < 64 ; j++ ) {
        let obj = Jimp.intToRGBA(image.resize(64, 64).greyscale().getPixelColor(j, i))
        var pixel = (obj.r + obj.g + obj.b)/3
        arr1 = [...arr1, asciiMap(Math.floor(pixel)), asciiMap(Math.floor(pixel))]
      }
      console.log(arr1.join(""))
      arr.push(arr1)
    }
  });
} else {
  console.log("image not selected!")
}