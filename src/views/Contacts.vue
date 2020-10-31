<template>
  <div class="contacts">
    <div class="background"></div>
    <div class=" contacts__group">
      <h1 class="contacts__group-header">Kontaktai</h1>
      <ul class="contacts__list">
        <li>
          Socialiniai tinklai:
          <a
            href="https://www.facebook.com/Fotomenininke/?eid=ARCGyFrq2MSw6CgIkr0W_yfVxJ0amKHiVSXvLleETJlB8fDNleJMCFgpdiQII7GKbKAFFeKToFRZxdxa"
            target="_blank"
            class="contacts__social-icon"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            href="https://www.instagram.com/ulvikiene_photography/"
            target="_blank"
            class="contacts__social-icon"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>Tel.: +370 679 63352</li>
        <li>El. paštas: simaulvikiene@gmail.com</li>
      </ul>
    </div>
    <div class="contacts__group">
      <h1 class="contacts__group-header">Susisiekite</h1>
      <send-mail></send-mail>
    </div>
  </div>
</template>

<script>
import SendMail from '../components/SendMail'
export default {
  name: 'Contacts',
  components: { SendMail }
}
</script>

<style scoped>
.contacts {
  display: flex;
  margin: auto;
  font-size: 24px;
  color: var(--text-color-on-bg);
  height: 100%;
  width: fit-content;
}
.contacts__list {
  text-align: left;
  width: fit-content;
  margin: auto;
}
.contacts__group {
  margin: auto 20px;
}
.contacts__group-header {
  text-align: center;
  font-size: 28px;
  /* font-weight: bold; */
}
.contacts__social-icon {
  padding: 5px;
}
@media only screen and (max-width: 768px) {
  .contacts {
    flex-direction: column;
  }
}
</style>
