import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainLayout = lazy(() => import("pages/layout/MainLayout"));
const Home = lazy(() => import("pages/home/Home"));
const UnivInfo = lazy(() => import("pages/univInfo/UnivInfo"));
const Calendar = lazy(() => import("pages/calendar/Calendar"));
const Profile = lazy(() => import("pages/profile/Profile"));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="univ-info" element={<UnivInfo />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
