/*
Assume you fetching data from an external source with the steps below
1. Connect to external source
2. Fetch the data
3. Use data for your script

but assume that;
connecting takes 5 seconds
fetching takes 3 seconds
processing takes 1 second
*/



function connectToSource(callback){
    setTimeout(() => {
        console.log('Connect to external source');
        callback();

    }, 5000)
}

function fetchDate(callback){
    setTimeout(() => {
        console.log('Fetch the data');
        callback();
    }, 3000)
}


function useData(){
    setTimeout(() => {
        console.log('Use data for your script');
     }, 1000)
}


connectToSource(() => {
    fetchDate(() => {
        useData ();

        });
    });



// With error
    function connectToSource(callback, err) {
        setTimeout(() => {
          if (true) {
            console.log("CONNECTION IS SET");
            callback();
          } else {
            err();
          }
        }, 5000);
      }
      
      function fetchData(callback, err) {
        setTimeout(() => {
          if (false) {
            console.log("DATA IS RETRIEVED");
            callback();
          } else {
            err();
          }
        }, 3000);
      }
      
      function useData() {
        setTimeout(() => {
          console.log("DATA");
        }, 1000);
      }
      
      // This is asynchronous and problem - we should handle it properly
      // connectToSource();
      // fetchData();
      // useData();
      
      // Handled
      function test() {
        connectToSource(
          () => {
            fetchData(
              () => {
                useData();
              },
              () => {
                console.log("ERROR: occurred while fetching the data!");
              }
            );
          },
          () => {
            console.log("ERROR: occurred while connecting to source!");
          }
        );
      }
      
      test();     