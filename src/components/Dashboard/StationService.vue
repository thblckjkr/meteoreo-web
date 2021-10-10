<template>
  <div class="row">
                     <div class="col-md-6">
                        <h4>{{service.name}}</h4>
                     </div>
                     <div class="col-md-6">
                        <div class="progress progress-xs">
                           <div class="progress-bar progress-bar-danger" :style="{width: service.status + '%'}"></div>
                        </div>
                     </div>
                  </div>
</template>


<script>
export default {
  name: 'StationService',
  props: ['service'],
//   data() {
//     return {
//       service: {
//         name: '',
//         status: 0
//       }
//     }
//   },
//   created() {
//     this.service = this.service;
//   }
}
</script>