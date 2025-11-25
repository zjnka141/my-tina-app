import { defineConfig } from "tinacms";
import nextConfig from '../next.config'

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";
import Tag from "./collection/tag";

const config = defineConfig({
  // For self-hosted git backend
  contentApiUrlOverride: "/api/tina/gql", // Your custom GraphQL endpoint
  
  media: {
    // You can use local storage or implement your own media handler
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
    basePath: nextConfig.basePath?.replace(/^\//, '') || '',
  },
  schema: {
    collections: [Page, Post, Author, Tag, Global],
  },
});

export default config;