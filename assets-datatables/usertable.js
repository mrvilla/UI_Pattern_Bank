/* global $ */
$(document).ready(function() {
    
    var table = $('#uilist').DataTable( {
        "ajax": "data/list_ui.json",
        "deferRender": true,
        "columnDefs": [ 
            {
            "targets": [4],
            "render": function ( data, type, row ) {
                          return '<a href="'+ row[4] +'">' + row[3] +'</a>';
                        }
            },
            {
            "targets":[3],
            "visible": false
            }
        ]
    } );
} );