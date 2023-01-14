<template>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive include="TheHeader">
        <component :is="Component" />
      </keep-alive>

    </router-view>
  </main>
</template>

<style lang="scss">
$clr-main: hsl(192, 93%, 48%);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

html {
  scroll-behavior: smooth;
}

main {
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: top;
}

.btns {
  text-align: center;
  padding: 1rem;
}

.btn {
  color: #000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background: $clr-main;
  box-shadow: 1px 1px 2px #000;

  &-page:hover {
    color: white;
    background: var(--color-dark);
  }

  &-back {
    margin-top: 1rem;
    background: #000;
    color: #fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 10px;

    &:hover {
      background: #fff;
      color: #000;
    }
  }

  &-container {
    padding: 2rem;
    width: 100%;
    text-align: center;
  }

  &-submit {
    background: #fff;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 10px;
    max-width: 100px;

    &:hover {
      background: var(--color-light);
      color: #fff;
    }
  }
}

.header {
  font-size: 2.5rem;
  letter-spacing: -3px;
  font-weight: 800;
  padding: 3rem;
  text-align: center;
  text-transform: uppercase;
}

.loader {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}

.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #000;
}

.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}

.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}

.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}

.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}

.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}

.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}

.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}

.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}

.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}

.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}

.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}

.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}

@keyframes lds-spinner {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>