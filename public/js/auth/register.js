// ajax request to register user
$("#submit").submit(function() {
    var email = $("#email").val()
    var password = $("#inputpassword").val()
    console.log('email and password', email, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://127.0.0.1:3003/api/register',
        data: JSON.stringify({email: email, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d)
            window.location.href("post_login", "_self")
        }
    })
})