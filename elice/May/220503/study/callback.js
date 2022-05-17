function countDown(count, callback) {
    console.log(count);
    
    if (count === 0) {
        callback();
        return;
    }
    
    setTimeout(() => {
        countDown(count - 1, callback);
    }, 1000);
}

module.exports = countDown;




const countDown = require('./countdown');

countDown(5, () => {
    console.log("BOOM!");
});

