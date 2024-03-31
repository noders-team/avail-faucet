<script lang="ts">

  import Chevron from "./icons/Chevron.svelte";

  export let currentNetwork: NetworkData;
</script>


<style lang="postcss">
  .chain-dropdown {
    @apply input w-full text-sm text-white flex flex-col justify-center items-center cursor-pointer;
    background-color: #191924;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .form-label {
    @apply label-text text-white;
    font-weight: 500;
    font-size: 16px;
  }

  .selected {
    @apply bg-primary;
  }
</style>
