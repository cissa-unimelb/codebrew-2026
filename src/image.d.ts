declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module '*.svg?react' {
    import * as React from 'react';
    const Component: React.FC<React.SVGProps<SVGSVGElement>>;
    export default Component;
  }