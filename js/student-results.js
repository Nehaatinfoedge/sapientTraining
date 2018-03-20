	function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var dataSet = [];
    var eachDs = {};
    var ds = JSON.parse(window.sessionStorage.getItem('dataSet_'+getParameterByName('student_id')))
    console.log('ds',ds);
    var dataSet_ = $.map(ds, function(value, index) {
        return [value];
    });

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    var arr =[];
    for( var i in ds ) {
        if (ds.hasOwnProperty(i)){
            if(ds[i] instanceof Object){
                var dataSet_ = $.map(ds[i], function(value, index) {
                    return [value];
                });
                arr.push(i);
                arr.push(dataSet_[0]);
                arr.push('F001');
                arr.push('2000');
                /*if(dataSet_[1] instanceof Object){
                   $.each(dataSet_[1],function(k,v){
                        arr.push(k);
                        arr.push(v);
                   });
                    
                }*/
            }
            if (isNumber(i)){
                arr[i] = ds[i];
            }else{
              arr.push(ds[i]);
            }
        }
    }

    console.log('arr',arr);
    dataSet.push(arr);
	dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675","xxxx","xxxxx","2011/04/25", "$320,800","xxxx","xxxxx" ]
];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Email" },
            { title: "Username" },
            { title: "Address" },
            { title: "Course Code" },
            { title: "Course Name" },
            { title: "Fees Code" },
            { title: "Fees Amount" },
            { title: "Course Code" },
            { title: "Course Name" },
            { title: "Fees Code" },
            { title: "Fees Amount" }
        ]
    } );
} );