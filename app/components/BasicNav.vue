<template>
  <div flex="~ gap-3 items-center" absolute left-5 top-5>
    <NuxtLink to="/" class="@hover:(op100)" ml--0.5 rounded-full op50 transition>
      <div i-carbon:boolean text-2xl />
    </NuxtLink>
    <div flex="~ col">
      <div text-xl>
        {{ $t("appname") }}
      </div>
    </div>
  </div>
</template>
