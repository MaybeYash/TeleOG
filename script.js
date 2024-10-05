document.getElementById('startButton').addEventListener('click', function () {
  document.getElementById('welcomeScreen').classList.add('hidden');
  document.getElementById('progressScreen').classList.remove('hidden');

  // Simulate progress checks
  setTimeout(() => document.getElementById('progress1').style.width = '100%', 500);
  setTimeout(() => document.getElementById('progress2').style.width = '100%', 2000);
  setTimeout(() => document.getElementById('progress3').style.width = '100%', 4000);
  setTimeout(() => document.getElementById('progress4').style.width = '100%', 6000);

  setTimeout(() => {
    document.getElementById('progressScreen').classList.add('hidden');
    document.getElementById('finalScreen').classList.remove('hidden');
    // Calculate years since the user joined (You can change this logic)
    const joinDate = new Date('2019-10-05'); // Change to actual join date
    const currentDate = new Date();
    const yearsAgo = currentDate.getFullYear() - joinDate.getFullYear();
    document.getElementById('joinYear').innerText = yearsAgo;
  }, 8000);
});
