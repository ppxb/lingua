<template>
  <div p4>
    <FloatingActions />
    <div flex="~ col gap-2 items-center" pb-10 pt-25 lt-md="pt-10 pb-5">
      <div i-carbon:boolean text-5xl op75 />
      <div text-4xl font-mono>
        {{ $t("appname") }}
      </div>
      <div mt5 text-center op75>
        {{ $t("intro.title") }}
      </div>
      <div text-center op50>
        {{ $t("intro.description") }}
      </div>

      <div p5 flex="~ col gap-2 items-center justify-center">
        <div
          border="~ dashed #888 rounded-2"
          flex="~ gap-2 items-center"
          relative px4 py2 op50
          class="@hover:(border-primary bg-primary/5 text-primary op100)"
        >
          <div i-uil-file-plus-alt />
          <span>{{ $t("import.importFile") }}</span>
          <input
            type="file"
            multiple
            absolute inset-0 h-full w-full cursor-pointer opacity-0
          >
        </div>
        <div flex="~ justify-center wrap">
          <NuxtLink to="/play#demo=1" op50 class="@hover:(color-primary underline op100)">
            {{ $t("demo.title") }}
          </NuxtLink>
          <span mx2 op50 lt-md="hidden"> · </span>
          <NuxtLink to="/create" op50 class="@hover:(color-primary underline op100)" lt-md="hidden">
            {{ $t("lyrics.createLyrics") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div flex="~ gap-1 items-center" mxa mb2 max-w-full w-max rounded-full bg-orange:10 px3 py1 text-wrap text-sm text-orange>
      <div i-uil-flask flex-none text-base />
      {{ $t("messages.wip") }}
    </div>
    <div flex="~ justify-center wrap">
      <NuxtLink to="/about" op50 class="@hover:(color-primary underline op100)">
        {{ $t("footer.about") }}
      </NuxtLink>
      <span mx2 op50> · </span>
      <a href="https://github.com/maru-re/maru" target="_blank" op50 class="@hover:(color-primary underline op100)">
        {{ $t("footer.contact.github") }}
      </a>
    </div>
  </div>
</template>
