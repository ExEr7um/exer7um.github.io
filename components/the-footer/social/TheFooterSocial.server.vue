<script setup lang="ts">
import type { SocialCard } from "./TheFooterSocialCard.server.vue"

/** Список социальных сетей */
const social = [
  {
    icon: "simple-icons:github",
    url: "https://github.com/ExEr7um",
  },
  {
    icon: "icon-park:telegram",
    url: "https://t.me/exer7um",
  },
  {
    icon: "heroicons:at-symbol",
    url: "mailto:work@exer7um.com",
  },
] as const satisfies SocialCard[]
</script>

<template>
  <div class="flex gap-x-4">
    <TheFooterSocialCard
      v-for="socialCard in social"
      :key="socialCard.url"
      :social-card
    />
  </div>
</template>
