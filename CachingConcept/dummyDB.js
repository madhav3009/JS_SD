const database = {
    ['indexmi.html']: '<html>Welcome from INDEX page</html>'
}
 // This Dummy DB is used with Server4DB, it sends html content after 5 sec
module.exports.get = (key,cb) => {
    setTimeout(()=>{
        cb(database[key]);
        console.log(database['indexmi.html']);
    },5000);
}