import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const taskSchema = z.object({
  categories: z.string().min(1, "Please enter at least one category"),
  testEmail: z.string().optional(),
});

type TaskFormValues = z.infer<typeof taskSchema>;

interface TaskDefinitionFormProps {
  onSubmit: (values: TaskFormValues) => void;
  initialValues?: Partial<TaskFormValues>;
}

export function TaskDefinitionForm({ onSubmit, initialValues }: TaskDefinitionFormProps) {
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      categories: initialValues?.categories || "Work, Personal, Urgent",
      testEmail: initialValues?.testEmail || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Categories</FormLabel>
              <FormControl>
                <Input placeholder="Work, Personal, Urgent" {...field} />
              </FormControl>
              <FormDescription>
                Enter categories separated by commas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="testEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Test Email (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a sample email to test the agent..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This will help verify the agent's categorization
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save and Continue</Button>
      </form>
    </Form>
  );
}