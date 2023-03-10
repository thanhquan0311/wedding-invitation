<template>
  <section class="w-full bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection title="Phong bì kỹ thuật số" subtitle="Lời chúc của bạn là một món quà có ý nghĩa rất lớn đối với chúng tôi và nếu việc tặng quà là thể hiện lòng biết ơn của bạn, bạn có thể tặng quà không dùng tiền mặt"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in" class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img :src="wallet.thumb" :alt="wallet.platform" class="w-5/12 mx-auto mb-3">
            <p class="text-xs">Vui lòng chuyển khoản qua {{ wallet.prefix }} chi nhánh ... {{ wallet.name }}</p>
            <Clipboard :content="wallet.number"></Clipboard>
          </div>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/couple-female.jpg',
    platform: 'Mai',
    name: 'NGUYEN XUAN MAI',
    number: '193439958',
    prefix: 'VPBank'
  },
  {
    thumb: 'wallets/couple-male.jpg',
    platform: 'Quan',
    name: 'HUYNH NGUYEN THANH QUAN',
    number: '168704070024911',
    prefix: 'HDBank'
  }
]
</script>
