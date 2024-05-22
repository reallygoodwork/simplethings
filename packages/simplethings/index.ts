import { generateReactLibrary, generateSanitySchema, generateDocs } from "@simplethings/anthropocene";
import path from "path";
import { Hero } from "./components/Hero.schema";
import { Button } from "./components/Button.schema";

const Components = [
  Hero,
  Button
]

const reactLibraryPath = path.join(__dirname, '..', 'ui-react', 'src');
const sanityLibraryPath = path.join(__dirname, '..', '..', 'apps', 'site', 'src', 'sanity');
const docsPath = path.join(__dirname, '..', '..', 'apps', 'docs');

generateReactLibrary(Components, reactLibraryPath);
generateSanitySchema(Components, sanityLibraryPath);
generateDocs(Components, docsPath);
