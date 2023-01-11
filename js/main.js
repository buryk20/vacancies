window.onload = function () {
    const btnNext = document.querySelector('[data-next]');
    const itemWrp = document.querySelector('[data-item-wrp]')
    let cur = 0;

    btnNext.addEventListener('click', () => {
        console.log('dc');
        cur += 1;
        window.getComputedStyle(itemWrp).getPropertyValue('--transform');
        itemWrp.style.setProperty('--transform', (-cur * 150) + 'px')
    })
}