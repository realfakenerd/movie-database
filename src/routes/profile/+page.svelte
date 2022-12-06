<script lang="ts">
    import {page} from '$app/stores';

    const user = $page.data.user;
</script>

<div class="hero min-h-screen">
    <div class="hero-content">
        <h1>{user.name}</h1>
    </div>
</div>