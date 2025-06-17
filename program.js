const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  document.querySelectorAll('.hero-card').forEach(card => {
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = '👍 <span class="like-count">0</span>';

    const dislikeBtn = document.createElement('button');
    dislikeBtn.className = 'dislike-btn';
    dislikeBtn.innerHTML = '👎 <span class="dislike-count">0</span>';

    const container = document.createElement('div');
    container.className = 'like-dislike';
    container.appendChild(likeBtn);
    container.appendChild(dislikeBtn);
    card.appendChild(container);

    let likes = 0;
    let dislikes = 0;

    likeBtn.addEventListener('click', () => {
      likes++;
      likeBtn.querySelector('.like-count').textContent = likes;
    });

    dislikeBtn.addEventListener('click', () => {
      dislikes++;
      dislikeBtn.querySelector('.dislike-count').textContent = dislikes;
    });
  });