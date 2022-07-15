function showTask(taskTitle, day) {
    return `The day ${day} tasks are: ${taskTitle}`
}

function selectTool(toolTitle) {
    return `Selected tool: ${toolTitle}`;
}

function sendGreetingsMessage(memberName, greetings, greetingsReceiverName) {
    return `The ${memberName} member says: "${greetings}, ${greetingsReceiverName}"`;
}

export {
    showTask,
    selectTool,
    sendGreetingsMessage,
};