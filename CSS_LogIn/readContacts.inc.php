
  <h2>List of all contacts</h2>
  <div id="showTable"></div>
<script>
    let con=new XMLHttpRequest();         //Create Object
	con.open("GET","readFile.php",true); //open the connection
	con.onreadystatechange=function(){    //define Callback function
	if (con.readyState==4 && con.status==200) {	
	  // EXTRACT VALUE FOR HTML HEADER.
	  let response = this.responseText;
	  
      let contacts = JSON.parse(this.responseText);
	
      let col = [];
      for (let key in contacts[0]) {
        col.push(key);
      } 
      // CREATE DYNAMIC TABLE.
      let table = document.createElement("table");
      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
      let tr = table.insertRow(-1);                  // TABLE ROW AT THE END
      for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
      }
      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (let i = 0; i < contacts.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = contacts[i][col[j]];
        }
      }
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      let divContainer = document.getElementById("showTable");
      //divContainer.innerHTML = "";
      divContainer.appendChild(table);
    }}
	con.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //Set appropriate request Header
	con.send(); //Request File Content
 </script> 
  
 