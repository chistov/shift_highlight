$(document).ready(function() {
    $('#example').DataTable( {
        "retrieve": true,
        "pagingType": "full_numbers",
        "pageLength": 50,
        "lengthMenu": [50, 100, 200],
        "dom": '<lfi<t>p>',
        "autoWidth": false,
        //"columns": columnsTable, <-- options problem
        "select": {
            "style": "os"
        }
    } );
} );
