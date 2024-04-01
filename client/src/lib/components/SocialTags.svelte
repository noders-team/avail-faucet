<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import socialImage from "$lib/assets/avail_dark.svg";
</script>

<MetaTags
  title="Avail Faucet"
  description="A fast and reliable Avail testnet faucet for blockchain developers."
  openGraph={{
    images: [{ url: socialImage }],
  }}
  twitter={{
    title: "Avail Faucet",
    description: "A fast and reliable Avail testnet faucet for blockchain developers.",
    image: socialImage,
    imageAlt: "Avail Faucet Website",
  }}
/>
