<script>
  import '../app.css';

  import { config } from '@fortawesome/fontawesome-svg-core';
  import '@fortawesome/fontawesome-svg-core/styles.css';

  config.autoAddCss = false;
</script>

<div class="py-3">
  <div class="mx-auto max-w-5xl sm:px-6 lg:px-8">
    <slot />
  </div>
</div>
