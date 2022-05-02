animteScrollTo = function(_selector, _duration, _adjust) {
    const targetEle = document.querySelector(_selector);
    if (!targetEle) return;
  
    // - Get current &amp; target positions (현재 위치, 타겟 위치를 가져옴)
    const scrollEle = document.documentElement || window.scrollingElement,
    currentY = scrollEle.scrollTop,
    targetY = targetEle.offsetTop - (_adjust || 0);
    animateScrollTo(currentY, targetY, _duration);
  
    // - Animate and scroll to target position (해당 위치가지 움직이는 애니메이션)
    function animateScrollTo(_startY, _endY, _duration) {
      _duration = _duration ? _duration : 600;
      const unitY = (targetY - currentY) / _duration;
      const startTime = new Date().getTime();
      const endTime = new Date().getTime() + _duration;
      
      const scrollTo = function() {
        let now = new Date().getTime();
        let passed = now - startTime;
        if (now <= endTime) {
          scrollEle.scrollTop = currentY + (unitY * passed);
          requestAnimationFrame(scrollTo);
        }
        else {
          console.log('스크롤 끝')
        }
      };
      requestAnimationFrame(scrollTo);
    };
  };