import { generateReactLibrary, generateSanitySchema, generateDocs } from "@simplethings/anthropocene";
import path from "path";
import { badge } from "./components/badge";

const Components = [
  badge,
]

const reactLibraryPath = path.join(__dirname, '..', 'ui-react', 'src');
const sanityLibraryPath = path.join(__dirname, '..', '..', 'apps', 'site', 'src', 'sanity');
const docsPath = path.join(__dirname, '..', '..', 'apps', 'docs');

generateReactLibrary(Components, reactLibraryPath);
generateSanitySchema(Components, sanityLibraryPath);
generateDocs(Components, docsPath);
