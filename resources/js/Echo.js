window.Echo.join("larachat_database_chatroom")
    .here((users) => {
        console.log("online", users);
    })
    .joining((users) => {
        console.log("online", users);
    })
    .leaving((users) => {
        console.log("saiu", users);
    });
