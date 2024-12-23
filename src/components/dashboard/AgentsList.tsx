import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { webhookService } from "@/services/webhookService";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Agent {
  id: string;
  name: string;
  status: string;
  settings?: any;
}

interface AgentsListProps {
  agents: Agent[];
  onToggleStatus: (id: string, status: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function AgentsList({ agents, onToggleStatus, onEdit, onDelete }: AgentsListProps) {
  const { toast } = useToast();

  const handleToggleStatus = async (id: string, checked: boolean) => {
    const agent = agents.find(a => a.id === id);
    if (!agent) return;

    try {
      await webhookService.notifyAgentAction(
        checked ? 'update' : 'deactivate',
        id,
        agent.name,
        { status: checked ? 'active' : 'inactive' }
      );
      onToggleStatus(id, checked);
    } catch (error) {
      console.error('Failed to notify webhook:', error);
      toast({
        title: "Warning",
        description: "Status updated, but notification system encountered an error.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    const agent = agents.find(a => a.id === id);
    if (!agent) return;

    try {
      await webhookService.notifyAgentAction('delete', id, agent.name);
      onDelete(id);
    } catch (error) {
      console.error('Failed to notify webhook:', error);
      toast({
        title: "Warning",
        description: "Agent deleted, but notification system encountered an error.",
        variant: "destructive",
      });
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agent Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agents.map((agent) => (
          <TableRow key={agent.id}>
            <TableCell>{agent.name}</TableCell>
            <TableCell>
              <Switch
                checked={agent.status === "active"}
                onCheckedChange={(checked) => handleToggleStatus(agent.id, checked)}
              />
            </TableCell>
            <TableCell className="space-x-2">
              <Button variant="outline" size="sm" onClick={() => onEdit(agent.id)}>
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(agent.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}