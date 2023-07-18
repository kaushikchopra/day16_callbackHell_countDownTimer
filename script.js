function countdown(num, callback) {
    if (num > 0) {
        document.getElementById("countdown").textContent = num;
        setTimeout(function () {
            countdown(num - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").textContent = "Happy Independence Day!";
});