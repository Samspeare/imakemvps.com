import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentSettings } from "./AgentSettings";
import { TaskDefinitionForm } from "./TaskDefinitionForm";

export function EditAgentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgent();
  }, [id]);

  const fetchAgent = async () => {
    try {
      const { data: agent, error } = await supabase
        .from("agents")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      if (agent) {
        setName(agent.name);
        setSettings(agent.settings);
      }
    } catch (error) {
      console.error("Error fetching agent:", error);
      toast({
        title: "Error",
        description: "Failed to fetch agent details",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("agents")
        .update({
          name,
          settings,
        })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Agent updated successfully",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating agent:", error);
      toast({
        title: "Error",
        description: "Failed to update agent",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Edit Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Agent Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <TaskDefinitionForm
            initialValues={settings}
            onSubmit={(values) => setSettings({ ...settings, ...values })}
          />

          <AgentSettings
            initialValues={settings}
            onSubmit={(values) => setSettings({ ...settings, ...values })}
          />

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}