function toggleDarkLightMode() {
    const darkLightButton = document.getElementById('dark-light')
    const darkLightIcon = darkLightButton.querySelector('.material-icons')
    const addTaskButton = document.getElementById('addTaskButton')
    document.body.classList.toggle('dark-mode')
    darkLightButton.classList.toggle('dark-mode')
    addTaskButton.classList.toggle('dark-mode')
    if(darkLightIcon.innerText === 'dark_mode'){
        darkLightIcon.innerText = 'light_mode'
    } else {
        darkLightIcon.innerText = 'dark_mode'
    }
}
//버그 수정은 AI 도움좀 받음
