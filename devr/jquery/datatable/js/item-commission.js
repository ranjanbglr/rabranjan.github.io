var commissionItemGridData = [{
    "catalog":"5537-G-325",
    "lot":"4M1VTE",
    "expiryDate":"11-30-2021",
    "description": "NO 3. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 25mm",
    "sgtin":"303400009400C58001312DA5"
},{
    "catalog":"5537-G-616",
    "lot":"YK6273",
    "expiryDate":"03-26-2022",
    "description": "NO 6. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 16mm",
    "sgtin":"303400009400BE4001312DB7"
},{
    "catalog":"5537-G-528",
    "lot":"E91KVV",
    "expiryDate":"07-27-2020",
    "description": "NO 5. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 28mm",
    "sgtin":"303400009400BE4001312DB7"
}];
var prevCommissionItemGridData = [{
    "sequence": '1 of 1',
    "catalog":"5537-G-325",
    "lot":"4M1VTE",
    "print":"",
    "description": "NO 3. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 25mm",
    "sgtin":"303400009400C58001312D68"
},{
    "sequence": '2 of 2',
    "catalog":"5537-G-616",
    "lot":"YK6273",
    "print":"",
    "description": "NO 6. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 16mm",
    "sgtin":"303400009400BE4001312D7D"
},{
    "sequence": '1 of 2',
    "catalog":"5537-G-616",
    "lot":"YK6273",
    "print":"",
    "description": "NO 6. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 16mm",
    "sgtin":"303400009400BE4001312D7A"
},{
    "sequence": '1 of 1',
    "catalog":"5537-G-528",
    "lot":"E91KVV",
    "print":"",
    "description": "NO 5. TRIATHLON TS PLUS TIBIAL INSERT X3 POLY 28mm",
    "sgtin":"303400009400BE4001312D7D"
}];
$(document).ready(function() {
    var selectedObj = $("#dialog").data('selectedDataObj'),prevItem = [],item = [];
    item = commissionItemGridData.filter( v => {return v.catalog === selectedObj.catalog;});
    prevItem = prevCommissionItemGridData.filter( v =>{return v.catalog === selectedObj.catalog;});
    let commissionItemGridTable = $('#commissionItemGrid').DataTable({
        order: [[ 0, 'asc' ]],
        data: item,
        columns: [
            { data: 'catalog'},
            { data: 'lot' },
            { data: 'description', width: '80px'},
            { data: 'sgtin'},
            { data: 'expiryDate'}
        ],
        deferRender: true,
        fixedHeader: true,
        scrollX: true,
        scrollY: 150,
        scrollCollapse: true,
        scroller: true,
        orderCellsTop: true,
        bInfo: false,
        bPaginate: false,
        dom: 'lrtp',
        bSort: true
    });
    let prevCommissionItemGridTable = $('#prevCommissionItemGrid').DataTable({
        order: [[ 0, 'asc' ]],
        data: prevItem,
        columns: [
            { data: 'sequence'},
            { data: 'catalog'},
            { data: 'lot' },
            { data: 'description', width: '80px'},
            { data: 'sgtin'},
            { data: 'print', width: '10px'}
        ],
        columnDefs: [ {
            orderable: false,
            checkboxes: {
                selectRow: true,
                selectAll: false
            },
            targets:   5
        }],
        select: {
            style: 'multi'
        },
        deferRender: true,
        fixedHeader: true,
        scrollY: 150,
        scrollX: true,
        scrollCollapse: true,
        scroller: true,
        orderCellsTop: true,
        bInfo: false,
        bPaginate: false,
        dom: 'lrtp',
        bSort: true
    });
    prevCommissionItemGridTable.on('click', 'input[type="checkbox"]', function() {
        let checkedRow = $('#prevCommissionItemGrid tbody tr').filter(function(){
            if($(this).find('td:eq(5) > input[type=checkbox]').is(':checked')) {
                return $(this).html();
            }
        });
        if(checkedRow.length) {
            $('#itemCommissionPrint span').text('Reprint');
        } else {
            $('#itemCommissionPrint span').text('Print');
        }
    });
    $('#itemCommissionPrint').click(function(){
        if($('#itemCommissionPrint span').text()==='Reprint') {
            localStorage.setItem('printTagMessageFromItemCommission', 'Reprint');
        } else {
            localStorage.setItem('printTagMessageFromItemCommission', 'Print');
        }
        $('#dialog').dialog('close');
    }); 
});