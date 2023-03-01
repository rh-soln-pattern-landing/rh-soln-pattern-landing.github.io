
    $(document).ready(function () {
  
      // Use the given data to create 
      // the table and display it
      $('table').bootstrapTable({
        data: mydata
      });
    });
  
    // Specify the JSON data to be displayed
    var mydata =
      [
        {
            "name": "pattern 1",
            "title": "pattern 1",
            "desc": "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            "uri": "http://Loremipsum.com",
            "tags": ["AMQ", "RHOSAK"],
            "order": 1,
            "type": "Solution Pattern"
          },
          {
            "name": "pattern 2",
            "title": "pattern 2",
            "desc": "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            "uri": "http://Loremipsum.com",
            "tags": ["AMQ", "RHOSAK"],
            "order": 2,
            "type": "Solution Pattern"
          }
        
      ];
  