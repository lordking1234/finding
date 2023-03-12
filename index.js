

$(function() {
  $(document).ready(function() {
    $('#example').DataTable();
  });
});


let children_data = [{"date":"2014-06-01 ","volume":17142000,"rounds":2,"leads":0,"projects":4,"categorys":3,"cum_vol":17142000,"cum_ron":2,"cum_lead":0,"cum_pro":4,"cum_ca":3},{"date":"2014-07-01 ","volume":47420000,"rounds":3,"leads":1,"projects":9,"categorys":5,"cum_vol":64562000,"cum_ron":5,"cum_lead":1,"cum_pro":13,"cum_ca":8},{"date":"2014-08-01 ","volume":21031000,"rounds":5,"leads":6,"projects":11,"categorys":4,"cum_vol":85593000,"cum_ron":10,"cum_lead":7,"cum_pro":24,"cum_ca":12},{"date":"2014-09-01 ","volume":21217000,"rounds":3,"leads":3,"projects":7,"categorys":4,"cum_vol":106810000,"cum_ron":13,"cum_lead":10,"cum_pro":31,"cum_ca":16},{"date":"2014-10-01 ","volume":74960000,"rounds":4,"leads":0,"projects":12,"categorys":5,"cum_vol":181770000,"cum_ron":17,"cum_lead":10,"cum_pro":43,"cum_ca":21},{"date":"2014-11-01 ","volume":26536000,"rounds":3,"leads":2,"projects":9,"categorys":3,"cum_vol":208306000,"cum_ron":20,"cum_lead":12,"cum_pro":52,"cum_ca":24},{"date":"2014-12-01 ","volume":37731000,"rounds":4,"leads":2,"projects":10,"categorys":6,"cum_vol":246037000,"cum_ron":24,"cum_lead":14,"cum_pro":62,"cum_ca":30},{"date":"2015-01-01 ","volume":89901000,"rounds":5,"leads":4,"projects":12,"categorys":2,"cum_vol":335938000,"cum_ron":29,"cum_lead":18,"cum_pro":74,"cum_ca":32},{"date":"2015-02-01 ","volume":25127000,"rounds":3,"leads":2,"projects":7,"categorys":3,"cum_vol":361065000,"cum_ron":32,"cum_lead":20,"cum_pro":81,"cum_ca":35},{"date":"2015-03-01 ","volume":11938000,"rounds":2,"leads":1,"projects":7,"categorys":4,"cum_vol":373003000,"cum_ron":34,"cum_lead":21,"cum_pro":88,"cum_ca":39},{"date":"2015-04-01 ","volume":61929000,"rounds":4,"leads":2,"projects":8,"categorys":4,"cum_vol":434932000,"cum_ron":38,"cum_lead":23,"cum_pro":96,"cum_ca":43},{"date":"2015-05-01 ","volume":68477000,"rounds":3,"leads":2,"projects":7,"categorys":5,"cum_vol":503409000,"cum_ron":41,"cum_lead":25,"cum_pro":103,"cum_ca":48},{"date":"2015-06-01 ","volume":6685000,"rounds":2,"leads":1,"projects":5,"categorys":2,"cum_vol":510094000,"cum_ron":43,"cum_lead":26,"cum_pro":108,"cum_ca":50},{"date":"2015-07-01 ","volume":28000000,"rounds":3,"leads":3,"projects":4,"categorys":1,"cum_vol":538094000,"cum_ron":46,"cum_lead":29,"cum_pro":112,"cum_ca":51},{"date":"2015-08-01 ","volume":11624000,"rounds":4,"leads":2,"projects":7,"categorys":3,"cum_vol":549718000,"cum_ron":50,"cum_lead":31,"cum_pro":119,"cum_ca":54},{"date":"2015-09-01 ","volume":59406000,"rounds":5,"leads":3,"projects":11,"categorys":3,"cum_vol":609124000,"cum_ron":55,"cum_lead":34,"cum_pro":130,"cum_ca":57},{"date":"2015-10-01 ","volume":94572000,"rounds":5,"leads":4,"projects":14,"categorys":6,"cum_vol":703696000,"cum_ron":60,"cum_lead":38,"cum_pro":144,"cum_ca":63},{"date":"2015-11-01 ","volume":9700000,"rounds":2,"leads":1,"projects":7,"categorys":5,"cum_vol":713396000,"cum_ron":62,"cum_lead":39,"cum_pro":151,"cum_ca":68},{"date":"2015-12-01 ","volume":18221000,"rounds":5,"leads":5,"projects":12,"categorys":3,"cum_vol":731617000,"cum_ron":67,"cum_lead":44,"cum_pro":163,"cum_ca":71},{"date":"2016-01-01 ","volume":103138000,"rounds":5,"leads":7,"projects":22,"categorys":8,"cum_vol":834755000,"cum_ron":72,"cum_lead":51,"cum_pro":185,"cum_ca":79},{"date":"2016-02-01 ","volume":165823000,"rounds":5,"leads":6,"projects":14,"categorys":5,"cum_vol":1000578000,"cum_ron":77,"cum_lead":57,"cum_pro":199,"cum_ca":84},{"date":"2016-03-01 ","volume":36948000,"rounds":5,"leads":6,"projects":14,"categorys":7,"cum_vol":1037526000,"cum_ron":82,"cum_lead":63,"cum_pro":213,"cum_ca":91},{"date":"2016-04-01 ","volume":89166000,"rounds":5,"leads":5,"projects":10,"categorys":4,"cum_vol":1126692000,"cum_ron":87,"cum_lead":68,"cum_pro":223,"cum_ca":95},{"date":"2016-05-01 ","volume":247405000,"rounds":6,"leads":2,"projects":12,"categorys":4,"cum_vol":1374097000,"cum_ron":93,"cum_lead":70,"cum_pro":235,"cum_ca":99},{"date":"2016-06-01 ","volume":27382000,"rounds":4,"leads":5,"projects":8,"categorys":4,"cum_vol":1401479000,"cum_ron":97,"cum_lead":75,"cum_pro":243,"cum_ca":103},{"date":"2016-07-01 ","volume":50863000,"rounds":7,"leads":2,"projects":11,"categorys":2,"cum_vol":1452342000,"cum_ron":104,"cum_lead":77,"cum_pro":254,"cum_ca":105},{"date":"2016-08-01 ","volume":22437000,"rounds":4,"leads":1,"projects":11,"categorys":5,"cum_vol":1474779000,"cum_ron":108,"cum_lead":78,"cum_pro":265,"cum_ca":110},{"date":"2016-09-01 ","volume":98914000,"rounds":5,"leads":3,"projects":15,"categorys":6,"cum_vol":1573693000,"cum_ron":113,"cum_lead":81,"cum_pro":280,"cum_ca":116},{"date":"2016-10-01 ","volume":16691000,"rounds":2,"leads":3,"projects":5,"categorys":1,"cum_vol":1590384000,"cum_ron":115,"cum_lead":84,"cum_pro":285,"cum_ca":117},{"date":"2016-11-01 ","volume":102713000,"rounds":7,"leads":9,"projects":17,"categorys":2,"cum_vol":1693097000,"cum_ron":122,"cum_lead":93,"cum_pro":302,"cum_ca":119},{"date":"2016-12-01 ","volume":93971000,"rounds":4,"leads":3,"projects":18,"categorys":2,"cum_vol":1787068000,"cum_ron":126,"cum_lead":96,"cum_pro":320,"cum_ca":121},{"date":"2017-01-01 ","volume":76340000,"rounds":7,"leads":3,"projects":19,"categorys":6,"cum_vol":1863408000,"cum_ron":133,"cum_lead":99,"cum_pro":339,"cum_ca":127},{"date":"2017-02-01 ","volume":89989000,"rounds":5,"leads":4,"projects":13,"categorys":4,"cum_vol":1953397000,"cum_ron":138,"cum_lead":103,"cum_pro":352,"cum_ca":131},{"date":"2017-03-01 ","volume":172862000,"rounds":6,"leads":10,"projects":28,"categorys":6,"cum_vol":2126259000,"cum_ron":144,"cum_lead":113,"cum_pro":380,"cum_ca":137},{"date":"2017-04-01 ","volume":171158000,"rounds":6,"leads":8,"projects":20,"categorys":3,"cum_vol":2297417000,"cum_ron":150,"cum_lead":121,"cum_pro":400,"cum_ca":140},{"date":"2017-05-01 ","volume":442169000,"rounds":10,"leads":9,"projects":30,"categorys":12,"cum_vol":2739586000,"cum_ron":160,"cum_lead":130,"cum_pro":430,"cum_ca":152},{"date":"2017-06-01 ","volume":632432000,"rounds":10,"leads":7,"projects":28,"categorys":3,"cum_vol":3372018000,"cum_ron":170,"cum_lead":137,"cum_pro":458,"cum_ca":155},{"date":"2017-07-01 ","volume":623246000,"rounds":6,"leads":9,"projects":32,"categorys":6,"cum_vol":3995264000,"cum_ron":176,"cum_lead":146,"cum_pro":490,"cum_ca":161},{"date":"2017-08-01 ","volume":484121000,"rounds":6,"leads":8,"projects":31,"categorys":8,"cum_vol":4479385000,"cum_ron":182,"cum_lead":154,"cum_pro":521,"cum_ca":169},{"date":"2017-09-01 ","volume":812842000,"rounds":6,"leads":5,"projects":30,"categorys":9,"cum_vol":5292227000,"cum_ron":188,"cum_lead":159,"cum_pro":551,"cum_ca":178},{"date":"2017-10-01 ","volume":755773000,"rounds":9,"leads":6,"projects":53,"categorys":9,"cum_vol":6048000000,"cum_ron":197,"cum_lead":165,"cum_pro":604,"cum_ca":187},{"date":"2017-11-01 ","volume":600766000,"rounds":6,"leads":17,"projects":66,"categorys":12,"cum_vol":6648766000,"cum_ron":203,"cum_lead":182,"cum_pro":670,"cum_ca":199},{"date":"2017-12-01 ","volume":1429910000,"rounds":14,"leads":23,"projects":71,"categorys":14,"cum_vol":8078676000,"cum_ron":217,"cum_lead":205,"cum_pro":741,"cum_ca":213},{"date":"2018-01-01 ","volume":930880000,"rounds":10,"leads":26,"projects":76,"categorys":15,"cum_vol":9009556000,"cum_ron":227,"cum_lead":231,"cum_pro":817,"cum_ca":228},{"date":"2018-02-01 ","volume":801890000,"rounds":9,"leads":16,"projects":49,"categorys":8,"cum_vol":9811446000,"cum_ron":236,"cum_lead":247,"cum_pro":866,"cum_ca":236},{"date":"2018-03-01 ","volume":2966255000,"rounds":10,"leads":25,"projects":79,"categorys":15,"cum_vol":12777701000,"cum_ron":246,"cum_lead":272,"cum_pro":945,"cum_ca":251},{"date":"2018-04-01 ","volume":1317190000,"rounds":9,"leads":23,"projects":66,"categorys":12,"cum_vol":14094891000,"cum_ron":255,"cum_lead":295,"cum_pro":1011,"cum_ca":263},{"date":"2018-05-01 ","volume":849710000,"rounds":9,"leads":21,"projects":62,"categorys":12,"cum_vol":14944601000,"cum_ron":264,"cum_lead":316,"cum_pro":1073,"cum_ca":275},{"date":"2018-06-01 ","volume":6032750000,"rounds":13,"leads":27,"projects":75,"categorys":11,"cum_vol":20977351000,"cum_ron":277,"cum_lead":343,"cum_pro":1148,"cum_ca":286},{"date":"2018-07-01 ","volume":506920000,"rounds":10,"leads":20,"projects":45,"categorys":13,"cum_vol":21484271000,"cum_ron":287,"cum_lead":363,"cum_pro":1193,"cum_ca":299},{"date":"2018-08-01 ","volume":1100075000,"rounds":11,"leads":22,"projects":45,"categorys":7,"cum_vol":22584346000,"cum_ron":298,"cum_lead":385,"cum_pro":1238,"cum_ca":306},{"date":"2018-09-01 ","volume":346931000,"rounds":5,"leads":14,"projects":38,"categorys":11,"cum_vol":22931277000,"cum_ron":303,"cum_lead":399,"cum_pro":1276,"cum_ca":317},{"date":"2018-10-01 ","volume":608996000,"rounds":10,"leads":17,"projects":40,"categorys":10,"cum_vol":23540273000,"cum_ron":313,"cum_lead":416,"cum_pro":1316,"cum_ca":327},{"date":"2018-11-01 ","volume":247390000,"rounds":7,"leads":7,"projects":31,"categorys":10,"cum_vol":23787663000,"cum_ron":320,"cum_lead":423,"cum_pro":1347,"cum_ca":337},{"date":"2018-12-01 ","volume":532638000,"rounds":10,"leads":15,"projects":38,"categorys":8,"cum_vol":24320301000,"cum_ron":330,"cum_lead":438,"cum_pro":1385,"cum_ca":345},{"date":"2019-01-01 ","volume":211100000,"rounds":6,"leads":0,"projects":13,"categorys":5,"cum_vol":24531401000,"cum_ron":336,"cum_lead":438,"cum_pro":1398,"cum_ca":350},{"date":"2019-02-01 ","volume":260000000,"rounds":3,"leads":3,"projects":5,"categorys":5,"cum_vol":24791401000,"cum_ron":339,"cum_lead":441,"cum_pro":1403,"cum_ca":355},{"date":"2019-03-01 ","volume":189200000,"rounds":5,"leads":1,"projects":11,"categorys":5,"cum_vol":24980601000,"cum_ron":344,"cum_lead":442,"cum_pro":1414,"cum_ca":360},{"date":"2019-04-01 ","volume":605650000,"rounds":7,"leads":6,"projects":19,"categorys":8,"cum_vol":25586251000,"cum_ron":351,"cum_lead":448,"cum_pro":1433,"cum_ca":368},{"date":"2019-05-01 ","volume":1294920000,"rounds":7,"leads":2,"projects":14,"categorys":10,"cum_vol":26881171000,"cum_ron":358,"cum_lead":450,"cum_pro":1447,"cum_ca":378},{"date":"2019-06-01 ","volume":348430000,"rounds":7,"leads":9,"projects":26,"categorys":9,"cum_vol":27229601000,"cum_ron":365,"cum_lead":459,"cum_pro":1473,"cum_ca":387},{"date":"2019-07-01 ","volume":264310000,"rounds":5,"leads":4,"projects":16,"categorys":7,"cum_vol":27493911000,"cum_ron":370,"cum_lead":463,"cum_pro":1489,"cum_ca":394},{"date":"2019-08-01 ","volume":196930000,"rounds":9,"leads":1,"projects":21,"categorys":8,"cum_vol":27690841000,"cum_ron":379,"cum_lead":464,"cum_pro":1510,"cum_ca":402},{"date":"2019-09-01 ","volume":184740000,"rounds":4,"leads":3,"projects":25,"categorys":8,"cum_vol":27875581000,"cum_ron":383,"cum_lead":467,"cum_pro":1535,"cum_ca":410},{"date":"2019-10-01 ","volume":338020000,"rounds":5,"leads":10,"projects":27,"categorys":11,"cum_vol":28213601000,"cum_ron":388,"cum_lead":477,"cum_pro":1562,"cum_ca":421},{"date":"2019-11-01 ","volume":225930000,"rounds":5,"leads":6,"projects":18,"categorys":8,"cum_vol":28439531000,"cum_ron":393,"cum_lead":483,"cum_pro":1580,"cum_ca":429},{"date":"2019-12-01 ","volume":449420000,"rounds":7,"leads":7,"projects":18,"categorys":10,"cum_vol":28888951000,"cum_ron":400,"cum_lead":490,"cum_pro":1598,"cum_ca":439},{"date":"2020-01-01 ","volume":180000000,"rounds":4,"leads":4,"projects":18,"categorys":9,"cum_vol":29068951000,"cum_ron":404,"cum_lead":494,"cum_pro":1616,"cum_ca":448},{"date":"2020-02-01 ","volume":288720000,"rounds":8,"leads":10,"projects":31,"categorys":10,"cum_vol":29357671000,"cum_ron":412,"cum_lead":504,"cum_pro":1647,"cum_ca":458},{"date":"2020-03-01 ","volume":477780000,"rounds":6,"leads":15,"projects":31,"categorys":9,"cum_vol":29835451000,"cum_ron":418,"cum_lead":519,"cum_pro":1678,"cum_ca":467},{"date":"2020-04-01 ","volume":199050000,"rounds":11,"leads":13,"projects":29,"categorys":9,"cum_vol":30034501000,"cum_ron":429,"cum_lead":532,"cum_pro":1707,"cum_ca":476},{"date":"2020-05-01 ","volume":378620000,"rounds":11,"leads":8,"projects":23,"categorys":7,"cum_vol":30413121000,"cum_ron":440,"cum_lead":540,"cum_pro":1730,"cum_ca":483},{"date":"2020-06-01 ","volume":260410000,"rounds":11,"leads":17,"projects":34,"categorys":9,"cum_vol":30673531000,"cum_ron":451,"cum_lead":557,"cum_pro":1764,"cum_ca":492},{"date":"2020-07-01 ","volume":291130000,"rounds":9,"leads":17,"projects":34,"categorys":12,"cum_vol":30964661000,"cum_ron":460,"cum_lead":574,"cum_pro":1798,"cum_ca":504},{"date":"2020-08-01 ","volume":425090000,"rounds":10,"leads":10,"projects":30,"categorys":8,"cum_vol":31389751000,"cum_ron":470,"cum_lead":584,"cum_pro":1828,"cum_ca":512},{"date":"2020-09-01 ","volume":207920000,"rounds":9,"leads":9,"projects":37,"categorys":12,"cum_vol":31597671000,"cum_ron":479,"cum_lead":593,"cum_pro":1865,"cum_ca":524},{"date":"2020-10-01 ","volume":762170000,"rounds":12,"leads":15,"projects":51,"categorys":11,"cum_vol":32359841000,"cum_ron":491,"cum_lead":608,"cum_pro":1916,"cum_ca":535},{"date":"2020-11-01 ","volume":262650000,"rounds":6,"leads":10,"projects":36,"categorys":7,"cum_vol":32622491000,"cum_ron":497,"cum_lead":618,"cum_pro":1952,"cum_ca":542},{"date":"2020-12-01 ","volume":660920000,"rounds":14,"leads":20,"projects":59,"categorys":11,"cum_vol":33283411000,"cum_ron":511,"cum_lead":638,"cum_pro":2011,"cum_ca":553},{"date":"2021-01-01 ","volume":1171580000,"rounds":13,"leads":21,"projects":71,"categorys":15,"cum_vol":34454991000,"cum_ron":524,"cum_lead":659,"cum_pro":2082,"cum_ca":568},{"date":"2021-02-01 ","volume":1647650000,"rounds":12,"leads":22,"projects":65,"categorys":12,"cum_vol":36102641000,"cum_ron":536,"cum_lead":681,"cum_pro":2147,"cum_ca":580},{"date":"2021-03-01 ","volume":2636790000,"rounds":15,"leads":29,"projects":125,"categorys":17,"cum_vol":38739431000,"cum_ron":551,"cum_lead":710,"cum_pro":2272,"cum_ca":597},{"date":"2021-04-01 ","volume":1627430000,"rounds":17,"leads":39,"projects":116,"categorys":14,"cum_vol":40366861000,"cum_ron":568,"cum_lead":749,"cum_pro":2388,"cum_ca":611},{"date":"2021-05-01 ","volume":3555610000,"rounds":16,"leads":29,"projects":108,"categorys":14,"cum_vol":43922471000,"cum_ron":584,"cum_lead":778,"cum_pro":2496,"cum_ca":625},{"date":"2021-06-01 ","volume":2256140000,"rounds":14,"leads":24,"projects":105,"categorys":13,"cum_vol":46178611000,"cum_ron":598,"cum_lead":802,"cum_pro":2601,"cum_ca":638},{"date":"2021-07-01 ","volume":2625450000,"rounds":11,"leads":29,"projects":97,"categorys":11,"cum_vol":48804061000,"cum_ron":609,"cum_lead":831,"cum_pro":2698,"cum_ca":649},{"date":"2021-08-01 ","volume":3201790000,"rounds":12,"leads":14,"projects":80,"categorys":15,"cum_vol":52005851000,"cum_ron":621,"cum_lead":845,"cum_pro":2778,"cum_ca":664},{"date":"2021-09-01 ","volume":3139910000,"rounds":13,"leads":23,"projects":111,"categorys":13,"cum_vol":55145761000,"cum_ron":634,"cum_lead":868,"cum_pro":2889,"cum_ca":677},{"date":"2021-10-01 ","volume":3749075000,"rounds":13,"leads":24,"projects":131,"categorys":19,"cum_vol":58894836000,"cum_ron":647,"cum_lead":892,"cum_pro":3020,"cum_ca":696},{"date":"2021-11-01 ","volume":7076460000,"rounds":16,"leads":30,"projects":139,"categorys":16,"cum_vol":65971296000,"cum_ron":663,"cum_lead":922,"cum_pro":3159,"cum_ca":712},{"date":"2021-12-01 ","volume":3656910000,"rounds":17,"leads":47,"projects":148,"categorys":18,"cum_vol":69628206000,"cum_ron":680,"cum_lead":969,"cum_pro":3307,"cum_ca":730},{"date":"2022-01-01 ","volume":2587170000,"rounds":11,"leads":16,"projects":26,"categorys":6,"cum_vol":72215376000,"cum_ron":691,"cum_lead":985,"cum_pro":3333,"cum_ca":736},{"date":"2022-02-01 ","volume":2723436900,"rounds":11,"leads":32,"projects":42,"categorys":11,"cum_vol":74938812900,"cum_ron":702,"cum_lead":1017,"cum_pro":3375,"cum_ca":747},{"date":"2022-03-01 ","volume":3627350000,"rounds":16,"leads":38,"projects":65,"categorys":9,"cum_vol":78566162900,"cum_ron":718,"cum_lead":1055,"cum_pro":3440,"cum_ca":756},{"date":"2022-04-01 ","volume":1979300000,"rounds":10,"leads":27,"projects":61,"categorys":5,"cum_vol":80545462900,"cum_ron":728,"cum_lead":1082,"cum_pro":3501,"cum_ca":761},{"date":"2022-05-01 ","volume":3046650000,"rounds":14,"leads":16,"projects":73,"categorys":7,"cum_vol":83592112900,"cum_ron":742,"cum_lead":1098,"cum_pro":3574,"cum_ca":768},{"date":"2022-06-01 ","volume":1303910000,"rounds":12,"leads":17,"projects":53,"categorys":6,"cum_vol":84896022900,"cum_ron":754,"cum_lead":1115,"cum_pro":3627,"cum_ca":774},{"date":"2022-07-01 ","volume":969250000,"rounds":9,"leads":16,"projects":49,"categorys":7,"cum_vol":85865272900,"cum_ron":763,"cum_lead":1131,"cum_pro":3676,"cum_ca":781},{"date":"2022-08-01 ","volume":1157100000,"rounds":12,"leads":59,"projects":67,"categorys":6,"cum_vol":87022372900,"cum_ron":775,"cum_lead":1190,"cum_pro":3743,"cum_ca":787},{"date":"2022-09-01 ","volume":1593640000,"rounds":12,"leads":64,"projects":82,"categorys":11,"cum_vol":88616012900,"cum_ron":787,"cum_lead":1254,"cum_pro":3825,"cum_ca":798},{"date":"2022-10-01 ","volume":1148820000,"rounds":10,"leads":55,"projects":84,"categorys":12,"cum_vol":89764832900,"cum_ron":797,"cum_lead":1309,"cum_pro":3909,"cum_ca":810},{"date":"2022-11-01 ","volume":1134765000,"rounds":13,"leads":43,"projects":69,"categorys":7,"cum_vol":90899597900,"cum_ron":810,"cum_lead":1352,"cum_pro":3978,"cum_ca":817},{"date":"2022-12-01 ","volume":723000000,"rounds":11,"leads":29,"projects":50,"categorys":9,"cum_vol":91622597900,"cum_ron":821,"cum_lead":1381,"cum_pro":4028,"cum_ca":826},{"date":"2023-01-01 ","volume":574991000,"rounds":12,"leads":45,"projects":64,"categorys":9,"cum_vol":92197588900,"cum_ron":833,"cum_lead":1426,"cum_pro":4092,"cum_ca":835},{"date":"2023-02-01 ","volume":872550000,"rounds":17,"leads":66,"projects":92,"categorys":14,"cum_vol":93070138900,"cum_ron":850,"cum_lead":1492,"cum_pro":4184,"cum_ca":849},{"date":"2023-03-01 ","volume":287300000,"rounds":9,"leads":19,"projects":27,"categorys":9,"cum_vol":93357438900,"cum_ron":859,"cum_lead":1511,"cum_pro":4211,"cum_ca":858}]

const newData = children_data.reduce((t,i)=>{
  return {...t,
    date:[...t.date,i.date],
    com_vols:[...t.com_vols,i.volume] ,
    com_ros:[...t.com_ros,i.rounds] ,
    com_leads:[...t.com_leads,i.leads] ,
    cum_vols:[...t.cum_vols,i.cum_vol] ,
    cum_rons:[...t.cum_rons,i.cum_ron] ,
    cum_leads:[...t.cum_leads,i.cum_lead] ,
    com_pros:[...t.com_pros,i.projects] ,
    cum_pros:[...t.cum_pros,i.cum_pro] ,
    com_cats:[...t.com_cats,i.categorys] ,
    cum_cats:[...t.cum_cats,i.cum_ca] 
  }

},{date:[],com_vols:[],com_ros:[],com_leads:[],cum_vols:[],cum_rons:[],cum_leads:[],com_pros:[],cum_pros:[],com_cats:[],cum_cats:[]});

  
        var chart000 = {
          series: [{
          name: '',
          type: 'area',
          data: newData.cum_vols
        },{
          name: '',
          type: 'area',
          data: newData.com_vols
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: newData.date,
        markers: {
          size: 0
        },
        xaxis: {
          type: 'Century'
        },
        yaxis: {
          title: {
            text: 'Total monthly volume $',
          },
          min: 0
        },
        annotations: {
          xaxis: [{
            x: 1976 ,
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Jump',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " $";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.getElementById("chart000"), chart000);
        chart.render();
  
//------------------------------------------------------------------------------



var chart1112 = {
  series: [{
  name: '',
  type: 'area',
  data: newData.cum_leads
},{
  name: '',
  type: 'area',
  data:  newData.com_leads
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels:  newData.date,
markers: {
  size: 0
},
xaxis: {
  type: 'year'
},
yaxis: {
  title: {
    text: 'Number of Lead investors',
  },
  min: 0
},
annotations: {
  xaxis: [{
    x: 1977 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'First Jump',
      style: {
        color: "#fff",
        background: '#775DD0'
      }
    }
  },{
    x: 2001 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Second Jump',
      style: {
        color: "#fff",
        background: '#708DD0'
      }
    }
  },{
    x: 2010 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Third Jump',
      style: {
        color: "#fff",
        background: '#757DD0'
      }
    }
  }]
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " Lead investors";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.getElementById("chart1112"), chart1112);
chart.render();









var chart1113 = {
  series: [{
  name: '',
  type: 'area',
  data: newData.cum_rons
},{
  name: '',
  type: 'area',
  data:  newData.com_ros
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels:  newData.date,
markers: {
  size: 0
},
xaxis: {
  type: 'year'
},
yaxis: {
  title: {
    text: 'Number of Round',
  },
  min: 0
},
annotations: {
  xaxis: [{
    x: 1977 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'First Jump',
      style: {
        color: "#fff",
        background: '#775DD0'
      }
    }
  },{
    x: 2001 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Second Jump',
      style: {
        color: "#fff",
        background: '#708DD0'
      }
    }
  },{
    x: 2010 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Third Jump',
      style: {
        color: "#fff",
        background: '#757DD0'
      }
    }
  }]
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " Round";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.getElementById("chart1113"), chart1113);
chart.render();










var chart1114 = {
  series: [{
  name: '',
  type: 'area',
  data: newData.cum_cats
},{
  name: '',
  type: 'area',
  data:  newData.com_cats
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels:  newData.date,
markers: {
  size: 0
},
xaxis: {
  type: 'year'
},
yaxis: {
  title: {
    text: 'Number of category',
  },
  min: 0
},
annotations: {
  xaxis: [{
    x: 1977 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'First Jump',
      style: {
        color: "#fff",
        background: '#775DD0'
      }
    }
  },{
    x: 2001 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Second Jump',
      style: {
        color: "#fff",
        background: '#708DD0'
      }
    }
  },{
    x: 2010 ,
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Third Jump',
      style: {
        color: "#fff",
        background: '#757DD0'
      }
    }
  }]
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " category";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.getElementById("chart1114"), chart1114);
chart.render();

//------------------------------------------------------------------------------------------
        

let childrens = 

[{"category":"L1","volume":9.96},{"category":"CeFi","volume":9.37},{"category":"Infrastructure","volume":9.25},{"category":"Centralized Exchange","volume":6.74},{"category":"DeFi","volume":4.86},{"category":"Gaming","volume":3.65},{"category":"Mining","volume":3.53},{"category":"NFT","volume":2.28},{"category":"Trading","volume":1.45},{"category":"Analytics","volume":1},{"category":"Scaling Solution","volume":0.99},{"category":"Social Platform","volume":0.89},{"category":"Web3","volume":0.68},{"category":"Banking","volume":0.66},{"category":"L2","volume":0.63},{"category":"Cybersecurity","volume":0.36},{"category":"IoT","volume":0.29},{"category":"Zero Knowledge Industry","volume":0.28},{"category":"Taxes","volume":0.25},{"category":"Metaverse","volume":0.25},{"category":"Smart contract audits","volume":0.15},{"category":"Smart Contract Platform","volume":0.13}]
const new2= childrens.reduce((t,i)=>{
  return {...t,
    jjs:[...t.jjs,i.category],
    maxss:[...t.maxss,i.volume] 
  }

},{maxss:[],jjs:[]});


var chart88 = {
  series: [{
    data: new2.maxss
  }],
    chart: {
    type: 'bar',
    height: 500
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new2.jjs ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart88"), chart88);
chart.render();





let childrenss = 

[{"category":"DeFi","number":331},{"category":"Infrastructure","number":292},{"category":"NFT","number":145},{"category":"Gaming","number":131},{"category":"L1","number":131},{"category":"CeFi","number":117},{"category":"Trading","number":85},{"category":"Centralized Exchange","number":85},{"category":"Web3","number":76},{"category":"Analytics","number":52},{"category":"Mining","number":48},{"category":"Metaverse","number":44},{"category":"Social Platform","number":27},{"category":"Game","number":22},{"category":"Cybersecurity","number":17},{"category":"Payments","number":14},{"category":"Storage","number":13},{"category":"Scaling Solution","number":11},{"category":"Digital Identity","number":11},{"category":"L2","number":10},{"category":"Healthcare","number":8},{"category":"Banking","number":7},{"category":"Smart contract security","number":7},{"category":"DAO infrastructure","number":7}]
const new3= childrenss.reduce((t,i)=>{
  return {...t,
    jjss:[...t.jjss,i.category],
    minss:[...t.minss,i.number] 
  }

},{minss:[],jjss:[]});


var chart99 = {
  series: [{
    data: new3.minss
  }],
    chart: {
    type: 'bar',
    height: 500
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new3.jjss ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart99"), chart99);
chart.render();




let children = 
[{"volume":555,"name":"MoonPay","round":"Series A"},{"volume":423,"name":"Gemini","round":"Series A"},{"volume":400,"name":"FTX US","round":"Series A"},{"volume":200,"name":"Bithumb","round":"Series A"},{"volume":182.5,"name":"Bakkt","round":"Series A"},{"volume":150,"name":"Aptos","round":"Series A"},{"volume":138,"name":"Candy Digital","round":"Series A"},{"volume":135,"name":"LayerZero","round":"Series A+"},{"volume":110,"name":"Masterworks","round":"Series A"},{"volume":109.20,"name":"CoinList","round":"Series A"}]
const new1= children.reduce((t,i)=>{
  return {...t,
    job_states:[...t.job_states,i.name],
    com_numms:[...t.com_numms,i.volume] 
  }

},{job_states:[],com_numms:[]});

var chart00 = {
  series: [{
    data: new1.com_numms
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new1.job_states ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart00"), chart00);
chart.render();



//----------------------------------------------------------------------------------



let childrenns = 
[{"volume":450,"name":"Yuga Labs","round":"Seed"},{"volume":200,"name":"DeSo Foundation","round":"Seed"},{"volume":100,"name":"Ethereum Enterprises","round":"Seed"},{"volume":63,"name":"OneOf","round":"Seed"},{"volume":60,"name":"Multichain","round":"Seed"},{"volume":45,"name":"Carbonplace","round":"Seed"},{"volume":41.5,"name":"Tatum","round":"Seed"},{"volume":40,"name":"Neon Labs","round":"Seed"},{"volume":35.1,"name":"Espresso Systems","round":"Seed"},{"volume":35,"name":"Fractal ","round":"Seed"}]
const new7= childrenns.reduce((t,i)=>{
  return {...t,
    ss:[...t.ss,i.name],
    gg:[...t.gg,i.volume] 
  }

},{ss:[],gg:[]});

var chart11 = {
  series: [{
    data: new7.gg
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new7.ss ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart11"), chart11);
chart.render();


  //-----------------------------------------------------------------------------


  var chart111 = {
    series: [{
    name: '',
    type: 'area',
    data: newData.cum_pros
  },{
    name: '',
    type: 'area',
    data:  newData.com_pros
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels:  newData.date,
  markers: {
    size: 0
  },
  xaxis: {
    type: 'year'
  },
  yaxis: {
    title: {
      text: 'Number of Projects',
    },
    min: 0
  },
  annotations: {
    xaxis: [{
      x: 1977 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'First Jump',
        style: {
          color: "#fff",
          background: '#775DD0'
        }
      }
    },{
      x: 2001 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Second Jump',
        style: {
          color: "#fff",
          background: '#708DD0'
        }
      }
    },{
      x: 2010 ,
      borderColor: '#999',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Third Jump',
        style: {
          color: "#fff",
          background: '#757DD0'
        }
      }
    }]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " project";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.getElementById("chart111"), chart111);
  chart.render();





//-------------------------------------------------------------------------

//-------------------------------------------------------------------------













let childrensss = 

[{"volume":16.64,"round":"ICO"},{"volume":13.83,"round":"Series B"},{"volume":11.22,"round":"Series A"},{"volume":7.25,"round":"Series C"},{"volume":6.97,"round":"Seed"},{"volume":3.6,"round":"Series D"},{"volume":3.26,"round":"Debt Financing"},{"volume":3.15,"round":"Post-IPO Equity"},{"volume":2.63,"round":"Ecosystem Foundation raise"},{"volume":2.34,"round":"Private Equity"},{"volume":1.63,"round":"Series E"},{"volume":1.22,"round":"Post-IPO Debt"},{"volume":1.12,"round":"Strategic Private Sale"},{"volume":0.98,"round":"Convertible note issuance"},{"volume":0.91,"round":"Private token sale"},{"volume":0.85,"round":"Strategic "},{"volume":0.8,"round":"Secondary Market"},{"volume":0.72,"round":"Private"},{"volume":0.5,"round":"Corporate Round"},{"volume":0.43,"round":"Pre-Seed"}]
const news3= childrensss.reduce((t,i)=>{
  return {...t,
    jjss:[...t.jjss,i.round],
    minss:[...t.minss,i.volume] 
  }

},{minss:[],jjss:[]});


var chart9090 = {
  series: [{
    data: news3.minss
  }],
    chart: {
    type: 'area',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:news3.jjss ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart9090"), chart9090);
chart.render();









let childr = 

[{"volume":422,"round":"pre-IPO"},{"volume":420.69,"round":"Series B1"},{"volume":203.56,"round":"Series E"},{"volume":200,"round":"Loan"},{"volume":200,"round":"Series C-1"},{"volume":186.48,"round":"Strategic Private Sale"},{"volume":163.47,"round":"Series D"},{"volume":160.08,"round":"Secondary Market"},{"volume":150,"round":"pre-Series B"},{"volume":131.25,"round":"Ecosystem Foundation raise"},{"volume":115.07,"round":"Series C"},{"volume":97.44,"round":"Private Equity"},{"volume":80,"round":"Series B2"},{"volume":70.89,"round":"Debt Financing"},{"volume":64.58,"round":"Series F"},{"volume":64.34,"round":"Series B"},{"volume":55,"round":"Series A & B"},{"volume":53.23,"round":"Post-IPO Debt"},{"volume":43.57,"round":"ICO"},{"volume":36.22,"round":"Private token sale"}]
const new8= childr.reduce((t,i)=>{
  return {...t,
    jjss:[...t.jjss,i.round],
    minss:[...t.minss,i.volume] 
  }

},{minss:[],jjss:[]});


var chart9091 = {
  series: [{
    data: new8.minss
  }],
    chart: {
    type: 'area',
    height: 350
  },
  annotations: {
    xaxis: [{
      x: 10,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396',
        },
        text: 'Under 10',
      }
    }],
    yaxis: [{
      y: '',
      y2: '',
      label: {
        text: ''
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories:new8.jjss ,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: false,
    axisTicks: {
      show: true
    }
  }
  };

var chart = new ApexCharts(document.getElementById("chart9091"), chart9091);
chart.render();

