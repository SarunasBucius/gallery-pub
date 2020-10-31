<template>
  <form class="form--mobile form" @submit.prevent="sendEmail">
    <div class="form__input-row">
      <div class="field form__input--half-width">
        <label class="label">Vardas</label>
        <div class="control">
          <input class="input" name="name" type="text" required />
        </div>
      </div>
      <div class="field form__input--half-width">
        <label class="label">El. paštas</label>
        <div class="control">
          <input class="input" name="email" type="email" required />
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Žinutė</label>
      <div class="control">
        <textarea class="textarea" name="message" required></textarea>
      </div>
    </div>
    <input type="submit" class="button" value="Siųsti" />
    <p v-if="sendStatus" class="form__success-message">{{ sendStatus }}</p>
  </form>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'SendMail',
  data() {
    return {
      sendStatus: null
    }
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          process.env.VUE_APP_MAIL_ACCESS_TOKEN,
          'default',
          e.target,
          process.env.VUE_APP_MAIL_USER_ID
        )
        .then(res => {
          if (res.status === 200) {
            this.sendStatus = 'Žinutė sėkmingai išsiųsta.'
          }
          document.getElementsByName('name')[0].value = ''
          document.getElementsByName('email')[0].value = ''
          document.getElementsByName('message')[0].value = ''
        })
    }
  }
}
</script>

<style scoped>
.form__success-message {
  text-align: center;
  color: lawngreen;
  margin-top: 10px;
}
.input {
  opacity: 0.5;
}
.button {
  background-color: rgba(255, 255, 255, 0.5);
}
.textarea {
  opacity: 0.5;
}
label.label {
  color: var(--text-color-on-bg);
}
@media screen and (max-width: 768px) {
  .form--mobile {
    padding: 20px;
    /*min-width: 300px;*/
    max-width: 400px;
    margin: auto;
    color: var(--text-color-on-bg);
  }
}
@media screen and (min-width: 768px) {
  .form {
    color: var(--text-color-on-bg);
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  .form__input-row {
    display: flex;
    justify-content: space-between;
  }
  .form__input--half-width {
    width: 45%;
    /*padding-right: 10%;*/
    display: inline-block;
  }
}
</style>
