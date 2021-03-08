<script>
  import Button from "./components/button.svelte";
  export let data = {
    title: "Button",
    type: null,
    click: null,
    disabled: false,
    loading: false,
  };
</script>

<p style="text-align: center;">This is Button Page</p>
<div style="align: center" data-testid="app-tid">
  <Button {data} />
</div>
