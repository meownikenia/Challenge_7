// ajax request to login
$("#submit").submit(function() {
    var username = $("#defaultLoginFormEmail").val()
    var password = $("#defaultLoginFormPassword").val()
    console.log('username and password', username, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://127.0.0.1:3000/api/signin',
        data: JSON.stringify({username: username, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d.token)
            localStorage.setItem('userToken', d.token)
            window.open("content.html", "_self")
        }
    })
})