# [SyncHome](https://synchome.vercel.app)

#### [SyncHome Server](https://github.com/sync-home/SyncHome-server)

## Smart Residential Building Management System

SyncHome is a Smart Residential Building Management System designed for efficient building management and enhanced living experiences.

## Key Features

- Device control dashboard - Centralized dashboard to control and monitor all connected smart devices.

- Real-time Monitoring - Live status updates for devices, showing whether they are on/off, their current settings, and any alerts.
- Smart Washing Machine - Secure access to the smart home system from anywhere in the world using a web browser.
- Camera Integration - Connect and manage smart cameras for surveillance and remote monitoring.
- Customizable User Profiles - Allow users to create personalized profiles with specific device access and preferences.
- Notification Center - System-generated alerts and notifications for events.
- Device Compatibility - Support for a wide range of smart devices and protocols, ensuring compatibility with various brands.
- Emergency Protocols - Pre-set emergency protocols for scenarios like fire or security breaches, triggering specific actions and alerts.
- Monthly Expenditure [Cart] - Create a [downloadable] voucher/invoice of a user for the month [washing, wifi, water, electricity, rent car/bike/cycle etc]
- Parking - Car / Bike / Cycle parking place booking facility.

## Used Technologies

- `Next-JS`: here we used next-js@14.1.0. Which is the famous full-stack framework for react-js.
- `react-hook-form`: to handle forms efficiently, we used react-hook-form@7.49.3.
- `swiper`: for carousel in hero section we used swiper@11.0.5 slider.
- `firebase`: for authentication we used firebase@10.7.2

and more. your can see our [package.json](./package.json) for details.

## Installation

### Clone the repository

```bash
git clone https://github.com/sync-home/SyncHome.git
```

### install dependencies and all used packages

if you didn't install `node` in your machine, install first from [here](https://nodejs.org)

```bash
cd SyncHome
npm i
```

### Set environment variables

The environment variable files should be named as `.env.local` only.
Here the env variables are as below (put them with your own corresponding values in .env.local file):

#### Firebase env variables

- `NEXT_PUBLIC_FIREBASE_APIKEY`
- `NEXT_PUBLIC_FIREBASE_AUTHDOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECTID`
- `NEXT_PUBLIC_FIREBASE_STORAGEBUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID`
- `NEXT_PUBLIC_FIREBASE_APPID`

### Use locally in development mode

After setting all, to start the development server:

```bash
npm run dev
```

This will run the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build

To create a production build:

```bash
npm run build
```

This will generate optimized production-ready files.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

- After updating in the project run the commands
```bash
git add .; git commit -m "[Your scope of working](specific doc or feature name): Your contribution in this scope"
```
After committing get latest changed from the repository
```bash
git pull origin development
```
If you found any conflict in your codes then correct the codes. After solving all confections run the command

```bash
git push
```

> `Be sure to work on the latest codes from repositories.`
## Project Structure

- `src/`: Contains the whole project.
- `src/app/`: All traceable routes (for server side rendering).
- `src/assets/`: Some assets like images.
- `src/components/`: for small ui components for client side rendering.
- `src/config/`: Contains the files for project configuration like firebase configuration.
- `src/Hooks/`: Contains all necessary hooks.
- `src/provider/`: Contains all type of providers like auth provider.
- `src/utils/`: Contains all types of pure reusable js functions.

### Development Workflow

1. **Directory for Development:**

   - Developers will work with only the `src` directory.

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

### Branch and Commit Rules

#### Primary Branches:

- `main`
- `development`

#### Secondary/Feature/Bugfix Branches:

- Feature: `feature/feature_name`
- Bugfix: `bugfix/name`

#### Commit Messages:

##### Commit Message Format:

- `[feat](notification): add Eid notification`
- `[fix](animation): fix rocket animation`
- `[docs](animation): rocket animation working docs`

##### Pull Request Message Format:

- `[feat](notification): add Eid notification`
- `[fix](payment): refactor Bkash payment page`
