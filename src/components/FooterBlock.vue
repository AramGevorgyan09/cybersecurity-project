<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="content">
      <div>
        <p>Կապ Մեզ Հետ</p>

        <ul>
          <li>+374-77-889900</li>
          <li>+374-10-398920</li>
          <li>cybersecurity.project@school.com</li>
        </ul>
      </div>

      <div>
        <p>Հասցե</p>

        <ul>
          <li><a href="https://google.com/maps/place/Средняя+Школа+№94/data=!4m2!3m1!1s0x0:0x128b002ed31fae48?sa=X&ved=1t:2428&ictx=111" target="_blank">Երևան, Բաշինջաղյան փող., 100 շենք</a></li>
        </ul>
      </div>

      <div class="end">
        &copy; Կիբեռանվտանգության Հիմունքներ 2025:<br>
        Տվյալ կայքում առկա նյութերի ճշգրտությունը չի երաշխավորվում։
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #eee;
  border-top: 2px solid #444;
  padding: var(--main-distance);
  width: 100%;
  display: grid;
  justify-items: center;
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--main-distance);
}

p {
  font-size: 20px;
  font-weight: 700;
}

ul {
  margin: 5px 0 0 30px;
}

a {
  color: var(--text-color);
}

a:hover {
  color: var(--main-color);
}

.end {
  grid-column: 1 / 3;
  color: #888;
  text-align: center;
  padding-top: 5px;
  border-top: 1px solid #888;
}

.dark footer {
  background-color: #000;
  border-color: var(--main-color);
}

@media screen and (max-width: 767px) {
  footer {
    justify-items: unset;
  }

  .content {
    grid-template-columns: unset;
  }

  ul {
    margin-left: 25px;
  }

  .end {
    grid-column: unset;
  }
}
</style>
