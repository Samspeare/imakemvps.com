import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { Database } from "lucide-react";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";
import { EmptyAgentState } from "@/components/EmptyAgentState";
import { useToast } from "@/components/ui/use-toast";
import { AgentsList } from "@/components/dashboard/AgentsList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UsageStats } from "@/components/dashboard/UsageStats";

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
  const [agents, setAgents] = useState([]);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
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

  useEffect(() => {
    if (user) {
      fetchAgents();
    }
  }, [user]);

  const fetchAgents = async () => {
    const { data, error } = await supabase
      .from("agents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch agents",
        variant: "destructive",
      });
    } else {
      setAgents(data || []);
    }
  };

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

  const handleToggleStatus = async (id: string, status: boolean) => {
    const { error } = await supabase
      .from("agents")
      .update({ status: status ? "active" : "inactive" })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update agent status",
        variant: "destructive",
      });
    } else {
      fetchAgents();
    }
  };

  if (!user) {
    return null;
  }

  if (agents.length === 0) {
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
        <UsageStats usageData={usageData} />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Your Agents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AgentsList
              agents={agents}
              onToggleStatus={handleToggleStatus}
              onEdit={(id) => navigate(`/agents/${id}/edit`)}
              onDelete={async (id) => {
                const { error } = await supabase
                  .from("agents")
                  .delete()
                  .eq("id", id);

                if (error) {
                  toast({
                    title: "Error",
                    description: "Failed to delete agent",
                    variant: "destructive",
                  });
                } else {
                  fetchAgents();
                }
              }}
            />
            <Button
              className="w-full mt-4"
              onClick={() => setShowOnboarding(true)}
            >
              Create New Agent
            </Button>
          </CardContent>
        </Card>

        <QuickActions
          onTestAgent={() => navigate("/test-agent")}
          onAddData={() => navigate("/add-data")}
        />
      </div>
      <OnboardingWizard open={showOnboarding} onClose={handleCloseOnboarding} />
    </div>
  );
};

export default Dashboard;