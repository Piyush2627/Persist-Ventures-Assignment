"use client";
import image1 from "../../../public/20945346-removebg-preview.png";
function page() {
  return (
    <div className="overflow-x-clip">
      <div className="overscroll-x-none">
        <div className="mx-auto max-w-screen-xl px-5">
          <main className="relative grid place-items-center lg:grid-cols-5">
            <div className="bg-gradient-radial absolute right-0 top-0 -z-10 h-96 w-96 from-indigo-200 blur-2xl"></div>
            <div className="bg-gradient-radial absolute right-56 top-10 -z-10 h-96 w-96 from-purple-200 blur-2xl"></div>
            <div className="max-w-sm md:max-w-max lg:col-span-2">
              <h1 className="text-center text-3xl font-bold [text-wrap:balance] lg:text-start lg:text-4xl lg:tracking-tight xl:text-6xl xl:tracking-tighter">
                About SocialverseApp
              </h1>
              <p className="mt-4 max-w-lg text-center text-lg text-slate-600 [text-wrap:balance] lg:text-start">
                Empowering social media management with a modern approach
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  target="_blank"
                  rel="noopener"
                  className="focus-visible:shadow-outline-indigo flex items-center justify-center gap-1 rounded-full bg-indigo-600 px-7 py-2.5 text-center text-white transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Go to Dahboard
                </a>
              </div>
            </div>
            <div className="py-3 lg:col-span-3 lg:-mr-44">
              <img
                src="https://img.freepik.com/free-vector/social-media-data-center-smm-stats-digital-marketing-research-market-trends-analysis-female-expert-studying-online-survey-results_335657-2392.jpg?t=st=1731321917~exp=1731325517~hmac=37ddf8292ed8755abcce6fdc3e2c2909af119eaeda7c112bac2a7d938aec0bc8&w=740"
                alt=""
                className="rounded"
              />
            </div>
          </main>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-5">
        <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-center">
          <h2 className="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
            Description
          </h2>
          <p className="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
            "SocialverseApp is a cutting-edge social media management platform
            designed to simplify the way you track, analyze, and grow your
            online presence. Built with the latest technologies, SocialverseApp
            offers real-time insights and an intuitive experience, giving you
            the tools you need to make impactful decisions."
          </p>
        </div>
        <div className="grid py-10 md:grid-cols-2">
          <div className="grid place-items-center">
            <img
              src="https://i.ibb.co/chF8gnY/20945346-removebg-preview.png"
              alt="20945346-removebg-preview"
            />{" "}
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              <span className="-ml-px rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                Core Features
              </span>
              <h3 className="mt-4 text-2xl font-medium [text-wrap:balance]">
                Enable your team to collaborate efficiently with shared
                workspaces and task assignments, ensuring everyone is aligned
                and productive."
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                Track your performance across platforms with up-to-the-minute
                analytics and data visualizations that offer valuable insights
              </p>
            </div>
          </div>
        </div>
        <div className="grid py-10 md:grid-cols-2">
          <div className="grid place-items-center pb-10 md:order-2 md:pb-0">
            <img src="https://i.ibb.co/SQnP9cs/rb-2058.png" alt="rb-2058" />
          </div>
          <div className="grid place-items-center">
            <div className="max-w-lg">
              <h3 className="mt-4 text-2xl font-medium [text-wrap:balance]">
                Plan and schedule your content with ease, optimizing your
                strategy for maximum reach and engagement."{" "}
              </h3>
              <p className="mt-4 text-slate-600 [text-wrap:balance]">
                "Our platform is built with the latest technologies and a deep
                understanding of social media trends. By choosing
                SocialverseApp, you gain a competitive edge, saving time while
                maximizing results."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center bg-gradient-to-bl from-indigo-900 to-indigo-700 p-8 text-center md:px-20 md:py-20">
        <h2 className="text-4xl tracking-tight text-white md:text-6xl">
          Assignment uploaded by Piyush Dahiwadkar
        </h2>

        <div className="mt-5 flex">
          <a
            href="https://github.com/Piyush2627"
            className="focus-visible:shadow-outline-indigo rounded-full border-2 border-transparent bg-white px-7 py-2.5 text-center text-indigo-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
