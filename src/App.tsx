import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import AdminBlog from "./pages/AdminBlog";
import BlogPostEditor from "./components/blog/BlogPostEditor";
import Contact from "./pages/Contact";
import UseCases from "./pages/UseCases";
import { EditAgentForm } from "./components/agent-setup/EditAgentForm";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <ProtectedRoute>
                  <AdminBlog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blog/new"
              element={
                <ProtectedRoute>
                  <BlogPostEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blog/:id/edit"
              element={
                <ProtectedRoute>
                  <BlogPostEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/agents/:id/edit"
              element={
                <ProtectedRoute>
                  <EditAgentForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;