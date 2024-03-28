<script setup lang="ts">
/** Социальная сеть */
export interface SocialCard {
  /** Иконка социальной сети */
  icon: string
  /** `URL` социальной сети */
  url: string
}

defineProps<{
  /** Социальная сеть */
  socialCard: SocialCard
}>()
</script>

<template>
  <NuxtLink
    class="tag flex size-12 items-center justify-center rounded-lg transition-colors hover:bg-white hover:dark:bg-neutral-700"
    external
    target="_blank"
    :to="socialCard.url"
  >
    <Icon class="fill-current text-neutral-400" :name="socialCard.icon" />
  </NuxtLink>
</template>
