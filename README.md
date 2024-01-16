
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
- [x] Dark mode
- [ ] Projects
- [ ] Blogs
- [ ] Bookmarks
- [x] Mobile footer
- [x] Mobile section titles
- [ ] [Next/Head](https://nextjs.org/docs/pages/api-reference/components/head)