fetch("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2" , {method: 'get'})
    .then((response) => response.json())
    .then((info) => {

        console.log(info);
        console.log(info.data[0].timings);

        // let time = info.data[0].timings;
        // console.log(time);
      

        let hijri = info.data.map(a => a.timings);
        console.log(hijri);

        document.getElementById("get-data")
        let container = document.createElement("div");
        container.classList.add('list');


     


  




       
      });


    //   let validuserstorage = localStorage.getItem("user")

    //   let message = document.getElementById("message")
    //   message.innerHTML(v)