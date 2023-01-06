var currentTimeEl = $("#current-time");

setInterval(function() {
    currentTimeEl.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'))

}, 1000);