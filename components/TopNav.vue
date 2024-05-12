<template>
  <div 
    id="TopNav" 
    class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
  >
    <div 
      :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
      class="flex items-center justify-between w-full px-6 mx-auto"
    >
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute()

    return {
      route
    }
  },
}
</script>