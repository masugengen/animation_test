(() => {
    const targetContents = document.querySelectorAll('.js-animation');

    const options = {
        rootMargin: '0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(doWhenIntersect, options);

    targetContents.forEach(targetContent => {
        observer.observe(targetContent);
    });

    function doWhenIntersect(entries: IntersectionObserverEntry[]) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activateIndex(entry.target);
          }
        });
    }

    function activateIndex(element: Element) {
        element.classList.add('is-active');
    }
})();