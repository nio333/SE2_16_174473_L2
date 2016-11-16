var max = 30;
document.getElementById("ditem").style.display = "none";
document.getElementById("maxSp").innerHTML= "Maximum storage space: "+ max;

/**
* La funznione addItems() provvede a mostrare la form per l'inserimento o l'aggiornamento
* degli item e a nascondere il pulsante add item, usato per lanciare questa funzione.
*
* @param:
* @return:
**/
function addItems() {
    if(document.getElementById("ditem").style.display == "none")
        document.getElementById("ditem").style.display = "block";
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
                if(qt>max){
                    alert("Quantity is too hight!")
                }
                else{
                    cel[j+1].innerHTML=qt;
                }
                return;
            }
        }
        if(qt>max){
            alert("Quantity is too hight!")
        }
        else{
            td.appendChild(document.createTextNode(item));
            tr.appendChild(td);
            td = document.createElement('td');
            td.appendChild(document.createTextNode(qt));
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
}

/**
* La funznione addSpace() provvede a modificare la capacità massima del magazzino.
* Per effettuare tale operazione si procede alla scansione di tutti gli items presenti
* nella tabella per impossibiltare la creazione di un magazzino con capacità inferiore
* alla quantità già presenti in esso.
* Si effettua la scansione solamente sulla colonna quantity, lanciando un messaggio di
* errore nel caso ci fosse un valore maggione a quello che sta per essere aggiornato(max),
* nel caso contrario max viene modificato con il nuovo valore.
*
* @param:
* @return:
**/
function addSpace(){
    var table = document.getElementById("tb");
    var ncol = table.getElementsByTagName('th').length;
    var cel = table.getElementsByTagName('td');
    var temp = prompt("Insert new maximum storage space","");
    console.log(max);
    var tooLow=false;
    for(var j=1; j<cel.length; j=(j+ncol)){
        if(cel[j].innerHTML>temp){
            alert("Value too low!");
            tooLow=true;
            break;
        }
    }
    if(!tooLow){
        max=temp;
        document.getElementById("maxSp").innerHTML= "Maximum storage space: "+ max;
    }
}