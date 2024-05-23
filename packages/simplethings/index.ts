import { generateReactLibrary, generateSanitySchema, generateDocs } from "@simplethings/dave";
import path from "path";
import { Hero } from "./components/Hero.schema";
import { Button } from "./components/Button.schema";
import { Badge } from "./components/Badge.schema";
import { SectionHeader } from "./components/SectionHeader.schema";
import { CardWithDescription } from "./components/CardWithDescription.schema";
import { FeatureCard } from "./components/FeatureCard.schema";
import { Card } from "./components/Card.schema";
import { CardGrid } from "./components/CardGrid.schema";

const Components = [
  // Hero,
  Button,
  Badge,
  SectionHeader,
  CardWithDescription,
  FeatureCard,
  Card,
  CardGrid
]

const reactLibraryPath = path.join(__dirname, '..', 'ui-react', 'src');
const sanityLibraryPath = path.join(__dirname, '..', '..', 'apps', 'site', 'src', 'sanity');
const docsPath = path.join(__dirname, '..', '..', 'apps', 'docs');

generateReactLibrary(Components, reactLibraryPath);
generateSanitySchema(Components, sanityLibraryPath);
generateDocs(Components, docsPath);
