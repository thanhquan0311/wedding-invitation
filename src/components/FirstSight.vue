<template>
  <section class="w-full mb-12">
    <wave class="fill-gray-800"></wave>
    <section class="container-section">
      <HeaderSection title="Pandangan Pertama"></HeaderSection>
      <Card title="Kisah kami berawal dari">
        <template v-slot:body>
          <p class="text-sm p-6 text-justify">
            Mở bài
            Thân bài
            Gặp nhau, thời gian, địa điểm, ...
            <br><br>
            Kết bài
          </p>
        </template>
        <template v-slot:footer>
          <img src="@/assets/images/couples.png" class="w-full" alt="">
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
