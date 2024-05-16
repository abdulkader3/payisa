let numbergona = document.querySelectorAll('.numbergona')

let cool = Array.from(numbergona)


cool.map((hot) => {
    let i = 0

    let whatEver = () => {
        i++
        hot.innerHTML = i
        if (i == hot.dataset.maramari) {
            clearInterval(tham)
        }

    }


    let tham = setInterval(() => {
        whatEver()
    }, 0.1 / hot.dataset.maramari)
})