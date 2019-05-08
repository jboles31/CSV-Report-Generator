$("formJSON").submit((e) => {
    e.preventDefault();

    console.log('hi')

})

// $.ajax({
//   type: "POST",
//   url: '/upload',
//   data: req.body,
//   success: () => {
//     csv = util.returnData(req.body)
//     res.redirect('/')
//     res.end();
//   } ,
//   dataType: 'text/plain'
// });