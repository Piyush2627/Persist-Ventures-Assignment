"use client";

function page() {
  return (
    // <div classNameName="p-5">
    //   <div classNameName="">
    //     <h1 classNameName="text-6xl font-bold uppercase text-zinc-400">
    //       <div classNameName="text-4xl">Welcome to</div>
    //       <div></div>{" "}
    //     </h1>
    //     <p classNameName="text-xl text-zinc-200">Manage. Monitor. Analyze.</p>
    //     <p classNameName="">
    //       Welcome, Admin! Your centralized dashboard for efficient management
    //       and in-depth analytics of Social Verse App is here.
    //     </p>
    //   </div>
    //   <div classNameName="mt-8 space-y-6">
    //     <h2 classNameName="text-xl font-bold text-zinc-300 decoration-zinc-500 decoration-2">
    //       Key Insights at a Glance
    //     </h2>
    //     Total Users: Track user base growth, view active users, and monitor new
    //     sign-ups. Content Overview: Manage trending posts and oversee platform
    //     interactions with engagement metrics for each content type. Daily
    //     Activity Feed: Stay updated on the latest activities, including top user
    //     actions and popular content.
    //   </div>

    //   <div classNameName="space-y-4">
    //     <h2 classNameName="text-3xl font-bold text-zinc-300">User Management</h2>
    //     <p classNameName="max-w-xl leading-relaxed">
    //       Quickly access user profiles to track activity, engagement, and
    //       referrals. Filter users to view creators, recent joiners, and top
    //       contributors.
    //     </p>
    //   </div>

    //   <div classNameName="space-y-4">
    //     <h2 classNameName="text-3xl font-bold text-zinc-300">Content Moderation</h2>
    //     <p classNameName="max-w-xl leading-relaxed">
    //       Monitor platform interactions in real-time. Track daily views, shares,
    //       and comments, ensuring quality standards are maintained across Social
    //       Verse App.
    //     </p>
    //   </div>

    //   <div classNameName="space-y-4">
    //     <h2 classNameName="text-3xl font-bold text-zinc-300">
    //       Analytics Dashboard
    //     </h2>
    //     <p classNameName="max-w-xl leading-relaxed">
    //       Analyze daily and monthly trends in user engagement, including views,
    //       likes, shares, and private messages. Our powerful charts provide a
    //       visual representation of these metrics, helping you make informed
    //       decisions.
    //     </p>
    //   </div>

    //   <div classNameName="space-y-4">
    //     <h2 classNameName="text-3xl font-bold text-zinc-300">
    //       Responsive and User-Friendly Design
    //     </h2>
    //     <p classNameName="max-w-xl leading-relaxed">
    //       Social Verse App's admin dashboard is fully optimized for mobile and
    //       desktop, providing you with a smooth and intuitive experience wherever
    //       you are.
    //     </p>
    //   </div>
    // </div>
    <>
      <div className="overflow-x-clip">
        <div className="mx-auto max-w-screen-xl px-5">
          <main className="relative grid place-items-center lg:grid-cols-5">
            <div className="bg-gradient-radial absolute right-0 top-0 -z-10 h-96 w-96 from-indigo-200 blur-2xl"></div>
            <div className="bg-gradient-radial absolute right-56 top-10 -z-10 h-96 w-96 from-purple-200 blur-2xl"></div>
            <div className="max-w-sm md:max-w-max lg:col-span-2">
              <h1 className="text-center text-3xl font-bold [text-wrap:balance] lg:text-start lg:text-4xl lg:tracking-tight xl:text-6xl xl:tracking-tighter">
                Create websites with Astroship™
              </h1>
              <p className="mt-4 max-w-lg text-center text-lg text-slate-600 [text-wrap:balance] lg:text-start">
                Pro version of popular Astroship starter template made for
                startups. Built with Astro and Tailwind CSS.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  target="_blank"
                  rel="noopener"
                  className="focus-visible:shadow-outline-indigo flex items-center justify-center gap-1 rounded-full bg-indigo-600 px-7 py-2.5 text-center text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Buy Template — $49
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  className="focus-visible:shadow-outline-indigo flex items-center justify-center gap-1 rounded-full border-2 border-indigo-500 bg-white px-7 py-2.5 text-center text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Free Version
                </a>
              </div>
            </div>
            <div className="py-3 lg:col-span-3 lg:-mr-44">
              <img
                src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?t=st=1731263929~exp=1731267529~hmac=c51cd9edabc608c5e537f109b5338ec8cb833d17a982528500eda67ab0dbf40b&w=1060"
                alt=""
              />
            </div>
          </main>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-5">
        <div>
          <h2 className="text-center text-slate-500">
            Trusted by popular startups you know
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-20 lg:gap-28">
            <div className="my-2 h-7 text-gray-500 md:h-9"></div>
            <div className="my-2 h-7 text-gray-500 md:h-9"></div>
            <div className="my-2 h-7 text-gray-500 md:h-9"></div>
            <div className="my-2 h-7 text-gray-500 md:h-9">
              <svg
                viewBox="0 0 175 48"
                width="175"
                height="48"
                className="h-full w-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g fill="current" transform="translate(3 7)">
                  <path d="m56.6548259 25.3816928c-4.1385107 0-7.493381-3.4354677-7.493381-7.6740785 0-4.2375322 3.3548703-7.6729999 7.493381-7.6729999s7.4930223 3.4354677 7.4930223 7.6729999c0 4.2386108-3.3545116 7.6740785-7.4930223 7.6740785zm7.5167037.9731908c.1033371 1.1773918 1.0441361 2.6765442 2.6742084 2.6765442h.9537161c.3695739 0 .6727681-.3034255.6727681-.6737198v-20.9992784h-.0043057c-.0190169-.35375682-.311088-.6374094-.6684624-.6374094h-2.9551564c-.3573744 0-.6494455.28365258-.66918.6374094h-.0035881v1.70622957c-1.8109123-2.23434825-4.665602-3.16188139-7.5281855-3.16188139-6.5070133 0-11.782233 5.28514132-11.782233 11.80483652 0 6.5204142 5.2752197 11.8055555 11.782233 11.8055555v.0007191c2.8625835 0 5.9824335-1.1130398 7.5278267-3.1618814zm40.8858944-.9731908c-4.138215 0-7.4934948-3.4354677-7.4934948-7.6740785 0-4.2375322 3.3552798-7.6729999 7.4934948-7.6729999 4.138574 0 7.493136 3.4354677 7.493136 7.6729999 0 4.2386108-3.354562 7.6740785-7.493136 7.6740785zm7.516818.9731908c.103339 1.1773918 1.044152 2.6765442 2.674249 2.6765442h.954089c.36958 0 .67242-.3034255.67242-.6737198v-20.9992784h-.003947c-.019376-.35375682-.311452-.6374094-.668473-.6374094h-2.95556c-.357379 0-.649096.28365258-.66919.6374094h-.003588v1.70622957c-1.81094-2.23434825-4.665673-3.16188139-7.5283-3.16188139-6.5071121 0-11.7820531 5.28514132-11.7820531 11.80483652 0 6.5204142 5.274941 11.8055555 11.7820531 11.8055555v.0007191c2.862627 0 5.982524-1.1130398 7.527941-3.1618814z"></path>
                  <path d="m158.204594 25.1860427c-4.064988 0-7.359971-3.3675788-7.359971-7.5224295 0-4.1537935 3.294983-7.5213723 7.359971-7.5213723 4.064282 0 7.358914 3.3675788 7.358914 7.5213723 0 4.1548507-3.294632 7.5224295-7.358914 7.5224295zm7.382172.9539594c.101493 1.1541251 1.025498 2.6236526 2.626472 2.6236526h.937044c.362977 0 .660759-.2974295.660759-.6604063v-20.58430769h-.004229c-.01903-.34676617-.305535-.62481343-.65653-.62481343h-2.902757c-.350995 0-.6375.27804726-.656882.62481343h-.003877v1.67251244c-1.778234-2.19019486-4.581965-3.09939884-7.393449-3.09939884-6.391211 0-11.571912 5.18070069-11.571912 11.57155889 0 6.3915631 5.180701 11.5722637 11.571912 11.5722637v.0007048c2.811484 0 5.875642-1.0910448 7.393097-3.0993989z"></path>
                  <path d="m142.84652 26.386958-.001406-10.5372015h.000352c0-5.93987885-3.776327-9.94697872-9.798285-9.94697872-2.874492 0-5.504816 1.63540156-6.063061 3.06650865-.179876-1.10793139-.772903-2.27268871-2.611003-2.27268871h-.936967c-.36221 0-.658372.29458842-.658372.65367254v18.38754724.002789 1.9390543.0359084h.003864c.018621.3423501.304945.6177641.654859.6177641h1.959657.933805c.044266 0 .08783-.0052294.129637-.0135963.019322-.0034863.037239-.0108074.055859-.0160368.021431-.0066239.043916-.0118532.064292-.0202203.025646-.0104588.049184-.0247524.073074-.0380002.011594-.0069725.024242-.0122019.035484-.019523.028808-.0184771.055157-.0407891.080803-.0634498.004216-.0041835.009486-.0069726.01335-.0108074.028808-.0275414.055157-.0578717.078344-.0895967l.000352-.0006972c.072371-.0986611.116286-.2175423.123664-.3458364h.003513v-.0359084-1.2923542-.3395612-10.3614942c0-3.189922 2.606435-5.77637355 5.821706-5.77637355 3.214919 0 5.821355 2.58645155 5.821355 5.77637355l.002809 10.054704.000703-.0031377c0 .0087157.001406.01778.001406.0275414v1.9143019.0359084h.003513c.019322.3423501.305295.6177641.65521.6177641h1.958603.934859c.044618 0 .08783-.0052294.129637-.0135963.017215-.0031377.033024-.0097615.049887-.0146423.023539-.0066239.047779-.0125505.070615-.0216148.023539-.0097616.04532-.0230093.067453-.0359084.013702-.0073212.028106-.0128992.041105-.0216148.027051-.0174312.051293-.0383488.075182-.059615.006323-.0052293.012999-.0094128.018972-.0153394.027402-.0261469.051643-.0543856.074128-.0843673.001757-.0020919.003512-.0038349.005269-.0059267.071318-.0979638.114882-.2157991.122259-.3433959 0-.0010459.000352-.0017432.000352-.0017432h.003864v-.0359084-1.2923542zm-68.0938885-3.0398982c2.019354 1.3696875 4.2238214 2.0343993 6.3423435 2.0343993 2.0178847 0 4.103718-1.0238504 4.103718-2.8062416 0-2.3795174-4.5459338-2.7498003-7.4019717-3.6999536-2.8567726-.9501533-5.3172404-2.9140909-5.3172404-6.095289 0-4.86688419 4.4306051-6.87719712 8.5662773-6.87719712 2.6202386 0 5.3234843.84589884 7.0761866 2.05704768.6038228.44757504.2361667.96201671.2361667.96201671l-1.6733679 2.33853463c-.1876845.2635121-.5167754.4914338-.9887415.2059924-.4719662-.285082-2.1273369-1.4318807-4.6502439-1.4318807-2.5232742 0-4.0431154 1.1406873-4.0431154 2.5542334 0 1.6950333 1.9752793 2.2281688 4.2891989 2.8058822 4.0317296 1.0637547 8.4303805 2.3424891 8.4303805 7.1806134 0 4.288452-4.0982087 6.9386714-8.6272472 6.9386714-3.4326815 0-6.3548314-.9577027-8.8057497-2.7181646-.5108988-.5000617-.1542613-.9645331-.1542613-.9645331l1.6649202-2.3270307c.3386404-.4349926.7657972-.2832845.9527473-.1571007z"></path>
                  <path d="m27.1527778 8.26333583c0 4.56415467-3.6997975 8.26444197-8.2638889 8.26444197s-8.2638889-3.7002873-8.2638889-8.26444197c0-4.56304855 3.6997975-8.26333583 8.2638889-8.26333583s8.2638889 3.70028728 8.2638889 8.26333583"></path>
                  <path d="m8.23160463 17.773563c-4.54624074 0-8.2315679 3.6845926-8.2315679 8.2308333 0 4.5462408 3.68532716 8.2319352 8.2315679 8.2319352 4.54624077 0 8.23193527-3.6856944 8.23193527-8.2319352 0-4.5462407-3.6856945-8.2308333-8.23193527-8.2308333"></path>
                  <path d="m29.3846129 17.7727549c-4.4470501 0-8.0526208 3.6853272-8.0526208 8.2319352 0 4.5458734 3.6055707 8.2315679 8.0526208 8.2315679 4.4474094 0 8.0529801-3.6856945 8.0529801-8.2315679 0-4.546608-3.6055707-8.2319352-8.0529801-8.2319352"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-center">
          <span className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
            TWO-COL FEATURES
          </span>
          <h2 className="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
            Supercharge Your Workflows
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
            Unlock your team's true potential with our state-of-the-art SaaS
            platform. From intelligent task management to real-time
            collaboration and top-notch data security, we have everything you
            need to streamline your workflows and achieve high productivity.
          </p>
        </div>
        <div className="grid py-10 md:grid-cols-2">
          <div className="grid place-items-center">
            <picture>
              <source
                srcSet="/_astro/6.Ep0jo6kx_jbH81.avif"
                type="image/avif"
              />
              <source
                srcSet="/_astro/6.Ep0jo6kx_Z1QgT1P.webp"
                type="image/webp"
              />
              <img
                src="./Astroship Pro - SAAS Startup Website Template for Astro_files/6.Ep0jo6kx_Z2s10bH.png"
                alt="Feature Image"
                loading="lazy"
                width="730"
                height="584"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              <span className="-ml-px rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                Simplified Workflows
              </span>
              <h3 className="mt-4 text-2xl font-medium [text-wrap:balance]">
                Experience the Ultimate Boost in Productivity with Our Intuitive
                Platform
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                Streamline your tasks and collaborate seamlessly with our
                cutting-edge SaaS startup platform. Unlock the potential of your
                team and take productivity to new heights.
              </p>
              <ul className="mt-6 grid gap-y-4 text-left">
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <symbol id="ai:ph:check-circle-fill">
                      <path
                        fill="currentColor"
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"
                      ></path>
                    </symbol>
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">Intelligent Task Management</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">Real-time Collaboration</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">Data Security Privacy</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-4">
                <a className="focus-visible:shadow-outline-indigo group inline-flex items-center gap-px rounded-full bg-indigo-600 px-4 py-2 text-center text-sm text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
                  <span>Start 14-day trial</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a className="focus-visible:shadow-outline-indigo rounded-full px-2 py-1 text-sm text-slate-600 transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid py-10 md:grid-cols-2">
          <div className="grid place-items-center pb-10 md:order-2 md:pb-0">
            <picture>
              <source
                srcSet="/_astro/2.ldT67BXv_ZIfUrc.avif"
                type="image/avif"
              />
              <source
                srcSet="/_astro/2.ldT67BXv_Z1VcUNt.webp"
                type="image/webp"
              />
              <img
                src="./Astroship Pro - SAAS Startup Website Template for Astro_files/2.ldT67BXv_ZgktxF.png"
                alt="Feature Image"
                loading="lazy"
                width="1280"
                height="800"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              <span className="-ml-px rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                AI-Powered Insights
              </span>
              <h3 className="mt-4 text-2xl font-medium [text-wrap:balance]">
                Supercharge Your Marketing Strategy with Advanced Analytics
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                Harness the potential of AI-driven marketing analytics to
                optimize your campaigns, understand your audience better, and
                achieve unprecedented growth.
              </p>
              <ul className="mt-6 grid gap-y-4 text-left">
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">Smart Audience Segmentation</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">
                    Predictive Campaign Performance
                  </span>
                </li>
                <li className="flex items-center gap-3 text-neutral-800">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    data-icon="ph:check-circle-fill"
                  >
                    <use href="#ai:ph:check-circle-fill"></use>
                  </svg>
                  <span className="text-sm">Real-time Data Visualization</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-4">
                <a className="focus-visible:shadow-outline-indigo group inline-flex items-center gap-px rounded-full bg-indigo-600 px-4 py-2 text-center text-sm text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
                  <span>Start 14-day trial</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a className="focus-visible:shadow-outline-indigo rounded-full px-2 py-1 text-sm text-slate-600 transition hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-5">
        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
            Client <span className="text-indigo-600">Testimonials</span>
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            Astroship is trusted by the world's leading companies and brands.
          </p>
        </div>
      </div>
      <div className="relative mt-10 overflow-x-clip">
        <div className="bg-gradient-radial absolute -top-10 right-1/3 -z-10 h-96 w-96 from-indigo-100 blur-2xl"></div>
        <div className="bg-gradient-radial absolute right-1/3 top-10 -z-10 h-96 w-96 translate-x-2/3 from-purple-100 blur-2xl"></div>
        <div className="group relative gap-10 overflow-hidden py-5 md:flex">
          <div className="md:motion-safe:animate-marquee flex w-auto min-w-full shrink-0 snap-x snap-mandatory flex-nowrap items-stretch gap-10 overflow-x-auto px-5 py-5">
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has transformed the way we manage our projects. Its
                well-designed interface and powerful features make it a
                must-have tool for any startup. We've seen a great increase in
                our productivity and collaboration.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Zgg5Mo.avif,
                  /_astro/photo-1624298357597-fd92dfbec01d_Zgg5Mo.avif 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_oY7qp.avif  2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Z1ga295.webp,
                  /_astro/photo-1624298357597-fd92dfbec01d_Z1ga295.webp 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_1FABLa.webp  2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1624298357597-fd92dfbec01d_Z9mHXD.png"
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Z9mHXD.png 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_2lgW39.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="John Doe"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">John Doe</h2>
                  <p className="text-sm text-slate-600">CEO at TechCorp</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                As a marketing professional, I love using Astroship to
                streamline our marketing campaigns. The automation features and
                data analytics help us make data-driven decisions and optimize
                our business strategies.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_2tsWf.avif,
                  /_astro/photo-1607746882042-944635dfe10e_2tsWf.avif 1x,
                  /_astro/photo-1607746882042-944635dfe10e_HIGb3.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_ZWpsor.webp,
                  /_astro/photo-1607746882042-944635dfe10e_ZWpsor.webp 1x,
                  /_astro/photo-1607746882042-944635dfe10e_1YlbvN.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1607746882042-944635dfe10e_9mPL0.png"
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_9mPL0.png   1x,
                  /_astro/photo-1607746882042-944635dfe10e_Z2qaC19.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Jane Smith"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Jane Smith</h2>
                  <p className="text-sm text-slate-600">
                    Marketing Manager at InnovateTech
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has revolutionized the way we handle customer support.
                The ticketing system and knowledge base have significantly
                reduced response times, leading to happier customers. Thanks to
                this incredible tool.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_Z2fltfd.avif,
                  /_astro/photo-1639149888905-fb39731f2e6c_Z2fltfd.avif 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_Z1z6g1p.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_1OVId2.webp,
                  /_astro/photo-1639149888905-fb39731f2e6c_1OVId2.webp 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_ZitKFE.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1639149888905-fb39731f2e6c_Z28s6qs.png"
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_Z28s6qs.png 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_mbyAk.png   2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Mike Johnson"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Mike Johnson</h2>
                  <p className="text-sm text-slate-600">CTO at CloudNine</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has simplified our employee management processes. From
                onboarding to performance evaluations, everything is now
                seamlessly organized in one place. It's made my job much more
                manageable and enjoyable!
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1Fyyj6.avif,
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1Fyyj6.avif 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_Z10jl5i.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_2oID99.webp,
                  /_astro/photo-1586297135537-94bc9ba060aa_2oID99.webp 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_gi9fs.webp  2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1586297135537-94bc9ba060aa_Z1yFbul.png"
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1yFbul.png 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_UXtwr.png   2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Emily Brown"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Emily Brown</h2>
                  <p className="text-sm text-slate-600">
                    HR Manager at ConnectCo
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Our sales team swears by Astroship's CRM capabilities. The lead
                tracking and pipeline management tools have resulted in a
                significant boost in sales. It's a versatile platform that has
                truly optimized our sales processes.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_29sU8f.avif,
                  /_astro/photo-1601455763557-db1bea8a9a5a_29sU8f.avif  1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_Z2ft0rS.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_19yXLy.webp,
                  /_astro/photo-1601455763557-db1bea8a9a5a_19yXLy.webp 1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_ZXQv78.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1601455763557-db1bea8a9a5a_2gmhW0.png"
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_2gmhW0.png 1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_ZjbaP9.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="David Lee"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">David Lee</h2>
                  <p className="text-sm text-slate-600">
                    Sales Director at Linkify
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has been a lifesaver for our finance department. Its
                robust accounting features and automated invoicing have saved us
                countless hours of manual work. It's the perfect financial
                companion for any business!
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_Z1lyXse.avif,
                  /_astro/photo-1544725176-7c40e5a71c5e_Z1lyXse.avif 1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_Z2avIPE.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_4sQHG.webp,
                  /_astro/photo-1544725176-7c40e5a71c5e_4sQHG.webp  1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_ZH1Y2W.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1544725176-7c40e5a71c5e_17087H.png"
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_17087H.png 1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_2wK1mk.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Sarah Martinez"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Sarah Martinez</h2>
                  <p className="text-sm text-slate-600">
                    Finance Controller at MoneyMakers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:motion-safe:animate-marquee hidden min-w-full shrink-0 items-center gap-10 md:flex md:motion-reduce:hidden">
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has transformed the way we manage our projects. Its
                well-designed interface and powerful features make it a
                must-have tool for any startup. We've seen a great increase in
                our productivity and collaboration.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Zgg5Mo.avif,
                  /_astro/photo-1624298357597-fd92dfbec01d_Zgg5Mo.avif 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_oY7qp.avif  2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Z1ga295.webp,
                  /_astro/photo-1624298357597-fd92dfbec01d_Z1ga295.webp 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_1FABLa.webp  2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1624298357597-fd92dfbec01d_Z9mHXD.png"
                      srcSet="
                  /_astro/photo-1624298357597-fd92dfbec01d_Z9mHXD.png 1x,
                  /_astro/photo-1624298357597-fd92dfbec01d_2lgW39.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="John Doe"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">John Doe</h2>
                  <p className="text-sm text-slate-600">CEO at TechCorp</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                As a marketing professional, I love using Astroship to
                streamline our marketing campaigns. The automation features and
                data analytics help us make data-driven decisions and optimize
                our business strategies.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_2tsWf.avif,
                  /_astro/photo-1607746882042-944635dfe10e_2tsWf.avif 1x,
                  /_astro/photo-1607746882042-944635dfe10e_HIGb3.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_ZWpsor.webp,
                  /_astro/photo-1607746882042-944635dfe10e_ZWpsor.webp 1x,
                  /_astro/photo-1607746882042-944635dfe10e_1YlbvN.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1607746882042-944635dfe10e_9mPL0.png"
                      srcSet="
                  /_astro/photo-1607746882042-944635dfe10e_9mPL0.png   1x,
                  /_astro/photo-1607746882042-944635dfe10e_Z2qaC19.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Jane Smith"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Jane Smith</h2>
                  <p className="text-sm text-slate-600">
                    Marketing Manager at InnovateTech
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has revolutionized the way we handle customer support.
                The ticketing system and knowledge base have significantly
                reduced response times, leading to happier customers. Thanks to
                this incredible tool.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_Z2fltfd.avif,
                  /_astro/photo-1639149888905-fb39731f2e6c_Z2fltfd.avif 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_Z1z6g1p.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_1OVId2.webp,
                  /_astro/photo-1639149888905-fb39731f2e6c_1OVId2.webp 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_ZitKFE.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1639149888905-fb39731f2e6c_Z28s6qs.png"
                      srcSet="
                  /_astro/photo-1639149888905-fb39731f2e6c_Z28s6qs.png 1x,
                  /_astro/photo-1639149888905-fb39731f2e6c_mbyAk.png   2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Mike Johnson"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Mike Johnson</h2>
                  <p className="text-sm text-slate-600">CTO at CloudNine</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has simplified our employee management processes. From
                onboarding to performance evaluations, everything is now
                seamlessly organized in one place. It's made my job much more
                manageable and enjoyable!
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1Fyyj6.avif,
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1Fyyj6.avif 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_Z10jl5i.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_2oID99.webp,
                  /_astro/photo-1586297135537-94bc9ba060aa_2oID99.webp 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_gi9fs.webp  2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1586297135537-94bc9ba060aa_Z1yFbul.png"
                      srcSet="
                  /_astro/photo-1586297135537-94bc9ba060aa_Z1yFbul.png 1x,
                  /_astro/photo-1586297135537-94bc9ba060aa_UXtwr.png   2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Emily Brown"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Emily Brown</h2>
                  <p className="text-sm text-slate-600">
                    HR Manager at ConnectCo
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Our sales team swears by Astroship's CRM capabilities. The lead
                tracking and pipeline management tools have resulted in a
                significant boost in sales. It's a versatile platform that has
                truly optimized our sales processes.
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_29sU8f.avif,
                  /_astro/photo-1601455763557-db1bea8a9a5a_29sU8f.avif  1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_Z2ft0rS.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_19yXLy.webp,
                  /_astro/photo-1601455763557-db1bea8a9a5a_19yXLy.webp 1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_ZXQv78.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1601455763557-db1bea8a9a5a_2gmhW0.png"
                      srcSet="
                  /_astro/photo-1601455763557-db1bea8a9a5a_2gmhW0.png 1x,
                  /_astro/photo-1601455763557-db1bea8a9a5a_ZjbaP9.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="David Lee"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">David Lee</h2>
                  <p className="text-sm text-slate-600">
                    Sales Director at Linkify
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-[calc(100vw-5.75rem)] max-w-md shrink-0 snap-start snap-always scroll-m-5 flex-col justify-between rounded-2xl bg-gray-50/60 p-8 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all first-of-type:scroll-m-10 hover:shadow-lg">
              <blockquote className="text-lg [text-wrap:balance] md:text-xl">
                Astroship has been a lifesaver for our finance department. Its
                robust accounting features and automated invoicing have saved us
                countless hours of manual work. It's the perfect financial
                companion for any business!
              </blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div className="shrink-0">
                  <picture>
                    <source
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_Z1lyXse.avif,
                  /_astro/photo-1544725176-7c40e5a71c5e_Z1lyXse.avif 1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_Z2avIPE.avif 2x
                "
                      type="image/avif"
                    />
                    <source
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_4sQHG.webp,
                  /_astro/photo-1544725176-7c40e5a71c5e_4sQHG.webp  1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_ZH1Y2W.webp 2x
                "
                      type="image/webp"
                    />
                    <img
                      src="./Astroship Pro - SAAS Startup Website Template for Astro_files/photo-1544725176-7c40e5a71c5e_17087H.png"
                      srcSet="
                  /_astro/photo-1544725176-7c40e5a71c5e_17087H.png 1x,
                  /_astro/photo-1544725176-7c40e5a71c5e_2wK1mk.png 2x
                "
                      className="h-12 w-12 rounded-full bg-slate-100 object-cover"
                      alt="Sarah Martinez"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-medium text-slate-800">Sarah Martinez</h2>
                  <p className="text-sm text-slate-600">
                    Finance Controller at MoneyMakers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-5">
        <div className="mt-24">
          <h2 className="text-4xl font-bold lg:text-5xl lg:tracking-tight">
            Everything you need to
            <span className="text-indigo-600">start a website</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Astro comes batteries included. It takes the best parts of
            state-of-the-art tools and adds its own innovations.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-3">
            <div className="relative flex h-auto items-start justify-center overflow-hidden lg:h-80">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
              <picture>
                <source
                  srcSet="/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />
                <img
                  src="./Astroship Pro - SAAS Startup Website Template for Astro_files/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              <span className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                <span>Astroship</span>
              </span>
              <h3 className="mt-2 text-xl font-medium lg:text-2xl">
                <span>Responsive Template</span>
              </h3>
              <p className="mt-2 text-slate-600 [text-wrap:balance]">
                <span>
                  Astroship is a creative and modern mobile responsive website
                  template that helps you create any kind of marketing websites
                  or landing pages.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg lg:col-span-2">
            <div className="relative flex h-auto items-start justify-center overflow-hidden lg:h-80">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
              <picture>
                <source
                  srcSet="/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />
                <img
                  src="./Astroship Pro - SAAS Startup Website Template for Astro_files/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              <span className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
                <span>Creative</span>
              </span>
              <h3 className="mt-2 text-xl font-medium lg:text-2xl">
                <span>Next Level Template</span>
              </h3>
              <p className="mt-2 text-slate-600 [text-wrap:balance]">
                <span>
                  Astroship is a new kind of website template that integrates
                  your favorite tools and workflows.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg">
            <div className="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
              <picture>
                <source
                  srcSet="/_astro/3.XiLsQFjx_Z1JuNDf.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/_astro/3.XiLsQFjx_27JjNp.webp"
                  type="image/webp"
                />
                <img
                  src="./Astroship Pro - SAAS Startup Website Template for Astro_files/3.XiLsQFjx_Z1hzmJI.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              <span className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
                <span>Template</span>
              </span>
              <h3 className="mt-2 text-xl font-medium lg:text-2xl">
                <span>Modern Design</span>
              </h3>
              <p className="mt-2 text-slate-600 [text-wrap:balance]">
                <span>
                  Feeling old? Try this template and be a part of the modern
                  design.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg">
            <div className="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
              <picture>
                <source
                  srcSet="/_astro/2.ldT67BXv_ZIfUrc.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/_astro/2.ldT67BXv_Z1VcUNt.webp"
                  type="image/webp"
                />
                <img
                  src="./Astroship Pro - SAAS Startup Website Template for Astro_files/2.ldT67BXv_ZgktxF.png"
                  alt="Feature image"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width="1280"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mt-2">
              <span className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                <span>Product</span>
              </span>
              <h3 className="mt-2 text-xl font-medium lg:text-2xl">
                <span>Highlight Features</span>
              </h3>
              <p className="mt-2 text-slate-600 [text-wrap:balance]">
                <span>
                  You can highlight your features in a trendy grid like this
                  one.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8 shadow ring-1 ring-gray-200/50 transition-all hover:shadow-lg">
            <div className="relative flex h-auto items-start justify-center overflow-hidden lg:h-60">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-transparent"></div>
              <img
                src="./Astroship Pro - SAAS Startup Website Template for Astro_files/integrations.HhfHOMQB.svg"
                alt="Feature image"
                className="h-full w-full object-contain"
                loading="lazy"
                width="909"
                height="823"
                decoding="async"
              />
            </div>
            <div className="mt-2">
              <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                <span>Webhooks</span>
              </span>
              <h3 className="mt-2 text-xl font-medium lg:text-2xl">
                <span>100+ Integrations</span>
              </h3>
              <p className="mt-2 text-slate-600 [text-wrap:balance]">
                <span>
                  Astroship can be integrated with hundreds of tools using
                  Zapier.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-4xl font-bold lg:text-5xl lg:tracking-tight">
            We have got more awesome{" "}
            <span className="text-indigo-600">features</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Use this section to highlight not so important features of your
            product.
          </p>
        </div>
        <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center justify-center">
          <span className="rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
            MORE FEATURES
          </span>
          <h2 className="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
            We've got you covered
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
            Our template covers all things SAAS. If you don't find what you're
            looking for, contact us and we'll either help you or steer you in
            the right direction.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:document-javascript-24-regular"
              >
                <symbol id="ai:fluent:document-javascript-24-regular">
                  <path
                    fill="currentColor"
                    d="M18 20.5h-7.034a2.939 2.939 0 0 1-.702 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138a.56.56 0 0 1-.059-.007a.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v10.018a1.745 1.745 0 0 1 1.5.508V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM4.25 15a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75m3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15z"
                  ></path>
                </symbol>
                <use href="#ai:fluent:document-javascript-24-regular"></use>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Bring Your Own Framework
              </h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Build your site using React, Svelte, Vue, Preact, web
                components, or just plain ol' HTML + JavaScript.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:trophy-24-regular"
              >
                <symbol id="ai:fluent:trophy-24-regular">
                  <path
                    fill="currentColor"
                    d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.578-1.493zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.999a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75m3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733z"
                  ></path>
                </symbol>
                <use href="#ai:fluent:trophy-24-regular"></use>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">100% Static HTML, No JS</h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Astro renders your entire page to static HTML, removing all
                JavaScript from your final build by default.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:box-24-regular"
              >
                <symbol id="ai:fluent:box-24-regular">
                  <path
                    fill="currentColor"
                    d="M10.591 2.513a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.175v9.653a1.75 1.75 0 0 1-1.093 1.621l-7.498 3.04a3.75 3.75 0 0 1-2.818 0l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.176a1.75 1.75 0 0 1 1.093-1.622zm2.254 1.39a2.25 2.25 0 0 0-1.69 0L9.24 4.68l7.527 2.927l2.669-1.03zm1.846 4.505L7.215 5.5L4.59 6.564l7.411 2.882zM3.5 16.828a.25.25 0 0 0 .156.231l7.499 3.04c.031.013.063.025.095.036v-9.371L3.5 7.75zm9.345 3.271l7.499-3.04a.25.25 0 0 0 .156-.232V7.774l-7.75 2.992v9.37a2.18 2.18 0 0 0 .095-.036"
                  ></path>
                </symbol>
                <use href="#ai:fluent:box-24-regular"></use>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">On-Demand Components</h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Need some JS? Astro can automatically hydrate interactive
                components when they become visible on the page.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:box-multiple-24-regular"
              >
                <symbol id="ai:fluent:box-multiple-24-regular">
                  <path
                    fill="currentColor"
                    d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.75 4.75 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v10.67a1.75 1.75 0 0 1-1.143 1.642l-4.018 1.484c.105-.292.161-.604.161-.927v-.731l3.337-1.233a.25.25 0 0 0 .163-.235V5.563a.25.25 0 0 0-.163-.234zm-4.01 3.93a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zm-6 7a.75.75 0 0 1 .49-1.418l2.74.948l2.732-.947a.75.75 0 1 1 .49 1.417l-2.472.857v2.7a.75.75 0 0 1-1.5 0v-2.7zM10.3 9.53a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l4.307-1.592a1.75 1.75 0 0 0 1.143-1.642v-5.67a1.75 1.75 0 0 0-1.143-1.641zm-2.08 1.407a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v5.67a.25.25 0 0 1-.163.235L9.78 20.259a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234z"
                  ></path>
                </symbol>
                <use href="#ai:fluent:box-multiple-24-regular"></use>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Broad Integration</h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Astro supports TypeScript, Scoped CSS, CSS Modules, Sass,
                Tailwind, Markdown, MDX, and any other npm packages.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:book-search-24-regular"
              >
                <symbol id="ai:fluent:book-search-24-regular">
                  <path
                    fill="currentColor"
                    d="M14.819 11.795a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475l.067.058l.008.006a.724.724 0 0 0 .942-1.093zm-3.095-4.348a2.276 2.276 0 1 1 0 4.553a2.276 2.276 0 0 1 0-4.553M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"
                  ></path>
                </symbol>
                <use href="#ai:fluent:book-search-24-regular"></use>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">SEO Enabled</h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Automatic sitemaps, RSS feeds, pagination and collections take
                the pain out of SEO and syndication. It just works!
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-slate-100 hover:bg-slate-50 md:-m-5">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-100 bg-indigo-50 p-2 shadow shadow-indigo-100/50 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500"
                data-icon="fluent:people-community-24-regular"
              >
                <symbol id="ai:fluent:people-community-24-regular">
                  <path
                    fill="currentColor"
                    d="M7.5 3.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M4.5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.732 4C2.79 9 2 9.791 2 10.768v.36c0 .207 0 1.408.7 2.575c.548.91 1.477 1.727 2.975 2.093a2.777 2.777 0 0 1 1.062-1.335c-1.603-.171-2.361-.883-2.75-1.53c-.484-.806-.487-1.664-.487-1.806v-.357c0-.148.12-.268.268-.268H8.03A3.974 3.974 0 0 1 8.535 9zm11.697 0c.261.452.437.959.504 1.5h4.263c.148 0 .268.12.268.268v.357c0 .142-.003 1-.487 1.805c-.389.648-1.147 1.36-2.75 1.531c.48.32.856.786 1.062 1.335c1.498-.366 2.427-1.183 2.974-2.093c.701-1.167.701-2.367.701-2.576v-.36C22 9.792 21.209 9 20.232 9zM15 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M12 9.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2.5 5.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zm1.768-.268a.268.268 0 0 0-.268.268v.357c0 .142.003 1 .487 1.805c.446.743 1.377 1.57 3.513 1.57s3.067-.827 3.513-1.57c.484-.805.487-1.663.487-1.805v-.357a.268.268 0 0 0-.268-.268z"
                  ></path>
                </symbol>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Community</h3>
              <p className="mt-2 leading-relaxed text-slate-500">
                Astro is an open source project powered by hundreds of
                contributors making thousands of individual contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center bg-gradient-to-bl from-indigo-900 to-indigo-700 p-8 text-center md:px-20 md:py-20">
        <h2 className="text-4xl tracking-tight text-white md:text-6xl">
          Build faster websites.
        </h2>
        <p className="mt-4 text-lg text-white/70 md:text-xl">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture.
        </p>
        <div className="mt-5 flex">
          <a className="focus-visible:shadow-outline-indigo rounded-full border-2 border-transparent bg-white px-7 py-2.5 text-center text-indigo-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
            Sign up for a 14-day Trial
          </a>
        </div>
      </div>
    </>
  );
}

export default page;
