let showTime = () => {
        let data = new Date();
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds();
        let session = "AM";

        if(h==0){
            h = 12; //12 hour format
        }

        if(h>12){
            h = h-12
            session = "PM";
        }

        if(h<10){
            h = "0" + h;
        }

        if(m<10){
            m = "0" + m;
        }

        if(s<10){
            s = "0" + s;
        }

        document.getElementById("DigitalClock").innerHTML = h + ":" + m + ":" + s + " " + session;

        setTimeout(showTime,1000);
        }
        showTime();