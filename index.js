import {franc} from 'franc';
import colors from 'colors';
import data from './data.json' assert {type: 'json'};

const input=process.argv[2];
const lang_code=franc(input);
console.log(lang_code);
if(lang_code=='und'){
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE TEXT"));
}else{
data["lang_c"].forEach((blk)=>{
    if(blk.Id==lang_code)
    console.log(`Matched language is ${blk.Print_Name}`);
})
}