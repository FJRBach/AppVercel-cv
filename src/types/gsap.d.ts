import { Plugin } from "gsap";

declare module "gsap" {
  export interface GSAPStatic {
    registerPlugin(...plugins: Plugin[]): void;
    to(target: any, vars: any): any;
    from(target: any, vars: any): any;
    fromTo(target: any, fromVars: any, toVars: any): any;
    timeline(vars?: any): any;
    [key: string]: any;
  }

  const gsap: GSAPStatic;
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  import { Plugin } from "gsap";
  const ScrollTrigger: Plugin;
  export default ScrollTrigger;
}

declare module "gsap/ScrollToPlugin" {
  import { Plugin } from "gsap";
  const ScrollToPlugin: Plugin;
  export default ScrollToPlugin;
}
