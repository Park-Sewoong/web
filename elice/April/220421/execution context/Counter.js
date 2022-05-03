const Counter = () => {
    // Counter 클로저를 작성하세요.
    let count = 0;
    
    function getCount() {
        return count;
    }
    function increase () {
        return count += 1
    }
    function decrease () {
        return count -= 1
    }
    return { getCount, increase, decrease }
};

export default Counter;