import React from 'react';

const ModelTiers = () => {
  return (
    <div className="pt-4">
      <h4 className="font-medium mb-3">Available Models</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="text-center">
            <h5 className="font-medium text-sm">Base Model</h5>
            <p className="text-xs text-muted-foreground">Essential features</p>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/6a070c02-2812-427c-8439-cfb954467929.png" 
              alt="Base Model" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-center">
            <h5 className="font-medium text-sm">Advanced Model</h5>
            <p className="text-xs text-muted-foreground">Enhanced capabilities</p>
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/1da7e08c-0d43-450a-88e8-1797c0407936.png" 
              alt="Advanced Model" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/5bf029b5-9496-4b77-b7b0-8f777dae840c.png" 
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