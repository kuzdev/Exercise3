
function tampilResult(){
      $.getJSON('https://swapi.co/api/films/', function(data){
          var results = data.results;
          $.each(results, function(i,data){
              $('#data-table').append(`
                <tr>
                    <td>`+ data.title +`</td>
                    <td>`+ data.director +`</td>
                    <td>`+ data.episode_id +`</td>
                    <td>`+ data.opening_crawl +`</td>
                    <td>`+ data.producer +`</td>
                    <td>`+ data.release_date +`</td>
                </tr>  
              `);
          });
      });
    }
tampilResult();

$(document).ready(function(){
  $("#search").on("keyup", function() {
    //   console.log($(this).val().toLowerCase());
      
    var value = $(this).val().toLowerCase();
    
    $("#data-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});