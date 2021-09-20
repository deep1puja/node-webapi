module.exports = function (req, res, next) {
    next();
    //console.log('------>');
    //console.log(req.query);
    var obj=req.query;
    Object.keys(obj).forEach(key => {
     console.log(key.toLowerCase(), obj[key].toLowerCase());
     if(obj[key].toLowerCase().includes('script') || key.toLowerCase().includes('script')){
            return   res.status(500).json({ msg:"error.........---"+obj[key].toLowerCase().includes('script') });
     }else {
       next();
     }
    
   });
    console.log('<<------');  
}