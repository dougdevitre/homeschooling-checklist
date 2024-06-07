document.getElementById('saveTasksBtn').addEventListener('click', function() {
    const taskFields = document.querySelectorAll('.task-field');
    const tableBody = document.querySelector('#taskTable tbody');
    tableBody.innerHTML = ''; // Clear existing tasks

    taskFields.forEach((taskField) => {
        const taskInput = taskField.querySelector('input[type="text"]');
        const dateInput = taskField.querySelector('input[type="date"]');
        
        if (taskInput.value.trim() || dateInput.value) {
            const row = document.createElement('tr');
            const taskCell = document.createElement('td');
            const dateCell = document.createElement('td');
            const statusCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            taskCell.textContent = taskInput.value.trim();
            dateCell.textContent = dateInput.value;
            statusCell.appendChild(checkbox);
            
            row.appendChild(taskCell);
            row.appendChild(dateCell);
            row.appendChild(statusCell);
            tableBody.appendChild(row);
        }
    });
});

document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});