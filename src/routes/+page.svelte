<script>
  const portfolioProjects = [
    {
      name: 'AidCone',
      image: '/projects/aidcone.png',
      description:
        'Mijn SaaS project AidCone is administratieve software voor EHBO verenigingen met een ingebouwd ledenportaal, zodat alles op 1 plek terug te vinden is.',
      link: 'https://aidcone.nl'
    },

    {
      name: 'League-FM',
      image: '/projects/leaguefm.png',
      description:
        'Van november 2023 tot en met maart 2025 heb ik de website van League-FM ontwikkeld en onderhouden.',
      link: 'https://league-fm.nl'
    },

    {
      name: 'Semper Florens',
      image: '/projects/semperflorens.png',
      description:
        'Ik heb de website voor Wageningse studievereniging Semper Florens en hun ledensysteem MyPlant ontwikkeld en onderhoud deze actief.',
      link: 'https://semper-florens.nl'
    },

    {
      name: 'Belgische Motoren Museum',
      image: '/projects/belgischemotorenmuseum.png',
      description:
        'Ik heb de website voor het Belgische Motoren Museum te Kalmthout ontwikkeld. Het doel was om een rustige, elegante website te bouwen.',
      link: 'https://belgischemotorenmuseum.com'
    },

    {
      name: 'EHBO vereniging Roosendaal',
      image: '/projects/ehboverenigingroosendaal.png',
      description:
        'De digitalisering van EHBO vereniging Roosendaal heb ik in een team van 2 uitgevoerd. Hieronder vielen de website, de huisstijl en het ledensysteem dat is uitgegroeid tot mijn huidige SaaS project AidCone.',
      link: 'https://belgischemotorenmuseum.com'
    },

    {
      name: 'Mijn League-FM',
      image: '/projects/mijn-leaguefm.png',
      description:
        "Via deze, door mij vanaf de grond opgebouwde, interactieve omgeving kunnen luisteraars van Mijn League-FM stemmen op toplijsten, meldingen van hun favoriete DJ's ontvangen, punten verzamelen, etc.",
      link: 'https://league-fm.nl/mijn'
    }
  ];
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost px-0 text-xl normal-case">🟢 Ruben Uijtdewilligen </a>
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
        web ontwikkeling | hosting | e-mail | SaaS
      </h3>
    </div>

    <img src="/me.png" alt="Me" class="max-h-72" />
  </div>
</div>

<div class="divider"></div>

<div class="flex flex-col items-center">
  <h3 class="text-center text-3xl font-bold">Portfolio</h3>

  <p>De projecten waar ik het meest trots op ben</p>

  <svg
    data-v-03bb70b6=""
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="-10 0 200 50"
    width="100"
    height="50"
    class="column svg-divider"
  >
    <defs data-v-03bb70b6="">
      <path
        data-v-03bb70b6=""
        d="M183.78 30.64C165.41 30.64 156.22 10.64 137.84 10.64C119.46 10.64 110.27 30.64 91.89 30.64C73.51 30.64 64.32 10.64 45.95 10.64C27.57 10.64 18.38 30.64 0 30.64"
        id="gEK2QeZAN"
      />
    </defs>
    <g data-v-03bb70b6="">
      <g data-v-03bb70b6="">
        <g data-v-03bb70b6="">
          <use
            data-v-03bb70b6=""
            xlink:href="#gEK2QeZAN"
            opacity="1"
            fill="#000000"
            fill-opacity="0"
          />
          <g data-v-03bb70b6="">
            <use
              data-v-03bb70b6=""
              xlink:href="#gEK2QeZAN"
              opacity="1"
              fill-opacity="0"
              stroke="#23912d"
              stroke-width="20"
              stroke-opacity="1"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>

  <div class="mt-8 flex flex-wrap justify-around">
    {#each portfolioProjects as project}
      <div class="card mb-8 w-96 bg-base-100 shadow-xl">
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

  <a href="https://github.com/rubenuijtdewilligen" class="btn btn-ghost"
    >Zie meer op mijn GitHub pagina</a
  >
</div>

<div class="divider"></div>

<div
  class="card mx-6 mt-10 flex flex flex-row flex-col justify-between bg-gradient-to-r from-[#44ae4e] to-[#23912d] p-10 text-neutral-content text-white md:mx-0 md:flex-row"
>
  <div>
    <h3 class="text-3xl font-bold">Website laten maken?</h3>
    <p class="mt-3">
      Ik ontwikkel maatwerk websites in de regio's Roosendaal, Ede, Wageningen en Essen.
    </p>
  </div>

  <div class="flex items-center">
    <a href="mailto:ruben@uijtdewilligenbv.nl" class="btn-[#093569] btn mt-2 md:mt-0">
      Stuur me een e-mail!
    </a>
  </div>
</div>

<footer class="footer footer-center p-4 pt-8 text-base-content">
  <aside>
    <p>Copyright © 2025-heden<br />Ruben Uijtdewilligen</p>
  </aside>
</footer>
