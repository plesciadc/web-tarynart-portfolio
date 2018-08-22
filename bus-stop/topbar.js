function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            var d = today.toDateString();
            
            var ampm = h >= 12 ? 'pm' : 'am';
            h = h % 12;
            h = h ? h : 12; // the hour '0' should be '12'
            m = m < 10 ? '0'+m : m;
            var strTime = h + ':' + m + ' ' + ampm;
            
            today.
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =
            "Bus Stop #12" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + strTime + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + d;
            var t = setTimeout(startTime, 500);
        }
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
}