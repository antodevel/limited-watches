import { Header } from '@/components/Header';
import { HeroExperience } from '@/components/HeroExperience';
import { OrbitalTimeline } from '@/components/OrbitalTimeline';
import { ProductDetails } from '@/components/ProductDetails';
import { ModelShowcase } from '@/components/ModelShowcase';
import { MacroDetails } from '@/components/MacroDetails';
import { CosmosTransition } from '@/components/CosmosTransition';
import { LimitedEdition } from '@/components/LimitedEdition';
import { FinalCTA } from '@/components/FinalCTA';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ExperienceMotion } from '@/components/ExperienceMotion';
export default function Home() { return <><a className="skip-link" href="#main">К содержанию</a><Header /><main id="main"><HeroExperience /><OrbitalTimeline /><ProductDetails /><ModelShowcase /><MacroDetails /><CosmosTransition /><LimitedEdition /><FinalCTA /></main><ScrollProgress /><ExperienceMotion /></>; }
