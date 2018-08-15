//IT GOES LIKE THIS:

  //SET A VARIABLE FOR YOUR XML REQUEST

    trekson = new XMLHttpRequest();

      trekson.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

          //ONCE EVERYTHING IS READY, PARSE THE JSON FILE USING YOUR XML REQUEST VARIALBE FOR THE PARAMETER  
            var trek = JSON.parse(trekson.responseText);

          //WE ARE REFERENCING THE OBJECT NAMED 'STARTREK'
            var startrek = trek.startrek;

            //  INDIVIDUAL ITEMS MUST BE SELECTED FROM THE ARRAY INDEX.  FOR EXAMPLES,
            //  var enterprisebest = startrek[4].best // SELECTS MY FAVORITE EPISODE FROM 'ENTERPRISE'
            //  THAT'S LAME.  LET'S GIVE THEM THEIR OWN VARIABLES INSTEAD!

            var tos = startrek[0];
            var tng = startrek[1];
            var ds9 = startrek[2];
            var voy = startrek[3];
            var ent = startrek[4];
            var dis = startrek[5];

            //DECLARING ID TAGS FOR ELEMENTS THAT WILL BE POPULATED WITH THE DATA

              var trektable = '';
              var trekList = '';            
              var series = '';
              var abbrev = '';
              var aired = '';
              var ships = '';
              var captains = '';
              var best = '';
              var notes = '';              

            //IT WORKS THE SAME WAY TO CALL AN INDIVIDUAL ITEM AS WELL

              var entbest ='';              
              var toscaptain = '';              
              var ds9ship = ''; 

            //THEN USE +- TO BUILD THE ELEMENT
              
              entbest += ent.best;
              toscaptain = tos.captain;
              ds9ship = ds9.ship;


            //USE FOR LOOPS TO GENERATE LISTS OR TABLES. YOU CAN KEEP IT IN THE SAME LOOP IF YOU'RE PULLING FROM THE SAME OBJECT

              for(var i=0;i< startrek.length;i++) {
                
                // THIS CONSTRUCT WILL BE NESTED INSIDE <tbody id="trektable"></tbody>
  
                  trektable += '<tr>';
                    trektable += '<td>'+ startrek[i].series+'</td>';
                    trektable += '<td>'+ startrek[i].abbrev+'</td>';
                    trektable += '<td>'+ startrek[i].aired+'</td>';
                    trektable += '<td>'+ startrek[i].ship+'</td>';
                    trektable += '<td>'+ startrek[i].captain+'</td>';
                    trektable += '<td>'+ startrek[i].best+'</td>';
                    trektable += '<td>'+ startrek[i].notes+'</td>';
                  trektable += '</tr>';

                // SAME FOR LISTS: <ul id="series"></ul>, <ul id="abbrev"></ul>, etc.

                  series += '<li>' + startrek[i].series + '</li>';
                  abbrev += '<li>' + startrek[i].abbrev + '</li>';
                  aired += '<li>' + startrek[i].aired + '</li>';
                  ships += '<li>' + startrek[i].ship + '</li>';
                  captains += '<li>' + startrek[i].captain + '</li>';
                  best += '<li>' + startrek[i].best + '</li>';
                  notes += '<li>' + startrek[i].notes + '</li>';
                }            

            //POPULATES THE IDS.  DON'T MOVE THIS AROUND.  IT MUST BE DECLARED *AFTER* THE ELEMENTS ARE BUILT, OR THE MAGIC WON'T WORK
              
              document.getElementById('trektable').innerHTML = trektable;
              document.getElementById('series').innerHTML = series;
              document.getElementById('abbrev').innerHTML = abbrev;
              document.getElementById('aired').innerHTML = aired;
              document.getElementById('ships').innerHTML = ships;
              document.getElementById('captains').innerHTML = captains;
              document.getElementById('best').innerHTML = best;
              document.getElementById('notes').innerHTML = notes;              
              
              document.getElementById('toscaptain').innerHTML = tos.captain;
              document.getElementById('enterprisebest').innerHTML = ent.best;
              document.getElementById('ds9ship').innerHTML = ds9.ship;
          }
      };
      //PULLS FROM THE DATABASE AND SENDS IT TO THE SERVER
      trekson.open("GET", "trek.json", true);  
      trekson.send();

