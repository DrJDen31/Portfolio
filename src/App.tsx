import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import ExperienceOverview from "./pages/ExperienceOverviewPage";
import CoursesOverview from "./pages/CoursesOverview";

import WorkExperienceOverview from "./pages/WorkExperience/WorkExperienceOverviewPage";
import MoogPage from "./pages/WorkExperience/MoogPage";
import TroyTutorsPage from "./pages/WorkExperience/TroyTutorsPage";
import WDPage from "./pages/WorkExperience/WD";

import BuckshotPage from "./pages/EmbeddedSystems/Buckshot";
import CapstonePage from "./pages/EmbeddedSystems/Capstone";
import EmbeddedSystemsOverviewPage from "./pages/EmbeddedSystems/EmbeddedSystemsOverviewPage";
import EmbeddedControlsMazePage from "./pages/EmbeddedSystems/EmbeddedControlsMazePage";
import IEDHandyHelperPage from "./pages/EmbeddedSystems/IEDHandyHelperPage";
import VTOLDronePage from "./pages/EmbeddedSystems/VTOLDronePage";

import MobileDevelopmentOverviewPage from "./pages/MobileDevelopment/MobileDevelopmentOverviewPage";
import AoraPage from "./pages/MobileDevelopment/AoraPage";
import SmartCalPage from "./pages/MobileDevelopment/SmartCalPage";
import FeatureRingPage from "./pages/MobileDevelopment/FeatureRingPage";
import MyFellowAmericansPage from "./pages/MobileDevelopment/MyFellowAmericansPage";

import UnrealEngineOverviewPage from "./pages/UnrealEngine/UnrealEngineOverviewPage";
import NPCAnalysisPage from "./pages/UnrealEngine/NPCAnalysisPage";
import ModuleZeroPage from "./pages/UnrealEngine/ModuleZeroPage";
import AdlibPage from "./pages/UnrealEngine/AdlibPage";

import InternetOfThingsOverviewPage from "./pages/InternetOfThings/InternetOfThingsOverviewPage";
import VerifiedClockInPage from "./pages/InternetOfThings/VerifiedClockInPage";

import CircuitDesignOverviewPage from "./pages/CircuitDesign/CircuitDesignOverviewPage";
import HeartbeatSensorPage from "./pages/CircuitDesign/HeartbeatSensorPage";

import CHDPage from "./pages/ComputerEngineering/CHD";

import ACGPage from "./pages/Research/ACG";
import CMPage from "./pages/Research/CM";

import NavBar from "./components/NavBar";

import "./App.css";
import ChineseRoomPage from "./pages/UnrealEngine/ChineseRoomPage";
import GenotypePage from "./pages/UnrealEngine/GenotypePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience-overview" element={<ExperienceOverview />} />
        <Route path="/courses-overview" element={<CoursesOverview />} />

        <Route
          path="/work-experience/overview"
          element={<WorkExperienceOverview />}
        />
        <Route path="/work-experience/moog" element={<MoogPage />} />
        <Route
          path="/work-experience/troy-tutors"
          element={<TroyTutorsPage />}
        />
        <Route path="/work-experience/western-digital" element={<WDPage />} />

        <Route
          path="/embedded-systems/overview"
          element={<EmbeddedSystemsOverviewPage />}
        />
        <Route path="/embedded-systems/buckshot" element={<BuckshotPage />} />
        <Route path="/embedded-systems/capstone" element={<CapstonePage />} />
        <Route
          path="/embedded-systems/embedded-controls-maze"
          element={<EmbeddedControlsMazePage />}
        />
        <Route
          path="/embedded-systems/ied-handy-helper"
          element={<IEDHandyHelperPage />}
        />
        <Route
          path="/embedded-systems/vtol-drone"
          element={<VTOLDronePage />}
        />

        <Route
          path="/mobile-development/overview"
          element={<MobileDevelopmentOverviewPage />}
        />
        <Route path="/mobile-development/aora" element={<AoraPage />} />
        <Route
          path="/mobile-development/smart-cal"
          element={<SmartCalPage />}
        />
        <Route
          path="/mobile-development/feature-ring"
          element={<FeatureRingPage />}
        />
        <Route
          path="/mobile-development/my-fellow-americans"
          element={<MyFellowAmericansPage />}
        />

        <Route
          path="/unreal-engine/overview"
          element={<UnrealEngineOverviewPage />}
        />
        <Route
          path="/unreal-engine/npc-analysis"
          element={<NPCAnalysisPage />}
        />
        <Route path="/unreal-engine/module-zero" element={<ModuleZeroPage />} />
        <Route path="/unreal-engine/adlib" element={<AdlibPage />} />
        <Route
          path="/unreal-engine/chinese-room"
          element={<ChineseRoomPage />}
        />
        <Route path="/unreal-engine/genotype" element={<GenotypePage />} />

        <Route
          path="/internet-of-things/overview"
          element={<InternetOfThingsOverviewPage />}
        />
        <Route
          path="/internet-of-things/verified-clock-in"
          element={<VerifiedClockInPage />}
        />

        <Route
          path="/circuit-design/overview"
          element={<CircuitDesignOverviewPage />}
        />
        <Route
          path="/circuit-design/heartbeat-sensor"
          element={<HeartbeatSensorPage />}
        />
        <Route path="/computer-engineering/risc-v" element={<CHDPage />} />

        <Route path="/research/realistic-snow" element={<ACGPage />} />
        <Route path="/research/cone-cell-model" element={<CMPage />} />
      </Routes>
    </>
  );
}

export default App;
