<template>
  <div class="services">
    <div class="background"></div>
    <div class="service" v-for="service in services" :key="service.name">
      <div class="service__name">{{ service.name }}</div>
      <div class="service__descriptions">
        <div
          class="service__description"
          v-for="(description, index) in service.descriptions"
          :key="index"
        >
          <p
            class="service__description-line"
            v-for="line in description"
            :key="line"
          >
            {{ line }}
          </p>
        </div>
      </div>
      <div class="service__price">{{ service.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prices',
  data() {
    return {
      services: [
        {
          name: 'KRIKŠTYNOS',
          descriptions: [
            [
              '2 val. fotografavimas;',
              'Ceremonija – fotosesija;',
              '70 retušuotų nuotraukų;',
              'Nuotraukos pateikiamos USB laikmenoje;',
              '10 atspausdintų nuotraukų 10x15 formatu;',
              'Nuotraukų paruošimas trunka 2-3 mėn.'
            ],
            [
              '3 val. fotografavimas;',
              'Ceremonija – fotosesija;',
              '90 retušuotų nuotraukų;',
              'Nuotraukos pateikiamos USB laikmenoje;',
              '15 atspausdintų nuotraukų 10x15 formatu;',
              'Nuotraukų paruošimas trunka 2-3 mėn.'
            ]
          ],
          price: 'Kaina nuo 180 eur.'
        },
        {
          name: 'ASMENINĖS FOTOSESIJOS',
          descriptions: [
            [
              'Fotosesijos trukmė iki 1 valandos;',
              '30 retušuotų nuotraukų;',
              '10 spausdintų nuotraukų 10x15 formatu;',
              'Konsultacija telefonu arba el.paštu;',
              'Fotosesija vyks Jūsų arba mano parinktoje vietoje;',
              'Skaitmeninės nuotraukos siunčiamos internetu;',
              'Nuotraukų paruošimas trunka 3-4 savaites.'
            ],
            [
              'Fotosesija + makiažas + šukuosena;  ',
              'Fotosesijos trukmė iki 1 valandos;',
              '30 retušuotų nuotraukų;',
              '10 spausdintų nuotraukų 10x15 formatu;',
              'Konsultacija telefonu arba el.paštu;',
              'Fotosesija vyks Jūsų arba mano parinktoje vietoje;',
              'Skaitmeninės nuotraukos siunčiamos internetu;',
              'Nuotraukų paruošimas trunka 3-4 savaites.'
            ]
          ],
          price: 'Kaina nuo 80 eur.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: var(--text-color-on-bg);
  /* height: 100%; */
  margin: auto;
}

.service {
  padding: 20px;
  max-width: 500px;
  margin: auto 0;
}
.service__name {
  text-align: center;
  padding: 10px;
}
.service__descriptions {
  text-align: left;
  padding: 10px;
}
.service__description {
  padding: 30px 0;
}
.service__price {
  text-align: center;
  padding: 10px;
}
@media only screen and (max-width: 768px) {
  .services {
    flex-direction: column;
    width: auto;
  }
  .service {
    margin: auto;
  }
}
</style>
