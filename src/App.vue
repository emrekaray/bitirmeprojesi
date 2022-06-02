<template>
  <div id="router">
    <router-view />
  
  </div>



</template>

<script>
import Meeting from './components/meeting.vue'
import pastMeeting from './components/pastMeetings.vue'
import upcomingMeeting from './components/upcomingMeetings.vue'
export default {

  components: {
    Meeting,
    pastMeeting,
    upcomingMeeting
},

}
</script>
<style scoped>
router-link {
  text-decoration: none;
}
</style>
