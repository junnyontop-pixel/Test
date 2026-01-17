const addBtn = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput"); // 입력창 참조 추가
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    // 1. li 생성
    const li = document.createElement("li");

    // 2. 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // 3. 텍스트 추가
    const textNode = document.createTextNode(" " + taskValue);

    // 4. 조립: li 안에 체크박스와 텍스트를 넣음
    li.appendChild(checkbox);
    li.appendChild(textNode);

    // 5. 완성된 li를 전체 리스트(ul)에 추가
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
});