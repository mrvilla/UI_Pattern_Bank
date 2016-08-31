/* global $ */
$(document).ready(function() {
    var table = $('#d_list').DataTable({
        "columnDefs": [
            { "visible": false, "targets": 2 }
        ],
        "order": [[ 2, 'asc' ]],
        "displayLength": 10,
        "drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last = null;
 
            api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before('<tr class="group"><td colspan="5">'+group+'</td></tr>');
                    last = group;
                }
            });
        }
    } );
 
    // Order by the grouping
    $('#d_list tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
            table.order( [ 2, 'desc' ] ).draw();
        }
        else {
            table.order( [ 2, 'asc' ] ).draw();
        }
    } );
    
    //$.getJSON("data/list.json", successUI);
    $.getJSON("data/list.json", function(result){
        $.each(result.uilist, function(i, item) {
            var newUItr = $("<tr class='new_ui_list'>");
            newUItr.append(item.Nr);
            newUItr.append(item.Name);
            //newUItr.append(item.From);
            newUItr.append(item.Site);
            newUItr.append(item.Category);
            $("#contentData").append(newUItr);
        });
    });
});
