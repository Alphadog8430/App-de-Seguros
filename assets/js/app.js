//Código para "pintar" en una tabla los registros de clients.
const clients = document.getElementById('clients');

const array = dataClients.results;


function createTable(array){
    clients.innerHTML = '';
    
    const tableClients = document.createElement('table');
    tableClients.className = 'table-auto w-full border-collapse border border-slate-700 mt-14 rounded text-center';
    const fields = Object.keys(array[0]);//Extraer datos del arreglo en la posición 0 (nombre de las propiedades)
    const header = document.createElement('tr');

    //Crear y agregar headers de la tableClients
    fields.forEach( field => {
        const headerCell = document.createElement('th');
        headerCell.className = 'bg-sky-100 border border-slate-600 rounded p-2';
        headerCell.appendChild(document.createTextNode(field.toUpperCase()));
        header.appendChild(headerCell);
    });
    tableClients.appendChild(header);

    //Agregar datos a la tabla 
    array.forEach(client =>{
        const row = document.createElement('tr');
        row.className = 'hover:bg-sky-300';
        row.setAttribute("id",`${client.id}`);// id = "1", id = "2" asigna el id de acuerdo al de dataClient 
        row.setAttribute("onclick","seleccRow(event)");
        var {apellidos,direccion} = client;
        
        fields.forEach(field =>{
                const cell = document.createElement('td');                
                cell.className = 'border border-slate-600 rounded';
                
                field !='apellidos' && field != 'direccion' ? cell.appendChild(document.createTextNode(client[field])) : null;
                
                field == 'apellidos' ? cell.appendChild(document.createTextNode(`${apellidos.apellidoPaterno} `
                +` ${apellidos.apellidoMaterno}`)) : null;
                
                field == 'direccion' ? cell.appendChild(document.createTextNode(`${direccion.calle} `
                +` #${direccion.numero} ` +` Col. ${direccion.colonia}. `+`Cd. ${direccion.ciudad}, `
                +` ${direccion.estado} `)) : null;
                row.appendChild(cell);
            });        
        tableClients.appendChild(row);
    });
    return tableClients;
}

clients.append(createTable(array)); //Envía el array para crear la trabla desde la función createTable

//Filtrate clients by ID
btnFind.addEventListener('click', () => {
    let id_client = document.getElementById('idClient').value;

    //alert('Presionaste el botón de "Buscar" con el id: '+id_client);    
    const filtrated = array.filter(clients => clients.id == id_client);
    //console.log(filtrated);
    //alert(filtrated);
    clients.append(createTable(filtrated));
});

//Seleccionar celdas
function seleccRow(event){
    console.log(event.target);
    alert('Haz dado click sobre una fila');
}

