$(document).ready(function () {
    let hour = $('.hour')
    let minute = $('.minute')
    let second = $('.second')

    function rotate() {
        let date = new Date()
        let seconds = date.getSeconds()-45
        let minutes=date.getMinutes()-45
        let hours=date.getHours()-9

        second.css('transform',`rotate(${((seconds)*6)}deg)`)
        minute.css('transform',`rotate(${((minutes)*6)}deg)`)
        hour.css('transform',`rotate(${((hours)*30)}deg)`)
    }

    setInterval(rotate,1000)
})