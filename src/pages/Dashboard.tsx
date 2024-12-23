import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { User } from "@supabase/supabase-js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  Database,
  CreditCard,
  Bot,
  Play,
  Upload,
} from "lucide-react";
import { OnboardingWizard } from "@/components/OnboardingWizard";
import { EmptyAgentState } from "@/components/EmptyAgentState";
import { useToast } from "@/components/ui/use-toast";

// Placeholder data for the usage chart
const usageData = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 60 },
  { name: "Thu", value: 45 },
  { name: "Fri", value: 70 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAgentActive, setIsAgentActive] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasAgent, setHasAgent] = useState(false); // This would normally be fetched from your backend
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      // For demo purposes, we'll show the onboarding modal if it's the user's first visit
      const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
      if (!hasSeenOnboarding) {
        setShowOnboarding(true);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStartSetup = () => {
    setShowOnboarding(true);
  };

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("hasSeenOnboarding", "true");
    toast({
      title: "Welcome to your dashboard!",
      description: "You can start setting up your AI agent anytime from here.",
    });
  };

  if (!user) {
    return null;
  }

  if (!hasAgent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 animate-fade-up">
          Welcome, {user.email?.split("@")[0]}!
        </h1>
        <EmptyAgentState onStartSetup={handleStartSetup} />
        <OnboardingWizard open={showOnboarding} onClose={handleCloseOnboarding} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 animate-fade-up">
        Welcome, {user.email?.split("@")[0]}!
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {/* Usage Statistics Card */}
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Usage Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AI Interactions</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tokens Used</p>
                <p className="text-2xl font-bold">45.6K</p>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#9b87f5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Settings Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Plan</span>
              <span className="text-sm font-medium">Free Plan</span>
            </div>
            <Button className="w-full" variant="outline">
              Change Plan
            </Button>
            <Button className="w-full" variant="outline">
              Manage AI Agent
            </Button>
          </CardContent>
        </Card>

        {/* Agent Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Agent Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Status</span>
              <span
                className={`text-sm font-medium ${
                  isAgentActive ? "text-green-500" : "text-red-500"
                }`}
              >
                {isAgentActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Toggle Agent</span>
              <Switch
                checked={isAgentActive}
                onCheckedChange={setIsAgentActive}
              />
            </div>
            <Progress value={isAgentActive ? 100 : 0} />
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2"
              onClick={() => navigate("/test-agent")}
            >
              <Play className="h-6 w-6" />
              Test AI Agent
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2"
              onClick={() => navigate("/add-data")}
            >
              <Upload className="h-6 w-6" />
              Add Data
            </Button>
          </CardContent>
        </Card>

        {/* Support Card */}
        <Card
          className="hover:bg-accent/50 transition-colors cursor-pointer"
          onClick={() => navigate("/support")}
        >
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Need help? Check out our FAQs or contact support.
            </p>
          </CardContent>
        </Card>
      </div>
      <OnboardingWizard open={showOnboarding} onClose={handleCloseOnboarding} />
    </div>
  );
};

export default Dashboard;
