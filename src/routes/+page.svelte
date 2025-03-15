<script>
  const portfolioProjects = [
    {
      name: 'League-FM',
      image: '/projects/leaguefm.png',
      description:
        'Van november 2023 tot en met maart 2025 heb ik de website van League-FM ontwikkeld en onderhouden.'
    }
  ];
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-xl normal-case">🟢 rbnu.nl </a>
  </div>
  <div class="navbar-end">
    <a href="mailto:ruben@uijtdewilligenbv.nl" class="btn bg-[#23912d] text-white">Contact</a>
  </div>
</div>

<div class="hero py-6">
  <div class="hero-content flex w-full flex-col justify-between md:flex-row">
    <div>
      <h1 class="text-6xl font-bold">
        Hi, ik ben <span
          class="bg-clip-textfont-bold inline-block bg-gradient-to-r from-[#44ae4e] to-[#23912d] p-4 text-white"
          >Ruben</span
        >
      </h1>
      <h3
        class="mt-4 inline-block bg-gradient-to-r from-[#44ae4e] to-[#23912d] bg-clip-text text-2xl font-bold text-transparent"
      >
        <div class="text-black">jouw lokale partner voor:</div>
        web development | hosting | e-mail | SaaS
      </h3>
    </div>

    <img src="/me.png" alt="Me" class="max-h-72" />
  </div>
</div>

<div class="divider"></div>

<div>
  <h3 class="text-center text-3xl font-bold">Portfolio</h3>

  <div class="flex flex-wrap">
    {#each portfolioProjects as project}
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={project.image} alt={project.name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{project.name}</h2>
          <p>
            {project.description}
          </p>
          <div class="card-actions justify-end">
            <button class="btn bg-[#23912d] text-white">Bekijk project</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="divider"></div>

<div
  class="card text-neutral-content mx-6 mt-10 flex flex flex-row flex-col justify-between bg-gradient-to-r from-[#44ae4e] to-[#23912d] p-10 text-white md:mx-0 md:flex-row"
>
  <div>
    <h3 class="text-3xl font-bold">Website laten maken?</h3>
    <p class="mt-3">
      Ik ontwikkel maatwerk websites in de regio's Roosendaal, Ede, Wageningen en Essen.
    </p>
  </div>

  <div class="flex items-center">
    <a href="mailto:ruben@uijtdewilligenbv.nl" class="btn btn-[#093569] mt-2 md:mt-0">
      Stuur me een e-mail!
    </a>
  </div>
</div>

<footer class="footer footer-center text-base-content p-4 pt-16">
  <aside>
    <p>Copyright © 2025-heden<br />Ruben Uijtdewilligen</p>
  </aside>
</footer>
