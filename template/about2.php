<section class="about">
    <div class="container">
        <div class="about__container">
            <div class="about__left">
                <div class="about__text-container">
                    <h2>Расскажем о героях твоего района</h2>
                    <p>Активисты Центра развития уверены, что в каждом округе и даже районе Москвы можно найти людей, которые всем сердцем радеют за свой дом, двор, район и город.
                        Людей, которые создают историю уже сегодня. Людей, которые любят то, чем занимаются и созидают.
                        Людей, которых можно смело назвать «Герой района»!
                        <br><br>
                        Новые истории «Героев моего района» будут выходить еженедельно. Следите за обновлениями на карте.
                    </p>

                </div>
            </div>
            <div class="about__slider">
                
                <!-- <div class="about__right">

                    <div class="about__right-dinam">
                        <ul class="goup">
                            <li>
                                <img src="/src/img/hero/1.png" alt="">
                            </li>
                            <li>
                                <img src="/src/img/hero/3.png" alt="">
                            </li>
                            

                        </ul>
                    </div>
                    <div class="about__right-dinam">
                        <ul class="godown">
                            <li>
                                <img src="/src/img/hero/2.png" alt="">
                            </li>
                            <li>
                                <img src="/src/img/hero/4.png" alt="">
                            </li>


                        </ul>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <div class="box">
                    <div class="element">
                        <div class="items">
                            <div class="item">
                                <img src="/src/img/hero/1.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/2.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/3.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/4.png" alt="">
                            </div>
                        </div>
                        <div class="items">
                            <div class="item">
                                <img src="/src/img/hero/1.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/2.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/3.png" alt="">
                            </div>
                            <div class="item">
                                <img src="/src/img/hero/4.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
</section>
<style>
    .box {
  max-height: 500px;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  width: 100%;
}
    @keyframes moveSlideshow {
  100% {
    transform: translateY(50%);
  }
}

.element {
  transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */
  position: relative;
  overflow: hidden;
  animation-name: moveSlideshow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 10s;
  animation-direction: normal;
  animation-delay: 0s;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: max-content;
  flex-shrink: 0;
  width: 100%;
}

.items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
}

.item {
  /* height: 120px;
  width: 220px; */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
</style>