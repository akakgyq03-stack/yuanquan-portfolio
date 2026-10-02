import { defineConfig, devices } from '@playwright/test'

const liveBaseURL = process.env.PLAYWRIGHT_BASE_URL?.replace(/\/$/, '')
const proxyServer = process.env.PLAYWRIGHT_PROXY
const localBaseURL = 'http://127.0.0.1:4173'

export default defineConfig({
  testDir: './tests',
  outputDir: '.impeccable/test-results',
  fullyParallel: false,
  workers: 2,
  timeout: 120_000,
  reporter: [['list']],
  use: {
    baseURL: liveBaseURL ?? localBaseURL,
    proxy: proxyServer ? { server: proxyServer } : undefined,
    trace: 'retain-on-failure',
  },
  webServer: liveBaseURL
    ? undefined
    : {
        command: 'npm run dev -- --host 127.0.0.1 --port 4173',
        url: localBaseURL,
        reuseExistingServer: true,
      },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium', viewport: { width: 390, height: 844 } } },
  ],
})
