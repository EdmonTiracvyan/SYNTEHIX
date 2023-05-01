const nameSite = document.querySelector('main .new-era-studio .studio-content .name-site');
const sphere = document.querySelectorAll('main .formula-for-the-perfect-result .formula-content .sphere-animation .sphere')
const stages = document.querySelectorAll('main .stages-of-work .stages-content .stages-item')
let boolHover = true;
let setDeg;
let setDegTwo;
let linearDeg = -45;
setInterval(() => {
    let b = setTimeout(() => {
        nameSite.style.fontSize = '38px'
        let w = setTimeout(() => nameSite.style.fontSize = '32px', 2000)
    }, 500)
}, 5000)
setInterval(() => {
    sphere[1].style = 'width: 338px; height: 340px; transform: matrix(1, 0, 0, -1, 0, 0); left: 170px; top: 10px;'
    sphere[0].style = `width: 94px; height: 94px; left: 551px; top: 40px;`
    sphere[3].style = 'width: 118px; height: 119px; top: 310px; left: 200px;'
    sphere[2].style = 'left: 50px'
    setTimeout(() => {
        sphere[2].style = 'top: 210px; left: 70px'
        sphere[3].style.left = '290px'
        sphere[3].style.top = '280px'
        sphere[0].style.left = '450px'
        setTimeout(() => {
            sphere[2].style = 'top: 150px; left: 50px'
            sphere[3].style.left = '200px'
            sphere[3].style.top = '310px'
            sphere[0].style.left = '551px'
            setTimeout(() => {
                sphere.forEach(item => item.removeAttribute('style'))
            }, 2000)
        }, 2000)
    }, 2000)
}, 9000)
stages.forEach(item => {
    item.onmouseenter = () => {
        clearInterval(setDegTwo)
        if (boolHover) {
            boolHover = false
            setDeg = setInterval(() => {
                linearDeg <= -235 ? clearInterval(setDeg) : linearDeg -= 2;
                item.style.background = `linear-gradient(${linearDeg}deg, #442BDE 0%, #4F26CC 5%, #6A30B4 10%, #944490 15%, #3F1AA7 20%, #fff 40% )`
            }, 1)
        }
    }
    item.onmouseleave = () => {
        boolHover = true
        if (boolHover) {
            setDegTwo = setInterval(() => {
                linearDeg >= -45 ? clearInterval(setDeg) : linearDeg += 2;
                item.style.background = `linear-gradient(${linearDeg}deg, #442BDE 0%, #4F26CC 5%, #6A30B4 10%, #944490 15%, #3F1AA7 20%, #fff 40% )`
            })
        }
        clearInterval(setDeg)
    }
})
