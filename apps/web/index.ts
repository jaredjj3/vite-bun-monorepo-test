import { PACKAGES_MESSAGE } from '@foo/message';

const APPS_MESSAGE = 'Hello';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <ul>
    <li>apps: ${APPS_MESSAGE}</li>
    <li>packages: ${PACKAGES_MESSAGE}</li>
  </ul>
`;
