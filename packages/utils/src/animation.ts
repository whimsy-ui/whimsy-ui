import { inBrowser } from './basic';
// 浏览器在下次重绘之前执行回调
export function raf(fn: FrameRequestCallback): number {
  return inBrowser ? requestAnimationFrame(fn) : -1;
}

export function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  }
}

// 2帧后执行
export function raf2(fn: FrameRequestCallback): void {
  raf(() => raf(fn));
}
