import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const chessDotComLogo = "/assets/chess-dot-com-logo-h_aIxzgd.png";
const filsPhoto = "/assets/fils-4HqS8n8c.jpg";
const lightWeightBaby = "/assets/lightWeightBaby-Dx6M0VRo.jpg";
const me = "/assets/me-8FB61oy_.webp";
function AboutMe() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center py-12 min-h-screen bg-background-800", children: [
    /* @__PURE__ */ jsx("h3", { className: "flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center", children: "ABOUT ME" }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 md:px-12 lg:px-26 xl:px-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row p-12 space-y-12 md:space-x-12 justify-center items-center md:py-14", children: [
        /* @__PURE__ */ jsx("p", { className: "flex flex-auto text-md md:text-lg text-center md:text-start", children: "Hello and welcome to my portfolio! I am Lucie, a full stack developer with specialized expertise in ReactJS and React Native. Currently, I am in a work-study program, balancing my time between BECOMS and the Clermont-Auvergne University Institute of Technology, where I am in my final year of a Bachelor's degree in Computer Science. I have the ability to build both websites and mobile applications. My passion for technology drives me to continually seek new knowledge and enhance my skills. My enthusiasm and curiosity inspire me to explore new horizons and tackle exciting challenges." }),
        /* @__PURE__ */ jsx("div", { className: "h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl", children: /* @__PURE__ */ jsx("img", { className: "object-cover object-top overflow-hidden h-64 xl:h-72 w-full bg-primary-600 rounded-3xl", src: me, alt: "me" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-3xl px-5 space-y-12 justify-center items-center pb-12", children: [
        /* @__PURE__ */ jsx("h5", { className: "flex font-Literata text-primary-500 tracking-widest text-2xl md:text-3xl lg:text-4xl text-center", children: "What about my personnal interests ?" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 justify-center items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "object-cover aspect-square object-center h-64 xl:h-72 rounded-3xl",
              src: lightWeightBaby,
              alt: "gym"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "flex flex-1 text-md md:text-lg text-center md:text-start", children: "An essential part of my weekly routine is going to the gym. It's not just about staying in shape — it's also my way of maintaining mental clarity, focus, and discipline. I've been training regularly for over a year now, and I find that this commitment mirrors the perseverance I apply to coding and problem-solving. It's where I reset, refocus, and challenge myself outside the digital world." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center", children: [
          /* @__PURE__ */ jsx("p", { className: "flex flex-auto text-md  bg-ink-200 md:text-lg text-center md:text-start", children: "Outside of my interests in development and current technologies, I have many hobbies. I love to read, play video games (I am a huge fan of the Diablo series), and I am very curious about anything related to astrophysics. I also love plants, and much more. For the past year, I’ve been teaching myself to play chess. There is still a long road ahead, but I am slowly becoming a challenging opponent. If you dare, click on the button and confront me for a game on Chess.com!" }),
          /* @__PURE__ */ jsxs(Link, { to: "https://www.chess.com/member/lulu-la-tortue", className: "flex flex-none flex-no-wrap items-center space-x-3", children: [
            /* @__PURE__ */ jsx("img", { className: "h-10 object-contain", src: chessDotComLogo, alt: "chessdotcomlogo" }),
            /* @__PURE__ */ jsxs("button", { type: "button", className: "p-[3px] relative flex flex-wrap cursor-pointer", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" }),
              /* @__PURE__ */ jsx("div", { className: "px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent", children: /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg font-semibold", children: "Come face me in chess" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl", children: /* @__PURE__ */ jsx("img", { className: "object-cover overflow-hidden h-64 xl:h-72 bg-primary-600 rounded-3xl", src: filsPhoto, alt: "fils" }) }),
          /* @__PURE__ */ jsx("p", { className: "flex flex-1 text-md md:text-lg text-center md:text-start", children: "However, if I were forced to talk about only one of my hobbies, I would undoubtedly choose my passion for animal welfare. Since childhood, I’ve always been surrounded by pets and fascinated by animals of all kinds. I have a few anecdotes on the matter. For example, I’ve hugged a baby cow, fed a giraffe, and put a huge python around my neck (at the age of 12). I basically pet animals of any kind whenever I have the opportunity. I have a cat named Fils, the silly cat on the photo. Fils is a rescue. He is only one year old but had already been abandoned twice, beaten, and underfed before we got him. Despite this, he is still a lovely boy, and his transformation inspires me every day to make one of my biggest projects a reality. After I conclude some of my personal projects, I will become a volunteer at an animal shelter so that other souls like Fils can find happiness and the comfort of a loving family." })
        ] })
      ] })
    ] })
  ] });
}
const github = "data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='%23FFF'%20clip-rule='evenodd'%20d='M8%200C3.58%200%200%203.58%200%208C0%2011.54%202.29%2014.53%205.47%2015.59C5.87%2015.66%206.02%2015.42%206.02%2015.21C6.02%2015.02%206.01%2014.39%206.01%2013.72C4%2014.09%203.48%2013.23%203.32%2012.78C3.23%2012.55%202.84%2011.84%202.5%2011.65C2.22%2011.5%201.82%2011.13%202.49%2011.12C3.12%2011.11%203.57%2011.7%203.72%2011.94C4.44%2013.15%205.59%2012.81%206.05%2012.6C6.12%2012.08%206.33%2011.73%206.56%2011.53C4.78%2011.33%202.92%2010.64%202.92%207.58C2.92%206.71%203.23%205.99%203.74%205.43C3.66%205.23%203.38%204.41%203.82%203.31C3.82%203.31%204.49%203.1%206.02%204.13C6.66%203.95%207.34%203.86%208.02%203.86C8.7%203.86%209.38%203.95%2010.02%204.13C11.55%203.09%2012.22%203.31%2012.22%203.31C12.66%204.41%2012.38%205.23%2012.3%205.43C12.81%205.99%2013.12%206.7%2013.12%207.58C13.12%2010.65%2011.25%2011.33%209.47%2011.53C9.76%2011.78%2010.01%2012.26%2010.01%2013.01C10.01%2014.08%2010%2014.94%2010%2015.21C10%2015.42%2010.15%2015.67%2010.55%2015.59C13.71%2014.53%2016%2011.53%2016%208C16%203.58%2012.42%200%208%200Z'%20transform='scale(64)'%20fill='%23FFFFFF'/%3e%3c/svg%3e";
const linkedin = "data:image/webp;base64,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";
function Contact() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col md:flex-row items-center space-y-8 md:min-h-screen justify-around py-12 bg-background-700", children: [
    /* @__PURE__ */ jsx("h3", { className: "flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center", children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxs(Link, { to: "https://github.com/LucieB-coder", className: "flex flex-1 justify-center items-center space-x-5", children: [
        /* @__PURE__ */ jsx("img", { src: github, className: "h-10", alt: "githublogo" }),
        /* @__PURE__ */ jsx("p", { className: "md:text-xl", children: "LucieB-coder" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "https://www.linkedin.com/in/lucie-bedouret/", className: "flex flex-1 justify-end items-center space-x-5", children: [
        /* @__PURE__ */ jsx("img", { src: linkedin, className: "h-8 object-contain", alt: "linkedinlogo" }),
        /* @__PURE__ */ jsx("p", { className: "md:text-xl", children: "Lucie Bedouret" })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "tel:+33767447587", className: "md:text-xl", children: "+33 7 67 44 75 87" }),
      /* @__PURE__ */ jsx(Link, { to: "mailto:lucie.bedouret.work@gmail.com", className: "md:text-xl", children: "lucie.bedouret.work@gmail.com" })
    ] })
  ] });
}
const art = "/assets/art-DL_M_L2E.jpg";
const circuit = "/assets/circuit-DiOtgWKV.jpg";
const prepaBac = "/assets/prepaBAC-D2JF6pD5.jpg";
const shoes = "/assets/shoes-DFqeS97y.png";
const weddingAlbum = "/assets/wedding-album-T6WU2n3p.webp";
const projects = [
  {
    name: "Loyalty Program App",
    description: "Professional project developed in React Native with Expo for a major shoe brand. End-to-end management and direct collaboration with the client. The app has exceeded 30,000 downloads and is available on Play Store and AppStore.",
    imgSource: shoes
  },
  {
    name: "Shared Wedding Album",
    description: "Personal PWA built with React and Firebase to privately share and archive my parent's wedding photos. The app stores over 800 images, with advanced image optimization (compression, pagination) for fast and smooth performance.",
    imgSource: weddingAlbum
  },
  {
    name: "Application for Connecting Artists and Exhibitors",
    description: "PWA designed to connect artists with venue owners, including integrated payments via Stripe. Developed as part of a work-study program, with full project ownership and direct client communication from start to finish.",
    imgSource: art
  },
  {
    name: "PrépaBAC (In Progress)",
    description: "AI-powered assistant built with Python and LangChain, helping high school students prepare for the French Baccalauréat. Features include intelligent revision plans, sheet generation, and exercise correction. Developed as part of an AI training program, with full project management.",
    imgSource: prepaBac
  },
  {
    name: "Automotive Event Management App",
    description: "PWA for managing vehicle flow at motorsport events, with LLM-based data retrieval from license plates. Includes a public visitor interface. Used during two major events with over 3,000 vehicles recorded. Acted as main point of contact for the client throughout the project.",
    imgSource: circuit
  },
  {
    name: "Curious to know more about these projects?",
    description: "Feel free to reach out by email or phone — I'd be happy to share more details about these and other experiences.",
    imgSource: ""
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("div", { className: "flex bg-background-700 justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col  min-h-screen w-screen py-12 items-center justify-around max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "font-Literata tracking-widest text-5xl text-center mb-8", children: "Most recent projects" }),
    /* @__PURE__ */ jsxs("p", { className: "p-5 opacity-70 lg:text-xl", children: [
      "This is a curated list of recent projects, combining personal explorations and professional experiences.",
      /* @__PURE__ */ jsx("br", {}),
      " Each project highlights different aspects of my work with tools like React, Express, and beyond."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto w-full snap-x lg:snap-none snap-mandatory", children: /* @__PURE__ */ jsx("div", { className: "flex min-w-fit space-x-5 px-6 items-center", children: projects.map((project) => /* @__PURE__ */ jsx(Card, { project }, project.name)) }) })
  ] }) });
}
function Card({ project }) {
  return /* @__PURE__ */ jsxs("div", { className: "snap-center h-[500px] aspect-[3/5] lg:aspect-[4/5] rounded-xl overflow-hidden relative bg-background-300", children: [
    project.imgSource !== "" && /* @__PURE__ */ jsx("img", { src: project.imgSource, className: "h-full object-cover w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 h-full w-full flex flex-col space-y-3 bg-black/60 p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: project.name }),
      /* @__PURE__ */ jsx("p", { className: "backdrop-blur-[2px]", children: project.description })
    ] })
  ] });
}
const resume = "/assets/CV-Lucie-BEDOURET-4uGchLpo.pdf";
function Resume() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center space-y-8 min-h-screen py-12", children: [
    /* @__PURE__ */ jsx("h3", { className: "flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center", children: "Resume" }),
    /* @__PURE__ */ jsx("p", { className: "px-5 text-center", children: "Here is my resume in french, don't hesitate to contact me if you need it in english" }),
    /* @__PURE__ */ jsx("iframe", { className: "flex flex-1", src: resume, width: "90%" })
  ] });
}
const mainStack = "/assets/main-technos-DN5FyxI5.png";
const otherTechnos = "/assets/other-technos-DAgx3zSU.png";
const softSkills = "/assets/soft-skills-DUXqc8Py.png";
function Skills() {
  const [windowSize, setWindowSize] = useState("sm");
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth < 768 ? "sm" : "lg");
    };
    if (typeof window !== "undefined") {
      updateWindowSize();
      window.addEventListener("resize", updateWindowSize);
      return () => {
        window.removeEventListener("resize", updateWindowSize);
      };
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center min-h-screen space-y-12 px-5 py-12 bg-background-900", children: [
    /* @__PURE__ */ jsx("h3", { className: "flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center", children: "My skills" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-9xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-5 rounded-3xl bg-background-600 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "flex font-Literata tracking-widest text-2xl md:text-3xl text-start", children: "Main technical stack" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row flex-auto justify-center items-center px-3 space-y-5 lg:space-y-0 lg:space-x-8 md:px-12", children: [
          /* @__PURE__ */ jsx("p", { className: "lg:text-xl", children: "I work on both websites and mobile apps. To do so, I mainly use the ReactJS framework (or React Native for mobile apps), combined with a Node.js server and an API in Express.js, with data hosted on a MongoDB database. All development was version-controlled with Git, using advanced branching workflows to manage features, fixes, and production releases." }),
          /* @__PURE__ */ jsx("img", { className: "h-72 aspect-square", src: mainStack })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-5 rounded-3xl bg-primary-900 col-span-1 h-full min-h-[300px] p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "flex font-Literata tracking-widest text-2xl md:text-3xl text-start", children: "Soft skills" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row flex-auto justify-center items-center px-3 space-x-8", children: /* @__PURE__ */ jsx("img", { className: "h-72 object-contain", src: softSkills }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-5 rounded-3xl bg-background-700 col-span-1 h-full min-h-[300px] p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "flex font-Literata tracking-widest text-2xl md:text-3xl text-start", children: "Project Management Skills" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row flex-auto justify-center items-center px-3 space-x-8", children: /* @__PURE__ */ jsx("p", { className: "lg:text-xl", children: "I developed strong project management skills through both my company experience and university training, enabling me to prioritize tasks, manage time efficiently, and stay organized. I am proficient in using agile methods and handling client meetings effectively." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-5 rounded-3xl bg-background-800 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "flex font-Literata tracking-widest text-2xl md:text-3xl text-start", children: "Supplementary technical skills" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-auto justify-center items-center px-3 space-x-8 md:px-12", children: [
          windowSize === "lg" && /* @__PURE__ */ jsx("img", { className: "md:w-40 lg:w-52 xl:w-80", src: otherTechnos }),
          /* @__PURE__ */ jsx("p", { className: "lg:text-xl", children: "Through personal projects and university evaluations, I've gained a wide range of skills such as SwiftUI development, machine learning, deep learning, .NET development, Unity's environment, algorithm design, testing, embedded development, Docker, graph and mathematical theory, code optimization, and more." })
        ] })
      ] })
    ] })
  ] });
}
const meNoBg = "/assets/me-no-bg-hrtU3ylc.jpg";
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(DesktopWelcome, {}),
    /* @__PURE__ */ jsx(MobileWelcome, {})
  ] });
}
function MobileWelcome() {
  return /* @__PURE__ */ jsxs("div", { className: "flex lg:hidden flex-1 flex-col items-center py-8 min-h-screen", children: [
    /* @__PURE__ */ jsx("p", { className: "pb-3 flex font-Literata tracking-widest text-5xl text-center text-nowrap", children: "LUCIE B." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-auto flex-col space-y-5 px-8 max-h-3/4 max-w-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 m", children: [
        /* @__PURE__ */ jsx("img", { className: "object-cover overflow-hidden", src: me, alt: "me" }),
        /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full bg-black opacity-25" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "-mt-24 z-50 font-Literata tracking-widest text-5xl text-end", children: [
        "FULL",
        /* @__PURE__ */ jsx("br", {}),
        " STACK DEVELOPER"
      ] })
    ] })
  ] });
}
function DesktopWelcome() {
  return /* @__PURE__ */ jsxs("div", { className: "hgidden lg:flex w-screen min-h-screen max-h-screen items-center justify-center relative bg-[#DDECFB]", children: [
    /* @__PURE__ */ jsx("img", { className: "object-cover overflow-hidden h-screen max-w-9xl object-top", src: meNoBg, alt: "me" }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full text-background-400 pt-34 xl:pt-24 items-center justify-center", children: /* @__PURE__ */ jsxs("p", { className: "font-Literata italic text-7xl xl:text-[8rem] flex space-x-56 justify-center pl-34 xl:pl-56", children: [
      /* @__PURE__ */ jsx("span", { children: "Hey" }),
      " ",
      /* @__PURE__ */ jsx("span", { children: "There !" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute flex w-screen h-screen bottom-0 left-0 text-background-400 justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 p-14 items-end justify-between max-w-7xl", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-lg xl:text-xl flex px-5 py-3 justify-center text-start bg-white shadow-sm rounded-full items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-primary-500 rounded-full h-3 w-3 animate-pulse mr-2" }),
        " Open to new opportunities"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "xl:text-lg flex space-x-56 justify-center tracking-tight pr-5", children: [
        "Junior web developer skilled in",
        /* @__PURE__ */ jsx("br", {}),
        "React and Express, committed",
        /* @__PURE__ */ jsx("br", {}),
        "to ongoing growth."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute flex w-screen bottom-0 left-0 text-background-400 justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 p-14 items-end justify-between max-w-7xl", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-semibold text-7xl xl:text-8xl flex space-x-56 justify-center tracking-tight text-start", children: [
        "I AM ",
        /* @__PURE__ */ jsx("br", {}),
        "LUCIE"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "font-semibold text-3xl xl:text-5xl flex space-x-56 justify-center tracking-tight", children: [
        "FULL",
        /* @__PURE__ */ jsx("br", {}),
        "STACK",
        /* @__PURE__ */ jsx("br", {}),
        "DEVELOPER"
      ] })
    ] }) })
  ] });
}
function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 overflow-hidden", children: [
    /* @__PURE__ */ jsx(Welcome, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(AboutMe, {}),
    /* @__PURE__ */ jsx(Resume, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
function meta({}) {
  return [{
    title: "Lucie Bedouret"
  }, {
    name: "description",
    content: "Full Stack Dev"
  }];
}
const App2 = UNSAFE_withComponentProps(function App3() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App2,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bsp3Wy3U.js", "imports": ["/assets/chunk-NL6KNZEE-BVrBLjM9.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BC0Xsi2s.js", "imports": ["/assets/chunk-NL6KNZEE-BVrBLjM9.js"], "css": ["/assets/root-DqdpFmjr.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/App": { "id": "routes/App", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/App-B0Xp2GEs.js", "imports": ["/assets/chunk-NL6KNZEE-BVrBLjM9.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-8bd1937b.js", "version": "8bd1937b", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/App": {
    id: "routes/App",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
