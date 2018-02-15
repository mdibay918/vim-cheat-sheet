<template>
  <!-- Main container -->
  <div class="tile is-ancestor">
    <search></search> 
  </div>
</template>

<script>
import search from '@/components/Search'
export default {
  name: 'Cheat', 
  components: {
    search : search
  }
}
</script>
