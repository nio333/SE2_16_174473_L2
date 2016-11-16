document.getElementById("ditem").style.display = "none";

/**
* La funznione addItems() provvede a mostrare la form per l'inserimento o l'aggiornamento
* degli item e a nascondere il pulsante add item, usato per lanciare questa funzione.
*
* @param:
* @return:
**/
function addItems() {
    if(document.getElementById("ditem").style.display == "none")
        document.getElementById("ditem").style.display = "inline";
    else
	   document.getElementById("ditem").style.display = "none";
}

/**
* La funznione submit() provvede ad aggiornare o aggiungere l'item e la sua quantità
* all'interno della tabella.
* La funzione controlla che i due campi di input presentino dei valori.
* Se i valori sono stati inseriti procede con la lettura del controllo dell'esistenza
* dell'item, se questo viene trovato aggiorna la sua quantità sommando il valore presente
* con quello appena inserito ed effettua il return della funzione.
* Se l'item inserito non è presente nella tabella procedo con l'inserimento in fondo alla
* tabella.
*
* @param:
* @return:
**/
function submit() {
    var item = document.getElementById("item").value;
    var qt = document.getElementById("quantity").value;
    var table = document.getElementById('tb');
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = document.createElement('tr');
    var td = document.createElement('td');
    
    document.getElementById("item").value="";
    document.getElementById("quantity").value="";
    
    if(item=="" || qt==""){
        alert("Valori non validi")
    }
    else{
        var ncol = table.getElementsByTagName('th').length;
        var cel = table.getElementsByTagName('td');
        for(var j=0; j<cel.length; j=(j+ncol)){
            if(cel[j].innerHTML==item){
                var t1 = parseInt(cel[j+1].innerHTML);
                var t2 = parseInt(qt);
                qt=t1+t2;
                cel[j+1].innerHTML=qt;
                return;
            }
        }
        td.appendChild(document.createTextNode(item));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(qt));
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}