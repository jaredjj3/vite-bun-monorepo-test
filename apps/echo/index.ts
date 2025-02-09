import { message } from '@foo/message';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${message}</h1>
`;
