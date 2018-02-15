<template>
  <!-- Main container -->
  <div class="tile is-ancestor">
      <search></search> 
  </div>
  <!-- <div class="tile is-ancestor"> -->
    <!-- <div class="level-right">
      <p class="level-item"><strong>All</strong></p>
      <p class="level-item"><a>Published</a></p>
      <p class="level-item"><a>Drafts</a></p>
      <p class="level-item"><a>Deleted</a></p>
      <p class="level-item"><a class="button is-success">New</a></p>
    </div>
  </div> -->
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
