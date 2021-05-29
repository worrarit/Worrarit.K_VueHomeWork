<template>
  <body>
    <h1>
      <div
        :style="{
          'background-image':
            'url(https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg)',
        }"
      >
        <div class="container">
          <div>
            <router-link :to="{ name: 'Profile' }"
              ><button>Profile</button></router-link
            >
            &nbsp;&nbsp;&nbsp;
            <router-link :to="{ name: 'Contact' }">
              <button>Contact</button></router-link
            >
          </div>
        </div>
      </div>
    </h1>
  </body>
</template>

<style scoped>
h1 {
  font-size: 3em;
  text-align: center;
}
body {
  margin: 280px 50px 250px 50px;
}
button {
  margin: 20px 20px 20px 20px;
  width: 1000px;
  height: 100px;
  font-size: 2cm;
  color: rgb(6, 43, 100);
}
</style>