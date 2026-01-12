<script setup>

</script>

<template>
  <nav class="user-actions">
    <ul class="d-flex m-0 p-0">
      <li>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.74 13.34L19.4 19M15.4 8.2C15.4 12.1764 12.1764 15.4 8.2 15.4C4.22355 15.4 1 12.1764 1 8.2C1 4.22355 4.22355 1 8.2 1C12.1764 1 15.4 4.22355 15.4 8.2Z"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </li>
      <li>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
             xmlns="http://www.w3.org/2000/svg" class="user-area">
          <path
            d="M8.9092 1C14.7781 1 14.7781 9.94193 8.9092 9.94193C3.04027 9.94193 3.04027 1 8.9092 1ZM1 18.9244C1.62971 8.92459 16.5917 8.87421 17.171 18.9496L16.2391 19C15.7353 10.1085 2.48612 10.1336 1.95716 18.9748L1.02519 18.9244H1ZM8.9092 1.95716C4.27451 1.95716 4.27451 8.98476 8.9092 8.98476C13.5439 8.98476 13.5439 1.95716 8.9092 1.95716Z"
            stroke-width="0.5"></path>
        </svg>
      </li>
      <li>
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.9488 4.45454H3.05125C2.86977 4.45554 2.69482 4.53389 2.55909 4.67496C2.42337 4.81602 2.33615 5.01013 2.31375 5.22102L1.00468 19.0392C0.993041 19.1596 1.00316 19.2815 1.03439 19.397C1.06562 19.5126 1.11726 19.6191 1.18594 19.7097C1.25463 19.8003 1.33883 19.873 1.43308 19.923C1.52732 19.973 1.6295 19.9993 1.73297 20H19.267C19.3705 19.9993 19.4727 19.973 19.5669 19.923C19.6612 19.873 19.7454 19.8003 19.8141 19.7097C19.8827 19.6191 19.9344 19.5126 19.9656 19.397C19.9968 19.2815 20.007 19.1596 19.9953 19.0392L18.6863 5.22102C18.6639 5.01013 18.5766 4.81602 18.4409 4.67496C18.3052 4.53389 18.1302 4.45554 17.9488 4.45454V4.45454Z"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M6.94299 7.33333V4.51852C6.94299 3.58535 7.29684 2.6904 7.9267 2.03055C8.55656 1.3707 9.41083 1 10.3016 1C11.1923 1 12.0466 1.3707 12.6765 2.03055C13.3063 2.6904 13.6602 3.58535 13.6602 4.51852V7.33333"
            stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.user-actions ul li {
  list-style-type: none;
  color: $color-text-base;
  padding-left: 22px;
}

.user-actions ul li svg {
  stroke: $color-text-base;
}

.user-actions ul li svg.user-area {
  fill: $color-text-base;
}
</style>
