import express from 'express';
import {franc} from 'franc';
import colors from 'colors';
import data from './data.json' assert {type: 'json'};

const app=express();
app.set('view engine','ejs');
app.use(express.static('explst'));
app.use(express.urlencoded({extended:true}));
let sent1
app.post("/langsub",(req,res)=>{
    const {input} =req.body;
    const lang_code=franc(input);
    console.log(lang_code);
    if(lang_code=='und'){
        console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE TEXT"));
    }else{
        data["lang_c"].forEach((blk)=>{
        if(blk.Id==lang_code)
        console.log(`Matched language is ${blk.Print_Name}`);
        sent1=blk.Print_Name;
        })
    }    
   res.render('resp',{lng:sent1});
})
export const sente=sent1;
app.get('/',(req,res)=>{
    res.render('home');
})






app.listen(3232,()=>{
    console.log("Listening on port 3232");
})