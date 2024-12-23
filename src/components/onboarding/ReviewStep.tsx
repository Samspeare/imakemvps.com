interface ReviewStepProps {
  agentType: string;
  taskConfig: any;
  settings: any;
}

export function ReviewStep({ agentType, taskConfig, settings }: ReviewStepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Review Your Setup</h3>
      <div className="space-y-2">
        <p>
          <strong>Agent Type:</strong> {agentType}
        </p>
        {taskConfig && (
          <p>
            <strong>Categories:</strong> {taskConfig.categories}
          </p>
        )}
        {settings && (
          <>
            <p>
              <strong>Label Format:</strong> {settings.labelFormat}
            </p>
            <p>
              <strong>Auto-apply to unread:</strong>{" "}
              {settings.autoApplyToUnread ? "Yes" : "No"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}