import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface Agent {
  id: string;
  name: string;
  status: string;
}

interface AgentsListProps {
  agents: Agent[];
  onToggleStatus: (id: string, status: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function AgentsList({ agents, onToggleStatus, onEdit, onDelete }: AgentsListProps) {
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
                onCheckedChange={(checked) => onToggleStatus(agent.id, checked)}
              />
            </TableCell>
            <TableCell className="space-x-2">
              <Button variant="outline" size="sm" onClick={() => onEdit(agent.id)}>
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(agent.id)}
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