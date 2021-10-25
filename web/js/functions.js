function traerInformacionCategories(){
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuestaCategories){
            console.log(respuestaCategories);
            $("#resultadoCategories").empty();
            pintarRespuestaCategories(respuestaCategories);
        }
    });
}

function pintarRespuestaCategories(items){

    let myTable = "<table border=1>";

    myTable += "<tr><th>Id</th><th>Name</th><th>Description</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='detalleInformacionCategories(" + items[i].id + "," + "\"" + items[i].name + "\"" + "," + "\"" + items[i].description + "\"" + ")'> Detalle </button></td>";
        myTable += "<td> <button onclick='borrarElementoCategories(" + items[i].id + ")'> Borrar </button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#idGame").prop('disabled', false),
    $("#resultadoCategories").append(myTable);
}

function guardarInformacionCategories(){
    let myData={
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Category/save",
        type:"POST",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaCategories) {
            $("#resultadoCategories").empty();
            $("#idCategory").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            traerInformacionCategories();
            alert("Se ha guardado una Categoria.")
        }
    });
}

function detalleInformacionCategories(idCategory, nameCategory, descriptionCategory){
    let myData={
        id:$("#idCategory").val(idCategory).prop('disabled', true),
        name:$("#nameCategory").val(nameCategory),
        description:$("#descriptionCategory").val(descriptionCategory)
    };
}

function editarInformacionCategories(){
    let myData={
        id:$("#idCategory").val(),
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Category/update",
        type:"PUT",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaCategories) {
            $("#resultadoCategories").empty();
            $("#idCategory").val("");
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            traerInformacionCategories();
            alert("Se ha actualizado una Categoria.")
        }
    });
}

function borrarElementoCategories(idCategory){

    $.ajax({
        url:"http://localhost:8080/api/Category/" + idCategory,
        type:"DELETE",
        contentType: "application/json",
        datatype:"JSON",
        success:function(respuestaCategories) {
            $("#resultadoCategories").empty();
            traerInformacionCategories();
            alert("Se ha eliminado una Categoria.")
        }
    });
}







function traerInformacionGames(){
    $.ajax({
        url: "http://localhost:8080/api/Game/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuestaGames){
            console.log(respuestaGames);
            $("#resultadoGames").empty();
            pintarRespuestaGames(respuestaGames);
        }
    });
}

function pintarRespuestaGames(items){

    let myTable = "<table border=1>";
    
    myTable += "<tr><th>Id</th><th>Developer</th><th>Year</th><th>Name</th><th>Description</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].developer + "</td>";
        myTable += "<td>" + items[i].year + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='detalleInformacionGames(" + items[i].id + "," + "\"" + items[i].developer + "\"" + "," + items[i].year + "," + "\"" + items[i].name + "\"" + "," + "\"" + items[i].description + "\"" + ")'> Detalle </button></td>";
        myTable += "<td> <button onclick='borrarElementoGames(" + items[i].id + ")'> Borrar </button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#idGame").prop('disabled', false),
    $("#resultadoGames").append(myTable);
}

function guardarInformacionGames(){
    let myData={
        id:$("#idGame").val(),
        developer:$("#developerGame").val(),
        year:$("#yearGame").val(),
        name:$("#nameGame").val(),
        description:$("#descriptionGame").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Game/save",
        type:"POST",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaGames) {
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developerGame").val("");
            $("#yearGame").val("");
            $("#nameGame").val("");
            $("#descriptionGame").val("");
            traerInformacionGames();
            alert("Se ha guardado un Juego.")        
        }
    });
}

function detalleInformacionGames(idGame, developerGame, yearGame, nameGame, descriptionGame){
    let myData={
        id:$("#idGame").val(idGame).prop('disabled', true),
        developer:$("#developerGame").val(developerGame),
        year:$("#yearGame").val(yearGame),
        name:$("#nameGame").val(nameGame),
        description:$("#descriptionGame").val(descriptionGame)
    };   
}

function editarInformacionGames(){
    let myData={
        id:$("#idGame").val(),
        developer:$("#developerGame").val(),
        year:$("#yearGame").val(),
        name:$("#nameGame").val(),
        description:$("#descriptionGame").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Game/update",
        type:"PUT",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaGames) {
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developerGame").val("");
            $("#yearGame").val("");
            $("#nameGame").val("");
            $("#descriptionGame").val("");
            traerInformacionGames();
            alert("Se ha actualizado un Juego.")        
        }
    });
}

function borrarElementoGames(idGame){

    $.ajax({
        url:"http://localhost:8080/api/Game/" + idGame,
        type:"DELETE",
        contentType: "application/json",
        datatype:"JSON",
        success:function(respuestaGames) {
            $("#resultadoGames").empty();
            traerInformacionGames();
            alert("Se ha eliminado un Juego.")        
        }
    });
}









function traerInformacionClients(){
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuestaClients){
            console.log(respuestaClients);
            $("#resultadoClients").empty();
            pintarRespuestaClients(respuestaClients);
        }
    });
}

function pintarRespuestaClients(items){

    let myTable = "<table border=1>";
    
    myTable += "<tr><th>Id</th><th>Name</th><th>Email</th><th>Age</th><th>Password</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idClient + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td> <button onclick='detalleInformacionClients(" + items[i].idClient + "," + "\"" + items[i].name + "\"" + "," + "\"" + items[i].email + "\"" + "," + items[i].age + "," + "\"" + items[i].password + "\"" + ")'> Detalle </button></td>";
        myTable += "<td> <button onclick='borrarElementoClients(" + items[i].idClient + ")'> Borrar </button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#idClient").prop('disabled', false),
    $("#resultadoClients").append(myTable);
}

function guardarInformacionClients(){
    let myData={
        idClient:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),
        password:$("#passwordClient").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaClients) {
            $("#resultadoClients").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            $("#passwordClient").val("");
            traerInformacionClients();
            alert("Se ha guardado un Cliente.")        
        }
    });
}

function detalleInformacionClients(idClient, nameClient, emailClient, ageClient, passwordClient){
    let myData={
        idClient:$("#idClient").val(idClient).prop('disabled', true),
        name:$("#nameClient").val(nameClient),
        email:$("#emailClient").val(emailClient),
        age:$("#ageClient").val(ageClient),
        password:$("#passwordClient").val(passwordClient)
    };   
}

function editarInformacionClients(){
    let myData={
        idClient:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),
        password:$("#passwordClient").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Client/update",
        type:"PUT",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaClients) {
            $("#resultadoClients").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            $("#passwordClient").val("");
            traerInformacionClients();
            alert("Se ha actualizado un Cliente.")        
        }
    });
}

function borrarElementoClients(idClient){

    $.ajax({
        url:"http://localhost:8080/api/Client/" + idClient,
        type:"DELETE",
        contentType: "application/json",
        datatype:"JSON",
        success:function(respuestaClients) {
            $("#resultadoClients").empty();
            traerInformacionClients();
            alert("Se ha eliminado un Cliente.")        
        }
    });
}




function traerInformacionMessages(){
    $.ajax({
        url: "http://144.22.232.202/api/Message/all",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },        
        type: "GET",
        datatype: "JSON",
        success: function(respuestaMessages){
            console.log(respuestaMessages);
            $("#resultadoMessages").empty();
            pintarRespuestaMessages(respuestaMessages.items);
        }
    });
}

function pintarRespuestaMessages(items){

    let myTable = "<table border=1>";
    
    myTable += "<tr><th>Id</th><th>MessageText</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='detalleInformacionMessages(" + items[i].id + "," + "\"" + items[i].messagetext + "\"" + ")'> Detalle </button></td>";
        myTable += "<td> <button onclick='borrarElementoMessages(" + items[i].id + ")'> Borrar </button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#idMessage").prop('disabled', false),
    $("#resultadoMessages").append(myTable);
}

function guardarInformacionMessages(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messageTextMessage").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.232.202/api/Message/save",
        type:"POST",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaMessages) {
            $("#resultadoMessages").empty();
            $("#messageTextMessage").val("");
            traerInformacionMessages();
            alert("Se ha guardado un Mensaje.")        
        }
    });
}

function detalleInformacionMessages(idMessage, messageTextMessage){
    let myData={
        id:$("#idMessage").val(idMessage).prop('disabled', true),
        messagetext:$("#messageTextMessage").val(messageTextMessage)
    };   
}

function editarInformacionMessages(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messageTextMessage").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.232.202/api/Message/",
        type:"PUT",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaMessages) {
            $("#respuestaMessages").empty();
            $("#idMessage").val("");
            $("#messageTextMessage").val("");
            traerInformacionMessages();
            alert("Se ha actualizado un Mensaje.")        
        }
    });
}

function borrarElementoMessages(idMessage){
    let myData={
        id:idMessage
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.232.202/api/Message/",
        type:"DELETE",
        contentType: "application/json",
        data:dataToSend,
        datatype:"JSON",
        success:function(respuestaMessages) {
            $("#resultadoMessages").empty();
            traerInformacionMessages();
            alert("Se ha eliminado un Mensaje.")        
        }
    });
}