# PlayWright Testing Codebase - AI Coding Instructions

## Project Overview
This is a **Playwright E2E testing suite** for testing web applications. Tests focus on verifying browser interactions across different elements and user workflows. The project uses TypeScript with Playwright's built-in locator APIs.

## Architecture & Structure

### Directory Layout
- **`tests/BrowserCommands/`** - Tests for core browser operations (navigation, page properties like title/URL)
- **`tests/BuiltInLocators/`** - Tests for element locators using Playwright's locator strategies (`getByText`, `getByTitle`, `getByLabel`, `getByRole`, `getByTestId`, `getByPlaceholder`)
- **`playwright.config.ts`** - Central configuration for test execution, reporter setup, browser projects, and timeout settings

### Key Configuration Patterns
- **Test directory**: `./tests` (testDir in config)
- **Reporter**: HTML reporter (`reporter: 'html'`) - results in `playwright-report/`
- **Timeout**: 60 seconds per test
- **Browser projects**: Currently only Chromium enabled (Firefox/Safari commented out)
- **Execution**: Fully parallel (`fullyParallel: true`), non-headless mode (`headless: false`) to observe browser actions
- **CI behavior**: Retries 2x on CI, single worker on CI to avoid race conditions

## Development Workflows

### Running Tests
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/BuiltInLocators/02_GetByText.spec.ts

# Run with UI mode
npx playwright test --ui

# Run in headed mode (already default - see browser window)
npx playwright test --headed
```

### Viewing Results
- HTML reports are generated automatically in `playwright-report/` directory
- Open `playwright-report/index.html` to view detailed test results with traces

## Conventions & Patterns

### Locator Strategy Hierarchy
Tests prioritize Playwright's built-in locator methods in this order:
1. **`getByRole()`** - For semantic elements (buttons, headings) - most accessible
2. **`getByText()`** - For elements matching text content; use `{ exact: true }` for precise matches
3. **`getByLabel()`** - For form inputs with labels
4. **`getByTitle()`** - For elements with title attributes
5. **`getByPlaceholder()`** - For input fields by placeholder text
6. **`getByTestId()`** - For explicit data-testid attributes (when available)
7. **`.nth()`** - When multiple elements match, select by index (e.g., `.nth(1)` for second match)

**Example from codebase** ([JobApplicationForm.spec.ts](tests/BuiltInLocators/JobApplicationForm.spec.ts#L6)):
```typescript
await page.getByText('Job Application Form').nth(1).click(); // Get second matching text
```

### Common Test Patterns

**Navigation + Assertion**
```typescript
await page.goto('https://example.com');
const title = await page.title();
await expect(title).toBe('Expected Title');
```

**Defensive Cookie Handling** ([02_GetByText.spec.ts](tests/BuiltInLocators/02_GetByText.spec.ts#L9-L12))
- Always check for cookie consent popups before proceeding:
```typescript
const acceptBtn = page.getByRole('button', { name: /accept|agree/i });
if (await acceptBtn.isVisible().catch(() => false)) {
  await acceptBtn.click();
}
```

**Visibility Validation**
- Use `await expect(element).toBeVisible()` before interactions to ensure element is ready
- Use `.catch(() => false)` for optional checks that may fail

**Waits & Timing**
- Use `page.waitForTimeout(5000)` for observation time (not for synchronization)
- Prefer built-in waits: `expect().toBeVisible()` or similar assertions

### Test File Naming
- **Pattern**: `NN_DescriptiveTitle.spec.ts` (zero-padded numbers, camelCase description)
- **Examples**: `01_VerifyPageTitle.spec.ts`, `02_GetByText.spec.ts`
- Grouping numbers indicate test progression within functional area

## Common Pitfalls & Best Practices

1. **test.only() cleanup** - Config has `forbidOnly: true` on CI; remove `.only` before committing
2. **Element visibility** - Chain `.isVisible()` with error handling for optional elements
3. **Text matching** - Use case-insensitive regex (`/accept|agree/i`) for resilient matching
4. **Multiple matching elements** - Use `.nth()` to disambiguate when `getByText()` returns multiple matches
5. **Assertions first** - Validate element existence/visibility before interactions

## Integration Points
- Tests target external websites (blogspot articles, mail.com) - no local backend required
- No API mocking needed; tests are pure E2E browser automation
- Reports integrate with CI via HTML reporter (viewable in artifacts)
