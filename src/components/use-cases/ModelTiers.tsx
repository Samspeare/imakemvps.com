import React from 'react';

const ModelTiers = () => {
  return (
    <div className="pt-4">
      <h4 className="font-medium mb-3">Available Models</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/4e231652-f71f-43a4-8046-ba5578610e24.png" 
              alt="Base Model Tutor" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center">
            <h5 className="font-medium text-sm">Base Model</h5>
            <p className="text-xs text-muted-foreground">Essential features</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/71dc72e0-2787-4bd9-856a-f17dde5d4f36.png" 
              alt="Advanced Model Tutor" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center">
            <h5 className="font-medium text-sm">Advanced Model</h5>
            <p className="text-xs text-muted-foreground">Enhanced capabilities</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/84d3916a-af2d-444a-9c02-057405ab5ebe.png" 
              alt="Ultra Model Tutor" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center">
            <h5 className="font-medium text-sm">Ultra Model</h5>
            <p className="text-xs text-muted-foreground">Maximum performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTiers;