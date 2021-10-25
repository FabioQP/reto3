function traerInformacionGames(){
    $.ajax({
        url: "http://localhost:8080/api/Game/all",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },        
        type: "GET",
        datatype: "JSON",
        success: function(respuestaGames){
            console.log(respuestaGames);
            $("#resultadoGames").empty();
            pintarRespuestaGames(respuestaGames.items);
        }
    });
}

function pintarRespuestaGames(items){

    let myTable = "<table border=1>";
    
    myTable += "<tr><th>Id</th><th>Developer</th><th>MinAge</th><th>Category Id</th><th>Name</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].developer + "</td>";
        myTable += "<td>" + items[i].minage + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='detalleInformacionGames(" + items[i].id + "," + "\"" + items[i].developer + "\"" + "," + items[i].minage + "," + items[i].category_id + "," + "\"" + items[i].name + "\"" + ")'> Detalle </button></td>";
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
        minage:$("#minageGame").val(),
        category_id:$("#category_idGame").val(),
        name:$("#nameGame").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Game/save",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuestaGames) {
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developerGame").val("");
            $("#minageGame").val("");
            $("#category_idGame").val("");
            $("#nameGame").val("");
            traerInformacionGames();
            alert("Se ha guardado un Juego.")        
        }
    });
}

function detalleInformacionGames(idGame, developerGame, minageGame, category_idGame, nameGame){
    let myData={
        id:$("#idGame").val(idGame).prop('disabled', true),
        developer:$("#developerGame").val(developerGame),
        minage:$("#minageGame").val(minageGame),
        category_id:$("#category_idGame").val(category_idGame),
        name:$("#nameGame").val(nameGame)
    };   
}

function editarInformacionGames(){
    let myData={
        id:$("#idGame").val(),
        developer:$("#developerGame").val(),
        minage:$("#minageGame").val(),
        category_id:$("#category_idGame").val(),
        name:$("#nameGame").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Game/",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaGames) {
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developerGame").val("");
            $("#minageGame").val("");
            $("#category_idGame").val("");
            $("#nameGame").val("");
            traerInformacionGames();
            alert("Se ha actualizado un Juego.")        
        }
    });
}

function borrarElementoGames(idGame){
    let myData={
        id:idGame
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Game/",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
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
        headers: {
            'Access-Control-Allow-Origin': '*'
        },        
        type: "GET",
        datatype: "JSON",
        success: function(respuestaClients){
            console.log(respuestaClients);
            $("#resultadoClients").empty();
            pintarRespuestaClients(respuestaClients.items);
        }
    });
}

function pintarRespuestaClients(items){

    let myTable = "<table border=1>";
    
    myTable += "<tr><th>Id</th><th>Name</th><th>Email</th><th>Age</th><th>Action</th><th>Action</th></tr>";

    for(i=0; i<items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='detalleInformacionClients(" + items[i].id + "," + "\"" + items[i].name + "\"" + "," + "\"" + items[i].email + "\"" + "," + items[i].age + ")'> Detalle </button></td>";
        myTable += "<td> <button onclick='borrarElementoClients(" + items[i].id + ")'> Borrar </button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#idClient").prop('disabled', false),
    $("#resultadoClients").append(myTable);
}

function guardarInformacionClients(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuestaClients) {
            $("#resultadoClients").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            traerInformacionClients();
            alert("Se ha guardado un Cliente.")        
        }
    });
}

function detalleInformacionClients(idClient, nameClient, emailClient, ageClient){
    let myData={
        id:$("#idClient").val(idClient).prop('disabled', true),
        name:$("#nameClient").val(nameClient),
        email:$("#emailClient").val(emailClient),
        age:$("#ageClient").val(ageClient)
    };   
}

function editarInformacionClients(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val()
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Client/",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClients) {
            $("#resultadoClients").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            traerInformacionClients();
            alert("Se ha actualizado un Cliente.")        
        }
    });
}

function borrarElementoClients(idClient){
    let myData={
        id:idClient
    };   
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
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
        url: "http://localhost:8080/api/Message/all",
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
        url:"http://localhost:8080/api/Message/save",
        type:"POST",
        data:myData,
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
        url:"http://localhost:8080/api/Message/",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
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
        url:"http://localhost:8080/api/Message/",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMessages) {
            $("#resultadoMessages").empty();
            traerInformacionMessages();
            alert("Se ha eliminado un Mensaje.")        
        }
    });
}