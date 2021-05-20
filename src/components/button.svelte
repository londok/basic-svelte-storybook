<script>
  import { onMount } from "svelte";
  import { type } from "../constants";
  export let data = {
    title: null,
    type: null,
    click: null,
    disabled: false,
    loading: false,
  };
  $: onClick = data.loading || data.disabled ? null : data.click;
  $: isDisabled = data.disabled === true;
  $: isLoading = data.loading === true;
  let title;
  let style;
  onMount(async () => {
    title = (await data.title) ? data.title : "";
    style = await `button ${data.type ? data.type : type.primary}`;
  });

</script>

<button
  class={style}
  disabled={isDisabled}
  on:click={onClick}
  data-testid="button-tid"
>
  {#if !isLoading}{title}{:else}Loading...{/if}
</button>

<style>
  .button {
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 500px;
    margin: 16px auto;
    width: 100px;
    cursor: pointer;
    outline: none;
    display: block;
    padding: 13px 10px;
    text-align: center;
    box-sizing: border-box;
  }
  button:disabled {
    color: #e1e1ed !important;
    background: #9ca4ac !important;
    pointer-events: none !important;
  }
  button.disabled {
    color: #e1e1ed !important;
    background: #9ca4ac !important;
    pointer-events: none !important;
  }
  .button.primary {
    background: red;
    border: 1px solid white;
    color: white;
  }
  .button.secondary {
    background: white;
    border: 1px solid red;
    color: red;
  }
  .button.transparent {
    background: transparent;
    border: none;
    color: red;
  }

</style>
