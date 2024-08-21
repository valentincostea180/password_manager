document.addEventListener('DOMContentLoaded', function()
{

    const saveBtn = document.getElementById('saveBtn');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const statusDiv = document.getElementById('status');

    saveBtn.addEventListener('click', function()
    {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      chrome.storage.sync.set({ 'username': username, 'password': password }, function()
      {
        statusDiv.textContent = 'Never again!';
      });
    });

    retrieveBtn.addEventListener('click', function()
    {
        chrome.storage.sync.get(['username', 'password'], function(result)
        {
            if (result.username && result.password)
            {
                statusDiv.textContent = `Username: ${result.username}, Password: ${result.password}`;
            }
            else
            {
                statusDiv.textContent = 'Add some creditentials first.';
            }
        });
    });
});
