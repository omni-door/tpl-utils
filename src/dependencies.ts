import { npm_version } from './npm_version';
import type { STRATEGY } from './global.d';

export async function getDependency <T extends Record<string, string>>(strategy: STRATEGY, dependencies: T) {
  const latestVersions: Record<keyof T, any> = {} as any;
  if (strategy === 'latest') {
    const depKey = Object.keys(dependencies);
    await Promise.all(depKey.map(v => npm_version(v).then(ver => {
      ver = ver ? `^${ver}` : 'latest';
      latestVersions[v as keyof T] = ver;
    })));
  }

  return function (key: keyof T) {
    if (strategy === 'latest') {
      const version = latestVersions[key] || 'latest';
      return `${key}@${version}`;
    }

    return `${key}@${dependencies[key] || 'latest'}`;
  };
}

export function arr2str (arr: string[]) {
  return arr.join(' ').trim();
}

export function intersection (arr1: any[], arr2: any[]) {
  const set_2 = new Set(arr2);

  return Array.from(new Set(arr1.filter(v => set_2.has(v))));
}