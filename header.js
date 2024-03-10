document.addEventListener('DOMContentLoaded', function() {
    var navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html"><img src="./img/logo.png" alt="Логотип"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/offerstallinn.html">Туры из Таллинна</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/offersriga.html">Туры из Риги</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="recommendhotels.html">Рекомендуемые отели</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="achievements.html">Наши достижения</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="touroperators.html">Туроператоры</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> `;
  document.body.insertAdjacentHTML('afterbegin', navbar);
});

