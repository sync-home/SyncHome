
# SyncHome: Smart Residential Building Management System

**Contributors, Please Be Advised**

## Development Workflow

1. **Directory for Development:**
   - Developers will work with only the `app` directory.

2. **Branching Strategy:**
   - Feature/Bugfix branches will be created from the `main` branch.
   - Branch names should be simple and short. Avoid including sprint data (date, project name, etc.).

3. **Pull Requests:**
   - After being satisfied with the changes, developers will create a PR to the `development` branch (after deployment, tester will start testing).
   - The lead will review code changes and merge/close the PR.
   - Every single feature/bugfix branch will be deleted after a PR.

4. **ReadMe Edits:**
   - Only lead/Maintainer/operations-team will edit the primary README. The `app` directory can contain README(s) if needed.

5. **Dockerfile:**
   - Always run the Dockerfile locally before creating a PR to the development branch.
   - Before starting to code, make sure to pull the development branch.
   - Before pushing code to GitHub, make sure to pull the development branch.

## Branch and Commit Rules

### Primary Branches:
- `main`
- `development`

### Secondary/Feature/Bugfix Branches:
- Feature: `feature/feature_name`
- Bugfix: `bugfix/name`

### Commit Messages:

#### Commit Message Format:
- `[feat](notification): add Eid notification`
- `[fix](animation): fix rocket animation`
- `[docs](animation): rocket animation working docs`

#### Pull Request Message Format:
- `[feat](notification): add Eid notification`
- `[fix](payment): refactor Bkash payment page`

## Environment Specific URLs

### Backend:
- **Production:** —-----
- **Stage:** —--------

### Frontend:
- **Production:** —-----
- **Stage:** —-------

## App Environment Variables

- The environment variable files should be named as `.env` only.
- Examples:
  - `DATABASE_UAT="xxxx"`
  - `DATABASE_PROD="xxxx"`

