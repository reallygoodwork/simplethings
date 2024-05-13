import fs from "fs";
import path from "path";
import { generateReactLibrary } from "./lib/react";
import { generateSanityTypes } from "./lib/sanity";
import { badge } from "./components/badge";
import { generateDocs } from "./lib/docs";

const reactComponents = [
  { name: 'badge', componentName: 'Badge', config: badge, path: 'badge.tsx' },
]

generateReactLibrary(reactComponents);
generateSanityTypes(reactComponents);
generateDocs(reactComponents);
