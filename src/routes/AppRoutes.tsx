import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import AuditPage from "../pages/AuditPage";
import CaseStudiesPage from "../pages/CaseStudiesPage";
import InsightsPage from "../pages/InsightsPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import AccessibilityPage from "../pages/AccessibilityPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="/audit" element={<AuditPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/accessibility" element={<AccessibilityPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
