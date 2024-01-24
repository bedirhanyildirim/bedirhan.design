
# Bedirhan Yildirim Portfolio

This is the repository of [bedirhan.design](https://bedirhan.design/) which is the portfolio of my personal projects.

Following technologies are used in this project:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Firebase Hosting](https://firebase.google.com/)

## Getting Started

### Project setup

First install the npm packages:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Firebase

First build the project:
```bash
npm run build
```

### Local Test

```bash
firebase emulators:start
```

### Deploy
```bash
firebase deploy --only hosting -m "Deploy message"
```


## To Do

### Features

- [x] Navigation
- [ ] Mobile navigation
- [x] Dark mode
- [ ] Projects Page
- [ ] Blog Page
- [ ] Bookmarks Page
- [x] Sport Page
- [ ] Display GPX data on map for running exercises
- [ ] Redesign mobile footer
- [ ] Integrate custom svg icons
- [ ] SEO [Next/Head](https://nextjs.org/docs/pages/api-reference/components/head)