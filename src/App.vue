<script setup lang="ts">
import HeaderBlock from './components/HeaderBlock.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>

<template>
  <HeaderBlock />

  <main>
    <section id="intro">
      <p class="title">Ի՞նչ Է Կիբերանվտանգությունը</p>

      <img src="@/assets/images/intro1.jpeg" alt="Intro">
      <p class="text">Աշխարհը, որում ապրում ենք այսօր, ձևավորվել է լույսի և թվերի խաչմերուկում։ Մարդը, ով երբևէ կառուցում էր քարից և մետաղից, այժմ կառուցում է տեղեկատվությունից։ Ամեն րոպե ստեղծվում են միլիարդավոր տվյալներ, որոնցից յուրաքանչյուրը կարող է դառնալ գիտելիք, գաղտնիք կամ զենք։ Այս նոր իրականությունը՝ թվային քաղաքակրթությունը, չի ենթարկվում դասական սահմաններին։ Այն չունի աշխարհագրություն, չունի լեզվական կամ քաղաքական սահմաններ։ Այն տարածվում է մեր գիտակցության պես՝ անտեսանելի, բայց խորապես ազդեցիկ։ Եվ հենց այդ անտեսանելիության մեջ ծնվում է վտանգը։</p>

      <p class="text second-text">Աշխարհը, որը մենք կառուցել ենք, դարձել է ավելի խելացի, քան մենք ինքներս։ Համակարգերը սովորում են մեզնից արագ, որոշում են մեզնից ճշգրիտ, բայց նրանց մեջ բացակայում է մի բան՝ մտածելու բարոյական պատճառը։ Տեխնոլոգիան կարող է ստեղծել անթիվ հնարավորություններ, բայց դրանցից յուրաքանչյուրը պահանջում է գիտակցություն։ Արդյո՞ք մենք պատրաստ ենք ապրել աշխարհում, որտեղ ամեն բան կարելի է վերահսկել, հետևել, կանխատեսել։ Այս հարցը մեզ վերադարձնում է մարդկային ինքնության հիմքերին։ Թվային քաղաքակրթությունը նոր փորձություն է մարդու էության համար․ արդյո՞ք նա կկարողանա մնալ մարդ, երբ ամեն ինչ թվայնացվում է։</p>
      <img src="@/assets/images/intro2.jpg" alt="Intro">

      <img src="@/assets/images/intro3.webp" alt="Intro">
      <p class="text">Կիբերանվտանգության դերը ապագայում միայն կաճի։ Մասնագիտացված մասնագիտություններ արդեն ստեղծվում են՝ կիբերվերլուծաբաններ, տվյալների պաշտպանության մասնագետներ և էթիկական հաքերներ։ Սա ՏՏ ոլորտի ամենախոստումնալից ոլորտներից մեկն է։ Ամփոփելով՝ կիբերանվտանգությունը պարզապես տեխնոլոգիա չէ, այլ թվային աշխարհում անվտանգ վարքագծի մշակույթ։ Այն օգնում է պաշտպանել մեզ, մեր գաղտնիությունը, մեր տեղեկատվությունը և մեր ապագան։ Յուրաքանչյուր մարդ, նույնիսկ երեխան, կարող է նպաստել անվտանգությանը՝ պարզապես ուշադիր և զգույշ լինելով ինտերնետում։</p>
    </section>

    <section id="learning">
      <p class="title">Ինչպե՞ս Սկսել</p>

      <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sint porro quasi facilis autem ad! Fugiat aliquid voluptatem quidem, eligendi ullam nostrum deserunt? Numquam aperiam aspernatur harum similique id enim dicta perspiciatis consequuntur! Praesentium odio, qui modi voluptate dolorem vitae consequatur impedit doloremque ducimus earum dolor vel molestias deserunt dignissimos atque sequi sunt nobis veniam error illum incidunt! Quam sapiente autem, suscipit rerum voluptatum ex consequatur voluptates enim. Libero, et? Exercitationem, et architecto voluptate provident dolore error iste magnam praesentium tempore! Quos atque exercitationem dolore dicta amet aliquam accusantium corporis laboriosam consequuntur architecto voluptatum, delectus ratione dolores doloremque officia consectetur!</p>
    </section>

    <section id="videos">
      <p class="title">Օգտակար Տեսանյութեր</p>

      <div class="blocks">
        <div>
          <p>Կիբերանվտանգության Հիմունքները․ Ներածություն</p>
          <video src="@/assets/videos/our-intro-am.mp4" controls></video>
        </div>

        <div>
          <p>Основы кибербезопасности: Введение</p>
          <video src="@/assets/videos/our-intro-ru.mp4" controls></video>
        </div>

        <div>
          <p>Cybersecurity Fundamentals: Introduction</p>
          <video src="@/assets/videos/our-intro-en.mp4" controls></video>
        </div>

        <div>
          <p>Everything you NEED to know as Cybersecurity Beginner</p>
          <video src="@/assets/videos/video1.mp4" controls></video>
        </div>

        <div>
          <p>What Is Cyber Security | How It Works? | Cyber Security In 7 Minutes | Cyber Security | Simplilearn</p>
          <video src="@/assets/videos/video2.mp4" controls></video>
        </div>

        <div>
          <p>Cybersecurity for Beginners: Basic Skills</p>
          <video src="@/assets/videos/video3.mp4" controls></video>
        </div>
      </div>
    </section>
  </main>

  <ScrollToTop />

  <FooterBlock />
</template>

<style scoped>
main {
  padding: 0 var(--main-distance) var(--main-distance) var(--main-distance);
}

main section {
  display: grid;
  row-gap: var(--main-distance);
  justify-items: center;
  align-items: center;
}

.title {
  color: var(--main-color);
  font-size: 36px;
  font-weight: 700;
  padding-top: var(--main-distance);
  text-align: center;
}

#intro {
  grid-template-columns: repeat(2, 1fr);
  gap: var(--main-distance);
}

#intro .title {
  grid-column: 1 / 3;
}

#intro img {
  width: 100%;
  border-radius: 40px;
  border: 2px solid #fff;
}

.text {
  text-indent: 20px;
  font-size: 18px;
}

.blocks {
  width: 100%;
  display: flex;
  gap: calc(var(--main-distance) / 2);
  justify-self: left;
  overflow-x: auto;
  padding: 0 8px;
}

.blocks::-webkit-scrollbar {
  background-color: transparent;
  height: 20px;
}

.blocks::-webkit-scrollbar-thumb {
  background-color: #444;
  border: 8px solid #fff;
}

.blocks div {
  background-color: #eee;
  border: 2px solid #444;
  border-radius: 40px;
  display: grid;
  gap: 20px;
  align-items: end;
  padding: calc(var(--main-distance) / 2) var(--main-distance);
}

.blocks p {
  font-size: 20px;
  font-weight: 700;
}

video {
  width: 600px;
}

.dark .blocks div {
  background-color: transparent;
  border-color: var(--main-color);
}

.dark .blocks::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border-color: #080808;
}

@media screen and (max-width: 1440px) {
  video {
    width: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 32px;
  }

  .text {
    font-size: 14px;
  }
}

@media screen and (max-width: 767px) {
  .title {
    font-size: 28px;
  }

  #intro {
    grid-template-columns: unset;
  }

  #intro .title {
    grid-column: unset;
  }

  #intro .second-text {
    grid-row: 5 / 6;
  }

  #intro img,
  .blocks div {
    border-radius: 30px;
  }

  .blocks div {
    gap: 10px;
  }

  .blocks div p {
    font-size: 16px;
  }

  video {
    width: 300px;
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 24px;
  }
}
</style>
