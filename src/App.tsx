import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import ExperienceOverview from "./pages/ExperienceOverviewPage";

import WorkExperienceOverview from "./pages/WorkExperience/WorkExperienceOverviewPage";
import MoogPage from "./pages/WorkExperience/MoogPage";
import TroyTutorsPage from "./pages/WorkExperience/TroyTutorsPage";

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

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience-overview" element={<ExperienceOverview />} />

        <Route
          path="/work-experience/overview"
          element={<WorkExperienceOverview />}
        />
        <Route path="/work-experience/moog" element={<MoogPage />} />
        <Route
          path="/work-experience/troy-tutors"
          element={<TroyTutorsPage />}
        />

        <Route
          path="/embedded-systems/overview"
          element={<EmbeddedSystemsOverviewPage />}
        />
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
      </Routes>
    </>
  );
}

export default App;
