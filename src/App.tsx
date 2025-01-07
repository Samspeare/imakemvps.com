import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

// Lazy load routes
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin/blog" element={
                  <ProtectedRoute>
                    <AdminBlog />
                  </ProtectedRoute>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;