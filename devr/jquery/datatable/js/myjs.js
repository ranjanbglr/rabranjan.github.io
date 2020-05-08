var responseData = [{
    "tagID":"303400009400404001312D22",
    "catalog":"6276-7-314",
    "lot":"CAXT11PE",
    "expiryDate":"2020-09-21",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 14mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"303400009400408001312D24",
    "catalog":"6276-7-315",
    "lot":"CAXT21JD",
    "expiryDate":"2020-09-05",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 15mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003DC001312D35",
    "catalog":"6276-7-316",
    "lot":"SalasCAXW629H",
    "expiryDate":"2023-01-16",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 16mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003D0001312D2F",
    "catalog":"6276-7-317",
    "lot":"CAXV60TE",
    "expiryDate":"2022-02-23",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 17mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003E0001312D29",
    "catalog":"6276-7-318",
    "lot":"CAXT305D",
    "expiryDate":"2020-07-12",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 18mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"303400009400400001312D3A",
    "catalog":"6276-7-319",
    "lot":"CAXW727F",
    "expiryDate":"2023-03-19",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 19mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003FC001312D36",
    "catalog":"6276-7-320",
    "lot":"CAXW42XF",
    "expiryDate":"2022-10-19",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 20mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003F8001312D39",
    "catalog":"6276-7-321",
    "lot":"CAXW62KE",
    "expiryDate":"2023-05-02",
    "owner":"NLE",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 21mmX235mm",
    "commission":""
},{
    "tagID":"3034000094003F4001312D38",
    "catalog":"6276-7-322",
    "lot":"CAXW72AC",
    "expiryDate":"2023-02-04",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 22mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003F0001312D3A",
    "catalog":"6276-7-323",
    "lot":"CAXW431E",
    "expiryDate":"2023-01-11",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 23mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003EC001312D38",
    "catalog":"6276-7-324",
    "lot":"CAXW72EA",
    "expiryDate":"2023-02-06",
    "description":"REST MOD CONICAL DISTAL BOWED STEM 24mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003D8001312D33",
    "catalog":"6276-7-325",
    "lot":"CAXW80MC",
    "expiryDate":"2023-08-12",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 25mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003D4001312D38",
    "catalog":"6276-7-326",
    "lot":"CAXW80NA",
    "expiryDate":"2023-07-16",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 26mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003E4001312D3C",
    "catalog":"6276-7-327",
    "lot":"CAXW433A",
    "expiryDate":"2022-12-16",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 27mmX235mm",
    "owner":"NLE",
    "commission":""
},{
    "tagID":"3034000094003E8001312D3B",
    "catalog":"6276-7-328",
    "lot":"CAXW80RA",
    "expiryDate":"2023-07-21",
    "description": "REST MOD CONICAL DISTAL BOWED STEM 28mmX235mm",
    "owner":"NLE",
    "commission":""
}];
$(document).ready(function() {
    var table = $('#buildKitGrid').DataTable({
        data: responseData,
        columns: [
            { data: 'tagID' },
            { data: 'catalog' },
            { data: 'lot' },
            { data: 'expiryDate' },
            { data: 'owner' },
            { data: 'commission' }
        ],
        deferRender: true,
        scrollY: 300,
        scrollCollapse: true,
        scroller: true,

        orderCellsTop: true,
        bInfo: false,
        bPaginate: false,
        dom: 'lrtp',
        bSort: true
    });
});