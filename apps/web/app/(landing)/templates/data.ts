type StrArrayToUnion<TArr extends readonly string[]> = TArr[number];

// sort these alphabetically
export const frameworks = ["Django", "Next.js", "Svelte", "Express"] as const;
export type Framework = StrArrayToUnion<typeof frameworks>;
// id -> label
export const languages = ["Typescript", "Python", "Golang", "Rust", "Elixir"] as const;
export type Language = StrArrayToUnion<typeof languages>;

export type Template = {
  title: string;
  description: string;

  /**
   * URL to the product or website
   */
  url?: string;
  /**
   * GitHub username or similar
   */
  authors: string[];

  /**
   * Url to the repository
   */
  repository: string;

  /**
   * Url to the image
   */
  image?: string;

  /**
   * Url to the raw readme
   */
  readmeUrl: string;

  language: Language;
  framework?: Framework;
};

export const templates: Record<string, Template> = {
  "nextjs-boilderplate": {
    title: "Next.js Boilerplate",
    description: "A simple Next.js app using Unkey to generate and verify API keys.",
    authors: ["chronark"],
    repository: "https://github.com/unkeyed/unkey/tree/main/examples/nextjs",
    readmeUrl: "https://raw.githubusercontent.com/unkeyed/unkey/main/examples/nextjs/README.md",
    language: "Typescript",
    framework: "Next.js",
  },
  "elixir-mix-supervision": {
    title: "Unkey + Elixir Mix Supervision",
    description: "A simple example of using the Unkey Elixir SDK.",
    authors: ["glamboyosa"],
    repository:
      "https://github.com/unkeyed/unkey/tree/main/examples/elixir_mix_supervision_example",
    readmeUrl:
      "https://raw.githubusercontent.com/unkeyed/unkey/main/examples/elixir_mix_supervision_example/README.md",
    language: "Elixir",
  },

  openstatus: {
    title: "OpenStatus.dev",
    description:
      "OpenStatus is an open source alternative to your current monitoring service with a beautiful status page.",
    authors: ["mxkaske", "thibaultleouay"],
    repository: "https://github.com/openstatusHQ/openstatus",
    image: "/templates/openstatus.png",
    readmeUrl: "https://raw.githubusercontent.com/openstatusHQ/openstatus/main/README.md",
    language: "Typescript",
    framework: "Next.js",
    url: "https://openstatus.dev?ref=unkey.dev",
  },
  "atridadl-atash": {
    title: "Atash",
    description: "A template to build type-safe full-stack serverless applications!",
    authors: ["atridadl"],
    image: "/templates/atash.png",
    repository: "https://github.com/atridadl/Atash",
    readmeUrl: "https://raw.githubusercontent.com/atridadl/Atash/main/README.md",
    url: "https://atash.atri.dad/",
    language: "Typescript",
    framework: "Next.js",
  },
  "uselessdev-iojinha": {
    title: "Iojinha",
    description: "A template to build type-safe full-stack serverless applications!",
    authors: ["uselessdev"],
    repository: "https://github.com/uselessdev/Iojinha",
    readmeUrl: "https://raw.githubusercontent.com/uselessdev/Iojinha/main/README.md",
    language: "Typescript",
    framework: "Next.js",
  },
  "atridadl-sprintpadawan": {
    title: "sprintpadawan",
    description: "A scrum poker tool that helps agile teams plan their sprints in real-time.",
    authors: ["atridadl"],
    image: "/templates/sprintpadawan.png",
    repository: "https://github.com/atridadl/sprintpadawan",
    readmeUrl: "https://raw.githubusercontent.com/atridadl/sprintpadawan/main/README.md",
    url: "https://sprintpadawan.dev",
    language: "Typescript",
    framework: "Next.js",
  },
  ocr: {
    title: "OCR as a Service",
    description: "OCR API as a Service using Unkey",
    authors: ["WilfredAlmeida"],
    repository: "https://github.com/WilfredAlmeida/unkey-ocr",
    readmeUrl: "https://raw.githubusercontent.com/WilfredAlmeida/unkey-ocr/main/README.md",
    language: "Typescript",
    url: "https://unkey.dev/blog/ocr-service",
    framework: "Express",
  },
};
