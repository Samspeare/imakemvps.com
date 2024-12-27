import React from 'react';

const ModelTiers = () => {
  return (
    <div className="pt-4">
      <h4 className="font-medium mb-3">Available Models</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/6cb48bc3-cf49-47d1-9de5-d15cd3a55a46.png" 
              alt="Base Model" 
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
              src="/lovable-uploads/439e7d1c-9f40-40e9-a3ef-a4cc57d8513c.png" 
              alt="Advanced Model" 
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
              src="/lovable-uploads/bd62268b-0918-4caa-8e23-195272483eb5.png" 
              alt="Ultra Model" 
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