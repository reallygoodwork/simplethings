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
import { generateTypography, typography } from "./styles/typography";
import { FeatureRow } from "./components/FeatureRow.schema";
import { FeatureRowReversed } from "./components/FeatureRowReversed.schema";


const Components = [
  Hero,
  Button,
  Badge,
  SectionHeader,
  CardWithDescription,
  FeatureCard,
  Card,
  FeatureRow,
  FeatureRowReversed,
  // CardGrid
]

const reactLibraryPath = path.join(__dirname, '..', 'ui-react', 'src');
const sanityLibraryPath = path.join(__dirname, '..', '..', 'apps', 'site', 'src', 'sanity');
const docsPath = path.join(__dirname, '..', '..', 'apps', 'docs');

const typographyStyles = generateTypography(typography)

generateReactLibrary(Components, reactLibraryPath, typographyStyles);
generateSanitySchema(Components, sanityLibraryPath);
generateDocs(Components, docsPath);