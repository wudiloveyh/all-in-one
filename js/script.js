document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const tools = document.querySelectorAll('.tool');

    tools.forEach(tool => {
        const toolName = tool.textContent.toLowerCase();
        if (toolName.includes(query)) {
            tool.style.display = 'block';
            tool.classList.add('selected');
        } else {
            tool.style.display = 'none';
            tool.classList.remove('selected');
        }
    });

    // 如果输入框为空，移除所有工具的 selected 样式
    if (!query) {
        tools.forEach(tool => {
            tool.classList.remove('selected');
            tool.style.display = 'block'; // 显示所有工具
        });
    }
});