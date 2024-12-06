<script lang="ts">
    import { onMount } from 'svelte';

    let data = {};

    const url = "/api/data";
    // const url = "http://localhost:3000/data";

    const getData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            
            data = json;
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    onMount(() => {
        getData();
    });
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
