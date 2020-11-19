// const express  = require('express')
// const fs = require('fs')
// const app  = express()
const googleTrends = require('google-trends-api');


// // read the test data from keywords file
// fs.readFile('./data/keywords.csv', 'utf8', function(err,data){
//     let dataArray = data.split(/r?\n/);
//     console.log(dataArray);
//     const count = dataArray.length;
//     console.log(count)

// for(let a=0; a<count; a++)
// {
//     const g = dataArray[a].toString();
//     let fields = g.split(',')

//     // to access geo
//     console.log(fields)
//     let loc = fields[0];
//     let geo = fields[1];
//     console.log("loc --", loc)
//     googleTrends.interestOverTime({keyword: loc,startTime: new Date('2019-01-01'),geo:geo})
//     .then(function(results){
//         console.log("data from google Trends ---", results)
//     Atomics.wait(12000)
//     const receivedData = results.toString()
//     receivedData = JSON.parse(receivedData)
//     let csvContent = ""
//     var i
//     for(i=0; i < receivedData.default.timelineData.length; i++){
//      const time = receivedData.default.timelineData[i].formattedAxisTime;
//      const v = receivedData.default.timelineData[i].value;
//      // to receive comma in time
//      const removectime = time.replace(",", "");

//       csvContent += [removectime, v].join(",") + "\r\n";
//     }
//     const today = new Date();
//     const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     const time = today.getHours() + '-'+ today.getMinutes() + '-' + today.getSeconds() + "-" + today.getMilliseconds();
//     const dateTime = date+time;
//     const filename = loc+geo+dateTime+".csv";
//     console.log(filename);
//     const  path="./report/"
//      fs.writeFileSync(path+filename, (csvContent));
//     })
//         .catch(function(err){
//             console.error("There was an error", err);});
// }    
// });

// app.get("/nepal", (req,res)=> {
//     res.send("I am from nepal");
// });

// app.get("/world", (req,res)=> {
//     res.send("I am from world");
// });
    
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server started on port ${PORT}`));


googleTrends.autoComplete({keyword: 'Software Engineering'})
.then(function(results) {
  console.log(results);
})
.catch(function(err) {
  console.error(err);
})