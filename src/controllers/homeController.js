
let getHomePage = (req,res) => {
    return res.render('homepage.ejs');
}
let getAboutpage = (req,res) =>{
    return res.render('test/about.ejs')
}
// Object{
//     key: value
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutpage: getAboutpage,
}