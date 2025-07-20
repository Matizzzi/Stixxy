// styles/responsive.ts
import { css } from 'styled-components';
import type { Interpolation, RuleSet } from 'styled-components';

type BreakpointKeys = 'giant' | 'bigDesktop' | 'desktop' | 'tablet' | 'thone' | 'phablet' | 'phone' | 'tiny';

type Breakpoints = Record<BreakpointKeys, number>;

type MediaQueryFunction = {
  (styles: TemplateStringsArray, ...interpolations: Interpolation<object>[]): RuleSet<object>;
  <Props extends object>(styles: TemplateStringsArray, ...interpolations: Interpolation<Props>[]): RuleSet<Props>;
};

const sizes: Breakpoints = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
};

export const media = Object.entries(sizes).reduce((acc, [label, size]) => {
  const key = label as BreakpointKeys;
  
  const mediaFn: MediaQueryFunction = ((styles: TemplateStringsArray, ...interpolations: Interpolation<object>[]) => {
    return css`
      @media (max-width: ${size / 16}em) {
        ${css(styles, ...interpolations)}
      }
    `;
  }) as MediaQueryFunction;

  acc[key] = mediaFn;
  return acc;
}, {} as Record<BreakpointKeys, MediaQueryFunction>);